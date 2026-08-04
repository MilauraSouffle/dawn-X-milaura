/* MilAura automatic cart rewards, 2026-08-04.
   Stable tiers are calculated from paid merchandise before MilAura rewards:
   30 EUR gift, 50 EUR free shipping, 80 EUR 15% order discount. */

(() => {
  if (window.MilauraCartRewardsAuto) return;

  const state = {
    timer: null,
    syncing: false,
    rerun: false,
  };

  const route = (path) => {
    const root = window.Shopify?.routes?.root || '/';
    return `${root}${path}`.replace(/\/+/g, '/');
  };

  const readConfig = () => {
    const element = document.getElementById('MilauraCartRewardsConfig');
    if (!element) return null;

    return {
      element,
      giftThreshold: Number.parseInt(element.dataset.thresholdGift, 10) || 3000,
      shippingThreshold: Number.parseInt(element.dataset.thresholdShipping, 10) || 5000,
      discountThreshold: Number.parseInt(element.dataset.thresholdDiscount, 10) || 8000,
      giftVariantId: Number.parseInt(element.dataset.giftVariantId, 10) || 0,
      shippingCode: (element.dataset.shippingCode || '').trim(),
      discountCode: (element.dataset.discountCode || '').trim(),
    };
  };

  const request = async (path, body) => {
    const response = await fetch(route(path), {
      method: body ? 'POST' : 'GET',
      credentials: 'same-origin',
      headers: body ? { 'Content-Type': 'application/json' } : undefined,
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.description || data.message || `cart_request_${response.status}`);
    }
    return data;
  };

  const cartSections = () => {
    const drawer = document.querySelector('cart-drawer');
    if (!drawer || typeof drawer.getSectionsToRender !== 'function') return {};
    return {
      sections: drawer.getSectionsToRender().map((section) => section.id),
      sections_url: window.location.pathname,
    };
  };

  const renderCart = (response) => {
    const drawer = document.querySelector('cart-drawer');
    if (!response?.sections || !drawer || typeof drawer.renderContents !== 'function') return;
    const wasOpen = drawer.classList.contains('active');
    if (wasOpen) {
      drawer.renderContents(response);
      return;
    }

    drawer.getSectionsToRender().forEach((section) => {
      const html = response.sections[section.id];
      if (!html) return;
      const target = section.selector
        ? document.querySelector(section.selector)
        : document.getElementById(section.id);
      if (!target) return;
      target.innerHTML = drawer.getSectionInnerHTML(html, section.selector);
    });
    drawer.querySelector('#CartDrawer-Overlay')?.addEventListener('click', drawer.close.bind(drawer));
  };

  const isGift = (item) => {
    if (!item) return false;
    const properties = item.properties || {};
    return properties._milaura_gift === 'true'
      || String(item.handle || '').startsWith('cadeau-')
      || String(item.product_title || '').startsWith('Cadeau -');
  };

  const merchandiseSubtotal = (cart) => (cart?.items || []).reduce((total, item) => {
    if (isGift(item)) return total;
    const original = Number(item.original_line_price);
    if (Number.isFinite(original)) return total + original;
    return total + Number(item.line_price || item.final_line_price || 0);
  }, 0);

  const cartCodes = (cart) => (cart?.discount_codes || [])
    .map((entry) => String(entry.code || '').trim())
    .filter(Boolean);

  const sameCodes = (left, right) => {
    const normalize = (codes) => [...new Set(codes.map((code) => code.toUpperCase()))].sort();
    return JSON.stringify(normalize(left)) === JSON.stringify(normalize(right));
  };

  const addGift = (config) => request('cart/add.js', {
    items: [{
      id: config.giftVariantId,
      quantity: 1,
      properties: {
        'Cadeau MilAura': 'Bracelet hématite offert',
        Statut: 'Offert',
        _milaura_gift: 'true',
        _milaura_gift_min_paid_cents: String(config.giftThreshold),
      },
    }],
    ...cartSections(),
  });

  const normalizeGift = async (cart, config, eligible) => {
    const gifts = (cart.items || []).filter(isGift);

    if (!eligible && gifts.length) {
      const updates = {};
      gifts.forEach((item) => { updates[item.key] = 0; });
      return request('cart/update.js', { updates, ...cartSections() });
    }

    if (!eligible || !config.giftVariantId) return null;

    const target = gifts.find((item) => Number(item.variant_id) === config.giftVariantId);
    const stale = gifts.filter((item) => Number(item.variant_id) !== config.giftVariantId);
    if (stale.length || (target && Number(target.quantity) !== 1)) {
      const updates = {};
      stale.forEach((item) => { updates[item.key] = 0; });
      if (target && Number(target.quantity) !== 1) updates[target.key] = 1;
      const response = await request('cart/update.js', { updates, ...cartSections() });
      if (!target) return addGift(config);
      return response;
    }

    if (!target) return addGift(config);
    return null;
  };

  const syncDiscountCodes = async (cart, config, subtotal) => {
    const managed = [config.shippingCode, config.discountCode, 'MILAURA-LIV19', 'MILAURA30']
      .filter(Boolean)
      .map((code) => code.toUpperCase());
    const preserved = cartCodes(cart).filter((code) => !managed.includes(code.toUpperCase()));
    const desired = [...preserved];

    if (config.shippingCode && subtotal >= config.shippingThreshold) desired.push(config.shippingCode);
    if (config.discountCode && subtotal >= config.discountThreshold) desired.push(config.discountCode);
    if (sameCodes(cartCodes(cart), desired)) return null;

    return request('cart/update.js', {
      discount: desired.join(','),
      attributes: {
        'Avantages MilAura': desired.filter((code) => managed.includes(code.toUpperCase())).join(', '),
      },
      ...cartSections(),
    });
  };

  const sync = async () => {
    const config = readConfig();
    if (!config) return;
    if (state.syncing) {
      state.rerun = true;
      return;
    }

    state.syncing = true;
    state.rerun = false;
    config.element.dataset.rewardSync = 'loading';

    try {
      let cart = await request('cart.js');
      if (!cart.items?.length) {
        config.element.dataset.rewardSync = 'ready';
        return;
      }

      let subtotal = merchandiseSubtotal(cart);
      const giftResponse = await normalizeGift(cart, config, subtotal >= config.giftThreshold);
      if (giftResponse) {
        renderCart(giftResponse);
        cart = await request('cart.js');
        subtotal = merchandiseSubtotal(cart);
      }

      const discountResponse = await syncDiscountCodes(cart, config, subtotal);
      if (discountResponse) {
        renderCart(discountResponse);
        cart = discountResponse;
      }

      const expectedCodes = [];
      if (config.shippingCode && subtotal >= config.shippingThreshold) expectedCodes.push(config.shippingCode);
      if (config.discountCode && subtotal >= config.discountThreshold) expectedCodes.push(config.discountCode);
      const acceptedCodes = cartCodes(cart).map((code) => code.toUpperCase());
      const rejected = expectedCodes.filter((code) => !acceptedCodes.includes(code.toUpperCase()));
      config.element.dataset.rewardSync = rejected.length ? 'partial' : 'ready';
      if (rejected.length) console.warn('MilAura rewards not applicable:', rejected.join(', '));
    } catch (error) {
      config.element.dataset.rewardSync = 'error';
      console.warn('MilAura rewards sync failed:', error);
    } finally {
      state.syncing = false;
      if (state.rerun) schedule();
    }
  };

  const schedule = () => {
    window.clearTimeout(state.timer);
    state.timer = window.setTimeout(sync, 180);
  };

  const init = () => {
    if (typeof window.subscribe === 'function' && window.PUB_SUB_EVENTS?.cartUpdate) {
      window.subscribe(window.PUB_SUB_EVENTS.cartUpdate, (event) => {
        if (event?.source !== 'milaura-rewards') schedule();
      });
    } else if (typeof subscribe === 'function' && typeof PUB_SUB_EVENTS !== 'undefined') {
      subscribe(PUB_SUB_EVENTS.cartUpdate, (event) => {
        if (event?.source !== 'milaura-rewards') schedule();
      });
    }
    document.addEventListener('cart:updated', schedule);
    window.addEventListener('cart:updated', schedule);
    schedule();
  };

  window.MilauraCartRewardsAuto = { sync: schedule };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
