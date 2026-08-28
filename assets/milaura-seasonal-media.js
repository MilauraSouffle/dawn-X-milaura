(() => {
  const selector = '[data-milaura-seasonal-scene]';

  const initScenes = (root = document) => {
    root.querySelectorAll(selector).forEach((scene) => {
      if (scene.dataset.seasonalSceneReady === 'true') return;
      scene.dataset.seasonalSceneReady = 'true';

      const section = scene.closest('.milaura-season, .milaura-sodalite-landing');
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
      let animationFrame = 0;

      const setActive = (active) => {
        scene.classList.toggle('is-seasonal-active', active);
        section?.classList.toggle('is-seasonal-active', active);
      };

      const resetParallax = () => {
        scene.style.removeProperty('--seasonal-shift-x');
        scene.style.removeProperty('--seasonal-shift-y');
        scene.style.removeProperty('--seasonal-rotate-y');
      };

      const onPointerMove = (event) => {
        if (!finePointer.matches || reducedMotion.matches) return;
        const bounds = scene.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;

        cancelAnimationFrame(animationFrame);
        animationFrame = requestAnimationFrame(() => {
          scene.style.setProperty('--seasonal-shift-x', `${(x * 7).toFixed(2)}px`);
          scene.style.setProperty('--seasonal-shift-y', `${(y * 5).toFixed(2)}px`);
          scene.style.setProperty('--seasonal-rotate-y', `${(x * 1.3).toFixed(2)}deg`);
        });
      };

      const observer = new IntersectionObserver(
        ([entry]) => setActive(entry.isIntersecting),
        { rootMargin: '80px 0px', threshold: 0.18 }
      );

      scene.addEventListener('pointermove', onPointerMove, { passive: true });
      scene.addEventListener('pointerleave', resetParallax);
      reducedMotion.addEventListener('change', () => {
        if (reducedMotion.matches) resetParallax();
      });
      observer.observe(scene);
    });
  };

  document.addEventListener('DOMContentLoaded', () => initScenes());
  document.addEventListener('shopify:section:load', (event) => initScenes(event.target));
})();
