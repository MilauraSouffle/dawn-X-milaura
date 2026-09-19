(function () {
  'use strict';

  function clampQuantity(input) {
    var minimum = Number(input.min || 1);
    var maximum = input.max ? Number(input.max) : Number.POSITIVE_INFINITY;
    var value = Number(input.value || minimum);

    if (!Number.isFinite(value)) value = minimum;
    value = Math.max(minimum, Math.min(maximum, value));
    input.value = String(Math.round(value));
    input.dispatchEvent(new Event('change', { bubbles: true }));
  }

  function initQuantity(root) {
    root.querySelectorAll('[data-pdp-quantity]').forEach(function (quantity) {
      var input = quantity.querySelector('[data-pdp-quantity-input]');
      var minus = quantity.querySelector('[data-pdp-quantity-minus]');
      var plus = quantity.querySelector('[data-pdp-quantity-plus]');
      if (!input || !minus || !plus) return;

      minus.addEventListener('click', function () {
        input.value = String(Number(input.value || 1) - 1);
        clampQuantity(input);
      });

      plus.addEventListener('click', function () {
        input.value = String(Number(input.value || 1) + 1);
        clampQuantity(input);
      });

      input.addEventListener('blur', function () {
        clampQuantity(input);
      });
    });
  }

  function setGalleryPage(gallery, index) {
    var track = gallery.querySelector('[data-pdp-gallery-track]');
    var slides = Array.from(gallery.querySelectorAll('[data-pdp-slide]'));
    var pages = Array.from(gallery.querySelectorAll('[data-pdp-page]'));
    var current = gallery.querySelector('[data-pdp-current]');
    var slide = slides[index];

    if (!track || !slide) return;
    track.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' });

    pages.forEach(function (page, pageIndex) {
      var active = pageIndex === index;
      page.classList.toggle('is-active', active);
      page.setAttribute('aria-selected', String(active));
    });
    if (current) current.textContent = String(index + 1);
  }

  function initGallery(root) {
    var gallery = root.querySelector('[data-pdp-gallery]');
    if (!gallery) return;

    var track = gallery.querySelector('[data-pdp-gallery-track]');
    var slides = Array.from(gallery.querySelectorAll('[data-pdp-slide]'));
    var pages = Array.from(gallery.querySelectorAll('[data-pdp-page]'));
    var current = gallery.querySelector('[data-pdp-current]');
    if (!track || slides.length < 2) return;

    pages.forEach(function (page) {
      page.addEventListener('click', function () {
        setGalleryPage(gallery, Number(page.dataset.pdpPage || 0));
      });
    });

    var frame = null;
    track.addEventListener(
      'scroll',
      function () {
        if (frame) window.cancelAnimationFrame(frame);
        frame = window.requestAnimationFrame(function () {
          var nearestIndex = 0;
          var nearestDistance = Number.POSITIVE_INFINITY;

          slides.forEach(function (slide, index) {
            var distance = Math.abs(slide.offsetLeft - track.scrollLeft);
            if (distance < nearestDistance) {
              nearestDistance = distance;
              nearestIndex = index;
            }
          });

          pages.forEach(function (page, index) {
            var active = index === nearestIndex;
            page.classList.toggle('is-active', active);
            page.setAttribute('aria-selected', String(active));
          });
          if (current) current.textContent = String(nearestIndex + 1);
        });
      },
      { passive: true }
    );
  }

  function setSubmitState(scope, available) {
    scope.querySelectorAll('[data-pdp-submit]').forEach(function (button) {
      var label = button.querySelector('[data-pdp-submit-text]');
      var isSticky = Boolean(button.closest('[data-pdp-sticky]'));
      button.disabled = !available;
      if (label) label.textContent = available ? (isSticky ? 'Ajouter' : 'Ajouter au panier') : 'Épuisé';
    });
  }

  function dispatchVariant(root, detail) {
    root.querySelectorAll('[data-pdp-variant-input]').forEach(function (input) {
      input.value = detail.id;
      input.disabled = !detail.available;
    });

    var price = root.querySelector('[data-pdp-price]');
    var compare = root.querySelector('[data-pdp-compare-price]');
    var availability = root.querySelector('[data-pdp-availability]');
    var availabilityText = root.querySelector('[data-pdp-availability-text]');

    if (price) price.textContent = detail.price;
    if (compare) {
      compare.textContent = detail.comparePrice || '';
      compare.hidden = !detail.comparePrice;
    }
    if (availability) availability.classList.toggle('is-unavailable', !detail.available);
    if (availabilityText) availabilityText.textContent = detail.available ? 'Disponible' : 'Épuisé';
    setSubmitState(root, detail.available);

    document.dispatchEvent(new CustomEvent('milaura:pdp-variant', { detail: detail }));
  }

  function initVariants(root) {
    var select = root.querySelector('[data-pdp-variant-select]');
    if (!select) {
      var defaultInput = root.querySelector('[data-pdp-variant-input]');
      var defaultPrice = root.querySelector('[data-pdp-price]');
      var defaultUnavailable = root.querySelector('[data-pdp-availability].is-unavailable');
      if (!defaultInput) return;

      dispatchVariant(root, {
        id: defaultInput.value,
        price: defaultPrice ? defaultPrice.textContent.trim() : '',
        comparePrice: '',
        available: !defaultUnavailable,
      });
      return;
    }

    function updateVariant(updateUrl) {
      var option = select.options[select.selectedIndex];
      if (!option) return;

      var detail = {
        id: option.value,
        price: option.dataset.price || '',
        comparePrice: option.dataset.comparePrice || '',
        available: option.dataset.available === 'true',
      };
      dispatchVariant(root, detail);

      if (updateUrl && window.history && window.history.replaceState) {
        var url = new URL(window.location.href);
        url.searchParams.set('variant', detail.id);
        window.history.replaceState({}, '', url.toString());
      }
    }

    select.addEventListener('change', function () {
      updateVariant(true);
    });
    updateVariant(false);
  }

  function initSticky(root) {
    var sticky = document.querySelector('[data-pdp-sticky]');
    var mainSubmit = root.querySelector('[data-pdp-submit]');
    if (!sticky || !mainSubmit || !('IntersectionObserver' in window)) return;

    document.addEventListener('milaura:pdp-variant', function (event) {
      var detail = event.detail || {};
      sticky.querySelectorAll('[data-pdp-variant-input]').forEach(function (input) {
        input.value = detail.id || input.value;
        input.disabled = !detail.available;
      });
      var price = sticky.querySelector('[data-pdp-sticky-price]');
      if (price && detail.price) price.textContent = detail.price;
      setSubmitState(sticky, Boolean(detail.available));
    });

    var observer = new IntersectionObserver(
      function (entries) {
        var entry = entries[0];
        var passedMainAction = entry.boundingClientRect.top < 0;
        var visible = !entry.isIntersecting && passedMainAction;
        sticky.classList.toggle('is-visible', visible);
        sticky.setAttribute('aria-hidden', String(!visible));
      },
      { threshold: 0.05 }
    );
    observer.observe(mainSubmit);
  }

  function initRoot(root) {
    if (root.dataset.pdpReady === 'true') return;
    root.dataset.pdpReady = 'true';
    initGallery(root);
    initQuantity(root);
    initVariants(root);
    initSticky(root);
  }

  function initAll(scope) {
    (scope || document).querySelectorAll('[data-milaura-pdp-root]').forEach(initRoot);
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
