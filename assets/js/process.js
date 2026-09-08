/* ==========================================================================
   Our process — the zigzag draws itself
   On narrow screens the five stages step left and right down a connecting
   bar. Each stage, and the piece of bar that reaches it, is held back until
   it comes into view, so the line appears to be drawn as you scroll.

   An observer rather than a scroll handler: this fires a handful of times in
   the life of the page instead of on every frame of every scroll.
   ========================================================================== */
(function () {
  'use strict';

  var row = document.querySelector('.proc-row');
  if (!row) return;
  var steps = Array.prototype.slice.call(row.querySelectorAll('.pstep'));
  if (!steps.length) return;

  // Nothing to reveal if the visitor asked for stillness, or if the browser
  // cannot observe — in both cases the stages simply start visible.
  if (!window.IntersectionObserver ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;                              // leave the stages plainly visible
  }

  // Only now does the CSS start hiding anything.
  row.classList.add('is-anim');

  // Each stage is given its own small delay so the bar reads as one line
  // being drawn rather than five arriving at once.
  steps.forEach(function (step, i) {
    step.style.setProperty('--step-delay', (i % 5) * 90 + 'ms');
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      io.unobserve(entry.target);          // once drawn, leave it alone
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.25 });

  steps.forEach(function (step) { io.observe(step); });
})();
