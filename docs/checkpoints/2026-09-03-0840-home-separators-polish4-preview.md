# Polish 4 Home : separateurs editoriaux fixes

Date : 2026-09-03 08:40 CEST

## Demande validee

- Remplacer les raccords incoherents entre les grandes sections de la Home par un espace court contenant un filet or pleine largeur.
- Supprimer l animation de progression au scroll.
- Appliquer le meme systeme sur desktop et mobile.
- Nettoyer le code devenu inutile sans toucher aux contenus, produits, images, autres pages, Admin ou Ads.

## Implementation

- Un composant unique `milaura-home-transition` est utilise pour les sept raccords apres le Hero.
- La bande mesure au maximum 24 px sur desktop et 18 px sur mobile.
- Le filet utilise le token `--milaura-filet-or`, reste fixe et occupe toute la largeur.
- La couleur de fond suit la surface de la section entrante, Nacre ou Mineral.
- L observateur de scroll, les etats `is-visible`, les transformations, les transitions et l ombre decorative ont ete retires.
- `assets/milaura-home-transitions.js` est supprime du depot et n est plus charge par `layout/theme.liquid`.

## Fichiers du lot

- `assets/milaura-home-transitions.css`
- `assets/milaura-home-transitions.js` supprime
- `layout/theme.liquid`
- `sections/milaura-hero-editorial.liquid`
- `sections/milaura-selection-atelier.liquid`
- `snippets/milaura-home-transition.liquid`
- `docs/workstreams.md`
- ce checkpoint

## Controle technique avant preview

- `git diff --check` : PASS.
- `shopify theme check` : PASS, 0 erreur et 16 avertissements historiques hors lot.
- Sept raccords actifs attendus dans `templates/index.json` : selection saisonniere, parcours, creation du moment, best-sellers, nouveautes, occasions et editorial.

## Perimetre de publication

- Theme prive autorise : `200259043675` uniquement.
- Themes developpement `199421952347` et live `190430282075` interdits dans ce lot.
- Integration, live et Admin restent en attente d un GO separe de Patrice apres validation visuelle.

## Etat

Implementation locale terminee. Commit, push Git, publication privee, pullback et controles visuels restent a consigner avant remise du lien de preview.
