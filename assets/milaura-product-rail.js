(function () {
  function initProductRail(root) {
    if (!root || root.dataset.milauraProductRailReady === 'true') return;

    var rail = root.querySelector('[data-milaura-product-rail]');
    var cards = rail ? Array.from(rail.querySelectorAll('.milaura-product-card')) : [];
    if (!rail || !cards.length) return;

    root.dataset.milauraProductRailReady = 'true';

    var previousButton = root.querySelector('[data-milaura-rail-previous]');
    var nextButton = root.querySelector('[data-milaura-rail-next]');
    var navigation = root.querySelector('[data-milaura-rail-navigation]');
    var dots = Array.from(root.querySelectorAll('[data-milaura-rail-dot]'));
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    var frame = null;

    function railPaddingStart() {
      return parseFloat(window.getComputedStyle(rail).paddingLeft) || 0;
    }

    function targetLeft(card) {
      return Math.max(0, card.offsetLeft - railPaddingStart());
    }

    function activeIndex() {
      var current = rail.scrollLeft;
      var bestIndex = 0;
      var bestDistance = Infinity;

      cards.forEach(function (card, index) {
        var distance = Math.abs(targetLeft(card) - current);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = index;
        }
      });

      return bestIndex;
    }

    function hasOverflow() {
      return rail.scrollWidth - rail.clientWidth > 2;
    }

    function update() {
      var overflowing = hasOverflow();
      var index = activeIndex();
      var atStart = rail.scrollLeft <= 2;
      var atEnd = rail.scrollLeft >= rail.scrollWidth - rail.clientWidth - 2;

      root.classList.toggle('is-overflowing', overflowing);
      root.classList.toggle('is-static', !overflowing);

      if (navigation) navigation.hidden = !overflowing || dots.length < 2;
      if (previousButton) previousButton.disabled = !overflowing || atStart;
      if (nextButton) nextButton.disabled = !overflowing || atEnd;

      dots.forEach(function (dot, dotIndex) {
        var isActive = dotIndex === index;
        dot.classList.toggle('is-active', isActive);
        if (isActive) {
          dot.setAttribute('aria-current', 'true');
        } else {
          dot.removeAttribute('aria-current');
        }
      });
    }

    function requestUpdate() {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(function () {
        frame = null;
        update();
      });
    }

    function scrollToIndex(index) {
      var boundedIndex = Math.max(0, Math.min(cards.length - 1, index));
      rail.scrollTo({
        left: targetLeft(cards[boundedIndex]),
        behavior: reduceMotion.matches ? 'auto' : 'smooth'
      });
    }

    if (previousButton) {
      previousButton.addEventListener('click', function () {
        scrollToIndex(activeIndex() - 1);
      });
    }

    if (nextButton) {
      nextButton.addEventListener('click', function () {
        scrollToIndex(activeIndex() + 1);
      });
    }

    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        var index = parseInt(dot.getAttribute('data-milaura-rail-dot'), 10);
        if (!Number.isNaN(index)) scrollToIndex(index);
      });
    });

    rail.addEventListener('keydown', function (event) {
      if (event.target !== rail || !hasOverflow()) return;
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollToIndex(activeIndex() - 1);
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollToIndex(activeIndex() + 1);
      }
      if (event.key === 'Home') {
        event.preventDefault();
        scrollToIndex(0);
      }
      if (event.key === 'End') {
        event.preventDefault();
        scrollToIndex(cards.length - 1);
      }
    });

    rail.addEventListener('scroll', requestUpdate, { passive: true });

    if ('ResizeObserver' in window) {
      var resizeObserver = new ResizeObserver(requestUpdate);
      resizeObserver.observe(rail);
      cards.forEach(function (card) {
        resizeObserver.observe(card);
      });
    } else {
      window.addEventListener('resize', requestUpdate, { passive: true });
    }

    update();
  }

  function initProductRails(scope) {
    var context = scope && scope.querySelectorAll ? scope : document;
    context.querySelectorAll('[data-milaura-product-rail-root]').forEach(initProductRail);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initProductRails(document);
    });
  } else {
    initProductRails(document);
  }

  document.addEventListener('shopify:section:load', function (event) {
    initProductRails(event.target);
  });
})();
