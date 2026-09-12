# Trois ressources pierre dans le menu Guides

Date : 2026-09-12 19:29 CEST
Statut : `VALIDE PAR PATRICE, INTEGRE, POUSSE ET LIVE VERIFIE`

## Resultat

Patrice a choisi de regrouper les trois nouvelles ressources dans le menu `Guides` :

- `Trouver votre pierre` vers `/pages/trouver-votre-pierre` ;
- `Atlas des pierres` vers `/pages/atlas-des-pierres` ;
- `Entretien des pierres` vers `/pages/entretien-des-pierres`.

Elles apparaissent ensemble en tete du sous-menu sur desktop et mobile. Les entrees existantes restent en place. Le footer, le diagnostic, les autres menus, les pages, les produits et les Ads n ont pas ete modifies.

## Git et deploiement

- branche source : `codex/milaura-owned-assets-20260910` ;
- commit fonctionnel : `9acd623a` ;
- integration distante avancee par fast-forward jusqu a `9acd623a` avant la cloture documentaire ;
- fichier deploye : `snippets/milaura-nav-curated-links.liquid` ;
- theme public : `190430282075` ;
- push cible avec `--nodelete`, `--strict` et `--allow-live` ;
- sauvegarde avant mutation : `/private/tmp/milaura-guides-nav-live-before-20260912.UeLjFl` ;
- pullback : `/private/tmp/milaura-guides-nav-live-pullback-20260912.h0QJkV` ;
- blob pullback et blob Git identiques : `4c6ef3b504d7401cc2efd27ace56565a21536319`.

## Verification

- `python3 tools/check_copywriting.py` : PASS, 348 fichiers ;
- Theme Check : 0 erreur, 16 avertissements historiques dans huit fichiers ;
- `git diff --check` : PASS ;
- desktop 1440 px : menu `Guides` lisible et trois liens correctement ordonnes ;
- mobile 390 px : panneau principal et groupe `Guides` ouverts sans rupture visuelle ;
- les trois liens ont ete suivis depuis le menu mobile vers les trois URL attendues ;
- titles publics conformes apres navigation ;
- journal console et erreurs navigateur vides.

Captures :

- `/private/tmp/milaura-guides-menu-desktop-20260912.png` ;
- `/private/tmp/milaura-guides-menu-mobile-expanded-20260912.png`.

## Etat final

Le correctif est ferme. Le futur quiz Ads lead-gen reste un chantier distinct.
