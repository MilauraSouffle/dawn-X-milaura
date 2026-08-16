# Ruban V2 - matrice commerciale Vague 1

Date de décision : 2026-08-16

## Décision

La Vague 1 couvre 9 fiches produit réparties dans 4 familles cohérentes. Elle crée 6 associations réciproques, soit 12 placements dirigés, avec un maximum de 2 compléments par fiche.

Le périmètre est volontairement resserré. Les ventes observées ne sont pas assez nombreuses pour piloter seules une personnalisation statistique : 3 articles nets et 37,70 EUR sur les 30 derniers jours, 12 articles nets et 118,11 EUR sur les 365 derniers jours. La sélection combine donc disponibilité publique, cohérence de parure, finition métal et fidélité des médias.

## Matrice approuvée

| Famille | Source Shopify | Compléments exacts |
| --- | --- | --- |
| Obsidienne | `10557516644699` Collier obsidienne noire boho doré | `10357431206235` Boucles obsidienne noire 8 mm ; `10357456601435` Bracelet obsidienne flocon 6 mm |
| Obsidienne | `10357431206235` Boucles obsidienne noire 8 mm | `10557516644699` Collier obsidienne noire boho doré ; `10357456601435` Bracelet obsidienne flocon 6 mm |
| Obsidienne | `10357456601435` Bracelet obsidienne flocon 6 mm | `10557516644699` Collier obsidienne noire boho doré ; `10357431206235` Boucles obsidienne noire 8 mm |
| Aigue-marine dorée | `10637459095899` Bracelet doré aigue-marine | `10637436584283` Boucles dorées aigue-marine |
| Aigue-marine dorée | `10637436584283` Boucles dorées aigue-marine | `10637459095899` Bracelet doré aigue-marine |
| Améthyste argentée | `10637436977499` Bague argent 925 améthyste | `10637436715355` Collier argenté améthyste |
| Améthyste argentée | `10637436715355` Collier argenté améthyste | `10637436977499` Bague argent 925 améthyste |
| Aventurine verte dorée | `10557523099995` Collier aventurine verte boho doré | `10557518381403` Bracelet aventurine verte Halo doré |
| Aventurine verte dorée | `10557518381403` Bracelet aventurine verte Halo doré | `10557523099995` Collier aventurine verte boho doré |

## Preuves au 2026-08-16

- Les 9 produits sont publics, publiés et disponibles dans le storefront.
- L'admin Search & Discovery a confirmé la persistance des 8 matrices nouvelles. La matrice du collier obsidienne était déjà conforme et n'a pas été réenregistrée.
- Les 9 endpoints publics `intent=complementary` renvoient les IDs attendus dans le bon ordre, sans produit supplémentaire : 9/9 exacts.
- Les 5 valeurs `milaura.recommendation_cutout` ont été enregistrées, puis relues dans l'admin après rechargement de chaque fiche produit.
- Les fragments Liquid publics `milaura-recommendation-fragment` servent les 5 fichiers exacts depuis `/cdn/shop/files/`. Ils n'utilisent donc plus le fallback d'asset du thème pour ces produits.
- Le thème, les prix, le stock, le statut produit et le live n'ont pas été modifiés dans ce lot.

## Détourages validés

Les cinq fichiers suivants ont été comparés aux médias catalogue officiels : objet, pierre, fermoir ou monture et finition correspondent.

| Produit | Fichier validé | État Shopify |
| --- | --- | --- |
| `10357431206235` Boucles obsidienne | `assets/milaura-reco-cutout-obsidienne-earrings-v1.png` | Enregistré, relu, servi publiquement |
| `10637459095899` Bracelet aigue-marine | `assets/milaura-ribbon-cutout-aigue-marine-bracelet-v1.png` | Enregistré, relu, servi publiquement |
| `10637436584283` Boucles aigue-marine | `assets/milaura-ribbon-cutout-aigue-marine-earrings-v1.png` | Enregistré, relu, servi publiquement |
| `10637436977499` Bague améthyste | `assets/milaura-ribbon-cutout-amethyste-ring-v1.png` | Enregistré, relu, servi publiquement |
| `10637436715355` Collier améthyste | `assets/milaura-ribbon-cutout-amethyste-necklace-v1.png` | Enregistré, relu, servi publiquement |

La définition `milaura.recommendation_cutout` existe et est exposée au Storefront. La clôture a été effectuée le 2026-08-16 à 17:45 CEST dans une session Shopify authentifiée. Pour chaque produit, la valeur a été enregistrée, la fiche rechargée et la présence du média relue avec le bouton produit `Enregistrer` désactivé. Les fragments publics suivants prouvent l'usage du metafield :

| Source interrogée | Produit recommandé | Média public servi |
| --- | --- | --- |
| `10557516644699` | `10357431206235` | `milaura-reco-cutout-obsidienne-earrings-v1.png` |
| `10637459095899` | `10637436584283` | `milaura-ribbon-cutout-aigue-marine-earrings-v1.png` |
| `10637436584283` | `10637459095899` | `milaura-ribbon-cutout-aigue-marine-bracelet-v1.png` |
| `10637436977499` | `10637436715355` | `milaura-ribbon-cutout-amethyste-necklace-v1.png` |
| `10637436715355` | `10637436977499` | `milaura-ribbon-cutout-amethyste-ring-v1.png` |

## Exclusions

- La bague aigue-marine `10637054738779` reste hors Vague 1 : quantité suivie de 1 et stock insuffisamment robuste.
- `assets/milaura-aigue-marine-ring-cutout-v1.webp` est rejeté : artefacts horizontaux et produit incohérent avec la parure dorée.
- `assets/milaura-reco-cutout-aventurine-v1.png` représente un autre collier et ne doit pas être attribué.
- Amazonite, quartz rose et lapis-lazuli sont reportés à une Vague 2 après mesure de la Vague 1 et contrôle de cohérence visuelle.

## Mesure à mettre en place

Les événements du Ruban existent déjà : `milaura:recommendation_impression`, `milaura:recommendation_click` et `milaura:recommendation_add`. Le tableau de bord commercial devra suivre au minimum :

1. taux de clic = clics Ruban / impressions Ruban ;
2. taux d'ajout = ajouts issus du Ruban / impressions Ruban ;
3. taux d'attache = commandes contenant le produit source et au moins un complément / commandes contenant le produit source ;
4. revenu et panier moyen des commandes exposées au Ruban, comparés à une période de référence.

Aucune promesse de hausse de 60 % n'est démontrée par les données disponibles. La Vague 1 crée le dispositif mesurable nécessaire pour chercher une hausse réelle sans inventer de causalité.

## Sources

- Shopify Admin, rapport des ventes par produit, fenêtres 2026-07-17 au 2026-08-16 et 2025-08-16 au 2026-08-16, consultation authentifiée le 2026-08-16.
- Shopify Admin, catalogue produit et Search & Discovery, consultation et configuration authentifiées le 2026-08-16.
- Storefront public MilAura, endpoints `/recommendations/products.json?intent=complementary`, contrôle 9/9 le 2026-08-16.
- Storefront public MilAura, fragments `/recommendations/products?section_id=milaura-recommendation-fragment&intent=complementary`, contrôle des 5 fichiers Shopify le 2026-08-16 à 17:45 CEST.
- Médias officiels publics des cinq produits et fichiers suivis dans `assets/`, comparaison visuelle le 2026-08-16.
