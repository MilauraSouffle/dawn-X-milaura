# Fondation CSS et pilote visuel MilAura

Date : 2026-09-23 10:53 CEST

Statut : PREVIEW TECHNIQUE PRETE, GO VISUEL PATRICE EN ATTENTE

## Source et isolation

- Branche : `codex/milaura-css-foundations-20260923`.
- Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/css-foundations-20260923`.
- Base : `d48f4bbc`, alignee sur `origin/codex/milaura-integration`.
- Theme public de reference : `190430282075`.
- Theme de developpement frais : `201797534043`.
- Les 12 fichiers cibles ont ete tires du theme public et compares avant edition. Les 12 etaient identiques a la branche.
- Les anciennes previews n ont pas servi de reference visuelle.

## Resultat du pilote

- Trois gros blocs de CSS Liquid ont ete retires de leurs sections.
- 1 638 lignes de CSS inline ont ete supprimees des trois sections et consolidees dans des assets namespaces.
- `milaura-destination-landing.css` porte le moteur commun Sodalite et Automne.
- `milaura-home-seasonal.css` porte la campagne Automne de la Home.
- `milaura-home-karine-selection.css` porte la selection de Karine.
- Aucun `!important`, aucune couleur hexadecimale et aucune famille de police en dur dans ces trois nouveaux assets.
- Les titres Sodalite et Automne utilisent Gloock pour le sujet et Dancing Script uniquement pour la signature.
- Les titres ne recouvrent plus les bijoux.
- Le produit vedette utilise un titre court, `Bracelet Horus` ou `Bracelet Iris`, tout en conservant le nom complet pour le lien accessible.
- La description Automne du Bracelet Iris a ete recalee sur les trois pierres et les dimensions du produit.
- Sur la Home mobile, la description saisonniere precede maintenant le CTA.
- La selection de Karine utilise `--milaura-quartz-rose-poudre`, comme le bandeau commercial, et ne porte plus de bordure de section.

## Verification

- `python3 tests/css_contract_test.py` : PASS, trois assets conformes et trois sections sans CSS inline.
- `git diff --check` : PASS.
- `shopify theme check` : PASS sans erreur, 16 avertissements historiques hors lot.
- QA navigateur : `390 x 844` puis `1440 x 900`.
- Routes verifiees : `/`, `/collections/selection-automne`, `/collections/par-pierre-sodalite`.
- Largeur de document egale a la largeur du viewport, sans debordement horizontal.
- Console navigateur : aucune erreur ni alerte.
- Traits calcules sur les sections destination et Karine : `0px`.
- Fond calcule de la selection de Karine : `rgb(240, 217, 224)`.

## Gates restantes

- GO visuel de Patrice sur le theme de developpement.
- Integration Git dans le checkout principal apres validation.
- Eventuel push sur le theme public uniquement apres un GO live explicite distinct.

Le theme public `190430282075`, Shopify Admin, les produits, les prix, les stocks, les medias, la navigation et les Ads sont restes intouches.
