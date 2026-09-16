import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const root = new URL('../', import.meta.url);

function read(relativePath) {
  return readFileSync(new URL(relativePath, root), 'utf8');
}

test('the local font files expose only supported MilAura weight ranges', () => {
  const tokens = read('assets/milaura-tokens.css');

  assert.match(tokens, /font-family: 'Gloock';[\s\S]*?font-weight: 400;/);
  assert.match(tokens, /font-family: 'Instrument Sans';[\s\S]*?font-weight: 400 700;/);
  assert.match(tokens, /font-family: 'Dancing Script';[\s\S]*?font-weight: 400 700;/);
  assert.match(tokens, /--milaura-fw-display: 400;/);
  assert.match(tokens, /--milaura-fw-bold: 700;/);
});

test('the global layer keeps body copy readable and never synthesizes Gloock weights', () => {
  const globalCss = read('assets/milaura.css');

  assert.doesNotMatch(globalCss, /14\.72px/);
  assert.match(globalCss, /font-size: var\(--milaura-t-corps\);/);
  assert.match(globalCss, /h1,\s*\.h1[\s\S]*?font-weight: var\(--milaura-fw-display\);/);
  assert.match(globalCss, /h2,\s*\.h2[\s\S]*?font-weight: var\(--milaura-fw-display\);/);
  assert.match(globalCss, /h3,\s*\.h3[\s\S]*?font-weight: var\(--milaura-fw-display\);/);
});

test('the audited active surfaces never request weights above the local font files', () => {
  const files = [
    'assets/milaura-choice-doors.css',
    'assets/milaura-home-occasions.css',
    'assets/milaura-home-paths.css',
    'assets/milaura-cart.css',
    'assets/milaura-cart-drawer-v3.css',
    'sections/milaura-cart-items.liquid',
    'sections/milaura-cart-summary.liquid',
    'sections/milaura-hero-editorial.liquid',
    'sections/milaura-hero-portal.liquid',
    'sections/milaura-selection-atelier.liquid',
  ];

  const unsupported = [];

  for (const file of files) {
    const source = read(file);
    for (const match of source.matchAll(/font-weight:\s*(\d{3})/g)) {
      if (Number(match[1]) > 700) unsupported.push(`${file}: ${match[1]}`);
    }
  }

  assert.deepEqual(unsupported, []);
});

test('small functional information uses Instrument Sans instead of Gloock', () => {
  const editorialHero = read('sections/milaura-hero-editorial.liquid');
  const cartDrawer = read('assets/milaura-cart-drawer-v3.css');

  assert.match(
    editorialHero,
    /\.editorial-hero__price \{[\s\S]*?font-family: var\(--milaura-font-texte\);/
  );
  assert.match(
    editorialHero,
    /\.editorial-hero__material-index dd \{[\s\S]*?font-family: var\(--milaura-font-texte\);/
  );
  assert.match(
    cartDrawer,
    /\.milaura-drawer-rewards__fallback \{[\s\S]*?font-family: var\(--milaura-font-texte\);/
  );
});
