# Titre du diagnostic, preview de developpement

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

Le theme live `190430282075` n'a pas ete modifie. Le lot attend le GO visuel et live explicite de Patrice sur cette preview.

Sauvegarde avant preview : `/private/tmp/milaura-quiz-title-dev-backup-20260815-1225`.

Pullback : `/private/tmp/milaura-quiz-title-dev-pullback-20260815-1230`.
