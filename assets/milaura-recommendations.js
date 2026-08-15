(function () {
  'use strict';

  if (window.milauraRecommendationsReady) return;
  window.milauraRecommendationsReady = true;

  const HISTORY_KEY = 'milauraRecentlyViewed';
  const HISTORY_LIMIT = 6;
  const RECOMMENDATION_FRAGMENT = 'milaura-recommendation-fragment';
  const PRODUCT_FRAGMENT = 'milaura-product-fragment';
  const RECENT_FRAGMENT = 'milaura-recent-fragment';

  function storefrontRoot() {
    const root = window.Shopify?.routes?.root || '/';
    return root.endsWith('/') ? root : `${root}/`;
  }

  function parseList(value) {
    return String(value || '')
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
  }

  function uniqueByProductId(cards, excludedIds, limit) {
    const excluded = new Set(excludedIds.map(String));
    const seen = new Set();
    const unique = [];

    cards.forEach((card) => {
      const productId = String(card.dataset.productId || '');
      if (!productId || excluded.has(productId) || seen.has(productId)) return;
      if (card.dataset.productAvailable === 'false') return;
      seen.add(productId);
      unique.push(card);
    });

    return unique.slice(0, limit);
  }

  function publishAnalytics(name, payload) {
    const publish = window.Shopify?.analytics?.publish;
    if (typeof publish !== 'function') return;
    try {
      const result = publish.call(window.Shopify.analytics, name, payload);
      if (result && typeof result.catch === 'function') result.catch(function () {});
    } catch (error) {
      // Analytics never blocks navigation or purchase.
    }
  }

  function getPreferenceState() {
    if (window.milauraPreferenceStatePromise) return window.milauraPreferenceStatePromise;

    window.milauraPreferenceStatePromise = new Promise((resolve) => {
      const readState = function () {
        const privacy = window.Shopify?.customerPrivacy;
        if (!privacy || typeof privacy.preferencesProcessingAllowed !== 'function') {
          resolve({ available: false, allowed: false });
          return;
        }
        resolve({ available: true, allowed: Boolean(privacy.preferencesProcessingAllowed()) });
      };

      if (window.Shopify?.customerPrivacy?.preferencesProcessingAllowed) {
        readState();
        return;
      }

      if (typeof window.Shopify?.loadFeatures !== 'function') {
        resolve({ available: false, allowed: false });
        return;
      }

      window.Shopify.loadFeatures(
        [{ name: 'consent-tracking-api', version: '0.1' }],
        function (error) {
          if (error) {
            resolve({ available: false, allowed: false });
            return;
          }
          readState();
        }
      );
    });

    return window.milauraPreferenceStatePromise;
  }

  function prepareHistory(currentProduct) {
    if (window.milauraRecommendationHistoryPromise) return window.milauraRecommendationHistoryPromise;

    window.milauraRecommendationHistoryPromise = getPreferenceState().then((privacy) => {
      if (!privacy.available) return [];
      if (!privacy.allowed) {
        try {
          window.localStorage.removeItem(HISTORY_KEY);
        } catch (error) {}
        return [];
      }

      let history = [];
      try {
        const parsed = JSON.parse(window.localStorage.getItem(HISTORY_KEY) || '[]');
        if (Array.isArray(parsed)) history = parsed;
      } catch (error) {
        history = [];
      }

      history = history.filter((item) => item && item.id && item.handle);

      if (currentProduct?.id && currentProduct?.handle) {
        const currentId = String(currentProduct.id);
        history = history.filter((item) => String(item.id) !== currentId && item.handle !== currentProduct.handle);
        history.unshift({ id: currentId, handle: currentProduct.handle });
        history = history.slice(0, HISTORY_LIMIT);
        try {
          window.localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
        } catch (error) {}
      }

      return history;
    });

    return window.milauraRecommendationHistoryPromise;
  }

  async function fetchRecommendationCards(productId, intent, limit) {
    const query = new URLSearchParams({
      product_id: productId,
      limit: String(Math.min(Math.max(limit, 1), 4)),
      section_id: RECOMMENDATION_FRAGMENT,
      intent,
    });
    const response = await fetch(`${storefrontRoot()}recommendations/products?${query.toString()}`, {
      credentials: 'same-origin',
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    });
    if (!response.ok) throw new Error(`recommendations_${response.status}`);

    const documentFragment = new DOMParser().parseFromString(await response.text(), 'text/html');
    const fragment = documentFragment.querySelector('[data-milaura-recommendation-fragment]');
    if (!fragment) return [];
    return Array.from(fragment.querySelectorAll('[data-milaura-recommendation-card]')).map((card) =>
      document.importNode(card, true)
    );
  }

  async function fetchRecentCard(handle) {
    const path = `${storefrontRoot()}products/${encodeURIComponent(handle)}?section_id=${RECENT_FRAGMENT}`;
    const response = await fetch(path, {
      credentials: 'same-origin',
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    });
    if (!response.ok) return null;

    const documentFragment = new DOMParser().parseFromString(await response.text(), 'text/html');
    const card = documentFragment.querySelector('[data-milaura-recent-fragment] [data-milaura-recommendation-card]');
    return card ? document.importNode(card, true) : null;
  }

  async function fetchProductCard(handle) {
    const path = `${storefrontRoot()}products/${encodeURIComponent(handle)}?section_id=${PRODUCT_FRAGMENT}`;
    const response = await fetch(path, {
      credentials: 'same-origin',
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    });
    if (!response.ok) return null;

    const documentFragment = new DOMParser().parseFromString(await response.text(), 'text/html');
    const card = documentFragment.querySelector('[data-milaura-product-fragment] [data-milaura-recommendation-card]');
    return card ? document.importNode(card, true) : null;
  }

  class MilauraRecommendations extends HTMLElement {
    connectedCallback() {
      if (this.dataset.milauraInitialized === 'true') return;
      this.dataset.milauraInitialized = 'true';

      this.list = this.querySelector('[data-milaura-recommendation-list]');
      this.status = this.querySelector('[data-milaura-recommendation-status]');
      this.headingElement = this.querySelector('[data-milaura-recommendation-title]');
      this.subtitleElement = this.querySelector('[data-milaura-recommendation-subtitle]');
      this.context = this.dataset.context || 'editorial';
      this.limit = Number.parseInt(this.dataset.limit, 10) || 3;
      this.minimum = Number.parseInt(this.dataset.minimum, 10) || 1;
      this.sourceProductIds = parseList(this.dataset.sourceProductIds);
      this.excludedProductIds = parseList(this.dataset.excludedProductIds);
      this.intents = parseList(this.dataset.intents);
      this.currentIntent = this.intents[0] || 'curated';
      this.initialCards = Array.from(this.querySelectorAll('[data-milaura-recommendation-card]'));
      this.historyPromise = prepareHistory({
        id: this.dataset.currentProductId,
        handle: this.dataset.currentProductHandle,
      });

      this.bindInteractions();
      this.bindCartRefresh();
      this.bindDiagnosticResult();
      this.bindPdpVisibility();

      if (this.dataset.state === 'ready') {
        this.renderCards(this.initialCards, this.currentIntent);
        return;
      }

      if (!('IntersectionObserver' in window)) {
        this.initialize();
        return;
      }

      this.loadObserver = new IntersectionObserver(
        (entries, observer) => {
          if (!entries[0].isIntersecting) return;
          observer.disconnect();
          this.initialize();
        },
        { rootMargin: '0px 0px 400px 0px' }
      );
      this.loadObserver.observe(this);
    }

    disconnectedCallback() {
      this.loadObserver?.disconnect();
      this.impressionObserver?.disconnect();
      if (this.cartRefreshHandler) document.removeEventListener('cart:updated', this.cartRefreshHandler);
      if (this.cartBusUnsubscriber) this.cartBusUnsubscriber();
      if (this.diagnosticHandler) window.removeEventListener('milaura:quiz-result', this.diagnosticHandler);
      this.pdpVisibilityObserver?.disconnect();
      if (this.context === 'pdp') document.documentElement.classList.remove('milaura-recommendations-in-view');
    }

    async initialize() {
      if (this.loading) return;
      this.loading = true;
      this.setState('loading');

      try {
        if (this.context === 'pdp') {
          await this.loadPdpRecommendations();
        } else if (this.context === 'cart-page' || this.context === 'cart-drawer') {
          await this.loadCartRecommendations();
        } else if (this.context === 'recent') {
          await this.loadRecentlyViewed();
        } else if (this.context === 'diagnostic') {
          await this.loadDiagnosticRecommendations();
        } else if (this.initialCards.length) {
          this.renderCards(this.initialCards, this.currentIntent);
        } else {
          this.setState('empty');
        }
      } catch (error) {
        this.setState('error');
        this.announce('Les recommandations sont momentanément indisponibles.');
      } finally {
        this.loading = false;
      }
    }

    async loadPdpRecommendations() {
      const sourceProductId = this.sourceProductIds[0];
      if (!sourceProductId) {
        this.setState('empty');
        return;
      }

      for (const intent of this.intents) {
        const cards = uniqueByProductId(
          await fetchRecommendationCards(sourceProductId, intent, this.limit),
          this.excludedProductIds,
          this.limit
        );
        const required = intent === 'complementary' ? this.minimum : 1;
        if (cards.length >= required) {
          this.renderCards(cards, intent);
          return;
        }
      }

      this.setState('empty');
    }

    async loadCartRecommendations() {
      if (!this.sourceProductIds.length) {
        this.setState('empty');
        return;
      }

      const collected = [];
      const excluded = new Set(this.excludedProductIds.map(String));

      for (const sourceProductId of this.sourceProductIds) {
        const cards = await fetchRecommendationCards(sourceProductId, 'complementary', 4);
        cards.forEach((card) => {
          const productId = String(card.dataset.productId || '');
          if (!productId || excluded.has(productId)) return;
          excluded.add(productId);
          collected.push(card);
        });
        if (collected.length >= this.limit) break;
      }

      const cards = collected.slice(0, this.limit);
      if (!cards.length) {
        this.setState('empty');
        return;
      }
      this.renderCards(cards, 'complementary');
    }

    async loadRecentlyViewed() {
      const history = await this.historyPromise;
      const excluded = new Set(this.excludedProductIds.map(String));
      const candidates = history.filter((item) => !excluded.has(String(item.id))).slice(0, this.limit);
      if (!candidates.length) {
        this.setState('empty');
        return;
      }

      const resolved = await Promise.all(candidates.map((item) => fetchRecentCard(item.handle)));
      const cards = uniqueByProductId(resolved.filter(Boolean), this.excludedProductIds, this.limit);
      if (!cards.length) {
        this.setState('empty');
        return;
      }
      this.renderCards(cards, 'recent');
    }

    async renderHandles(items, intent) {
      const validItems = Array.isArray(items) ? items.filter((item) => item?.handle) : [];
      if (!validItems.length) {
        this.setState('empty');
        return;
      }

      this.setState('loading');
      const resolved = await Promise.all(
        validItems.slice(0, this.limit).map(async (item) => ({
          item,
          card: await fetchProductCard(item.handle).catch(function () { return null; }),
        }))
      );
      resolved.forEach(({ item, card }) => {
        const reasonElement = card?.querySelector('.milaura-recommendation-card__reason');
        if (item.reason && reasonElement) reasonElement.textContent = item.reason;
      });
      const cards = uniqueByProductId(
        resolved.map(({ card }) => card).filter(Boolean),
        this.excludedProductIds,
        this.limit
      );
      if (!cards.length) {
        this.setState('empty');
        return;
      }
      this.renderCards(cards, intent || 'curated');
    }

    async loadDiagnosticRecommendations(detail) {
      const privacy = await getPreferenceState();
      if (!privacy.available || !privacy.allowed) {
        this.setState('empty');
        return;
      }

      let diagnostic = detail || null;
      if (!diagnostic) {
        try {
          diagnostic = JSON.parse(window.localStorage.getItem('milauraLastResult') || 'null');
        } catch (error) {
          diagnostic = null;
        }
      }

      const products = diagnostic?.products || {};
      const stone = diagnostic?.stone || 'votre pierre';
      const reasons = {
        bracelet: `Bracelet associé à ${stone}.`,
        bougie: `Bougie associée à ${stone}.`,
        collier: `Collier associé à ${stone}.`,
      };
      const selected = ['bracelet', 'bougie', 'collier']
        .map((category) => {
          const item = products[category];
          if (!item?.handle) return null;
          return { handle: item.handle, reason: reasons[category] };
        })
        .filter(Boolean);

      if (!selected.length && diagnostic?.braceletHandle) {
        selected.push({ handle: diagnostic.braceletHandle, reason: reasons.bracelet });
      }
      if (!selected.length) {
        this.setState('empty');
        return;
      }
      await this.renderHandles(selected, 'curated');
    }

    renderCards(cards, intent) {
      if (!this.list || !cards.length) {
        this.setState('empty');
        return;
      }

      this.list.replaceChildren();
      cards.slice(0, this.limit).forEach((card, index) => {
        card.classList.remove('milaura-recommendation-card--focal', 'milaura-recommendation-card--secondary');
        const focal = index === 0 && this.context !== 'recent';
        if (this.context === 'cart-page' || this.context === 'cart-drawer' || !focal) {
          this.replaceMotionWithPoster(card);
        }
        card.classList.add(focal ? 'milaura-recommendation-card--focal' : 'milaura-recommendation-card--secondary');
        this.list.appendChild(card);
        this.prepareMotionMedia(card);
      });

      this.currentIntent = intent;
      this.dataset.intent = intent;
      this.list.dataset.cardCount = String(this.list.children.length);
      this.configureLivingComposition();
      this.updateCopy(intent);
      this.setState('ready');
      this.announce(
        `${this.list.children.length} ${this.list.children.length > 1 ? 'produits proposés' : 'produit proposé'}.`
      );
      this.observeImpression();
      document.dispatchEvent(new CustomEvent('milaura:recommendations:loaded', { detail: { root: this } }));
    }

    configureLivingComposition() {
      const cards = Array.from(this.list?.querySelectorAll('[data-milaura-recommendation-card]') || []);
      const objectCards = cards.filter((card) => card.dataset.objectMedia === 'true');
      const living = this.context === 'pdp' && cards.length >= 2 && objectCards.length === cards.length;

      this.dataset.layout = living ? 'living' : 'gallery';
      cards.forEach((card, index) => {
        card.style.setProperty('--milaura-reco-order', String(index));
        card.dataset.active = String(living && index === 0);
      });
    }

    activateLivingCard(card) {
      if (this.dataset.layout !== 'living' || !card || !this.list?.contains(card)) return;
      this.list.querySelectorAll('[data-milaura-recommendation-card]').forEach((candidate) => {
        candidate.dataset.active = String(candidate === card);
      });
    }

    updateCopy(intent) {
      if (intent === 'complementary') {
        if (this.dataset.complementaryTitle && this.headingElement) {
          this.headingElement.textContent = this.dataset.complementaryTitle;
        }
        if (this.dataset.complementarySubtitle && this.subtitleElement) {
          this.subtitleElement.textContent = this.dataset.complementarySubtitle;
        }
      }
      if (intent === 'related') {
        if (this.dataset.relatedTitle && this.headingElement) this.headingElement.textContent = this.dataset.relatedTitle;
        if (this.dataset.relatedSubtitle && this.subtitleElement) {
          this.subtitleElement.textContent = this.dataset.relatedSubtitle;
        }
      }
    }

    setState(state) {
      this.dataset.state = state;
      this.syncPdpVisibility();
    }

    announce(message) {
      if (this.status) this.status.textContent = message;
    }

    bindInteractions() {
      this.addEventListener('pointerover', (event) => {
        this.activateLivingCard(event.target.closest('[data-milaura-recommendation-card]'));
      });

      this.addEventListener('focusin', (event) => {
        this.activateLivingCard(event.target.closest('[data-milaura-recommendation-card]'));
      });

      this.addEventListener('click', (event) => {
        const link = event.target.closest('.grid__card');
        if (!link) return;
        const card = link.closest('[data-milaura-recommendation-card]');
        if (!card) return;
        publishAnalytics('milaura:recommendation_click', {
          context: this.context,
          intent: this.currentIntent,
          productId: card.dataset.productId,
          position: Array.from(this.list?.children || []).indexOf(card) + 1,
        });
      });

      this.addEventListener('keydown', (event) => {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
        if (event.target.closest('button, input, select, textarea')) return;
        if (!this.list) return;
        const direction = event.key === 'ArrowRight' ? 1 : -1;

        if (this.dataset.layout === 'living' && this.list.scrollWidth <= this.list.clientWidth) {
          const cards = Array.from(this.list.querySelectorAll('[data-milaura-recommendation-card]'));
          const activeIndex = Math.max(0, cards.findIndex((card) => card.dataset.active === 'true'));
          const nextIndex = Math.min(cards.length - 1, Math.max(0, activeIndex + direction));
          const nextCard = cards[nextIndex];
          if (!nextCard || nextIndex === activeIndex) return;
          event.preventDefault();
          this.activateLivingCard(nextCard);
          nextCard.querySelector('.grid__card')?.focus();
          return;
        }

        if (this.list.scrollWidth <= this.list.clientWidth) return;
        const card = this.list.querySelector('[data-milaura-recommendation-card]');
        if (!card) return;
        event.preventDefault();
        const styles = window.getComputedStyle(this.list);
        const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.list.scrollBy({
          left: direction * (card.getBoundingClientRect().width + gap),
          behavior: reduceMotion ? 'auto' : 'smooth',
        });
      });
    }

    prepareMotionMedia(card) {
      if (!card.classList.contains('milaura-recommendation-card--focal')) return;
      const video = card.querySelector('.milaura-recommendation-card__video');
      if (!video || video.dataset.milauraMotionReady === 'true') return;
      video.dataset.milauraMotionReady = 'true';
      video.muted = true;

      if (
        window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        Boolean(window.navigator.connection?.saveData)
      ) {
        this.replaceMotionWithPoster(card);
        return;
      }

      const play = () => {
        const promise = video.play();
        if (promise && typeof promise.catch === 'function') promise.catch(function () {});
      };
      const pause = () => video.pause();

      card.addEventListener('pointerenter', play);
      card.addEventListener('pointerleave', pause);
      card.addEventListener('focusin', play);
      card.addEventListener('focusout', (event) => {
        if (!card.contains(event.relatedTarget)) pause();
      });
    }

    replaceMotionWithPoster(card) {
      const video = card.querySelector('.milaura-recommendation-card__video');
      if (!video) return;
      const fallback = video.querySelector('img');
      const image = fallback ? fallback.cloneNode(true) : document.createElement('img');
      const poster = video.getAttribute('poster');
      if (!image.getAttribute('src') && poster) image.setAttribute('src', poster);
      image.className = 'grid__card-image grid__card-image--primary';
      image.alt = card.querySelector('.grid__card-title')?.textContent?.trim() || '';
      image.loading = 'lazy';
      image.decoding = 'async';
      video.replaceWith(image);
    }

    refreshCartItems(items) {
      if (!Array.isArray(items)) return;
      const productIds = items.map((item) => String(item.product_id || item.productId || '')).filter(Boolean);
      window.clearTimeout(this.cartRefreshTimer);

      if (!productIds.length) {
        this.sourceProductIds = [];
        this.excludedProductIds = [];
        this.list?.replaceChildren();
        this.setState('empty');
        return;
      }

      this.cartRefreshTimer = window.setTimeout(() => {
        this.sourceProductIds = productIds;
        this.excludedProductIds = productIds;
        this.list?.replaceChildren();
        this.initialCards = [];
        this.dataset.milauraImpressionSent = '';
        this.initialize();
      }, 80);
    }

    bindCartRefresh() {
      if (this.context !== 'cart-page') return;
      this.cartRefreshHandler = (event) => {
        this.refreshCartItems(event.detail?.items);
      };
      document.addEventListener('cart:updated', this.cartRefreshHandler);

      if (typeof subscribe === 'function' && typeof PUB_SUB_EVENTS !== 'undefined') {
        this.cartBusUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, (event) => {
          this.refreshCartItems(event.cartData?.items);
        });
      }
    }

    bindDiagnosticResult() {
      if (this.context !== 'diagnostic') return;
      this.diagnosticHandler = (event) => {
        this.loadDiagnosticRecommendations(event.detail || null);
      };
      window.addEventListener('milaura:quiz-result', this.diagnosticHandler);
    }

    bindPdpVisibility() {
      if (this.context !== 'pdp' || !('IntersectionObserver' in window)) return;
      this.pdpVisibilityObserver = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          this.pdpIsIntersecting = Boolean(entry?.isIntersecting && entry.intersectionRatio >= 0.08);
          this.syncPdpVisibility();
        },
        { threshold: [0, 0.08] }
      );
      this.pdpVisibilityObserver.observe(this);
    }

    syncPdpVisibility() {
      if (this.context !== 'pdp') return;
      document.documentElement.classList.toggle(
        'milaura-recommendations-in-view',
        Boolean(this.pdpIsIntersecting && this.dataset.state === 'ready')
      );
    }

    observeImpression() {
      if (this.dataset.milauraImpressionSent === 'true') return;
      if (!('IntersectionObserver' in window)) {
        this.publishImpression();
        return;
      }
      this.impressionObserver?.disconnect();
      this.impressionObserver = new IntersectionObserver(
        (entries, observer) => {
          if (!entries[0].isIntersecting) return;
          observer.disconnect();
          this.publishImpression();
        },
        { threshold: 0.35 }
      );
      this.impressionObserver.observe(this);
    }

    publishImpression() {
      if (this.dataset.milauraImpressionSent === 'true') return;
      this.dataset.milauraImpressionSent = 'true';
      publishAnalytics('milaura:recommendation_impression', {
        context: this.context,
        intent: this.currentIntent,
        productIds: Array.from(this.list?.querySelectorAll('[data-milaura-recommendation-card]') || []).map(
          (card) => card.dataset.productId
        ),
      });
    }
  }

  if (!customElements.get('milaura-recommendations')) {
    customElements.define('milaura-recommendations', MilauraRecommendations);
  }

  window.MilauraRecommendations = Object.freeze({
    getPreferenceState,
  });
  document.dispatchEvent(new CustomEvent('milaura:recommendations:ready'));

  document.addEventListener('milaura:recommendation-added', function (event) {
    publishAnalytics('milaura:recommendation_add', event.detail || {});
  });

  document.addEventListener('visitorConsentCollected', function () {
    window.milauraPreferenceStatePromise = null;
    window.milauraRecommendationHistoryPromise = null;

    document
      .querySelectorAll('milaura-recommendations[data-context="recent"], milaura-recommendations[data-context="diagnostic"]')
      .forEach((recommendations) => {
        recommendations.historyPromise = prepareHistory({
          id: recommendations.dataset.currentProductId,
          handle: recommendations.dataset.currentProductHandle,
        });
        recommendations.loading = false;
        recommendations.initialize();
      });
  });
})();
