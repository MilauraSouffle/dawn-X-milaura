(function () {
  'use strict';

  var root = document.querySelector('[data-milaura-c1-release-bridge]');
  if (!root || root.dataset.enabled !== 'true' || !document.querySelector('[data-milaura-favorite]')) return;

  var endpoint = String(root.dataset.endpoint || '').replace(/\/$/, '');
  var loginPath = String(root.dataset.loginPath || '');
  var loggedIn = root.dataset.loggedIn === 'true';
  var intentKey = 'milauraFavoriteIntentV1';
  var intentTtl = 20 * 60 * 1000;
  var productPattern = /^gid:\/\/shopify\/Product\/[1-9][0-9]*$/;
  var savedIds = new Set();
  var ready = !loggedIn;
  var loading = null;
  var busy = false;
  var noticeTimer = null;

  function mountPdpButton() {
    var button = document.querySelector('[data-milaura-favorite-detached]');
    var gallery = document.querySelector('.milaura-hero-gallery-column');
    if (!button || !gallery) return;
    gallery.insertBefore(button, gallery.firstChild);
    button.hidden = false;
    button.removeAttribute('data-milaura-favorite-detached');
  }

  function buttons() {
    return Array.prototype.slice.call(document.querySelectorAll('[data-milaura-favorite]'));
  }

  function label(button, saved, retry) {
    if (retry) return 'Réessayer le chargement des favoris';
    var title = String(button.dataset.productTitle || 'cette pièce');
    return (saved ? 'Retirer des favoris : ' : 'Ajouter aux favoris : ') + title;
  }

  function renderButton(button, retry) {
    var saved = savedIds.has(button.dataset.productId);
    var text = label(button, saved, retry);
    button.setAttribute('aria-pressed', String(saved));
    button.setAttribute('aria-busy', String(Boolean(busy || loading)));
    button.setAttribute('aria-label', text);
    button.title = retry ? 'Réessayer' : saved ? 'Retirer des favoris' : 'Ajouter aux favoris';
    button.dataset.retry = retry ? 'true' : 'false';
    button.disabled = Boolean(busy || loading || (loggedIn && !ready && !retry));
  }

  function renderAll(retry) {
    buttons().forEach(function (button) { renderButton(button, Boolean(retry)); });
  }

  function announce(message, state) {
    var notice = document.getElementById('MilauraFavoriteNotice');
    if (!notice) {
      notice = document.createElement('p');
      notice.id = 'MilauraFavoriteNotice';
      notice.className = 'milaura-favorite-notice';
      notice.setAttribute('role', state === 'error' ? 'alert' : 'status');
      notice.setAttribute('aria-live', state === 'error' ? 'assertive' : 'polite');
      document.body.appendChild(notice);
    }
    window.clearTimeout(noticeTimer);
    notice.hidden = false;
    notice.dataset.state = state || '';
    notice.textContent = message;
    noticeTimer = window.setTimeout(function () { notice.hidden = true; }, state === 'error' ? 7000 : 3500);
  }

  function request(path, options) {
    var settings = options || {};
    var controller = typeof window.AbortController === 'function' ? new window.AbortController() : null;
    var timer = window.setTimeout(function () { if (controller) controller.abort(); }, 10000);
    settings.credentials = 'same-origin';
    settings.headers = Object.assign(
      {Accept: 'application/json'},
      settings.body ? {'Content-Type': 'application/json'} : {},
      settings.headers || {}
    );
    if (controller) settings.signal = controller.signal;
    return fetch(endpoint + path, settings).then(function (response) {
      return response.json().catch(function () { return {}; }).then(function (body) {
        if (!response.ok) {
          var error = new Error(body.message || 'Vos favoris sont momentanément indisponibles.');
          error.status = response.status;
          error.code = body.code || 'FAVORITES_UNAVAILABLE';
          throw error;
        }
        return body;
      });
    }).finally(function () { window.clearTimeout(timer); });
  }

  function readItems(body) {
    if (!body || body.status !== 'ready' || !Array.isArray(body.items)) throw new Error('Réponse favoris incomplète.');
    var next = new Set();
    body.items.forEach(function (item) {
      if (!item || !productPattern.test(item.productId) || !Number.isFinite(Date.parse(item.addedAt))) {
        throw new Error('Réponse favoris invalide.');
      }
      next.add(item.productId);
    });
    return next;
  }

  function clearIntent() {
    try { window.sessionStorage.removeItem(intentKey); } catch (error) {}
  }

  function readIntent() {
    var value = null;
    try { value = JSON.parse(window.sessionStorage.getItem(intentKey)); } catch (error) {}
    if (
      !value || value.version !== 1 || !productPattern.test(value.productId || '') ||
      !Number.isFinite(value.expiresAt) || value.expiresAt <= Date.now() || value.expiresAt > Date.now() + intentTtl
    ) {
      clearIntent();
      return null;
    }
    return value;
  }

  function removeResumeParameter() {
    var url = new URL(window.location.href);
    if (!url.searchParams.has('milaura_favorite')) return;
    url.searchParams.delete('milaura_favorite');
    window.history.replaceState(null, '', url.pathname + url.search + url.hash);
  }

  function login(productId) {
    var intent = {version: 1, productId: productId, expiresAt: Date.now() + intentTtl};
    try {
      window.sessionStorage.setItem(intentKey, JSON.stringify(intent));
      if (!readIntent()) throw new Error('INTENT_UNAVAILABLE');
    } catch (error) {
      clearIntent();
      announce('Connectez-vous d’abord, puis ajoutez cette pièce à vos favoris.', 'error');
      return;
    }
    var returnUrl = new URL(window.location.href);
    returnUrl.searchParams.set('milaura_favorite', '1');
    var destination = new URL(loginPath, window.location.origin);
    if (destination.origin !== window.location.origin) {
      clearIntent();
      announce('La connexion est momentanément indisponible.', 'error');
      return;
    }
    destination.searchParams.set('return_to', returnUrl.pathname + returnUrl.search + returnUrl.hash);
    window.location.assign(destination.pathname + destination.search);
  }

  function load() {
    if (!loggedIn) {
      ready = true;
      renderAll(false);
      return Promise.resolve(true);
    }
    if (loading) return loading;
    ready = false;
    renderAll(false);
    loading = request('/v1/favorites', {method: 'GET'})
      .then(function (body) {
        savedIds = readItems(body);
        ready = true;
        renderAll(false);
        return true;
      })
      .catch(function (error) {
        if (error.status === 401 || error.status === 403) loggedIn = false;
        ready = false;
        renderAll(true);
        announce(error.status === 401 || error.status === 403
          ? 'Votre session a expiré. Reconnectez-vous pour retrouver vos favoris.'
          : 'Vos favoris sont momentanément indisponibles. Réessayez.', 'error');
        return false;
      })
      .finally(function () {
        loading = null;
        renderAll(!ready);
      });
    return loading;
  }

  function setFavorite(productId, saved) {
    if (busy || !ready) return Promise.resolve(false);
    var previous = savedIds.has(productId);
    busy = true;
    if (saved) savedIds.add(productId); else savedIds.delete(productId);
    renderAll(false);
    return request('/v1/favorites', {
      method: 'POST',
      body: JSON.stringify({productId: productId, saved: saved}),
    }).then(function (body) {
      if (body.productId !== productId || body.saved !== saved) throw new Error('Modification non confirmée.');
      savedIds = readItems(body);
      document.dispatchEvent(new CustomEvent('milaura:favorites-changed', {
        detail: {productId: productId, saved: saved, items: Array.from(savedIds)},
      }));
      announce(saved ? 'Pièce ajoutée à vos favoris.' : 'Pièce retirée de vos favoris.', 'saved');
      return true;
    }).catch(function (error) {
      if (previous) savedIds.add(productId); else savedIds.delete(productId);
      if (error.status === 401 || error.status === 403) loggedIn = false;
      announce(error.status === 401 || error.status === 403
        ? 'Votre session a expiré. Reconnectez-vous pour modifier vos favoris.'
        : error.message || 'Modification non confirmée. Réessayez.', 'error');
      return false;
    }).finally(function () {
      busy = false;
      renderAll(false);
    });
  }

  document.addEventListener('click', function (event) {
    var button = event.target.closest('[data-milaura-favorite]');
    if (!button) return;
    event.preventDefault();
    event.stopPropagation();
    var productId = button.dataset.productId;
    if (!productPattern.test(productId || '')) return;
    if (!loggedIn) {
      login(productId);
      return;
    }
    load().then(function (loaded) {
      if (loaded) setFavorite(productId, !savedIds.has(productId));
    });
  });

  if (typeof window.MutationObserver === 'function') {
    new window.MutationObserver(function () { renderAll(!ready); })
      .observe(document.body, {childList: true, subtree: true});
  }

  window.addEventListener('pageshow', function (event) {
    if (loggedIn && event.persisted) load();
  });

  mountPdpButton();
  load().then(function (loaded) {
    if (!loaded || !loggedIn || new URLSearchParams(window.location.search).get('milaura_favorite') !== '1') return;
    var intent = readIntent();
    if (!intent) {
      removeResumeParameter();
      return;
    }
    setFavorite(intent.productId, true).finally(function () {
      clearIntent();
      removeResumeParameter();
    });
  });
})();
