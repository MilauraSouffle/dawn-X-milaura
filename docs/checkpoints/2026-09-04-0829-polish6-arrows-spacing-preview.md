# Polish 6 - fleches et respiration des introductions

Date : 2026-09-04 08:29 CEST

## Etat

- Retour Patrice : conserver le design du Polish 6, unifier les fleches vers le haut a droite et descendre les groupes surtitre/titre trop proches du bord.
- Branche : `codex/milaura-ui-hierarchy-polish6-20260903`.
- Commit fonctionnel pousse : `1c10170f`, sur base `61e9aa28`.
- Theme prive : `200259043675`. Aucun push vers le live `190430282075`.
- Preview : `https://milaura-2.myshopify.com/?preview_theme_id=200259043675`.
- Integration et live toujours en attente d'autorisation.

## Correctif

- Fleche editoriale unique dans `snippets/milaura-action-icon.liquid`, reutilisee dans les sept emplacements de code de la Home, y compris les onglets masques.
- Alias CSS d'icone devenu mort retire ; petit deplacement de survol aligne vers le haut a droite.
- Classe partagee `.milaura-section-intro` et token `--milaura-esp-chapitre: clamp(32px, 4vw, 56px)`.
- Retrait applique aux introductions des chemins de choix, best-sellers, nouveautes et occasions.
- Cause confirmee : le reset legacy de `assets/milaura.css` annulait les paddings des sections, laissant 3 px de retrait sur mobile et 6 px sur desktop.
- L'espace appartient maintenant au header interne. Les anciens paddings locaux inoperants sont supprimes, sans nouvel `!important` ni changement global des autres pages.
- Composition Aigue-marine et Karine preservee. Separateurs, surfaces, textes, prix, produits, medias, Admin et Ads intacts.

## Verification

- Avant push : 11 fichiers existants du theme prive identiques a la base Git.
- `shopify theme check` : 303 fichiers, 0 erreur et 16 warnings historiques hors lot.
- `git diff --check` : PASS.
- QA navigateur : 360, 390, 430, 768 et 1440 px, sans overflow ni erreur Liquid.
- Quatre introductions : padding de 32 px sur mobile/tablette, 56 px a 1440 px. Retrait visible du surtitre : environ 35 px a 390 px au lieu de 3 px.
- Onze icones rendues, y compris celles des panneaux masques : toutes `↗`. Huit CTA visibles : tous a 48 px de hauteur.
- Captures visuelles observees a 390 px et 1440 px : separation nacre/or conservee, respiration sur le fond de section, groupe surtitre/titre compact.
- Push strict cible sur 12 chemins avec `--nodelete --strict --only`, puis pullback 12 sur 12 identique.
- Aucun changement dans le checkout d'integration sale.

## Suite

Attendre le verdict visuel de Patrice sur la preview ajustee. Ne pas integrer ni deployer le live par inference.
