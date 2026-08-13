# MilAura - Correctif grille et carrousel Nouveautes

Date : 2026-08-13 19:59 CEST

Statut : correctif local valide, aucun deploiement Shopify

## Perimetre

Le lot corrige uniquement `sections/milaura-featured-products.liquid`, utilise sur la homepage pour `Ca vient d'arriver`.

Le chantier Heroes editoriaux reste proprietaire du theme de developpement `199421952347`. Aucun push Shopify, live ou developpement, n'a ete effectue par ce lot.

## Correction

- a partir de 990 px, les huit produits utilisent une grille de quatre colonnes et deux rangees ;
- la grille reste contenue dans la largeur de 1400 px de la section ;
- aucune carte ne depasse ou n'est coupee ;
- de 769 a 989 px, le carrousel horizontal reste actif avec des cartes de 220 px ;
- sous 769 px, les largeurs mobiles existantes, le scroll tactile et le scroll-snap sont conserves ;
- les points de navigation sont masques uniquement lorsque la grille desktop est active.

## Verification

- `git diff --check` : OK ;
- `shopify theme check --fail-level error` : 0 erreur, 29 avertissements historiques ;
- simulation publique par injection temporaire du CSS dans Playwright, sans mutation Shopify ;
- 1280 px : grille 4 x 2, contenu 1192 px dans 1192 px, aucun debordement ;
- 1024 px : grille 4 x 2, contenu 936 px dans 936 px, aucun debordement ;
- 390 px : `overflow-x: auto`, contenu 1569 px dans 360 px, plage de scroll 1209 px et deplacement horizontal confirme.

## Restant

- integration par le proprietaire du checkout principal ;
- apercu Shopify sur `199421952347` uniquement lorsque le lot Heroes libere explicitement le theme ;
- aucun live avant le controle visuel et l'autorisation explicite de Patrice.
