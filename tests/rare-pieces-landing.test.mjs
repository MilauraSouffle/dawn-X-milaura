import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), 'utf8');

const stripShopifyHeader = (source) => source.replace(/^\/\*[\s\S]*?\*\//, '').trim();

test('the rare-pieces collection template is valid and starts without an invented geode handle', () => {
  const template = JSON.parse(stripShopifyHeader(read('templates/collection.milaura-pieces-rares.json')));

  assert.equal(template.sections.rare_pieces.type, 'milaura-rare-pieces-landing');
  assert.equal(template.sections.rare_pieces.settings.heading, 'Pièces rares & de collection');
  assert.equal(template.sections.rare_pieces.settings.featured_product, '');
});

test('the launch manifest contains the six approved live products and a pending geode', () => {
  const manifest = JSON.parse(read('docs/reference/2026-09-25-pieces-rares-manifest.json'));

  assert.equal(manifest.collection.handle, 'pieces-rares');
  assert.equal(manifest.launch_products.length, 6);
  assert.equal(new Set(manifest.launch_products).size, 6);
  assert.equal(manifest.featured_product.handle, null);
  assert.equal(manifest.photography_contract.ai_generation_allowed, false);
});

test('homepage and navigation point to the same future collection route', () => {
  const homepage = JSON.parse(stripShopifyHeader(read('templates/index.json')));
  const navigation = read('snippets/milaura-nav-curated-links.liquid');

  assert.equal(homepage.sections.hero_homepage.settings.cta_link, 'shopify://collections/pieces-rares');
  assert.equal(homepage.sections.hero_homepage.settings.featured_product, '');
  assert.match(navigation, /routes\.collections_url\s*\}\}\/pieces-rares/);
});

test('the geode contract is explicit in the implementation', () => {
  const section = read('sections/milaura-rare-pieces-landing.liquid');
  const hero = read('sections/milaura-hero-portal.liquid');

  assert.match(section, /Photographie de la pièce vendue/);
  assert.match(section, /section\.settings\.featured_product/);
  assert.match(hero, /section\.settings\.featured_product/);
  assert.doesNotMatch(section, /génér(?:ée|ation) par IA/i);
});
