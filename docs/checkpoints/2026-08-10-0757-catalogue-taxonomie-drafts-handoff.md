# Handoff catalogue, taxonomie et drafts MilAura

Date : 2026-08-10 07:57 CEST
Branche : `codex/milaura-reconcile-2026-08-07`
Thème live : `190430282075`
Thème de développement : `199421952347`

## Résultat

La phase 2 est clôturée comme fondation structurelle privée. Les données, définitions, briefs et previews sont cohérents. Le dispositif n'est pas déclaré public terminé.

## Mutations Shopify Admin cumulées dans la phase catalogue

### Définitions

- 20 définitions de metafields produit créées le 2026-08-09.
- 11 définitions de metafields collection créées le 2026-08-09.
- 4 définitions alignées le 2026-08-10, sans changement de type ni de valeur produit :
  - produit `stone_handle` ;
  - produit `stone_handles` ;
  - produit `stone_benefits` ;
  - collection `stone_handle`.

### Lot témoin produit

- 20 produits actifs uniquement.
- 20 catégories Shopify standard ajoutées.
- 20 valeurs `catalogue_family=bijou` ajoutées.
- 13 valeurs `product_type_handle` normalisées vers `boucles-oreilles`.
- 7 intentions existantes copiées vers les champs canoniques, sans réinterprétation.
- Aucun statut, stock, prix, titre ou contenu produit modifié.
- Aucun des 312 produits brouillons modifié.

### Collections

- 5 collections créées hors Boutique en ligne : `bagues-pierres`, `par-pierre-agate`, `par-pierre-quartz-rose`, `par-pierre-lapis-lazuli`, `par-pierre-amazonite`.
- Membres : 3, 10, 8, 6 et 6.
- État final : 404 public, absentes du sitemap, hors navigation.
- Aucune collection publiée le 2026-08-10.

### Pages

- 0 Page Shopify créée.
- 0 Page Shopify publiée.
- Motif : scope de lecture des pages indisponible, donc impossibilité de prouver le statut privé par API.

## Thème

### Live

Le seul fichier de la phase catalogue poussé sur le live avant ce dernier lot est `layout/theme.liquid`, pour noindex des recherches et tags legacy, titres sans duplication de marque et schema global factuel. Aucun push live n'a eu lieu le 2026-08-10.

### Développement uniquement

Neuf fichiers ont été poussés de façon ciblée puis relus :

- `sections/milaura-collection-vertus.liquid` ;
- `sections/milaura-collection-intro.liquid` ;
- `sections/milaura-catalogue-hub.liquid` ;
- `templates/collection.milaura-pierre.json` ;
- `templates/collection.milaura-type.json` ;
- `templates/page.milaura-bijoux-pierre.json` ;
- `templates/page.milaura-choisir-pierre.json` ;
- `templates/page.milaura-pierres-naissance.json` ;
- `templates/page.milaura-cadeaux-mariage.json`.

Le template pierre rend conditionnellement : introduction, composition minérale, couleurs, symbolique traditionnelle, comment porter, entretien, sources et date de mise à jour. Le template type ne rend aucun bloc d'introduction si la description est vide.

## Contenu seulement documenté

- quatre routes de hubs et leurs handles enfants réservés ;
- matrice d'activation des 13 collections publiques sans SEO explicite complet ;
- liste exacte des 18 baguettes actives à sortir du catalogue public ;
- route canonique Bagues et fallback temporaire ;
- architecture Pinterest, Merchant, inventaire et automatisations sur le même contrat de clés.

## Dépendances

### Inventaire

- généralisation de la taxonomie au-delà du lot témoin ;
- retrait, brouillon ou archive des baguettes ;
- activation des bagues, hubs et sélections naissance/mariage ;
- métadonnées définitives des collections publiques.

### Accès externes

- GSC : décisions URL, redirections et signaux organiques ;
- GA4 : mesure des parcours ;
- Merchant Center : flux et diagnostics ;
- Pinterest : catalogue, tag, groupes et publication.

## Validation

- Theme Check : 0 erreur, 29 avertissements historiques sur 282 fichiers.
- JSON : contrats et 6 templates validés.
- `git diff --check` : propre.
- Pullback : les 9 fichiers du thème de développement sont identiques aux fichiers locaux.
- Previews : HTTP 200, thème `199421952347`, un H1 par hub, aucune sélection produit rendue.
- Public : 5 collections en 404, 5 absentes du sitemap, 20 collections publiques dans le sitemap.
- Admin final : 589 produits, 26 collections, 51 définitions produit, 11 définitions collection.

## Fichiers concurrents exclus du commit

- `assets/milaura-cart-rewards-auto.js` ;
- `config/settings_schema.json` ;
- `snippets/milaura-cart-rewards-drawer.liquid`.

Ils appartiennent au chantier panier/livraison et ne doivent pas être staged par cette clôture.

## Risques restants

- `templates/index.json` contient encore `shopify://collections/bagues` ; la correction est réservée au lot UI/UX.
- Le schema produit conserve les faits de livraison contradictoires laissés à la session dédiée.
- `/pages/bracelet-amethyste` et ses affirmations restent à traiter après contrôle GSC.
- Les 13 collections publiques n'ont pas reçu de metas définitives.
- Journal, netlinking externe, tracking, Pinterest et Ads ne sont pas exécutés.
