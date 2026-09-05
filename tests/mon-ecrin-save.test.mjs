import assert from 'node:assert/strict';
import test from 'node:test';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
import {randomUUID} from 'node:crypto';

const intentCode = await readFile(new URL('../assets/milaura-account-save-intent.js', import.meta.url), 'utf8');
const bridgeCode = await readFile(new URL('../assets/milaura-c1-release-bridge.js', import.meta.url), 'utf8');
const diagnostic = {profileId: 'serenite', stone: 'Améthyste', timestamp: Date.now(), scores: {serenite: 7}};
const tick = () => new Promise((resolve) => setImmediate(resolve));

function browser({loggedIn = false, storage = new Map(), blocked = false, response} = {}) {
  const events = new Map();
  const requests = [];
  const redirects = [];
  const status = {dataset: {}};
  const button = {disabled: false, dataset: {}, getAttribute: () => 'status'};
  const root = {dataset: {enabled: 'true', endpoint: '/apps/milaura-c1-bridge', accountUrl: 'https://shopify.com/107347837273/account/pages/test', loggedIn: String(loggedIn), customerId: loggedIn ? '1' : '', loginPath: '/customer_authentication/login'}};
  const document = {
    querySelector: (s) => s.includes('release-bridge') ? root : button,
    getElementById: () => status,
    addEventListener: (name, cb) => events.set('document:' + name, [cb]),
  };
  const window = {
    setTimeout, clearTimeout,
    crypto: {randomUUID},
    location: {href: 'https://milaura.fr/pages/diagnostic-emotionnel', origin: 'https://milaura.fr', search: '', assign: (url) => redirects.push(url)},
    history: {replaceState() {}},
    sessionStorage: {
      getItem: (key) => {if (blocked) throw Error(); return storage.get(key) || null;},
      setItem: (key, value) => {if (blocked) throw Error(); storage.set(key, value);},
      removeItem: (key) => storage.delete(key),
    },
    addEventListener: (name, cb) => events.set(name, [...(events.get(name) || []), cb]),
    MilauraPreferenceStorage: {
      readDiagnostic: async () => null,
      purgeDiagnostic: async () => ({localCleared: true, cartCleared: true, attemptedAt: new Date().toISOString()}),
    },
  };
  const context = vm.createContext({
    window, document, URL, URLSearchParams, AbortController,
    fetch: async (path, options) => {
      requests.push({path, options});
      return response ? response(path, options) : {ok: true, json: async () => path.endsWith('/v1/handoffs') ? {handoffId: 'test-id'} : {}};
    },
  });
  vm.runInContext(intentCode, context);
  const emit = (name, detail) => {for (const cb of events.get(name) || []) cb({detail});};
  return {
    window, storage, requests, redirects, status, button, emit,
    store: window.MilauraAccountSaveIntent,
    loadBridge: () => vm.runInContext(bridgeCode, context),
    click: () => events.get('document:click')[0]({target: {closest: (s) => s.includes('skip-save') ? null : button}, preventDefault() {}}),
    skip: () => events.get('document:click')[0]({target: {closest: (s) => s.includes('skip-save') ? {} : null}, preventDefault() {}}),
  };
}

test('ne stocke rien à la fin du quiz sans demande explicite', () => {
  const b = browser();
  b.emit('milaura:quiz-result', diagnostic);
  assert.equal(b.storage.size, 0);
  assert.equal(b.store.current().profileId, 'serenite');
});

test('conserve seulement le résultat minimal pendant 20 minutes, avec identifiant stable', () => {
  const b = browser();
  const first = b.store.prepare(diagnostic);
  const second = b.store.prepare(diagnostic);
  assert.equal(first.diagnostic.resultId, second.diagnostic.resultId);
  assert.equal(first.diagnostic.scores, undefined);
  assert.equal(first.diagnostic.timestamp, new Date(diagnostic.timestamp).toISOString());
  const reloaded = browser({storage: b.storage});
  assert.equal(reloaded.store.read().stored, true);
  assert.equal(reloaded.store.read().diagnostic.resultId, first.diagnostic.resultId);
});

test('un intent expiré ou invalide est supprimé', () => {
  for (const expiresAt of [Date.now() - 1, null, 'not-a-date']) {
    const b = browser();
    const value = b.store.prepare(diagnostic);
    b.storage.set('milauraAccountSaveIntentV1', JSON.stringify({...value, expiresAt}));
    assert.equal(browser({storage: b.storage}).store.read(), null);
    assert.equal(b.storage.size, 0);
  }
});

