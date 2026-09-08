/* ═══════════════════════════════════════════════════════════════════════
   RADHE — the photograph, on its own

   Every plate on the index and the projects wall links straight to its own
   image file. That is the whole behaviour without this script: click, and
   the browser shows the photograph. This only takes that over so the page
   underneath is not lost — the picture opens on the spot instead.

   Nothing else is on the screen. No caption, no counter, no chrome beyond
   a way out: escape, the close button, or a click anywhere.
   ═══════════════════════════════════════════════════════════════════════ */
(() => {
  'use strict';

  let box = null, img = null, lastFocus = null;

  function build() {
    box = document.createElement('div');
    box.className = 'pv';
    box.hidden = true;
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', 'Photograph');
    box.innerHTML = '<button class="pv__close" type="button" aria-label="Close">&#10005;</button>'
                  + '<img class="pv__img" alt="">';
    img = box.querySelector('.pv__img');

    // A click anywhere closes: on the photograph, on the ground around it,
    // or on the button. There is nothing here you would click to keep open.
    box.addEventListener('click', close);
    document.body.appendChild(box);
  }

  function open(src, alt) {
    if (!box) build();
    lastFocus = document.activeElement;
    img.src = src;
    img.alt = alt || '';
    box.hidden = false;
    document.documentElement.classList.add('pv-lock');
    // A frame between showing it and adding the class, or the transition
    // has nothing to move from.
    requestAnimationFrame(() => box.classList.add('is-open'));
    box.querySelector('.pv__close').focus();
  }

  function close() {
    if (!box || box.hidden) return;
    box.classList.remove('is-open');
    document.documentElement.classList.remove('pv-lock');
    const done = () => {
      box.hidden = true;
      img.removeAttribute('src');       // let the browser release it
      box.removeEventListener('transitionend', done);
    };
    box.addEventListener('transitionend', done);
    setTimeout(done, 400);              // in case the transition never fires
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

  addEventListener('click', (e) => {
    const link = e.target.closest && e.target.closest('a[data-photo]');
    if (!link) return;
    // Let the browser handle the ways a reader asks for a new tab.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    const picture = link.querySelector('img');
    open(link.getAttribute('href'), picture ? picture.alt : '');
  });
})();
