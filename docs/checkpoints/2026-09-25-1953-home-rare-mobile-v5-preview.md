# Home Pieces rares mobile V5, preview du 2026-09-25 19:53 CEST

## Statut

- `PASS TECHNIQUE`
- `GO VISUEL PATRICE REQUIS`
- Preview privee uniquement : theme Shopify `201918447963`, `MilAura Rare Mobile V2 2026-09-25`.
- Theme public `190430282075` intact.

## Decision visuelle

- La variante avec une grande zone noire ajoutee au bas de l image est refusee.
- La premiere creation verticale en gros plan est retenue pour cet essai.
- Le collier en lapis-lazuli est le sujet principal. Le mannequin reste un support.
- Le texte est superpose en HTML et CSS, jamais grave dans l image.
- Copy mobile : `Pieces rares & de collection` et `Voir la selection`.
- Le bureau valide reste hors perimetre.

## Fichiers du lot

- `assets/milaura-hero-pieces-rares-lapis-mobile-v5.webp`
- `sections/milaura-hero-portal.liquid`
- le seul bloc `hero_homepage` de `templates/index.json`
- `docs/workstreams.md`
- ce checkpoint

## Preuves

- Asset mobile : `941 x 1672`, SHA-256 `113818f91f39c501be1734218a6b009d258e8b45a83eac6280421dddb3b571c7`.
- `git diff --check` : PASS.
- JSON Shopify extrait et valide avec `jq` : PASS.
- Theme Check : `0` erreur, `16` avertissements historiques hors lot.
- Push cible avec `--nodelete --strict` : trois fichiers de theme uniquement sur `201918447963`.
- Pullback Shopify : egalite SHA-256 `3/3` entre le worktree et la preview.
- QA mobile `390 x 844` et `430 x 932` : source V5 chargee, image `941 x 1672`, titre mobile visible, titre et description bureau masques, CTA vers `/collections/pieces-rares`, aucune largeur parasite, console sans avertissement ni erreur.
- QA bureau `1440 x 900` : source bureau `milaura-hero-pieces-rares-lapis.webp` chargee en `1672 x 941`, titre `Certaines pierres meritent une place a part.`, description et CTA `Decouvrir les pieces rares` visibles, version mobile masquee, aucune largeur parasite.

## Gate restant

Patrice doit juger la composition sur la preview. Aucun deploiement live n est autorise sans son GO visuel puis son GO live explicites.
