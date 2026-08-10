# Baguettes minérales à retirer du catalogue public

Date : 2026-08-10
Source : lecture Shopify Admin du 2026-08-10
Décision : liste de travail uniquement, aucune mutation produit dans cette session

Les dix-huit produits actifs ci-dessous sont des baguettes minérales mais portent historiquement `milaura.product_type_handle=bague`. Ils ne correspondent plus au positionnement commercial retenu pour MilAura.

| ID Shopify | Handle | Titre Admin | URL publique au contrôle |
|---|---|---|---|
| `10357681226075` | `bague-amethyste` | Baguette Améthyste | `/products/bague-amethyste` |
| `10357681619291` | `bague-pyrite` | Baguette Pyrite | `/products/bague-pyrite` |
| `10357682045275` | `bague-jaspe-rouge` | Baguette Jaspe Rouge | `/products/bague-jaspe-rouge` |
| `10357682766171` | `bague-amethyste-1` | Baguette Améthyste | `/products/bague-amethyste-1` |
| `10357683192155` | `bague-fluorine-multicolore` | Baguette Fluorine Multicolore | `/products/bague-fluorine-multicolore` |
| `10357683585371` | `bague-aventurine-jaune` | Baguette Aventurine Jaune | `/products/bague-aventurine-jaune` |
| `10357684044123` | `bague-aventurine` | Baguette Aventurine | `/products/bague-aventurine` |
| `10357684666715` | `bague-oeil-de-tigre` | Baguette Œil de Tigre | `/products/bague-oeil-de-tigre` |
| `10357685092699` | `bague-cristal-de-roche` | Baguette Cristal de Roche | `/products/bague-cristal-de-roche` |
| `10357685485915` | `bague-amethyste-2` | Baguette Améthyste | `/products/bague-amethyste-2` |
| `10357685879131` | `bague-quartz-rose` | Baguette Quartz Rose | `/products/bague-quartz-rose` |
| `10357686272347` | `bague-fluorine-multicolore-1` | Baguette Fluorine Multicolore | `/products/bague-fluorine-multicolore-1` |
| `10357686632795` | `bague-aventurine-jaune-1` | Baguette Aventurine Jaune | `/products/bague-aventurine-jaune-1` |
| `10357687288155` | `bague-sodalite` | Baguette Sodalite | `/products/bague-sodalite` |
| `10357687779675` | `bague-cornaline` | Baguette Cornaline | `/products/bague-cornaline` |
| `10357688205659` | `bague-sodalite-1` | Baguette Sodalite | `/products/bague-sodalite-1` |
| `10358876635483` | `bague-jade` | Baguette Jade | `/products/bague-jade` |
| `10358876701019` | `bague-jade-1` | Baguette Jade | `/products/bague-jade-1` |

Deux autres baguettes portant la même valeur technique sont déjà en brouillon et ne font pas partie des dix-huit produits publics :

- `10357682340187`, `bague-obsidienne-noire` ;
- `10357684371803`, `bague-obsidienne-noire-1`.

## Contrôle obligatoire avant retrait

La session inventaire décidera entre brouillon et archive après :

1. contrôle du stock physique ;
2. contrôle des commandes historiques et des liens internes ;
3. consultation des signaux Search Console pour chaque URL ;
4. choix entre maintien d'une page informative, redirection 301 ou retrait ;
5. correction de la taxonomie seulement au moment de la mutation produit.

Aucun produit de cette liste n'a été supprimé, dépublié, archivé ou modifié le 2026-08-10.

## Contrat de route Bagues

- route canonique future : `/collections/bagues-pierres` ;
- collection privée actuelle : 3 bagues manuellement vérifiées ;
- seuil de publication : 8 bagues actives et réellement disponibles, avec données de taille, matière et ajustement ;
- fallback temporaire recommandé : `/collections/bijoux-pierres-naturelles` ;
- `/collections/bagues` ne doit recevoir aucune carte homepage ;
- aucune carte homepage ne doit pointer vers la collection privée.

Écart connu hors périmètre : `templates/index.json` contient encore une référence à `shopify://collections/bagues`. La homepage étant explicitement exclue, cette référence n'est pas modifiée ici. Sa correction par la session UI/UX est une condition préalable à toute activation de la route Bagues.
