import assert from 'node:assert/strict';
import test from 'node:test';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
import {randomUUID} from 'node:crypto';

const intentCode = await readFile(new URL('../assets/milaura-account-save-intent.js', import.meta.url), 'utf8');
const bridgeCode = await readFile(new URL('../assets/milaura-c1-release-bridge.js', import.meta.url), 'utf8');
const diagnostic = {profileId: 'serenite', stone: 'Améthyste', timestamp: Date.now(), scores: {serenite: 7}};
const tick = () => new Promise((resolve) => setImmediate(resolve));

function savedResponse(path, options) {
  const d = options.body && JSON.parse(options.body).diagnostic;
  return {ok: true, json: async () => path.endsWith('/v1/diagnostics') ? {status: 'saved', resultId: d.resultId, profileId: d.profileId, savedAt: new Date().toISOString()} : {}};
}

function browser({loggedIn = false, storage = new Map(), blocked = false, response} = {}) {
  const events = new Map();
  const requests = [];
  const redirects = [];
  const status = {dataset: {}};
  const link = {hidden: true};
  const button = {disabled: false, dataset: {}, getAttribute: () => 'status'};
  const root = {dataset: {enabled: 'true', endpoint: '/apps/milaura-c1-bridge', accountUrl: 'https://shopify.com/107347837273/account/pages/test', loggedIn: String(loggedIn), customerId: loggedIn ? '1' : '', loginPath: '/customer_authentication/login'}};
  const document = {
    querySelector: (s) => s.includes('release-bridge') ? root : s.includes('saved-link') ? link : button,
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
      return response ? response(path, options) : savedResponse(path, options);
    },
  });
  vm.runInContext(intentCode, context);
  const emit = (name, detail) => {for (const cb of events.get(name) || []) cb({detail});};
  return {
    window, storage, requests, redirects, status, button, link, emit,
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
  assert.equal(returned.requests.filter((r) => r.path.endsWith('/v1/diagnostics')).length, 1);
  assert.equal(JSON.parse(returned.requests.find((r) => r.path.endsWith('/v1/diagnostics')).options.body).diagnostic.profileId, profileId);
  assert.equal(returned.redirects.length, 0);
  assert.equal(returned.status.dataset.state, 'saved');
  assert.equal(returned.link.hidden, false);
  assert.equal(returned.storage.size, 0);
});

test('déjà connecté : enregistrement automatique du profil ' + profileId + ' sans clic ni redirection', async () => {
  const b = browser({loggedIn: true});
  b.loadBridge();
  b.emit('milaura:quiz-result', {...diagnostic, profileId});
  b.emit('milaura:quiz-completed', {diagnostic: {...diagnostic, profileId}, startedAt: new Date().toISOString()});
  await tick();
  assert.equal(JSON.parse(b.requests.find((r) => r.path.endsWith('/v1/diagnostics')).options.body).diagnostic.profileId, profileId);
  assert.equal(b.redirects.length, 0);
  assert.equal(b.status.dataset.state, 'saved');
  assert.equal(b.button.hidden, true);
  assert.equal(b.link.hidden, false);
  assert.equal(JSON.parse(b.requests.find((r) => r.options.body).options.body).diagnostic.accountPersonalization.source, 'quiz_start_notice');
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
  const b = browser({loggedIn: true, response: async (path, options) => {
    if (path.endsWith('/v1/diagnostics') && posts++ === 0) throw Error('NETWORK');
    return savedResponse(path, options);
  }});
  b.loadBridge();
  b.emit('milaura:quiz-result', diagnostic);
  b.click();
  await tick();
  b.click();
  await tick();
  const postsSent = b.requests.filter((r) => r.options.body).map((r) => JSON.parse(r.options.body));
  assert.equal(postsSent[0].idempotencyKey, postsSent[1].idempotencyKey);
  assert.equal(b.redirects.length, 0);
  assert.equal(b.status.dataset.state, 'saved');
});

test('une purge en attente empêche la résurrection automatique au retour de connexion', async () => {
  const b = browser({loggedIn: true, response: async (path) => ({ok: true, json: async () => path.endsWith('/pending') ? {operationId: 'purge-id'} : {ok: true}})});
  b.store.prepare(diagnostic);
  b.window.location.search = '?show=result&save=1';
  b.loadBridge();
  b.emit('milaura:quiz-result', diagnostic);
  await tick();
  await tick();
  assert.equal(b.requests.filter((r) => r.path.endsWith('/v1/diagnostics')).length, 0);
  assert.match(b.status.textContent, /supprimé/);
});

test('une panne de vérification de purge ne laisse pas envoyer un résultat', async () => {
  const b = browser({loggedIn: true, response: async () => {throw Error('OFFLINE');}});
  b.loadBridge();
  b.emit('milaura:quiz-result', diagnostic);
  b.click();
  await tick();
  assert.equal(b.requests.filter((r) => r.path.endsWith('/v1/diagnostics')).length, 0);
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
  assert.equal(b.requests.filter((r) => r.path.endsWith('/v1/diagnostics')).length, 0);
  assert.match(b.status.textContent, /autre compte/);
});

