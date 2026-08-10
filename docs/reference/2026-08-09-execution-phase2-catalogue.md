# Exécution phase 2 catalogue MilAura

Date : 2026-08-09
Périmètre : définitions de metafields, lot témoin de produits actifs, collections privées, contenus en brouillon, templates preview et correctif SEO technique ciblé
Thème live : `dawn-X-milaura/main`, ID `190430282075`
Thème preview : `Development (c105a8-mac-1)`, ID `199421952347`

## 1. Résultat

La phase 2 autorisée est exécutée sans publier de nouvelle collection et sans toucher aux 312 produits en brouillon.

État Shopify vérifié après exécution :

| Objet | Avant | Après |
|---|---:|---:|
| Produits Admin | 589 | 589 |
| Produits actifs | 261 | 261 |
| Produits brouillons | 312 | 312 |
| Définitions produit | 31 | 51 |
| Définitions collection | 0 | 11 |
| Collections Admin | 21 | 26 |
| Collections publiques dans le sitemap | 20 | 20 |

## 2. Définitions créées

Vingt définitions produit ont été ajoutées :

`stone_handles`, `catalogue_family`, `intention_handle`, `primary_intention`, `intention_handles`, `materials`, `colors`, `recipient_handles`, `occasion_handles`, `birth_months`, `wedding_anniversary_years`, `stone_description`, `stone_benefits`, `vertus`, `qualite`, `story_text`, `ritual_steps`, `scent_notes`, `gem_treatments`, `gem_origin`.

Onze définitions collection ont été ajoutées :

`stone_handle`, `stone_intro`, `stone_benefits`, `comment_porter`, `stone_composition`, `stone_colors`, `care`, `source_urls`, `content_updated_at`, `content_status`, `seo_primary_query`.

Contrat figé le 2026-08-10 : `stone_handle` désigne la pierre principale, `stone_handles` les pierres secondaires ou multiples, `stone_benefits` conserve le libellé public `Symbolique traditionnelle`, et `content_updated_at` est l'unique date éditoriale canonique. Référence : `docs/reference/2026-08-10-contrat-donnees-catalogue.md`.

Les champs produit destinés à la navigation et aux futures collections automatiques ont la capacité Shopify `smartCollectionCondition` activée. Les types et validations sont conservés dans :

- `config/metafields/product-metafields-definition.json` ;
- `config/metafields/collection-metafields-definition.json`.

## 3. Lot témoin de 20 produits actifs

Vingt produits uniques, tous `ACTIVE`, publiés et accessibles sur la Boutique en ligne, ont été modifiés. La première passe représente 27 écritures de metafields. La seconde passe ajoute 20 catégories Shopify standard et 20 valeurs `catalogue_family=bijou`. Aucun prix, stock, titre, description, statut ou produit brouillon n'a changé.

### 3.1 Treize normalisations de type

La valeur `milaura.product_type_handle` est passée de `boucles` à `boucles-oreilles` pour :

1. `boucles-doreilles-quartz-rose` ;
2. `boucles-doreilles-lapis-lazuli` ;
3. `boucles-doreilles-aventurine-1` ;
4. `boucles-doreilles-obsidienne-1` ;
5. `boucles-doreilles-oeil-de-tigre-1` ;
6. `boucles-doreilles-aventurine-3` ;
7. `boucles-doreilles-cornaline-1` ;
8. `boucles-doreilles-obsidienne-noire` ;
9. `boucles-doreilles-quartz-rose-2` ;
10. `boucles-doreilles-quartz-rose-3` ;
11. `boucles-doreilles-quartz-rose-4` ;
12. `boucles-doreilles-larvikite` ;
13. `boucles-doreilles-cornaline-fleur-15mm`.

### 3.2 Sept migrations d'intention sans interprétation

La valeur historique existante a été copiée vers `primary_intention` et vers la liste `intention_handles` :

