(function () {
  if (window.milauraEditorialPurchaseReady) return;
  window.milauraEditorialPurchaseReady = true;

  function normalizeQuantity(input, requestedValue) {
    const minimum = Number.parseInt(input.min, 10) || 1;
    const increment = Number.parseInt(input.step, 10) || 1;
    const maximum = input.max ? Number.parseInt(input.max, 10) : null;
    let quantity = Number.parseInt(requestedValue, 10);

    if (!Number.isFinite(quantity)) quantity = minimum;
    quantity = Math.max(minimum, quantity);
    quantity = minimum + Math.round((quantity - minimum) / increment) * increment;
    if (maximum !== null) quantity = Math.min(maximum, quantity);

    input.value = String(quantity);

    const purchase = input.closest('[data-editorial-purchase]');
    const addButton = purchase?.querySelector('[data-quick-add]');
    if (addButton) addButton.dataset.quantity = String(quantity);

    const minusButton = purchase?.querySelector('[data-editorial-quantity-minus]');
    const plusButton = purchase?.querySelector('[data-editorial-quantity-plus]');
    if (minusButton) minusButton.disabled = quantity <= minimum;
    if (plusButton) plusButton.disabled = maximum !== null && quantity >= maximum;
  }

  document.addEventListener('click', function (event) {
    const stepButton = event.target.closest('[data-editorial-quantity-minus], [data-editorial-quantity-plus]');
    if (!stepButton) return;

    const purchase = stepButton.closest('[data-editorial-purchase]');
    const input = purchase?.querySelector('[data-editorial-quantity-input]');
    if (!input) return;

    event.preventDefault();
    const increment = Number.parseInt(input.step, 10) || 1;
    const direction = stepButton.hasAttribute('data-editorial-quantity-plus') ? 1 : -1;
    normalizeQuantity(input, (Number.parseInt(input.value, 10) || 1) + direction * increment);
  });

  document.addEventListener('change', function (event) {
    if (!event.target.matches('[data-editorial-quantity-input]')) return;
    normalizeQuantity(event.target, event.target.value);
  });

  function initializePurchaseControls(root) {
    root.querySelectorAll('[data-editorial-quantity-input]').forEach(function (input) {
      normalizeQuantity(input, input.value);
    });
  }

  initializePurchaseControls(document);

  document.addEventListener('shopify:section:load', function (event) {
    initializePurchaseControls(event.target);
  });

  document.addEventListener('milaura:recommendations:loaded', function (event) {
    initializePurchaseControls(event.detail?.root || document);
  });
})();
