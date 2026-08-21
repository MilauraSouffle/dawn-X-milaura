(function () {
  'use strict';

  if (window.MilauraCookieConsentController) return;

  var root = document.querySelector('[data-milaura-cookie-consent]');
  var preferences = document.querySelector('[data-cookie-preferences]');
  if (!root || !preferences) return;

  var banner = root.querySelector('.milaura-cookie-consent__banner');
  var bannerStatus = root.querySelector('[data-cookie-status]');
  var preferencesPanel = preferences.querySelector('.milaura-cookie-preferences__panel');
  var preferencesStatus = preferences.querySelector('[data-cookie-preferences-status]');
  var saleRow = preferences.querySelector('[data-cookie-sale-row]');
  var privacy = null;
  var previousFocus = null;
  var leaveTimer = null;

  function loadCustomerPrivacy() {
    return new Promise(function (resolve, reject) {
      if (window.Shopify && window.Shopify.customerPrivacy) {
        resolve(window.Shopify.customerPrivacy);
        return;
      }

      if (!window.Shopify || typeof window.Shopify.loadFeatures !== 'function') {
        reject(new Error('Shopify Customer Privacy API indisponible.'));
        return;
      }

      window.Shopify.loadFeatures(
        [{ name: 'consent-tracking-api', version: '0.1' }],
        function (error) {
          if (error || !window.Shopify.customerPrivacy) {
            reject(error || new Error('Shopify Customer Privacy API indisponible.'));
            return;
          }
          resolve(window.Shopify.customerPrivacy);
        }
      );
    });
  }

  function callPrivacy(method, fallback) {
    if (!privacy || typeof privacy[method] !== 'function') return fallback;
    try {
      return privacy[method]();
    } catch (error) {
      return fallback;
    }
  }

  function saleOfDataApplies() {
    return Boolean(callPrivacy('saleOfDataRegion', false));
  }

  function hasRecordedConsent() {
    var current = callPrivacy('currentVisitorConsent', {}) || {};
    return ['analytics', 'marketing', 'preferences'].every(function (category) {
      return current[category] === 'yes' || current[category] === 'no';
    });
  }

  function showBanner() {
    window.clearTimeout(leaveTimer);
    root.hidden = false;
    root.classList.remove('is-leaving');
    window.requestAnimationFrame(function () {
      root.classList.add('is-visible');
    });
  }

  function hideBanner() {
    root.classList.remove('is-visible');
    root.classList.add('is-leaving');
    leaveTimer = window.setTimeout(function () {
      root.hidden = true;
      root.classList.remove('is-leaving');
    }, 340);
  }

  function setBusy(container, busy) {
    container.setAttribute('aria-busy', String(busy));
    container.querySelectorAll('button').forEach(function (button) {
      button.disabled = busy;
    });
  }

  function setStatus(element, message) {
    element.textContent = message || '';
    element.hidden = !message;
  }

  function writeConsent(values) {
    return new Promise(function (resolve, reject) {
      var settled = false;
      var timeout = window.setTimeout(function () {
        if (settled) return;
        settled = true;
        reject(new Error('Le choix n’a pas pu être enregistré.'));
      }, 8000);

      try {
        privacy.setTrackingConsent(values, function (result) {
          if (settled) return;
          settled = true;
          window.clearTimeout(timeout);
          if (result && result.error) {
            reject(new Error(String(result.error)));
            return;
          }
          resolve();
        });
      } catch (error) {
        if (settled) return;
        settled = true;
        window.clearTimeout(timeout);
        reject(error);
      }
    });
  }

  function completeChoice(values, source) {
    var container = source === 'preferences' ? preferencesPanel : banner;
    var status = source === 'preferences' ? preferencesStatus : bannerStatus;

    setStatus(status, '');
    setBusy(container, true);

    return writeConsent(values)
      .then(function () {
        if (source === 'preferences') closePreferences(false);
        hideBanner();
      })
      .catch(function () {
        setStatus(status, 'Impossible d’enregistrer votre choix. Réessayez.');
      })
      .finally(function () {
        setBusy(container, false);
      });
  }

  function allConsent(value) {
    var consent = {
      analytics: value,
      marketing: value,
      preferences: value,
    };
    if (saleOfDataApplies()) consent.sale_of_data = value;
    return consent;
  }

  function readCurrentConsent() {
    var current = callPrivacy('currentVisitorConsent', {}) || {};
    preferences.querySelectorAll('[data-cookie-category]').forEach(function (input) {
      var category = input.getAttribute('data-cookie-category');
      input.checked = current[category] === 'yes';
    });
    saleRow.hidden = !saleOfDataApplies();
  }

  function focusableElements() {
    return Array.from(
      preferencesPanel.querySelectorAll('button:not([disabled]), input:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')
    ).filter(function (element) {
      return !element.hidden && element.getClientRects().length > 0;
    });
  }

  function openPreferences(trigger) {
    previousFocus = trigger || document.activeElement;
    setStatus(preferencesStatus, '');
    readCurrentConsent();
    preferences.hidden = false;
    root.setAttribute('inert', '');
    document.documentElement.classList.add('milaura-cookie-preferences-open');
    window.requestAnimationFrame(function () {
      preferencesPanel.focus();
    });
  }

  function closePreferences(restoreFocus) {
    preferences.hidden = true;
    root.removeAttribute('inert');
    document.documentElement.classList.remove('milaura-cookie-preferences-open');
    if (restoreFocus !== false && previousFocus && typeof previousFocus.focus === 'function') {
      previousFocus.focus();
    }
    previousFocus = null;
  }

  root.addEventListener('click', function (event) {
    var accept = event.target.closest('[data-cookie-accept]');
    var reject = event.target.closest('[data-cookie-reject]');
    var choose = event.target.closest('[data-cookie-choose]');

    if (accept) completeChoice(allConsent(true), 'banner');
    if (reject) completeChoice(allConsent(false), 'banner');
    if (choose) openPreferences(choose);
  });

  preferences.addEventListener('click', function (event) {
    var close = event.target.closest('[data-cookie-preferences-close]');
    var reject = event.target.closest('[data-cookie-preferences-reject]');
    var save = event.target.closest('[data-cookie-preferences-save]');

    if (close) closePreferences(true);
    if (reject) completeChoice(allConsent(false), 'preferences');
    if (save) {
      var selected = {};
      preferences.querySelectorAll('[data-cookie-category]').forEach(function (input) {
        var category = input.getAttribute('data-cookie-category');
        if (category !== 'sale_of_data' || saleOfDataApplies()) selected[category] = input.checked;
      });
      completeChoice(selected, 'preferences');
    }
  });

  document.addEventListener('click', function (event) {
    var manage = event.target.closest('[data-milaura-cookie-manage]');
    if (!manage) return;
    event.preventDefault();
    openPreferences(manage);
  });

  preferences.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      event.preventDefault();
      closePreferences(true);
      return;
    }

    if (event.key !== 'Tab') return;
    var focusable = focusableElements();
    if (!focusable.length) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  loadCustomerPrivacy()
    .then(function (customerPrivacy) {
      privacy = customerPrivacy;
      document.documentElement.classList.add('milaura-cookie-consent-ready');
      if (callPrivacy('shouldShowBanner', false) && !hasRecordedConsent()) showBanner();
    })
    .catch(function () {
      /* Shopify's native banner remains available if its API cannot load. */
    });

  window.MilauraCookieConsentController = {
    openPreferences: openPreferences,
  };
})();
