# Réaudit catalogue MilAura et plan P1

Date : 2026-09-23 08:56 CEST

## Résultat

Le réaudit demandé depuis le handoff `2026-09-23-0827-catalogue-audit-post-seasonal-handoff.md` est terminé en lecture seule sur la base `d48f4bbc` et le thème public `190430282075`.

- Les six matrices ont été régénérées sous `docs/audits/2026-09-23-catalogue-category-completeness/`.
- Les releases Automne, Sodalite permanente, Sélection de Karine et Sélections saisonnières sont confirmées publiques.
- Les 7 anciens brouillons sont maintenant `ACTIVE`, publics, au sitemap et en HTTP 200. Aucun retour en brouillon n'a été effectué.
- 41 rattachements actifs manquent dans 17 landings pierre.
- 9 rattachements commerciaux automatiques manquent.
- Grenat reste absent de A à Z et sa landing contient 1 produit sur 10 attendus.
- Sodalite est bien reliée depuis A à Z mais sa landing reste à 9 produits sur 12.
- Les deux 404 internes, la collection Bols chantants vide et l'absence globale de JSON-LD Product restent ouverts.

## Plan

Le rapport propose quatre lots P1 séparés : distribution Admin, annuaire A à Z, correction des deux liens 404 et restauration du schéma Product. Les arbitrages de taxonomie et la collection vide restent des lots distincts.

La première gate est la confirmation par Patrice du statut des 7 produits. Aucun produit, tag, metafield, rattachement, collection ou fichier thème n'a été modifié par ce réaudit.

## Préservation

- Aucun merge ou rebase du commit `c5a41ff0`.
- Aucun ancien template `collection.selection-de-karine.json` restauré.
- Aucun ancien média Sodalite restauré.
- Aucun fichier de la session de polish visuel repris.
- Checkout principal sale laissé intact.
