# Checkpoint Home Hero title live

Date : 2026-08-16 11:06 CEST

## Perimetre livre

- Lot fonctionnel : `d7168bbe`.
- Integration : `9c5897b7` sur `codex/milaura-integration`.
- Fichier theme deploye uniquement : `sections/milaura-hero-portal.liquid`.
- Theme Shopify live : `190430282075`.
- Preview conservee : `200008270171`.
- Aucun changement de texte, image, navbar, bandeau, corps descriptif, mobile, section suivante ou composant PDP.

## Autorisations

- GO visuel explicite de Patrice obtenu le 2026-08-16.
- GO live explicite de Patrice obtenu le 2026-08-16.

## Validation technique

- Le blob integre est identique au lot approuve : `0369593dd109cf2b2ccb3808a4a3e7e1681b0b3f`.
- Preflight live avant deploiement : blob attendu `2412c1bda4c7f1c1aafe97610052e9c1a92dd076`, aucun changement concurrent detecte.
- `git diff --check` : OK.
- `shopify theme check` : 0 erreur, 17 avertissements historiques dans 9 fichiers hors lot.
- Push live cible avec `--only`, `--nodelete`, `--strict` et `--allow-live` : OK.
- Pullback live : 1/1 fichier byte-identique au fichier local, blob `0369593dd109cf2b2ccb3808a4a3e7e1681b0b3f`.

## QA publique

- 2048 x 1040 : titre en trois lignes, 68 px, bloc 720 px, aucun overflow horizontal.
- 1440 x 900 : titre en trois lignes, 62.64 px, aucun overflow horizontal.
- 1280 x 800 : titre en trois lignes, 55.68 px, aucun overflow horizontal.
- 430 x 932 : composition mobile conservee en trois lignes, 39 px, aucun overflow horizontal.
- 390 x 844 : composition mobile conservee en trois lignes, 39 px, aucun overflow horizontal.
- 360 x 800 : composition mobile conservee en trois lignes, 37 px, aucun overflow horizontal.

## Etat final

- Le polish desktop du titre Hero est integre, pousse Git et deploye sur le live.
- Le mobile reste volontairement inchange : sa composition etait deja equilibree et sa QA publique est validee.
- Worktree retire proprement et branche locale ephemere supprimee ; branche distante conservee pour tracabilite.
