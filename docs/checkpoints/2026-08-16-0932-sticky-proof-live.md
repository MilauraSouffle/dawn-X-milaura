# Sticky PDP et rail de reassurance mobile live

Date : 2026-08-16 09:32 CEST

## Autorisation

Patrice a donne son GO live explicite le 2026-08-16 dans la tache `Sticky proof polish 2026-08-16`.

## Integration

- Commit de lot : `e0699827` sur `codex/milaura-sticky-proof-20260816`.
- Commit integre : `396502cf` sur `codex/milaura-integration`.
- Le conflit documentaire limite a `docs/workstreams.md` a ete resolu en conservant le lot Ruban de parure V2 et son gate de theme.
- Le worktree Sticky etait propre avant son retrait.

## Deploiement live

- Boutique : `milaura-2.myshopify.com`.
- Theme live : `dawn-X-milaura/main`, ID `190430282075`.
- Push strict avec `--only`, `--nodelete`, `--strict` et `--allow-live`.
- Fichiers deployes :
  - `sections/milaura-sticky-bar.liquid`
  - `sections/milaura-dock.liquid`
  - `sections/milaura-product-experience.liquid`
  - `assets/milaura-product-experience.css`
  - `assets/milaura-product-experience.js`
- Pullback cible depuis le live dans un dossier temporaire : 5 fichiers sur 5 identiques octet par octet aux sources integrees.

## Validation technique

- `git diff --check` : OK.
- `node --check assets/milaura-product-experience.js` : OK.
- Shopify Theme Check : 0 erreur et 17 avertissements historiques dans 9 fichiers hors lot.
- Branche `codex/milaura-integration` poussee sur GitHub.

## QA publique Playwright

Route : `https://milaura.fr/products/collier-obsidienne-noire-boho-dore`.

- Mobile 360, 390 et 430 px : sticky cachee avant le CTA, visible apres le CTA et cachee apres retour en haut.
- Jonction mobile sticky/dock : recouvrement mesure a `-1 px`, sans fente visible.
- Mobile 390 px : rail de reassurance mesure a 390 px visibles pour 1470 px de contenu.
- Indicateur : progression mesuree de `0` a `0.4537037037` apres deplacement horizontal ; curseur dimensionne a `26.5306122449 %`.
- Desktop 1440 px : sticky bidirectionnelle validee, dock absent et indicateur mobile masque.
- Console publique : 0 erreur, 2 avertissements reseau sans lien avec le lot.

## Perimetre preserve

- Aucun fichier Ruban Vivant ou moteur `milaura-recommendation*` modifie ou deploye.
- Aucun template produit, Hero, panier, navigation, produit, stock, prix ou reglage Shopify modifie.

## Etat final

Le lot Sticky proof polish est integre, pousse, live, relu depuis Shopify et valide publiquement. Le theme de developpement `199421952347` est libere pour la session Ruban de parure V2 sous son propre gate de preview. Le live reste reserve au master.
