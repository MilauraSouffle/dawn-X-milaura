(() => {
  const instances = new WeakMap();

  const initialize = (root) => {
    if (instances.has(root)) return;
    const mobile = matchMedia('(max-width: 749px)');
    const rows = [];
    const hint = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting || !mobile.matches) return;
        target.classList.add('is-hinted');
        hint.unobserve(target);
      });
    }, { threshold: 0.5 }) : null;

    root.querySelectorAll('[data-stone-row]').forEach((row) => {
      const track = row.querySelector('[data-stone-track]');
      const controls = row.querySelector('[data-stone-controls]');
      const prev = row.querySelector('[data-stone-prev]');
      const next = row.querySelector('[data-stone-next]');
      const position = row.querySelector('[data-stone-position]');
      if (!track || !controls || !prev || !next || !position) return;
      const cards = Array.from(track.children);
      if (!cards.length) return;
      let index = 0;

      const render = () => {
        const active = mobile.matches && cards.length > 1;
        track.style.setProperty('--milaura-stone-index', active ? index : 0);
        controls.hidden = !active;
        position.hidden = !active;
        prev.disabled = index === 0;
        next.disabled = index === cards.length - 1;
        position.textContent = `${index + 1} / ${cards.length}`;
        cards.forEach((card, i) => {
          const concealed = mobile.matches && i !== index;
          card.inert = concealed;
          if (concealed) card.setAttribute('aria-hidden', 'true');
          else card.removeAttribute('aria-hidden');
        });
      };
      const move = (direction) => {
        index = Math.max(0, Math.min(cards.length - 1, index + direction));
        row.classList.remove('is-hinted');
        hint?.unobserve(row);
        render();
      };
      const previous = () => move(-1);
      const following = () => move(1);
      prev.addEventListener('click', previous);
      next.addEventListener('click', following);
      hint?.observe(row);
      rows.push({ render, cleanup: () => {
        prev.removeEventListener('click', previous);
        next.removeEventListener('click', following);
      } });
      render();
    });

    const resize = () => rows.forEach(({ render }) => render());
    mobile.addEventListener('change', resize);
    root.dataset.enhanced = 'true';
    instances.set(root, () => {
      mobile.removeEventListener('change', resize);
      hint?.disconnect();
      rows.forEach(({ cleanup }) => cleanup());
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