for (const profileId of ['serenite', 'apaisement', 'protection', 'amour', 'chance']) {
test('invité, sans préférences : connexion puis conservation du profil ' + profileId, async () => {
  const b = browser();
  b.loadBridge();
  b.emit('milaura:quiz-result', {...diagnostic, profileId});
  b.click();
  await tick();
  assert.equal(b.requests.length, 0);
  const login = new URL(b.redirects[0], b.window.location.origin);
  assert.equal(login.pathname, '/customer_authentication/login');
  assert.equal(login.searchParams.get('return_to'), '/pages/diagnostic-emotionnel?show=result&save=1');
  assert.doesNotMatch(login.href, /serenite|Améthyste|resultId|acceptedAt/);
  const returned = browser({loggedIn: true, storage: b.storage});
  returned.window.location.search = '?show=result&save=1';
  returned.loadBridge();
  returned.emit('milaura:quiz-result', returned.store.read().diagnostic);
  await tick();
  await tick();
  assert.equal(returned.requests.filter((r) => r.path.endsWith('/v1/handoffs')).length, 1);
  assert.equal(JSON.parse(returned.requests.find((r) => r.path.endsWith('/v1/handoffs')).options.body).diagnostic.profileId, profileId);
  assert.equal(returned.redirects.length, 1);
  assert.equal(returned.storage.size, 0);
});

test('déjà connecté : conservation du profil ' + profileId + ' sans reconnexion', async () => {
  const b = browser({loggedIn: true});
  b.loadBridge();
  b.emit('milaura:quiz-result', {...diagnostic, profileId});
  b.click();
  await tick();
  assert.equal(JSON.parse(b.requests.find((r) => r.path.endsWith('/v1/handoffs')).options.body).diagnostic.profileId, profileId);
  assert.match(b.redirects[0], /^https:\/\/shopify.com\/107347837273/);
});
}

test('si sessionStorage est bloqué, ne redirige pas en perdant silencieusement le résultat', async () => {
  const b = browser({blocked: true});
  b.loadBridge();
  b.emit('milaura:quiz-result', diagnostic);
  b.click();
  await tick();
  assert.equal(b.redirects.length, 0);
  assert.match(b.status.textContent, /Connectez-vous d’abord/);
  assert.equal(b.button.disabled, false);
});

test('une réponse perdue réutilise la même clé au clic suivant', async () => {
  let posts = 0;
  const b = browser({loggedIn: true, response: async (path) => {
    if (path.endsWith('/v1/handoffs') && posts++ === 0) throw Error('NETWORK');
    return {ok: true, json: async () => path.endsWith('/v1/handoffs') ? {handoffId: 'id'} : {}};
  }});
  b.loadBridge();
  b.emit('milaura:quiz-result', diagnostic);
  b.click();
  await tick();
  b.click();
  await tick();
  const postsSent = b.requests.filter((r) => r.options.body).map((r) => JSON.parse(r.options.body));
  assert.equal(postsSent[0].idempotencyKey, postsSent[1].idempotencyKey);
  assert.equal(b.redirects.length, 1);
});

test('une purge en attente empêche la résurrection automatique au retour de connexion', async () => {
  const b = browser({loggedIn: true, response: async (path) => ({ok: true, json: async () => path.endsWith('/pending') ? {operationId: 'purge-id'} : {ok: true}})});
  b.store.prepare(diagnostic);
  b.window.location.search = '?show=result&save=1';
  b.loadBridge();
  b.emit('milaura:quiz-result', diagnostic);
  await tick();
  await tick();
  assert.equal(b.requests.filter((r) => r.path.endsWith('/v1/handoffs')).length, 0);
  assert.match(b.status.textContent, /supprimé/);
});

test('une panne de vérification de purge ne laisse pas envoyer un résultat', async () => {
  const b = browser({loggedIn: true, response: async () => {throw Error('OFFLINE');}});
  b.loadBridge();
  b.emit('milaura:quiz-result', diagnostic);
  b.click();
  await tick();
  assert.equal(b.requests.filter((r) => r.path.endsWith('/v1/handoffs')).length, 0);
  assert.match(b.status.textContent, /vérification/);
});

test('continuer sans enregistrer efface la demande temporaire et n’envoie rien', async () => {
  const b = browser();
  b.store.prepare(diagnostic);
  b.loadBridge();
  b.skip();
  await tick();
  assert.equal(b.storage.size, 0);
  assert.equal(b.requests.length, 0);
  assert.match(b.status.textContent, /sans enregistrer/);
});

test('ne transfère pas à un autre compte une demande déjà liée à un client', async () => {
  const b = browser({loggedIn: true});
  b.store.prepare(diagnostic, 'another-customer');
  b.window.location.search = '?show=result&save=1';
  b.loadBridge();
  b.emit('milaura:quiz-result', diagnostic);
  await tick();
  assert.equal(b.requests.filter((r) => r.path.endsWith('/v1/handoffs')).length, 0);
  assert.match(b.status.textContent, /autre compte/);
});
