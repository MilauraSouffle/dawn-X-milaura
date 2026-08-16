(() => {
  const initializeProofRails = (scope = document) => {
    scope.querySelectorAll('[data-milaura-product-proof]').forEach((root) => {
      if (root.dataset.productProofReady === 'true') return;

      const track = root.querySelector('[data-product-proof-track]');
      const cue = root.querySelector('[data-product-proof-cue]');
      if (!track || !cue) return;

      let updateFrame = null;

      const updateProofRail = () => {
        updateFrame = null;
        const maximumScroll = Math.max(0, track.scrollWidth - track.clientWidth);
        const isScrollable = maximumScroll > 1;
        cue.hidden = !isScrollable;
        const progress = isScrollable ? track.scrollLeft / maximumScroll : 0;
        const visibleRatio = track.scrollWidth > 0 ? track.clientWidth / track.scrollWidth : 1;
        root.style.setProperty('--milaura-proof-progress', String(Math.min(1, Math.max(0, progress))));
        root.style.setProperty('--milaura-proof-thumb-width', `${Math.max(18, visibleRatio * 100)}%`);
      };

      const requestProofRailUpdate = () => {
        if (updateFrame !== null) return;
        updateFrame = window.requestAnimationFrame(updateProofRail);
      };

      track.addEventListener('scroll', requestProofRailUpdate, { passive: true });
      if ('ResizeObserver' in window) {
        root.milauraProofResizeObserver = new ResizeObserver(requestProofRailUpdate);
        root.milauraProofResizeObserver.observe(track);
      }

      root.dataset.productProofReady = 'true';
      updateProofRail();
    });
  };

  const initializeGuides = (scope = document) => {
    scope.querySelectorAll('[data-milaura-product-guide]').forEach((root) => {
      if (root.dataset.productGuideReady === 'true') return;

      const tabs = Array.from(root.querySelectorAll('[data-product-guide-tab]'));
      const panels = Array.from(root.querySelectorAll('[data-product-guide-panel]'));
      if (!tabs.length || tabs.length !== panels.length) return;

      const activate = (index, moveFocus = false) => {
        tabs.forEach((tab, tabIndex) => {
          const isActive = tabIndex === index;
          tab.setAttribute('aria-selected', String(isActive));
          tab.tabIndex = isActive ? 0 : -1;
          panels[tabIndex].hidden = !isActive;
        });

        if (moveFocus) tabs[index].focus();
      };

      tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => activate(index));
        tab.addEventListener('keydown', (event) => {
          let nextIndex = index;

          if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
          if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
          if (event.key === 'Home') nextIndex = 0;
          if (event.key === 'End') nextIndex = tabs.length - 1;
          if (nextIndex === index) return;

          event.preventDefault();
          activate(nextIndex, true);
        });
      });

      const requestedPanel = window.location.hash.replace('#', '');
      const requestedIndex = tabs.findIndex((tab) => tab.dataset.productGuideKey === requestedPanel);
      const initialIndex = requestedIndex >= 0
        ? requestedIndex
        : Math.max(0, tabs.findIndex((tab) => tab.getAttribute('aria-selected') === 'true'));

      root.dataset.productGuideReady = 'true';
      activate(initialIndex);
    });
  };

  const initialize = (scope = document) => {
    initializeProofRails(scope);
    initializeGuides(scope);
  };

  initialize();
  document.addEventListener('shopify:section:load', (event) => initialize(event.target));
  document.addEventListener('shopify:section:unload', (event) => {
    event.target.querySelectorAll('[data-milaura-product-proof]').forEach((root) => {
      root.milauraProofResizeObserver?.disconnect();
    });
  });
})();
