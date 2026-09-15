import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), 'utf8');

const section = read('sections/milaura-quiz.liquid');
const accountSave = read('snippets/milaura-quiz-account-save.liquid');
const accountBridge = read('assets/milaura-c1-release-bridge.js');

test('the visitor result has no false guest-account CTA', () => {
  assert.doesNotMatch(section, /Continuer sans compte/);
  assert.doesNotMatch(accountSave, /data-milaura-c1-skip-save/);
  assert.doesNotMatch(accountBridge, /data-milaura-c1-skip-save/);
  assert.match(accountSave, /Créer votre Écrin/);
  assert.match(accountSave, /Créez votre Écrin pour sauvegarder ce diagnostic émotionnel/);
  assert.match(accountSave, /milaura-mon-ecrin-preview-anonymized-20260915\.png/);
  assert.doesNotMatch(accountSave, /data-milaura-ecrin-profile/);
  assert.match(accountBridge, /data-milaura-c1-open-account/);
  assert.match(accountBridge, /window\.location\.assign\(accountUrl\)/);
});

test('the result presents the recommendation before optional follow-up', () => {
  const selection = section.indexOf("title: 'Votre sélection du moment'");
  const followUp = section.indexOf('class="quiz-reveal-follow-up"');
  const emailConsent = (section.match(/render 'milaura-quiz-email-consent'/g) || []).length;

  assert.ok(selection >= 0, 'the recommendation title must remain present');
  assert.ok(followUp > selection, 'account and email follow-up must come after recommendations');
  assert.equal(emailConsent, 1, 'the email consent surface must render once');
  assert.match(section, /recommendation_limit: 3/);
});

test('the result states the need and stone before the personal reading', () => {
  assert.match(section, /Votre besoin du moment :/);
  assert.match(section, /Votre pierre :/);
  assert.match(section, /Vous captez les tensions et les demandes autour de vous/);
  assert.match(section, /Nous avons associé <strong>/);
  assert.match(section, /--profile-accent-rgb/);
  assert.match(section, /background: rgba\(var\(--profile-accent-rgb/);
  assert.match(section, /data-milaura-ecrin-profile/);
  assert.match(section, /Couper dix minutes/);
  assert.doesNotMatch(section, /Calmer l'exigence/);
});

test('the transition states the real recommendation promise', () => {
  assert.match(section, /Votre résultat se prépare/);
  assert.match(section, /actuellement disponibles/);
  assert.match(section, /transition_title == 'Nous réunissons nos énergies/);
});