| Produit | Valeur copiée |
|---|---|
| `pendentif-coeur-20mm-jaspe-rouge` | `protection` |
| `collier-boule-06mm-jaspe-rouge-a` | `ancrage` |
| `bracelet-elye-dore-nacre-oeil-de-tigre-aa` | `confiance` |
| `bracelet-elye-dore-nacre-amethyste-aa` | `sommeil` |
| `bague-azelys-doree-quartz-rose-ab` | `amour` |
| `collier-boho-dore-quartz-rose-a` | `amour` |
| `collier-obsidienne-noire-boho-dore` | `protection` |

Les valeurs ambiguës telles que `bien-etre`, `clarte`, `stress`, `equilibre`, `amour-de-soi` et `clarte-interieure` n'ont pas été remappées automatiquement.

### 3.3 Catégories produit Shopify standard

Les mêmes 20 produits ont été classés à partir de la taxonomie Shopify officielle :

| Catégorie Shopify | GID | Produits du lot |
|---|---|---:|
| Earrings | `gid://shopify/TaxonomyCategory/aa-6-6` | 13 |
| Necklaces | `gid://shopify/TaxonomyCategory/aa-6-8` | 3 |
| Bracelets | `gid://shopify/TaxonomyCategory/aa-6-3` | 2 |
| Pendants | `gid://shopify/TaxonomyCategory/aa-6-5-1` | 1 |
| Rings | `gid://shopify/TaxonomyCategory/aa-6-9` | 1 |

Couverture des 261 actifs après le lot : 25 catégories exploitables, 14 `Uncategorized`, 222 sans catégorie. Avant le lot, seuls 5 actifs avaient une catégorie exploitable. Le lot démontre le contrat, mais la généralisation reste réservée à la session inventaire.

## 4. Collections créées hors Boutique en ligne

| ID Shopify | Handle | Membres actifs | Template | Éditorial | Preuve publique |
|---|---|---:|---|---|---|
| `677666718043` | `bagues-pierres` | 3 | `milaura-type` | `draft` | 404, absent du sitemap |
| `677666750811` | `par-pierre-agate` | 10 | `milaura-pierre` | `draft` | 404, absent du sitemap |
| `677666783579` | `par-pierre-quartz-rose` | 8 | `milaura-pierre` | `draft` | 404, absent du sitemap |
| `677666816347` | `par-pierre-lapis-lazuli` | 6 | `milaura-pierre` | `draft` | 404, absent du sitemap |
| `677666849115` | `par-pierre-amazonite` | 6 | `milaura-pierre` | `draft` | 404, absent du sitemap |

Shopify crée une collection non publiée par défaut et la publication nécessite un appel séparé. Aucun appel `publishablePublish` n'a été exécuté. L'application utilisée ne possède pas le scope `read_publications`, donc le contrôle a été complété par cinq réponses HTTP 404 et par l'absence des cinq handles dans le sitemap collections, qui contient toujours 20 URLs.

Chaque collection pierre possède : introduction factuelle, symbolique explicitement non médicale, conseil de port, composition minéralogique, couleurs, entretien, URL source, date de mise à jour, statut `draft` et requête SEO principale.

Sources gemmologiques utilisées :

- GIA, quartz rose : <https://www.gia.edu/rose-quartz> ;
- GIA, lapis-lazuli : <https://www.gia.edu/lapis-lazuli> ;
- GIA, entretien du lapis-lazuli : <https://www.gia.edu/lapis-lazuli-care-cleaning> ;
- Mindat, agate : <https://www.mindat.org/min-51.html> ;
- Mindat, amazonite : <https://www.mindat.org/show.php?id=184>.

## 5. Blocage structurel Bagues

La valeur historique `product_type_handle=bague` est portée par 21 actifs, mais 18 sont des baguettes minérales et seulement 3 sont de vraies bagues. La collection privée utilise donc une sélection manuelle de 3 produits.

La session inventaire doit reclasser les 18 baguettes, documenter tailles, caractère ajustable, matière et photos, puis faire atteindre le seuil de 8 vraies bagues avant publication. Une règle intelligente fondée sur la valeur actuelle est interdite.

## 6. Templates preview

Cinq fichiers ont été poussés sur le thème de développement seulement :

