# Plan de mesure Search Console, GA4, Merchant Center et Pinterest

Date : 2026-08-09
État des accès : non vérifié
État du tracking public : aucun marqueur GA4 ou Pinterest classique détecté dans le HTML récupéré, mais des pixels Shopify sandboxés peuvent ne pas être visibles de cette manière

## 1. Principe de vérité

Chaque rapport doit séparer :

- donnée de plateforme ;
- donnée Shopify ;
- donnée analytics consentie ;
- hypothèse ;
- période et fuseau ;
- modèle d'attribution.

Les écarts entre outils sont normaux. Ils doivent être expliqués, pas forcés vers un total identique.

## 2. Google Search Console

### Vérifications initiales

- propriété domaine `milaura.fr` et propriétaires ;
- sitemaps soumis et dernière lecture ;
- pages indexées et causes d'exclusion ;
- actions manuelles et problèmes de sécurité ;
- Core Web Vitals ;
- Merchant listings et Product snippets ;
- rapports AI Overviews ou AI Mode si disponibles sur cette propriété ;
- requêtes et pages sur 16 mois.

### Segments à enregistrer

| Segment | Filtre |
|---|---|
| Collections type | regex `/collections/(bracelets-pierres|colliers-pierres|boucles-oreilles|bagues-pierres|pendentifs)` |
| Collections pierre | regex `/collections/par-pierre-` |
| Hubs | regex `/pages/(bijoux-par-pierre|choisir-sa-pierre|pierres-de-naissance|cadeaux-anniversaire-de-mariage)` |
| Produits | `/products/` |
| Articles | `/blogs/` |
| Tags legacy | URL contenant un segment après le handle collection |
| Recherche interne | `/search` |

### KPI

- clics et impressions par cluster ;
- CTR sans promesse de causalité ;
- position moyenne comme indicateur agrégé, pas rang fixe ;
- nombre de requêtes non brandées ;
- pages recevant la même requête ;
- indexation et dates de crawl ;
- clics Images et Shopping lorsqu'ils sont disponibles.

Cadence : baseline avant publication, puis J+7 pour indexation, J+28, J+90 et trimestre glissant.

## 3. GA4

### Événements e-commerce requis

| Événement | Déclencheur | Paramètres minimaux |
|---|---|---|
| `view_item_list` | grille réellement visible | `item_list_id`, `item_list_name`, items |
| `select_item` | clic produit depuis grille | liste et item |
| `view_item` | PDP | item, prix, devise |
| `add_to_cart` | ajout confirmé | item, quantité, valeur |
| `view_cart` | panier affiché | items, valeur |
| `begin_checkout` | départ checkout | items, valeur |
| `purchase` | confirmation commande | transaction unique, taxe, livraison, valeur |
| `view_promotion` | promotion réelle visible | id et nom |
| `select_promotion` | interaction promotion | id et nom |

### Événements catalogue personnalisés

| Événement | Usage | Paramètres |
|---|---|---|
| `select_catalogue_path` | clic homepage vers type/pierre/intention | `path_type`, `destination_handle` |
| `select_stone` | choix sur hub pierre | `stone_handle`, `source_page` |
| `select_intention` | préselection intention | `intention_handle`, `source_page` |
| `select_birth_month` | choix du mois | `birth_month` |
| `select_anniversary_year` | choix d'année | `anniversary_year` |
| `apply_collection_filter` | usage d'un filtre | `filter_name`, `filter_value` sans donnée personnelle |

Les paramètres personnalisés sont enregistrés seulement s'ils servent une décision. Ne pas envoyer de texte libre utilisateur, d'e-mail, de nom ou de donnée sensible.

### Audiences analytiques possibles

- visiteurs d'une pierre ;
- visiteurs d'un type ;
- visiteurs naissance ou mariage ;
- ajout panier sans achat ;
- acheteurs, pour exclusion publicitaire selon consentement.

La création d'une audience publicitaire exige un consentement approprié et une politique de rétention documentée.

## 4. Merchant Center

### Contrôles compte et flux

- pays, langue, devise et destinations ;
- domaine revendiqué ;
- politique de livraison et retours ;
- source de données Shopify ou Google & YouTube ;
- fréquence de synchronisation ;
- refus et avertissements ;
- correspondance prix, disponibilité et variante ;
- images et textes promotionnels ;
- identifiants produit.

