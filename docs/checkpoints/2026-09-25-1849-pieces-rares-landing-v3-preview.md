# Pieces rares, V3 compacte en preview

Date : 2026-09-25 18:49 CEST

## Retour traite

- Le Hero V2 reste trop haut.
- Le bento V2 reste visuellement faible : trois vues similaires se chevauchent sans hierarchie et la vue de detail domine la piece.
- La section geode doit tenir dans un viewport bureau courant.

## Resultat

- Hero bureau fixe a `480px` sur `1440 x 900`.
- Les trois reperes de selection se terminent a `677px` et sont tous visibles dans le premier viewport.
- Bento reconstruit en grille : une vue principale complete a gauche, une vue de profil et une vue de detail empilees a droite.
- Aucun positionnement absolu des tuiles, aucune superposition et aucune ombre.
- Les trois images utilisent `object-fit: contain` pour ne plus couper la geode.
- Galerie geode : `410px` sur bureau et `359px` sur mobile `390 x 844`.
- Section geode complete : `645px` sur bureau.
- Surface generale conservee en blanc pur calcule `rgb(255, 255, 255)`.

## Verification

- `node --test tests/rare-pieces-landing.test.mjs` : `8/8`.
- `git diff --check` : PASS.
- Theme Check : aucune erreur ; seize avertissements historiques hors lot.
- Push strictement cible sur `assets/milaura-rare-pieces-landing.css` vers le theme prive `201797534043` avec `--nodelete`.
- La relecture Shopify CLI a rencontre son erreur locale de stockage connue. Le CSS minifie servi par le CDN a ete relu directement et contient le contrat V3 : Hero `480px`, grille `1.35fr / 0.85fr`, vue principale sur deux lignes et images en `contain`.
- QA navigateur `1440 x 900` et `390 x 844` : aucun debordement horizontal.
- Hero charge : `1672 x 941`. Trois vues geode chargees : `835 x 835`, `360 x 360`, `360 x 360`.
- Theme public `190430282075` : intact.

## Preview

`https://milaura-2.myshopify.com/collections/pieces-rares?preview_theme_id=201797534043`

## Gate suivant

Attendre le GO visuel explicite de Patrice. Aucun deploiement sur le theme public avant ce GO.
