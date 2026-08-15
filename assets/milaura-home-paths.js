(() => {
  const initialize = (scope = document) => {
    scope.querySelectorAll('[data-milaura-home-paths]').forEach((root) => {
      if (root.dataset.homePathsReady === 'true') return;

      const tabs = Array.from(root.querySelectorAll('[data-home-path-tab]'));
      const panels = Array.from(root.querySelectorAll('[data-home-path-panel]'));
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

      root.dataset.homePathsReady = 'true';
      activate(Math.max(0, tabs.findIndex((tab) => tab.getAttribute('aria-selected') === 'true')));
    });
  };

  initialize();
  document.addEventListener('shopify:section:load', (event) => initialize(event.target));
})();
