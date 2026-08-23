(function () {
  'use strict';

  if (window.MilauraPreferenceStorage) return;

  var STORAGE_KEY = 'milauraLastResult';
  var LEGACY_COOKIE_KEY = 'milauraLastResult';
  var CART_ATTRIBUTE_KEYS = ['quiz_profile', 'quiz_stone', 'quiz_date'];
  var CART_REQUEST_TIMEOUT = 8000;
  var preferenceStatePromise = null;
  var cartMutationQueue = Promise.resolve(null);
  var lastHandledPreferenceState = null;

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

  function readPreferenceState() {
    return loadCustomerPrivacy()
      .then(function (privacy) {
        if (typeof privacy.preferencesProcessingAllowed !== 'function') {
          return { available: false, allowed: false };
        }
        return {
          available: true,
          allowed: Boolean(privacy.preferencesProcessingAllowed()),
        };
      })
      .catch(function () {
        return { available: false, allowed: false };
      })
      .then(function (state) {
        if (!state.available) preferenceStatePromise = null;
        return state;
      });
  }

  function getPreferenceState(options) {
    if (options && options.fresh) preferenceStatePromise = null;
    if (!preferenceStatePromise) preferenceStatePromise = readPreferenceState();
    return preferenceStatePromise;
  }

  function readLegacyCookie() {
    try {
      var prefix = LEGACY_COOKIE_KEY + '=';
      var cookies = document.cookie.split(';');
      for (var index = 0; index < cookies.length; index += 1) {
        var cookie = cookies[index].trim();
        if (cookie.indexOf(prefix) === 0) return decodeURIComponent(cookie.substring(prefix.length));
      }
    } catch (error) {}
    return null;
  }

  function removeLegacyCookie() {
    try {
      document.cookie =
        LEGACY_COOKIE_KEY + '=; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/; SameSite=Lax; Secure';
    } catch (error) {}
  }

  function parseDiagnostic(raw) {
    if (!raw) return null;
    try {
      var data = JSON.parse(raw);
      if (!data || typeof data !== 'object' || typeof data.profileId !== 'string' || !data.profileId) return null;
      return data;
    } catch (error) {
      return null;
    }
  }

  function isValidDiagnostic(data) {
    return Boolean(data && typeof data === 'object' && typeof data.profileId === 'string' && data.profileId);
  }

  function cartUpdate(attributes) {
    var root = window.Shopify && window.Shopify.routes ? window.Shopify.routes.root : '/';
    var mutation = function () {
      if (typeof window.AbortController !== 'function') return Promise.resolve(null);
      var controller = new window.AbortController();
      var timeout = window.setTimeout(function () {
        controller.abort();
      }, CART_REQUEST_TIMEOUT);

      return fetch(root + 'cart/update.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ attributes: attributes }),
        signal: controller.signal,
      })
        .then(function (response) {
          if (!response.ok) throw new Error('La mise à jour du panier a échoué.');
          return response.json();
        })
        .catch(function () {
          return null;
        })
        .finally(function () {
          window.clearTimeout(timeout);
        });
    };

    cartMutationQueue = cartMutationQueue.then(mutation, mutation);
    return cartMutationQueue;
  }

  function clearCartAttributes() {
    var attributes = {};
    CART_ATTRIBUTE_KEYS.forEach(function (key) {
      attributes[key] = '';
    });
    return cartUpdate(attributes).then(function (cart) {
      return cart || cartUpdate(attributes);
    });
  }

  function clearBrowserDiagnostic() {
    var hadData = Boolean(readLegacyCookie());
    try {
      hadData = Boolean(window.localStorage.getItem(STORAGE_KEY)) || hadData;
      window.localStorage.removeItem(STORAGE_KEY);
    } catch (error) {}
    removeLegacyCookie();
    return hadData;
  }

  function browserDiagnosticCleared() {
    try {
      return !window.localStorage.getItem(STORAGE_KEY) && !readLegacyCookie();
    } catch (error) {
      return !readLegacyCookie();
    }
  }

  function cartAttributesCleared(cart) {
    if (!cart || !cart.attributes) return false;
    return CART_ATTRIBUTE_KEYS.every(function (key) {
      return !cart.attributes[key];
    });
  }

  function clearDiagnostic(options) {
    var hadData = clearBrowserDiagnostic();
    var shouldClearCart = Boolean(options && options.cart);
    var cartPromise = shouldClearCart ? clearCartAttributes() : Promise.resolve(null);

    if (hadData || shouldClearCart) {
      document.dispatchEvent(
        new CustomEvent('milaura:diagnostic-storage-cleared', {
          detail: { reason: (options && options.reason) || 'manual' },
        })
      );
    }

    return cartPromise.then(function () {
      return hadData;
    });
  }

  function purgeDiagnostic(options) {
    var reason = (options && options.reason) || 'account-purge';
    clearBrowserDiagnostic();

    return clearCartAttributes().then(function (cart) {
      var result = {
        schemaVersion: 1,
        attemptedAt: new Date().toISOString(),
        reason: reason,
        localCleared: browserDiagnosticCleared(),
        cartCleared: cartAttributesCleared(cart),
      };

      document.dispatchEvent(
        new CustomEvent('milaura:diagnostic-storage-cleared', {
          detail: result,
        })
      );
      return result;
    });
  }

  function readDiagnostic() {
    return getPreferenceState().then(function (state) {
      if (!state.available) return null;

      if (!state.allowed) {
        var hadData = clearBrowserDiagnostic();
        if (hadData) clearCartAttributes();
        return null;
      }

      var raw = null;
      try {
        raw = window.localStorage.getItem(STORAGE_KEY);
      } catch (error) {}

      var data = parseDiagnostic(raw);
      if (raw && !data) clearBrowserDiagnostic();

      if (!data) {
        var legacyRaw = readLegacyCookie();
        data = parseDiagnostic(legacyRaw);
        if (data) {
          try {
            window.localStorage.setItem(STORAGE_KEY, legacyRaw);
          } catch (error) {}
        }
      }

      removeLegacyCookie();
      return data;
    });
  }

  function writeDiagnostic(data) {
    if (!isValidDiagnostic(data)) return Promise.resolve({ stored: false, cart: false });

    return getPreferenceState().then(function (state) {
      if (!state.available) return { stored: false, cart: false };

      if (!state.allowed) {
        return clearDiagnostic({ cart: true, reason: 'preferences-denied' }).then(function () {
          return { stored: false, cart: false };
        });
      }

      var stored = false;
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        stored = true;
      } catch (error) {}
      removeLegacyCookie();

      var diagnosticDate = new Date(data.timestamp || Date.now());
      if (Number.isNaN(diagnosticDate.getTime())) diagnosticDate = new Date();

      var attributes = {
        quiz_profile: data.profileId,
        quiz_stone: data.stoneHandle || '',
        quiz_date: diagnosticDate.toISOString().split('T')[0],
      };

      return cartUpdate(attributes).then(function (cart) {
        document.dispatchEvent(
          new CustomEvent('milaura:diagnostic-storage-saved', {
            detail: { data: data, browser: stored, cart: Boolean(cart) },
          })
        );
        return { stored: stored, cart: Boolean(cart) };
      });
    });
  }

  function publishPreferenceState() {
    preferenceStatePromise = null;
    window.setTimeout(function () {
      getPreferenceState({ fresh: true }).then(function (state) {
        var preferenceState = !state.available ? 'unknown' : state.allowed ? 'allowed' : 'denied';
        var stateChanged = lastHandledPreferenceState !== preferenceState;
        lastHandledPreferenceState = preferenceState;

        if (preferenceState === 'denied' && stateChanged) {
          clearDiagnostic({ cart: true, reason: 'preferences-withdrawn' });
        }

        var publish = function () {
          document.dispatchEvent(
            new CustomEvent('milaura:preferences-changed', {
              detail: state,
            })
          );
        };

        if (preferenceState === 'allowed') {
          readDiagnostic().then(publish);
          return;
        }

        publish();
      });
    }, 0);
  }

  document.addEventListener('visitorConsentCollected', publishPreferenceState);

  window.MilauraPreferenceStorage = Object.freeze({
    clearDiagnostic: clearDiagnostic,
    getPreferenceState: getPreferenceState,
    purgeDiagnostic: purgeDiagnostic,
    readDiagnostic: readDiagnostic,
    writeDiagnostic: writeDiagnostic,
  });

  readDiagnostic();
})();
