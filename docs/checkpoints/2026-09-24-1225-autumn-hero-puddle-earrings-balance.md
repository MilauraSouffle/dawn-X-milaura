# Hero Home Automne, equilibre flaque et boucles

Date : 2026-09-24 12:25 CEST

Statut : `FERME, INTEGRE, LIVE ET VERIFIE`

## Correction

- Mobile : les boucles conservent exactement leur taille et leur position validees.
- Mobile : la zone visible de la flaque passe d environ `117px` a environ `78px`, tout en restant raccordee aux deux bords.
- Desktop : la flaque conserve son empreinte et son placement precedents.
- Desktop : les boucles passent d une echelle `0.72` a `0.60`, soit une reduction d environ 17 pour cent.
- Un masque compose conserve l eau desktop autour des boucles sans laisser apparaitre l ancienne grande paire en transparence.
- Branche, copie, CTA et controle video inchanges.

## Perimetre

- `assets/milaura-home-seasonal.css` uniquement.

## Git et Shopify

- Commit source : `b16417b7` sur `codex/milaura-autumn-mobile-live-hotfix-20260924`.
- Commit integration : `6ca0cce7` sur `codex/milaura-integration`, pousse sur origin.
- Preview privee : theme `201797534043`.
- Theme public : `190430282075`, push cible avec `--nodelete`, `--strict` et `--allow-live`.
- Pullback live identique `1/1`, SHA-256 `748909066a770ead7d0b4583b43fd9eaedfda2794aac9ae7a435c40986ca42b4`.

## Verification

- Contrat CSS : PASS.
- `git diff --check` : PASS.
- Theme Check : zero erreur et seize avertissements historiques hors lot.
- Preview puis live public sans barre preview en `393 x 706` : largeur document `393px`, boucles inchangees, flaque reduite, `loop=true`, video en lecture.
- Preview puis live public en `1440 x 900` : boucles reduites, flaque maintenue, aucune silhouette fantome et largeur document `1440px`.
- Aucun autre fichier theme, produit, prix, stock, media produit, Shopify Admin ou Ads modifie.

## Etat local preserve

- Les modifications documentaires et exports concurrents du checkout d integration ne sont ni stages ni modifies.
- Les actifs V4 a V7 non suivis du worktree restent hors commit.
- Les preferences Shopify CLI defectueuses ont ete sauvegardees de facon recuperable sous `/private/tmp/shopify-cli-theme-conf-config-20260924T1220.json.bak`, `/private/tmp/shopify-cli-theme-conf-config-20260924T1224.json.bak`, `/private/tmp/shopify-cli-theme-conf-config-20260924T1226.json.bak` et `/private/tmp/shopify-cli-theme-conf-config-20260924T1229.json.bak`.
