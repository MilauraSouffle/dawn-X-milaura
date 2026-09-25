# Section 2 Home : trois cartes live

Date : 2026-09-25 11:34 CEST

Statut : `LIVE DEPLOYE ET PASS TECHNIQUE, REVUE VISUELLE PATRICE ATTENDUE`

Proprietaire de la validation visuelle finale : Patrice Allie

Theme public : `190430282075`

## Resultat livre

1. Le repere `Trois facons de choisir` reste en turquoise dans la colonne droite sur bureau.
2. Le titre commercial redevient `Vous cherchez un bijou, une pierre precise ou vous avez besoin de conseils pour choisir ?`.
3. Le texte explique a nouveau la complexite du choix et l accompagnement MilAura.
4. Les trois parcours sont affiches simultanement sous forme de cartes completes sur bureau : `Choisir par bijou`, `Choisir par pierre` et `Me laisser guider`.
5. Les compositions transparentes deja validees restent utilisees. Une carte active conserve toute son intensite ; les autres restent lisibles et accessibles avec un media legerement attenue.
6. Sous `750px`, les cartes deviennent un rail tactile natif avec `overflow-x`, `scroll-snap` et apercu de la carte suivante. Le swipe met a jour l emphase active sans masquer les autres destinations.

## Fichiers fonctionnels deployes

- `assets/milaura-home-paths.css`
- `assets/milaura-home-paths.js`
- `sections/milaura-home-paths.liquid`
- `templates/index.json`

## Git et publication

- Branche source : `codex/milaura-home-paths-cards-20260925`.
- Commit fonctionnel : `4756694e`.
- Merge d integration : `a8fb2c16`.
- Branche source et branche `codex/milaura-integration` poussees.
- Deploiement direct sur le theme public, sans preview, conformement au GO explicite de Patrice.
- Commande ciblee avec `--allow-live --nodelete --strict` sur les quatre fichiers fonctionnels uniquement.
- Pullback public strictement identique `4/4`.

SHA-256 locaux et distants :

- CSS : `a5756f1bd16f3ab176d05ce6a50ae1b4979d40643b949e2e7dbe85d82714b122`
- JavaScript : `7b4c99011eda36a4de46cc28603ddd9e47d69b53dcb0b6d244c58ce0c2da98a6`
- Liquid : `f7d6b663955ba88478218e6c50740fb47c0740e0e31ae260d3e4482d06084c6d`
- template Home : `0aa86339f53a3bf8a2eea0e4b2737438d3c1e4e90d6b2d4d9a296e9e42206b5e`

## Verification

- `git diff --check` : PASS.
- `node --check assets/milaura-home-paths.js` : PASS.
- parsing JSON du template Home : PASS.
- Theme Check : `0 erreur`, `16 avertissements historiques hors lot`.
- QA publique `1280 x 720` : trois cartes de `383px`, trois images `1254 x 1254` chargees, destinations exactes, repere turquoise a droite, aucun overflow horizontal et console vide.
- Etat actif verifie sur le storefront : le survol de la carte Pierre deplace correctement l emphase sans cacher les cartes Bijou et Guide.

## Gate visuelle restante

Le GO de direction et le GO live direct sont recus. Le resultat public attend encore la revue visuelle finale de Patrice, en particulier sur son mobile reel. La surface navigateur disponible pendant ce run ne proposait pas de viewport `390px`; ne pas transformer le PASS technique et desktop en validation mobile finale.

## Hors perimetre

Aucun changement Shopify Admin, catalogue, produit, prix, stock, commande, navigation, Ads, media produit ou autre section. Les fichiers concurrents du checkout d integration restent preserves.
