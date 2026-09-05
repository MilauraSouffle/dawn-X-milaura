(function () {
  'use strict';

  var root = document.querySelector('[data-milaura-c1-release-bridge]');
  var intentStore = window.MilauraAccountSaveIntent;
  if (!root || root.dataset.enabled !== 'true' || !intentStore || !window.MilauraPreferenceStorage) return;

  var endpoint = String(root.dataset.endpoint || '').replace(/\/$/, '');
  var accountUrl = String(root.dataset.accountUrl || '');
  var loggedIn = root.dataset.loggedIn === 'true';
  var ownerId = String(root.dataset.customerId || '');
  var purgeInFlight = null;
  var resumed = false;
  var purgeCompleted = false;

  function request(path, options) {
    var settings = options || {};
    var controller = new AbortController();
    var timer = window.setTimeout(function () { controller.abort(); }, 10000);
    settings.signal = controller.signal;
    settings.credentials = 'same-origin';
    settings.headers = Object.assign(
      { Accept: 'application/json' },
      settings.body ? { 'Content-Type': 'application/json' } : {},
      settings.headers || {}
    );
    return fetch(endpoint + path, settings).then(function (response) {
      return response.json().catch(function () { return {}; }).then(function (body) {
        if (!response.ok) {
          var error = new Error('L’enregistrement n’est pas confirmé. Réessayez dans un instant.');
          error.code = body.code || 'BRIDGE_UNAVAILABLE';
          error.status = response.status;
          throw error;
        }
        return body;
      });
    }).finally(function () { window.clearTimeout(timer); });
  }

  function setStatus(button, message, state) {
    var id = button.getAttribute('aria-describedby');
    var status = id && document.getElementById(id);
    if (status) {
      status.textContent = message;
      status.dataset.state = state || '';
    }
  }

  function login(intent) {
    if (!intent.stored) {
      throw new Error('Ce navigateur bloque la conservation pendant la connexion. Connectez-vous d’abord, puis refaites le quiz pour enregistrer votre résultat.');
    }
    var returnUrl = new URL(window.location.href);
    returnUrl.searchParams.set('show', 'result');
    returnUrl.searchParams.set('save', '1');
    var destination = new URL(root.dataset.loginPath, window.location.origin);
    if (destination.origin !== window.location.origin) throw new Error('Connexion indisponible.');
    destination.searchParams.set('return_to', returnUrl.pathname + returnUrl.search);
    window.location.assign(destination.pathname + destination.search);
  }

  async function saveDiagnostic(button, pending) {
    if (button.disabled || button.dataset.sent === 'true') return;
    button.disabled = true;
    setStatus(button, loggedIn ? 'Enregistrement de votre résultat…' : 'Préparation de votre connexion…', 'pending');
    try {
      var diagnostic = pending && pending.diagnostic ||
        intentStore.current() || await window.MilauraPreferenceStorage.readDiagnostic();
      if (!diagnostic) throw new Error('Votre résultat n’est plus disponible. Refaites le quiz pour le conserver.');
      var purge = await resumePurge();
      if (purge && purge.failed) throw new Error('La vérification de votre compte est momentanément indisponible. Réessayez.');
      if (pending && purgeCompleted) throw new Error('Votre ancien résultat a été supprimé selon votre demande. Choisissez à nouveau de le conserver si vous le souhaitez.');
      var intent = pending || intentStore.prepare(diagnostic, ownerId);
      if (intent.ownerId && intent.ownerId !== ownerId) {
        intentStore.clear();
        throw new Error('Ce résultat était destiné à un autre compte. Refaites le quiz avec ce compte.');
      }
      if (!loggedIn) {
        login(intent);
        return;
      }
      if (!/^https:\/\/shopify\.com\//i.test(accountUrl)) throw new Error('L’accès à Mon Écrin est indisponible.');
      var issued = await request('/v1/handoffs', {
        method: 'POST',
        body: JSON.stringify({
          diagnostic: intent.diagnostic,
          idempotencyKey: 'issue_' + intent.diagnostic.resultId + '_v1',
        }),
      });
      if (!issued.handoffId) throw new Error('Le transfert n’a pas été confirmé. Réessayez.');
      intentStore.clear();
      button.dataset.sent = 'true';
      button.textContent = 'Ouverture de Mon Écrin…';
      setStatus(button, 'Votre résultat est transmis. Mon Écrin va confirmer son enregistrement.', 'pending');
      window.location.assign(accountUrl);
    } catch (error) {
      if (error.status === 410) {
        intentStore.clear();
        setStatus(button, 'Le transfert a expiré. Appuyez à nouveau sur « Conserver mon résultat » pour le relancer.', 'error');
      } else if (error.status === 401 || error.status === 403) {
        loggedIn = false;
        button.textContent = 'Se connecter et conserver mon résultat';
        setStatus(button, 'Reconnectez-vous pour terminer l’enregistrement de votre résultat.', 'login-required');
      } else {
        setStatus(button, error.name === 'AbortError'
          ? 'La connexion prend trop de temps. Réessayez : votre résultat reste disponible ici.'
          : error.message || 'L’enregistrement n’est pas confirmé. Réessayez.', 'error');
      }
    } finally {
      button.disabled = button.dataset.sent === 'true';
    }
  }

  function resumePurge() {
    if (!loggedIn || purgeInFlight) return purgeInFlight || Promise.resolve(null);
    purgeInFlight = request('/v1/purges/pending', { method: 'GET' })
      .then(function (pending) {
        if (!pending || !pending.operationId) return null;
        intentStore.clear();
        purgeCompleted = true;
        return window.MilauraPreferenceStorage.purgeDiagnostic({ reason: 'account-purge' }).then(function (result) {
          if (!result.localCleared || !result.cartCleared) throw new Error('PURGE_INCOMPLETE');
          return request('/v1/purges/' + encodeURIComponent(pending.operationId) + '/theme-ack', {
            method: 'POST',
            body: JSON.stringify({ localCleared: true, cartCleared: true, completedAt: result.attemptedAt }),
          });
        });
      })
      .catch(function () { return { failed: true }; })
      .finally(function () { purgeInFlight = null; });
    return purgeInFlight;
  }

  document.addEventListener('click', function (event) {
    var skip = event.target.closest('[data-milaura-c1-skip-save]');
    if (skip) {
      event.preventDefault();
      var saveButton = document.querySelector('[data-milaura-c1-save-diagnostic]');
      if (saveButton && saveButton.disabled) return;
      intentStore.clear();
      var url = new URL(window.location.href);
      url.searchParams.delete('save');
      window.history.replaceState(null, '', url.pathname + url.search + url.hash);
      if (saveButton) setStatus(saveButton, 'Vous pouvez poursuivre votre découverte sans enregistrer ce résultat dans votre compte.', 'skipped');
      return;
    }
    var button = event.target.closest('[data-milaura-c1-save-diagnostic]');
    if (!button) return;
    event.preventDefault();
    saveDiagnostic(button);
  });
  window.addEventListener('milaura:quiz-result', function () {
    if (resumed || !loggedIn || new URLSearchParams(window.location.search).get('save') !== '1') return;
    var pending = intentStore.read();
    var button = document.querySelector('[data-milaura-c1-save-diagnostic]');
    if (!pending || !button) return;
    resumed = true;
    saveDiagnostic(button, pending);
  });
  window.addEventListener('online', resumePurge);
  window.addEventListener('pageshow', resumePurge);
  resumePurge();
})();
