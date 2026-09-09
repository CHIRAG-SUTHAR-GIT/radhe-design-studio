/* ═══════════════════════════════════════════════════════════════════════
   RADHE — the way in

   The sheet is held over the page until the reader asks to come in. Any
   gesture that means "onward" counts: a scroll, a wheel, a swipe up, a
   press of the arrow or space, or a tap on the cue at the foot.

   The page underneath does not scroll while it waits, and the scroll
   position is pinned at the top, so nothing has moved when the sheet
   opens.
   ═══════════════════════════════════════════════════════════════════════ */
(() => {
  'use strict';

  const root = document.documentElement;
  if (!root.classList.contains('is-intro')) return;   // desktop, or no sheet

  const sheet = document.querySelector('.intro');
  if (!sheet) { root.classList.remove('is-intro'); return; }

  let opened = false;

  function open() {
    if (opened) return;
    opened = true;

    // The arch climbs first; the flanks lift once it has.
    root.classList.add('is-opening');
    setTimeout(() => root.classList.add('is-gone'), 620);

    // Give the page back only once the sheet is out of the way, so the
    // reader cannot scroll the hero up behind a panel still crossing it.
    setTimeout(() => {
      root.classList.remove('is-intro');
      sheet.remove();
      // Anything that measured the page while it was locked measured a
      // page that could not scroll; tell it to look again.
      dispatchEvent(new Event('resize'));
      if (window.ScrollTrigger && ScrollTrigger.refresh) ScrollTrigger.refresh();
    }, 1500);

    off();
  }

  // Holding the page still. touchmove has to be cancelable to be stopped,
  // which is why it is not passive.
  const block = (e) => { if (!opened) e.preventDefault(); };
  const onKey = (e) => {
    if (['ArrowDown', 'PageDown', 'End', ' ', 'Spacebar', 'Enter'].includes(e.key)) {
      e.preventDefault();
      open();
    }
  };

  function on() {
    addEventListener('wheel', block, { passive: false });
    addEventListener('touchmove', block, { passive: false });
    addEventListener('wheel', open, { passive: true });
    addEventListener('touchmove', open, { passive: true });
    addEventListener('scroll', open, { passive: true });
    addEventListener('keydown', onKey);
    sheet.addEventListener('click', open);
  }
  function off() {
    removeEventListener('wheel', block, { passive: false });
    removeEventListener('touchmove', block, { passive: false });
    removeEventListener('wheel', open);
    removeEventListener('touchmove', open);
    removeEventListener('scroll', open);
    removeEventListener('keydown', onKey);
  }

  on();

  /* A swipe is a touch that travels; a tap is not. Reading the distance
     rather than trusting touchmove alone keeps a stray finger from opening
     the sheet before the reader means it to. */
  let y0 = null;
  addEventListener('touchstart', (e) => { y0 = e.touches[0].clientY; }, { passive: true });
  addEventListener('touchend', (e) => {
    if (y0 === null || opened) return;
    const y1 = (e.changedTouches[0] || {}).clientY;
    if (typeof y1 === 'number' && y0 - y1 > 24) open();
    y0 = null;
  }, { passive: true });

  /* Nothing should be able to strand a reader behind it. If the sheet is
     still up after eight seconds, it opens itself. */
  setTimeout(open, 8000);
})();
