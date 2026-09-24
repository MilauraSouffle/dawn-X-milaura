# Hero Home Automne V5 en preview

Date : 2026-09-24 09:04 CEST

Statut : `PREVIEW TECHNIQUE PASS, GO VISUEL PATRICE EN ATTENTE, NON LIVE`

## Demande integree

- Retirer les feuilles attachees aux branches, le fond video en contient deja suffisamment.
- Conserver la flaque automnale et ses quelques feuilles tombees.
- Supprimer la forme de goutte fermee autour des boucles d oreilles.
- Poser les boucles en grenat directement sur la flaque.
- Donner aux cinq bracelets une physique credible : chaque branche traverse visuellement le bracelet, avec des passages devant et derriere le bois et une suspension lisible.

## Composition V5

- Trois branches nues et fines, sous la navigation.
- Cinq bracelets distincts repartis du centre vers les extremites, sans amas compact.
- Une paire de boucles en grenat posee dans une flaque aux reflets orange en bas de la composition.
- Aucun texte ni bijou dans la zone de navigation.
- Fond video Automne conserve, lecture automatique et boucle continue.

Actifs de preview :

- `assets/milaura-automne-2026-composition-branches-eau-desktop-v5.webp`
- `assets/milaura-automne-2026-composition-branches-eau-mobile-v5.webp`

Les medias ont ete generes avec l outil Imagegen natif, puis convertis en WebP avec transparence alpha preservee. Sources PNG : `~/.codex/generated_images/01a0d203-c498-7713-b05a-b032e52e4ed1/exec-bc28619e-80f3-4e9f-aa4a-181ed68fffe6.png` et `~/.codex/generated_images/01a0d203-c498-7713-b05a-b032e52e4ed1/exec-4ebc6e86-d817-42cb-88f5-f51c3b52dba0.png`.

## Verification

- Theme de preview : `201797534043`.
- URL : `https://milaura-2.myshopify.com?preview_theme_id=201797534043`.
- Bureau : `1440 x 900`, aucun debordement horizontal, image complete, navigation lisible.
- Mobile : `390 x 844`, aucun debordement horizontal, le media mobile V5 est bien servi.
- Video : `loop=true`, `paused=false`, `readyState=4` pendant la QA.
- Les boucles reposent directement sur la flaque ; aucun contenant en forme de goutte.
- Les cinq bracelets sont visibles et les branches nues passent dans leurs ouvertures.
- JavaScript valide, template JSON valide apres retrait de son en-tete de commentaire Shopify et `git diff --check` sans erreur.
- Theme Check : zero erreur, seize avertissements historiques hors lot.
- Journal navigateur : aucune erreur ; seules les informations de hot reload desactive du theme prive sont presentes.
- Pullback du theme prive : six fichiers actifs sur six identiques au worktree.
- Le theme public `190430282075`, Shopify Admin et les medias V3 de la landing Automne sont intouches.

Captures locales :

- `/private/tmp/milaura-autumn-hero-v4-20260924/desktop-1440x900-v5-clean.png`
- `/private/tmp/milaura-autumn-hero-v4-20260924/mobile-390x844-v5-clean.png`

## Gate suivante

Attendre le GO visuel explicite de Patrice sur la V5 avant toute integration, tout commit de release ou toute publication live.
