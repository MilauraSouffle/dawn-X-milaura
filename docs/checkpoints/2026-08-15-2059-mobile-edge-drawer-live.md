# Mobile bord a bord et panneau menu remonte

Date : 2026-08-15 20:59 CEST

## Resultat

- les conteneurs Shopify de section n'ajoutent plus 15 px de marge de chaque cote sur mobile ;
- les fonds des sections occupent maintenant toute la largeur du viewport ;
- le panneau menu commence a 8 px du haut, avec prise en charge de la zone sure iOS ;
- le logo et les espacements verticaux du panneau sont compactes sans retirer de contenu ;
- le bloc compte reste entierement visible sans defilement obligatoire a 360 et 390 px.

## Cause

Une seconde regle mobile dans `assets/milaura.css`, placee apres le premier correctif, reappliquait `15px` de padding horizontal a toutes les `.shopify-section`. Dans le panneau, la surcharge mobile conservait `96px` de padding haut, ce qui portait le contenu a 891 px pour seulement 730 px disponibles a 360 x 800.

## Perimetre

- `assets/milaura.css` ;
- `assets/milaura-navigation.css` ;
- aucun Liquid, JavaScript, Hero, dock, PDP, panier, recommandation, template, produit ou asset image.

## Git et live

- commit fonctionnel : `a1223f9f` (`fix: remove mobile gutters and compact menu`) ;
- branche de lot et `codex/milaura-integration` poussees sur `origin` ;
- theme live : `190430282075` ;
- push Shopify cible de 2 fichiers, sans suppression et sans passage par le theme de developpement ;
- sauvegarde avant live : `/private/tmp/milaura-mobile-edge-drawer-live-backup-20260815.4LprGY` ;
- pullback live : `/private/tmp/milaura-mobile-edge-drawer-live-pullback-20260815.FOdNsp` ;
- concordance : 2 fichiers sur 2 identiques.

## Validation live

- home 360 px : toutes les sections principales a `x = 0`, largeur 360 px, padding externe nul ;
- home 390 px : toutes les sections principales a `x = 0`, largeur 390 px, padding externe nul ;
- collection Bijoux 390 px : section racine pleine largeur ;
- fiche produit 390 px : Hero, sticky, experience produit, recommandations et conseil en pleine largeur ;
- panneau 360 x 800 : `scrollHeight = clientHeight = 730px`, compte visible ;
- panneau 390 x 844 : `scrollHeight = clientHeight = 774px`, compte visible ;
- aucun debordement horizontal visible ;
- aucune erreur console liee a `milaura-navigation`, `milaura.css` ou `nav-mobile-panel` ;
- `git diff --check` : conforme ;
- Theme Check : 0 erreur, 17 avertissements historiques dans 9 fichiers hors perimetre.
