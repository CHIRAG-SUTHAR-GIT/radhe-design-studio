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
    // This paints the browser's own chrome on a phone. Left warm, the bar
    // above and below the page reads as an orange-black next to a pure
    // black document.
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#000000' : '#ffffff');
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
  const head = $('.head');
  const onScrollChrome = () => {
    const past = scrollY > 40;
    nav?.classList.toggle('is-solid', past);
    // The brand needs the same backing as the nav, or page content scrolls
    // visibly through the wordmark.
    head?.classList.toggle('is-solid', past);
  };
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
  let heroSlides = null;
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

    /* Held while the hero is scrubbing open — a crossfade part-way through
       the pin leaves two rooms visible through each other. */
    heroSlides = {
      hold: () => clearInterval(timer),
      resume: () => start()
    };
  }

  /* ── Cinematic hero: pinned, scrubbed ────────────────────────────
     The reference holds its hero for ~2520px at scrub .8 while the image
     opens out to fill the viewport. Same idea here: the plate grows to
     full bleed, the wordmark scales past the viewer and a line rides in.

     Width and height are tweened in explicit pixels rather than CSS
     units — GSAP cannot interpolate a min() expression, and a silent
     no-op there is what stops the pin from ever being built. */
  const heroPin = $('.hero');
  const heroFigure = $('.hero__figure');
  if (heroPin && heroFigure && motion && innerWidth > 860) {
    gsap.timeline({
      scrollTrigger: {
        trigger: heroPin,
        start: 'top top',
        end: '+=2100',
        pin: true,
        pinSpacing: true,
        scrub: .8,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (!heroSlides) return;
          self.progress > .02 ? heroSlides.hold() : heroSlides.resume();
        }
      }
    })
      .fromTo(heroFigure,
        { width: () => heroFigure.getBoundingClientRect().width,
          height: () => heroFigure.getBoundingClientRect().height },
        { width: () => innerWidth,
          height: () => innerHeight,
          ease: 'power2.inOut' }, 0)
      .to($('.hero__mark'), { scale: 1.7, opacity: 0, ease: 'power1.in' }, 0)
      .to($('.hero__aside'), { opacity: 0, y: 40, ease: 'none' }, 0)
      .to($('.hero__caption'), { opacity: 0, ease: 'none' }, 0)
      .to($('.hero__scroll'), { opacity: 0, ease: 'none' }, 0)
      .fromTo($('.hero__reveal'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, ease: 'power2.out' }, .55);
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

  /* ── Services schedule ─────────────────────────────────────────────
     Cells arrive row by row and each glyph draws itself once, so the
     schedule reads as it is being written out. */
  const schedule = $('.svc__grid');
  if (schedule && motion) {
    const cards = $$('.svc__card', schedule);
    cards.forEach((card, index) => {
      const glyph = strokes(card.querySelector('.svc__glyph') || card);
      prime(glyph);

      gsap.fromTo(card, { opacity: 0, y: 26, filter: 'blur(7px)' }, {
        opacity: 1, y: 0, filter: 'blur(0px)', duration: .8, ease: 'power3.out',
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
    const ticks = $$('.proc__rail i', pin);
    const railFill = $('.proc__rail-fill', pin);
    const ticker = $$('.proc__ticker li', pin);
    const figOut = $('[data-step-fig]', pin);
    const diagrams = $$('.proc__diagram', pin);
    let active = -1;

    /* Painting the stage is separate from animating into it. `animate` is
       false when the state simply has to be correct — entering the section,
       or after a refresh — and true when a stage is genuinely changing.

       The panel tweens are killed before the active one is set visible.
       Without that, a fast reversal sets the panel to opacity 1 while its
       own fade-out is still running, and the old tween carries on pulling
       it back to 0: the photograph stays up while the note underneath it
       never appears, which is what happens at the first and last stage,
       where a reversal is most likely. */
    const paint = (index, animate, forward) => {
      panels.forEach((panel, i) => {
        const on = i === index;
        panel.setAttribute('aria-hidden', String(!on));
        if (!motion) return;
        const kids = $$(':scope > *, .proc__chips li', panel);
        if (on) {
          gsap.killTweensOf(panel);
          gsap.set(panel, { opacity: 1, y: 0, pointerEvents: 'auto' });
          if (animate) {
            // The note is re-typed line by line rather than faded as a block.
            gsap.fromTo(kids,
              { opacity: 0, y: forward ? 26 : -26 },
              { opacity: 1, y: 0, duration: .5, stagger: .055, ease: 'power3.out', overwrite: true });
          } else {
            gsap.killTweensOf(kids);
            gsap.set(kids, { opacity: 1, y: 0 });
          }
        } else if (animate) {
          gsap.to(panel, {
            opacity: 0, y: forward ? -22 : 22,
            duration: .4, ease: 'power2.in', pointerEvents: 'none', overwrite: true
          });
        } else {
          gsap.killTweensOf(panel);
          gsap.set(panel, { opacity: 0, pointerEvents: 'none' });
        }
      });

      // Each photograph settles out of a slight push-in and a little blur.
      diagrams.forEach((diagram, i) => {
        if (!motion) return;
        if (i === index) {
          if (animate) {
            gsap.fromTo(diagram,
              { opacity: 0, scale: 1.07, filter: 'blur(7px)' },
              { opacity: 1, scale: 1, filter: 'blur(0px)', duration: .85, ease: 'power2.out', overwrite: true });
          } else {
            gsap.killTweensOf(diagram);
            gsap.set(diagram, { opacity: 1, scale: 1, filter: 'blur(0px)' });
          }
        } else if (animate) {
          gsap.to(diagram, { opacity: 0, scale: 1.02, duration: .45, ease: 'power2.in', overwrite: true });
        } else {
          gsap.killTweensOf(diagram);
          gsap.set(diagram, { opacity: 0 });
        }
      });

      ticks.forEach((tick, i) => tick.classList.toggle('is-on', i === index));
      ticker.forEach((item, i) => item.classList.toggle('is-on', i === index));
      if (figOut) figOut.textContent = String(index + 1).padStart(2, '0');
    };

    const activate = (index) => {
      if (index === active) return;
      const forward = index > active;
      active = index;
      paint(index, true, forward);
    };

    if (motion) {
      // Stack the panels so only the active one is visible.
      gsap.set(panels, { position: 'absolute', inset: 0, opacity: 0 });
      gsap.set(diagrams, { opacity: 0 });
      activate(0);

      ScrollTrigger.create({
        trigger: '#process',
        // A card the height of its content is held centred rather than
        // stuck to the top of the screen under the header.
        start: 'center center',
        /* 55vh per stage, not 90. A comfortable phone swipe covers roughly
           half a screen, so one swipe should be one stage; at 90 it took
           two or three, which is what made the block feel stuck. */
        end: () => `+=${panels.length * 55}%`,
        pin: '#process-pin',
        pinSpacing: true,
        scrub: true,
        invalidateOnRefresh: true,
        /* Settle onto a stage once scrolling stops. The points are the
           quarters of the range, which land inside stages 1 to 5 rather
           than on the boundaries between them, and 0 and 1 are included so
           the section can still be entered and left cleanly.

           directional and inertia are both off on purpose: with them on, a
           fast flick projects its momentum forward and carries past a
           stage, which is the skipping this is meant to stop. Off, the
           nearest stage wins however hard the flick was. */
        snap: {
          snapTo: 1 / (panels.length - 1),
          duration: { min: .15, max: .45 },
          delay: .05,
          ease: 'power2.inOut',
          directional: false,
          inertia: false
        },
        onUpdate: (self) => {
          if (railFill) railFill.style.height = `${self.progress * 100}%`;
            activate(Math.min(panels.length - 1,
            Math.floor(self.progress * panels.length * .999)));
        },
        /* Entering the section must leave the current stage correct
           whatever happened on the way in — a stranded child tween can
           otherwise leave the note invisible under a visible photograph. */
        onEnter: () => paint(active, false),
        onEnterBack: () => paint(active, false),
        onRefresh: () => paint(active, false)
      });
    } else {
      // Without motion the stages simply stack as a readable list.
      pin.classList.add('is-static');
      panels.forEach((panel) => panel.setAttribute('aria-hidden', 'false'));
    }
  }

  /* ── Horizontal project rail ───────────────────────────────────── */
  const rail = $('#rail');
  if (rail) {
    const track = $('.rail__track', rail);
    const bar = $('.rail__bar i', rail);
    const figOut = $('[data-rail-fig]', rail);
    const totalOut = $('[data-rail-total]', rail);
    const allItems = $$('.rail__item', track);
    const requested = new URLSearchParams(location.search).get('filter');
    const validFilter = allItems.some((item) => item.dataset.cat === requested);

    allItems.forEach((item) => {
      item.classList.toggle('is-out', validFilter && item.dataset.cat !== requested);
    });

    const items = allItems.filter((item) => !item.classList.contains('is-out'));
    if (totalOut) totalOut.textContent = String(items.length).padStart(2, '0');
    const distance = () => Math.max(0, track.scrollWidth - innerWidth + 32);

    if (motion && distance() > 0) {
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
    } else if (track) {
      // Fall back to a normal swipeable strip.
      track.style.overflowX = 'auto';
      rail.style.overflow = 'visible';
    }
  }

  /* ── Quiet reveals for everything else ─────────────────────────── */
  if (motion) {
    $$('[data-reveal], .prose > *, .project__figures figure, .credentials, .contact__grid > *, .svc__intro > *, .svc__ref > *, .folio__head > *, .folio__foot > *')
      .forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 20 }, {
          opacity: 1, y: 0, duration: .8, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true }
        });
      });
  }

  /* ── Swept type ────────────────────────────────────────────────────
     The gradient behind the glyphs is dragged across the block as it
     rises, so the sentence resolves from accent through grey into ink.
     Because it is one gradient over the whole box, the transition cuts
     mid-word rather than snapping word by word. */
  const swept = $$('.sweep');
  if (swept.length && motion) {
    swept.forEach((el) => {
      gsap.fromTo(el,
        { backgroundPosition: '100% 0' },
        {
          backgroundPosition: '0% 0',
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            end: () => `bottom ${el.offsetHeight > innerHeight * .35 ? 55 : 45}%`,
            scrub: .55
          }
        });
    });
  } else {
    // Resolved state, so the copy is never left sitting in the accent.
    swept.forEach((el) => { el.style.backgroundPosition = '0% 0'; });
  }

  /* ── Blurred rise ──────────────────────────────────────────────────
     Blur is the expensive part, so it is scrubbed over a short band and
     dropped entirely on the smallest screens, where it costs the most
     and reads the least. */
  const risers = $$('[data-rise]');
  if (risers.length && motion) {
    const soft = innerWidth > 520 ? 9 : 6;
    risers.forEach((el) => {
      gsap.fromTo(el,
        { y: 34, opacity: 0, filter: `blur(${soft}px)` },
        {
          y: 0, opacity: 1, filter: 'blur(0px)',
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 95%', end: 'top 64%', scrub: .5 },
          onComplete() { el.style.willChange = 'auto'; }
        });
    });
  }

  /* ── Index filter chips ────────────────────────────────────────────
     Filtering changes the grid's height, so ScrollTrigger is told to
     remeasure once the plates have settled. */
  const chipRow = $('.chips');
  if (chipRow) {
    const chips = $$('.chip', chipRow);
    const plates = $$('.folio__item');
    const empty = $('.chips__empty');

    const apply = (want) => {
      let shown = 0;
      plates.forEach((plate) => {
        const on = want === 'all' || plate.dataset.cat === want;
        if (on) shown += 1;
        plate.classList.toggle('is-out', !on);
        if (on && motion) {
          gsap.fromTo(plate, { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: .5, ease: 'power2.out', overwrite: true });
        }
      });
      if (empty) empty.hidden = shown > 0;
      if (motion) requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    chips.forEach((chip) => chip.addEventListener('click', () => {
      chips.forEach((c) => {
        const on = c === chip;
        c.classList.toggle('is-on', on);
        c.setAttribute('aria-pressed', String(on));
      });
      apply(chip.dataset.filter);
    }));

  }

  /* ── Scroll stack ────────────────────────────────────────────────
     Sticky positioning does the stacking on its own; this only scales
     each card down as the cards above settle onto it, so the pile reads
     as depth rather than a flat overlap. */
  $$('.stack').forEach((stack) => {
    const slots = $$('.stack__slot', stack);
    const cards = slots.map((slot) => $('.stack__card', slot));
    if (!cards.length || !motion) return;

    const total = cards.length;
    ScrollTrigger.create({
      trigger: stack,
      start: 'top top',
      end: 'bottom bottom',
      scrub: .5,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        cards.forEach((card, i) => {
          // A card only starts shrinking once the scroll has reached it.
          const from = i / total;
          const t = Math.min(1, Math.max(0, (self.progress - from) / (1 - from || 1)));
          // The reference's own factor. The cap is inert at four cards and
          // only bites if more are added, where a flat factor compounds
          // into an unreadably small first card.
          const depth = Math.min((total - i) * 0.04, 0.18);
          gsap.set(card, { scale: 1 - t * depth });
        });
      }
    });
  });

  /* ── Counting figures ────────────────────────────────────────────
     The count runs again every time the block is entered — scrolling down
     onto it or back up onto it — rather than once per page load. Leaving
     the block resets the figure so the next entry has somewhere to count
     from. */
  const counters = $$('[data-count]');
  if (counters.length && motion) {
    counters.forEach((node) => {
      const target = Number(node.dataset.count) || 0;
      const suffix = node.dataset.suffix || '';
      const box = { v: 0 };
      const print = (n) => { node.textContent = String(n).padStart(2, '0') + suffix; };

      const run = gsap.fromTo(box, { v: 0 }, {
        v: target,
        duration: 1.4,
        ease: 'power2.out',
        paused: true,
        onUpdate() { print(Math.round(box.v)); }
      });

      ScrollTrigger.create({
        trigger: node,
        start: 'top 92%',
        end: 'bottom 8%',
        onEnter: () => run.restart(),
        onEnterBack: () => run.restart(),
        onLeave: () => print(0),
        onLeaveBack: () => print(0)
      });
    });
  } else {
    counters.forEach((n) => {
      n.textContent = String(n.dataset.count).padStart(2, '0') + (n.dataset.suffix || '');
    });
  }

  /* ── Services carousel ─────────────────────────────────────────────
     Only ever a carousel while the CSS says so, so the desktop schedule
     is never driven by this. It advances on its own, but stops the moment
     a reader touches it — an auto-rotating strip you cannot pause is a
     genuine accessibility failure, not a flourish. */
  const svcRail = $('.svc__grid');
  const svcNav = $('.svc__nav');
  if (svcRail && svcNav) {
    const cards = $$('.svc__card', svcRail);
    const bar = $('.svc__bar i', svcNav);
    const prev = $('[data-svc-prev]', svcNav);
    const next = $('[data-svc-next]', svcNav);
    const isRail = () => getComputedStyle(svcRail).overflowX !== 'visible';
    let timer = 0;
    let idle = 0;

    const index = () => {
      const step = cards[1] ? cards[1].offsetLeft - cards[0].offsetLeft : 1;
      return Math.round(svcRail.scrollLeft / step);
    };

    const paint = () => {
      const i = Math.min(cards.length - 1, Math.max(0, index()));
      if (bar) {
        bar.style.width = `${100 / cards.length}%`;
        bar.style.left = `${(100 / cards.length) * i}%`;
      }
      const end = svcRail.scrollLeft >= svcRail.scrollWidth - svcRail.clientWidth - 2;
      if (prev) prev.disabled = svcRail.scrollLeft <= 2;
      if (next) next.disabled = end;
    };

    const go = (dir) => {
      const step = cards[1] ? cards[1].offsetLeft - cards[0].offsetLeft : svcRail.clientWidth;
      svcRail.scrollBy({ left: step * dir, behavior: 'smooth' });
    };

    const stop = () => { clearInterval(timer); timer = 0; };
    const play = () => {
      stop();
      if (reduced || !isRail()) return;
      timer = setInterval(() => {
        if (document.hidden) return;
        const end = svcRail.scrollLeft >= svcRail.scrollWidth - svcRail.clientWidth - 2;
        if (end) svcRail.scrollTo({ left: 0, behavior: 'smooth' });
        else go(1);
      }, 3600);
    };

    // Any interaction pauses it; it only resumes after the reader has
    // been still for a while.
    const hold = () => {
      stop();
      clearTimeout(idle);
      idle = setTimeout(play, 7000);
    };

    prev?.addEventListener('click', () => { go(-1); hold(); });
    next?.addEventListener('click', () => { go(1); hold(); });
    svcRail.addEventListener('scroll', paint, { passive: true });
    ['pointerdown', 'touchstart', 'wheel', 'focusin'].forEach((ev) =>
      svcRail.addEventListener(ev, hold, { passive: true }));
    svcNav.addEventListener('mouseenter', stop);
    svcNav.addEventListener('mouseleave', () => { clearTimeout(idle); play(); });

    // Nothing runs while the schedule is off screen.
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => (entry.isIntersecting ? play() : stop()));
    }, { threshold: .25 }).observe(svcRail);

    addEventListener('resize', () => { paint(); isRail() ? play() : stop(); });
    paint();
  }

  /* ── Accordion ─────────────────────────────────────────────────── */
  $$('.acc__head').forEach((head) => {
    head.addEventListener('click', () => {
      const open = head.getAttribute('aria-expanded') === 'true';
      // One panel at a time, so the list never grows past a screenful.
      $$('.acc__head').forEach((other) => {
        if (other !== head) other.setAttribute('aria-expanded', 'false');
      });
      head.setAttribute('aria-expanded', String(!open));
      if (motion) setTimeout(() => ScrollTrigger.refresh(), 600);
    });
  });

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

  /* ── Smooth scroll, pointer devices only ───────────────────────────
     Measured against the reference: its touch flicks go from rest to full
     speed inside one frame, which is native momentum, not an interpolated
     scroll. Phones keep their own scrolling; mice and trackpads get the
     eased one, where it genuinely helps. */
  if (motion && window.Lenis && matchMedia('(pointer: fine)').matches) {
    const lenis = new Lenis({ duration: 1.05, wheelMultiplier: .9, smoothWheel: true, syncTouch: false });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    $('#menu-open')?.addEventListener('click', () => lenis.stop());
    $('#menu-close')?.addEventListener('click', () => lenis.start());
  }

  if (motion) {
    requestAnimationFrame(() => ScrollTrigger.refresh());
    if (document.fonts?.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
  }
})();
