# Landing Pieces rares, release live finale

Date : 2026-09-25 19:54 CEST

## Decision

- GO commit, push et live explicite de Patrice.
- Theme public cible : `190430282075` (`dawn-X-milaura/main`).
- URL publique : `https://milaura.fr/collections/pieces-rares`.

## Git

- Base d integration relue avant push : `6576f9e6`.
- Commit fonctionnel : `1cdb2433` (`feat: integrate rare pieces landing polish`).
- Branche de release poussee : `codex/milaura-rare-pieces-live-20260925`.
- Branche canonique avancee en fast-forward : `codex/milaura-integration`.
- Le checkout principal sale et ses changements concurrents sont restes intacts.

## Publication ciblee

Fichiers differents relus avant publication puis deployes avec `--allow-live --nodelete --strict` :

- `assets/milaura-rare-pieces-landing.css`
- `sections/milaura-rare-pieces-landing.liquid`
- `templates/collection.milaura-pieces-rares.json`

Le fichier `snippets/milaura-nav-curated-links.liquid` etait deja identique sur le live et n a pas ete repousse.

## Pullback

- `assets/milaura-rare-pieces-landing.css` : `4d7ec6e179c0f60052edc0d8db792384f7abfa332ed27f454dd4dacb7db46a36`
- `sections/milaura-rare-pieces-landing.liquid` : `879d08675ea4da773acc05ede514653d89daeed9e0b7850ad1d517f9e6856cd3`
- `templates/collection.milaura-pieces-rares.json` : `79b183f9ee7ab6265ffcb946d7f53c05fd618681d3ecad3eb9b7304457f83a6c`
- Verdict : identique `3/3` entre Git et Shopify apres publication.

## Validation

- Tests specialises : `8/8`.
- JSON : valide apres retrait de l entete Shopify generee.
- `git diff --check` : PASS.
- Theme Check : zero erreur; seize avertissements historiques hors perimetre.
- QA publique isolee, sans cookie de preview ni preview bar :
  - `390 x 844` : hero `680px`, titre a `513px`, transform image `matrix(1.18, 0, 0, 1.18, 0, -144.432)`.
  - `527 x 683` : hero `620px`, titre a `455px`, transform image `matrix(1.18, 0, 0, 1.18, 0, -263.376)`.
  - `1440 x 900` : hero `480px`, transform image `none`, bloc produit star `724px`.
  - trois reperes presents, trois images de geode chargees, six cartes de collection, H1 unique, aucun debordement horizontal et aucune erreur navigateur.

## Etat final

`LIVE VERIFIE`. Le produit reste le sujet : le collier domine le hero mobile et desktop, le mannequin sert uniquement de support.
