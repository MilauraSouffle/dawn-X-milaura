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

await import('../assets/milaura-recommendations.js');

const {
  diagnosticIntentHandles,
  rankDiagnosticMatches,
  rankDiagnosticProducts,
  selectDiverseDiagnosticCards,
} = window.MilauraRecommendations;

function product(id, handle, type, tags, overrides = {}) {
  return {
    id,
    handle,
    type,
    title: handle.replaceAll('-', ' '),
    tags,
    available: true,
    image: `https://cdn.example.test/${handle}.jpg`,
    ...overrides,
  };
}

const diagnostic = {
  profileId: 'serenite',
  stone: 'Améthyste',
  stoneHandle: 'amethyste',
};

const exactCollier = product('1', 'collier-amethyste', 'Collier', [
  'bijoux-pierres',
  'pierre:amethyste',
  'intention:sommeil',
  'type:collier',
]);
const exactBracelet = product('2', 'bracelet-amethyste', 'Bracelet', [
  'bijoux-pierres',
  'pierre:amethyste',
  'intention:sommeil',
  'type:bracelet',
]);
const intentionOnly = product('3', 'bracelet-fluorine', 'Bracelet', [
  'bijoux-pierres',
  'pierre:fluorine',
  'intention:calme',
  'type:bracelet',
]);
const unavailable = product('4', 'pendentif-amethyste', 'Pendentif', [
  'pierre:amethyste',
  'type:pendentif',
], { available: false });
const withoutImage = product('5', 'boucles-amethyste', "Boucles d'oreilles", [
  'pierre:amethyste',
  'type:boucles-oreilles',
], { image: null });
const unrelatedTitleResult = product('6', 'collier-apatite-bleue', 'Collier', [
  'bijoux-pierres',
  'pierre:apatite-bleue',
  'intention:confiance',
  'type:collier',
]);

const ranked = rankDiagnosticProducts(
  [intentionOnly, unavailable, exactBracelet, withoutImage, exactCollier],
  diagnostic,
  []
);

assert.deepEqual(ranked.map((candidate) => candidate.product.id), ['1', '2', '3']);
assert.deepEqual(ranked.map((candidate) => candidate.signal), ['stone', 'stone', 'intention']);
assert.deepEqual(diagnosticIntentHandles(diagnostic), ['calme', 'sommeil', 'intuition']);
assert.deepEqual(
  rankDiagnosticMatches([unrelatedTitleResult, intentionOnly, exactCollier], diagnostic, []).map(
    (candidate) => candidate.product.id
  ),
  ['1', '3']
);

const excluded = rankDiagnosticProducts(
  [exactCollier, exactBracelet, intentionOnly],
  diagnostic,
  ['1']
);
assert.deepEqual(excluded.map((candidate) => candidate.product.id), ['2', '3']);

const selected = selectDiverseDiagnosticCards(
  [
    { card: { id: 'a' }, productType: 'collier' },
    { card: { id: 'b' }, productType: 'collier' },
    { card: { id: 'c' }, productType: 'bracelet' },
  ],
  2
);
assert.deepEqual(selected.map((candidate) => candidate.card.id), ['a', 'c']);

console.log('PASS diagnostic dynamique: pierre, intention, exclusions et diversite');
