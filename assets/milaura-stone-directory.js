(() => {
  const normalize = (value) => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/œ/g, 'oe').trim();
  const initialize = (root) => {
    if (root.dataset.initialized === 'true') return;
    root.dataset.initialized = 'true';
    const search = root.querySelector('[data-stone-search]');
    const cards = Array.from(root.querySelectorAll('[data-stone-card]'));
    const result = root.querySelector('[data-stone-result]');
    const empty = root.querySelector('[data-stone-empty]');
    const rows = Array.from(root.querySelectorAll('[data-stone-row]')).map((row) => {
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
      prev.addEventListener('click', () => move(-1));
      next.addEventListener('click', () => move(1));
      track.addEventListener('scroll', update, { passive: true });
      if ('ResizeObserver' in window) new ResizeObserver(update).observe(track);
      update();
      return { track, update };
    });
    search.addEventListener('input', () => {
      const query = normalize(search.value);
      let count = 0;
      cards.forEach((card) => {
        card.hidden = !normalize(card.dataset.stoneName).includes(query);
        if (!card.hidden) count += 1;
      });
      rows.forEach(({ track, update }) => { track.scrollLeft = 0; update(); });
      result.textContent = `${count} ${count === 1 ? 'pierre' : 'pierres'}`;
      empty.hidden = count > 0;
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
