import assert from 'node:assert/strict';

globalThis.HTMLElement = class {};
globalThis.CustomEvent = class {
  constructor(name, options = {}) {
    this.name = name;
    this.detail = options.detail;
  }
};
globalThis.customElements = {
  registry: new Map(),
  get(name) {
    return this.registry.get(name);
  },
  define(name, constructor) {
    this.registry.set(name, constructor);
  },
};
globalThis.document = {
  addEventListener() {},
  dispatchEvent() {},
  querySelectorAll() {
    return [];
  },
};
globalThis.window = {
  Shopify: { routes: { root: '/' } },
  MilauraPreferenceStorage: {
    async getPreferenceState() {
      return { available: true, allowed: false };
    },
  },
};

await import('../../../assets/milaura-recommendations.js');

const { rankPdpCards } = window.MilauraRecommendations;

function card(id, overrides = {}) {
  const reason = { textContent: '' };
  return {
    dataset: {
      productId: String(id),
      productAvailable: 'true',
      hasGalleryImage: 'true',
      stoneHandle: '',
      productType: '',
      primaryIntention: '',
      productFamily: '',
      productFinish: 'inconnu',
      recommendationOrigin: '',
      fallbackTier: 'catalogue',
      isBestseller: 'false',
      ...overrides,
    },
    querySelector(selector) {
      return selector === '.milaura-recommendation-card__reason' ? reason : null;
    },
    reason,
  };
}

const source = {
  stone: 'aventurine-verte',
  type: 'collier',
  intention: 'confiance-energie',
  family: 'bijou',
  finish: 'dore',
};
const exact = card('2', {
  stoneHandle: 'aventurine-verte',
  productType: 'boucles-oreilles',
  productFamily: 'bijou',
  productFinish: 'dore',
});
const close = card('3', {
  primaryIntention: 'confiance-energie',
  productType: 'bracelet',
  productFamily: 'bijou',
});
const universe = card('4', { productType: 'bracelet', productFamily: 'bijou' });
const collection = card('5', { fallbackTier: 'same-collection', productFamily: 'decoration' });
const catalogue = card('6');
const unavailable = card('7', { productAvailable: 'false' });
const withoutImage = card('8', { hasGalleryImage: 'false' });
const duplicate = card('2', { isBestseller: 'true' });

const ranked = rankPdpCards(
  [catalogue, collection, universe, close, exact, unavailable, withoutImage, duplicate],
  source,
  new Set(),
  ['1'],
  3
);

assert.deepEqual(ranked.map((candidate) => candidate.dataset.productId), ['2', '3', '4']);
assert.deepEqual(ranked.map((candidate) => candidate.dataset.recommendationGate), ['exact', 'close', 'universe']);
assert.equal(exact.reason.textContent, 'Même pierre, une forme complémentaire.');
assert.equal(new Set(ranked.map((candidate) => candidate.dataset.productId)).size, 3);

const fallbackOnly = rankPdpCards(
  [catalogue, collection],
  { stone: '', type: 'savon', intention: '', family: 'soin', finish: 'inconnu' },
  new Set(),
  ['1'],
  3
);

assert.deepEqual(fallbackOnly.map((candidate) => candidate.dataset.productId), ['5', '6']);
assert.deepEqual(fallbackOnly.map((candidate) => candidate.dataset.recommendationGate), ['collection', 'catalogue']);

console.log('PASS runtime Ruban V3: gates, top 3, exclusions et replis');
