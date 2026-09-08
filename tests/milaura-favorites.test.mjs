import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import test from 'node:test';
import vm from 'node:vm';

const code = await readFile(new URL('../assets/milaura-favorites.js', import.meta.url), 'utf8');
const liquid = {
  card: await readFile(new URL('../snippets/milaura-card-product.liquid', import.meta.url), 'utf8'),
  dawn: await readFile(new URL('../snippets/card-product.liquid', import.meta.url), 'utf8'),
  pdp: await readFile(new URL('../sections/milaura-product-hero.liquid', import.meta.url), 'utf8'),
  button: await readFile(new URL('../snippets/milaura-favorite-button.liquid', import.meta.url), 'utf8'),
};
const tick = () => new Promise((resolve) => setImmediate(resolve));
const productId = 'gid://shopify/Product/42';

function favoriteButton(id = productId) {
  const attributes = new Map();
  return {
    dataset: {productId: id, productTitle: 'Bracelet test'},
    disabled: true,
    title: '',
    setAttribute(name, value) { attributes.set(name, String(value)); },
    getAttribute(name) { return attributes.get(name); },
  };
}

function browser({loggedIn = true, initial = [], storage = new Map(), search = '', failPost = false} = {}) {
  const events = new Map();
  const buttons = [favoriteButton(), favoriteButton()];
  const requests = [];
  const redirects = [];
  const notices = new Map();
  let items = structuredClone(initial);
  const root = {dataset: {
    enabled: 'true',
    endpoint: '/apps/milaura-c1-bridge',
    loggedIn: String(loggedIn),
    loginPath: '/customer_authentication/login',
  }};
  const body = {appendChild(node) { notices.set(node.id, node); }};
  const document = {
    body,
    querySelector(selector) { return selector.includes('release-bridge') ? root : buttons[0]; },
    querySelectorAll() { return buttons; },
    getElementById(id) { return notices.get(id) || null; },
    createElement() {
      return {dataset: {}, hidden: false, setAttribute() {}};
    },
    addEventListener(name, callback) { events.set(name, callback); },
    dispatchEvent(event) { events.set('last-dispatch', event); },
  };
  const location = {
    href: `https://milaura.fr/products/bracelet-test${search}`,
    origin: 'https://milaura.fr',
    search,
    assign(url) { redirects.push(url); },
  };
  const window = {
    AbortController,
    MutationObserver: class { observe() {} },
    clearTimeout,
    setTimeout,
    location,
    history: {replaceState() {}},
    sessionStorage: {
      getItem(key) { return storage.get(key) || null; },
      setItem(key, value) { storage.set(key, value); },
      removeItem(key) { storage.delete(key); },
    },
    addEventListener(name, callback) { events.set(`window:${name}`, callback); },
  };
  const context = vm.createContext({
    AbortController,
    CustomEvent: class { constructor(type, options) { this.type = type; this.detail = options.detail; } },
    Date,
    JSON,
    Number,
    Object,
    Promise,
    Set,
    URL,
    URLSearchParams,
    window,
    document,
    fetch: async (path, options) => {
      requests.push({path, options});
      if (options.method === 'POST') {
        if (failPost) return {ok: false, status: 503, json: async () => ({message: 'Panne test'})};
        const input = JSON.parse(options.body);
        items = input.saved
          ? [{productId: input.productId, addedAt: '2026-09-08T16:31:00.000Z'}, ...items.filter((item) => item.productId !== input.productId)]
          : items.filter((item) => item.productId !== input.productId);
        return {ok: true, status: 200, json: async () => ({status: 'ready', items, productId: input.productId, saved: input.saved})};
      }
      return {ok: true, status: 200, json: async () => ({status: 'ready', items})};
    },
  });
  vm.runInContext(code, context);
  return {
    buttons,
    requests,
    redirects,
    storage,
    notices,
    click(button = buttons[0]) {
      events.get('click')({
        target: {closest: () => button},
        preventDefault() {},
        stopPropagation() {},
      });
    },
  };
}

test('rend un bouton partage sans interaction imbriquee dans le lien produit', () => {
  assert.match(liquid.button, /data-milaura-favorite/);
  assert.match(liquid.button, /aria-pressed="false"/);
  assert.ok(liquid.card.indexOf('</a>') < liquid.card.indexOf("render 'milaura-favorite-button'"));
  assert.match(liquid.dawn, /render 'milaura-favorite-button'/);
  assert.match(liquid.pdp, /favorite_placement: 'pdp'/);
});

test('charge un favori durable et synchronise tous les coeurs du produit', async () => {
  const initial = [{productId, addedAt: '2026-09-08T16:20:00.000Z'}];
  const b = browser({initial});
  await tick();
  assert.equal(b.buttons.every((button) => button.getAttribute('aria-pressed') === 'true'), true);
  assert.equal(b.buttons.every((button) => button.disabled === false), true);
  b.click();
  await tick();
  await tick();
  assert.equal(b.requests.filter((request) => request.options.method === 'POST').length, 1);
  assert.equal(b.buttons.every((button) => button.getAttribute('aria-pressed') === 'false'), true);
});

test('invite : conserve seulement un choix temporaire puis reprend apres connexion', async () => {
  const storage = new Map();
  const guest = browser({loggedIn: false, storage});
  await tick();
  guest.click();
  assert.equal(guest.requests.length, 0);
  const destination = new URL(guest.redirects[0], 'https://milaura.fr');
  assert.equal(destination.pathname, '/customer_authentication/login');
  assert.equal(destination.searchParams.get('return_to'), '/products/bracelet-test?milaura_favorite=1');
  const returned = browser({loggedIn: true, storage, search: '?milaura_favorite=1'});
  await tick();
  await tick();
  assert.equal(returned.requests.filter((request) => request.options.method === 'POST').length, 1);
  assert.equal(returned.buttons.every((button) => button.getAttribute('aria-pressed') === 'true'), true);
  assert.equal(storage.size, 0);
});

test('une ecriture non confirmee restaure le coeur precedent', async () => {
  const b = browser({failPost: true});
  await tick();
  b.click();
  await tick();
  await tick();
  assert.equal(b.buttons.every((button) => button.getAttribute('aria-pressed') === 'false'), true);
  assert.match(b.notices.get('MilauraFavoriteNotice').textContent, /Panne test/);
});
