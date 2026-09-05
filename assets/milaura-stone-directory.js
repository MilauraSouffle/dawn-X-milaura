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
      const visible = () => Array.from(track.children).filter((card) => !card.hidden);
      const update = () => {
        const shown = visible();
        row.hidden = shown.length === 0;
        const overflow = track.scrollWidth > track.clientWidth + 2;
        controls.hidden = shown.length < 2 || !overflow;
        prev.disabled = track.scrollLeft <= 2;
        next.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
        const center = track.getBoundingClientRect().left + track.clientWidth / 2;
        let active = 0;
        let distance = Infinity;
        shown.forEach((card, index) => {
          const rect = card.getBoundingClientRect();
          const current = Math.abs(rect.left + rect.width / 2 - center);
          if (current < distance) { active = index; distance = current; }
        });
        position.textContent = `${shown.length ? active + 1 : 0} / ${shown.length}`;
      };
      const move = (direction) => {
        const first = visible()[0];
        if (!first) return;
        const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
        track.scrollBy({ left: direction * (first.getBoundingClientRect().width + gap), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      };
      if ('PointerEvent' in window) {
        let gesture = null;
        let suppressClick = false;
        const targets = () => {
          const inset = parseFloat(getComputedStyle(track).scrollPaddingLeft) || 0;
          const left = track.getBoundingClientRect().left;
          const maximum = track.scrollWidth - track.clientWidth;
          return visible().map((card) => Math.max(0, Math.min(maximum, track.scrollLeft + card.getBoundingClientRect().left - left - inset)));
        };
        const nearest = (stops, offset) => stops.reduce((best, stop, index) => Math.abs(stop - offset) < Math.abs(stops[best] - offset) ? index : best, 0);
        const finish = (event) => {
          if (event.type === 'lostpointercapture' && event.target !== track) return;
          if (!gesture || gesture.id !== event.pointerId) return;
          const ended = gesture;
          gesture = null;
          if (track.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId);
          if (!ended.dragging) return;
          const stops = targets();
          let index = nearest(stops, track.scrollLeft);
          if (event.type === 'pointerup' && index === ended.index && Math.abs(ended.dx) >= 36) {
            index = Math.max(0, Math.min(stops.length - 1, index - Math.sign(ended.dx)));
          }
          track.classList.remove('is-dragging');
          track.scrollTo({ left: stops[index], behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
        };
        track.classList.add('is-swipe-ready');
        track.addEventListener('pointerdown', (event) => {
          if (!event.isPrimary || event.button !== 0 || track.scrollWidth <= track.clientWidth + 2) return;
          suppressClick = false;
          gesture = { id: event.pointerId, x: event.clientX, y: event.clientY, left: track.scrollLeft, index: nearest(targets(), track.scrollLeft), dx: 0, dragging: false };
        });
        track.addEventListener('pointermove', (event) => {
          if (!gesture || gesture.id !== event.pointerId) return;
          const dx = event.clientX - gesture.x;
          const dy = event.clientY - gesture.y;
          if (!gesture.dragging) {
            if (Math.max(Math.abs(dx), Math.abs(dy)) < 8) return;
            if (Math.abs(dy) >= Math.abs(dx)) { gesture = null; return; }
            gesture.dragging = true;
            suppressClick = true;
            track.classList.add('is-dragging');
            track.setPointerCapture(event.pointerId);
          }
          gesture.dx = dx;
          event.preventDefault();
          track.scrollLeft = gesture.left - dx;
        });
        track.addEventListener('pointerup', finish);
        track.addEventListener('pointercancel', finish);
        track.addEventListener('lostpointercapture', finish);
        track.addEventListener('dragstart', (event) => {
          if (track.scrollWidth > track.clientWidth + 2) event.preventDefault();
        });
        track.addEventListener('click', (event) => {
          if (!suppressClick || event.detail === 0) return;
          event.preventDefault();
          event.stopPropagation();
          suppressClick = false;
        }, true);
      }
      prev.addEventListener('click', () => move(-1));
      next.addEventListener('click', () => move(1));
      track.addEventListener('scroll', update, { passive: true });
      if ('ResizeObserver' in window) new ResizeObserver(update).observe(track);
      update();
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
