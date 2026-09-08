/* ==========================================================================
   Ported blocks — behaviour.
   Only the process rail needs script: the yellow line grows to the reading
   position, every stage above it lights up, and the sticky plate swaps to
   the last stage reached. The six service cards are pure CSS hover.

   Lenis drives real scroll position here, so a passive window scroll
   listener is enough — no need to hook the smooth-scroll loop.
   ========================================================================== */
(function () {
  'use strict';

  var content = document.querySelector('.zf-block .services-content');
  var items = Array.prototype.slice.call(document.querySelectorAll('.zf-block .service-item'));
  var plate = document.querySelector('.zf-block .image-wraper img');
  if (!content || !items.length) return;

  var shots = items.map(function (item) { return item.getAttribute('data-shot'); });
  var queued = false;

  function measure() {
    queued = false;
    var box = content.getBoundingClientRect();
    var line = window.innerHeight * 0.6;

    var passed = items.map(function (item) {
      var r = item.getBoundingClientRect();
      return r.top < line && r.bottom > 0;
    });
    var last = passed.lastIndexOf(true);

    items.forEach(function (item, i) { item.classList.toggle('active', passed[i]); });

    if (last !== -1 && plate && shots[last] && plate.getAttribute('src') !== shots[last]) {
      plate.setAttribute('src', shots[last]);
    }

    var filled = Math.min(line - box.top, box.height);
    content.style.setProperty('--scroll-height',
      (box.top < line && box.bottom > 0) ? filled + 'px' : '0px');
  }

  function onScroll() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(measure);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  // The stage photographs load lazily, so the section's height can change
  // after the last scroll event. Without these the rail freezes at whatever
  // it measured before the images landed.
  window.addEventListener('load', onScroll);
  if (window.ResizeObserver) new ResizeObserver(onScroll).observe(content);

  measure();
})();
