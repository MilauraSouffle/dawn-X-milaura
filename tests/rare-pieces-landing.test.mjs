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
  const settings = template.sections.rare_pieces.settings;

  assert.equal(template.sections.rare_pieces.type, 'milaura-rare-pieces-landing');
  assert.equal(settings.heading, 'Pièces rares & de collection');
  assert.equal(settings.featured_product, 'geode-cathedrale-en-amethyste-19-9-kg');
  assert.equal(settings.star_origin, 'Brésil');
  assert.equal(settings.star_weight, '19,9 kg');
  assert.equal(settings.star_dimensions, '39,5 × 23 × 14 cm');
  assert.equal(settings.star_primary_image_index, 1);
  assert.equal(settings.star_secondary_image_index, 2);
  assert.equal(settings.star_tertiary_image_index, 3);
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
  assert.equal(homepage.sections.hero_homepage.settings.title, 'L’harmonie parfaite.');
  assert.equal(homepage.sections.hero_homepage.settings.cta_label, 'Découvrir nos bijoux');
  assert.equal(
    homepage.sections.hero_homepage.settings.desktop_asset,
    'milaura-hero-bijoux-pierres-naturelles-obsidienne-sodalite-desktop.webp',
  );
  assert.equal(
    homepage.sections.hero_homepage.settings.mobile_asset,
    'milaura-hero-bijoux-pierres-naturelles-obsidienne-sodalite-mobile.webp',
  );
  assert.match(navigation, /routes\.collections_url\s*\}\}\/pieces-rares/);
});

test('the geode contract is explicit in the implementation', () => {
  const section = read('sections/milaura-rare-pieces-landing.liquid');

  assert.match(section, /Photographies de la pièce vendue/);
  assert.match(section, /section\.settings\.featured_product/);
  assert.match(section, /featured_product\.media \| where: 'media_type', 'image'/);
  assert.doesNotMatch(section, /génér(?:ée|ation) par IA/i);
});

test('the landing reuses the approved lapis hero in dedicated desktop and mobile crops', () => {
  const template = JSON.parse(stripShopifyHeader(read('templates/collection.milaura-pieces-rares.json')));
  const section = read('sections/milaura-rare-pieces-landing.liquid');
  const settings = template.sections.rare_pieces.settings;

  assert.equal(settings.hero_desktop_asset, 'milaura-hero-pieces-rares-lapis.webp');
  assert.equal(settings.hero_mobile_asset, 'milaura-hero-pieces-rares-lapis-mobile.webp');
  assert.match(section, /<picture class="milaura-rare-pieces__hero-media">/);
  assert.match(section, /<source media="\(max-width: 749px\)"/);
  assert.match(section, /fetchpriority="high"/);
});

test('all three star-product views remain visible on mobile', () => {
  const section = read('sections/milaura-rare-pieces-landing.liquid');
  const css = read('assets/milaura-rare-pieces-landing.css');

  assert.match(section, /milaura-rare-pieces__star-tile--primary/);
  assert.match(section, /milaura-rare-pieces__star-tile--secondary/);
  assert.match(section, /milaura-rare-pieces__star-tile--tertiary/);
  assert.doesNotMatch(
    css,
    /milaura-rare-pieces__star-(?:tile|image)--(?:secondary|tertiary)[\s\S]{0,180}display:\s*none/,
  );
});

test('the catalogue count excludes the featured product', () => {
  const section = read('sections/milaura-rare-pieces-landing.liquid');

  assert.match(section, /assign visible_products = 0/);
  assert.match(section, /\{\{ visible_products \}\}/);
  assert.doesNotMatch(section, /\{\{ collection\.products_count \}\}/);
});

test('the compact visual contract keeps the hero, bento, and page surface under control', () => {
  const css = read('assets/milaura-rare-pieces-landing.css');

  assert.match(css, /\.milaura-rare-pieces \{[\s\S]*?background: var\(--milaura-surface-blanche\)/);
  assert.match(css, /\.milaura-rare-pieces__hero \{[\s\S]*?height: clamp\(420px, 34vw, 480px\)/);
  assert.match(css, /\.milaura-rare-pieces__star-gallery \{[\s\S]*?height: clamp\(360px, 29vw, 410px\)/);
  assert.match(css, /\.milaura-rare-pieces__star-gallery \{[\s\S]*?display: grid/);
  assert.match(css, /\.milaura-rare-pieces__star-tile--primary \{[\s\S]*?grid-row: 1 \/ 3/);
  assert.doesNotMatch(css, /\.milaura-rare-pieces__star-tile[^}]*position: absolute/);
  assert.doesNotMatch(css, /\.milaura-rare-pieces__star-tile[^}]*box-shadow/);
});
