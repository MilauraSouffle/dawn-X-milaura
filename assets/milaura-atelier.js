(function () {
  'use strict';

  var CONFIG_VERSION = '2026-08-17.v1';

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
    var specification = prototype.querySelector('[data-prototype-spec]');
    var capacity = prototype.querySelector('[data-prototype-capacity]');
    var count = prototype.querySelector('[data-prototype-count]');
    var wordStatus = prototype.querySelector('[data-prototype-word-status]');
    var fitNote = prototype.querySelector('[data-prototype-fit-note]');
    var catalogStatus = prototype.querySelector('[data-prototype-catalog-status]');
    var live = prototype.querySelector('[data-prototype-live]');
    var resetButton = prototype.querySelector('[data-prototype-reset]');
    var tabs = Array.prototype.slice.call(prototype.querySelectorAll('[data-prototype-tab]'));
    var panels = Array.prototype.slice.call(prototype.querySelectorAll('[data-prototype-panel]'));
    var wristInputs = Array.prototype.slice.call(prototype.querySelectorAll('[data-prototype-wrist-input]'));
    var stoneInputs = Array.prototype.slice.call(prototype.querySelectorAll('[data-prototype-stone-input]'));
    var catalog = { components: [] };
    var selections = { letter_finish: null, charm: null };
    var activeSlotCount = 24;
    var theoreticalSlotCount = 24;
    var animationTimer;
    var storageKey = 'milauraAtelierPrototype:' + (prototype.dataset.prototypeConfigVersion || CONFIG_VERSION);

    if (!input || slots.length === 0) {
      return;
    }

    root.dataset.prototypeInitialized = 'true';

    function selectedInput(inputs) {
      return inputs.find(function (item) {
        return item.checked;
      });
    }

    function reviewValue(key, value) {
      var target = prototype.querySelector('[data-prototype-review="' + key + '"]');
      if (target) {
        target.textContent = value;
      }
    }

    function readSession() {
      try {
        return JSON.parse(window.sessionStorage.getItem(storageKey) || '{}');
      } catch (error) {
        return {};
      }
    }

    function writeSession() {
      var wrist = selectedInput(wristInputs);
      var stone = selectedInput(stoneInputs);
      var state = {
        version: prototype.dataset.prototypeConfigVersion || CONFIG_VERSION,
        wrist: wrist ? wrist.value : 'woman',
        stone: stone ? stone.value : '06',
        word: normalizeWord(input.value).trim(),
        letter_finish_id: selections.letter_finish ? selections.letter_finish.id : '',
        charm_id: selections.charm ? selections.charm.id : ''
      };

      try {
        window.sessionStorage.setItem(storageKey, JSON.stringify(state));
      } catch (error) {
        return;
      }
    }

    function restoreSession() {
      var state = readSession();

      if (state.word) {
        input.value = state.word;
      }

      wristInputs.forEach(function (item) {
        item.checked = item.value === (state.wrist || 'woman');
      });

      stoneInputs.forEach(function (item) {
        item.checked = item.value === (state.stone || '06');
      });

      return state;
    }

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

    function componentStatus(component) {
      if (component.status === 'selection_pending_order_oversized_test') {
        return 'Format 40 mm, commande et test à confirmer';
      }
      if (component.status === 'selection_pending_order_seasonal') {
        return 'Saisonnier, commande et contrôle à confirmer';
      }
      return 'Sélectionné, commande et contrôle à confirmer';
    }

    function componentReference(component) {
      return component.supplier_reference
        ? component.supplier + ' · ' + component.supplier_reference
        : component.supplier + ' · référence à compléter';
    }

    function createComponentChoice(component, group, checked) {
      var label = document.createElement('label');
      var radio = document.createElement('input');
      var body = document.createElement('span');
      var name = document.createElement('strong');
      var reference = document.createElement('small');
      var status = document.createElement('em');

      label.className = 'milaura-atelier__component-choice';
      radio.type = 'radio';
      radio.name = 'prototype-' + group + '-' + root.id;
      radio.value = component.id;
      radio.checked = checked;
      radio.dataset.prototypeComponentInput = group;
      name.textContent = component.name;
      reference.textContent = componentReference(component) + ' · ' + component.selected_quantity + ' ' + (component.unit === 'piece' ? 'pièce(s)' : component.unit);
      status.textContent = componentStatus(component);
      body.appendChild(name);
      body.appendChild(reference);
      body.appendChild(status);
      label.appendChild(radio);
      label.appendChild(body);

      radio.addEventListener('change', function () {
        if (!radio.checked) {
          return;
        }
        selections[group] = component;
        updatePrototype(true);
      });

      return label;
    }

    function createEmptyChoice(group) {
      var label = document.createElement('label');
      var radio = document.createElement('input');
      var body = document.createElement('span');
      var name = document.createElement('strong');
      var status = document.createElement('em');

      label.className = 'milaura-atelier__component-choice';
      radio.type = 'radio';
      radio.name = 'prototype-' + group + '-' + root.id;
      radio.value = '';
      radio.checked = !selections[group];
      radio.dataset.prototypeComponentInput = group;
      name.textContent = 'Aucun charm';
      status.textContent = 'Composition sans détail ajouté';
      body.appendChild(name);
      body.appendChild(status);
      label.appendChild(radio);
      label.appendChild(body);

      radio.addEventListener('change', function () {
        if (radio.checked) {
          selections[group] = null;
          updatePrototype(true);
        }
      });

      return label;
    }

    function renderComponentGroup(group, restoredId) {
      var tray = prototype.querySelector('[data-prototype-component-options="' + group + '"]');
      var counter = prototype.querySelector('[data-prototype-option-count="' + group + '"]');
      var components = catalog.components.filter(function (component) {
        return component.type === group && component.customer_selectable;
      });

      if (counter) {
        counter.textContent = components.length + (components.length > 1 ? ' options' : ' option');
      }

      if (!tray) {
        return;
      }

      tray.replaceChildren();

      var restoredComponent = components.find(function (component) {
        return component.id === restoredId;
      });

      if (group === 'letter_finish') {
        selections[group] = restoredComponent || components[0] || null;
      } else if (group === 'charm') {
        selections[group] = restoredComponent || null;
      }

      if (group === 'charm') {
        tray.appendChild(createEmptyChoice(group));
      }

      if (components.length === 0) {
        var empty = document.createElement('p');
        empty.className = 'milaura-atelier__catalog-empty';
        empty.textContent = group === 'stone'
          ? 'Aucune pierre n’apparaît dans la sélection transmise. Le diamètre reste un gabarit de travail, pas une matière disponible.'
          : 'Aucun composant de ce type dans la sélection transmise.';
        tray.appendChild(empty);
        return;
      }

      components.forEach(function (component, index) {
        var shouldCheck = selections[group] && selections[group].id === component.id;
        tray.appendChild(createComponentChoice(component, group, shouldCheck));
      });
    }

    function renderTechnicalGroup(group) {
      var list = prototype.querySelector('[data-prototype-technical-options="' + group + '"]');
      if (!list) {
        return;
      }

      list.replaceChildren();
      catalog.components.filter(function (component) {
        return component.type === group;
      }).forEach(function (component) {
        var item = document.createElement('li');
        var label = document.createElement('strong');
        var detail = document.createElement('span');
        label.textContent = component.name;
        detail.textContent = componentReference(component) + ' · compatibilité à mesurer';
        item.appendChild(label);
        item.appendChild(detail);
        list.appendChild(item);
      });
    }

    function updateSlotGeometry() {
      var wrist = selectedInput(wristInputs);
      var stone = selectedInput(stoneInputs);
      if (!wrist || !stone) {
        return;
      }

      var midpoint = Number(wrist.dataset.prototypeMidpoint) || 170;
      var stoneDiameter = Number(stone.value) || 6;
      theoreticalSlotCount = Math.floor(midpoint / stoneDiameter);
      activeSlotCount = Math.min(slots.length, theoreticalSlotCount, 32);

      slots.forEach(function (slot, index) {
        var active = index < activeSlotCount;
        var angle = (index * 360) / activeSlotCount;
        slot.hidden = !active;
        slot.style.setProperty('--slot-index', String(index));
        slot.style.setProperty('--slot-angle', angle + 'deg');
        slot.style.setProperty('--slot-angle-negative', (angle * -1) + 'deg');
      });

      capacity.textContent = '≈ ' + theoreticalSlotCount + ' emplacements théoriques';
      reviewValue('capacity', '≈ ' + theoreticalSlotCount + ' avant lettres et charm');
    }

    function updateSizing(shouldAnnounce) {
      var wrist = selectedInput(wristInputs);
      var stone = selectedInput(stoneInputs);

      if (!wrist || !stone) {
        return;
      }

      var wristLabel = wrist.dataset.prototypeLabel || wrist.value;
      var wristMeasure = wrist.dataset.prototypeMeasure || '';
      prototype.dataset.prototypeWrist = wrist.value;
      prototype.dataset.prototypeStone = stone.value;
      specification.textContent = wristLabel + ' · ' + wristMeasure + ' · pierres ' + stone.value + ' mm';
      reviewValue('wrist', wristLabel + ' · ' + wristMeasure);
      reviewValue('stone', stone.value + ' mm');
      updateSlotGeometry();

      if (shouldAnnounce && live) {
        live.textContent = 'Gabarit sélectionné : ' + wristLabel + ', ' + wristMeasure + ', pierres ' + stone.value + ' millimètres.';
      }
    }

    function updatePrototype(shouldAnnounce) {
      var maximumLength = Number(input.maxLength) || 10;
      var normalized = normalizeWord(input.value);
      var characters = Array.from(normalized).slice(0, maximumLength);
      var activeSlots = slots.slice(0, activeSlotCount);
      var firstSlot = Math.floor(activeSlots.length / 2) + Math.floor((characters.length - 1) / 2);
      var wrist = selectedInput(wristInputs);
      var stone = selectedInput(stoneInputs);
      var midpoint = wrist ? Number(wrist.dataset.prototypeMidpoint) || 170 : 170;
      var stoneDiameter = stone ? Number(stone.value) || 6 : 6;
      var letterWidth = selections.letter_finish ? Number(selections.letter_finish.width_mm) || 6 : 6;
      var charmWidth = selections.charm ? Number(selections.charm.width_mm) || 0 : 0;
      var messageWidth = characters.length * letterWidth;
      var remainingLength = Math.max(0, midpoint - messageWidth - charmWidth);
      var remainingStones = Math.floor(remainingLength / stoneDiameter);
      var invalidCharacters = characters.filter(function (character, index, all) {
        return character !== ' ' && !/[A-Z]/.test(character) && all.indexOf(character) === index;
      });

      input.value = characters.join('');
      slots.forEach(function (slot) {
        slot.textContent = '';
        slot.classList.remove('has-letter');
      });

      characters.forEach(function (character, characterIndex) {
        var slotIndex = (firstSlot - characterIndex + activeSlots.length) % activeSlots.length;
        var slot = activeSlots[slotIndex];
        if (slot) {
          slot.textContent = character === ' ' ? '·' : character;
          slot.classList.add('has-letter');
        }
      });

      centerWord.textContent = normalized.trim() || 'VOTRE MOT';
      count.textContent = characters.length + '/' + maximumLength;
      reviewValue('word', normalized.trim() || 'À saisir');
      reviewValue('letter_finish', selections.letter_finish ? selections.letter_finish.name : 'À choisir');
      reviewValue('charm', selections.charm ? selections.charm.name : 'Aucun');

      if (invalidCharacters.length > 0) {
        input.setAttribute('aria-invalid', 'true');
        wordStatus.textContent = 'Caractère non présent dans les assortiments retenus : ' + invalidCharacters.join(' ');
      } else {
        input.removeAttribute('aria-invalid');
        wordStatus.textContent = 'Mot enregistré dans cette session uniquement. Répartition des lettres à contrôler à réception.';
      }

      if (!selections.letter_finish) {
        fitNote.textContent = 'Choisissez une famille de lettres pour calculer son encombrement théorique.';
      } else if (messageWidth + charmWidth >= midpoint) {
        fitNote.textContent = 'Cette composition dépasse le gabarit théorique. Elle devra être raccourcie ou montée autrement.';
      } else {
        fitNote.textContent = 'Repère non contractuel : environ ' + remainingStones + ' pierres de ' + stoneDiameter + ' mm autour du mot et du charm.';
      }

      writeSession();

      if (shouldAnnounce && live) {
        live.textContent = characters.length
          ? 'Composition mise à jour avec ' + characters.length + ' caractères.'
          : 'Message vide.';
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

    function loadCatalog(restoredState) {
      var url = prototype.dataset.prototypeCatalogUrl;
      if (!url) {
        return Promise.reject(new Error('Catalogue Atelier absent.'));
      }

      return window.fetch(url, { credentials: 'same-origin' }).then(function (response) {
        if (!response.ok) {
          throw new Error('Catalogue Atelier indisponible.');
        }
        return response.json();
      }).then(function (data) {
        catalog = data;
        renderComponentGroup('letter_finish', restoredState.letter_finish_id || '');
        renderComponentGroup('stone', '');
        renderComponentGroup('charm', restoredState.charm_id || '');
        renderTechnicalGroup('cord');
        catalogStatus.textContent = catalog.components.length + ' références · commande à confirmer';
        updatePrototype(false);
      }).catch(function () {
        catalogStatus.textContent = 'Catalogue indisponible';
        prototype.querySelectorAll('[data-prototype-component-options]').forEach(function (tray) {
          tray.textContent = 'Le manifeste des composants n’a pas pu être chargé. Rechargez la preview avant de poursuivre.';
        });
      });
    }

    function resetPrototype() {
      try {
        window.sessionStorage.removeItem(storageKey);
      } catch (error) {
        // Le prototype reste utilisable même si le stockage privé est bloqué.
      }

      input.value = 'MILAURA';
      wristInputs.forEach(function (item) {
        item.checked = item.value === 'woman';
      });
      stoneInputs.forEach(function (item) {
        item.checked = item.value === '06';
      });
      selections.charm = null;
      selections.letter_finish = catalog.components.find(function (component) {
        return component.type === 'letter_finish' && component.customer_selectable;
      }) || null;

      renderComponentGroup('letter_finish', selections.letter_finish ? selections.letter_finish.id : '');
      renderComponentGroup('charm', '');
      updateSizing(false);
      updatePrototype(true);
      activateTab(tabs[0], true);
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

    wristInputs.concat(stoneInputs).forEach(function (sizingInput) {
      sizingInput.addEventListener('change', function () {
        updateSizing(true);
        updatePrototype(false);
      });
    });

    input.addEventListener('input', function () {
      updatePrototype(true);
    });
    input.addEventListener('blur', function () {
      updatePrototype(false);
    });
    if (resetButton) {
      resetButton.addEventListener('click', resetPrototype);
    }

    var restoredState = restoreSession();
    activateTab(tabs[0], false);
    updateSizing(false);
    updatePrototype(false);
    loadCatalog(restoredState);
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
