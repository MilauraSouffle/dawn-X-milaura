(function () {
  'use strict';

  function initNavigation(root) {
    if (!root || root.dataset.milauraNavigationReady === 'true') return;
    root.dataset.milauraNavigationReady = 'true';

    var burger = root.querySelector('[data-nav-burger]');
    var mobileOverlay = root.querySelector('[data-nav-mobile]');
    var mobileClose = root.querySelector('[data-nav-mobile-close]');
    var mobileBackdrop = root.querySelector('[data-nav-mobile-backdrop]');
    var searchButtons = root.querySelectorAll('[data-milaura-search-toggle]');
    var searchOverlay = root.querySelector('[data-nav-search]');
    var searchClose = root.querySelector('[data-nav-search-close]');
    var searchBackdrop = root.querySelector('[data-nav-search-backdrop]');
    var searchInput = root.querySelector('[data-nav-search-input]');
    var desktopToggles = root.querySelectorAll('[data-nav-desktop-toggle]');
    var logo = root.querySelector('.nav-logo-link');
    var lastFocus = null;

    function lockPage(locked) {
      document.documentElement.classList.toggle('milaura-navigation-lock', locked);
    }

    function closeDesktopMenus(except) {
      desktopToggles.forEach(function (button) {
        var item = button.closest('.nav-item');
        if (!item || item === except) return;
        item.classList.remove('is-open');
        button.setAttribute('aria-expanded', 'false');
      });
    }

    function setMobile(open) {
      if (!mobileOverlay || !burger) return;
      mobileOverlay.classList.toggle('is-open', open);
      mobileOverlay.setAttribute('aria-hidden', open ? 'false' : 'true');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      lockPage(open || (searchOverlay && searchOverlay.classList.contains('is-open')));

      if (open) {
        lastFocus = document.activeElement;
        var target = mobileOverlay.querySelector('[data-nav-mobile-close]');
        if (target) target.focus();
      } else if (lastFocus && typeof lastFocus.focus === 'function') {
        lastFocus.focus();
      }
    }

    function setSearch(open) {
      if (!searchOverlay) return;
      if (open) setMobile(false);
      searchOverlay.classList.toggle('is-open', open);
      searchOverlay.setAttribute('aria-hidden', open ? 'false' : 'true');
      lockPage(open || (mobileOverlay && mobileOverlay.classList.contains('is-open')));

      if (open) {
        lastFocus = document.activeElement;
        if (searchInput) {
          searchInput.focus({ preventScroll: true });
          window.requestAnimationFrame(function () {
            searchInput.focus({ preventScroll: true });
          });
          window.setTimeout(function () {
            if (searchOverlay.classList.contains('is-open')) {
              searchInput.focus({ preventScroll: true });
            }
          }, 180);
        }
      } else if (lastFocus && typeof lastFocus.focus === 'function') {
        lastFocus.focus();
      }
    }

    if (burger) burger.addEventListener('click', function () { setMobile(true); });
    if (mobileClose) mobileClose.addEventListener('click', function () { setMobile(false); });
    if (mobileBackdrop) mobileBackdrop.addEventListener('click', function () { setMobile(false); });

    searchButtons.forEach(function (button) {
      button.addEventListener('click', function () { setSearch(true); });
    });
    if (searchClose) searchClose.addEventListener('click', function () { setSearch(false); });
    if (searchBackdrop) searchBackdrop.addEventListener('click', function () { setSearch(false); });

    desktopToggles.forEach(function (button) {
      button.addEventListener('click', function () {
        var item = button.closest('.nav-item');
        var open = item && !item.classList.contains('is-open');
        closeDesktopMenus(item);
        if (item) item.classList.toggle('is-open', open);
        button.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });

    root.addEventListener('click', function (event) {
      var closeLink = event.target.closest('[data-nav-close-mobile]');
      if (closeLink) setMobile(false);
    });

    document.addEventListener('click', function (event) {
      if (!root.contains(event.target)) closeDesktopMenus();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        setMobile(false);
        setSearch(false);
        closeDesktopMenus();
      }

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setSearch(!(searchOverlay && searchOverlay.classList.contains('is-open')));
      }
    });

    if (logo) {
      logo.addEventListener('click', function (event) {
        var rootPath = logo.getAttribute('href') || '/';
        if (window.location.pathname === rootPath || (rootPath === '/' && window.location.pathname === '/')) {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }

    window.milauraOpenSearch = function () { setSearch(true); };
  }

  function initAll(scope) {
    (scope || document).querySelectorAll('[data-milaura-navigation]').forEach(initNavigation);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { initAll(document); });
  } else {
    initAll(document);
  }

  document.addEventListener('shopify:section:load', function (event) { initAll(event.target); });

  var toastTimer = null;
  window.milauraCartToast = function (message) {
    var toast = document.querySelector('[data-milaura-cart-toast]');
    if (!toast) return;
    var copy = toast.querySelector('[data-milaura-cart-toast-copy]');
    if (copy) copy.textContent = message || 'Ajouté au panier';
    toast.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () { toast.classList.remove('is-visible'); }, 3000);
  };
})();
