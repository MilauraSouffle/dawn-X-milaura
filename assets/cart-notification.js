class CartNotification extends HTMLElement {
  constructor() {
    super();

    this.notification = document.getElementById('cart-notification');
    this.header = document.querySelector('sticky-header');
    this.onBodyClick = this.handleBodyClick.bind(this);

    this.notification.addEventListener('keyup', (evt) => evt.code === 'Escape' && this.close());
    this.querySelectorAll('button[type="button"]').forEach((closeButton) =>
      closeButton.addEventListener('click', this.close.bind(this))
    );
  }

  open() {
    this.notification.classList.add('animate', 'active');

    this.notification.addEventListener(
      'transitionend',
      () => {
        this.notification.focus();
        trapFocus(this.notification);
      },
      { once: true }
    );

    document.body.addEventListener('click', this.onBodyClick);
  }

  close() {
    this.notification.classList.remove('active');
    document.body.removeEventListener('click', this.onBodyClick);

    removeTrapFocus(this.activeElement);
  }

  renderContents(parsedState) {
    this.cartItemKey = parsedState.key;

    if (parsedState.sections) {
      this.getSectionsToRender().forEach((section) => {
        const el = document.getElementById(section.id);
        const sectionHtml = parsedState.sections[section.id];
        if (el && sectionHtml) {
          const html = this.getSectionInnerHTML(sectionHtml, section.selector);
          if (html) el.innerHTML = html;
        }
      });
    }

    // Update cart badge count (fallback si section rendering echoue)
    this.updateCartBadge();

    if (this.header) this.header.reveal();
    this.open();
  }

  updateCartBadge() {
    fetch('/cart.js')
      .then((r) => r.json())
      .then((cart) => {
        // Update all badge elements
        document.querySelectorAll('.cart-count-bubble span[aria-hidden]').forEach((el) => {
          el.textContent = cart.item_count;
        });
        document.querySelectorAll('[data-cart-count]').forEach((el) => {
          el.textContent = cart.item_count;
        });
        // Update Milaura navbar badges
        document.querySelectorAll('.nav-cart-count').forEach((el) => {
          if (cart.item_count > 0) {
            el.textContent = cart.item_count;
            el.style.display = 'flex';
          } else {
            el.style.display = 'none';
          }
        });
        // Notify other components (dock, etc.)
        window.dispatchEvent(new CustomEvent('cart:updated', { detail: cart }));
      })
      .catch(() => {});
  }

  getSectionsToRender() {
    return [
      {
        id: 'cart-notification-product',
        selector: `[id="cart-notification-product-${this.cartItemKey}"]`,
      },
      {
        id: 'cart-notification-button',
      },
      {
        id: 'cart-icon-bubble',
      },
    ];
  }

  getSectionInnerHTML(html, selector = '.shopify-section') {
    const el = new DOMParser().parseFromString(html, 'text/html').querySelector(selector);
    return el ? el.innerHTML : '';
  }

  handleBodyClick(evt) {
    const target = evt.target;
    if (target !== this.notification && !target.closest('cart-notification')) {
      const disclosure = target.closest('details-disclosure, header-menu');
      this.activeElement = disclosure ? disclosure.querySelector('summary') : null;
      this.close();
    }
  }

  setActiveElement(element) {
    this.activeElement = element;
  }
}

customElements.define('cart-notification', CartNotification);
