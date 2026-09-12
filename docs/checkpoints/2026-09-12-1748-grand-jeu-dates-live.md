# Grand Jeu MilAura : dates du 9 au 19 septembre live

Date : 2026-09-12 17:48 CEST

Statut : `LIVE VERIFIE, SOURCE POUSSEE, INTEGRATION A ALIGNER`

## Resultat

La landing publique du Grand Jeu affiche maintenant la periode generale du 9 au 19 septembre 2026 dans les deux heros, le texte alternatif, la phrase de periode et le footer concours.

Pour eviter toute participation apres le tirage, la phrase visible precise : `Du 9 au 19 septembre 2026 : participations jusqu’au 18 à 23 h 59, tirage le 19 à 12 h, heure de Paris.` Le reglement reste donc coherent et n a pas ete modifie.

URL : `https://milaura.fr/pages/jeu-concours-10-jours-10-cadeaux`

## Perimetre publie

- `assets/milaura-grand-jeu-2026-hero-desktop.webp`
- `assets/milaura-grand-jeu-2026-hero-mobile.webp`
- `sections/footer-group.json`
- `sections/milaura-contest-10-days.liquid`
- `sections/milaura-footer.liquid`
- `templates/page.milaura-concours-10-jours.json`

Theme live : `190430282075`, `dawn-X-milaura/main`.

## Traitement des visuels

Un essai avec l outil integre `imagegen` a correctement produit la date `19`, mais a aussi recompose les produits et la mise en page. Ce rendu a ete rejete et n a jamais ete place dans le projet ni publie.

Les deux heros finaux utilisent une retouche deterministe : le glyphe `9` deja present dans chaque image a remplace le seul glyphe `8`. Aucun produit, logo, autre texte, cadrage ou element de composition n a ete deplace. Dimensions conservees : `1920 x 1080` et `1080 x 1350`.

## Verifications

- preflight Shopify : six fichiers live conformes a la base attendue, aucun ecart concurrent ;
- controle copywriting MilAura : PASS, 338 fichiers controles ;
- JSON : PASS pour le template de page et la configuration du footer ;
- `git diff --check` : PASS ;
- `shopify theme check` : zero erreur, seize avertissements historiques hors lot ;
- push Shopify cible avec `--allow-live --nodelete --strict` : succes ;
- pullback : cinq fichiers strictement identiques et template JSON fonctionnellement identique, seul le commentaire standard Shopify differe ;
- HTTP public : nouvelle phrase, nouvel alt et footer `09 AU 19` presents ;
- CDN public : heros servis en `1920 x 1080` et `1080 x 1350`, tous deux relus visuellement avec `DU 9 AU 19 SEPTEMBRE` ;
- anciennes mentions marketing `09 AU 18` absentes des surfaces publiees du lot ;
- article 2 du reglement conserve la cloture des participations le 2026-09-18 a 23:59 et article 7 conserve le tirage le 2026-09-19 a 12:00.

SHA-256 du pullback :

- hero bureau : `e7a3dd6016f3fbae8c1f568adb880b52d9c99612832bf38221e48990c0fe8e40` ;
- hero mobile : `f9d98d10ea34136fd82fc902510ce657819eb3634be81772182797cdcdf64af7` ;
- footer config : `15de6497d0cf684c9cddda933787193ec05f6619ca0d0f1ad1c079d562808f41` ;
- section landing : `7285f2d59129f982b4a4f76071e627e00d8f6c262712f5768ccdccd76473ed87` ;
- section footer : `c67304a23f7c7e69323560339f6cadbf1a03a5e9415c2924bdec71208f771c`.

## Git et limites

- worktree : `/Users/paesano/Documents/MilAura website/_worktrees/contest-date-20260912` ;
- branche : `codex/milaura-contest-date-20260912` ;
- commit fonctionnel pousse : `75410371` ;
- base : `origin/codex/milaura-integration` au commit `a41129e0` ;
- le checkout principal sale n a pas ete modifie ;
- aucune publication sociale, Story, commentaire, publicite, budget, produit, prix ou stock modifie.
