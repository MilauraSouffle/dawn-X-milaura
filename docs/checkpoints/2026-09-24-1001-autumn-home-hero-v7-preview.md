# Hero Home Automne V7 branche et flaque en preview

Date : 2026-09-24 10:01 CEST

Statut : `PREVIEW TECHNIQUE PASS, GO VISUEL PATRICE EN ATTENTE, NON LIVE`

## Decision visuelle appliquee

- La branche desktop V6 et ses deux bracelets suspendus restent inchanges.
- Les deux bracelets entre-meles du bord gauche sont retires.
- Le bracelet Iris sur socle est retire de cette version.
- La flaque et les boucles en grenat restent un calque independant, reduit et decale vers le coin inferieur droit.
- Le bord inferieur de la flaque sort du cadre.
- La branche et les bracelets ne traversent plus la navigation.
- Le mobile conserve uniquement la video Automne de fond pendant la validation de la composition desktop.

## Essai Higgsfield

Deux montages Kling 3.0 Omni Edit ont ete generes a partir de la video Automne et des references bijoux, pour un cout total de 32 credits.

1. Le premier rendu est rejete : la flaque et les boucles apparaissent seulement en fin de sequence.
2. Le second stabilise les objets sur les 8 secondes et fournit une bonne direction de composition, mais sa branche aplatie dans la video remonte dans la navigation.

Les rendus Higgsfield restent des actifs d exploration. La preview active revient au montage controlable par calques : video source, branche validee et flaque repositionnee.

Actifs Higgsfield locaux non actifs dans le template :

- `assets/milaura-automne-2026-higgsfield-kling-v7-desktop.mp4`
- `assets/milaura-automne-2026-higgsfield-kling-v7b-desktop.mp4`
- `assets/milaura-automne-2026-higgsfield-kling-v7b-loop-desktop.mp4`
- `assets/milaura-automne-2026-higgsfield-kling-v7b-loop-desktop-poster.webp`

## Verification

- Theme prive : `201797534043`.
- Preview : `https://milaura-2.myshopify.com?preview_theme_id=201797534043`.
- Bureau controle dans le navigateur a `1280 x 720`.
- Navigation lisible et degagee.
- Aucun bracelet au bord gauche et aucun socle.
- Boucles et flaque separees du bracelet grenat.
- Video : lecture automatique et nouvelle image de feuilles apres plus de 8 secondes ; les bijoux restent fixes.
- HTML : attribut `loop` present et JavaScript force `video.loop = true` a chaque chargement de source.
- `git diff --check` : PASS.
- Theme Check : zero erreur et seize avertissements historiques hors lot.
- Pullback prive : `assets/milaura-home-seasonal.css` et `templates/index.json` identiques au worktree.
- Theme public `190430282075` : intact.

## Gate suivante

Attendre le GO visuel explicite de Patrice. Aucun commit d integration et aucun deploiement live avant ce GO, puis un GO live distinct.
