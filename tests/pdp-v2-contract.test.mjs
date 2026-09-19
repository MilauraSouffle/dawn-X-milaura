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

test('all product templates share the approved adaptive conversion order', async () => {
  const template = parseShopifyJson(await source('templates/product.milaura-pdp-v2.json'));
  const canonicalTemplate = parseShopifyJson(await source('templates/product.milaura-produit.json'));
  const defaultTemplate = parseShopifyJson(await source('templates/product.json'));

  assert.deepEqual(template.order, [
    'hero_v2',
    'reassurance_v2',
    'guide_v2',
    'narrative_v2',
    'editorial_v2',
    'recommendations',
    'advisor',
    'services_v2',
    'reassurance_bottom',
    'sticky_v2',
  ]);
  assert.equal(template.sections.hero_v2.type, 'milaura-product-hero-v2');
  assert.equal(template.sections.guide_v2.type, 'milaura-product-guide-v2');
  assert.equal(template.sections.narrative_v2.type, 'milaura-product-narrative-v2');
  assert.equal(template.sections.editorial_v2.type, 'milaura-product-editorial-v2');
  assert.equal(template.sections.services_v2.type, 'milaura-product-services-v2');
  assert.equal(template.sections.reassurance_v2.settings.display_mode, 'facts');
  assert.equal(template.sections.reassurance_bottom.settings.display_mode, 'services');
  assert.deepEqual(canonicalTemplate.sections, template.sections);
  assert.deepEqual(canonicalTemplate.order, template.order);
  assert.deepEqual(defaultTemplate.sections, template.sections);
  assert.deepEqual(defaultTemplate.order, template.order);
});

test('the hero consumes the five manifest gallery slots and keeps long copy below the separator', async () => {
  const hero = await source('sections/milaura-product-hero-v2.liquid');

  assert.match(hero, /product\.metafields\.milaura\.pdp_media_manifest\.value/);
  assert.match(hero, /media_manifest\.groups\.commercial_gallery/);
  assert.match(hero, /for gallery_slot_id in manifest_gallery_slots limit: 5/);
  assert.doesNotMatch(hero, /slot_alt/);
  assert.doesNotMatch(hero, /contains '\[MILAURA:/);
  assert.doesNotMatch(hero, /product\.description/);
  assert.match(hero, /data-pdp-gallery/);
  assert.match(hero, /data-pdp-submit/);
  assert.match(hero, /show_social_proof/);
  assert.match(hero, /render 'milaura-pdp-family'/);
  assert.match(hero, /data-pdp-family=/);
  assert.match(hero, /if has_natural_stone/);
  assert.match(hero, /social_subject = 'cette bougie'/);
  assert.doesNotMatch(hero, /Les photos présentent le modèle que vous choisissez/);
  assert.match(hero, /Chaque pierre naturelle possède ses propres nuances, son veinage et parfois une forme légèrement/);
  assert.doesNotMatch(hero, /milaura-pdp-variation-note__disclosure/);
  assert.ok(hero.indexOf('data-pdp-submit') < hero.indexOf('milaura-pdp-social'));
  assert.ok(hero.indexOf('milaura-pdp-social') < hero.indexOf('milaura-pdp-buy__essentials'));
});

test('the guide keeps the proven two-tab layout and adapts it to every family', async () => {
  const guide = await source('sections/milaura-product-guide-v2.liquid');
  const css = await source('assets/milaura-product-pdp-v2.css');

  assert.match(guide, /product\.metafields\.milaura\.pdp_media_manifest\.value/);
  assert.match(guide, /e01_slot_id = manifest_narrative_slots\[0\]/);
  assert.match(guide, /e03_slot_id = manifest_narrative_slots\[2\]/);
  assert.doesNotMatch(guide, /slot_alt/);
  assert.match(guide, /product\.description/);
  assert.match(guide, /Produit et matières/);
  assert.match(guide, /Le minéral en détail/);
  assert.match(guide, /La bougie en détail/);
  assert.match(guide, /Le soin en détail/);
  assert.match(guide, /ritual_steps/);
  assert.match(guide, /scent_notes/);
  assert.doesNotMatch(guide, /story_text/);
  assert.doesNotMatch(guide, /benefits_json/);
  assert.match(css, /\.milaura-product-guide-v2 \.milaura-product-guide__tab\s*\{[^}]*border:\s*var\(--milaura-filet\)/s);
  assert.match(css, /\.milaura-product-usage-steps\s*\{[^}]*border-top:\s*var\(--milaura-filet\)/s);
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

  assert.match(narrative, /product\.metafields\.milaura\.pdp_media_manifest\.value/);
  assert.match(narrative, /e02_slot_id = manifest_narrative_slots\[1\]/);
  assert.doesNotMatch(narrative, /slot_alt/);
  assert.match(narrative, /Fermoir, matières et finitions/);
  assert.match(narrative, /Forme, dimensions et origine/);
  assert.match(narrative, /Cire, mèche et combustion/);
  assert.match(narrative, /Composition et conseils d’utilisation/);
  assert.doesNotMatch(narrative, /évitez le contact prolongé/i);
  assert.doesNotMatch(narrative, /milaura-pdp-quality-callout/);
  assert.match(css, /@media screen and \(min-width: 990px\)[\s\S]*?\.milaura-pdp-technical-v2__media\s*\{[^}]*grid-column:\s*2[^}]*grid-row:\s*1/s);
  assert.match(css, /@media screen and \(min-width: 990px\)[\s\S]*?\.milaura-pdp-technical-v2__content\s*\{[^}]*grid-column:\s*1[^}]*grid-row:\s*1/s);
});

