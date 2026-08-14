class CartDrawer extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('keyup', (evt) => evt.code === 'Escape' && this.close());
    this.querySelector('#CartDrawer-Overlay').addEventListener('click', this.close.bind(this));
    this.setHeaderCartIconAccessibility();
    this.setQuickAddAccessibility();
  }

  setHeaderCartIconAccessibility() {
    const milauraCartLinks = document.querySelectorAll(
      '.nav-cart-icon, .nav-mobile-icon[aria-label="Panier"], .milaura-dock a[href$="/cart"]'
    );
    const cartLinks = milauraCartLinks.length
      ? Array.from(milauraCartLinks)
      : [document.querySelector('#cart-icon-bubble')].filter(Boolean);

    cartLinks.forEach((cartLink) => {
      cartLink.setAttribute('role', 'button');
      cartLink.setAttribute('aria-haspopup', 'dialog');
      cartLink.addEventListener('click', (event) => {
        event.preventDefault();
        this.open(cartLink);
      });
      cartLink.addEventListener('keydown', (event) => {
        if (event.code.toUpperCase() === 'SPACE') {
          event.preventDefault();
          this.open(cartLink);
        }
      });
    });
  }

  setQuickAddAccessibility() {
    document.addEventListener(
      'click',
      (event) => {
        const quickAddButton = event.target.closest('[data-quick-add]');
        if (!quickAddButton || quickAddButton.dataset.milauraQuickAddPending === 'true') return;

        event.preventDefault();
        event.stopImmediatePropagation();
        this.quickAdd(quickAddButton);
      },
      true
    );
  }

  async quickAdd(button) {
    const variantId = Number.parseInt(button.dataset.productId, 10);
    if (!variantId) return;
    const requestedQuantity = Number.parseInt(button.dataset.quantity, 10);
    const quantity = Number.isFinite(requestedQuantity) && requestedQuantity > 0 ? requestedQuantity : 1;

    const originalContent = button.innerHTML;
    button.dataset.milauraQuickAddPending = 'true';
    button.setAttribute('aria-busy', 'true');
    button.style.pointerEvents = 'none';
    button.textContent = 'Ajout...';

    try {
      let cartBeforeAdd = null;
      try {
        cartBeforeAdd = await this.fetchCart();
      } catch (error) {
        console.warn('MilAura quick add preflight cart check failed:', error);
      }

      const cartAddRoute = window.routes?.cart_add_url || '/cart/add';
      const cartAddUrl = cartAddRoute.endsWith('.js') ? cartAddRoute : `${cartAddRoute}.js`;
      const payload = {
        items: [{ id: variantId, quantity }],
        sections: this.getSectionsToRender().map((section) => section.id),
        sections_url: window.location.pathname,
      };

      let data;
      let cartAfterAdd = null;
      let partialAvailabilityMessage = '';
      try {
        const response = await fetch(cartAddUrl, {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
          },
          body: JSON.stringify(payload),
        });
        data = await response.json().catch(() => null);
        if (!response.ok || !data || data.status) {
          const errorMessage = data?.description || data?.message || `cart_add_${response.status}`;

          if (response.status === 422 && cartBeforeAdd) {
            cartAfterAdd = await this.fetchCart();
            const quantityBefore = this.getVariantQuantity(cartBeforeAdd, variantId);
            const quantityAfter = this.getVariantQuantity(cartAfterAdd, variantId);

            if (quantityAfter > quantityBefore) {
              data = {
                id: variantId,
                item_count: cartAfterAdd.item_count,
                sections: await this.fetchCartSections(),
              };
              partialAvailabilityMessage = errorMessage;
            } else {
              throw new Error(errorMessage);
            }
          } else {
            throw new Error(errorMessage);
          }
        }
      } catch (error) {
        console.error('MilAura quick add request failed:', error);
        button.textContent = 'Réessayer';
        return;
      }

      button.textContent = partialAvailabilityMessage ? 'Stock ajouté' : 'Ajouté';
      if (typeof window.milauraCartToast === 'function') {
        window.milauraCartToast(partialAvailabilityMessage || 'Ajouté au panier');
      }

      this.setActiveElement(button);
      try {
        this.renderContents(data);
      } catch (error) {
        console.error('MilAura quick add drawer refresh failed:', error);
      }

      try {
        const cart = cartAfterAdd || (await this.fetchCart());

        document.dispatchEvent(new CustomEvent('cart:updated', { detail: cart }));
        window.dispatchEvent(new CustomEvent('cart:updated', { detail: cart }));
      } catch (error) {
        console.error('MilAura quick add cart refresh failed:', error);
      }
    } finally {
      window.setTimeout(() => {
        button.innerHTML = originalContent;
        button.style.pointerEvents = '';
        button.removeAttribute('aria-busy');
        delete button.dataset.milauraQuickAddPending;
      }, 1400);
    }
  }

  async fetchCart() {
    const cartRoute = window.routes?.cart_url || '/cart';
    const cartJsonUrl = cartRoute.endsWith('.js') ? cartRoute : `${cartRoute}.js`;
    const response = await fetch(cartJsonUrl, { credentials: 'same-origin' });
    const cart = await response.json();
    if (!response.ok) throw new Error(`cart_refresh_${response.status}`);
    return cart;
  }

  async fetchCartSections() {
    const cartRoute = window.routes?.cart_url || '/cart';
    const sectionIds = this.getSectionsToRender().map((section) => section.id).join(',');
    const separator = cartRoute.includes('?') ? '&' : '?';
    const response = await fetch(`${cartRoute}${separator}sections=${encodeURIComponent(sectionIds)}`, {
      credentials: 'same-origin',
    });
    const sections = await response.json();
    if (!response.ok) throw new Error(`cart_sections_${response.status}`);
    return sections;
  }

  getVariantQuantity(cart, variantId) {
    return (cart?.items || []).reduce((total, item) => {
      return Number(item.variant_id) === variantId ? total + Number(item.quantity || 0) : total;
    }, 0);
  }

  setEmptyState(isEmpty) {
    this.classList.toggle('is-empty', isEmpty);
    this.querySelector('cart-drawer-items')?.classList.toggle('is-empty', isEmpty);
  }

  open(triggeredBy) {
    if (triggeredBy) this.setActiveElement(triggeredBy);
    const cartDrawerNote = this.querySelector('[id^="Details-"] summary');
    if (cartDrawerNote && !cartDrawerNote.hasAttribute('role')) this.setSummaryAccessibility(cartDrawerNote);
    // here the animation doesn't seem to always get triggered. A timeout seem to help
    setTimeout(() => {
      this.classList.add('animate', 'active');
    });

    this.addEventListener(
      'transitionend',
      () => {
        const containerToTrapFocusOn = this.querySelector('.drawer__inner');
        const focusElement = this.querySelector('.drawer__inner') || this.querySelector('.drawer__close');
        trapFocus(containerToTrapFocusOn, focusElement);
      },
      { once: true }
    );

    document.body.classList.add('overflow-hidden');
  }

  close() {
    this.classList.remove('active');
    removeTrapFocus(this.activeElement);
    document.body.classList.remove('overflow-hidden');
  }

  setSummaryAccessibility(cartDrawerNote) {
    cartDrawerNote.setAttribute('role', 'button');
    cartDrawerNote.setAttribute('aria-expanded', 'false');

    if (cartDrawerNote.nextElementSibling.getAttribute('id')) {
      cartDrawerNote.setAttribute('aria-controls', cartDrawerNote.nextElementSibling.id);
    }

    cartDrawerNote.addEventListener('click', (event) => {
      event.currentTarget.setAttribute('aria-expanded', !event.currentTarget.closest('details').hasAttribute('open'));
    });

    cartDrawerNote.parentElement.addEventListener('keyup', onKeyUpEscape);
  }

  renderContents(parsedState) {
    this.setEmptyState(parsedState.item_count === 0);
    this.productId = parsedState.id;
    this.getSectionsToRender().forEach((section) => {
      const sectionElement = section.selector
        ? document.querySelector(section.selector)
        : document.getElementById(section.id);
      const sectionHTML = parsedState.sections?.[section.id];

      if (!sectionElement || !sectionHTML) return;
      const nextContent = this.getSectionInnerHTML(sectionHTML, section.selector);
      if (nextContent === null) return;
      sectionElement.innerHTML = nextContent;
    });

    setTimeout(() => {
      this.querySelector('#CartDrawer-Overlay').addEventListener('click', this.close.bind(this));
      this.open();
    });
  }

  getSectionInnerHTML(html, selector = '.shopify-section') {
    const section = new DOMParser().parseFromString(html, 'text/html').querySelector(selector);
    return section ? section.innerHTML : null;
  }

  getSectionsToRender() {
    return [
      {
        id: 'cart-drawer',
        selector: '#CartDrawer',
      },
      {
        id: 'cart-icon-bubble',
      },
    ];
  }

  getSectionDOM(html, selector = '.shopify-section') {
    return new DOMParser().parseFromString(html, 'text/html').querySelector(selector);
  }

  setActiveElement(element) {
    this.activeElement = element;
  }
}

customElements.define('cart-drawer', CartDrawer);

class CartDrawerItems extends CartItems {
  getSectionsToRender() {
    return [
      {
        id: 'CartDrawer',
        section: 'cart-drawer',
        selector: '.drawer__inner',
      },
      {
        id: 'cart-icon-bubble',
        section: 'cart-icon-bubble',
        selector: '.shopify-section',
      },
    ];
  }
}

customElements.define('cart-drawer-items', CartDrawerItems);
