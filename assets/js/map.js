/* ==========================================================================
   Studio map
   A dark vector map of Gota with the major roads lit, standing in for the
   Google embed — that embed renders Google's own light styling inside an
   iframe and cannot be themed from outside it at all.

   MapLibre + CARTO's dark basemap: no API key, no billing account, and the
   road geometry is real OpenStreetMap data rather than a drawn-on line.
   ========================================================================== */
(function () {
  'use strict';

  var STUDIO = [72.538706, 23.114382];   // lng, lat — Money Plant High Street
  var NEON = '#3FA9FF';

  /* ── Live local time, the honest version of the dashboard clock ─────── */
  function startClock() {
    var el = document.getElementById('map-clock');
    if (!el) return;
    var tick = function () {
      el.textContent = new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Kolkata'
      });
    };
    tick();
    setInterval(tick, 20000);
  }

  /* ── Live temperature. Open-Meteo needs no key; if it is unreachable the
        card simply stays hidden rather than showing an invented figure. ── */
  function loadWeather() {
    var wrap = document.getElementById('map-weather');
    var out = document.getElementById('map-temp');
    if (!wrap || !out) return;

    fetch('https://api.open-meteo.com/v1/forecast?latitude=23.1144&longitude=72.5387'
          + '&current=temperature_2m&timezone=Asia%2FKolkata')
      .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
      .then(function (d) {
        var t = d && d.current && d.current.temperature_2m;
        if (typeof t !== 'number') return;
        out.textContent = Math.round(t) + '°C';
        wrap.hidden = false;
      })
      .catch(function () { /* no reading, no card */ });
  }

  /* ── The map ────────────────────────────────────────────────────────── */
  function buildMap() {
    var host = document.getElementById('studio-map');
    if (!host || !window.maplibregl) return;

    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var fine = window.matchMedia('(pointer: fine)').matches;

    var map = new maplibregl.Map({
      container: host,
      style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
      center: STUDIO,
      zoom: 14.1,
      pitch: reduced ? 0 : 48,
      bearing: reduced ? 0 : -18,
      attributionControl: { compact: true },

      /* cooperativeGestures kept the page's scroll wheel, but it earned that
         by printing "Use Ctrl + scroll to zoom" across the map. The wheel is
         simply given back to the page instead: nothing to explain, so nothing
         to print. Zoom stays on the + / - control, and pinch still works.

         Dragging is for pointers only. Left on, one finger would pan the map
         on a phone and the page would stop scrolling under it. */
      scrollZoom: false,
      dragPan: fine,
      dragRotate: !reduced && fine
    });

    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'bottom-right');

    // The band now takes its height from the form beside it, so the container
    // can change size well after the map was built — when fonts land, or when
    // a validation message pushes the form taller. Resizing on window alone
    // would miss all of that and leave the canvas the wrong size.
    if (window.ResizeObserver) {
      new ResizeObserver(function () { map.resize(); }).observe(host);
    }

    map.on('load', function () {
      // Light the through-roads. These are real OSM ways restyled, not a
      // route drawn over the top.
      var lit = [
        ['road_mot_fill_noramp', 2.4], ['road_mot_fill_ramp', 1.6],
        ['road_trunk_fill_noramp', 2.2], ['road_trunk_fill_ramp', 1.5],
        ['road_pri_fill_noramp', 1.8], ['road_pri_fill_ramp', 1.3],
        ['road_sec_fill_noramp', 1.2]
      ];
      lit.forEach(function (pair) {
        var id = pair[0];
        if (!map.getLayer(id)) return;
        map.setPaintProperty(id, 'line-color', NEON);
        map.setPaintProperty(id, 'line-opacity', 0.95);
        map.setPaintProperty(id, 'line-blur', 0.6);
      });

      // Their casings become the glow around the lit roads.
      ['road_mot_case_noramp', 'road_trunk_case_noramp', 'road_pri_case_noramp']
        .forEach(function (id) {
          if (!map.getLayer(id)) return;
          map.setPaintProperty(id, 'line-color', 'rgba(63,169,255,.30)');
          map.setPaintProperty(id, 'line-blur', 3);
        });

      if (map.getLayer('water')) {
        map.setPaintProperty('water', 'fill-color', '#08131f');
      }

      // The studio itself.
      var pin = document.createElement('div');
      pin.className = 'map__marker';
      pin.innerHTML = '<span class="map__marker-ring"></span><span class="map__marker-dot"></span>';
      new maplibregl.Marker({ element: pin, anchor: 'center' })
        .setLngLat(STUDIO)
        .addTo(map);

      host.classList.add('is-ready');
    });

    map.on('error', function () { host.classList.add('is-failed'); });
  }

  function boot() {
    startClock();
    loadWeather();
    buildMap();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();

/* ==========================================================================
   Enquiry form
   Deliberately not #contact-form: studio.js binds that id and only fakes a
   thank-you without sending anything. This one actually posts to
   contact-handler.php and reports what came back.
   ========================================================================== */
(function () {
  'use strict';

  var form = document.getElementById('studio-enquiry');
  if (!form) return;

  var note = form.querySelector('.enq__note');
  var button = form.querySelector('.enq__send');
  var EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  function say(text, kind) {
    if (!note) return;
    note.textContent = text;
    note.className = 'enq__note' + (kind ? ' is-' + kind : '');
  }

  function check() {
    var bad = null;
    form.querySelectorAll('[required]').forEach(function (field) {
      var value = (field.value || '').trim();
      var wrong = !value || (field.type === 'email' && !EMAIL.test(value));
      field.parentNode.classList.toggle('is-bad', wrong);
      if (wrong && !bad) bad = field;
    });
    return bad;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var bad = check();
    if (bad) {
      bad.focus();
      return say('Please complete the marked fields.', 'bad');
    }

    say('Sending…');
    if (button) button.disabled = true;

    fetch(form.getAttribute('action'), { method: 'POST', body: new FormData(form) })
      .then(function (r) {
        return r.json().then(function (d) { return { ok: r.ok, data: d }; })
                       .catch(function () { return { ok: r.ok, data: null }; });
      })
      .then(function (res) {
        if (res.ok && res.data && res.data.success) {
          form.reset();
          form.querySelectorAll('.is-bad').forEach(function (el) { el.classList.remove('is-bad'); });
          say(res.data.message || 'Thank you — we reply within two working days.', 'good');
        } else {
          say((res.data && res.data.message)
              || 'That did not send. Please email radhesuthar1107@gmail.com.', 'bad');
        }
      })
      .catch(function () {
        // Opening the page from disk, or PHP not running, lands here.
        say('That did not send. Please email radhesuthar1107@gmail.com.', 'bad');
      })
      .then(function () { if (button) button.disabled = false; });
  });

  form.addEventListener('input', function (event) {
    event.target.parentNode.classList.remove('is-bad');
  });
})();
