/* ═══════════════════════════════════════════════════════════════════════
   RADHE DESIGN STUDIO
   Theme switching, the hero plate slideshow, column parallax, the
   scroll-scrubbed statement, the pinned services sequence and the
   horizontal project rail.
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

  /* ── Smooth scroll ──────────────────────────────────────────────
     Lenis drives scroll, and ScrollTrigger is told to update from its
     tick rather than the native scroll event, so pins and scrubs stay
     locked to the smoothed position instead of lagging a frame behind. */
  let lenis = null;
  if (motion && window.Lenis) {
    lenis = new Lenis({ duration: 1.05, smoothWheel: true, touchMultiplier: 1.6 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

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
    if (lenis) open ? lenis.stop() : lenis.start();
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

  /* ── Column parallax on the project grid ───────────────────────── */
  if (motion) {
    $$('.grid__col').forEach((col, index) => {
      const distance = [-90, 40, -140, 70][index % 4];
      gsap.fromTo(col, { y: -distance * .5 }, {
        y: distance * .5,
        ease: 'none',
        scrollTrigger: { trigger: '.grid', start: 'top bottom', end: 'bottom top', scrub: 1 }
      });
    });

    $$('.plate').forEach((plate) => {
      gsap.fromTo(plate, { opacity: 0, y: 34 }, {
        opacity: 1, y: 0, duration: .9, ease: 'power2.out',
        scrollTrigger: { trigger: plate, start: 'top 92%', once: true }
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

  /* ── Services: pinned, one panel at a time ─────────────────────── */
  const pin = $('#services-pin');
  if (pin) {
    const panels = $$('.services__panel', pin);
    const diagrams = $$('.services__diagram', pin);
    const ticks = $$('.services__rail i', pin);
    const figOut = $('[data-service-fig]', pin);
    let active = -1;

    const drawn = new Set();

    /* Each diagram is built the way a drafter would make that particular
       drawing: the site is set out before the envelope lands on it, the plan
       gets its shell before its partitions and door swings, the wall detail
       assembles layer by layer, and the scaffold climbs the building. */
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

    const SEQUENCES = {
      // 01 · Feasibility — survey the plot, offset the setback, land the envelope,
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

      // 02 · Design & Planning — the shell is set out, openings are cut, the
      // partitions go in, then every door swings open on its hinge.
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

      // 03 · Technical Design — the build-up assembles layer by layer from the
      // outside in, the insulation quilt fills, then the leaders annotate it.
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

      // 04 · Construction — ground, then the building, then the scaffold climbs
      // it one lift at a time and the braces go on.
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
      }
    };

    const drawDiagram = (index) => {
      if (drawn.has(index) || !motion) return;
      drawn.add(index);
      const svg = $('svg', diagrams[index]);
      if (!svg) return;
      // Each sequence is choreographed at a comfortable reading pace, then
      // played back fast enough to finish while its panel is on screen.
      const tl = gsap.timeline().timeScale(2.3);
      const build = SEQUENCES[index];
      if (build) build(svg, tl);
      else ink(tl, null, svg);
    };

    const activate = (index) => {
      if (index === active) return;
      active = index;
      panels.forEach((panel, i) => {
        const on = i === index;
        panel.setAttribute('aria-hidden', String(!on));
        if (motion) {
          gsap.to(panel, {
            opacity: on ? 1 : 0,
            y: on ? 0 : 26,
            duration: .55,
            ease: 'power2.out',
            pointerEvents: on ? 'auto' : 'none'
          });
        }
      });
      diagrams.forEach((diagram, i) => {
        if (motion) gsap.to(diagram, { opacity: i === index ? 1 : 0, duration: .5 });
      });
      ticks.forEach((tick, i) => tick.classList.toggle('is-on', i === index));
      if (figOut) figOut.textContent = String(index + 1).padStart(2, '0');
      drawDiagram(index);
    };

    if (motion) {
      // Stack the panels so only the active one is visible.
      const stack = $('.services__panel-stack', pin);
      gsap.set(stack, { position: 'relative', minHeight: '22rem' });
      gsap.set(panels, { position: 'absolute', inset: 0, opacity: 0, y: 26 });
      gsap.set(diagrams, { opacity: 0 });

      // Prime every diagram so it can draw itself on first view.
      diagrams.forEach((diagram) => prime(strokes(diagram)));

      activate(0);

      ScrollTrigger.create({
        trigger: '#services',
        start: 'top top',
        end: () => `+=${panels.length * 90}%`,
        pin: '#services-pin',
        pinSpacing: true,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          activate(Math.min(panels.length - 1,
            Math.floor(self.progress * panels.length * .999)));
        }
      });
    } else {
      // Without motion the services simply stack as a readable list.
      pin.style.height = 'auto';
      pin.style.display = 'block';
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
    $$('[data-reveal], .prose > *, .project__figures figure, .credentials, .contact__grid > *, .cta > *')
      .forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 20 }, {
          opacity: 1, y: 0, duration: .8, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true }
        });
      });
  }


  /* ═══════════════════════════════════════════════════════════════
     PINNED, SCRUBBED HERO
     The hero holds while the plate opens out and the wordmark drifts
     apart — the reference pins its hero image for ~2500px at scrub .8.
     ═══════════════════════════════════════════════════════════════ */
  const heroPin = $('.hero');
  if (heroPin && motion) {
    gsap.timeline({
      scrollTrigger: {
        trigger: heroPin,
        start: 'top top',
        end: '+=2200',
        pin: true,
        scrub: .8,
        invalidateOnRefresh: true
      }
    })
      .to($('.hero__figure'), { scale: 1.5, ease: 'none' }, 0)
      .to($('.hero__plate'), { yPercent: -6, ease: 'none' }, 0)
      .to($('.hero__mark'), { scale: 1.28, opacity: 0, ease: 'none' }, 0)
      .to($('.hero__aside'), { yPercent: 40, opacity: 0, ease: 'none' }, 0)
      .to($('.hero__caption'), { opacity: 0, ease: 'none' }, 0)
      .to($('.hero__scroll'), { opacity: 0, ease: 'none' }, 0);
  }

  /* ═══════════════════════════════════════════════════════════════
     SCROLL-SCRUBBED FRAME SEQUENCE
     120 stills of a full turn, drawn to a canvas. The reference scrubs
     a <video> playhead; a frame sequence seeks exactly instead of
     depending on how far apart the encoder put its keyframes.
     ═══════════════════════════════════════════════════════════════ */
  const seqCanvas = $('#seq-canvas');
  if (seqCanvas && motion) {
    const FRAMES = 120;
    const ctx = seqCanvas.getContext('2d');
    const frames = new Array(FRAMES);
    const frameOut = $('[data-seq-frame]');
    const degOut = $('[data-seq-deg]');
    const bar = $('[data-seq-bar]');
    let loaded = 0;
    let current = -1;

    const paint = (index) => {
      const i = Math.max(0, Math.min(FRAMES - 1, Math.round(index)));
      const img = frames[i];
      if (i === current || !img || !img.complete || !img.naturalWidth) return;
      current = i;
      ctx.drawImage(img, 0, 0, seqCanvas.width, seqCanvas.height);
      if (frameOut) frameOut.textContent = String(i + 1).padStart(3, '0');
      if (degOut) degOut.textContent = Math.round(i / FRAMES * 360) + '°';
    };

    // Nothing downloads until the section is near; the first frame to arrive
    // is painted straight away so the canvas is never blank.
    let started = false;
    const load = () => {
      if (started) return;
      started = true;
      for (let i = 0; i < FRAMES; i += 1) {
        const img = new Image();
        img.decoding = 'async';
        img.onload = () => {
          loaded += 1;
          if (bar) bar.style.width = (loaded / FRAMES) * 100 + '%';
          if (current < 0) paint(0);
        };
        img.src = 'assets/seq/turn-' + String(i).padStart(3, '0') + '.webp';
        frames[i] = img;
      }
    };

    new IntersectionObserver((entries, obs) => {
      if (entries.some((e) => e.isIntersecting)) { load(); obs.disconnect(); }
    }, { rootMargin: '150% 0px' }).observe(seqCanvas);

    const state = { frame: 0 };
    gsap.to(state, {
      frame: FRAMES - 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '#seq',
        start: 'top top',
        end: '+=2600',
        pin: '#seq-pin',
        scrub: .6,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          paint(state.frame);
          if (bar && loaded === FRAMES) bar.style.width = self.progress * 100 + '%';
        }
      }
    });
  }

  /* ═══════════════════════════════════════════════════════════════
     FLIP FEATURE CARD
     First / last / invert / play by hand: measure the card closed and
     open, then express the closed state as an inverting transform and
     play the difference back under scroll.
     ═══════════════════════════════════════════════════════════════ */
  const flipCard = $('#flip-card');
  if (flipCard && motion) {
    const frame = $('.flip__frame', flipCard);
    const contents = $$('.flip__body, .flip__frame img', flipCard);
    let m = null;

    const measure = () => {
      gsap.set([flipCard, ...contents], { clearProps: 'transform' });
      flipCard.classList.remove('is-open');
      const closed = flipCard.getBoundingClientRect();
      flipCard.classList.add('is-open');
      const open = flipCard.getBoundingClientRect();
      return {
        scaleX: closed.width / open.width,
        scaleY: closed.height / open.height,
        x: closed.left - open.left,
        y: closed.top - open.top
      };
    };

    /* The card sits in its open state and is scaled down to look closed, so
       the text reflows once at measure time rather than on every frame. */
    const apply = (p) => {
      if (!m) return;
      const e = 1 - Math.pow(1 - p, 3);
      const sx = m.scaleX + (1 - m.scaleX) * e;
      const sy = m.scaleY + (1 - m.scaleY) * e;
      gsap.set(flipCard, {
        x: m.x * (1 - e), y: m.y * (1 - e),
        scaleX: sx, scaleY: sy, transformOrigin: 'top left'
      });
      // Counter-scale the contents so type is never stretched.
      gsap.set(contents, { scaleX: 1 / sx, scaleY: 1 / sy, transformOrigin: 'top left' });
    };

    m = measure();
    apply(0);

    ScrollTrigger.create({
      trigger: '#flip',
      start: 'top top',
      end: '+=1400',
      pin: '#flip-pin',
      scrub: .7,
      invalidateOnRefresh: true,
      onRefresh: (self) => { m = measure(); apply(self.progress || 0); },
      onUpdate: (self) => apply(self.progress)
    });
  }

  /* ═══════════════════════════════════════════════════════════════
     SCROLL-DRIVEN PROGRAMME CAROUSEL
     The reference advances its Swiper from scroll position rather than
     from a swipe; the pills and the plate move together.
     ═══════════════════════════════════════════════════════════════ */
  const progPin = $('#prog-pin');
  if (progPin && motion) {
    const slides = $$('.prog__slide', progPin);
    const pills = $$('.prog__pill', progPin);
    let shown = 0;

    const show = (index) => {
      const i = Math.max(0, Math.min(slides.length - 1, index));
      if (i === shown) return;
      shown = i;
      slides.forEach((s, n) => s.classList.toggle('is-on', n === i));
      pills.forEach((b, n) => {
        b.classList.toggle('is-on', n === i);
        b.setAttribute('aria-selected', String(n === i));
      });
    };

    ScrollTrigger.create({
      trigger: '#prog',
      start: 'top top',
      end: () => '+=' + slides.length * 62 + '%',
      pin: progPin,
      scrub: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => show(Math.floor(self.progress * slides.length * .999))
    });

    // The pills stay usable: clicking one scrolls to that slide's offset.
    pills.forEach((pill, i) => pill.addEventListener('click', () => {
      const st = ScrollTrigger.getAll().find((t) => t.trigger === $('#prog'));
      if (!st) return;
      const target = st.start + ((i + .5) / slides.length) * (st.end - st.start);
      if (lenis) lenis.scrollTo(target);
      else scrollTo({ top: target, behavior: 'smooth' });
    }));
  }

  /* ═══════════════════════════════════════════════════════════════
     WORD REVEALS
     A SplitText-style reveal without the plugin. Splitting innerHTML on
     whitespace would tear inline elements in half — an <em> spanning
     four words became one <em> word and three loose ones — so this walks
     text nodes instead and leaves the surrounding markup intact.
     ═══════════════════════════════════════════════════════════════ */
  if (motion) {
    const splitWords = (root) => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode: (node) => (node.textContent.trim()
          ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT)
      });
      const texts = [];
      while (walker.nextNode()) texts.push(walker.currentNode);

      const inners = [];
      texts.forEach((node) => {
        const fragment = document.createDocumentFragment();
        node.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { fragment.append(document.createTextNode(part)); return; }
          const outer = document.createElement('span');
          const inner = document.createElement('span');
          outer.className = 'line';
          inner.className = 'line__inner';
          inner.textContent = part;
          outer.append(inner);
          fragment.append(outer);
          inners.push(inner);
        });
        node.replaceWith(fragment);
      });
      return inners;
    };

    $$('[data-split]').forEach((heading) => {
      const inners = splitWords(heading);
      if (!inners.length) return;
      gsap.fromTo(inners,
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1,
          stagger: .045,
          ease: 'expo.out',
          scrollTrigger: { trigger: heading, start: 'top 88%', once: true }
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
