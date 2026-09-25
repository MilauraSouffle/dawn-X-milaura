import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), 'utf8');

const stripShopifyHeader = (source) => source.replace(/^\/\*[\s\S]*?\*\//, '').trim();

test('the rare-pieces collection template uses the verified geode handle', () => {
  const template = JSON.parse(stripShopifyHeader(read('templates/collection.milaura-pieces-rares.json')));

  assert.equal(template.sections.rare_pieces.type, 'milaura-rare-pieces-landing');
  assert.equal(template.sections.rare_pieces.settings.heading, 'Pièces rares & de collection');
  assert.equal(
    template.sections.rare_pieces.settings.featured_product,
    'geode-cathedrale-en-amethyste-19-9-kg',
  );
});

test('the launch manifest contains the six approved products and the verified geode', () => {
  const manifest = JSON.parse(read('docs/reference/2026-09-25-pieces-rares-manifest.json'));

  assert.equal(manifest.collection.handle, 'pieces-rares');
  assert.equal(manifest.collection.status, 'published_online_store');
  assert.equal(manifest.collection.sales_channels, 1);
  assert.equal(manifest.launch_products.length, 6);
  assert.equal(new Set(manifest.launch_products).size, 6);
  assert.equal(manifest.featured_product.handle, 'geode-cathedrale-en-amethyste-19-9-kg');
  assert.equal(manifest.featured_product.status, 'active_live');
  assert.equal(manifest.featured_product.media_count, 9);
  assert.equal(manifest.featured_product.supplier_reference, 'GC0256');
  assert.equal(manifest.featured_product.weight_g, 19900);
  assert.deepEqual(manifest.featured_product.dimensions_mm, [395, 230, 140]);
  assert.equal(manifest.live_verification.collection_template_suffix, 'milaura-pieces-rares');
  assert.equal(manifest.photography_contract.ai_generation_allowed, false);
  assert.equal(manifest.photography_contract.source_files.length, 7);
});

test('homepage and navigation point to the rare-pieces collection route', () => {
  const homepage = JSON.parse(stripShopifyHeader(read('templates/index.json')));
  const navigation = read('snippets/milaura-nav-curated-links.liquid');

  assert.equal(homepage.sections.hero_homepage.settings.cta_link, 'shopify://collections/pieces-rares');
  assert.equal(
    homepage.sections.hero_homepage.settings.featured_product,
    'geode-cathedrale-en-amethyste-19-9-kg',
  );
  assert.equal(homepage.sections.hero_homepage.settings.title, '19,9 kg d’améthyste. Une seule pièce.');
  assert.match(homepage.sections.hero_homepage.settings.description, /exactement la pièce présentée/);
  assert.equal(homepage.sections.hero_homepage.settings.media_label, 'Photographie de la pièce vendue');
  assert.match(navigation, /routes\.collections_url\s*\}\}\/pieces-rares/);
});

test('the geode contract is explicit in the implementation', () => {
  const section = read('sections/milaura-rare-pieces-landing.liquid');
  const hero = read('sections/milaura-hero-portal.liquid');

  assert.match(section, /Photographie de la pièce vendue/);
  assert.match(section, /section\.settings\.featured_product/);
  assert.match(hero, /section\.settings\.featured_product/);
  assert.match(hero, /section\.settings\.description/);
  assert.match(hero, /section\.settings\.media_label/);
  assert.doesNotMatch(section, /génér(?:ée|ation) par IA/i);
});
