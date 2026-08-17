/**
 * Deliberate architectural drawing loops for plain light and dark sections.
 * Each canvas draws one coherent orthogonal plan, holds it, then quietly resets.
 */
(() => {
  'use strict';

  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const DARK = {
    grid: 'rgba(240, 201, 168, .045)',
    fine: 'rgba(240, 201, 168, .12)',
    wall: 'rgba(250, 247, 241, .2)',
    dimension: 'rgba(240, 201, 168, .18)',
    label: 'rgba(250, 247, 241, .22)',
  };

  const LIGHT = {
    grid: 'rgba(17, 16, 14, .032)',
    fine: 'rgba(189, 79, 50, .085)',
    wall: 'rgba(17, 16, 14, .115)',
    dimension: 'rgba(189, 79, 50, .13)',
    label: 'rgba(17, 16, 14, .17)',
  };

  // Endpoints are intentionally ordered so lines arrive from all four directions.
  // Every segment remains orthogonal: no decorative diagonal strokes.
  const PLANS = [
    [
      [0.08, 0.08, 0.92, 0.08, 2], [0.92, 0.88, 0.92, 0.08, 2],
      [0.92, 0.88, 0.08, 0.88, 2], [0.08, 0.08, 0.08, 0.88, 2],
      [0.34, 0.08, 0.34, 0.43, 1], [0.72, 0.43, 0.72, 0.08, 1],
      [0.08, 0.43, 0.22, 0.43, 1], [0.72, 0.43, 0.45, 0.43, 1],
      [0.92, 0.43, 0.82, 0.43, 1], [0.82, 0.88, 0.82, 0.43, 1],
      [0.34, 0.64, 0.08, 0.64, 1], [0.34, 0.52, 0.34, 0.88, 1],
      [0.58, 0.43, 0.58, 0.72, 1], [0.34, 0.72, 0.58, 0.72, 1],
      [0.82, 0.72, 0.68, 0.72, 1], [0.68, 0.88, 0.68, 0.72, 1],
      [0.21, 0.64, 0.21, 0.8, 1], [0.08, 0.8, 0.21, 0.8, 1],
    ],
    [
      [0.12, 0.12, 0.88, 0.12, 2], [0.88, 0.84, 0.88, 0.12, 2],
      [0.88, 0.84, 0.12, 0.84, 2], [0.12, 0.12, 0.12, 0.84, 2],
      [0.44, 0.12, 0.44, 0.35, 1], [0.7, 0.35, 0.7, 0.12, 1],
      [0.12, 0.35, 0.32, 0.35, 1], [0.7, 0.35, 0.55, 0.35, 1],
      [0.88, 0.35, 0.8, 0.35, 1], [0.8, 0.84, 0.8, 0.55, 1],
      [0.44, 0.55, 0.12, 0.55, 1], [0.44, 0.43, 0.44, 0.84, 1],
      [0.62, 0.35, 0.62, 0.7, 1], [0.44, 0.7, 0.62, 0.7, 1],
      [0.8, 0.55, 0.7, 0.55, 1], [0.7, 0.84, 0.7, 0.55, 1],
      [0.28, 0.55, 0.28, 0.73, 1], [0.12, 0.73, 0.28, 0.73, 1],
    ],
  ];

  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const easeOut = (value) => 1 - Math.pow(1 - clamp(value), 3);

  const isDark = (element) => (
    element.classList.contains('section--dark') ||
    (element.classList.contains('inner-hero') && !element.classList.contains('inner-hero--image')) ||
    element.classList.contains('site-footer') ||
    element.tagName === 'FOOTER'
  );

  const isLight = (element) => {
    if (
      element.classList.contains('section--dark') ||
      element.classList.contains('section--sand') ||
      element.classList.contains('section--clay') ||
      element.classList.contains('quote-grid') ||
      element.classList.contains('hero') ||
      element.classList.contains('ticker') ||
      element.classList.contains('cta') ||
      element.classList.contains('project-hero') ||
      element.classList.contains('studio-image') ||
      element.classList.contains('gallery')
    ) return false;
    return element.classList.contains('section') || element.classList.contains('manifesto');
  };

  class PlanCanvas {
    constructor(section, index) {
      this.section = section;
      this.index = index;
      this.scheme = isDark(section) ? DARK : LIGHT;
      this.segments = PLANS[index % PLANS.length];
      this.flipX = index % 3 === 1;
      this.flipY = index % 4 === 2;
      this.visible = false;
      this.frame = 0;
      this.lastPaint = 0;
      this.startedAt = 0;

      this.canvas = document.createElement('canvas');
      this.canvas.className = 'blueprint-canvas';
      this.canvas.setAttribute('aria-hidden', 'true');
      if (getComputedStyle(section).position === 'static') section.style.position = 'relative';
      section.prepend(this.canvas);
      this.context = this.canvas.getContext('2d');
      this.resize();
    }

    resize() {
      const bounds = this.section.getBoundingClientRect();
      // One backing-store pixel per CSS pixel keeps tall portfolio sections light.
      const ratio = 1;
      this.width = Math.max(1, Math.round(bounds.width));
      this.height = Math.max(1, Math.round(bounds.height));
      this.canvas.width = Math.round(this.width * ratio);
      this.canvas.height = Math.round(this.height * ratio);
      this.canvas.style.width = `${this.width}px`;
      this.canvas.style.height = `${this.height}px`;
      this.context.setTransform(ratio, 0, 0, ratio, 0, 0);

      this.planWidth = Math.min(this.width * .78, 980);
      this.planHeight = Math.min(this.height * .68, 580);
      const drift = Math.min(this.width * .085, 120) * (this.index % 2 ? -1 : 1);
      this.planX = (this.width - this.planWidth) / 2 + drift;
      this.planY = (this.height - this.planHeight) / 2;
    }

    point(x, y) {
      const px = this.flipX ? 1 - x : x;
      const py = this.flipY ? 1 - y : y;
      return [this.planX + px * this.planWidth, this.planY + py * this.planHeight];
    }

    drawGrid(context) {
      context.save();
      context.strokeStyle = this.scheme.grid;
      context.lineWidth = 1;
      const spacing = 64;
      context.beginPath();
      for (let x = (this.index * 17) % spacing; x < this.width; x += spacing) {
        context.moveTo(x, 0);
        context.lineTo(x, this.height);
      }
      for (let y = (this.index * 29) % spacing; y < this.height; y += spacing) {
        context.moveTo(0, y);
        context.lineTo(this.width, y);
      }
      context.stroke();
      context.restore();
    }

    drawSegment(context, segment, amount, opacity) {
      const [x1, y1] = this.point(segment[0], segment[1]);
      const [x2, y2] = this.point(segment[2], segment[3]);
      const x = x1 + (x2 - x1) * amount;
      const y = y1 + (y2 - y1) * amount;
      context.save();
      context.globalAlpha = opacity;
      context.strokeStyle = segment[4] === 2 ? this.scheme.wall : this.scheme.fine;
      context.lineWidth = segment[4] === 2 ? 1.5 : 1;
      context.beginPath();
      context.moveTo(x1, y1);
      context.lineTo(x, y);
      context.stroke();
      context.restore();
    }

    drawDimensions(context, opacity) {
      if (opacity <= 0) return;
      const [left, top] = this.point(.08, .03);
      const [right] = this.point(.92, .03);
      const [, bottom] = this.point(.03, .88);
      const [side] = this.point(.03, .08);

      context.save();
      context.globalAlpha = opacity;
      context.strokeStyle = this.scheme.dimension;
      context.fillStyle = this.scheme.label;
      context.lineWidth = 1;
      context.setLineDash([5, 5]);
      context.beginPath();
      context.moveTo(left, top);
      context.lineTo(right, top);
      context.moveTo(side, this.point(.03, .08)[1]);
      context.lineTo(side, bottom);
      context.stroke();
      context.setLineDash([]);
      context.font = '500 9px "DM Mono", Consolas, monospace';
      context.textAlign = 'center';
      context.fillText('8400', (left + right) / 2, top - 8);
      context.save();
      context.translate(side - 9, (this.point(.03, .08)[1] + bottom) / 2);
      context.rotate(-Math.PI / 2);
      context.fillText('6200', 0, 0);
      context.restore();
      context.textAlign = 'left';
      context.fillText(`A—${String(this.index + 1).padStart(2, '0')}  /  GROUND PLAN`, this.planX + this.planWidth * .08, this.planY + this.planHeight * .96);
      context.restore();
    }

    paint(time) {
      if (!this.visible) return;
      if (this.lastPaint && time - this.lastPaint < 40) {
        this.frame = requestAnimationFrame((next) => this.paint(next));
        return;
      }
      this.lastPaint = time;

      const context = this.context;
      if (!this.startedAt) this.startedAt = time;
      const cycleDuration = 13800;
      const cycle = (time - this.startedAt) % cycleDuration;
      const lineDuration = 1050;
      const stagger = 230;
      const drawEnd = (this.segments.length - 1) * stagger + lineDuration;
      const fadeStart = 10800;
      const fade = cycle < fadeStart ? 1 : 1 - clamp((cycle - fadeStart) / 1900);

      context.clearRect(0, 0, this.width, this.height);
      this.drawGrid(context);

      this.segments.forEach((segment, segmentIndex) => {
        const amount = easeOut((cycle - segmentIndex * stagger) / lineDuration);
        if (amount > 0) this.drawSegment(context, segment, amount, fade);
      });

      const detailOpacity = easeOut((cycle - drawEnd + 350) / 900) * fade;
      this.drawDimensions(context, detailOpacity);
      this.frame = requestAnimationFrame((next) => this.paint(next));
    }

    start() {
      if (this.visible) return;
      this.visible = true;
      this.lastPaint = 0;
      this.startedAt = 0;
      this.frame = requestAnimationFrame((time) => this.paint(time));
    }

    stop() {
      this.visible = false;
      cancelAnimationFrame(this.frame);
    }
  }

  const candidates = [...document.querySelectorAll('section, footer, .manifesto')]
    .filter((element, index, list) => list.indexOf(element) === index)
    .filter((element) => isDark(element) || isLight(element));
  const instances = candidates.map((section, index) => new PlanCanvas(section, index));
  const bySection = new Map(instances.map((instance) => [instance.section, instance]));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const instance = bySection.get(entry.target);
      if (!instance) return;
      if (entry.isIntersecting) instance.start();
      else instance.stop();
    });
  }, { rootMargin: '100px 0px' });
  instances.forEach((instance) => observer.observe(instance.section));

  let resizeTimer = 0;
  addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => instances.forEach((instance) => instance.resize()), 180);
  }, { passive: true });
})();
