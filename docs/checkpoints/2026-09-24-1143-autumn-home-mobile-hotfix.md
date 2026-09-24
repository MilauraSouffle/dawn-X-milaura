# Hotfix Hero Home Automne mobile unifie

Date : 2026-09-24 11:43 CEST

Statut : `FERME, INTEGRE, LIVE ET VERIFIE`

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

## Integration et release live

- Commit theme : `317e6214` (`fix: unify autumn hero on mobile`).
- Branche hotfix poussee : `codex/milaura-autumn-mobile-live-hotfix-20260924`.
- Integration fast-forward et push sur `codex/milaura-integration`.
- Theme public : `190430282075`.
- Push cible sans suppression : `assets/milaura-home-seasonal.css` et `sections/milaura-selection-atelier.liquid` uniquement.
- Pullback live : `/private/tmp/milaura-autumn-mobile-live-pullback-sihBpX`, `2/2` fichiers identiques.

## QA publique apres release

- Route publique : `https://milaura.fr/`, sans parametre de preview.
- Mobile `390 x 844` : largeur document `390px`, hero `390 x 920px`, aucun debordement horizontal.
- Copie mobile : largeur `358px`, CTA `273 x 48px`, bas du CTA a `766px`, donc au-dessus du dock fixe.
- Controle video mobile : `44 x 44px`, pictogramme pause visible, `aria-pressed=true` et libelle accessible `Mettre la video en pause`.
- Video mobile : lecture active et `loop=true`.
- Desktop `1440 x 900` : largeur document `1440px`, hero `1440 x 848px`, composition conservee, pictogramme mobile masque et libelle texte `Pause` maintenu.
- Aucun bandeau de preview detecte dans le contenu de la page.

## Gate

Patrice a demande explicitement la correction rapide du live. Le hotfix a ete limite aux deux fichiers de theme nommes, puis valide par pullback et QA publique responsive.
