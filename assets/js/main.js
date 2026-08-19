(() => {
  'use strict';

  const root = document.documentElement;
  const body = document.body;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(pointer: fine)').matches;
  const select = (selector, scope = document) => scope.querySelector(selector);
  const selectAll = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const hasGSAP = Boolean(window.gsap && window.ScrollTrigger);
  const motionEnabled = !reducedMotion && hasGSAP;

  if (motionEnabled) root.classList.add('has-motion');

  selectAll('[data-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const loader = select('.page-loader');
  let loaderStarted = false;
  let fallbackFinished = false;
  let lenis = null;

  const enhanceInterface = () => {
    if (loader) {
      const word = document.createElement('div');
      word.className = 'page-loader__word';
      word.innerHTML = '<span>Architecture · Interior · India</span>';
      const counter = document.createElement('div');
      counter.className = 'page-loader__counter';
      counter.textContent = '00';
      const grid = document.createElement('div');
      grid.className = 'page-loader__grid';
      const plan = document.createElement('canvas');
      plan.className = 'page-loader__plan';
      const stamp = document.createElement('div');
      stamp.className = 'page-loader__stamp';
      stamp.innerHTML = '<b>Ground floor plan</b><span>A—01 · 1:50 · Radhe Design Studio</span>';
      loader.append(grid, plan, stamp, word, counter);
      loader.classList.add('is-cad');
    }

    const process = select('.process-steps');
    if (process) {
      const line = document.createElement('i');
      line.className = 'process-motion-line';
      line.setAttribute('aria-hidden', 'true');
      process.append(line);
    }
  };

  enhanceInterface();

  const splitWords = (element) => {
    if (!element || element.dataset.motionSplit === 'true') return [];
    const nodes = [];
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => node.textContent.trim() && !node.parentElement.closest('.motion-word')
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT
    });
    while (walker.nextNode()) nodes.push(walker.currentNode);

    const inners = [];
    nodes.forEach((node) => {
      const fragment = document.createDocumentFragment();
      node.textContent.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) {
          fragment.append(document.createTextNode(part));
          return;
        }
        const outer = document.createElement('span');
        const inner = document.createElement('span');
        outer.className = 'motion-word';
        inner.className = 'motion-word__inner';
        inner.textContent = part;
        outer.append(inner);
        fragment.append(outer);
        inners.push(inner);
      });
      node.replaceWith(fragment);
    });
    element.dataset.motionSplit = 'true';
    return inners;
  };

  const splitTargets = selectAll([
    '.hero h1',
    '.display',
    '.lux-hero h1',
    '.lux-cta h2',
    '.lux-words blockquote',
    '.project-hero h1',
    '.quote-grid blockquote',
    '.studio-feature blockquote',
    '.testimonial-section blockquote'
  ].join(','));
  splitTargets.forEach(splitWords);

  const menuButton = select('.menu-toggle');
  const menuPanel = select('.menu-panel');
  const setMenu = (open) => {
    body.classList.toggle('menu-open', open);
    menuButton?.setAttribute('aria-expanded', String(open));
    menuButton?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menuPanel?.setAttribute('aria-hidden', String(!open));
    if (lenis) open ? lenis.stop() : lenis.start();
    if (motionEnabled && open && menuPanel) {
      gsap.fromTo(selectAll('.menu-panel__links a', menuPanel),
        { x: -70, opacity: 0 },
        { x: 0, opacity: 1, duration: .9, stagger: .07, ease: 'expo.out', overwrite: true });
      gsap.fromTo(select('.menu-panel__aside', menuPanel),
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: .8, delay: .25, ease: 'power3.out', overwrite: true });
    }
  };

  menuButton?.addEventListener('click', () => setMenu(!body.classList.contains('menu-open')));
  selectAll('.menu-panel a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });

  const pageName = body.dataset.page;
  selectAll(`[data-nav="${pageName}"]`).forEach((link) => link.setAttribute('aria-current', 'page'));

  const header = select('.site-header');
  const progress = select('.scroll-progress');
  const hudProgress = select('.motion-hud__track i');
  const hudValue = select('.motion-hud__value');
  let scrollFrame = 0;

  const paintScrollState = () => {
    const maximum = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    const amount = Math.min(1, scrollY / maximum);
    header?.classList.toggle('is-scrolled', scrollY > 24);
    if (progress) progress.style.transform = `scaleX(${amount})`;
    if (hudProgress) hudProgress.style.transform = `scaleX(${amount})`;
    if (hudValue) hudValue.textContent = String(Math.round(amount * 100)).padStart(3, '0');
    scrollFrame = 0;
  };

  addEventListener('scroll', () => {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(paintScrollState);
  }, { passive: true });
  addEventListener('resize', paintScrollState, { passive: true });
  paintScrollState();

  const hero = select('[data-hero]');
  const heroSlides = selectAll('.hero-slide', hero || document);
  const heroCurrent = select('[data-hero-current]');
  const heroProgress = select('[data-hero-progress]');
  let heroIndex = 0;
  let heroTimer = 0;
  let heroAnimating = false;

  const showHeroSlide = (nextIndex, immediate = false) => {
    if (!heroSlides.length || (heroAnimating && !immediate)) return;
    const previous = heroSlides[heroIndex];
    const resolved = (nextIndex + heroSlides.length) % heroSlides.length;
    const next = heroSlides[resolved];
    heroIndex = resolved;

    if (heroCurrent) heroCurrent.textContent = String(heroIndex + 1).padStart(2, '0');
    if (heroProgress) heroProgress.style.transform = `scaleX(${(heroIndex + 1) / heroSlides.length})`;

    if (immediate || !motionEnabled || previous === next) {
      heroSlides.forEach((slide, index) => {
        const active = index === heroIndex;
        slide.classList.toggle('is-active', active);
        slide.setAttribute('aria-hidden', String(!active));
      });
      return;
    }

    heroAnimating = true;
    next.classList.add('is-active');
    next.setAttribute('aria-hidden', 'false');
    gsap.set(next, { zIndex: 2, clipPath: 'inset(0 0 0 100%)', opacity: 1, visibility: 'visible' });
    gsap.set(select('img', next), { scale: 1.12 });
    const timeline = gsap.timeline({
      onComplete: () => {
        previous.classList.remove('is-active');
        previous.setAttribute('aria-hidden', 'true');
        gsap.set(previous, { clearProps: 'zIndex,clipPath,opacity,visibility' });
        gsap.set(next, { zIndex: 1, clearProps: 'clipPath' });
        heroAnimating = false;
      }
    });
    timeline
      .to(next, { clipPath: 'inset(0 0 0 0%)', duration: 1.25, ease: 'expo.inOut' })
      .to(select('img', next), { scale: 1.02, duration: 1.8, ease: 'power3.out' }, 0);
  };

  const restartHero = () => {
    clearInterval(heroTimer);
    if (!reducedMotion && heroSlides.length > 1) {
      heroTimer = setInterval(() => showHeroSlide(heroIndex + 1), 6500);
    }
  };

  select('[data-hero-prev]')?.addEventListener('click', () => {
    showHeroSlide(heroIndex - 1);
    restartHero();
  });
  select('[data-hero-next]')?.addEventListener('click', () => {
    showHeroSlide(heroIndex + 1);
    restartHero();
  });
  showHeroSlide(0, true);
  restartHero();

  const hydrateHeroSlides = () => {
    heroSlides.slice(1).forEach((slide) => {
      const image = select('img[data-src]', slide);
      if (!image) return;
      image.src = image.dataset.src;
      image.removeAttribute('data-src');
    });
  };
  if ('requestIdleCallback' in window) requestIdleCallback(hydrateHeroSlides, { timeout: 1600 });
  else setTimeout(hydrateHeroSlides, 600);

  selectAll('[data-carousel]').forEach((carousel) => {
    const track = select('[data-carousel-track]', carousel);
    if (!track) return;
    const move = (direction) => track.scrollBy({
      left: direction * track.clientWidth * .8,
      behavior: reducedMotion ? 'auto' : 'smooth'
    });
    select('[data-carousel-prev]', carousel)?.addEventListener('click', () => move(-1));
    select('[data-carousel-next]', carousel)?.addEventListener('click', () => move(1));
  });

  const projectTrack = select('[data-project-track]');
  selectAll('[data-project-target]').forEach((button) => button.addEventListener('click', () => {
    const target = select(`[data-project-id="${button.dataset.projectTarget}"]`);
    if (!target || !projectTrack) return;
    selectAll('[data-project-target]').forEach((item) => item.classList.toggle('is-active', item === button));
    target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'nearest', inline: 'center' });
  }));

  selectAll('[data-filter]').forEach((button) => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    selectAll('[data-filter]').forEach((item) => item.classList.toggle('is-active', item === button));
    const visibleCards = [];
    selectAll('[data-category]').forEach((card) => {
      const visible = filter === 'all' || card.dataset.category === filter;
      card.hidden = !visible;
      if (visible) visibleCards.push(card);
    });
    if (motionEnabled) {
      gsap.fromTo(visibleCards,
        { opacity: 0, y: 45, scale: .97 },
        { opacity: 1, y: 0, scale: 1, duration: .8, stagger: .08, ease: 'power3.out' });
      ScrollTrigger.refresh();
    }
  }));

  selectAll('.accordion').forEach((group) => {
    selectAll('details', group).forEach((detail) => detail.addEventListener('toggle', () => {
      if (!detail.open) return;
      selectAll('details', group).forEach((other) => {
        if (other !== detail) other.open = false;
      });
      if (motionEnabled) {
        const content = select('.accordion__body', detail);
        gsap.fromTo(content, { height: 0, opacity: 0 }, {
          height: 'auto', opacity: 1, duration: .65, ease: 'power3.out', clearProps: 'height'
        });
      }
    }));
  });

  const form = select('#inquiry-form');
  form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const button = select('button[type="submit"]', form);
    const notice = select('.form-notice', form);
    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = 'Sending…';
    try {
      const response = await fetch(form.action, { method: 'POST', body: new FormData(form) });
      const result = await response.json();
      notice.hidden = false;
      notice.textContent = result.message;
      notice.dataset.state = result.success ? 'success' : 'error';
      if (motionEnabled) gsap.fromTo(notice, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: .5 });
      if (result.success) form.reset();
    } catch {
      notice.hidden = false;
      notice.dataset.state = 'error';
      notice.textContent = 'Something went wrong. Please email hello@radhedesignstudio.com.';
    } finally {
      button.disabled = false;
      button.textContent = originalText;
    }
  });

  const fallbackReveal = () => {
    const elements = selectAll('[data-reveal]');
    if (!reducedMotion && 'IntersectionObserver' in window) {
      root.classList.add('motion-ready');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      }, { rootMargin: '0px 0px -6% 0px', threshold: .04 });
      elements.forEach((element) => observer.observe(element));
    } else {
      elements.forEach((element) => element.classList.add('is-visible'));
    }
  };

  /* Project index: hovering a register row swaps the reference plate.
     A crossfade only — the row itself does not move. */
  const plateTarget = select('[data-plate-target]');
  const plateCaption = select('[data-plate-caption]');
  if (plateTarget) {
    const rows = selectAll('.project-index__row');
    let plateTimer = 0;
    const showPlate = (row) => {
      const source = row.dataset.plate;
      if (!source || plateTarget.getAttribute('src') === source) return;
      clearTimeout(plateTimer);
      plateTarget.style.opacity = '0';
      plateTimer = setTimeout(() => {
        plateTarget.src = source;
        if (plateCaption) plateCaption.textContent = select('.project-index__name', row).textContent;
        plateTarget.style.opacity = '1';
      }, 180);
    };
    rows.forEach((row) => {
      row.addEventListener('pointerenter', () => showPlate(row));
      row.addEventListener('focus', () => showPlate(row));
    });
  }

  const finishWithoutMotion = () => {
    if (fallbackFinished) return;
    fallbackFinished = true;
    body.classList.add('is-loaded');
    loader?.remove();
    fallbackReveal();
  };

  if (!motionEnabled) {
    if (document.readyState === 'complete') finishWithoutMotion();
    else addEventListener('load', finishWithoutMotion, { once: true });
    setTimeout(finishWithoutMotion, 1800);
    return;
  }

  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);
  root.classList.add('motion-ready');

  if (window.Lenis && innerWidth > 760) {
    lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: .92,
      touchMultiplier: 1.15,
      syncTouch: false
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  const playIntro = () => { };

  /* ── AutoCAD-style plan intro ──────────────────────────────
     Orthogonal segments fly in from outside the sheet, gather onto their
     axis and draw themselves until one coherent 2D plan stands complete.
     Every endpoint is normalised inside a 0–1 plan box so the drawing
     scales with the viewport without losing its proportions. */
  const PLAN_SEGMENTS = [
    // [x1, y1, x2, y2, weight]  — weight 2 = structural wall, 1 = partition
    [.06, .10, .94, .10, 2], [.94, .10, .94, .90, 2],
    [.94, .90, .06, .90, 2], [.06, .90, .06, .10, 2],
    [.36, .10, .36, .46, 1], [.70, .10, .70, .46, 1],
    [.06, .46, .24, .46, 1], [.36, .46, .58, .46, 1],
    [.80, .46, .94, .46, 1], [.80, .46, .80, .90, 1],
    [.36, .46, .36, .90, 1], [.06, .66, .36, .66, 1],
    [.58, .46, .58, .74, 1], [.36, .74, .58, .74, 1],
    [.58, .74, .70, .74, 1], [.70, .74, .70, .90, 1],
    [.20, .66, .20, .90, 1], [.20, .78, .06, .78, 1],
  ];

  const createPlanIntro = (canvas) => {
    const context = canvas.getContext('2d');
    if (!context) return null;

    const INK = '236,229,216';
    const CLAY = '201,169,123';
    let width = 0;
    let height = 0;
    let box = { x: 0, y: 0, w: 0, h: 0 };

    const resize = () => {
      const ratio = Math.min(devicePixelRatio || 1, 2);
      width = canvas.clientWidth || innerWidth;
      height = canvas.clientHeight || innerHeight;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const w = Math.min(width * (width < 760 ? .88 : .74), 980);
      const h = Math.min(height * .62, w * .62);
      box = { x: (width - w) / 2, y: (height - h) / 2, w, h };
    };
    resize();

    const point = (x, y) => [box.x + x * box.w, box.y + y * box.h];
    const clamp01 = (value) => Math.min(1, Math.max(0, value));
    const easeOut = (value) => 1 - Math.pow(1 - clamp01(value), 3);
    const easeInOut = (value) => (value < .5 ? 4 * value ** 3 : 1 - Math.pow(-2 * value + 2, 3) / 2);

    // Each line approaches along its own axis from the nearest sheet edge,
    // the way a drafter pulls a rule into position.
    const approach = PLAN_SEGMENTS.map((segment) => {
      const horizontal = Math.abs(segment[3] - segment[1]) < .001;
      const mid = horizontal ? (segment[1] + segment[3]) / 2 : (segment[0] + segment[2]) / 2;
      const away = mid < .5 ? -1 : 1;
      return horizontal ? [0, away * box.h * .55] : [away * box.w * .55, 0];
    });

    const DRAW_END = .74;
    const stagger = DRAW_END / (PLAN_SEGMENTS.length + 3);
    const lineSpan = stagger * 3.4;

    const dimension = (from, to, label, vertical, opacity) => {
      const [x1, y1] = from;
      const [x2, y2] = to;
      context.save();
      context.globalAlpha = opacity;
      context.strokeStyle = `rgba(${CLAY},.55)`;
      context.fillStyle = `rgba(${INK},.6)`;
      context.lineWidth = 1;
      context.setLineDash([4, 5]);
      context.beginPath();
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.stroke();
      context.setLineDash([]);
      const tick = 4;
      context.beginPath();
      if (vertical) {
        context.moveTo(x1 - tick, y1); context.lineTo(x1 + tick, y1);
        context.moveTo(x2 - tick, y2); context.lineTo(x2 + tick, y2);
      } else {
        context.moveTo(x1, y1 - tick); context.lineTo(x1, y1 + tick);
        context.moveTo(x2, y2 - tick); context.lineTo(x2, y2 + tick);
      }
      context.stroke();
      context.font = '500 10px "DM Mono", Consolas, monospace';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      if (vertical) {
        context.translate(x1 - 11, (y1 + y2) / 2);
        context.rotate(-Math.PI / 2);
        context.fillText(label, 0, 0);
      } else {
        context.fillText(label, (x1 + x2) / 2, y1 - 10);
      }
      context.restore();
    };

    const render = (progress) => {
      context.clearRect(0, 0, width, height);

      let cursor = null;
      PLAN_SEGMENTS.forEach((segment, index) => {
        const local = (progress - index * stagger) / lineSpan;
        if (local <= 0) return;
        const gather = easeOut(Math.min(1, local * 1.7));
        const drawn = easeInOut(clamp01(local));
        const [ox, oy] = approach[index];
        const slideX = ox * (1 - gather);
        const slideY = oy * (1 - gather);

        const [ax, ay] = point(segment[0], segment[1]);
        const [bx, by] = point(segment[2], segment[3]);
        const headX = ax + (bx - ax) * drawn;
        const headY = ay + (by - ay) * drawn;

        context.save();
        context.translate(slideX, slideY);
        context.globalAlpha = gather;
        context.strokeStyle = segment[4] === 2 ? `rgba(${INK},.82)` : `rgba(${INK},.42)`;
        context.lineWidth = segment[4] === 2 ? 2 : 1;
        context.lineCap = 'square';
        context.beginPath();
        context.moveTo(ax, ay);
        context.lineTo(headX, headY);
        context.stroke();
        context.restore();

        if (drawn < 1) cursor = [headX + slideX, headY + slideY];
      });

      // Drafting crosshair riding the line currently being drawn.
      if (cursor) {
        const [cx, cy] = cursor;
        context.save();
        context.strokeStyle = `rgba(${CLAY},.85)`;
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(cx - 13, cy); context.lineTo(cx - 3, cy);
        context.moveTo(cx + 3, cy); context.lineTo(cx + 13, cy);
        context.moveTo(cx, cy - 13); context.lineTo(cx, cy - 3);
        context.moveTo(cx, cy + 3); context.lineTo(cx, cy + 13);
        context.stroke();
        context.strokeRect(cx - 3.5, cy - 3.5, 7, 7);
        context.restore();
      }

      const detail = easeOut((progress - DRAW_END) / .2);
      if (detail > 0) {
        dimension(point(.06, .02), point(.94, .02), '8400', false, detail);
        dimension(point(.015, .10), point(.015, .90), '6200', true, detail);
        // Door swings read as the last drafting move.
        context.save();
        context.globalAlpha = detail;
        context.strokeStyle = `rgba(${INK},.34)`;
        context.lineWidth = 1;
        [[.36, .58, .10], [.70, .58, .10], [.20, .82, .08]].forEach(([x, y, r]) => {
          const [px, py] = point(x, y);
          context.beginPath();
          context.arc(px, py, r * box.h, -Math.PI / 2, 0);
          context.stroke();
        });
        context.restore();
      }
    };

    return { render, resize };
  };

  const runLoader = () => {
    if (loaderStarted) return;
    loaderStarted = true;
    if (!loader) {
      body.classList.add('is-loaded');
      playIntro();
      initMotion();
      return;
    }

    const counter = select('.page-loader__counter', loader);
    const counterState = { value: 0 };
    const timeline = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => {
        body.classList.add('is-loaded');
        loader.remove();
        initMotion();
      }
    });

    const planCanvas = select('.page-loader__plan', loader);
    const plan = planCanvas ? createPlanIntro(planCanvas) : null;
    const planState = { progress: 0 };
    const onResize = () => {
      if (!plan) return;
      plan.resize();
      plan.render(planState.progress);
    };
    addEventListener('resize', onResize, { passive: true });
    timeline.eventCallback('onComplete', () => {
      removeEventListener('resize', onResize);
      body.classList.add('is-loaded');
      loader.remove();
      initMotion();
    });

    /* The whole sequence is budgeted at 1.5s: the plan draws in 1.05s, the
       title block and dimensions settle, and the sheet lifts away. Nothing
       animates after this — the site is simply there. */
    timeline
      .fromTo('.page-loader__grid', { opacity: 0 }, { opacity: 1, duration: .25 })
      .fromTo('.page-loader__mark', { opacity: 0 }, { opacity: 1, duration: .35 }, 0)
      .fromTo(['.page-loader__word span', '.page-loader__stamp'], { opacity: 0 }, { opacity: 1, duration: .35 }, .05)
      .to(planState, {
        progress: 1,
        duration: .92,
        ease: 'none',
        onUpdate: () => plan && plan.render(planState.progress)
      }, .05)
      .to(counterState, {
        value: 100,
        duration: .88,
        ease: 'none',
        onUpdate: () => { counter.textContent = String(Math.round(counterState.value)).padStart(2, '0'); }
      }, .05)
      .to('.page-loader__line', { scaleX: 1, duration: .92, ease: 'none' }, .05)
      .to(loader, { opacity: 0, duration: .34, ease: 'power2.inOut' }, .99);

    // Later pages in the same session skip straight past the drafting sequence.
    try {
      if (sessionStorage.getItem('rds-intro-seen') === '1') timeline.timeScale(3.4);
      sessionStorage.setItem('rds-intro-seen', '1');
    } catch { /* private mode — always play in full */ }
  };

  /* ═══════════════════════════════════════════════════════════════
     DRAFTING CROSSHAIR
     Full-viewport hairlines, a pick box that opens over anything
     interactive, and a live coordinate readout. The hairlines chase
     the pointer on a lerp so the whole thing feels weighted rather
     than glued to the mouse.
     ═══════════════════════════════════════════════════════════════ */
  const initCadCursor = () => {
    if (!matchMedia('(pointer: fine)').matches || reducedMotion) return;

    const cursor = document.createElement('div');
    cursor.className = 'cad-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    cursor.innerHTML =
      '<div class="cad-cursor__lines"><i class="cad-cursor__h"></i><i class="cad-cursor__v"></i>' +
      '<i class="cad-cursor__box"></i></div>' +
      '<div class="cad-cursor__readout"><b>X 0000 · Y 0000</b><em>Open</em></div>';
    body.append(cursor);
    root.classList.add('cad-on');

    const hair = { h: select('.cad-cursor__h', cursor), v: select('.cad-cursor__v', cursor) };
    const box = select('.cad-cursor__box', cursor);
    const readout = select('.cad-cursor__readout', cursor);
    const coords = select('b', readout);
    const label = select('em', readout);

    const pointer = { x: innerWidth / 2, y: innerHeight / 2 };
    const eased = { x: pointer.x, y: pointer.y };
    let frame = 0;
    let live = false;

    const paint = () => {
      // Hairlines lag a touch; the pick box stays tight to the pointer.
      eased.x += (pointer.x - eased.x) * .2;
      eased.y += (pointer.y - eased.y) * .2;
      hair.h.style.transform = `translate3d(0, ${eased.y.toFixed(2)}px, 0)`;
      hair.v.style.transform = `translate3d(${eased.x.toFixed(2)}px, 0, 0)`;
      box.style.transform = `translate3d(${pointer.x.toFixed(2)}px, ${pointer.y.toFixed(2)}px, 0)`;
      readout.style.transform = `translate3d(${pointer.x.toFixed(2)}px, ${pointer.y.toFixed(2)}px, 0)`;
      frame = requestAnimationFrame(paint);
    };

    addEventListener('pointermove', (event) => {
      if (event.pointerType !== 'mouse') return;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      coords.textContent = `X ${String(Math.round(event.clientX)).padStart(4, '0')} · Y ${String(Math.round(event.clientY)).padStart(4, '0')}`;
      if (!live) {
        live = true;
        cursor.classList.add('is-live');
        frame = frame || requestAnimationFrame(paint);
      }
    }, { passive: true });

    addEventListener('pointerdown', () => cursor.classList.add('is-down'), { passive: true });
    addEventListener('pointerup', () => cursor.classList.remove('is-down'), { passive: true });
    document.addEventListener('pointerleave', () => cursor.classList.remove('is-live'));
    document.addEventListener('pointerenter', () => live && cursor.classList.add('is-live'));

    // Snap state: what the pick box is currently over.
    const targets = 'a[href], button, summary, .lux-plate, [data-cad-label]';
    document.addEventListener('pointerover', (event) => {
      const hit = event.target.closest?.(targets);
      if (!hit) return;
      cursor.classList.add('is-snapped');
      label.textContent = hit.dataset.cadLabel
        || (hit.matches('.menu-toggle') ? 'Menu'
          : hit.closest('.lux-project') ? 'View project'
            : hit.tagName === 'BUTTON' ? 'Select' : 'Open');
    }, { passive: true });
    document.addEventListener('pointerout', (event) => {
      if (event.target.closest?.(targets) && !event.relatedTarget?.closest?.(targets)) {
        cursor.classList.remove('is-snapped');
      }
    }, { passive: true });
  };

  /* Crop marks register each block like a sheet, and draw themselves on entry. */
  const markBlocks = () => {
    selectAll('.lux-intent, .lux-work, .lux-approach, .lux-words, .lux-cta').forEach((block) => {
      const marks = document.createElement('div');
      marks.className = 'cad-marks';
      marks.setAttribute('aria-hidden', 'true');
      marks.innerHTML = '<i></i><i></i><i></i><i></i>';
      block.append(marks);
      gsap.fromTo(selectAll('i', marks),
        { scale: .2, opacity: 0 },
        {
          scale: 1,
          opacity: .5,
          duration: .7,
          stagger: .08,
          ease: 'power3.out',
          scrollTrigger: { trigger: block, start: 'top 82%', once: true }
        });
    });
  };

  /* ═══════════════════════════════════════════════════════════════
     BLOCK CHOREOGRAPHY
     Each block gets its own move. No two sections enter the same way.
     ═══════════════════════════════════════════════════════════════ */

  /* 01 · HERO — the plot: lines of the headline wipe up out of nothing
     while the photograph settles back from an overscale. */
  const heroMotion = () => {
    const hero = select('.lux-hero');
    if (!hero) return;
    const words = selectAll('.lux-hero h1 .motion-word__inner', hero);
    const timeline = gsap.timeline({ defaults: { ease: 'expo.out' } });

    timeline
      .fromTo(select('.lux-hero__media img', hero),
        { scale: 1.14, filter: 'brightness(.55)' },
        { scale: 1, filter: 'brightness(1)', duration: 2.6, ease: 'power2.out' }, 0)
      .fromTo(select('.lux-hero .lux-eyebrow', hero),
        { opacity: 0, letterSpacing: '.75em' },
        { opacity: .72, letterSpacing: '.34em', duration: 1.4 }, .1)
      .fromTo(words,
        { yPercent: 118, skewY: 3 },
        { yPercent: 0, skewY: 0, duration: 1.25, stagger: .055 }, .2)
      .fromTo(select('.lux-hero__lead', hero),
        { opacity: 0, y: 22 }, { opacity: .82, y: 0, duration: .9 }, .8)
      .fromTo(select('.lux-hero .lux-link', hero),
        { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: .8 }, .95)
      .fromTo(select('.lux-hero__foot', hero),
        { opacity: 0 }, { opacity: 1, duration: .9 }, 1)
      .fromTo(select('.lux-hero__foot', hero),
        { '--foot-scale': 0 }, { duration: .01 }, 1);

    // The photograph keeps drifting as you leave it behind.
    gsap.to(select('.lux-hero__media', hero), {
      yPercent: 8,
      ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: .6 }
    });
  };

  /* 02 · INTENT — sheet placement: the three plates are laid onto the
     board one at a time, each sliding in from the edge nearest to it. */
  const intentMotion = () => {
    const block = select('.lux-intent');
    if (!block) return;

    const copy = selectAll('.lux-intent__copy > *', block);
    gsap.fromTo(copy,
      { y: 34, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, stagger: .09, ease: 'expo.out',
        scrollTrigger: { trigger: block, start: 'top 74%', once: true }
      });

    const entries = [
      { clipPath: 'inset(0 0 100% 0)', xPercent: -6 },
      { clipPath: 'inset(0 0 0 100%)', xPercent: 8 },
      { clipPath: 'inset(100% 0 0 0)', yPercent: 8 }
    ];
    selectAll('.lux-intent__figures .lux-plate', block).forEach((plate, index) => {
      gsap.fromTo(plate,
        { ...entries[index % entries.length], opacity: .2 },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          xPercent: 0,
          yPercent: 0,
          opacity: 1,
          duration: 1.35,
          delay: index * .16,
          ease: 'expo.inOut',
          scrollTrigger: { trigger: block, start: 'top 68%', once: true }
        });
    });

    // Figures counting up is what makes a stat feel measured rather than typed.
    selectAll('.lux-stats dd', block).forEach((value) => {
      const raw = value.textContent.trim();
      const number = parseFloat(raw.replace(/[^\d.]/g, ''));
      if (!Number.isFinite(number)) return;
      const suffix = raw.replace(/^[\d.,]+/, '');
      const state = { value: 0 };
      gsap.to(state, {
        value: number,
        duration: 1.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: block, start: 'top 60%', once: true },
        onUpdate: () => {
          const shown = number % 1 ? state.value.toFixed(0) : Math.round(state.value);
          value.textContent = `${shown}${suffix}`;
        }
      });
    });
  };

  /* 03 · WORK — the scan: each plate is wiped open from the side its
     copy sits on, the index ticks over, and the image drifts inside
     its frame for as long as the row is on screen. */
  const workMotion = () => {
    selectAll('.lux-project').forEach((project, index) => {
      const fromLeft = index % 2 === 0;
      const media = select('.lux-project__media', project);
      const image = select('img', media);

      gsap.fromTo(media,
        { clipPath: fromLeft ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.5,
          ease: 'expo.inOut',
          scrollTrigger: { trigger: project, start: 'top 76%', once: true }
        });

      gsap.fromTo(image,
        { scale: 1.24 },
        {
          scale: 1,
          duration: 1.8,
          ease: 'expo.out',
          scrollTrigger: { trigger: project, start: 'top 76%', once: true }
        });

      gsap.fromTo(image,
        { yPercent: -4 },
        {
          yPercent: 4,
          ease: 'none',
          scrollTrigger: { trigger: project, start: 'top bottom', end: 'bottom top', scrub: 1.2 }
        });

      const number = select('.lux-project__no', project);
      if (number) {
        const target = parseInt(number.textContent, 10);
        const state = { value: 0 };
        gsap.to(state, {
          value: target,
          duration: .9,
          ease: 'power1.inOut',
          scrollTrigger: { trigger: project, start: 'top 76%', once: true },
          onUpdate: () => { number.textContent = String(Math.round(state.value)).padStart(2, '0'); }
        });
      }

      gsap.fromTo(selectAll('.lux-project__body > *:not(.lux-project__no)', project),
        { x: fromLeft ? 40 : -40, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, stagger: .08, ease: 'expo.out',
          scrollTrigger: { trigger: project, start: 'top 72%', once: true }
        });
    });

    const head = select('.lux-work .lux-sectionhead');
    if (head) {
      gsap.fromTo(head, { opacity: 0, y: 26 }, {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: head, start: 'top 86%', once: true }
      });
    }
  };

  /* 04 · APPROACH — the deal: the four cards are dealt onto the
     photograph, hinged from their bottom edge. */
  const approachMotion = () => {
    const block = select('.lux-approach');
    if (!block) return;

    gsap.fromTo(selectAll('.lux-approach__head > *', block),
      { opacity: 0, scale: .96 },
      {
        opacity: 1, scale: 1, duration: 1.1, stagger: .1, ease: 'expo.out',
        scrollTrigger: { trigger: block, start: 'top 72%', once: true }
      });

    gsap.fromTo(selectAll('.lux-step', block),
      { yPercent: 22, rotateX: 34, opacity: 0, transformOrigin: '50% 100%' },
      {
        yPercent: 0,
        rotateX: 0,
        opacity: 1,
        duration: 1.05,
        stagger: .13,
        ease: 'back.out(1.4)',
        scrollTrigger: { trigger: '.lux-steps', start: 'top 88%', once: true }
      });

    gsap.fromTo(selectAll('.lux-step__rule', block),
      { scaleX: 0, transformOrigin: 'left center' },
      {
        scaleX: 1, duration: .8, stagger: .13, ease: 'expo.out',
        scrollTrigger: { trigger: '.lux-steps', start: 'top 86%', once: true }
      });

    gsap.fromTo(select('.lux-approach__media', block), { yPercent: -5 }, {
      yPercent: 5,
      ease: 'none',
      scrollTrigger: { trigger: block, start: 'top bottom', end: 'bottom top', scrub: .8 }
    });
  };

  /* 05 · WORDS — the plotter: the quote is written word by word while
     the plate opens from its centre line. */
  const wordsMotion = () => {
    const block = select('.lux-words');
    if (!block) return;

    gsap.fromTo(select('.lux-words__plate', block),
      { clipPath: 'inset(50% 0 50% 0)' },
      {
        clipPath: 'inset(0% 0 0% 0)', duration: 1.5, ease: 'expo.inOut',
        scrollTrigger: { trigger: block, start: 'top 76%', once: true }
      });

    gsap.fromTo(selectAll('.lux-words blockquote .motion-word__inner', block),
      { yPercent: 105, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: .7,
        stagger: .026,
        ease: 'power2.out',
        scrollTrigger: { trigger: block, start: 'top 70%', once: true }
      });

    gsap.fromTo(selectAll('.lux-words__copy > *:not(blockquote)', block),
      { opacity: 0, y: 18 },
      {
        opacity: 1, y: 0, duration: .9, stagger: .1, ease: 'power3.out',
        scrollTrigger: { trigger: block, start: 'top 58%', once: true }
      });
  };

  /* 06 · CTA — the converge: the headline arrives from both margins
     and meets in the middle. */
  const ctaMotion = () => {
    const block = select('.lux-cta');
    if (!block) return;
    const words = selectAll('.lux-cta h2 .motion-word__inner', block);

    gsap.fromTo(words,
      { x: (i) => (i % 2 ? 60 : -60), opacity: 0, filter: 'blur(6px)' },
      {
        x: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1.2,
        stagger: .05,
        ease: 'expo.out',
        scrollTrigger: { trigger: block, start: 'top 76%', once: true }
      });

    gsap.fromTo(selectAll('.lux-cta > *:not(h2)', block),
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: .9, stagger: .12, ease: 'power3.out',
        scrollTrigger: { trigger: block, start: 'top 70%', once: true }
      });
  };

  /* 07 · FOOTER — the register: columns rise in sequence. */
  const footerMotion = () => {
    const footer = select('.site-footer');
    if (!footer) return;
    gsap.fromTo(selectAll('.footer-brand, .footer-column', footer),
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: .9, stagger: .08, ease: 'power3.out',
        scrollTrigger: { trigger: footer, start: 'top 92%', once: true }
      });
  };

  /* 08 · INTERIOR PAGE HEROES — the reveal: the plate opens from the
     bottom edge while the title rises out of it. */
  const innerHeroMotion = () => {
    const hero = select('.inner-hero, .project-hero');
    if (!hero) return;
    const image = select('img', hero);
    const timeline = gsap.timeline({ defaults: { ease: 'expo.out' } });
    if (image) {
      timeline.fromTo(image, { scale: 1.18 }, { scale: 1, duration: 2.2, ease: 'power2.out' }, 0);
    }
    timeline
      .fromTo(selectAll('.motion-word__inner', hero),
        { yPercent: 115 }, { yPercent: 0, duration: 1.15, stagger: .05 }, .15)
      .fromTo(selectAll('.overline, .section-label, .inner-hero__intro > *, .project-hero__meta > *', hero),
        { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: .8, stagger: .07 }, .45);
  };

  /* 09 · GRIDS — the contact sheet: tiles print in a diagonal sweep. */
  const gridMotion = () => {
    selectAll('.portfolio-grid, .journal-grid, .gallery, .services-grid, .values-grid').forEach((grid) => {
      const tiles = selectAll(':scope > *', grid);
      if (!tiles.length) return;
      gsap.fromTo(tiles,
        { y: 46, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
        {
          y: 0,
          opacity: 1,
          clipPath: 'inset(0% 0 0% 0)',
          duration: 1.1,
          stagger: { each: .08, from: 'start' },
          ease: 'expo.out',
          scrollTrigger: { trigger: grid, start: 'top 84%', once: true }
        });
    });
  };

  /* Interior pages keep one calm shared reveal. */
  const genericMotion = () => {
    const targets = selectAll([
      '[data-reveal]',
      '.section-heading',
      '.expertise-list a',
      '.process-steps li',
      '.practice-facts > *',
      '.journal-card',
      '.portfolio-item',
      '.value-card',
      '.service-card'
    ].join(',')).filter((element, index, list) =>
      list.indexOf(element) === index &&
      !element.closest('.lux-hero, .lux-intent, .lux-work, .lux-approach, .lux-words, .lux-cta') &&
      !element.parentElement?.matches('.portfolio-grid, .journal-grid, .gallery, .services-grid, .values-grid'));

    targets.forEach((element) => {
      gsap.fromTo(element,
        { y: 22, opacity: 0 },
        {
          y: 0, opacity: 1, duration: .9, ease: 'power2.out',
          scrollTrigger: { trigger: element, start: 'top 90%', once: true, fastScrollEnd: true }
        });
    });
  };

  const initMotion = () => {
    markBlocks();
    heroMotion();
    intentMotion();
    workMotion();
    approachMotion();
    wordsMotion();
    ctaMotion();
    footerMotion();
    innerHeroMotion();
    gridMotion();
    genericMotion();
    requestAnimationFrame(() => ScrollTrigger.refresh());
    if (document.fonts?.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
  };

  /* Start drawing the moment the script parses — not on window load, and not
     on document.fonts.ready — so the sheet is clearing while the rest of the
     page is still settling. The whole sequence is budgeted at 1.35s. */
  initCadCursor();
  requestAnimationFrame(runLoader);
})();
