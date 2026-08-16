(function () {
  'use strict';

  var CONFIG_VERSION = '2026-08-16.v1';

  function createConfigurationId() {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') {
      return window.crypto.randomUUID();
    }

    return 'atelier-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10);
  }

  function normalizeWord(value) {
    return value
      .replace(/[’`]/g, "'")
      .replace(/\s+/g, ' ')
      .toLocaleUpperCase('fr-FR');
  }

  function initPrototype(root) {
    if (!root || root.dataset.prototypeInitialized === 'true') {
      return;
    }

    var prototype = root.querySelector('[data-atelier-prototype]');
    if (!prototype) {
      return;
    }

    var input = prototype.querySelector('[data-prototype-word-input]');
    var slots = Array.prototype.slice.call(prototype.querySelectorAll('[data-prototype-slot]'));
    var orbit = prototype.querySelector('[data-prototype-orbit]');
    var centerWord = prototype.querySelector('[data-prototype-center-word]');
    var count = prototype.querySelector('[data-prototype-count]');
    var live = prototype.querySelector('[data-prototype-live]');
    var tabs = Array.prototype.slice.call(prototype.querySelectorAll('[data-prototype-tab]'));
    var panels = Array.prototype.slice.call(prototype.querySelectorAll('[data-prototype-panel]'));
    var animationTimer;

    if (!input || slots.length === 0) {
      return;
    }

    root.dataset.prototypeInitialized = 'true';

    function activateTab(tab, shouldFocus) {
      var panelName = tab.dataset.prototypeTab;

      tabs.forEach(function (item) {
        var active = item === tab;
        item.setAttribute('aria-selected', active ? 'true' : 'false');
        item.tabIndex = active ? 0 : -1;
      });

      panels.forEach(function (panel) {
        panel.hidden = panel.dataset.prototypePanel !== panelName;
      });

      if (shouldFocus) {
        tab.focus();
      }
    }

    function updatePrototype() {
      var maximumLength = Number(input.maxLength) || 10;
      var normalized = normalizeWord(input.value);
      var characters = Array.from(normalized).slice(0, maximumLength);
      var firstSlot = 12 + Math.floor((characters.length - 1) / 2);

      input.value = characters.join('');
      slots.forEach(function (slot) {
        slot.textContent = '';
        slot.classList.remove('has-letter');
      });

      characters.forEach(function (character, characterIndex) {
        var slotIndex = firstSlot - characterIndex;
        var slot = slots[slotIndex];
        if (slot) {
          slot.textContent = character === ' ' ? '·' : character;
          slot.classList.add('has-letter');
        }
      });

      if (centerWord) {
        centerWord.textContent = normalized.trim() || 'VOTRE MOT';
      }

      if (count) {
        count.textContent = characters.length + '/' + maximumLength;
      }

      if (live) {
        live.textContent = characters.length
          ? 'Aperçu mis à jour avec ' + characters.length + ' caractères.'
          : 'Aperçu vide.';
      }

      if (orbit) {
        window.clearTimeout(animationTimer);
        orbit.classList.remove('is-updating');
        window.requestAnimationFrame(function () {
          orbit.classList.add('is-updating');
          animationTimer = window.setTimeout(function () {
            orbit.classList.remove('is-updating');
          }, 420);
        });
      }
    }

    tabs.forEach(function (tab, tabIndex) {
      tab.addEventListener('click', function () {
        activateTab(tab, false);
      });

      tab.addEventListener('keydown', function (event) {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight' && event.key !== 'Home' && event.key !== 'End') {
          return;
        }

        event.preventDefault();
        var nextIndex = tabIndex;

        if (event.key === 'ArrowLeft') {
          nextIndex = (tabIndex - 1 + tabs.length) % tabs.length;
        } else if (event.key === 'ArrowRight') {
          nextIndex = (tabIndex + 1) % tabs.length;
        } else if (event.key === 'Home') {
          nextIndex = 0;
        } else if (event.key === 'End') {
          nextIndex = tabs.length - 1;
        }

        activateTab(tabs[nextIndex], true);
      });
    });

    input.addEventListener('input', updatePrototype);
    input.addEventListener('blur', updatePrototype);
    activateTab(tabs[0], false);
    updatePrototype();
  }

  function initAtelier(root) {
    if (!root) {
      return;
    }

    initPrototype(root);

    if (root.dataset.atelierInitialized === 'true' || root.dataset.ready !== 'true') {
      return;
    }

    var form = root.querySelector('[data-atelier-form]');
    if (!form) {
      return;
    }

    root.dataset.atelierInitialized = 'true';
    root.dataset.enhanced = 'true';

    var steps = Array.prototype.slice.call(root.querySelectorAll('[data-step]'));
    var indicators = Array.prototype.slice.call(root.querySelectorAll('[data-step-indicator]'));
    var status = root.querySelector('[data-atelier-status]');
    var messageInput = root.querySelector('[data-word-input]');
    var noteInput = root.querySelector('[data-note-input]');
    var wordError = root.querySelector('[data-word-error]');
    var characterCount = root.querySelector('[data-character-count]');
    var variantSelect = root.querySelector('[data-variant-select]');
    var sizeProperty = root.querySelector('[data-size-property]');
    var summaryPrice = root.querySelector('[data-summary-price]');
    var configIdInput = root.querySelector('[data-config-id]');
    var configJsonInput = root.querySelector('[data-config-json]');
    var allowedCharacters = root.dataset.allowedCharacters || '';
    var currentStep = 0;

    configIdInput.value = createConfigurationId();

    function announce(message) {
      if (status) {
        status.textContent = message || '';
      }
    }

    function selectedOption(group) {
      return root.querySelector('[data-option-group="' + group + '"]:checked');
    }

    function reviewValue(key, value) {
      var target = root.querySelector('[data-review="' + key + '"]');
      if (target) {
        target.textContent = value || 'Aucun';
      }
    }

    function updateComponent(group) {
      var input = selectedOption(group);
      var hiddenProperty = root.querySelector('[data-component-property="' + group + '"]');
      var preview = root.querySelector('[data-preview-group="' + group + '"]');
      var label = input ? input.dataset.previewLabel || input.value : '';
      var componentId = input ? input.dataset.componentId || '' : '';
      var imageUrl = input ? input.dataset.previewImage || '' : '';

      if (hiddenProperty) {
        hiddenProperty.value = componentId;
      }

      if (preview) {
        var image = preview.querySelector('[data-preview-image]');
        var caption = preview.querySelector('[data-preview-label]');

        if (image) {
          if (imageUrl) {
            image.src = imageUrl;
            image.alt = label;
            image.hidden = false;
          } else {
            image.removeAttribute('src');
            image.alt = '';
            image.hidden = true;
          }
        }

        if (caption) {
          caption.textContent = label || (group === 'charm' ? 'Sans charm' : 'Choix a confirmer');
        }
      }

      reviewValue(group, label || (group === 'charm' ? 'Aucun' : 'A confirmer'));
    }

    function updateVariant() {
      var option = variantSelect.options[variantSelect.selectedIndex];
      if (!option) {
        return;
      }

      var title = option.dataset.variantTitle || option.textContent.trim();
      var price = option.dataset.variantPrice || '';
      sizeProperty.value = title;
      reviewValue('size', title);

      if (summaryPrice) {
        summaryPrice.textContent = price;
      }
    }

    function validateWord() {
      var normalized = normalizeWord(messageInput.value);
      var invalidCharacters = [];

      messageInput.value = normalized;
      characterCount.textContent = String(Array.from(normalized).length);

      Array.from(normalized).forEach(function (character) {
        if (allowedCharacters && allowedCharacters.indexOf(character) === -1 && invalidCharacters.indexOf(character) === -1) {
          invalidCharacters.push(character);
        }
      });

      if (!normalized.trim()) {
        messageInput.setCustomValidity('Saisissez le mot à monter sur le bracelet.');
        wordError.textContent = '';
        return false;
      }

      if (invalidCharacters.length > 0) {
        var invalidMessage = 'Caractère non disponible : ' + invalidCharacters.join(' ');
        messageInput.setCustomValidity(invalidMessage);
        wordError.textContent = invalidMessage;
        return false;
      }

      messageInput.setCustomValidity('');
      wordError.textContent = '';
      return true;
    }

    function updateWord() {
      var word = normalizeWord(messageInput.value);
      var preview = root.querySelector('[data-word-preview]');
      characterCount.textContent = String(Array.from(word).length);

      if (preview) {
        preview.textContent = word || 'VOTRE MOT';
      }

      reviewValue('word', word || 'A confirmer');
    }

    function updateNote() {
      var note = noteInput.value.trim();
      reviewValue('note', note || 'Aucune');
    }

    function updateConfigurationJson() {
      var variantId = variantSelect.value;
      var palette = selectedOption('palette');
      var letterFinish = selectedOption('letter_finish');
      var charm = selectedOption('charm');
      var payload = {
        version: CONFIG_VERSION,
        variant_id: variantId,
        palette_id: palette ? palette.dataset.componentId || '' : '',
        letter_finish_id: letterFinish ? letterFinish.dataset.componentId || '' : '',
        charm_id: charm ? charm.dataset.componentId || '' : ''
      };

      configJsonInput.value = JSON.stringify(payload);
    }

    function updateAll() {
      updateVariant();
      updateComponent('palette');
      updateComponent('letter_finish');
      updateComponent('charm');
      updateWord();
      updateNote();
      updateConfigurationJson();
    }

    function firstInvalidField(step) {
      var fields = Array.prototype.slice.call(step.querySelectorAll('input, select, textarea'));
      return fields.find(function (field) {
        return !field.disabled && field.type !== 'hidden' && !field.checkValidity();
      });
    }

    function validateStep(index) {
      if (index === 1) {
        validateWord();
      }

      var invalidField = firstInvalidField(steps[index]);
      if (!invalidField) {
        announce('');
        return true;
      }

      announce('Un choix doit être complété avant de continuer.');
      invalidField.reportValidity();
      invalidField.focus();
      return false;
    }

    function showStep(index, shouldFocus) {
      currentStep = Math.max(0, Math.min(index, steps.length - 1));
      root.dataset.currentStep = String(currentStep + 1);

      steps.forEach(function (step, stepIndex) {
        var active = stepIndex === currentStep;
        step.dataset.active = active ? 'true' : 'false';
        step.setAttribute('aria-hidden', active ? 'false' : 'true');
      });

      indicators.forEach(function (indicator, indicatorIndex) {
        if (indicatorIndex === currentStep) {
          indicator.setAttribute('aria-current', 'step');
        } else {
          indicator.removeAttribute('aria-current');
        }

        indicator.dataset.completed = indicatorIndex < currentStep ? 'true' : 'false';
      });

      updateAll();
      announce('Étape ' + (currentStep + 1) + ' sur ' + steps.length + '.');

      if (shouldFocus) {
        var legend = steps[currentStep].querySelector('.milaura-atelier__step-title');
        if (legend) {
          legend.focus({ preventScroll: true });
          legend.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }

    root.querySelectorAll('[data-step-next]').forEach(function (button) {
      button.addEventListener('click', function () {
        if (validateStep(currentStep)) {
          showStep(currentStep + 1, true);
        }
      });
    });

    root.querySelectorAll('[data-step-back]').forEach(function (button) {
      button.addEventListener('click', function () {
        showStep(currentStep - 1, true);
      });
    });

    root.querySelectorAll('[data-option-group]').forEach(function (input) {
      input.addEventListener('change', function () {
        updateComponent(input.dataset.optionGroup);
        updateConfigurationJson();
      });
    });

    variantSelect.addEventListener('change', function () {
      updateVariant();
      updateConfigurationJson();
    });

    messageInput.addEventListener('input', function () {
      messageInput.setCustomValidity('');
      wordError.textContent = '';
      updateWord();
    });

    messageInput.addEventListener('blur', function () {
      validateWord();
      updateWord();
    });

    noteInput.addEventListener('input', updateNote);

    form.addEventListener('submit', function (event) {
      validateWord();
      updateAll();

      var invalidStepIndex = steps.findIndex(function (step) {
        return Boolean(firstInvalidField(step));
      });

      if (invalidStepIndex !== -1) {
        event.preventDefault();
        showStep(invalidStepIndex, true);
        var invalidField = firstInvalidField(steps[invalidStepIndex]);
        if (invalidField) {
          invalidField.reportValidity();
          invalidField.focus();
        }
        return;
      }

      messageInput.value = normalizeWord(messageInput.value).trim();
      noteInput.value = noteInput.value.trim();
      updateConfigurationJson();
    });

    showStep(0, false);
  }

  function initAll(scope) {
    if (scope.matches && scope.matches('[data-milaura-atelier]')) {
      initAtelier(scope);
    }

    scope.querySelectorAll('[data-milaura-atelier]').forEach(initAtelier);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initAll(document);
    });
  } else {
    initAll(document);
  }

  document.addEventListener('shopify:section:load', function (event) {
    initAll(event.target);
  });
})();
