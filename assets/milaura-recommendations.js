(function () {
  'use strict';

  if (window.milauraRecommendationsReady) return;
  window.milauraRecommendationsReady = true;

  const HISTORY_KEY = 'milauraRecentlyViewed';
  const HISTORY_LIMIT = 6;
  const RECOMMENDATION_FRAGMENT = 'milaura-recommendation-fragment';
  const PRODUCT_FRAGMENT = 'milaura-product-fragment';
  const RECENT_FRAGMENT = 'milaura-recent-fragment';
  const PDP_SCORE_RECENT_TIEBREAKER = 8;
  const PDP_SCORE_API_ORDER_MAX = 10;
  const PDP_CANDIDATE_LIMIT = 3;
  const PDP_CATALOGUE_SCAN_LIMIT = 250;
  const TYPE_COMPATIBILITY = Object.freeze({
    bracelet: Object.freeze({ 'boucles-oreilles': 30, collier: 25, bague: 20, pendentif: 12 }),
    collier: Object.freeze({ 'boucles-oreilles': 30, bracelet: 25, bague: 20 }),
    'boucles-oreilles': Object.freeze({ collier: 30, bracelet: 25, bague: 15 }),
    bague: Object.freeze({ collier: 25, 'boucles-oreilles': 25, bracelet: 20 }),
    pendentif: Object.freeze({ chaine: 45, bracelet: 10, 'boucles-oreilles': 10 }),
    chaine: Object.freeze({ pendentif: 45 }),
    chapelet: Object.freeze({ bracelet: 12, collier: 12 }),
  });

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
      if (card.dataset.hasGalleryImage === 'false') return;
      seen.add(productId);
      unique.push(card);
    });

    return unique.slice(0, limit);
  }

  function compatibleStone(sourceStone, candidateStone) {
    if (!sourceStone || !candidateStone) return false;
    if (sourceStone === candidateStone) return true;
    return ['jade', 'obsidienne'].some((parent) => {
      const sourceInFamily = sourceStone === parent || sourceStone.startsWith(`${parent}-`);
      const candidateInFamily = candidateStone === parent || candidateStone.startsWith(`${parent}-`);
      return sourceInFamily && candidateInFamily;
    });
  }

  function classifyPdpCandidate(card, source) {
    const candidateStone = card.dataset.stoneHandle || '';
    const candidateType = card.dataset.productType || '';
    const candidateIntention = card.dataset.primaryIntention || '';
    const candidateFamily = card.dataset.productFamily || '';
    const candidateFinish = card.dataset.productFinish || 'inconnu';
    const origin = card.dataset.recommendationOrigin || '';
    const fallbackTier = card.dataset.fallbackTier || '';
    const stoneMatch = compatibleStone(source.stone, candidateStone);
    const typeWeight = Number(TYPE_COMPATIBILITY[source.type]?.[candidateType] || 0);
    const finishMatch =
      source.finish === 'inconnu' || candidateFinish === 'inconnu' || source.finish === candidateFinish;
    const intentionMatch = Boolean(source.intention && source.intention === candidateIntention);
    const familyMatch = Boolean(source.family && source.family === candidateFamily);

    if (stoneMatch && typeWeight > 0 && finishMatch) {
      return { gate: 'exact', score: 500 + typeWeight };
    }
    if (stoneMatch || intentionMatch || origin === 'shopify-complementary') {
      return { gate: 'close', score: 400 + typeWeight };
    }
    if (familyMatch) return { gate: 'universe', score: 300 + typeWeight };
    if (fallbackTier === 'same-collection') return { gate: 'collection', score: 200 };
    return { gate: 'catalogue', score: 100 };
  }

  function setPdpRecommendationReason(card, gate) {
    const reason = card.querySelector('.milaura-recommendation-card__reason');
    if (!reason) return;
    const reasons = {
      exact: 'Même pierre, une forme complémentaire.',
      close: 'Une pièce accordée à votre choix.',
      universe: 'Un produit de la même famille.',
      collection: 'Une pièce disponible de la même collection.',
      catalogue: 'Une sélection MilAura disponible maintenant.',
    };
    reason.textContent = reasons[gate] || reasons.catalogue;
  }

  function rankPdpCards(cards, source, recentIds, excludedIds, limit) {
    const eligible = uniqueByProductId(cards, excludedIds, Number.MAX_SAFE_INTEGER).map((card, index) => {
      const classification = classifyPdpCandidate(card, source);
      const productId = String(card.dataset.productId || '');
      let score = classification.score;
      if (card.dataset.isBestseller === 'true') score += 20;
      if (recentIds.has(productId)) score += PDP_SCORE_RECENT_TIEBREAKER;
      score += Math.max(0, PDP_SCORE_API_ORDER_MAX - index);
      card.dataset.recommendationGate = classification.gate;
      card.dataset.recommendationSignal = classification.gate;
      card.dataset.recommendationScore = String(score);
      setPdpRecommendationReason(card, classification.gate);
      return { card, productId, score, index };
    });

    eligible.sort((left, right) => {
      if (right.score !== left.score) return right.score - left.score;
      if (left.index !== right.index) return left.index - right.index;
      return left.productId.localeCompare(right.productId);
    });
    return eligible.slice(0, limit).map((candidate) => candidate.card);
  }

  async function fetchCartProductIds() {
    const response = await fetch(`${storefrontRoot()}cart.js`, {
      credentials: 'same-origin',
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    });
    if (!response.ok) return [];
    const cart = await response.json();
    const seen = new Set();
    return (Array.isArray(cart.items) ? cart.items : [])
      .map((item) => String(item.product_id || ''))
      .filter((productId) => {
        if (!productId || seen.has(productId)) return false;
        seen.add(productId);
        return true;
      });
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
      limit: String(Math.min(Math.max(limit, 1), 10)),
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

  async function fetchCatalogueFallbackCards(excludedIds, limit) {
    const excluded = new Set(excludedIds.map(String));
    const response = await fetch(
      `${storefrontRoot()}collections/all/products.json?limit=${PDP_CATALOGUE_SCAN_LIMIT}`,
      {
        credentials: 'same-origin',
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      }
    );
    if (!response.ok) return [];
    const payload = await response.json();
    const products = Array.isArray(payload.products) ? payload.products : [];
    const handles = products
      .filter((product) => {
        if (!product?.id || !product?.handle || excluded.has(String(product.id))) return false;
        if (!Array.isArray(product.images) || !product.images.length) return false;
        return Array.isArray(product.variants) && product.variants.some((variant) => variant.available);
      })
      .slice(0, Math.max(limit * 3, 9))
      .map((product) => product.handle);
    const resolved = await Promise.all(
      handles.map((handle) => fetchProductCard(handle).catch(function () { return null; }))
    );
    return uniqueByProductId(resolved.filter(Boolean), excludedIds, limit).map((card) => {
      card.dataset.recommendationOrigin = 'catalogue';
      card.dataset.fallbackTier = 'catalogue';
      return card;
    });
  }

  class MilauraRecommendations extends HTMLElement {
    connectedCallback() {
      if (this.dataset.milauraInitialized === 'true') return;
      this.dataset.milauraInitialized = 'true';

      this.list = this.querySelector('[data-milaura-recommendation-list]');
      this.status = this.querySelector('[data-milaura-recommendation-status]');
      this.headingElement = this.querySelector('[data-milaura-recommendation-title]');
      this.subtitleElement = this.querySelector('[data-milaura-recommendation-subtitle]');
      this.railControls = this.querySelector('[data-milaura-recommendation-controls]');
      this.railCount = this.querySelector('[data-milaura-rail-count]');
      this.railMeter = this.querySelector('[data-milaura-rail-meter]');
      this.railMeterValue = this.querySelector('[data-milaura-rail-meter-value]');
      this.context = this.dataset.context || 'editorial';
      this.limit = Number.parseInt(this.dataset.limit, 10) || 3;
      if (this.context === 'pdp') this.limit = PDP_CANDIDATE_LIMIT;
      this.minimum = Number.parseInt(this.dataset.minimum, 10) || 1;
      this.sourceProductIds = parseList(this.dataset.sourceProductIds);
      this.excludedProductIds = parseList(this.dataset.excludedProductIds);
      this.intents = parseList(this.dataset.intents);
      this.currentIntent = this.intents[0] || 'curated';
      this.initialCards = Array.from(this.querySelectorAll('[data-milaura-recommendation-card]'));
      this.fallbackCards = this.initialCards.map((card) => card.cloneNode(true));
      this.pdpCandidates = [];
      this.historyPromise = prepareHistory({
        id: this.dataset.currentProductId,
        handle: this.dataset.currentProductHandle,
      });

      this.bindInteractions();
      this.bindCartRefresh();
      this.bindDiagnosticResult();
      this.bindPdpVisibility();

      if (this.dataset.state === 'ready' && this.context !== 'pdp') {
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
      this.teardownRibbon();
      if (this.context === 'pdp') document.documentElement.classList.remove('milaura-recommendations-in-view');
    }

    async initialize() {
      if (this.loading) return;
      this.loading = true;
      const preservePdpFallback = this.context === 'pdp' && this.fallbackCards.length > 0;
      if (preservePdpFallback) this.setAttribute('aria-busy', 'true');
      else this.setState('loading');

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
        if (this.context === 'pdp' && this.renderPdpFallback()) {
          this.announce('Une sélection disponible est affichée.');
        } else {
          this.setState('error');
          this.announce('Les recommandations sont momentanément indisponibles.');
        }
      } finally {
        this.loading = false;
        this.removeAttribute('aria-busy');
      }
    }

    async loadPdpRecommendations() {
      const currentProductId = String(this.sourceProductIds[0] || '');
      if (!currentProductId) {
        if (!this.renderPdpFallback()) this.setState('empty');
        return;
      }

      const [cartProductIds, history] = await Promise.all([
        fetchCartProductIds().catch(function () { return []; }),
        this.historyPromise.catch(function () { return []; }),
      ]);
      const excluded = new Set([...this.excludedProductIds, currentProductId, ...cartProductIds].map(String));
      const [complementaryCards, relatedCards] = await Promise.all([
        fetchRecommendationCards(currentProductId, 'complementary', 10).catch(function () { return []; }),
        fetchRecommendationCards(currentProductId, 'related', 10).catch(function () { return []; }),
      ]);
      const fallbackCards = this.fallbackCards.map((card) => card.cloneNode(true));
      const recentIds = new Set(history.map((item) => String(item.id || '')));
      const source = {
        stone: this.dataset.currentProductStone || '',
        type: this.dataset.currentProductType || '',
        intention: this.dataset.currentProductIntention || '',
        family: this.dataset.currentProductFamily || '',
        finish: this.dataset.currentProductFinish || 'inconnu',
      };
      let candidatePool = [...complementaryCards, ...relatedCards, ...fallbackCards];
      let cards = rankPdpCards(candidatePool, source, recentIds, Array.from(excluded), this.limit);

      if (cards.length < this.limit) {
        const catalogueCards = await fetchCatalogueFallbackCards(
          [...excluded, ...cards.map((card) => String(card.dataset.productId || ''))],
          this.limit - cards.length
        ).catch(function () { return []; });
        candidatePool = [...candidatePool, ...catalogueCards];
        cards = rankPdpCards(candidatePool, source, recentIds, Array.from(excluded), this.limit);
      }

      if (cards.length) {
        this.renderCards(cards, 'adaptive');
        return;
      }

      if (!this.renderPdpFallback(Array.from(excluded))) this.setState('empty');
    }

    renderPdpFallback(excludedIds) {
      const excluded = excludedIds || this.excludedProductIds;
      const fallback = uniqueByProductId(
        this.fallbackCards.map((card) => card.cloneNode(true)),
        excluded,
        this.limit
      );
      if (!fallback.length) return false;
      fallback.forEach((card) => {
        card.dataset.recommendationGate = card.dataset.fallbackTier === 'same-collection' ? 'collection' : 'catalogue';
        card.dataset.recommendationSignal = card.dataset.recommendationGate;
        setPdpRecommendationReason(card, card.dataset.recommendationGate);
      });
      this.renderCards(fallback, 'adaptive-fallback');
      return true;
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

      const candidateCards = cards.slice(0, this.limit);
      const visibleCards = this.context === 'pdp' ? candidateCards.slice(0, 1) : candidateCards;
      if (this.context === 'pdp') this.pdpCandidates = candidateCards;
      this.list.replaceChildren();
      visibleCards.forEach((card, index) => {
        card.classList.remove('milaura-recommendation-card--focal', 'milaura-recommendation-card--secondary');
        const focal = index === 0 && this.context !== 'recent';
        if (this.context === 'cart-page' || this.context === 'cart-drawer' || !focal) {
          this.replaceMotionWithPoster(card);
        }
        card.classList.add(focal ? 'milaura-recommendation-card--focal' : 'milaura-recommendation-card--secondary');
        this.list.appendChild(card);
        this.prepareMotionMedia(card);
      });

      const renderedCount = this.list.children.length;
      this.currentIntent = intent;
      this.dataset.intent = intent;
      this.list.dataset.cardCount = String(renderedCount);
      this.list.dataset.candidateCount = String(candidateCards.length);
      this.configureRibbonComposition();
      this.updateCopy(intent);
      this.setState('ready');
      this.announce(this.context === 'pdp'
        ? `1 produit proposé, ${candidateCards.length} ${candidateCards.length > 1 ? 'sélections disponibles' : 'sélection disponible'}.`
        : `${renderedCount} ${renderedCount > 1 ? 'produits proposés' : 'produit proposé'}.`
      );
      this.observeImpression();
      document.dispatchEvent(new CustomEvent('milaura:recommendations:loaded', { detail: { root: this } }));
    }

    configureRibbonComposition() {
      this.teardownRibbon();
      const cards = Array.from(this.list?.querySelectorAll('[data-milaura-recommendation-card]') || []);
      const ribbon = this.context === 'pdp' && cards.length > 0;
      const hasMultipleCards = cards.length > 1;

      this.dataset.layout = ribbon ? 'ribbon' : 'gallery';
      this.dataset.ribbonRevealed = 'false';
      if (this.railControls) this.railControls.hidden = !ribbon || !hasMultipleCards;
      if (this.railMeter) this.railMeter.hidden = !ribbon || !hasMultipleCards;
      cards.forEach((card, index) => {
        card.style.setProperty('--milaura-reco-order', String(index));
        card.dataset.active = 'false';
        card.dataset.ribbonPosition = String(index + 1);
      });

      this.ribbonCards = cards;
      if (!cards.length) return;
      this.activateRibbonCard(cards[0]);
      if (!ribbon) {
        this.dataset.ribbonRevealed = 'true';
        return;
      }

      this.ribbonScrollHandler = () => {
        if (this.ribbonFrame) return;
        this.ribbonFrame = window.requestAnimationFrame(() => {
          this.ribbonFrame = null;
          this.syncActiveRibbonCard();
        });
      };
      this.list.addEventListener('scroll', this.ribbonScrollHandler, { passive: true });
      window.requestAnimationFrame(() => {
        if (this.isConnected) this.dataset.ribbonRevealed = 'true';
      });
    }

    activateRibbonCard(card) {
      if (!card || !this.list?.contains(card)) return;
      this.ribbonCards.forEach((candidate) => {
        candidate.dataset.active = String(candidate === card);
      });
      this.updateRibbonPosition(this.ribbonCards.indexOf(card));
    }

    teardownRibbon() {
      if (this.ribbonFrame) window.cancelAnimationFrame(this.ribbonFrame);
      this.ribbonFrame = null;
      if (this.ribbonScrollHandler && this.list) this.list.removeEventListener('scroll', this.ribbonScrollHandler);
      this.ribbonScrollHandler = null;
      this.ribbonCards = [];
    }

    syncActiveRibbonCard() {
      if (this.dataset.layout !== 'ribbon' || !this.list || !this.ribbonCards.length) return;
      const listRect = this.list.getBoundingClientRect();
      const center = listRect.left + listRect.width / 2;
      const closest = this.ribbonCards.reduce((current, card) => {
        const rect = card.getBoundingClientRect();
        const distance = Math.abs(rect.left + rect.width / 2 - center);
        return !current || distance < current.distance ? { card, distance } : current;
      }, null);
      if (closest?.card) this.activateRibbonCard(closest.card);
    }

    updateRibbonPosition(index) {
      if (index < 0 || !this.ribbonCards.length) return;
      const total = this.ribbonCards.length;
      if (this.railCount) {
        this.railCount.textContent = `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
      }
      if (this.railMeterValue) this.railMeterValue.style.width = `${((index + 1) / total) * 100}%`;
      const previous = this.querySelector('[data-milaura-rail-control="previous"]');
      const next = this.querySelector('[data-milaura-rail-control="next"]');
      if (previous) previous.disabled = index === 0;
      if (next) next.disabled = index === total - 1;
    }

    moveRibbon(direction) {
      if (!this.ribbonCards.length) return;
      const active = this.ribbonCards.findIndex((card) => card.dataset.active === 'true');
      const nextIndex = Math.min(this.ribbonCards.length - 1, Math.max(0, active + direction));
      const nextCard = this.ribbonCards[nextIndex];
      if (!nextCard) return;
      this.activateRibbonCard(nextCard);
      this.centerRibbonCard(nextCard);
      const title = nextCard.querySelector('.grid__card-title')?.textContent?.trim();
      if (title) this.announce(`${nextIndex + 1} sur ${this.ribbonCards.length} : ${title}.`);
    }

    centerRibbonCard(card) {
      if (!card || !this.list) return;
      const left = card.offsetLeft - (this.list.clientWidth - card.offsetWidth) / 2;
      this.list.scrollTo({
        left: Math.max(0, left),
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
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
        if (event.pointerType && event.pointerType !== 'mouse') return;
        const card = event.target.closest('[data-milaura-recommendation-card]');
        if (!card) return;
        this.activateRibbonCard(card);
      });

      this.addEventListener('focusin', (event) => {
        const card = event.target.closest('[data-milaura-recommendation-card]');
        if (!card) return;
        this.activateRibbonCard(card);
      });

      this.addEventListener('click', (event) => {
        const railControl = event.target.closest('[data-milaura-rail-control]');
        if (railControl) {
          event.preventDefault();
          this.moveRibbon(railControl.dataset.milauraRailControl === 'next' ? 1 : -1);
          return;
        }

        const card = event.target.closest('[data-milaura-recommendation-card]');
        if (!card) return;
        const link = event.target.closest('.grid__card');
        if (!link) return;
        publishAnalytics('milaura:recommendation_click', {
          context: this.context,
          intent: this.currentIntent,
          productId: card.dataset.productId,
          signal: card.dataset.recommendationSignal || '',
          score: Number(card.dataset.recommendationScore) || 0,
          position: Number(card.dataset.ribbonPosition) || Array.from(this.list?.children || []).indexOf(card) + 1,
        });
      });

      this.addEventListener('keydown', (event) => {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
        if (event.target.closest('button, input, select, textarea')) return;
        if (!this.list) return;
        const direction = event.key === 'ArrowRight' ? 1 : -1;

        if (this.dataset.layout === 'ribbon') {
          event.preventDefault();
          this.moveRibbon(direction);
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

    refreshPdpCartItems(items) {
      if (!Array.isArray(items)) return;
      const currentProductId = String(this.sourceProductIds[0] || '');
      const cartProductIds = items
        .map((item) => String(item.product_id || item.productId || ''))
        .filter(Boolean);
      const excluded = new Set([currentProductId, ...cartProductIds]);
      const remaining = this.pdpCandidates.filter((card) => {
        const productId = String(card.dataset.productId || '');
        return productId && !excluded.has(productId) && card.dataset.productAvailable !== 'false';
      });

      window.clearTimeout(this.cartRefreshTimer);
      this.cartRefreshTimer = window.setTimeout(() => {
        this.excludedProductIds = Array.from(excluded);
        this.dataset.milauraImpressionSent = '';
        if (remaining.length) {
          this.renderCards(remaining, 'adaptive');
          return;
        }
        this.loading = false;
        this.loadPdpRecommendations().catch(() => {
          if (!this.renderPdpFallback(Array.from(excluded))) this.setState('error');
        });
      }, 80);
    }

    bindCartRefresh() {
      if (this.context !== 'cart-page' && this.context !== 'pdp') return;
      this.cartRefreshHandler = (event) => {
        if (this.context === 'pdp') this.refreshPdpCartItems(event.detail?.items);
        else this.refreshCartItems(event.detail?.items);
      };
      document.addEventListener('cart:updated', this.cartRefreshHandler);

      if (typeof subscribe === 'function' && typeof PUB_SUB_EVENTS !== 'undefined') {
        this.cartBusUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, (event) => {
          if (this.context === 'pdp') this.refreshPdpCartItems(event.cartData?.items);
          else this.refreshCartItems(event.cartData?.items);
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
        products: Array.from(this.list?.querySelectorAll('[data-milaura-recommendation-card]') || []).map((card) => ({
          productId: card.dataset.productId,
          signal: card.dataset.recommendationSignal || '',
          score: Number(card.dataset.recommendationScore) || 0,
        })),
      });
    }
  }

  if (!customElements.get('milaura-recommendations')) {
    customElements.define('milaura-recommendations', MilauraRecommendations);
  }

  window.MilauraRecommendations = Object.freeze({
    getPreferenceState,
    rankPdpCards,
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
