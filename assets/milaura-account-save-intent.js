(function () {
  'use strict';
  // 2026-09-05: temporary, explicit save request, not browsing preferences.
  var KEY = 'milauraAccountSaveIntentV1';
  var TTL = 20 * 60 * 1000;
  var PROFILES = ['serenite', 'apaisement', 'protection', 'amour', 'chance'];
  var current = null;
  var memoryIntent = null;

  function clear() {
    memoryIntent = null;
    try { window.sessionStorage.removeItem(KEY); } catch (error) {}
  }

  function read() {
    var value = memoryIntent;
    if (!value) {
      try { value = JSON.parse(window.sessionStorage.getItem(KEY)); } catch (error) {}
    }
    if (!value) return null;
    if (value.version !== 1 || !Number.isFinite(value.expiresAt) ||
        value.expiresAt <= Date.now() || value.expiresAt > Date.now() + TTL ||
        PROFILES.indexOf(value.diagnostic && value.diagnostic.profileId) < 0 ||
        typeof value.diagnostic.resultId !== 'string' ||
        !Number.isFinite(Date.parse(value.diagnostic.timestamp)) ||
        !value.diagnostic.accountPersonalization ||
        value.diagnostic.accountPersonalization.status !== 'granted') {
      clear();
      return null;
    }
    return value;
  }

  function prepare(diagnostic, ownerId) {
    if (!diagnostic || PROFILES.indexOf(diagnostic.profileId) < 0) throw new Error('Refaites le quiz pour obtenir votre résultat.');
    var timestamp = new Date(diagnostic.timestamp).toISOString();
    var previous = read();
    if (previous && previous.diagnostic.profileId === diagnostic.profileId &&
        previous.diagnostic.timestamp === timestamp &&
        (!previous.ownerId || previous.ownerId === ownerId)) return previous;
    var retained = {};
    ['profileId', 'profileName', 'stone', 'intention', 'mantra', 'ritual', 'timestamp'].forEach(function (key) {
      retained[key] = diagnostic[key];
    });
    retained.timestamp = timestamp;
    retained.resultId = window.crypto.randomUUID();
    retained.revision = 1;
    retained.accountPersonalization = {
      schemaVersion: 1,
      status: 'granted',
      source: 'quiz_account_save_button',
      acceptedAt: new Date().toISOString(),
    };
    var value = { version: 1, ownerId: ownerId || null, expiresAt: Date.now() + TTL, diagnostic: retained, stored: true };
    memoryIntent = value;
    try {
      window.sessionStorage.setItem(KEY, JSON.stringify(value));
    } catch (error) {
      value.stored = false;
    }
    return value;
  }

  window.addEventListener('milaura:quiz-result', function (event) { current = event.detail; });
  window.MilauraAccountSaveIntent = Object.freeze({
    read: read,
    prepare: prepare,
    clear: clear,
    current: function () { return current; },
  });
})();
