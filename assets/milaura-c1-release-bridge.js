(function () {
  'use strict';

  var root = document.querySelector('[data-milaura-c1-release-bridge]');
  if (!root || root.dataset.enabled !== 'true' || !window.MilauraPreferenceStorage) return;

  var endpoint = String(root.dataset.endpoint || '').replace(/\/$/, '');
  var loggedIn = root.dataset.loggedIn === 'true';
  var purgeInFlight = null;

  function request(path, options) {
    var settings = options || {};
    settings.credentials = 'same-origin';
    settings.headers = Object.assign(
      { Accept: 'application/json' },
      settings.body ? { 'Content-Type': 'application/json' } : {},
      settings.headers || {}
    );
    return fetch(endpoint + path, settings).then(function (response) {
      return response.json().catch(function () {
        return {};
      }).then(function (body) {
        if (!response.ok) {
          var error = new Error('La synchronisation est momentanément indisponible.');
          error.code = body.code || 'BRIDGE_UNAVAILABLE';
          throw error;
        }
        return body;
      });
    });
  }

  function statusFor(button) {
    var id = button.getAttribute('aria-describedby');
    return id ? document.getElementById(id) : null;
  }

  function setStatus(button, message, state) {
    var status = statusFor(button);
    if (status) {
      status.textContent = message;
      status.dataset.state = state || '';
    }
  }

  function consentedDiagnostic(diagnostic) {
    var previousConsent = diagnostic.accountPersonalization || {};
    var acceptedAt = previousConsent.status === 'granted' && previousConsent.acceptedAt
      ? previousConsent.acceptedAt
      : new Date().toISOString();
    var resultId = diagnostic.resultId || createResultId();
    return Object.assign({}, diagnostic, {
      resultId: resultId,
      revision: Number(diagnostic.revision) || 1,
      accountPersonalization: {
        schemaVersion: 1,
        status: 'granted',
        source: 'quiz_account_save_button',
        acceptedAt: acceptedAt,
      },
    });
  }

  function createResultId() {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') {
      return window.crypto.randomUUID();
    }
    return 'result-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 14);
  }

  function issueIdempotencyKey(diagnostic) {
    var resultId = String(diagnostic.resultId || '').replace(/[^A-Za-z0-9_-]/g, '').slice(0, 120);
    if (resultId.length < 16) throw new Error('Le résultat local ne peut pas être identifié de manière fiable.');
    return 'issue_' + resultId + '_v' + String(Number(diagnostic.revision) || 1);
  }

  function saveDiagnostic(button) {
    if (button.disabled || button.dataset.saved === 'true') return;
    if (!loggedIn) {
      setStatus(button, 'Connectez-vous à votre compte, puis revenez conserver ce résultat.', 'login-required');
      return;
    }

    button.disabled = true;
    setStatus(button, 'Vérification de votre choix…', 'pending');

    window.MilauraPreferenceStorage.getPreferenceState({ fresh: true })
      .then(function (preference) {
        if (!preference.available || !preference.allowed) {
          var error = new Error('Autorisez les préférences pour conserver ce résultat dans Mon Écrin.');
          error.code = 'PREFERENCES_REQUIRED';
          throw error;
        }
        return window.MilauraPreferenceStorage.readDiagnostic();
      })
      .then(function (diagnostic) {
        if (!diagnostic) {
          var error = new Error('Votre résultat local est introuvable. Refaites le diagnostic avant de réessayer.');
          error.code = 'DIAGNOSTIC_REQUIRED';
          throw error;
        }
        var retained = consentedDiagnostic(diagnostic);
        return window.MilauraPreferenceStorage.writeDiagnostic(retained).then(function (stored) {
          if (!stored.stored) throw new Error('Votre choix n’a pas pu être conservé localement.');
          return request('/v1/handoffs', {
            method: 'POST',
            body: JSON.stringify({
              diagnostic: retained,
              idempotencyKey: issueIdempotencyKey(retained),
            }),
          });
        });
      })
      .then(function () {
        button.dataset.saved = 'true';
        button.textContent = 'Résultat prêt pour Mon Écrin';
        setStatus(button, 'Ouvrez Mon Écrin pour confirmer l’importation dans votre compte.', 'success');
      })
      .catch(function (error) {
        setStatus(button, error.message || 'La synchronisation est momentanément indisponible.', 'error');
      })
      .finally(function () {
        button.disabled = button.dataset.saved === 'true';
      });
  }

  function resumePurge() {
    if (!loggedIn || purgeInFlight) return purgeInFlight || Promise.resolve(null);
    purgeInFlight = request('/v1/purges/pending', { method: 'GET' })
      .then(function (pending) {
        if (!pending || !pending.operationId) return null;
        return window.MilauraPreferenceStorage.purgeDiagnostic({ reason: 'account-purge' }).then(function (result) {
          if (!result.localCleared || !result.cartCleared) throw new Error('PURGE_INCOMPLETE');
          return request('/v1/purges/' + encodeURIComponent(pending.operationId) + '/theme-ack', {
            method: 'POST',
            body: JSON.stringify({
              localCleared: true,
              cartCleared: true,
              completedAt: result.attemptedAt,
            }),
          });
        });
      })
      .catch(function () {
        return null;
      })
      .finally(function () {
        purgeInFlight = null;
      });
    return purgeInFlight;
  }

  document.addEventListener('click', function (event) {
    var button = event.target.closest('[data-milaura-c1-save-diagnostic]');
    if (!button) return;
    event.preventDefault();
    saveDiagnostic(button);
  });

  window.addEventListener('online', resumePurge);
  window.addEventListener('pageshow', resumePurge);
  resumePurge();
})();
