(() => {
  const selector = '[data-milaura-choice-flow]';

  const initChoiceFlow = (root) => {
    if (!root || root.dataset.initialized === 'true') return;
    root.dataset.initialized = 'true';

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealItems = Array.from(root.querySelectorAll('.milaura-choice-flow__reveal'));

    if (!reduceMotion && 'IntersectionObserver' in window) {
      root.dataset.motionReady = 'true';
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      }, {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.12
      });

      revealItems.forEach((item) => observer.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add('is-visible'));
    }

    root.addEventListener('click', (event) => {
      const link = event.target.closest('[data-choice-path]');
      if (!link) return;

      document.dispatchEvent(new CustomEvent('milaura:guide-choice', {
        detail: {
          path: link.dataset.choicePath,
          value: link.dataset.choiceValue || '',
          href: link.href
        }
      }));
    });
  };

  const initAll = (scope = document) => {
    scope.querySelectorAll(selector).forEach(initChoiceFlow);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initAll());
  } else {
    initAll();
  }

  document.addEventListener('shopify:section:load', (event) => initAll(event.target));
})();
