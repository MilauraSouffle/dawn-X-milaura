(function () {
  'use strict';

  const normalise = (value) => String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

  const announceCount = (element, count, singular, plural) => {
    if (!element) return;
    element.textContent = `${count} ${count === 1 ? singular : plural}`;
  };

  const setupSelector = (root) => {
    const form = root.querySelector('[data-stone-form]');
    const resultList = root.querySelector('[data-stone-results]');
    const status = root.querySelector('[data-stone-status]');
    const reset = root.querySelector('[data-stone-reset]');
    if (!form || !resultList || !status) return;

    const cards = Array.from(resultList.querySelectorAll('[data-stone-id]'));

    const selectedValue = (name) => {
      const field = form.querySelector(`input[name="${name}"]:checked`);
      return field ? field.value : '';
    };

    const update = () => {
      const intention = selectedValue('intention');
      const color = selectedValue('color');
      const care = selectedValue('care');
      const hasChoice = Boolean(intention || color || care);

      const ranked = cards.map((card) => {
        const intentions = card.dataset.intentions.split(' ');
        const colors = card.dataset.colors.split(' ');
        let score = 0;
        if (intention && intentions.includes(intention)) score += 4;
        if (color && colors.includes(color)) score += 3;
        if (care && card.dataset.care === care) score += 2;
        return {
          card,
          score,
          order: Number(card.dataset.defaultOrder || 0)
        };
      }).sort((a, b) => b.score - a.score || a.order - b.order);

      let visible = ranked;
      if (hasChoice) {
        visible = ranked.filter((item) => item.score > 0).slice(0, 4);
      }
      const visibleCards = new Set(visible.map((item) => item.card));

      ranked.forEach((item, index) => {
        item.card.hidden = !visibleCards.has(item.card);
        item.card.style.order = String(index);
      });

      if (!hasChoice) {
        status.textContent = 'Toutes les pierres sont affichées. Choisissez un ou plusieurs repères pour les comparer.';
      } else if (visible.length === 0) {
        status.textContent = 'Aucune correspondance directe. Modifiez un repère ou recommencez.';
      } else {
        status.textContent = `${visible.length} ${visible.length === 1 ? 'pierre correspond' : 'pierres correspondent'} le mieux à vos repères.`;
      }
    };

    form.addEventListener('change', update);
    if (reset) {
      reset.addEventListener('click', () => {
        form.reset();
        update();
        form.querySelector('input')?.focus();
      });
    }
    update();
    root.dataset.enhanced = 'true';
  };

  const setupSearch = (root, options) => {
    const input = root.querySelector(options.input);
    const items = Array.from(root.querySelectorAll(options.item));
    const status = root.querySelector(options.status);
    const empty = root.querySelector(options.empty);
    if (!input || items.length === 0) return;

    const update = () => {
      const query = normalise(input.value);
      let count = 0;
      items.forEach((item) => {
        const haystack = normalise(item.dataset.stoneSearch);
        const isVisible = !query || haystack.includes(query);
        item.hidden = !isVisible;
        if (isVisible) count += 1;
      });
      announceCount(status, count, options.singular, options.plural);
      if (empty) empty.hidden = count !== 0;
    };

    input.addEventListener('input', update);
    update();
    root.dataset.enhanced = 'true';
  };

  document.querySelectorAll('[data-owned-selector]').forEach(setupSelector);
  document.querySelectorAll('[data-owned-care]').forEach((root) => setupSearch(root, {
    input: '[data-care-search]',
    item: '[data-care-row]',
    status: '[data-care-status]',
    empty: '[data-care-empty]',
    singular: 'pierre affichée',
    plural: 'pierres affichées'
  }));
  document.querySelectorAll('[data-owned-atlas]').forEach((root) => setupSearch(root, {
    input: '[data-atlas-search]',
    item: '[data-atlas-entry]',
    status: '[data-atlas-status]',
    empty: '[data-atlas-empty]',
    singular: 'fiche affichée',
    plural: 'fiches affichées'
  }));
})();
