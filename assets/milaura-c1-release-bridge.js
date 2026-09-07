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
  var resultVersion = 0;
  var lastCompleted = '';

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

  function savedLink(visible) {
    var link = document.querySelector('[data-milaura-c1-saved-link]');
    if (link) {
      link.href = accountUrl;
      link.hidden = !visible;
    }
  }

  async function saveDiagnostic(button, pending, choice) {
    if (button.disabled || button.dataset.sent === 'true') return;
    var version = resultVersion;
    button.disabled = true;
    button.hidden = loggedIn;
    savedLink(false);
    setStatus(button, loggedIn ? 'Enregistrement de votre résultat…' : 'Préparation de votre connexion…', 'pending');
    try {
      var diagnostic = pending && pending.diagnostic ||
        intentStore.current() || await window.MilauraPreferenceStorage.readDiagnostic();
      if (!diagnostic) throw new Error('Votre résultat n’est plus disponible. Refaites le quiz pour le conserver.');
      var purge = await resumePurge();
      if (version !== resultVersion) return;
      if (purge && purge.failed) throw new Error('La vérification de votre compte est momentanément indisponible. Réessayez.');
      if (pending && purgeCompleted) throw new Error('Votre ancien résultat a été supprimé selon votre demande. Refaites le quiz pour en conserver un nouveau.');
      var intent = pending || intentStore.prepare(diagnostic, ownerId, choice);
      if (intent.ownerId && intent.ownerId !== ownerId) {
        intentStore.clear();
        throw new Error('Ce résultat était destiné à un autre compte. Refaites le quiz avec ce compte.');
      }
      if (!loggedIn) return login(intent);
      if (!/^https:\/\/shopify\.com\//i.test(accountUrl)) throw new Error('L’accès à Mon Écrin est indisponible.');
      var saved = await request('/v1/diagnostics', {
        method: 'POST',
        body: JSON.stringify({diagnostic: intent.diagnostic, idempotencyKey: 'issue_' + intent.diagnostic.resultId + '_v1'}),
      });
      if (version !== resultVersion) return;
      if (saved.status !== 'saved' || saved.resultId !== intent.diagnostic.resultId || saved.profileId !== intent.diagnostic.profileId) throw new Error('L’enregistrement n’a pas été confirmé. Réessayez.');
      intentStore.clear();
      button.dataset.sent = 'true';
      button.hidden = true;
      savedLink(true);
      setStatus(button, 'Votre résultat est enregistré dans Mon Écrin. Retrouvez-y votre pierre et vos conseils.', 'saved');
    } catch (error) {
      if (version !== resultVersion) return;
      button.hidden = false;
      button.textContent = 'Réessayer l’enregistrement';
      if (error.status === 410) {
        intentStore.clear();
        button.hidden = true;
        setStatus(button, 'Ce résultat est trop ancien pour être enregistré. Refaites le quiz pour actualiser Mon Écrin.', 'error');
      } else if (error.code === 'DIAGNOSTIC_NEWER_RESULT_EXISTS') {
        intentStore.clear();
        button.hidden = true;
        savedLink(true);
        setStatus(button, 'Un résultat plus récent est déjà conservé dans Mon Écrin. Il reste inchangé.', 'newer-result');
      } else if (error.code === 'DIAGNOSTIC_PREDATES_PURGE') {
        intentStore.clear();
        button.hidden = true;
        setStatus(button, 'Vous avez supprimé votre résultat. Refaites le quiz pour en conserver un nouveau.', 'error');
      } else if (error.status === 401 || error.status === 403) {
        loggedIn = false;
        button.textContent = 'Se connecter pour retrouver ma pierre';
        setStatus(button, 'Votre session a expiré. Reconnectez-vous pour conserver ce résultat.', 'login-required');
      } else {
        setStatus(button, error.name === 'AbortError'
          ? 'La connexion prend trop de temps. Réessayez : votre résultat reste disponible ici.'
          : error.message || 'L’enregistrement n’est pas confirmé. Réessayez.', 'error');
      }
    } finally {
      if (version === resultVersion) button.disabled = button.dataset.sent === 'true';
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
    var button = document.querySelector('[data-milaura-c1-save-diagnostic]');
    if (!button) return;
    resultVersion++;
    button.disabled = false;
    button.hidden = false;
    button.dataset.sent = '';
    savedLink(false);
    if (loggedIn) setStatus(button, 'Vous consultez ce résultat sur cet appareil. Son enregistrement dans le compte n’est pas encore confirmé.', 'local-result');
    var pending = intentStore.read();
    if (!resumed && loggedIn && pending && new URLSearchParams(window.location.search).get('save') === '1') {
      resumed = true;
      saveDiagnostic(button, pending);
    }
  });
  window.addEventListener('milaura:quiz-completed', function (event) {
    var detail = event.detail;
    if (!loggedIn || !detail || !detail.diagnostic || !detail.startedAt) return;
    var fingerprint = detail.diagnostic.profileId + ':' + detail.diagnostic.timestamp;
    if (fingerprint === lastCompleted) return;
    var button = document.querySelector('[data-milaura-c1-save-diagnostic]');
    if (!button) return;
    lastCompleted = fingerprint;
    saveDiagnostic(button, null, {source: 'quiz_start_notice', acceptedAt: detail.startedAt});
  });
  window.addEventListener('online', resumePurge);
  window.addEventListener('milaura:quiz-restored', async function (event) {
    var button = document.querySelector('[data-milaura-c1-save-diagnostic]');
    if (!loggedIn || !button || button.disabled || !event.detail) return;
    var version = resultVersion;
    button.hidden = true;
    setStatus(button, 'Vérification de votre résultat dans Mon Écrin…', 'pending');
    try {
      var current = await request('/v1/diagnostics/current', {method: 'GET'});
      if (version !== resultVersion || button.disabled || button.dataset.sent === 'true') return;
      savedLink(true);
      if (current.status === 'saved' && current.profileId === event.detail.profileId &&
          Date.parse(current.completedAt) === new Date(event.detail.timestamp).getTime()) {
        button.dataset.sent = 'true';
        button.disabled = true;
        setStatus(button, 'Votre résultat est enregistré dans Mon Écrin. Retrouvez-y votre pierre et vos conseils.', 'saved');
      } else {
        button.hidden = false;
        setStatus(button, current.status === 'saved'
          ? 'Un autre résultat est conservé dans Mon Écrin. Vous pouvez le consulter depuis votre compte.'
          : 'Ce résultat est disponible sur cet appareil. Vous pouvez le conserver dans Mon Écrin.', 'local-result');
      }
    } catch (_) {
      if (version !== resultVersion || button.disabled || button.dataset.sent === 'true') return;
      button.hidden = false;
      savedLink(true);
      setStatus(button, 'La vérification est momentanément indisponible. Ouvrez Mon Écrin pour consulter votre résultat.', 'error');
    }
  });
  window.addEventListener('pageshow', resumePurge);
  resumePurge();
})();
