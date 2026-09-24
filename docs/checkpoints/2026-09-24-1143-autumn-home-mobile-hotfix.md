# Hotfix Hero Home Automne mobile unifie

Date : 2026-09-24 11:43 CEST

Statut : `PREVIEW MOBILE PASS, HOTFIX LIVE AUTORISE`

## Retour corrige

- Le media, le texte et le CTA ne forment plus deux sections distinctes.
- Le hero mobile est une composition unique de `920px` maximum, avec la video en plein fond.
- Les calques branche et flaque occupent toute la largeur ; la flaque sort du bord inferieur.
- Le H1, la signature, la description et le CTA sont superposes dans la zone centrale libre.
- Le bouton texte `PAUSE` est remplace sur mobile par un controle circulaire de `44px` avec pictogrammes lecture et pause.
- Le desktop conserve son rendu et son bouton texte existants.

## Fichiers cibles

- `assets/milaura-home-seasonal.css`
- `sections/milaura-selection-atelier.liquid`
- `docs/workstreams.md`
- `docs/checkpoints/2026-09-24-1143-autumn-home-mobile-hotfix.md`

## Verification preview

- Theme prive : `201797534043`.
- Mobile : `390 x 844`, largeur document `390px`, hero `920px`, aucun debordement horizontal.
- Copie : largeur `358px`, CTA `273 x 48px`, tous les elements restent dans le hero.
- Controle video : `44 x 44px`, icone pause visible pendant la lecture, libelle accessible conserve.
- Video : lecture active et `loop=true`.
- Desktop : `1440 x 900`, largeur document `1440px`, hero `848px`, composition visuelle inchangee et pictogramme masque.
- Contrat CSS : PASS.
- `git diff --check` : PASS.
- Theme Check : zero erreur et seize avertissements historiques hors lot.

## Gate

Patrice demande explicitement la correction rapide du live. Commit, integration, push cible des deux fichiers de theme, pullback et QA publique sont autorises dans ce perimetre.
