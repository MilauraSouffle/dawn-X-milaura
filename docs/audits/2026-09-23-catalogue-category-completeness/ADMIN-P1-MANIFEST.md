# Manifeste d'exécution Shopify Admin P1

Date : 2026-09-23

Base de contrôle : extraction Admin et storefront du 2026-09-23 à 08:47 CEST, complétée par une inspection authentifiée en lecture seule de Shopify Admin le 2026-09-23.

Autorisation : Patrice confirme que les 7 produits concernés restent `ACTIVE` et autorise le démarrage du plan P1. Aucun statut produit ne doit changer.

## Contrat idempotent

- Ne jamais supprimer un tag, un metafield, un produit ou un rattachement dans ce lot.
- Avant chaque ajout, vérifier que la valeur ou le rattachement n'existe pas déjà.
- Conserver tous les tags présents et ajouter uniquement les tags listés dans `stone-metafield-tag-gaps.csv`.
- Ajouter les 41 rattachements `landing-pierre` listés dans `active-product-category-gaps.csv`.
- Ajouter le rattachement supplémentaire du bracelet Howlite et Pierre de lave à `par-pierre-pierre-de-lave` après correction de sa vérité produit.
- Ne pas modifier prix, stock, statut, handle, publication, médias, SEO produit, type de produit ou canaux.
- Ne pas toucher à `Bols chantants`. Patrice prévoit de supprimer cette destination lui-même.

## Vérité produit Howlite et Pierre de lave

Produit : `bracelet-dore-en-howlite-et-pierre-de-lave-6-mm`

État actuel contrôlé :

- titre : Howlite et Pierre de lave ;
- `milaura.materials` : `howlite`, `pierre-de-lave`, `acier-inoxydable-304` ;
- `milaura.stone_handles` : `howlite` ;
- tag pierre : `pierre:howlite` ;
- description pierre : Howlite blanche ;
- absence des landings Howlite et Pierre de lave.

État cible :

- `milaura.stone_handles` : `howlite`, `pierre-de-lave` ;
- tags pierre : conserver `pierre:howlite`, ajouter `pierre:pierre-de-lave` ;
- ajouter aux collections manuelles `par-pierre-howlite` et `par-pierre-pierre-de-lave`.

## Collections manuelles à compléter

| Handle | ID Shopify | Ajouts |
| --- | --- | ---: |
| `par-pierre-aigue-marine` | `677833834843` | 1 |
| `par-pierre-aventurine` | `678216925531` | 3 |
| `par-pierre-chrysocolle` | `679806107995` | 1 |
| `par-pierre-cornaline` | `679806206299` | 3 |
| `par-pierre-cristal-de-roche` | `679806239067` | 4 |
| `par-pierre-grenat` | `679806370139` | 9 |
| `par-pierre-howlite` | `679806435675` | 2 |
| `par-pierre-labradorite` | `679806533979` | 5 |
| `par-pierre-lapis-lazuli` | `677666816347` | 2 |
| `par-pierre-obsidienne` | `679806632283` | 1 |
| `par-pierre-oeil-de-tigre` | `678216892763` | 2 |
| `par-pierre-onyx` | `679806697819` | 1 |
| `par-pierre-pierre-de-lune` | `679806763355` | 1 |
| `par-pierre-quartz-rose` | `677666783579` | 1 |
| `par-pierre-rhodonite` | `679806861659` | 1 |
| `par-pierre-sodalite` | `679358234971` | 3 |
| `par-pierre-tourmaline` | `679806894427` | 1 |
| `par-pierre-pierre-de-lave` | `679806730587` | 1 supplémentaire après correction Howlite et Pierre de lave |

Total cible : 42 ajouts de rattachement, dont 41 écarts visibles dans la matrice initiale et 1 écart secondaire masqué par le metafield incomplet.

Les cinq collections absentes de l'extraction GraphQL initiale ont été retrouvées dans Shopify Admin et contrôlées comme manuelles : Aigue-marine, Aventurine, Lapis-lazuli, Œil de tigre et Quartz rose.

## Tags pierre

Les 20 lignes de `stone-metafield-tag-gaps.csv` sont confirmées par le titre et la description pierre des produits. Elles ajoutent uniquement les tags `pierre:*` manquants et conservent les metafields actuels.

Ajouter en plus sur `bracelet-dore-en-howlite-et-pierre-de-lave-6-mm` :

- tag `pierre:pierre-de-lave` ;
- valeur `pierre-de-lave` dans `milaura.stone_handles`.

Les quatre collections commerciales automatiques doivent ensuite se recalculer depuis les tags :

- `bracelets-aigue-marine` ;
- `bracelets-cornaline` ;
- `bracelets-lapis-lazuli` ;
- `bracelets-onyx`.

## Validation après écriture

1. Vérifier que les 21 produits modifiés sont toujours `ACTIVE`.
2. Vérifier 0 suppression de tag et 0 changement de prix, stock, publication ou média.
3. Contrôler 42 rattachements présents dans les 18 collections manuelles.
4. Contrôler 0 divergence entre `stone_handles` et tags `pierre:*` sur les produits du lot.
5. Contrôler Grenat à 10 produits uniques et Sodalite à 12 produits uniques sur le storefront.
6. Contrôler les quatre collections commerciales automatiques après recalcul.
7. Régénérer les six matrices et conserver les éventuels arbitrages P2 séparément.
