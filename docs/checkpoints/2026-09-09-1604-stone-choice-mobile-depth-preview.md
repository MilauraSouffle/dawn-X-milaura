# Bijoux par pierre : profondeur mobile et selection bijoux

Date : 2026-09-09 16:04 CEST
Derniere mise a jour : 2026-09-10 08:40 CEST
Statut : FERME, INTEGRE, POUSSE ET LIVE VERIFIE

## Resultat livre

La page `/pages/bijoux-par-pierre` conserve les trente-neuf pierres sans imposer un rail mobile de trente-neuf grandes cartes.

- Mobile jusqu a 749 px : huit cartes illustrees dans le rail natif, puis un controle `Voir toutes les pierres` ouvrant les trente-neuf liens dans une liste compacte sur deux colonnes.
- Tablette et bureau des 750 px : les trente-neuf cartes restent visibles dans la grille existante, sans controle supplementaire.
- Apres les pierres : selection bornee de quatre produits issus de `bijoux-pierres-naturelles`, avec le titre `Nos plus belles créations du moment` et le CTA `Voir tous les bijoux`.
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
- Ajustement du titre pousse ensuite sur le seul template de preview; preflight conforme et pullback exact apres push.

## Integration et live Shopify

- Patrice a donne le GO commit, push et live le 2026-09-10.
- Branche source poussee, puis alignee sur les quatre commits concurrents de l integration sans modifier les fichiers Shopify du lot.
- Integration canonique poussee au commit `4d7df8a3`.
- Preflight live : les trois fichiers du theme `190430282075` correspondaient exactement a la version de base `52e02c68`; aucune divergence concurrente.
- Push live strict et cible de trois fichiers avec `--allow-live`, `--nodelete` et `--strict`.
- Pullback live : trois fichiers sur trois identiques au commit integre.
- Fichiers live et blobs confirmes : CSS `11b136a0`, section `48a52d47`, template `1e673f2c`.

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
- Microcopie corrigee apres retour de Patrice : le titre nomme la selection de quatre creations et le CTA nomme le catalogue complet.
- Nouveau titre controle a 390 et 1440 px : retour naturel, aucun debordement, CTA et quatre produits conserves.
- Public 390 px : theme `190430282075`, un H1, huit cartes illustrees sur trente-neuf, rail natif de 2192 px, repertoire ouvert avec trente-neuf liens, quatre produits et CTA vers `/collections/bijoux-pierres-naturelles`.
- Public 1440 px : theme `190430282075`, trente-neuf cartes visibles en quatre colonnes, repertoire mobile masque, quatre produits et nouveau titre presents.
- Deplacement horizontal public mesure de 0 a 302 px.
- Aucune erreur navigateur observee.
- Captures locales : `/private/tmp/milaura-stone-depth-mobile-closed-390.png`, `/private/tmp/milaura-stone-depth-mobile-open-390.png`, `/private/tmp/milaura-stone-depth-mobile-products-clean-390.png`, `/private/tmp/milaura-stone-depth-mobile-title-v2-390.png`, `/private/tmp/milaura-stone-depth-desktop-products-1440.png` et `/private/tmp/milaura-stone-depth-live-mobile-products-390.png`.

## Gates et retour arriere

Implementation, preview, validation visuelle Patrice, integration et live : PASS.

Le theme public `190430282075` sert la version validee et le lot est ferme.

Le retour arriere consiste a repousser les trois blobs de base `da731a50`, `1f0e8096` et `5d0d6b9d` sur le theme live, de facon ciblee. Aucun fichier mort ni script supplementaire n a ete introduit.
