(() => {
  const initialize = (scope = document) => {
    scope.querySelectorAll('[data-milaura-home-paths]').forEach((root) => {
      if (root.dataset.homePathsReady === 'true') return;

      const carousel = root.querySelector('[data-home-path-carousel]');
      const cards = Array.from(root.querySelectorAll('[data-home-path-card]'));
      if (!carousel || !cards.length) return;

      const activate = (activeCard) => {
        cards.forEach((card) => {
          card.dataset.active = String(card === activeCard);
        });
      };

      cards.forEach((card) => {
        card.addEventListener('mouseenter', () => activate(card));
        card.addEventListener('focusin', () => activate(card));
        card.addEventListener('pointerdown', () => activate(card), { passive: true });
      });

      let scrollFrame = 0;
      carousel.addEventListener(
        'scroll',
        () => {
          if (!window.matchMedia('(max-width: 749px)').matches || scrollFrame) return;

          scrollFrame = window.requestAnimationFrame(() => {
            const carouselBox = carousel.getBoundingClientRect();
            const carouselCenter = carouselBox.left + carouselBox.width / 2;
            const closestCard = cards.reduce((closest, card) => {
              const cardBox = card.getBoundingClientRect();
              const distance = Math.abs(cardBox.left + cardBox.width / 2 - carouselCenter);
              return !closest || distance < closest.distance ? { card, distance } : closest;
            }, null);

            if (closestCard) activate(closestCard.card);
            scrollFrame = 0;
          });
        },
        { passive: true }
      );

      root.dataset.homePathsReady = 'true';
      activate(cards.find((card) => card.dataset.active === 'true') || cards[0]);
    });
  };

  initialize();
  document.addEventListener('shopify:section:load', (event) => initialize(event.target));
})();
