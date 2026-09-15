# Handoff MilAura : cookies Safari et navigation bracelets

Date : 2026-09-15 17:56 CEST

Statut : `FERME, INTEGRE, POUSSE ET LIVE VERIFIE`

## Objet et limites

Patrice a signale deux regressions Safari apres un rollback theme : la bannière de consentement reapparaissait a chaque page et les acces `Pour qui ?`, `Femme`, `Homme`, `Mixte` etaient absents de `/collections/bracelets-pierres`.

Le lot est volontairement limite a deux fichiers de theme et a la documentation. Aucun produit, metachamp, tag, collection Shopify, prix, stock, media, statut, cross-sell, Search & Discovery, pixel, Flow ou Ads n a ete modifie. Le metafield canonique reste `milaura.recipient_handles` avec les valeurs controlees existantes.

## Correctif cookies Safari

- Source : branche `codex/milaura-cookie-safari-persistence-20260915`, worktree `/Users/paesano/Documents/MilAura website/_worktrees/cookie-safari-20260915`, commit source `8d2c2f9b`.
- Fichier live unique : `assets/milaura-cookie-consent.js`.
- La decision explicite continue de passer par Shopify Customer Privacy. Une fois son callback reussi, le marqueur d interface est ecrit dans un cookie first-party partage sur `.milaura.fr` et dans le stockage local. Le marqueur ne masque donc jamais la bannière apres un echec d enregistrement Shopify.
- Verification preview : accepter puis recharger PASS ; refuser puis recharger PASS ; stockage local seul avec consentement Shopify vide et bannière demandee PASS.
- Integration `4f82b309`, documentation `3b861322`. Push live cible sur le theme `190430282075` avec `--allow-live --nodelete --only assets/milaura-cookie-consent.js`. Pullback live bit a bit identique. Le Safari reel ne montrait plus la bannière apres navigation finale.

## Correctif navigation bracelets Safari

- Source : branche `codex/milaura-bracelet-filter-safari-20260915`, worktree `/Users/paesano/Documents/MilAura website/_worktrees/bracelet-filter-safari-20260915`, commit source `28fe276d`.
- Fichier live unique : `sections/milaura-collection-filters.liquid`.
- Diagnostic : le HTML public Safari contenait deja les trois liens, mais le Safari reel ne les rendait pas. La cause la plus probable est le masquage par un bloqueur de contenu du nom de classe generique `filters__audience`.
- Correctif : remplacement exclusif des classes d affichage par `milaura-recipient-*`. Les URLs de filtre Shopify, la condition de collection `bracelets-pierres`, les valeurs et l etat actif restent inchanges.
- Verification preview Safari : `Pour qui ?`, `Femme`, `Homme`, `Mixte` visibles. Le lien Homme conserve `filter.p.m.milaura.recipient_handles=homme`, l etat actif et un H1 a `13 modeles`.
- Integration `92dabbe9`, documentation `27eb516f`. Push live cible sur le theme `190430282075` avec `--allow-live --nodelete --only sections/milaura-collection-filters.liquid`. Pullback live bit a bit identique. Safari live, hors preview, affiche les trois liens.

## Validations communes

- `shopify theme check --no-color` : 0 erreur, 16 avertissements historiques.
- Theme live : `dawn-X-milaura/main` `190430282075`.
- Branche d integration propre et alignee avec origin avant la documentation de cloture, HEAD observe `c7c97980`.
- Les deux worktrees source ci-dessus sont propres et integres. Ils sont conserves, sans suppression de branche ni nettoyage sans GO distinct de Patrice.

## Decision produit a garder pour plus tard

Aucune collection Homme n est creee dans ce lot. Recommandation seulement : si Patrice la valide, creer dans un chantier distinct une collection automatique `Bracelets homme en pierres naturelles`, alimentee par le metafield existant avec la valeur exacte `homme`, puis l ajouter sous `Bijoux`. Avec 13 bracelets Homme observes le 2026-09-15, une collection bracelets est honnete ; un hub large `Bijoux homme` serait premature tant que l assortiment ne couvre pas plusieurs types de bijoux.

## Prompt de reprise

```text
Reprends MilAura depuis docs/checkpoints/2026-09-15-1756-safari-cookies-bracelet-filter-live-handoff.md. Commence en lecture seule par AGENTS.md, docs/project-state.md, docs/codex-handoff.md, git status --short --branch -uall et le storefront live. Les correctifs Safari cookies et navigation bracelets sont deja live sur le theme 190430282075 : ne redeploie pas les deux fichiers par deduction. Le metafield recipient_handles et le filtre Homme restent la source de verite. La collection Bracelets homme est une recommandation strategique, pas une autorisation de creation : ne la creer qu apres une demande explicite de Patrice, un audit actuel de l assortiment et un lot Shopify separe. Preserve le checkout ancien, les produits, les Flows, l Admin et les travaux concurrents.
```
