# Titre du diagnostic, preview et deploiement live

Date : 2026-08-15 12:23 CEST

## Decision

Patrice a demande le 2026-08-15 de renommer l'introduction du quiz `La pierre qui vous ressemble` et de l'aligner proprement sur le nouveau branding MilAura.

## Modifications

- H1 actif remplace dans `templates/page.diagnostic-emotionnel.json` ;
- valeur par defaut synchronisee dans le schema de `sections/milaura-quiz.liquid` ;
- sous-titre harmonise en vouvoiement et recentre sur le fonctionnement concret du diagnostic ;
- CTA par defaut harmonise avec la valeur active `Commencer mon diagnostic` ;
- H1 passe de l'or en faux gras a Gloock 400, encre prune, taille et interlignage des tokens ;
- filet d'or fin ajoute sous le titre ;
- anciennes reductions mobiles a 17 et 18 px retirees afin de respecter le minimum editorial de la charte.

Le titre du Ruban Vivant reste `Composer votre ensemble`. La formule `La pierre qui vous ressemble` appartient uniquement au parcours diagnostic.

## Validation

- branche : `codex/milaura-quiz-title-20260815` ;
- commit fonctionnel : `00b0a3ee feat: align quiz introduction with brand` ;
- `git diff --check` valide ;
- JSON du template valide ;
- `shopify theme check` sans nouvelle erreur, avec 17 avertissements historiques dans 9 fichiers hors lot ;
- preview poussee uniquement sur le theme de developpement `199421952347` ;
- desktop : titre visible, Gloock 400, 53,2 px, encre prune, aucun debordement ;
- mobile 390 x 844 : titre sur deux lignes, 38 px, aucun debordement ;
- aucune erreur JavaScript ;
- pullback developpement : 2/2 fichiers strictement identiques.

## Deploiement

Patrice a donne son GO de commit, push et deploiement live le 2026-08-15.

- merge d'integration : `e2812fe1 merge: integrate quiz title branding` ;
- branche d'integration poussee sur `origin` ;
- push live cible des deux fichiers sur le theme `190430282075` avec `--allow-live --nodelete` ;
- controle public desktop : H1 correct, Gloock 400, encre prune, aucun debordement, aucune erreur JavaScript ;
- controle public mobile 390 x 844 : titre sur deux lignes, 38 px, aucun debordement, aucune erreur JavaScript ;
- pullback live : 2/2 fichiers strictement identiques.

Sauvegarde avant preview : `/private/tmp/milaura-quiz-title-dev-backup-20260815-1225`.

Pullback developpement : `/private/tmp/milaura-quiz-title-dev-pullback-20260815-1230`.

Sauvegarde avant live : `/private/tmp/milaura-quiz-title-live-backup-20260815-1240`.

Pullback live : `/private/tmp/milaura-quiz-title-live-pullback-20260815-1245`.