- `templates/collection.milaura-pierre.json` ;
- `templates/collection.milaura-type.json` ;
- `sections/milaura-collection-intro.liquid` ;
- `sections/milaura-collection-vertus.liquid` ;
- `layout/theme.liquid`, uniquement pour validation SEO avant son push ciblé live.

Les quatre fichiers collection ont été relus depuis le thème de développement et comparés sans différence. Les anciennes promesses `Artisanat Français`, `Pierres Certifiées`, `Créations faites main en France` et `Dès 39 €` sont absentes des deux templates preview.

Liens de preview, à ouvrir dans une session Shopify autorisée :

- Pierre : <https://milaura.fr/collections/par-pierre-amethyste?view=milaura-pierre&preview_theme_id=199421952347> ;
- Type : <https://milaura.fr/collections/bracelets-pierres?view=milaura-type&preview_theme_id=199421952347> ;
- Éditeur du thème de développement : <https://milaura-2.myshopify.com/admin/themes/199421952347/editor>.

## 7. Correctif SEO technique live

Le seul fichier de thème poussé sur le thème live est `layout/theme.liquid`.

Corrections :

1. `noindex,follow` sur les recherches internes et les URLs de tag ;
2. comparaison de marque insensible à la casse pour éviter `MilAura - MilAura` ;
3. schema global réduit à `Organization`, `OnlineStore` et `WebSite` avec uniquement nom, URL, logo, langue et relation éditeur ;
4. retrait des affirmations globales non prouvées : `LocalBusiness`, certification, fabrication française, adresse, géolocalisation, horaires, fondateur, date de création et domaines de connaissance ;
5. retrait de `SearchAction`, la recherche interne étant maintenant non indexable.

Validation live :

- pullback live identique au fichier local, SHA-256 `b40ef4e7e73110da8e5c1f01f25e8e9c338334b5d0813c0dc0bfe48f9d0003c7` ;
- recherche et tag : HTTP 200 avec exactement `noindex,follow` ;
- collection et produit : HTTP 200 sans fuite de `noindex` ;
- quatre pages : une seule occurrence de `MilAura` dans le title ;
- tous les blocs JSON-LD des quatre pages se décodent sans erreur.

## 8. Validations

- Shopify Admin API `2026-07` ;
- instantanés avant et après du lot produit ;
- contrôle de concurrence par `compareDigest` ;
- catégories du lot vérifiées contre la taxonomie Shopify `2026-07` ;
- Theme Check : 276 fichiers, 0 erreur, 29 avertissements historiques dans 12 fichiers ;
- pullback du thème de développement ;
- pullback du fichier live ;
- cinq routes privées en 404 ;
- sitemap collections : 20 URLs, aucun nouveau handle ;
- rendu HTML du thème de développement puis du live.

## 9. Éléments volontairement non traités

- 312 produits en brouillon : laissés intacts pour la session inventaire ;
- prix, stock physique, coûts, livraison, frais, panier et politiques : laissés aux sessions dédiées ;
- schema produit 39 € / 4,90 € : laissé à la session livraison ;
- 13 collections publiques sans SEO explicite : briefs prêts, aucune modification publique de contenu sans décision suivante ;
- `/pages/bracelet-amethyste` : aucune redirection sans Search Console ;
- double H1 homepage : transmis à la session UI/UX, fichiers homepage protégés intacts ;
- Search Console, GA4, Merchant Center et Pinterest : toujours non vérifiés faute d'accès légitime configuré ;
- campagnes payantes : aucune créée ni lancée.

## 10. Références techniques

- Shopify, création de collection : <https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionCreate> ;
- Shopify, collections intelligentes et metafields : <https://help.shopify.com/fr/manual/custom-data/metafields/smart-collections> ;
- Shopify, capacités de metafields : <https://shopify.dev/docs/apps/build/metafields/use-metafield-capabilities> ;
- Shopify, définitions de metafields : <https://shopify.dev/docs/apps/build/metafields/definitions>.
- Shopify, taxonomie standard : <https://shopify.dev/docs/api/admin-graphql/latest/objects/taxonomy> ;
- Shopify, mise à jour de catégorie produit : <https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate>.