test('the family resolver covers all current catalogue families and legacy product types', async () => {
  const familyResolver = await source('snippets/milaura-pdp-family.liquid');

  for (const family of ['bijou', 'pierre-mineral', 'bougie-senteur', 'rituel', 'soin', 'accessoire', 'produit']) {
    assert.match(familyResolver, new RegExp(`'${family}'`));
  }
  for (const legacyType of ['bracelet', 'plaque-de-rechargement', 'pendule', 'bougie', 'savon', 'porte-cles']) {
    assert.match(familyResolver, new RegExp(`'${legacyType}'`));
  }
  assert.match(familyResolver, /product\.metafields\.milaura\.catalogue_family/);
  assert.match(familyResolver, /product\.metafields\.milaura\.product_type_handle/);
});

test('H06 is an editorial projection outside the commercial gallery', async () => {
  const hero = await source('sections/milaura-product-hero-v2.liquid');
  const editorial = await source('sections/milaura-product-editorial-v2.liquid');

  assert.doesNotMatch(hero, /H06_EDITORIAL_PROJECTION/);
  assert.match(editorial, /media_manifest\.groups\.editorial_projection/);
  assert.match(editorial, /pdp_editorial_projection/);
  assert.match(editorial, /milaura-pdp-manifest-image/);
});

test('the manifest is declared as the V6 product media contract', async () => {
  const definitions = JSON.parse(await source('config/metafields/product-metafields-definition.json'));
  const manifest = definitions.metafields.find(
    (field) => field.namespace === 'milaura' && field.key === 'pdp_media_manifest',
  );

  assert.equal(manifest.type, 'json');
  assert.deepEqual(manifest.required_for, ['workflow_v6']);
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
    'sections/milaura-product-editorial-v2.liquid',
    'sections/milaura-product-guide-v2.liquid',
    'sections/milaura-product-services-v2.liquid',
    'sections/milaura-product-sticky-v2.liquid',
    'assets/milaura-product-pdp-v2.css',
    'assets/milaura-product-pdp-v2.js',
    'templates/product.milaura-pdp-v2.json',
    'templates/product.milaura-produit.json',
    'templates/product.json',
    'snippets/milaura-pdp-manifest-image.liquid',
    'snippets/milaura-pdp-family.liquid',
  ];

  for (const file of files) {
    assert.doesNotMatch(await source(file), /\u2014/, file);
  }
});
