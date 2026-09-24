# Hero Home Automne mobile, raccord final

Date : 2026-09-24 12:14 CEST

Statut : `FERME, INTEGRE, LIVE ET VERIFIE`

## Correction livree

- La flaque mobile occupe maintenant toute la largeur et sort des deux bords sans coupure rectangulaire.
- Les boucles conservent leur echelle reduite validee. Un second rendu du meme actif ne revele que la zone d eau basse, avec un fondu vertical et des bords lateraux fondus.
- Le controle video mobile reste une cible tactile de `44px` et remonte a `11px` sous le filet de navigation.
- La branche, la copie, le CTA et la composition desktop validee restent inchanges.

## Perimetre exact

- `assets/milaura-home-seasonal.css`
- `sections/milaura-selection-atelier.liquid`

## Git et Shopify

- Commit source : `6c3e9794` sur `codex/milaura-autumn-mobile-live-hotfix-20260924`.
- Commit integration : `044714db` sur `codex/milaura-integration`, pousse sur origin.
- Preview privee : theme `201797534043`.
- Theme public : `190430282075`, push cible des deux fichiers avec `--nodelete`, `--strict` et `--allow-live`.
- Pullback live identique `2/2` : CSS `caa70289d3f48e1f3b2e23af20f1631996af2ffd122351325b6d30de86bd685f`, Liquid `50c3b455ba89eb4c85d53986fa3e08f5e720127dfcc04822c736ad4b970e9f5c`.

## Verification

- Contrat CSS : PASS.
- `git diff --check` : PASS.
- Theme Check : zero erreur et seize avertissements historiques hors lot.
- Preview mobile `393 x 706` : largeur document `393px`, hero `574px`, flaque pleine largeur de `432px` positionnee de `x=-20px` a `x=413px`, aucun debordement document.
- Controle mobile : `44 x 44px`, position `x=337px`, `y=134px`, soit `11px` sous le filet de navigation mesure a `y=123px`.
- Public mobile `393 x 706` sans barre preview : rendu conforme, `loop=true`, video en lecture, aucun debordement horizontal.
- Desktop `1440 x 900` : calque d eau mobile masque, hero et composition visuelle inchanges.

## Etat local preserve

- Les modifications documentaires et exports concurrents du checkout d integration n ont pas ete stages ni modifies.
- Les actifs V4 a V7 non suivis du worktree restent hors commit.
- Le cache Shopify CLI fautif a ete deplace de facon recuperable vers `/private/tmp/shopify-cli-theme-conf-config-20260924T1209.json.bak`; Shopify CLI a recree son fichier de preference courant.
