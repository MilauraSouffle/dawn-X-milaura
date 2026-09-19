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
    'services_v2',
    'reassurance_bottom',
    'sticky_v2',
  ]);
  assert.equal(template.sections.hero_v2.type, 'milaura-product-hero-v2');
  assert.equal(template.sections.guide_v2.type, 'milaura-product-guide-v2');
  assert.equal(template.sections.narrative_v2.type, 'milaura-product-narrative-v2');
  assert.equal(template.sections.services_v2.type, 'milaura-product-services-v2');
  assert.equal(template.sections.reassurance_v2.settings.display_mode, 'facts');
  assert.equal(template.sections.reassurance_bottom.settings.display_mode, 'services');
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
  assert.doesNotMatch(hero, /Les photos présentent le modèle que vous choisissez/);
  assert.match(hero, /Chaque pierre naturelle possède ses propres nuances, son veinage et parfois une forme légèrement/);
  assert.doesNotMatch(hero, /milaura-pdp-variation-note__disclosure/);
  assert.ok(hero.indexOf('data-pdp-submit') < hero.indexOf('milaura-pdp-social'));
  assert.ok(hero.indexOf('milaura-pdp-social') < hero.indexOf('milaura-pdp-buy__essentials'));
});

test('the guide keeps the proven two-tab layout without service questions', async () => {
  const guide = await source('sections/milaura-product-guide-v2.liquid');

  for (const slot of ['E01', 'E03']) {
    assert.match(guide, new RegExp(`\\[MILAURA:${slot}\\]`));
  }
  assert.match(guide, /product\.description/);
  assert.match(guide, /Produit et matières/);
  assert.match(guide, /milaura-product-panel__description-disclosure/);
  assert.match(guide, /Lire toute la description/);
  assert.match(guide, /Masquer la description/);
  assert.match(guide, /milaura-pdp-quality-callout/);
  assert.doesNotMatch(guide, /Questions fréquentes/);
  assert.doesNotMatch(guide, /Services & réponses/);
});

test('services and answers return as a dedicated section at the bottom', async () => {
  const services = await source('sections/milaura-product-services-v2.liquid');

  assert.match(services, /Services & réponses/);
  assert.match(services, /product\.metafields\.milaura\.faq_json/);
  assert.match(services, /Questions fréquentes/);
  assert.match(services, /Expédition & livraison/);
  assert.match(services, /Retours/);
  assert.match(services, /Paiements/);
  assert.match(services, /FAQPage/);
});

test('the technical section consumes E02 without generic care copy', async () => {
  const narrative = await source('sections/milaura-product-narrative-v2.liquid');
  const css = await source('assets/milaura-product-pdp-v2.css');

  assert.match(narrative, /\[MILAURA:E02\]/);
  assert.match(narrative, /Fermoir, matières et finitions/);
  assert.doesNotMatch(narrative, /évitez le contact prolongé/i);
  assert.doesNotMatch(narrative, /milaura-pdp-quality-callout/);
  assert.match(css, /@media screen and \(min-width: 990px\)[\s\S]*?\.milaura-pdp-technical-v2__media\s*\{[^}]*grid-column:\s*2[^}]*grid-row:\s*1/s);
  assert.match(css, /@media screen and \(min-width: 990px\)[\s\S]*?\.milaura-pdp-technical-v2__content\s*\{[^}]*grid-column:\s*1[^}]*grid-row:\s*1/s);
});

test('the reassurance separator carries product facts, certificates and payments', async () => {
  const reassurance = await source('sections/milaura-product-reassurance-v2.liquid');

  assert.match(reassurance, /milaura-pdp-fact-rail/);
  assert.match(reassurance, /certificate_file/);
  assert.match(reassurance, /payment_type_svg_tag/);
  assert.match(reassurance, /shop\.enabled_payment_types/);
  assert.match(reassurance, /section\.settings\.display_mode == 'facts'/);
  assert.match(reassurance, /section\.settings\.display_mode == 'services'/);
});

test('new PDP styles use the MilAura token system', async () => {
  const css = await source('assets/milaura-product-pdp-v2.css');
  const fontFamilyLines = css.split('\n').filter((line) => line.includes('font-family:'));

  assert.doesNotMatch(css, /#[0-9a-f]{3,8}/i);
  assert.ok(fontFamilyLines.every((line) => line.includes('font-family: var(')));
  assert.match(css, /aspect-ratio:\s*var\(--milaura-ratio-produit\)/);
  assert.match(css, /prefers-reduced-motion/);
});

test('the V2 page uses a white canvas, aqua highlights and no section divider rules', async () => {
  const css = await source('assets/milaura-product-pdp-v2.css');
  const tokens = await source('assets/milaura-tokens.css');

  assert.match(tokens, /--milaura-surface-blanche:\s*var\(--milaura-blanc\)/);
  assert.match(css, /\.milaura-pdp-hero\s*\{[^}]*background:\s*var\(--milaura-surface-blanche\)/s);
  assert.match(css, /\.milaura-pdp-gallery__pagination\s*\{[^}]*border-bottom:\s*0/s);
  assert.match(css, /\.milaura-pdp-fact-rail\s*\{[^}]*border-top:\s*0[^}]*border-bottom:\s*0/s);
  assert.match(css, /\.milaura-product-guide-v2\s*\{[^}]*background:\s*var\(--milaura-surface-blanche\)/s);
  assert.match(css, /\.milaura-product-guide-v2 \.milaura-product-panel__layout\s*\{[^}]*border-top:\s*0[^}]*border-bottom:\s*0/s);
  assert.match(css, /\.milaura-product-guide-v2 \.milaura-product-specs\s*\{[^}]*border-top:\s*var\(--milaura-filet\)/s);
  assert.match(css, /\.milaura-pdp-facts > div,[\s\S]*?border-bottom:\s*var\(--milaura-filet\)/);
  assert.match(css, /\.milaura-pdp-services-v2__fact\s*\{[^}]*border-top:\s*var\(--milaura-filet\)/s);
  assert.match(css, /\.milaura-pdp-services-v2__faq\s*\{[^}]*border-top:\s*var\(--milaura-filet-mineral\)/s);
  assert.match(css, /\.milaura-pdp-services-v2__question\s*\{[^}]*border-top:\s*var\(--milaura-filet\)/s);
  assert.match(css, /body:has\(\.milaura-pdp-hero\) \.milaura-product-advisor\s*\{[^}]*background:\s*var\(--milaura-aigue-ecume\)/s);
  assert.match(css, /\.milaura-pdp-services-v2\s*\{[^}]*background:\s*var\(--milaura-surface-blanche\)/s);
  assert.match(css, /\.milaura-pdp-submit:hover,[\s\S]*?background:\s*var\(--milaura-aigue\)/);
});

test('new PDP files contain no em dash', async () => {
  const files = [
    'sections/milaura-product-hero-v2.liquid',
    'sections/milaura-product-reassurance-v2.liquid',
    'sections/milaura-product-narrative-v2.liquid',
    'sections/milaura-product-guide-v2.liquid',
    'sections/milaura-product-services-v2.liquid',
    'sections/milaura-product-sticky-v2.liquid',
    'assets/milaura-product-pdp-v2.css',
    'assets/milaura-product-pdp-v2.js',
    'templates/product.milaura-pdp-v2.json',
  ];

  for (const file of files) {
    assert.doesNotMatch(await source(file), /\u2014/, file);
  }
});
