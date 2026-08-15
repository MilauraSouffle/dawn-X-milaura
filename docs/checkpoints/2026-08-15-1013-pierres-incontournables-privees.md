# Pierres incontournables, routes privées

Date : 2026-08-15 10:13 CEST
Branche : `codex/milaura-navigation-home-v2-20260814`
Thème isolé : `199957807451`
Live : `190430282075`, non modifié

## Autorisation

Patrice valide la sélection suivante pour le menu Pierres : Améthyste, Quartz rose, Œil de tigre, Lapis-lazuli, Aigue-marine et Aventurine.

Cette autorisation couvre la préparation des deux routes manquantes et leur contrôle sur la preview Navigation V2. Elle ne vaut pas publication des collections ni push du thème live.

## Contrôle catalogue

La lecture Shopify Admin du 2026-08-15 compte 596 produits et 27 collections avant mutation.

Le comptage par titre seul a été rejeté, car il mélangeait bijoux, baguettes minérales et objets de rituel.

| Pierre | Actifs portant la pierre | Bijoux canoniques retenus | Exclus |
| --- | ---: | ---: | --- |
| Œil de tigre | 13 | 4 | 1 baguette, 8 objets hors bijou |
| Aventurine et aventurine verte | 16 | 7 | 3 baguettes, 6 objets hors bijou |

Les produits en brouillon, les statuts, les stocks, les titres, les prix et les metafields produit n ont pas été modifiés.

## Mutations Shopify Admin

Deux collections manuelles ont été créées sans publication :

| ID | Route réservée | Membres | Template | Statut éditorial |
| --- | --- | ---: | --- | --- |
| `678216892763` | `/collections/par-pierre-oeil-de-tigre` | 4 bijoux actifs | `milaura-pierre` | `draft` |
| `678216925531` | `/collections/par-pierre-aventurine` | 7 bijoux actifs | `milaura-pierre` | `draft` |

Chaque collection possède les onze champs canoniques `milaura.*` : `stone_handle`, `stone_intro`, `stone_benefits`, `comment_porter`, `stone_composition`, `stone_colors`, `care`, `source_urls`, `content_updated_at`, `content_status` et `seo_primary_query`.

Les sources minéralogiques et gemmologiques répondent en HTTP 200. Aucun appel de publication n a été exécuté.

## Thème et navigation

Le groupe auparavant nommé `Nos pierres les plus recherchées` devient `Pierres incontournables` afin de ne pas présenter une estimation tierce comme un classement Google certain.

Ordre retenu :

1. Améthyste ;
2. Quartz rose ;
3. Œil de tigre ;
4. Lapis-lazuli ;
5. Aigue-marine ;
6. Aventurine.

Le template du guide A à Z prépare également les entrées Aventurine et Œil de tigre. Shopify renvoie une page 404 pour une collection non publiée, même avec `preview_theme_id`. Les deux liens du menu privé utilisent donc temporairement les ancres `#guide-aventurine` et `#guide-oeil-de-tigre`. Ils devront être remplacés par les routes canoniques dans la même fenêtre que la publication des collections.

## Blocages avant publication

- Œil de tigre reste sous le seuil catalogue de cinq bijoux actifs ;
- Aventurine atteint le seuil minimum avec sept bijoux, mais pas le seuil préféré de huit ;
- aucune des deux collections ne possède encore de hero photographique dédié ;
- Search Console et Google Keyword Planner ne sont pas disponibles pour mesurer l intention transactionnelle propre à MilAura ;
- la publication des collections, leur entrée dans le sitemap et tout push live exigent un nouveau GO explicite.

## Validation

- JSON du template A à Z : valide après retrait du commentaire Shopify ;
- `git diff --check` : succès ;
- Theme Check : 293 fichiers, zéro erreur, 18 avertissements historiques dans dix fichiers hors lot ;
- push ciblé de trois fichiers sur le thème isolé `199957807451` ;
- pullback des trois fichiers : parité octet par octet ;
- thème détecté dans le navigateur : `199957807451` ;
- menu desktop 1440 px : six liens visibles dans l ordre approuvé ;
- menu mobile 390 x 844 : accordéon ouvert, six liens visibles, zéro débordement horizontal et un seul H1 sur la homepage ;
- test Shopify d une collection privée : page 404, ce qui justifie le fallback de preview ;
- fallback Aventurine : HTTP rendu, H1 `Guide des pierres`, ancre `#guide-aventurine` atteinte ;
- ancres `#guide-aventurine` et `#guide-oeil-de-tigre` présentes ;
- aucune requête navigateur vers les deux collections privées depuis le fallback ;
- les deux handles privés sont absents du sitemap collections ;
- les quatre sources éditoriales répondent en HTTP 200 ;
- thème live `190430282075` non modifié.
