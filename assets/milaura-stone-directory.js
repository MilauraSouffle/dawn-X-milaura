(() => {
  const instances = new WeakMap();

  const initialize = (root) => {
    if (instances.has(root)) return;
    const mobile = matchMedia('(max-width: 749px)');
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    const controller = new AbortController();
    const options = { signal: controller.signal };
    const rows = [];
    root.dataset.enhanced = 'true';

    root.querySelectorAll('[data-stone-row]').forEach((row) => {
      const track = row.querySelector('[data-stone-track]');
      const viewport = row.querySelector('.milaura-stone-directory__viewport');
      const controls = row.querySelector('[data-stone-controls]');
      const prev = row.querySelector('[data-stone-prev]');
      const next = row.querySelector('[data-stone-next]');
      const position = row.querySelector('[data-stone-position]');
      const indicator = row.querySelector('.milaura-stone-directory__indicator');
      if (!track || !viewport || !controls || !prev || !next || !position || !indicator) return;
      const cards = Array.from(track.children);
      if (!cards.length) return;
      let index = 0;
      let step = 0;
      let offset = 0;
      let frame = 0;
      let gesture = null;
      let suppressClick = false;
      const clamp = (value, maximum) => Math.max(0, Math.min(maximum, value));
      row.style.setProperty('--milaura-stone-count', cards.length);

      const paint = () => {
        frame = 0;
        track.style.setProperty('--milaura-stone-offset', `${-offset}px`);
        indicator.style.setProperty('--milaura-stone-index', step ? offset / step : 0);
      };
      const render = () => {
        controls.hidden = !mobile.matches || cards.length < 2;
        prev.disabled = index === 0;
        next.disabled = index === cards.length - 1;
        position.textContent = `${index + 1} / ${cards.length}`;
      };
      const goTo = (selected, animate = true) => {
        index = clamp(selected, cards.length - 1);
        offset = index * step;
        row.style.setProperty('--milaura-stone-duration', animate && !reducedMotion.matches ? '280ms' : '0ms');
        paint();
        render();
      };
      const release = () => {
        const previous = gesture;
        gesture = null;
        cancelAnimationFrame(frame);
        frame = 0;
        row.classList.remove('is-dragging');
        if (previous && viewport.hasPointerCapture(previous.id)) viewport.releasePointerCapture(previous.id);
        return previous;
      };
      const finish = (event, cancelled = false) => {
        if (!gesture || (event && event.pointerId !== gesture.id)) return;
        const previous = release();
        if (!previous.dragging) return;
        if (cancelled) {
          goTo(Math.round(offset / step));
          return;
        }
        const distance = previous.x - previous.lastX;
        const recent = event.timeStamp - previous.lastTime < 120;
        const flick = recent && Math.abs(previous.velocity) > 0.45 && Math.abs(distance) > 12;
        const direction = flick ? -Math.sign(previous.velocity) : Math.abs(distance) > step * 0.18 ? Math.sign(distance) : 0;
        goTo(previous.index + direction);
      };
      const start = (event) => {
        if (!mobile.matches || !step || event.button !== 0) return;
        if (!event.isPrimary) { finish(null, true); return; }
        suppressClick = false;
        gesture = { id: event.pointerId, x: event.clientX, y: event.clientY, lastX: event.clientX, lastTime: event.timeStamp, velocity: 0, dragging: false };
      };
      const drag = (event) => {
        if (!gesture || event.pointerId !== gesture.id) return;
        const dx = event.clientX - gesture.x;
        const dy = event.clientY - gesture.y;
        if (!gesture.dragging) {
          if (Math.max(Math.abs(dx), Math.abs(dy)) < 6) return;
          if (Math.abs(dy) > Math.abs(dx)) { gesture = null; return; }
          const transform = getComputedStyle(track).transform;
          gesture.offset = transform === 'none' ? 0 : -new DOMMatrixReadOnly(transform).m41;
          gesture.index = Math.round(gesture.offset / step);
          gesture.dragging = true;
          suppressClick = true;
          row.classList.add('is-dragging');
          viewport.setPointerCapture(event.pointerId);
        }
        if (event.cancelable) event.preventDefault();
        const elapsed = event.timeStamp - gesture.lastTime;
        if (elapsed > 0) gesture.velocity = (event.clientX - gesture.lastX) / elapsed;
        gesture.lastX = event.clientX;
        gesture.lastTime = event.timeStamp;
        offset = clamp(gesture.offset - dx, (cards.length - 1) * step);
        if (!frame) frame = requestAnimationFrame(paint);
      };
      const layout = () => {
        release();
        step = mobile.matches && cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : 0;
        goTo(index, false);
      };
      prev.addEventListener('click', () => goTo(index - 1), options);
      next.addEventListener('click', () => goTo(index + 1), options);
      viewport.addEventListener('pointerdown', start, options);
      viewport.addEventListener('pointermove', drag, { ...options, passive: false });
      viewport.addEventListener('pointerup', (event) => finish(event), options);
      viewport.addEventListener('pointercancel', (event) => finish(event, true), options);
      viewport.addEventListener('lostpointercapture', (event) => {
        // Ignore the image's implicit capture being transferred to this viewport.
        if (event.target === viewport) finish(event, true);
      }, options);
      viewport.addEventListener('dragstart', (event) => { if (mobile.matches) event.preventDefault(); }, options);
      viewport.addEventListener('click', (event) => {
        if (!suppressClick || event.detail === 0) return;
        event.preventDefault();
        event.stopPropagation();
        suppressClick = false;
      }, { ...options, capture: true });
      viewport.addEventListener('focusin', (event) => {
        if (!mobile.matches || gesture || !event.target.matches(':focus-visible')) return;
        const selected = cards.indexOf(event.target.closest('[data-stone-card]'));
        if (selected !== -1) goTo(selected, false);
      }, options);
      rows.push({ layout, cleanup: release });
      layout();
    });

    const resize = () => rows.forEach(({ layout }) => layout());
    mobile.addEventListener('change', resize, options);
    let width = root.clientWidth;
    const observer = new ResizeObserver(() => {
      if (width === root.clientWidth) return;
      width = root.clientWidth;
      resize();
    });
    observer.observe(root);
    instances.set(root, () => {
      controller.abort();
      observer.disconnect();
      rows.forEach(({ cleanup }) => cleanup());
      delete root.dataset.enhanced;
      instances.delete(root);
    });
  };
  const directories = (scope) => [
    ...(scope.matches?.('[data-stone-directory]') ? [scope] : []),
    ...scope.querySelectorAll('[data-stone-directory]')
  ];
  const initializeAll = (scope = document) => directories(scope).forEach(initialize);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => initializeAll(), { once: true });
  else initializeAll();
  document.addEventListener('shopify:section:load', (event) => initializeAll(event.target));
  document.addEventListener('shopify:section:unload', (event) => {
    directories(event.target).forEach((root) => instances.get(root)?.());
  });
})();
