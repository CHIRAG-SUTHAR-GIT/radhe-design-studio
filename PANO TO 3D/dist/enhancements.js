(() => {
  'use strict';

  const coreHandlers = new WeakMap();
  const watchedEvents = new Set(['pointerdown', 'pointermove', 'pointerup', 'pointercancel', 'wheel']);
  const nativeCanvasAdd = HTMLCanvasElement.prototype.addEventListener;

  /* ── Drag-origin tracking for inversion ── */
  const dragOrigins = new Map(); // pointerId -> { startX, startY }

  HTMLCanvasElement.prototype.addEventListener = function (type, listener, options) {
    if (watchedEvents.has(type) && !coreHandlers.has(this)) coreHandlers.set(this, {});
    const handlers = coreHandlers.get(this);
    if (handlers && !handlers[type]) {
      if (type === 'pointerdown') {
        // Wrap pointerdown to record drag origin
        const origDown = listener;
        handlers[type] = function (e) {
          dragOrigins.set(e.pointerId, { startX: e.clientX, startY: e.clientY });
          return origDown.call(this, e);
        };
        return nativeCanvasAdd.call(this, type, handlers[type], options);
      } else if (type === 'pointermove') {
        // Wrap pointermove to invert delta (mirror around drag start)
        // Only for real user events, not synthetic ones from auto-rotate/inertia
        const origMove = listener;
        handlers[type] = function (e) {
          const origin = dragOrigins.get(e.pointerId);
          if (origin && !e._synthetic) {
            const mirroredX = origin.startX - (e.clientX - origin.startX);
            const mirroredY = origin.startY - (e.clientY - origin.startY);
            const inverted = new Proxy(e, {
              get(target, prop) {
                if (prop === 'clientX') return mirroredX;
                if (prop === 'clientY') return mirroredY;
                const val = target[prop];
                return typeof val === 'function' ? val.bind(target) : val;
              }
            });
            return origMove.call(this, inverted);
          }
          return origMove.call(this, e);
        };
        return nativeCanvasAdd.call(this, type, handlers[type], options);
      } else if (type === 'pointerup' || type === 'pointercancel') {
        const origUp = listener;
        handlers[type] = function (e) {
          dragOrigins.delete(e.pointerId);
          return origUp.call(this, e);
        };
        return nativeCanvasAdd.call(this, type, handlers[type], options);
      } else {
        handlers[type] = listener;
      }
    }
    return nativeCanvasAdd.call(this, type, listener, options);
  };

  const onReady = (callback) => {
    const existing = document.querySelector('.viewer canvas');
    if (existing) return callback(existing);
    const observer = new MutationObserver(() => {
      const canvas = document.querySelector('.viewer canvas');
      if (!canvas) return;
      observer.disconnect();
      callback(canvas);
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  };

  onReady((canvas) => {
    const handlers = coreHandlers.get(canvas) || {};
    const actions = document.querySelector('.canvas-actions');
    const stage = document.querySelector('.stage');
    const shell = document.querySelector('.app-shell');
    const sourceInput = document.querySelector('input[type="file"]');
    if (!actions || !stage || !shell) return;

    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const syntheticIds = new Set([9101, 9102, 9103]);
    const nativeSetCapture = canvas.setPointerCapture?.bind(canvas);
    const nativeReleaseCapture = canvas.releasePointerCapture?.bind(canvas);
    const nativeHasCapture = canvas.hasPointerCapture?.bind(canvas);

    if (nativeSetCapture) canvas.setPointerCapture = (id) => syntheticIds.has(id) ? undefined : nativeSetCapture(id);
    if (nativeReleaseCapture) canvas.releasePointerCapture = (id) => syntheticIds.has(id) ? undefined : nativeReleaseCapture(id);
    if (nativeHasCapture) canvas.hasPointerCapture = (id) => syntheticIds.has(id) ? false : nativeHasCapture(id);

    const invoke = (type, event) => {
      const handler = handlers[type];
      if (typeof handler === 'function') handler(event);
      else if (handler?.handleEvent) handler.handleEvent(event);
    };

    const fakeEvent = (pointerId, clientX, clientY) => ({
      pointerId,
      clientX,
      clientY,
      _synthetic: true,
      preventDefault() { }
    });

    const clickButton = (title) => document.querySelector(`button[title="${title}"]`)?.click();

    const makeTool = (label, icon, title, onClick) => {
      const button = document.createElement('button');
      button.className = 'icon-button dark pano-tool';
      button.type = 'button';
      button.title = title;
      button.setAttribute('aria-label', title);
      button.innerHTML = `<span aria-hidden="true">${icon}</span><span class="pano-tool__label">${label}</span>`;
      button.addEventListener('click', onClick);
      actions.append(button);
      return button;
    };

    document.querySelector('.brand-row h1')?.replaceChildren('Radhe 360 Studio');
    canvas.setAttribute('aria-label', 'Interactive 360-degree architectural panorama');
    canvas.tabIndex = 0;

    /* ── AutoCAD-style crosshair cursor ── */
    const crosshairSVG = `<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'><line x1='16' y1='0' x2='16' y2='13' stroke='%23fff' stroke-width='1.2'/><line x1='16' y1='19' x2='16' y2='32' stroke='%23fff' stroke-width='1.2'/><line x1='0' y1='16' x2='13' y2='16' stroke='%23fff' stroke-width='1.2'/><line x1='19' y1='16' x2='32' y2='16' stroke='%23fff' stroke-width='1.2'/><circle cx='16' cy='16' r='2' fill='none' stroke='%23fff' stroke-width='0.8'/></svg>`;
    canvas.style.cursor = `url("data:image/svg+xml,${crosshairSVG}") 16 16, crosshair`;
    shell.classList.add('panel-collapsed');

    const panelButton = makeTool('Controls', '☰', 'Toggle tour controls', () => {
      const collapsed = shell.classList.toggle('panel-collapsed');
      panelButton.classList.toggle('is-active', !collapsed);
      panelButton.setAttribute('aria-expanded', String(!collapsed));
      setTimeout(() => dispatchEvent(new Event('resize')), 80);
      setTimeout(() => dispatchEvent(new Event('resize')), 680);
    });
    panelButton.setAttribute('aria-expanded', 'false');

    const tourStrip = document.createElement('nav');
    tourStrip.className = 'tour-strip';
    tourStrip.setAttribute('aria-label', 'Panorama scenes');
    stage.append(tourStrip);

    let sceneUrls = [];
    let sceneFiles = [];
    let internalSceneChange = false;

    const loadScene = (index) => {
      if (!sourceInput || !sceneFiles[index]) return;
      const transfer = new DataTransfer();
      transfer.items.add(sceneFiles[index]);
      internalSceneChange = true;
      sourceInput.files = transfer.files;
      sourceInput.dispatchEvent(new Event('change', { bubbles: true }));
      internalSceneChange = false;
      [...tourStrip.children].forEach((item, itemIndex) => {
        item.classList.toggle('is-active', itemIndex === index);
        item.setAttribute('aria-current', itemIndex === index ? 'true' : 'false');
      });
    };

    const renderScenes = (files) => {
      sceneUrls.forEach((url) => URL.revokeObjectURL(url));
      sceneFiles = files;
      sceneUrls = files.map((file) => URL.createObjectURL(file));
      tourStrip.replaceChildren();
      files.forEach((file, index) => {
        const button = document.createElement('button');
        const image = document.createElement('img');
        const label = document.createElement('span');
        button.type = 'button';
        button.className = `tour-strip__item${index === 0 ? ' is-active' : ''}`;
        button.setAttribute('aria-label', `Open panorama ${index + 1}: ${file.name}`);
        button.setAttribute('aria-current', index === 0 ? 'true' : 'false');
        image.src = sceneUrls[index];
        image.alt = '';
        label.textContent = file.name.replace(/\.[^.]+$/, '');
        button.append(image, label);
        button.addEventListener('click', () => loadScene(index));
        tourStrip.append(button);
      });
      tourStrip.classList.toggle('has-scenes', files.length > 1);
      if (files.length > 1) {
        hint.textContent = `${files.length} scenes loaded · Choose a room below`;
        hint.classList.remove('is-hidden');
        hintTimer = setTimeout(() => hint.classList.add('is-hidden'), 4200);
      }
    };

    if (sourceInput) {
      sourceInput.multiple = true;
      sourceInput.addEventListener('change', () => {
        if (internalSceneChange) return;
        const files = [...(sourceInput.files || [])].filter((file) => file.type.startsWith('image/'));
        if (files.length) renderScenes(files);
      });
    }

    const hint = document.createElement('div');
    hint.className = 'interaction-hint';
    hint.textContent = matchMedia('(pointer: coarse)').matches
      ? 'Swipe to look around · Pinch controls coming from your browser'
      : 'Drag to look around · Scroll to zoom · Use arrow keys';
    stage.append(hint);

    let hintTimer = setTimeout(() => hint.classList.add('is-hidden'), 6500);
    const dismissHint = () => {
      clearTimeout(hintTimer);
      hint.classList.add('is-hidden');
    };
    canvas.addEventListener('pointerdown', dismissHint, { once: true });
    canvas.addEventListener('wheel', dismissHint, { once: true, passive: true });

    const toast = document.createElement('div');
    toast.className = 'pano-toast';
    toast.setAttribute('role', 'status');
    stage.append(toast);
    let toastTimer = 0;
    const showToast = (message) => {
      toast.textContent = message;
      toast.classList.add('is-visible');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3200);
    };

    const zoom = (direction) => invoke('wheel', { deltaY: direction, preventDefault() { } });
    makeTool('Zoom in', '+', 'Zoom in', () => zoom(-1));
    makeTool('Zoom out', '−', 'Zoom out', () => zoom(1));

    let autoRotate = false;
    let autoFrame = 0;
    let autoPausedUntil = 0;
    const autoButton = makeTool('Auto', '↻', 'Toggle automatic panorama rotation', () => {
      autoRotate = !autoRotate;
      autoButton.classList.toggle('is-active', autoRotate);
      autoButton.setAttribute('aria-pressed', String(autoRotate));
      if (autoRotate) {
        showToast('Automatic panorama tour started.');
        if (!autoFrame) autoFrame = requestAnimationFrame(runAutoRotate);
      } else {
        cancelAnimationFrame(autoFrame);
        autoFrame = 0;
      }
    });
    autoButton.setAttribute('aria-pressed', 'false');

    function runAutoRotate(time) {
      if (!autoRotate) return;
      if (time > autoPausedUntil && !reducedMotion) {
        const id = 9102;
        invoke('pointerdown', fakeEvent(id, 0, 0));
        invoke('pointermove', fakeEvent(id, .42, 0));
        invoke('pointerup', fakeEvent(id, .42, 0));
      }
      autoFrame = requestAnimationFrame(runAutoRotate);
    }

    let motionActive = false;
    let orientationStarted = false;
    let previousBeta = 0;
    let previousGamma = 0;
    let motionX = 0;
    let motionY = 0;
    const motionId = 9101;

    const shortestAngle = (next, previous) => {
      let delta = next - previous;
      while (delta > 180) delta -= 360;
      while (delta < -180) delta += 360;
      return delta;
    };

    const handleOrientation = (event) => {
      if (!motionActive || event.beta == null || event.gamma == null) return;
      if (!orientationStarted) {
        previousBeta = event.beta;
        previousGamma = event.gamma;
        orientationStarted = true;
        invoke('pointerdown', fakeEvent(motionId, motionX, motionY));
        return;
      }
      const deltaBeta = shortestAngle(event.beta, previousBeta);
      const deltaGamma = shortestAngle(event.gamma, previousGamma);
      previousBeta = event.beta;
      previousGamma = event.gamma;
      motionX += deltaGamma * 3.2;
      motionY += deltaBeta * 2.1;
      invoke('pointermove', fakeEvent(motionId, motionX, motionY));
    };

    const stopMotion = () => {
      if (orientationStarted) invoke('pointerup', fakeEvent(motionId, motionX, motionY));
      removeEventListener('deviceorientation', handleOrientation);
      motionActive = false;
      orientationStarted = false;
      motionButton.classList.remove('is-active');
      motionButton.setAttribute('aria-pressed', 'false');
    };

    const startMotion = async () => {
      if (!('DeviceOrientationEvent' in window)) {
        showToast('Motion control is not available on this device.');
        return;
      }
      try {
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
          const permission = await DeviceOrientationEvent.requestPermission();
          if (permission !== 'granted') throw new Error('permission-denied');
        }
        motionActive = true;
        motionButton.classList.add('is-active');
        motionButton.setAttribute('aria-pressed', 'true');
        addEventListener('deviceorientation', handleOrientation, { passive: true });
        showToast('Motion look is on — turn or tilt your device to explore.');
      } catch {
        showToast('Motion permission was not granted. You can still swipe to explore.');
      }
    };

    const motionButton = makeTool('Motion', '◇', 'Toggle gyroscope motion control', () => {
      if (motionActive) stopMotion();
      else startMotion();
    });
    motionButton.setAttribute('aria-pressed', 'false');

    const fullscreenButton = makeTool('Full screen', '⛶', 'Toggle full screen', async () => {
      try {
        if (document.fullscreenElement) await document.exitFullscreen();
        else await document.documentElement.requestFullscreen();
      } catch {
        showToast('Full screen is not available in this browser.');
      }
    });

    document.addEventListener('fullscreenchange', () => {
      const active = Boolean(document.fullscreenElement);
      fullscreenButton.classList.toggle('is-active', active);
      fullscreenButton.setAttribute('aria-pressed', String(active));
    });
    fullscreenButton.setAttribute('aria-pressed', 'false');

    let inertiaFrame = 0;
    let velocityX = 0;
    let velocityY = 0;
    let previousX = 0;
    let previousY = 0;
    let previousTime = 0;
    let trackingPointer = -1;

    const stopInertia = () => {
      cancelAnimationFrame(inertiaFrame);
      inertiaFrame = 0;
    };

    canvas.addEventListener('pointerdown', (event) => {
      stopInertia();
      if (motionActive) stopMotion();
      trackingPointer = event.pointerId;
      previousX = event.clientX;
      previousY = event.clientY;
      previousTime = performance.now();
      velocityX = 0;
      velocityY = 0;
      autoPausedUntil = performance.now() + 4500;
    }, { passive: true });

    canvas.addEventListener('pointermove', (event) => {
      if (event.pointerId !== trackingPointer) return;
      const now = performance.now();
      const elapsed = Math.max(8, now - previousTime);
      const sampleX = (event.clientX - previousX) / elapsed;
      const sampleY = (event.clientY - previousY) / elapsed;
      velocityX = velocityX * .58 + sampleX * .42;
      velocityY = velocityY * .58 + sampleY * .42;
      previousX = event.clientX;
      previousY = event.clientY;
      previousTime = now;
    }, { passive: true });

    const startInertia = () => {
      if (reducedMotion || Math.hypot(velocityX, velocityY) < .035) return;
      const id = 9103;
      let x = 0;
      let y = 0;
      let last = performance.now();
      invoke('pointerdown', fakeEvent(id, x, y));
      const glide = (now) => {
        const elapsed = Math.min(34, now - last);
        last = now;
        x += velocityX * elapsed;
        y += velocityY * elapsed;
        invoke('pointermove', fakeEvent(id, x, y));
        const friction = Math.pow(.92, elapsed / 16.67);
        velocityX *= friction;
        velocityY *= friction;
        if (Math.hypot(velocityX, velocityY) > .012) inertiaFrame = requestAnimationFrame(glide);
        else {
          invoke('pointerup', fakeEvent(id, x, y));
          inertiaFrame = 0;
        }
      };
      inertiaFrame = requestAnimationFrame(glide);
    };

    const finishPointer = (event) => {
      if (event.pointerId !== trackingPointer) return;
      trackingPointer = -1;
      startInertia();
    };
    canvas.addEventListener('pointerup', finishPointer, { passive: true });
    canvas.addEventListener('pointercancel', finishPointer, { passive: true });

    const nudge = (x, y) => {
      const id = 9103;
      invoke('pointerdown', fakeEvent(id, 0, 0));
      invoke('pointermove', fakeEvent(id, x, y));
      invoke('pointerup', fakeEvent(id, x, y));
    };

    canvas.addEventListener('keydown', (event) => {
      const keyActions = {
        ArrowLeft: () => nudge(34, 0),
        ArrowRight: () => nudge(-34, 0),
        ArrowUp: () => nudge(0, 28),
        ArrowDown: () => nudge(0, -28),
        '+': () => zoom(-1),
        '=': () => zoom(-1),
        '-': () => zoom(1),
        '0': () => clickButton('Reset view'),
        f: () => fullscreenButton.click(),
        F: () => fullscreenButton.click()
      };
      const action = keyActions[event.key];
      if (!action) return;
      event.preventDefault();
      dismissHint();
      action();
    });

    canvas.addEventListener('dblclick', () => clickButton('Reset view'));

    /* ── Auto-load scene from URL parameter ── */
    const urlParams = new URLSearchParams(location.search);
    const scenePath = urlParams.get('scene');
    if (scenePath && sourceInput) {
      const feedFile = (blob, name) => {
        const file = new File([blob], name, { type: blob.type || 'image/png' });
        const transfer = new DataTransfer();
        transfer.items.add(file);
        sourceInput.files = transfer.files;
        sourceInput.dispatchEvent(new Event('change', { bubbles: true }));
      };

      const loadAutoScene = () => {
        const fileName = decodeURIComponent(scenePath).split('/').pop();

        // Primary: fetch API (reliable on HTTP servers)
        fetch(scenePath)
          .then(r => { if (!r.ok) throw new Error(r.status); return r.blob(); })
          .then(blob => feedFile(blob, fileName))
          .catch(() => {
            // Fallback: XHR (works on file:// with status 0)
            const xhr = new XMLHttpRequest();
            xhr.open('GET', scenePath, true);
            xhr.responseType = 'blob';
            xhr.onload = () => {
              if ((xhr.status === 0 || xhr.status === 200) && xhr.response && xhr.response.size > 0) {
                feedFile(xhr.response, fileName);
              }
            };
            xhr.send();
          });
      };
      // Delay to let the viewer fully initialize its React/Three.js components
      setTimeout(loadAutoScene, 1200);

      /* ── Auto-enter fullscreen when scene is loaded via URL param ── */
      const tryFullscreen = () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => { });
        }
      };
      // Fullscreen requires user gesture — listen for first interaction on the parent page
      // The iframe load itself counts if triggered by a click from experience.html
      setTimeout(tryFullscreen, 800);
    }
  });
})();
