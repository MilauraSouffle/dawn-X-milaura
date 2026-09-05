(() => {
  const instances = new WeakMap();

  const initialize = (root) => {
    if (instances.has(root)) return;
    const mobile = matchMedia('(max-width: 749px)');
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    const rows = [];
    root.dataset.enhanced = 'true';

    root.querySelectorAll('[data-stone-row]').forEach((row) => {
      const track = row.querySelector('[data-stone-track]');
      const viewport = row.querySelector('.milaura-stone-directory__viewport');
      const controls = row.querySelector('[data-stone-controls]');
      const prev = row.querySelector('[data-stone-prev]');
      const next = row.querySelector('[data-stone-next]');
      const position = row.querySelector('[data-stone-position]');
      if (!track || !viewport || !controls || !prev || !next || !position) return;
      const cards = Array.from(track.children);
      if (!cards.length) return;
      let index = 0;
      let step = 0;
      let target = null;
      row.style.setProperty('--milaura-stone-count', cards.length);

      const render = () => {
        const selected = target ?? index;
        controls.hidden = !mobile.matches || cards.length < 2;
        prev.disabled = selected === 0;
        next.disabled = selected === cards.length - 1;
        position.textContent = `${index + 1} / ${cards.length}`;
      };
      const synchronize = () => {
        if (!mobile.matches || !step) return;
        const progress = Math.max(0, Math.min(cards.length - 1, viewport.scrollLeft / step));
        row.style.setProperty('--milaura-stone-index', progress);
        const nextIndex = Math.round(progress);
        const arrived = target !== null && Math.abs(viewport.scrollLeft - target * step) < 1;
        if (nextIndex === index && !arrived) return;
        index = nextIndex;
        if (arrived) target = null;
        render();
      };
      const layout = () => {
        target = null;
        step = mobile.matches && cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : 0;
        viewport.scrollTo({ left: index * step, behavior: 'instant' });
        row.style.setProperty('--milaura-stone-index', mobile.matches ? index : 0);
        render();
      };
      const scrollToCard = (selected, behavior) => {
        if (!mobile.matches || !step) return;
        target = Math.max(0, Math.min(cards.length - 1, selected));
        viewport.scrollTo({ left: target * step, behavior });
        render();
      };
      const move = (direction) => scrollToCard((target ?? index) + direction, reducedMotion.matches ? 'instant' : 'smooth');
      const focus = (event) => {
        const selected = cards.indexOf(event.target.closest('[data-stone-card]'));
        if (selected !== -1) scrollToCard(selected, 'instant');
      };
      const releaseTarget = () => {
        target = null;
        render();
      };
      const previous = () => move(-1);
      const following = () => move(1);
      prev.addEventListener('click', previous);
      next.addEventListener('click', following);
      viewport.addEventListener('scroll', synchronize, { passive: true });
      viewport.addEventListener('pointerdown', releaseTarget, { passive: true });
      viewport.addEventListener('wheel', releaseTarget, { passive: true });
      viewport.addEventListener('focusin', focus);
      rows.push({ layout, cleanup: () => {
        prev.removeEventListener('click', previous);
        next.removeEventListener('click', following);
        viewport.removeEventListener('scroll', synchronize);
        viewport.removeEventListener('pointerdown', releaseTarget);
        viewport.removeEventListener('wheel', releaseTarget);
        viewport.removeEventListener('focusin', focus);
      } });
      layout();
    });

    const resize = () => rows.forEach(({ layout }) => layout());
    mobile.addEventListener('change', resize);
    let width = root.clientWidth;
    const observer = new ResizeObserver(() => {
      if (width === root.clientWidth) return;
      width = root.clientWidth;
      resize();
    });
    observer.observe(root);
    instances.set(root, () => {
      observer.disconnect();
      mobile.removeEventListener('change', resize);
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
