(() => {
  const initializeTabs = (tabs) => {
    if (!tabs || tabs.dataset.initialized === 'true') return;

    const triggers = Array.from(tabs.querySelectorAll('[data-hub-tab]'));
    const panels = Array.from(tabs.querySelectorAll('[data-hub-panel]'));
    if (!triggers.length || !panels.length) return;

    const activate = (trigger, moveFocus = false, shouldScroll = true) => {
      const panelId = trigger.getAttribute('aria-controls');

      triggers.forEach((item) => {
        const isActive = item === trigger;
        item.setAttribute('aria-selected', String(isActive));
        item.setAttribute('tabindex', isActive ? '0' : '-1');
      });

      panels.forEach((panel) => {
        panel.hidden = panel.id !== panelId;
      });

      if (moveFocus) trigger.focus();
      if (shouldScroll) {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        trigger.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest', inline: 'center' });
      }
    };

    triggers.forEach((trigger, index) => {
      trigger.addEventListener('click', (event) => {
        event.preventDefault();
        activate(trigger);
      });

      trigger.addEventListener('keydown', (event) => {
        let nextIndex = null;

        if (event.key === 'ArrowRight') nextIndex = (index + 1) % triggers.length;
        if (event.key === 'ArrowLeft') nextIndex = (index - 1 + triggers.length) % triggers.length;
        if (event.key === 'Home') nextIndex = 0;
        if (event.key === 'End') nextIndex = triggers.length - 1;

        if (nextIndex !== null) {
          event.preventDefault();
          activate(triggers[nextIndex], true);
        }
      });
    });

    const defaultTrigger = triggers.find((trigger) => trigger.dataset.default === 'true') || triggers[0];
    tabs.classList.add('is-enhanced');
    tabs.dataset.initialized = 'true';
    activate(defaultTrigger, false, false);
  };

  const initializeAll = (root = document) => {
    root.querySelectorAll('[data-hub-tabs]').forEach(initializeTabs);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initializeAll());
  } else {
    initializeAll();
  }

  document.addEventListener('shopify:section:load', (event) => initializeAll(event.target));
})();
