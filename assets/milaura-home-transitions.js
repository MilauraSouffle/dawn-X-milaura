(() => {
  const selector = '[data-milaura-home-transition]';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let observer;

  const reveal = (transition) => {
    transition.classList.add('is-visible');
  };

  const observe = (root = document) => {
    const transitions = root.querySelectorAll(selector);
    if (!transitions.length) return;

    if (reducedMotion || !('IntersectionObserver' in window)) {
      transitions.forEach(reveal);
      return;
    }

    observer ||= new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    transitions.forEach((transition) => observer.observe(transition));
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => observe(), { once: true });
  } else {
    observe();
  }

  document.addEventListener('shopify:section:load', (event) => observe(event.target));
})();
