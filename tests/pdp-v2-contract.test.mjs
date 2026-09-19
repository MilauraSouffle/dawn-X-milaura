import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const root = new URL('../', import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), 'utf8');
}

function parseShopifyJson(contents) {
  return JSON.parse(contents.replace(/^(?:\s*\/\*[\s\S]*?\*\/\s*)+/, '').trim());
}

test('the alternate template keeps the approved conversion order', async () => {
  const template = parseShopifyJson(await source('templates/product.milaura-pdp-v2.json'));

  assert.deepEqual(template.order, [
    'hero_v2',
    'reassurance_v2',
    'guide_v2',
    'narrative_v2',
    'recommendations',
    'advisor',
    'sticky_v2',
  ]);
  assert.equal(template.sections.hero_v2.type, 'milaura-product-hero-v2');
  assert.equal(template.sections.guide_v2.type, 'milaura-product-guide-v2');
  assert.equal(template.sections.narrative_v2.type, 'milaura-product-narrative-v2');
});

test('the hero consumes H01 to H06 and keeps long copy below the separator', async () => {
  const hero = await source('sections/milaura-product-hero-v2.liquid');

  for (const slot of ['H01', 'H02', 'H03', 'H04', 'H05', 'H06']) {
    assert.match(hero, new RegExp(`\\[MILAURA:${slot}\\]`));
  }
  assert.doesNotMatch(hero, /product\.description/);
  assert.match(hero, /data-pdp-gallery/);
  assert.match(hero, /data-pdp-submit/);
  assert.match(hero, /show_social_proof/);
});

test('the guide keeps the proven two-tab layout without service questions', async () => {
  const guide = await source('sections/milaura-product-guide-v2.liquid');

  for (const slot of ['E01', 'E03']) {
    assert.match(guide, new RegExp(`\\[MILAURA:${slot}\\]`));
  }
  assert.match(guide, /product\.description/);
  assert.match(guide, /Produit et matières/);
  assert.match(guide, /milaura-pdp-quality-callout/);
  assert.doesNotMatch(guide, /Questions fréquentes/);
  assert.doesNotMatch(guide, /Services & réponses/);
});

test('the technical section consumes E02 without generic care copy', async () => {
  const narrative = await source('sections/milaura-product-narrative-v2.liquid');

  assert.match(narrative, /\[MILAURA:E02\]/);
  assert.match(narrative, /Fermoir, matières et finitions/);
  assert.doesNotMatch(narrative, /évitez le contact prolongé/i);
});

test('the reassurance separator carries product facts, certificates and payments', async () => {
  const reassurance = await source('sections/milaura-product-reassurance-v2.liquid');

  assert.match(reassurance, /milaura-pdp-fact-rail/);
  assert.match(reassurance, /certificate_file/);
  assert.match(reassurance, /payment_type_svg_tag/);
  assert.match(reassurance, /shop\.enabled_payment_types/);
});

test('new PDP styles use the MilAura token system', async () => {
  const css = await source('assets/milaura-product-pdp-v2.css');
  const fontFamilyLines = css.split('\n').filter((line) => line.includes('font-family:'));

  assert.doesNotMatch(css, /#[0-9a-f]{3,8}/i);
  assert.ok(fontFamilyLines.every((line) => line.includes('font-family: var(')));
  assert.match(css, /aspect-ratio:\s*var\(--milaura-ratio-produit\)/);
  assert.match(css, /prefers-reduced-motion/);
});

test('new PDP files contain no em dash', async () => {
  const files = [
    'sections/milaura-product-hero-v2.liquid',
    'sections/milaura-product-reassurance-v2.liquid',
    'sections/milaura-product-narrative-v2.liquid',
    'sections/milaura-product-guide-v2.liquid',
    'sections/milaura-product-sticky-v2.liquid',
    'assets/milaura-product-pdp-v2.css',
    'assets/milaura-product-pdp-v2.js',
    'templates/product.milaura-pdp-v2.json',
  ];

  for (const file of files) {
    assert.doesNotMatch(await source(file), /\u2014/, file);
  }
});
