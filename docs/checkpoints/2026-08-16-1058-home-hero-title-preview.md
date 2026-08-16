# Checkpoint Home Hero title preview

Date : 2026-08-16 10:58 CEST

## Perimetre

- Branche : `codex/milaura-home-hero-title-20260816`.
- Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/home-hero-title-20260816`.
- Preview Shopify dediee : `200008270171`, dupliquee du live `190430282075`.
- Fichier theme modifie uniquement : `sections/milaura-hero-portal.liquid`.
- Aucun changement de texte, image, navbar, bandeau, corps descriptif, mobile, section suivante ou composant PDP.
- Aucun deploiement live effectue.

## Implementation

- Regle limitee a `min-width: 1101px`.
- Largeur du bloc de copy : `min(720px, 48vw)` au lieu de la limite desktop precedente de 620 px.
- Titre : largeur maximale 720 px, taille `clamp(48px, 4.35vw, 68px)`, interlettrage `-0.03em`, interligne `1.02`.
- La phrase publique, Gloock, la couleur nacre et la position gauche sont conservees.
- Resultat attendu : trois lignes, sans panneau, cadre, ombre ni nouvelle decoration.

## Validation

- `git diff --check` : OK.
- `shopify theme check` : 0 erreur, 17 avertissements historiques dans 9 fichiers hors lot.
- Push cible preview avec `--only`, `--nodelete` et `--strict` : OK.
- Pullback : blob distant byte-identique au fichier local, hash `0369593dd109cf2b2ccb3808a4a3e7e1681b0b3f`.
- QA navigateur preview :
  - 2048 x 1040 : titre en trois lignes, 68 px, bloc 720 px, aucun overflow horizontal.
  - 1440 x 900 : titre en trois lignes, 62.64 px, aucun overflow horizontal.
  - 1280 x 800 : titre en trois lignes, 55.68 px, aucun overflow horizontal.
  - 1101 et 1100 px : titre en trois lignes et aucun overflow horizontal de part et d'autre du breakpoint.
  - 820, 430, 390 et 360 px : media query desktop inactive, composition mobile conservee, aucun overflow horizontal.

## Etat

- Lot techniquement pret a integrer mais non approuve visuellement.
- Attendre le GO visuel explicite de Patrice sur `200008270171`.
- Apres GO visuel, integrer dans `codex/milaura-integration`, puis attendre un GO live distinct avant tout envoi vers `190430282075`.
