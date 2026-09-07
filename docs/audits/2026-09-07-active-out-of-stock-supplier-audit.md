# Audit fournisseur des produits ACTIVE à stock nul

Date du snapshot Shopify : `2026-09-07T13:20:57.521043+00:00`.
Contrôle fournisseur terminé : `2026-09-07T15:47:45+02:00`.
Contrôle des premières pages de collections : `2026-09-07T15:48:17+02:00`.

## Résultat

- `56` produits Shopify sont `ACTIVE`, publics et à stock agrégé nul.
- `55` sont réellement non achetables avec `inventory_policy=DENY`.
- `1` reste achetable à zéro avec `inventory_policy=CONTINUE`.
- `28` correspondances fournisseur reposent sur une identité forte: référence exacte ou handle fournisseur exact.
- `22` sont commandables chez Camille Ambiance Nature.
- `6` sont aussi en rupture chez Camille Ambiance Nature.
- `4` nécessitent une correspondance manuelle.
- `24` n'ont pas de fiche fournisseur retrouvée.

Aucun produit, stock, statut, prix, contenu, image, collection, campagne ou paramètre Shopify n'a été modifié.

## Risque de conversion observé

- `41` produits sont `P0`: visibles dans la première page d'au moins une collection majeure contrôlée.
- Parmi ces `P0`, `16` sont commandables fournisseur, `4` sont en rupture fournisseur, `2` sont à vérifier et `19` sont sans fiche retrouvée.
- Les `15` autres restent accessibles par une URL publique mais n'ont pas été observés dans la première page des 12 collections majeures contrôlées.

La densité de produits non achetables en haut des catégories confirme un risque direct de conversion et de perception de l'assortiment. Ce constat ne mesure pas à lui seul la perte de chiffre d'affaires, mais il prouve que le visiteur rencontre plusieurs impasses d'achat avant même d'ouvrir les pages suivantes.

### Premières pages contrôlées

| Collection publique | Produits renvoyés en première page | Non achetables | Part non achetable |
| --- | ---: | ---: | ---: |
| Bagues en pierres naturelles | 5 | 1 | 20.0 % |
| Bestsellers | 12 | 9 | 75.0 % |
| Bijoux & Pierres Naturelles | 12 | 11 | 91.7 % |
| Boucles d'oreilles | 11 | 2 | 18.2 % |
| Bougies & Senteurs | 2 | 2 | 100.0 % |
| Bracelets pierres | 12 | 3 | 25.0 % |
| Colliers pierres | 12 | 0 | 0.0 % |
| Nouveautés | 12 | 0 | 0.0 % |
| Pendentifs | 9 | 6 | 66.7 % |
| Pierres & Minéraux | 12 | 6 | 50.0 % |
| Rituels & Bien-être | 12 | 7 | 58.3 % |
| Savons naturels | 7 | 2 | 28.6 % |

Les gabarits de collection affichent jusqu'à 12 produits par page. Les comptes ci-dessus reprennent exactement les produits renvoyés par l'API publique Shopify dans l'ordre par défaut au moment du contrôle; certaines petites collections en renvoyaient moins de 12.

## Méthode et limites

- Le stock Shopify est la somme des quantités des variantes dans le snapshot actuel.
- `orderable` et `rupture` ne sont conclus qu'après correspondance par référence exacte ou handle fournisseur exact.
- `orderable` signifie que le bouton principal `Ajouter` était présent sur la fiche fournisseur authentifiée. Cela ne prouve pas une quantité fournisseur numérique.
- Les anciennes URLs fournisseur redirigées vers l'accueil sont rejetées par le scraper et ne comptent pas comme fiches produit.
- Une ressemblance de titre seule reste `manual_match_required`.
- `supplier_page_not_found` n'est pas une preuve de retrait définitif du produit chez Camille et n'autorise pas une suppression Shopify.
- `P0` signifie uniquement présence observée en première page d'une des 12 collections majeures contrôlées. `P1` signifie URL publique sans cette exposition observée; d'autres sources de trafic peuvent néanmoins pointer vers la fiche.

## Tri recommandé, non exécuté

1. Traiter d'abord les `P0 orderable`: valider prix, lot/unité, délai et contenu, puis basculer vers la vente fournisseur avec le marqueur interne `Produit à commander`.
2. Retirer rapidement des mises en avant et des campagnes les `P0 rupture`, `P0 manual_match_required` et `P0 supplier_page_not_found`, sous réserve du GO explicite de Patrice.
3. Reprendre ensuite les `P1`, en séparant décision commerciale, enrichissement texte/image, traitement SEO et statut Shopify.

Le détail produit par produit, les preuves exactes, les priorités et les recommandations non exécutées sont dans le CSV associé.