test('un ancien résultat simplement affiché ne déclenche aucun enregistrement', async () => {
  const b = browser({loggedIn: true});
  b.loadBridge();
  b.emit('milaura:quiz-result', diagnostic);
  await tick();
  assert.equal(b.requests.filter((r) => r.options.body).length, 0);
  assert.equal(b.storage.size, 0);
  assert.equal(b.status.dataset.state, 'local-result');
});

test('un résultat restauré déjà conservé est reconnu par lecture seule', async () => {
  const b = browser({loggedIn: true, response: async (path, options) => path.endsWith('/current')
    ? {ok: true, json: async () => ({status: 'saved', profileId: diagnostic.profileId, completedAt: new Date(diagnostic.timestamp).toISOString()})}
    : savedResponse(path, options)});
  b.loadBridge();
  b.emit('milaura:quiz-result', diagnostic);
  b.emit('milaura:quiz-restored', diagnostic);
  await tick();
  assert.equal(b.requests.filter((r) => r.options.body).length, 0);
  assert.equal(b.status.dataset.state, 'saved');
  assert.equal(b.button.hidden, true);
  assert.equal(b.link.hidden, false);
});

test('une vérification tardive ne remplace pas la sauvegarde du nouveau quiz', async () => {
  let release;
  const b = browser({loggedIn: true, response: async (path, options) => {
    if (path.endsWith('/current')) await new Promise((resolve) => {release = resolve;});
    return savedResponse(path, options);
  }});
  b.loadBridge();
  b.emit('milaura:quiz-result', diagnostic);
  b.emit('milaura:quiz-restored', diagnostic);
  const next = {...diagnostic, profileId: 'amour', timestamp: diagnostic.timestamp + 1};
  b.emit('milaura:quiz-result', next);
  b.emit('milaura:quiz-completed', {diagnostic: next, startedAt: new Date().toISOString()});
  await tick();
  release();
  await tick();
  assert.equal(b.status.dataset.state, 'saved');
  assert.equal(b.button.hidden, true);
});

test('un événement de fin doublé ne crée pas deux écritures', async () => {
  const b = browser({loggedIn: true});
  b.loadBridge();
  b.emit('milaura:quiz-result', diagnostic);
  const detail = {diagnostic, startedAt: new Date().toISOString()};
  b.emit('milaura:quiz-completed', detail);
  b.emit('milaura:quiz-completed', detail);
  await tick();
  assert.equal(b.requests.filter((r) => r.options.body).length, 1);
});

test('une réponse incohérente ne confirme pas la sauvegarde', async () => {
  const b = browser({loggedIn: true, response: async () => ({ok: true, json: async () => ({status: 'saved', resultId: 'wrong'})})});
  b.loadBridge();
  b.emit('milaura:quiz-result', diagnostic);
  b.click();
  await tick();
  assert.equal(b.status.dataset.state, 'error');
  assert.equal(b.link.hidden, true);
  assert.equal(b.button.hidden, false);
});

test('la réponse tardive du premier quiz ne remplace pas la confirmation du second', async () => {
  let release;
  let posts = 0;
  const b = browser({loggedIn: true, response: async (path, options) => {
    if (options.body && posts++ === 0) await new Promise((resolve) => {release = resolve;});
    return savedResponse(path, options);
  }});
  b.loadBridge();
  b.emit('milaura:quiz-result', diagnostic);
  b.emit('milaura:quiz-completed', {diagnostic, startedAt: new Date().toISOString()});
  await tick();
  const second = {...diagnostic, profileId: 'amour', timestamp: Date.now() + 1};
  b.emit('milaura:quiz-result', second);
  b.emit('milaura:quiz-completed', {diagnostic: second, startedAt: new Date().toISOString()});
  await tick();
  assert.equal(b.status.dataset.state, 'saved');
  release();
  await tick();
  assert.equal(b.status.dataset.state, 'saved');
  assert.equal(b.button.dataset.sent, 'true');
  assert.equal(b.link.hidden, false);
});

test('la fin du quiz invité reste sans stockage ni écriture automatique', async () => {
  const b = browser();
  b.loadBridge();
  b.emit('milaura:quiz-result', diagnostic);
  b.emit('milaura:quiz-completed', {diagnostic, startedAt: new Date().toISOString()});
  await tick();
  assert.equal(b.storage.size, 0);
  assert.equal(b.requests.length, 0);
});

test('une session expirée propose la connexion sans annoncer un enregistrement', async () => {
  const b = browser({loggedIn: true, response: async (path, options) => options.body
    ? {ok: false, status: 401, json: async () => ({code: 'UNAUTHENTICATED'})}
    : savedResponse(path, options)});
  b.loadBridge();
  b.emit('milaura:quiz-result', diagnostic);
  b.click();
  await tick();
  assert.equal(b.status.dataset.state, 'login-required');
  assert.equal(b.link.hidden, true);
  assert.match(b.button.textContent, /Se connecter/);
});
