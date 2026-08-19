/* ═══════════════════════════════════════════════════════════════════════
   RADHE DESIGN STUDIO
   Theme switching, the hero plate slideshow, the selected-work sheet, the
   scroll-scrubbed statement, the services schedule, the pinned five-stage
   process and the horizontal project rail.
   ═══════════════════════════════════════════════════════════════════════ */
(() => {
  'use strict';

  const root = document.documentElement;
  const body = document.body;
  const $ = (sel, scope = document) => scope.querySelector(sel);
  const $$ = (sel, scope = document) => [...scope.querySelectorAll(sel)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGSAP = Boolean(window.gsap && window.ScrollTrigger);
  const motion = hasGSAP && !reduced;

  if (motion) gsap.registerPlugin(ScrollTrigger);

  /* ── Ink helpers ───────────────────────────────────────────────────
     Every line drawing on the site is animated the same way: measure each
     stroke, hide it behind its own dash offset, then let it draw itself on. */
  const strokes = (scope) => $$('path, line, rect, circle, polyline', scope);

  const prime = (nodes) => nodes.forEach((node) => {
    const length = node.getTotalLength ? node.getTotalLength() : 0;
    if (!length) return;
    node.style.strokeDasharray = node.getAttribute('stroke-dasharray') || length;
    node.style.strokeDashoffset = length;
  });

  /* Draws a group on, respecting any dashed line style it already carries.
     `sel` may be a selector to run inside `scope`, or the element itself —
     note that scope.querySelectorAll(':scope') matches nothing, since the
     scoping root is not one of its own descendants. */
  const ink = (tl, scope, sel, opts = {}) => {
    const groups = typeof sel === 'string' ? $$(sel, scope)
      : Array.isArray(sel) ? sel : [sel];
    const nodes = groups.flatMap((g) => strokes(g));
    if (!nodes.length) return tl;
    return tl.to(nodes, {
      strokeDashoffset: 0,
      duration: opts.duration ?? .8,
      stagger: opts.stagger ?? .05,
      ease: opts.ease ?? 'power2.out'
    }, opts.at);
  };

  /* ── Theme ─────────────────────────────────────────────────────────
     The inline script in <head> already applied the stored choice; this
     only wires the switch and keeps the label honest. */
  const themeButton = $('#theme-toggle');
  const themeLabel = $('#theme-label');
  const meta = $('meta[name="theme-color"]');

  const paintTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    if (themeLabel) themeLabel.textContent = theme === 'dark' ? 'Dark' : 'Light';
    if (themeButton) themeButton.setAttribute('aria-label',
      `Switch to ${theme === 'dark' ? 'light' : 'dark'} colour scheme`);
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#16130f' : '#ececec');
  };

  paintTheme(root.getAttribute('data-theme') || 'light');

  themeButton?.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    paintTheme(next);
    try { localStorage.setItem('radhe-theme', next); } catch { /* private mode */ }
  });

  // Follow the OS only while the visitor has not made their own choice.
  matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', (event) => {
    let stored = null;
    try { stored = localStorage.getItem('radhe-theme'); } catch { /* ignore */ }
    if (!stored) paintTheme(event.matches ? 'dark' : 'light');
  });

  $$('[data-today]').forEach((node) => {
    node.textContent = new Date().toISOString().slice(0, 10);
  });

  /* ── Header ────────────────────────────────────────────────────── */
  const nav = $('#nav');
  const onScrollChrome = () => nav?.classList.toggle('is-solid', scrollY > 40);
  addEventListener('scroll', onScrollChrome, { passive: true });
  onScrollChrome();

  const drawer = $('#drawer');
  const setDrawer = (open) => {
    drawer?.classList.toggle('is-open', open);
    drawer?.setAttribute('aria-hidden', String(!open));
    body.classList.toggle('is-locked', open);
    $('#menu-open')?.setAttribute('aria-expanded', String(open));
  };
  $('#menu-open')?.addEventListener('click', () => setDrawer(true));
  $('#menu-close')?.addEventListener('click', () => setDrawer(false));
  addEventListener('keydown', (e) => { if (e.key === 'Escape') setDrawer(false); });

  /* ── Hero plate slideshow ──────────────────────────────────────── */
  const figure = $('#hero-figure');
  if (figure) {
    const plates = $$('img', figure);
    const indexOut = $('[data-slide-index]');
    const toggle = $('#slides-toggle');
    let current = 0;
    let timer = 0;
    let playing = !reduced;

    const show = (next) => {
      plates[current].classList.remove('is-active');
      current = (next + plates.length) % plates.length;
      plates[current].classList.add('is-active');
      if (indexOut) indexOut.textContent = String(current + 1).padStart(2, '0');
    };

    const start = () => {
      clearInterval(timer);
      if (!playing) return;
      timer = setInterval(() => show(current + 1), 4200);
    };

    toggle?.addEventListener('click', () => {
      playing = !playing;
      toggle.innerHTML = playing ? '&#10073;&#10073;' : '&#9654;';
      toggle.setAttribute('aria-label', playing ? 'Pause slideshow' : 'Play slideshow');
      start();
    });

    // Nothing runs while the hero is off screen.
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => (entry.isIntersecting ? start() : clearInterval(timer)));
    }, { threshold: .1 }).observe(figure);

    if (!playing && toggle) toggle.innerHTML = '&#9654;';
  }

  /* ── Selected work ─────────────────────────────────────────────────
     The sheet stays rigid — nothing slides out of its column. Each plate
     is uncovered from the bottom edge like a sheet pulled off a drawing,
     and the photograph drifts slowly inside its fixed frame. */
  const folio = $('.folio__grid');
  if (folio && motion) {
    $$('.folio__item', folio).forEach((item, index) => {
      const frame = $('.folio__frame', item);
      const image = $('img', item);
      const cap = $('.folio__cap', item);

      gsap.fromTo(frame,
        { clipPath: 'inset(100% 0% 0% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.15,
          ease: 'power3.inOut',
          delay: (index % 3) * .08,
          scrollTrigger: { trigger: item, start: 'top 88%', once: true }
        });

      gsap.fromTo(cap,
        { opacity: 0, y: 12 },
        {
          opacity: 1, y: 0, duration: .7, ease: 'power2.out',
          delay: .35 + (index % 3) * .08,
          scrollTrigger: { trigger: item, start: 'top 88%', once: true }
        });

      // The frame carries 18% more image than it shows, which is the room
      // this drift moves through.
      gsap.fromTo(image, { yPercent: -15 }, {
        yPercent: 0,
        ease: 'none',
        scrollTrigger: { trigger: item, start: 'top bottom', end: 'bottom top', scrub: .8 }
      });
    });
  }

  /* ── Scrubbed statement ────────────────────────────────────────
     Every word is a grey bar that wipes away to reveal the type, driven
     directly by scroll position rather than a timed animation. */
  const statement = $('#statement-text');
  if (statement && motion) {
    const bars = $$('.sw__bar', statement);
    gsap.set(bars, { transformOrigin: 'left center' });
    gsap.to(bars, {
      scaleX: 0,
      ease: 'none',
      stagger: { each: 1 },
      scrollTrigger: {
        trigger: '#statement',
        start: 'top 72%',
        end: 'bottom 78%',
        scrub: .5
      }
    });
  } else if (statement) {
    $$('.sw__bar', statement).forEach((bar) => bar.remove());
  }

  /* ── Services schedule ─────────────────────────────────────────────
     Cells arrive row by row and each glyph draws itself once, so the
     schedule reads as it is being written out. */
  const schedule = $('.svc__grid');
  if (schedule && motion) {
    const cards = $$('.svc__card', schedule);
    cards.forEach((card, index) => {
      const glyph = strokes(card.querySelector('.svc__glyph') || card);
      prime(glyph);

      gsap.fromTo(card, { opacity: 0, y: 26 }, {
        opacity: 1, y: 0, duration: .8, ease: 'power3.out',
        delay: (index % 4) * .07,
        scrollTrigger: {
          trigger: card,
          start: 'top 92%',
          once: true,
          onEnter: () => {
            ink(gsap.timeline({ delay: .2 + (index % 4) * .07 }).timeScale(1.6),
              null, card, { duration: .7, stagger: .06 });
          }
        }
      });
    });
  }

  /* ── Process: pinned, one stage at a time ──────────────────────── */
  const pin = $('#process-pin');
  if (pin) {
    const panels = $$('.proc__panel', pin);
    const diagrams = $$('.proc__diagram', pin);
    const ticks = $$('.proc__rail i', pin);
    const railFill = $('.proc__rail-fill', pin);
    const ticker = $$('.proc__ticker li', pin);
    const figOut = $('[data-step-fig]', pin);
    let active = -1;

    const drawn = new Set();

    /* Each diagram is built the way a drafter would make that particular
       drawing: the site is set out before the envelope lands on it, the plan
       gets its shell before its partitions and door swings, the wall detail
       assembles layer by layer, the scaffold climbs the building, and the
       finished room is furnished and then signed off. */
    const SEQUENCES = {
      // 01 · Discover — survey the plot, offset the setback, land the envelope,
      // then orient the sheet.
      0: (svg, tl) => {
        ink(tl, svg, '[data-part=dim]', { duration: .6 });
        ink(tl, svg, '[data-part=boundary]', { duration: 1.1, at: '-=.3' });
        ink(tl, svg, '[data-part=setback]', { duration: .9, at: '-=.5' });
        tl.from($$('[data-part=envelope]', svg), {
          scale: .55, opacity: 0, transformOrigin: '50% 50%',
          duration: .7, ease: 'back.out(1.6)'
        }, '-=.4');
        ink(tl, svg, '[data-part=envelope]', { duration: .6, at: '<' });
        ink(tl, svg, '[data-part=feature]', { duration: .5, at: '-=.3' });
        tl.from($$('[data-part=north]', svg), {
          rotate: -170, opacity: 0, transformOrigin: '163px 163px',
          duration: .9, ease: 'power3.out'
        }, '-=.4');
        ink(tl, svg, '[data-part=north]', { duration: .5, at: '<' });
      },

      // 02 · Compose — the shell is set out, openings are cut, the partitions
      // go in, then every door swings open on its hinge.
      1: (svg, tl) => {
        ink(tl, svg, '[data-part=shell]', { duration: 1.1 });
        ink(tl, svg, '[data-part=window]', { duration: .5, at: '-=.4' });
        ink(tl, svg, '[data-part=partitions]', { duration: .9, stagger: .09, at: '-=.2' });
        ink(tl, svg, '[data-part=stair]', { duration: .7, stagger: .04, at: '-=.4' });
        ink(tl, svg, '[data-part=fix]', { duration: .5, at: '-=.5' });

        // The leaf rotates on its hinge and the swing arc sweeps out behind it.
        const swings = $$('[data-part=swings] path', svg);
        const hinges = ['96px 128px', '96px 128px', '150px 116px', '150px 116px'];
        swings.forEach((node, i) => {
          tl.fromTo(node,
            { rotate: i % 2 ? 0 : -88, transformOrigin: hinges[i], opacity: 0 },
            { rotate: 0, opacity: 1, duration: .85, ease: 'power2.out' },
            i < 2 ? '-=.35' : '-=.65');
        });
        ink(tl, svg, '[data-part=swings]', { duration: .8, at: '<' });
        ink(tl, svg, '[data-part=dims]', { duration: .6, at: '-=.3' });
      },

      // 03 · Resolve — the build-up assembles layer by layer from the outside
      // in, the insulation quilt fills, then the leaders annotate it.
      2: (svg, tl) => {
        $$('[data-part=layer]', svg).forEach((layer, i) => {
          tl.fromTo(layer,
            { x: -26, opacity: 0 },
            { x: 0, opacity: 1, duration: .42, ease: 'power3.out' },
            i ? '-=.28' : 0);
          ink(tl, null, layer, { duration: .45, stagger: .02, at: '<' });
        });
        ink(tl, svg, '[data-part=quilt]', { duration: .85, ease: 'none', at: '-=.25' });
        ink(tl, svg, '[data-part=leaders]', { duration: .5, stagger: .07, at: '-=.5' });
        ink(tl, svg, '[data-part=dims]', { duration: .4, at: '-=.35' });
      },

      // 04 · Build — ground, then the building, then the scaffold climbs it one
      // lift at a time and the braces go on.
      3: (svg, tl) => {
        ink(tl, svg, '[data-part=ground]', { duration: .5, stagger: .015 });
        ink(tl, svg, '[data-part=building]', { duration: .8, stagger: .06, at: '-=.3' });
        $$('[data-part=lift]', svg).forEach((lift, i) => {
          tl.fromTo(lift,
            { scaleY: 0, opacity: 0, transformOrigin: '50% 100%' },
            { scaleY: 1, opacity: 1, duration: .34, ease: 'power2.out' },
            i ? '-=.19' : '-=.4');
          ink(tl, null, lift, { duration: .4, at: '<' });
        });
        ink(tl, svg, '[data-part=braces]', { duration: .55, stagger: .07, at: '-=.2' });
      },

      // 05 · Handover — the room is set out, the rug is laid, the furniture is
      // walked into place, styling lands and the sheet is signed off.
      4: (svg, tl) => {
        ink(tl, svg, '[data-part=room]', { duration: 1, stagger: .12 });
        ink(tl, svg, '[data-part=rug]', { duration: .8, at: '-=.4' });

        // Each piece slides in from the wall it sits against.
        const moves = [
          ['[data-part=sofa]', { y: -30 }],
          ['[data-part=seat]', { x: -26 }],
          ['[data-part=table]', { scale: .5, transformOrigin: '100px 120px' }]
        ];
        moves.forEach(([sel, from], i) => {
          const parts = $$(sel, svg);
          tl.from(parts, {
            ...from, opacity: 0, duration: .55, ease: 'power3.out'
          }, i ? '-=.35' : '-=.45');
          ink(tl, svg, sel, { duration: .55, stagger: .06, at: '<' });
        });

        tl.from($$('[data-part=dress]', svg), {
          scale: .4, opacity: 0, transformOrigin: '50% 100%',
          duration: .5, ease: 'back.out(2)'
        }, '-=.25');
        ink(tl, svg, '[data-part=dress]', { duration: .5, stagger: .06, at: '<' });

        // The sign-off tick is drawn last, in one stroke.
        ink(tl, svg, '[data-part=check]', { duration: .55, ease: 'power2.inOut', at: '-=.1' });
        tl.from($$('[data-part=check]', svg), {
          scale: .7, transformOrigin: '160px 20px', duration: .5, ease: 'back.out(2.4)'
        }, '<');
      }
    };

    const drawDiagram = (index) => {
      if (drawn.has(index) || !motion) return;
      drawn.add(index);
      const svg = $('svg', diagrams[index]);
      if (!svg) return;
      // Each sequence is choreographed at a comfortable reading pace, then
      // played back fast enough to finish while its stage is on screen.
      const tl = gsap.timeline().timeScale(2.3);
      const build = SEQUENCES[index];
      if (build) build(svg, tl);
      else ink(tl, null, svg);
    };

    const activate = (index) => {
      if (index === active) return;
      const forward = index > active;
      active = index;

      panels.forEach((panel, i) => {
        const on = i === index;
        panel.setAttribute('aria-hidden', String(!on));
        if (!motion) return;
        if (on) {
          gsap.set(panel, { pointerEvents: 'auto', opacity: 1, y: 0 });
          // The note is re-typed line by line rather than faded as a block.
          gsap.fromTo($$(':scope > *, .proc__chips li', panel),
            { opacity: 0, y: forward ? 26 : -26 },
            { opacity: 1, y: 0, duration: .5, stagger: .055, ease: 'power3.out', overwrite: true });
        } else {
          gsap.to(panel, {
            opacity: 0, y: forward ? -22 : 22,
            duration: .4, ease: 'power2.in', pointerEvents: 'none', overwrite: true
          });
        }
      });

      diagrams.forEach((diagram, i) => {
        if (!motion) return;
        gsap.to(diagram, { opacity: i === index ? 1 : 0, duration: .5, overwrite: true });
        gsap.to(diagram, { scale: i === index ? 1 : .96, duration: .7, ease: 'power2.out' });
      });

      ticks.forEach((tick, i) => tick.classList.toggle('is-on', i === index));
      ticker.forEach((item, i) => item.classList.toggle('is-on', i === index));
      if (figOut) figOut.textContent = String(index + 1).padStart(2, '0');
      drawDiagram(index);
    };

    if (motion) {
      // Stack the panels so only the active one is visible.
      gsap.set(panels, { position: 'absolute', inset: 0, opacity: 0 });
      gsap.set(diagrams, { opacity: 0 });

      // Prime every diagram so it can draw itself on first view.
      diagrams.forEach((diagram) => prime(strokes(diagram)));

      activate(0);

      ScrollTrigger.create({
        trigger: '#process',
        start: 'top top',
        end: () => `+=${panels.length * 90}%`,
        pin: '#process-pin',
        pinSpacing: true,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (railFill) railFill.style.height = `${self.progress * 100}%`;
          activate(Math.min(panels.length - 1,
            Math.floor(self.progress * panels.length * .999)));
        }
      });
    } else {
      // Without motion the stages simply stack as a readable list.
      pin.classList.add('is-static');
      panels.forEach((panel) => panel.setAttribute('aria-hidden', 'false'));
      diagrams.forEach((d, i) => { if (i) d.style.display = 'none'; });
    }
  }

  /* ── Horizontal project rail ───────────────────────────────────── */
  const rail = $('#rail');
  if (rail && motion) {
    const track = $('.rail__track', rail);
    const bar = $('.rail__bar i', rail);
    const figOut = $('[data-rail-fig]', rail);
    const items = $$('.rail__item', track);
    const distance = () => Math.max(0, track.scrollWidth - innerWidth + 32);

    gsap.to(track, {
      x: () => -distance(),
      ease: 'none',
      scrollTrigger: {
        trigger: rail,
        start: 'top top',
        end: () => `+=${distance()}`,
        pin: true,
        scrub: .6,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (bar) bar.style.width = `${Math.max(4, self.progress * 100)}%`;
          if (figOut) {
            const index = Math.min(items.length, Math.floor(self.progress * items.length) + 1);
            figOut.textContent = String(index).padStart(2, '0');
          }
        }
      }
    });
  } else if (rail) {
    // Fall back to a normal swipeable strip.
    const track = $('.rail__track', rail);
    if (track) { track.style.overflowX = 'auto'; rail.style.overflow = 'visible'; }
  }

  /* ── Quiet reveals for everything else ─────────────────────────── */
  if (motion) {
    $$('[data-reveal], .prose > *, .project__figures figure, .credentials, .contact__grid > *, .cta > *, .svc__intro > *, .svc__ref > *, .folio__head > *, .folio__foot > *')
      .forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 20 }, {
          opacity: 1, y: 0, duration: .8, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true }
        });
      });
  }

  /* ── Floating corner note ──────────────────────────────────────── */
  const note = $('.corner-note');
  if (note) {
    const paint = () => note.classList.toggle('is-on', scrollY > 260);
    addEventListener('scroll', paint, { passive: true });
    paint();
  }

  /* ── Contact form ──────────────────────────────────────────────── */
  $('#contact-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const note = $('.form__note', form);
    if (note) note.textContent = 'Thank you — we will reply within two working days.';
    form.reset();
  });

  if (motion) {
    requestAnimationFrame(() => ScrollTrigger.refresh());
    if (document.fonts?.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
  }
})();
