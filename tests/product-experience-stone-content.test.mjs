import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const testDirectory = dirname(fileURLToPath(import.meta.url));
const sectionPath = resolve(testDirectory, '../sections/milaura-product-experience.liquid');
const section = readFileSync(sectionPath, 'utf8');
const panelStart = section.indexOf('data-product-guide-key="details-story"');
const panelEnd = section.indexOf('<div class="milaura-product-stone-facts">', panelStart);

assert.notEqual(panelStart, -1, 'The second product tab must exist.');
assert.notEqual(panelEnd, -1, 'The stone facts block must exist.');

const storyPanel = section.slice(panelStart, panelEnd);
const stoneBranch = storyPanel.indexOf("if second_tab_label == 'La pierre'");
const stoneDescription = storyPanel.indexOf('if stone_description != blank', stoneBranch);
const productStory = storyPanel.indexOf('elsif story_text != blank', stoneBranch);

assert.notEqual(stoneBranch, -1, 'The stone tab needs a dedicated content branch.');
assert.notEqual(stoneDescription, -1, 'The stone tab must read stone_description.');
assert.notEqual(productStory, -1, 'Non-stone second tabs must retain story_text.');
assert.ok(
  stoneDescription < productStory,
  'stone_description must take precedence over product story content in the stone tab.',
);
assert.ok(
  !storyPanel.slice(stoneBranch, productStory).includes('story_text | newline_to_br'),
  'The stone branch must never render product story text as stone content.',
);

console.log('PASS product experience stone content');