### Champs qualité prioritaires

| Champ | Règle MilAura |
|---|---|
| `id` | identifiant variante stable |
| `title` | produit + pierre + type, sans bourrage |
| `description` | factuelle, sans promesse médicale |
| `availability` | identique Shopify et landing |
| `price` | même prix et devise |
| `brand` | MilAura |
| `gtin` | fourni seulement si réel ; couverture actuelle 7 produits au moins |
| `mpn` | fabricant réel, pas SKU copié automatiquement |
| `condition` | `new` si exact |
| `product_type` | taxonomie MilAura stable |
| `google_product_category` | catégorie Google la plus précise vérifiée |
| `shipping` et `return` | politique actuelle, pas ancien seuil 39 € |

### KPI Merchant

- nombre d'items actifs, limités et refusés ;
- erreurs prix et disponibilité ;
- couverture GTIN justifiée ;
- clics gratuits ;
- conversion des fiches gratuites et Shopping selon source.

## 5. Pinterest

### Vérifications

- site revendiqué ;
- tag et Conversions API ;
- déduplication `event_id` si les deux existent ;
- catalogue et dernière ingestion ;
- produits acceptés ou rejetés ;
- groupes de produits ;
- correspondance domaine, prix, stock et image.

### Événements

- `PageVisit` ;
- `ViewCategory` ;
- `ViewContent` ;
- `AddToCart` ;
- `Checkout` ;
- `Search` uniquement sans texte sensible ;
- événements de consentement et déduplication documentés.

### KPI

- produits acceptés ;
- impressions, sauvegardes et clics sortants ;
- sessions engagées ;
- ajouts panier et achats ;
- revenu selon fenêtre d'attribution clairement notée ;
- performance par tableau, pierre, type et format.

## 6. Consentement et conformité

Pour la France et l'EEE :

- les traceurs publicitaires ne se déclenchent pas avant consentement ;
- les choix sont aussi simples à refuser qu'à accepter ;
- la preuve du consentement et la durée sont documentées ;
- Google Consent Mode v2 reçoit les états par défaut puis les mises à jour ;
- `ad_storage`, `analytics_storage`, `ad_user_data` et `ad_personalization` reflètent le choix réel ;
- Pinterest et Meta respectent le même état ;
- les tags essentiels et exemptés sont séparés des finalités publicitaires.

Une implémentation Consent Mode ne remplace pas un recueil de consentement valide.

## 7. Convention UTM

```text
utm_source=<platform>
utm_medium=<channel>
utm_campaign=<country_objective_theme_period>
utm_content=<adgroup_asset>
utm_term=<keyword_or_segment>
```

Valeurs minuscules, ASCII, séparées par `_`. Aucun prénom, e-mail ou identifiant personnel.

## 8. Tableau de bord minimal

| Vue | Source | Décision |
|---|---|---|
| Santé organique | Search Console | indexation et priorités de contenu |
| Parcours catalogue | GA4 + Shopify | friction entre hub, collection, PDP et achat |
| Qualité du flux | Merchant | corrections produit et éligibilité Shopping |
| Pinterest | Pinterest + GA4 | tableaux, groupes et créatifs |
| Économie | Shopify + coûts | marge, pas seulement revenu |

## 9. Plan de validation

1. Capturer la baseline avant tout changement.
2. Tester le consentement dans les quatre états principaux : refus, analytics seul, publicité, retrait.
3. Passer une commande test autorisée et vérifier la transaction unique.
4. Contrôler le réseau sans exposer d'identifiant personnel.
5. Comparer Shopify et GA4 sur une fenêtre courte.
6. Vérifier Merchant et Pinterest après une ingestion complète.
7. Documenter les écarts attendus.

## 10. Sources officielles

- [Google - Consent mode](https://developers.google.com/tag-platform/security/guides/consent)
- [Google Analytics - événements e-commerce](https://developers.google.com/analytics/devguides/collection/ga4/ecommerce)
- [Google Merchant Center - données structurées](https://support.google.com/merchants/answer/7331077)
- [Pinterest - The Pinterest tag](https://help.pinterest.com/en/business/article/the-pinterest-tag)
- [CNIL - cookies et autres traceurs](https://www.cnil.fr/fr/cookies-et-autres-traceurs)
