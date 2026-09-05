(() => {
  const initialize = (root) => {
    if (root.dataset.initialized === 'true') return;
    root.dataset.initialized = 'true';
    root.querySelectorAll('[data-stone-row]').forEach((row) => {
      const track = row.querySelector('[data-stone-track]');
      const controls = row.querySelector('[data-stone-controls]');
      const prev = row.querySelector('[data-stone-prev]');
      const next = row.querySelector('[data-stone-next]');
      const position = row.querySelector('[data-stone-position]');
      let stops = [];
      let maximum = 0;
      let frame = 0;
      const nearest = (offset) => stops.reduce((best, stop, index) => Math.abs(stop - offset) < Math.abs(stops[best] - offset) ? index : best, 0);
      const update = () => {
        frame = 0;
        const offset = track.scrollLeft;
        const atStart = offset <= 2;
        const atEnd = offset >= maximum - 2;
        const label = `${stops.length ? nearest(offset) + 1 : 0} / ${stops.length}`;
        if (prev.disabled !== atStart) prev.disabled = atStart;
        if (next.disabled !== atEnd) next.disabled = atEnd;
        if (position.textContent !== label) position.textContent = label;
      };
      const measure = () => {
        const shown = Array.from(track.children).filter((card) => !card.hidden);
        const empty = shown.length === 0;
        if (row.hidden !== empty) row.hidden = empty;
        maximum = Math.max(0, track.scrollWidth - track.clientWidth);
        const hideControls = shown.length < 2 || maximum <= 2;
        if (controls.hidden !== hideControls) controls.hidden = hideControls;
        const left = track.getBoundingClientRect().left;
        const inset = parseFloat(getComputedStyle(track).scrollPaddingLeft) || 0;
        const offset = track.scrollLeft;
        stops = shown.map((card) => Math.max(0, Math.min(maximum, offset + card.getBoundingClientRect().left - left - inset)));
        if (frame) cancelAnimationFrame(frame);
        update();
      };
      const move = (direction) => {
        if (!stops.length) return;
        const index = Math.max(0, Math.min(stops.length - 1, nearest(track.scrollLeft) + direction));
        track.scrollTo({ left: stops[index], behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      };
      prev.addEventListener('click', () => move(-1));
      next.addEventListener('click', () => move(1));
      // Touch and momentum stay native. Scrolling only updates changed controls.
      track.addEventListener('scroll', () => {
        if (!frame) frame = requestAnimationFrame(update);
      }, { passive: true });
      if ('ResizeObserver' in window) new ResizeObserver(measure).observe(track);
      measure();
    });
  };
  const initializeAll = (root = document) => {
    if (root.matches?.('[data-stone-directory]')) initialize(root);
    root.querySelectorAll('[data-stone-directory]').forEach(initialize);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => initializeAll());
  else initializeAll();
  document.addEventListener('shopify:section:load', (event) => initializeAll(event.target));
})();
