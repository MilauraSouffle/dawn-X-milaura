# Bijoux par pierre : profondeur mobile et selection bijoux

Date : 2026-09-09 16:04 CEST
Statut : PREVIEW TECHNIQUE VALIDEE, ATTENTE DE VALIDATION VISUELLE PATRICE

## Resultat en preview

La page `/pages/bijoux-par-pierre` conserve les trente-neuf pierres sans imposer un rail mobile de trente-neuf grandes cartes.

- Mobile jusqu a 749 px : huit cartes illustrees dans le rail natif, puis un controle `Voir toutes les pierres` ouvrant les trente-neuf liens dans une liste compacte sur deux colonnes.
- Tablette et bureau des 750 px : les trente-neuf cartes restent visibles dans la grille existante, sans controle supplementaire.
- Apres les pierres : selection bornee de quatre produits issus de `bijoux-pierres-naturelles`, avec le titre `Tous les bijoux` et le CTA `Voir tous les bijoux`.
- Aucun JavaScript ajoute et aucun nouveau composant produit cree. La selection reutilise `milaura-featured-products`.
- Le generateur conserve maintenant la section produits lors d une regeneration du template.

## Fichiers du lot

- `sections/milaura-stone-choice-landing.liquid`
- `assets/milaura-stone-choice-landing.css`
- `templates/page.milaura-bijoux-pierre.json`
- `scripts/build_stone_landings.py`
- `docs/workstreams.md`
- `docs/checkpoints/2026-09-09-1604-stone-choice-mobile-depth-preview.md`

## Preview Shopify

- Theme de recette : `200974958939`, `MilAura Toutes les pierres 2026-09-05`.
- URL : `https://milaura.fr/pages/bijoux-par-pierre?preview_theme_id=200974958939&stone-depth=preview-v1`
- Preflight : les trois fichiers Shopify cibles correspondaient a la base avant push.
- Push cible avec `--nodelete` et `--strict`.
- Pullback : section, CSS et template identiques au local, trois fichiers sur trois.
- Theme live `190430282075` non touche par ce lot.

## Verifications

- `git diff --check` : PASS.
- JSON : deux sections ordonnees `landing`, `products`; trente-neuf pierres; huit cartes mobiles; quatre produits.
- Syntaxe Python du generateur : PASS.
- Copywriting MilAura : PASS, 338 fichiers controles.
- Theme Check : zero erreur, seize avertissements historiques dans huit fichiers hors lot.
- Preview 360 px : zero debordement global, huit cartes visibles, trente-neuf liens compacts, quatre produits.
- Preview 390 px : rail reduit de 12117 px a 2192 px de deplacement maximal, soit environ 82 pour cent de moins.
- Preview 430 px : zero debordement global, huit cartes visibles, trente-neuf liens compacts, quatre produits.
- Preview 768 px : zero debordement global, trente-neuf cartes en trois colonnes, controle mobile masque, quatre produits.
- Preview 1440 px : zero debordement global, trente-neuf cartes en quatre colonnes, controle mobile masque, quatre produits.
- Ouverture et fermeture du repertoire testees; trente-neuf liens visibles une fois ouvert.
- Aucune erreur navigateur observee.
- Captures locales : `/private/tmp/milaura-stone-depth-mobile-closed-390.png`, `/private/tmp/milaura-stone-depth-mobile-open-390.png`, `/private/tmp/milaura-stone-depth-mobile-products-clean-390.png` et `/private/tmp/milaura-stone-depth-desktop-products-1440.png`.

## Gates et retour arriere

Implementation et preview technique : PASS.

Validation visuelle Patrice, integration et live : OUVERTS. Aucun deploiement live avant validation explicite de cette iteration.

Le retour arriere preview consiste a repousser les trois versions de base de la branche d integration. Aucun fichier mort ni script supplementaire n a ete introduit.
