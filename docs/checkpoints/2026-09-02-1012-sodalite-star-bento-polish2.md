# Polish 2 Landing Sodalite, galerie Bento du produit star

Date : 2026-09-02 10:21 CEST

Statut : `PREVIEW PRIVEE PRETE, GO VISUEL PATRICE OUVERT`

## Demande

Transformer la photo unique du produit star Horus en galerie Bento sur mobile et desktop, sans modifier le reste de la Landing Sodalite.

## Perimetre exact

- `sections/milaura-sodalite-landing.liquid`
- aucun nouveau media ; la galerie utilise les images Shopify du produit deja publiees ;
- aucune modification de texte, prix, produit, collection, template JSON, Home, Admin, panier, Ads ou live.

## Composition retenue

- image principale : couverture produit sur fond mineral clair ;
- image secondaire : mise en situation portee ;
- image tertiaire : produit sur bois sombre ;
- desktop : image principale sur toute la largeur du Bento, deux vues secondaires en dessous ;
- mobile : meme hierarchie, avec une proportion `5 / 6` pour garder la galerie compacte ;
- repli automatique vers une image unique si un futur produit ne possede pas de vues secondaires.

## Preflight et publication privee

- base Git : `4957ba431669ffe4fb4954e7dd9cd8eed40f37db` ;
- branche : `codex/milaura-sodalite-star-bento-20260902` ;
- worktree : `/Users/paesano/Documents/MilAura website/_worktrees/sodalite-star-bento-20260902` ;
- theme prive : `200259043675` ;
- le fichier du theme prive etait identique au fichier canonique avant le push ;
- push cible avec `--nodelete --strict --only sections/milaura-sodalite-landing.liquid` ;
- pullback prive identique au fichier local, SHA-256 `86aa179dfd0e0c86b1c1163fc8851f7c99bd15746a19bd8233d2d397f19f75d2` ;
- aucun push live ; le fichier du theme live reste identique a l integration, SHA-256 `48ffa901989121a05cd7480f0b59a265f0695e4d136f874d2f40853dc1cd3c44`.

## Verifications

- `git diff --check` : PASS ;
- `shopify theme check` : 0 erreur, 16 warnings historiques hors lot ;
- 360, 390, 430 et 1440 px : trois images chargees, aucun overflow horizontal ;
- desktop 1440 px : galerie et panneau texte alignes, aucun chevauchement ;
- le lien unique de la galerie continue de pointer vers `/products/bracelet-horus-dore-en-sodalite-6-mm` ;
- console du theme prive : aucune erreur ni alerte ;
- aucun mouvement ou script ajoute.

## Preview

`https://milaura-2.myshopify.com/collections/selection-de-karine?preview_theme_id=200259043675`

## Gates restantes

1. GO visuel Patrice.
2. Integration dans `codex/milaura-integration` par le proprietaire du checkout principal.
3. GO live separe avant toute mutation du theme `190430282075`.
