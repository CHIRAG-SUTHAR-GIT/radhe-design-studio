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
      const shutter = document.createElement('div');
      shutter.className = 'page-loader__shutter';
      shutter.innerHTML = '<i></i><i></i><i></i><i></i>';
      loader.append(grid, shutter, word, counter);
    }

    const wipe = document.createElement('div');
    wipe.className = 'page-wipe';
    wipe.setAttribute('aria-hidden', 'true');
    wipe.innerHTML = '<i class="page-wipe__panel"></i><i class="page-wipe__panel"></i><i class="page-wipe__panel"></i><i class="page-wipe__panel"></i><span class="page-wipe__label">Radhe</span>';
    body.append(wipe);

    const hud = document.createElement('div');
    hud.className = 'motion-hud';
    hud.setAttribute('aria-hidden', 'true');
    hud.innerHTML = `<span class="motion-hud__label">${body.dataset.page || 'studio'}</span><span class="motion-hud__track"><i></i></span><span class="motion-hud__value">000</span>`;
    body.append(hud);

    const process = select('.process-steps');
    if (process) {
      const line = document.createElement('i');
      line.className = 'process-motion-line';
      line.setAttribute('aria-hidden', 'true');
      process.append(line);
    }

    const footer = select('.site-footer');
    if (footer && !select('.footer-marquee', footer)) {
      const marquee = document.createElement('div');
      marquee.className = 'footer-marquee';
      marquee.setAttribute('aria-hidden', 'true');
      marquee.innerHTML = '<div class="footer-marquee__track"><span>RADHE / DESIGN / STUDIO / </span><span>RADHE / DESIGN / STUDIO / </span></div>';
      footer.prepend(marquee);
    }

    selectAll('.desktop-nav a').forEach((link) => {
      const label = link.textContent.trim();
      link.dataset.motionLabel = label;
      const span = document.createElement('span');
      span.textContent = label;
      link.replaceChildren(span);
    });
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

  const playIntro = () => {
    const timeline = gsap.timeline();
    if (header) timeline.fromTo(header, { yPercent: -120 }, { yPercent: 0, duration: 1, ease: 'expo.out' });

    if (hero) {
      const words = selectAll('.hero h1 .motion-word__inner');
      timeline
        .fromTo('.hero-slides', { clipPath: 'inset(100% 0 0 0)', scale: .92 }, { clipPath: 'inset(0% 0 0 0)', scale: 1, duration: 1.35, ease: 'expo.inOut' }, 0)
        .fromTo(select('.hero-slide.is-active img'), { scale: 1.2, filter: 'saturate(.45)' }, { scale: 1.02, filter: 'saturate(1)', duration: 2.1, ease: 'power3.out' }, .25)
        .fromTo('.hero .overline', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: .75, ease: 'power3.out' }, .7)
        .fromTo(words, { yPercent: 125, rotate: 3, opacity: 0 }, { yPercent: 0, rotate: 0, opacity: 1, duration: 1.1, stagger: .055, ease: 'expo.out' }, .75)
        .fromTo('.hero__actions > *', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: .8, stagger: .1, ease: 'power3.out' }, 1.15)
        .fromTo('.hero__controls', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: .7 }, 1.3)
        .fromTo('.hero__location', { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: .7 }, 1.3);
    } else {
      const pageHero = select('.inner-hero, .project-hero');
      if (pageHero) {
        const words = selectAll('.motion-word__inner', pageHero);
        const image = select(':scope > img', pageHero);
        if (image) timeline.fromTo(image, { scale: 1.16 }, { scale: 1.02, duration: 2, ease: 'power3.out' }, 0);
        timeline
          .fromTo(select('.overline', pageHero), { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: .7 }, .35)
          .fromTo(words, { yPercent: 125, opacity: 0, rotate: 3 }, { yPercent: 0, opacity: 1, rotate: 0, duration: 1, stagger: .05, ease: 'expo.out' }, .4)
          .fromTo(selectAll('.inner-hero__intro > *, .project-hero__meta > *', pageHero), { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: .7, stagger: .08 }, .9);
      }
    }
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
    const shutterPanels = selectAll('.page-loader__shutter i', loader);
    const timeline = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => {
        body.classList.add('is-loaded');
        loader.remove();
        initMotion();
      }
    });

    timeline
      .fromTo('.page-loader__grid', { opacity: 0, scale: 1.12 }, { opacity: 1, scale: 1, duration: .8 })
      .fromTo('.page-loader__mark', { yPercent: 120, rotate: -8, opacity: 0 }, { yPercent: -50, rotate: 0, opacity: 1, duration: 1, ease: 'expo.out' }, .1)
      .fromTo('.page-loader__word span', { yPercent: 120 }, { yPercent: 0, duration: .8, ease: 'expo.out' }, .25)
      .to(counterState, {
        value: 100,
        duration: 1.15,
        ease: 'power2.inOut',
        onUpdate: () => { counter.textContent = String(Math.round(counterState.value)).padStart(2, '0'); }
      }, .1)
      .to('.page-loader__line', { scaleX: 1, duration: 1.05, ease: 'power2.inOut' }, .15)
      .to(shutterPanels, { scaleY: 1, duration: .8, stagger: .065, ease: 'expo.inOut' }, .95)
      .call(playIntro, [], 1.8)
      .set(loader, { background: 'transparent' }, 1.48)
      .set(['.page-loader__mark', '.page-loader__word', '.page-loader__counter', '.page-loader__grid', '.page-loader__line'], { opacity: 0 }, 1.48)
      .to(shutterPanels, { yPercent: -105, duration: 1, stagger: .06, ease: 'expo.inOut' }, 1.5);
  };

  const initScrollReveals = () => {
    const headingTargets = splitTargets.filter((element) => !element.closest('.hero, .inner-hero, .project-hero, .testimonial-section'));
    headingTargets.forEach((heading) => {
      const words = selectAll('.motion-word__inner', heading);
      gsap.fromTo(words,
        { yPercent: 120, opacity: 0, rotate: 2.5 },
        {
          yPercent: 0,
          opacity: 1,
          rotate: 0,
          duration: 1,
          stagger: .04,
          ease: 'expo.out',
          scrollTrigger: { trigger: heading, start: 'top 88%', once: true, fastScrollEnd: true }
        });
    });

    const media = selectAll([
      '.project-tile__image',
      '.portfolio-item__image',
      '.journal-card__image',
      '.journal-feature__image',
      '.gallery figure',
      '.quote-grid__image',
      '.studio-image',
      '.services-grid__visual',
      '.studio-feature__image'
    ].join(','));

    media.forEach((frame) => {
      frame.classList.add('motion-image');
      const image = select('img', frame);
      gsap.fromTo(frame,
        { clipPath: 'inset(100% 0 0 0)' },
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.15,
          ease: 'expo.inOut',
          scrollTrigger: { trigger: frame, start: 'top 90%', once: true, fastScrollEnd: true }
        });
      if (image) {
        gsap.fromTo(image,
          { scale: 1.18, yPercent: -5 },
          {
            scale: 1.02,
            yPercent: 5,
            ease: 'none',
            scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: 1.1 }
          });
      }
    });

    const generic = selectAll('[data-reveal]:not([data-reveal="image"])').filter((element) =>
      !element.closest('.hero, .inner-hero, .project-hero') &&
      !element.matches('.display, blockquote') &&
      !select('.display, blockquote', element));
    generic.forEach((element, index) => {
      gsap.fromTo(element,
        { y: 55, opacity: 0, rotateX: 4 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: .9,
          delay: (index % 3) * .035,
          ease: 'power3.out',
          scrollTrigger: { trigger: element, start: 'top 90%', once: true, fastScrollEnd: true }
        });
    });

    selectAll('.section-label').forEach((label) => {
      if (label.closest('.hero, .inner-hero, .project-hero')) return;
      gsap.fromTo(label,
        { x: -26, opacity: 0, letterSpacing: '.28em' },
        {
          x: 0,
          opacity: 1,
          letterSpacing: '.16em',
          duration: .8,
          ease: 'power3.out',
          scrollTrigger: { trigger: label, start: 'top 92%', once: true }
        });
    });
  };

  const initHeroScroll = () => {
    const frontHero = select('.hero');
    if (frontHero) {
      ScrollTrigger.matchMedia({
        '(min-width: 901px)': () => {
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: frontHero,
              start: 'top top',
              end: '+=70%',
              pin: true,
              scrub: 1.1,
              anticipatePin: 1
            }
          });
          timeline
            .to('.hero__content', { yPercent: -28, opacity: 0, scale: .92, ease: 'none' }, 0)
            .to('.hero__controls, .hero__location', { opacity: 0, ease: 'none' }, 0)
            .to('.hero-slides', { scale: .9, borderRadius: '2.2rem', clipPath: 'inset(2.5% 2.5%)', ease: 'none' }, 0)
            .to('.hero-slide.is-active img', { scale: 1.13, filter: 'brightness(.75)', ease: 'none' }, 0);
        }
      });
    }

    selectAll('.inner-hero--image, .project-hero').forEach((pageHero) => {
      const image = select(':scope > img', pageHero);
      if (!image) return;
      gsap.to(image, {
        yPercent: 16,
        scale: 1.09,
        ease: 'none',
        scrollTrigger: { trigger: pageHero, start: 'top top', end: 'bottom top', scrub: 1 }
      });
      const content = select('.inner-hero__content, .project-hero__content', pageHero);
      if (content) {
        gsap.to(content, {
          y: -75,
          opacity: .15,
          ease: 'none',
          scrollTrigger: { trigger: pageHero, start: '35% top', end: 'bottom top', scrub: 1 }
        });
      }
    });
  };

  const initProjectStory = () => {
    const section = select('.selected-projects');
    const track = select('.selected-projects__grid');
    if (!section || !track) return;

    ScrollTrigger.matchMedia({
      '(min-width: 901px)': () => {
        const distance = () => Math.max(0, track.scrollWidth - innerWidth + parseFloat(getComputedStyle(section).paddingLeft) * 2);
        const horizontalTween = gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1.15,
            anticipatePin: 1,
            invalidateOnRefresh: true
          }
        });

        selectAll('.project-tile', track).forEach((card, index) => {
          gsap.fromTo(card,
            { y: index % 2 ? 60 : -20 },
            {
              y: index % 2 ? -35 : 25,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                containerAnimation: horizontalTween,
                start: 'left right',
                end: 'right left',
                scrub: true
              }
            });
        });
      }
    });
  };

  const initSectionChoreography = () => {
    const process = select('.process-steps');
    if (process) {
      const line = select('.process-motion-line', process);
      if (line) {
        gsap.to(line, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { trigger: process, start: 'top 78%', end: 'bottom 45%', scrub: 1 }
        });
      }
      gsap.fromTo(selectAll('li', process),
        { y: 70, opacity: .15 },
        {
          y: 0,
          opacity: 1,
          stagger: .14,
          ease: 'power3.out',
          scrollTrigger: { trigger: process, start: 'top 82%', end: 'bottom 65%', scrub: .8 }
        });
    }

    const studioImage = select('.studio-feature__image');
    if (studioImage) {
      gsap.to(studioImage, {
        clipPath: 'inset(0 0% 0 0)',
        ease: 'none',
        scrollTrigger: { trigger: '.studio-feature', start: 'top 85%', end: 'center center', scrub: 1 }
      });
      gsap.fromTo(select('.studio-feature__copy'),
        { x: 90, opacity: .25 },
        { x: 0, opacity: 1, ease: 'none', scrollTrigger: { trigger: '.studio-feature', start: 'top 80%', end: 'center center', scrub: 1 } });
    }

    const testimonial = select('.testimonial-section');
    if (testimonial) {
      const words = selectAll('.motion-word__inner', testimonial);
      gsap.to(words, {
        opacity: 1,
        stagger: .08,
        ease: 'none',
        scrollTrigger: { trigger: testimonial, start: 'top 72%', end: 'bottom 56%', scrub: 1 }
      });
    }

    const cta = select('.cta');
    if (cta) {
      gsap.fromTo(cta,
        { '--cta-scale': .25, '--cta-opacity': 0 },
        {
          '--cta-scale': 1.1,
          '--cta-opacity': 1,
          ease: 'none',
          scrollTrigger: { trigger: cta, start: 'top bottom', end: 'bottom top', scrub: 1 }
        });
    }

    const footerTrack = select('.footer-marquee__track');
    if (footerTrack) {
      gsap.fromTo(footerTrack,
        { xPercent: -15 },
        { xPercent: -52, ease: 'none', scrollTrigger: { trigger: '.site-footer', start: 'top bottom', end: 'bottom bottom', scrub: 1 } });
    }

    selectAll('.stats, .practice-facts').forEach((facts) => {
      gsap.fromTo(selectAll(':scope > *', facts),
        { y: 55, opacity: 0, scale: .95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: .1,
          duration: .85,
          ease: 'back.out(1.4)',
          scrollTrigger: { trigger: facts, start: 'top 85%', once: true }
        });
    });
  };

  const initPointerMotion = () => {
    if (!finePointer) return;

    const cursor = document.createElement('div');
    cursor.className = 'motion-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    cursor.innerHTML = '<div class="motion-cursor__ring"><i class="motion-cursor__dot"></i><span class="motion-cursor__label">OPEN</span></div>';
    body.append(cursor);
    const cursorLabel = select('.motion-cursor__label', cursor);
    const moveX = gsap.quickTo(cursor, 'x', { duration: .5, ease: 'power3.out' });
    const moveY = gsap.quickTo(cursor, 'y', { duration: .5, ease: 'power3.out' });

    addEventListener('pointermove', (event) => {
      moveX(event.clientX);
      moveY(event.clientY);
      cursor.classList.add('is-visible');
    }, { passive: true });
    addEventListener('pointerdown', () => cursor.classList.add('is-pressed'));
    addEventListener('pointerup', () => cursor.classList.remove('is-pressed'));
    document.addEventListener('mouseleave', () => cursor.classList.remove('is-visible'));

    selectAll('a, button, summary, input, select, textarea').forEach((element) => {
      const label = element.matches('.project-tile, .portfolio-item, .journal-card')
        ? 'VIEW'
        : element.matches('input, select, textarea')
          ? 'TYPE'
          : element.matches('summary')
            ? 'MORE'
            : 'OPEN';
      element.addEventListener('pointerenter', () => {
        cursorLabel.textContent = label;
        cursor.classList.add('is-active');
      });
      element.addEventListener('pointerleave', () => cursor.classList.remove('is-active', 'is-pressed'));
    });

    selectAll('.button, .header-link, .icon-button, .menu-toggle').forEach((element) => {
      element.addEventListener('pointermove', (event) => {
        const bounds = element.getBoundingClientRect();
        gsap.to(element, {
          x: (event.clientX - bounds.left - bounds.width / 2) * .22,
          y: (event.clientY - bounds.top - bounds.height / 2) * .22,
          duration: .45,
          ease: 'power3.out',
          overwrite: true
        });
      });
      element.addEventListener('pointerleave', () => gsap.to(element, { x: 0, y: 0, duration: .65, ease: 'elastic.out(1,.35)' }));
    });

    selectAll('.project-tile, .portfolio-item, .journal-card, .value-card, .service-card').forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const bounds = card.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - .5;
        const y = (event.clientY - bounds.top) / bounds.height - .5;
        gsap.to(card, {
          rotateY: x * 5,
          rotateX: y * -4,
          scale: 1.01,
          duration: .55,
          ease: 'power3.out',
          transformPerspective: 1000,
          overwrite: 'auto'
        });
        const image = select('img', card);
        if (image) gsap.to(image, { xPercent: x * 2.5, duration: .7, ease: 'power3.out', overwrite: 'auto' });
      });
      card.addEventListener('pointerleave', () => {
        gsap.to(card, { rotateY: 0, rotateX: 0, scale: 1, duration: .8, ease: 'elastic.out(1,.45)', overwrite: 'auto' });
        const image = select('img', card);
        if (image) gsap.to(image, { xPercent: 0, duration: .8, ease: 'power3.out', overwrite: 'auto' });
      });
    });

    if (hero) {
      hero.addEventListener('pointermove', (event) => {
        const image = select('.hero-slide.is-active img');
        if (!image) return;
        gsap.to(image, {
          x: (event.clientX / innerWidth - .5) * -16,
          y: (event.clientY / innerHeight - .5) * -10,
          duration: 1.2,
          ease: 'power3.out',
          overwrite: 'auto'
        });
      }, { passive: true });
    }
  };

  const initHeaderMotion = () => {
    if (!header) return;
    let hidden = false;
    ScrollTrigger.create({
      start: 120,
      end: 'max',
      onUpdate: (self) => {
        if (body.classList.contains('menu-open')) return;
        const shouldHide = self.direction === 1 && self.scroll() > 180;
        if (shouldHide === hidden) return;
        hidden = shouldHide;
        gsap.to(header, { yPercent: hidden ? -120 : 0, duration: .55, ease: 'power3.out', overwrite: true });
      }
    });
  };

  const initPageTransitions = () => {
    const wipe = select('.page-wipe');
    const panels = selectAll('.page-wipe__panel', wipe);
    const label = select('.page-wipe__label', wipe);
    selectAll('a[href]').forEach((link) => link.addEventListener('click', (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (link.target || link.hasAttribute('download')) return;
      const url = new URL(link.href, location.href);
      if (url.protocol === 'mailto:' || url.protocol === 'tel:' || url.hash || url.origin !== location.origin || url.pathname === location.pathname) return;
      event.preventDefault();
      lenis?.stop();
      wipe.style.visibility = 'visible';
      label.textContent = link.textContent.trim().split(/\s+/).slice(0, 2).join(' ');
      gsap.timeline({ onComplete: () => { location.href = link.href; } })
        .to(panels, { yPercent: -101, duration: 0 })
        .to(panels, { yPercent: 0, duration: .75, stagger: .055, ease: 'expo.inOut' })
        .to(label, { opacity: 1, yPercent: -8, duration: .55, ease: 'power3.out' }, .35);
    }));
  };

  const initMotion = () => {
    initScrollReveals();
    initHeroScroll();
    initProjectStory();
    initSectionChoreography();
    initPointerMotion();
    initHeaderMotion();
    initPageTransitions();
    requestAnimationFrame(() => ScrollTrigger.refresh());
    if (document.fonts?.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
  };

  if (document.readyState === 'complete') runLoader();
  else addEventListener('load', runLoader, { once: true });
  setTimeout(runLoader, 2500);
})();
