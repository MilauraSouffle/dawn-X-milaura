# Architecture Pinterest et groupes catalogue MilAura

Date : 2026-08-09
Statut du compte, du site revendiqué, du tag et du catalogue : non vérifié
Action payante : aucune campagne lancée

Contrat de données obligatoire : `docs/reference/2026-08-10-contrat-donnees-catalogue.md`. Pinterest consomme `stone_handle` pour la pierre principale et `stone_handles` pour les pierres secondaires ou multiples. La clé technique `stone_benefits` conserve le libellé public `Symbolique traditionnelle`. La date éditoriale canonique est `content_updated_at`.

## 1. Préconditions avant activation

1. Compte Pinterest Business confirmé.
2. Domaine `milaura.fr` revendiqué.
3. Flux catalogue actif et diagnostics sans erreur critique.
4. Prix, disponibilité, URL et image identiques à la landing.
5. Politique de livraison et retours visible.
6. Consentement publicitaire valide avant déclenchement du tag.
7. Événements testés sans données sensibles.

## 2. Arborescence des tableaux

| Tableau | Sous-thèmes | Mots-clés français | Landing principale |
|---|---|---|---|
| Bijoux en pierres naturelles | bracelets, colliers, bagues, pendentifs, boucles | bijoux pierres naturelles, bijou pierre femme | `/collections/bijoux-pierres-naturelles` |
| Bracelets en pierres naturelles | perles, fins, portés, cadeaux | bracelet pierre naturelle, bracelet femme pierre | `/collections/bracelets-pierres` |
| Colliers et pendentifs | longueur, superposition, pierres | collier pierre naturelle, pendentif pierre | `/collections/colliers-pierres` |
| Guide des pierres naturelles | couleur, entretien, comparaison | choisir pierre, guide pierres naturelles | `/pages/bijoux-par-pierre` |
| Bijoux en améthyste | bracelets, bagues, février | bijoux améthyste, bracelet améthyste | `/collections/par-pierre-amethyste` |
| Bijoux en quartz rose | amour, rose, cadeaux | bijoux quartz rose, bracelet quartz rose | `/collections/par-pierre-quartz-rose` |
| Bijoux en œil de tigre | chatoyance, style brun | bijoux oeil de tigre, bracelet oeil de tigre | `/collections/par-pierre-oeil-de-tigre` |
| Quelle pierre choisir ? | calme, amour, protection, couleur | quelle pierre choisir, pierre symbolique | `/pages/choisir-sa-pierre` |
| Pierres de naissance | 12 mois, idées cadeau | pierre de naissance, bijou mois naissance | `/pages/pierres-de-naissance` |
| Anniversaires de mariage | grandes noces, couple, budget | cadeau anniversaire mariage, noces argent | `/pages/cadeaux-anniversaire-de-mariage` |
| Entretien des bijoux | nettoyage, rangement, matières | nettoyer bijou pierre, entretien argent 925 | guide d'entretien à confirmer |

Un tableau pierre n'est créé que lorsque sa collection est publique et suffisamment alimentée. Un handle réservé ne reçoit ni tableau ni Pin de catalogue.

## 3. Groupes de produits catalogue

Convention de nom : `fr_<dimension>_<valeur>`.

| Groupe | Condition source | Usage |
|---|---|---|
| `fr_all_jewelry` | type dans famille bijoux | retargeting et collection générale |
| `fr_type_bracelet` | `product_type_handle=bracelet` | Pins bracelets |
| `fr_type_collier` | `product_type_handle=collier` | Pins colliers |
| `fr_type_boucles_oreilles` | type canonique | Pins boucles |
| `fr_type_bague` | `product_type_handle=bague`, après exclusion des baguettes et contrôle inventaire | Pins bagues, seulement lorsque `/collections/bagues-pierres` est publique |
| `fr_type_pendentif` | `product_type_handle=pendentif` | Pins pendentifs |
| `fr_stone_amethyste` | `stone_handle=amethyste` et famille bijoux | pierre et février |
| `fr_stone_quartz_rose` | `stone_handle=quartz-rose` | pierre et amour |
| `fr_stone_<handle>` | pierre canonique et page publique | autres pierres actives |
| `fr_intent_<handle>` | intention contrôlée et relue | uniquement après couverture |
| `fr_birth_month_<month>` | `birth_months` contient mois | naissance |
| `fr_anniversary_<year>` | année contrôlée | noces |
| `fr_price_under_25` | prix < 25 € | filtre catalogue, pas page SEO |
| `fr_price_25_49` | 25 € à 49,99 € | filtre catalogue |
| `fr_price_50_plus` | prix >= 50 € | filtre catalogue |

Les groupes doivent exclure :

- brouillons et archivés ;
- cadeaux internes à 0 € ;
- produits non répertoriés ;
- stock nul si la politique Pinterest l'exclut ;
- produits sans image conforme ;
- produits dont la landing répond en 404.

## 4. Mapping Shopify vers Pinterest

| Champ Pinterest | Source Shopify | Contrôle |
|---|---|---|
| `id` | identifiant stable variante | ne jamais changer pour une correction de titre |
| `title` | titre produit propre | sans promotion temporaire ni bourrage |
| `description` | description factuelle courte | matière, pierre, dimensions, aucun soin garanti |
| `link` | canonical PDP avec UTM ajoutée au clic | 200, mobile, produit spécifique |
| `image_link` | image principale produit | sans texte promotionnel, bonne résolution |
| `additional_image_link` | porté, détail, échelle | cohérent avec la variante |
| `price` | prix variante et devise | égal à la landing |
| `availability` | état Shopify réel | actualisation quotidienne |
| `brand` | MilAura | cohérent partout |
| `gtin` | code-barres fournisseur réel | vide si absent, jamais inventé |
| `mpn` | référence fabricant réelle | ne pas copier le SKU sans preuve |
| `product_type` | taxonomie MilAura | hiérarchie stable |
| labels personnalisés | type, pierre, intention, mois, année, marge si autorisée | valeurs contrôlées |

Les labels pierre doivent lire directement `stone_handle` et `stone_handles`. Aucune traduction de clé propre à Pinterest n'est stockée dans Shopify.

## 5. Formats créatifs

### Product Pin

- image principale propre et centrée ;
- titre lisible sans emojis en série ;
- landing sur la PDP exacte ;
- prix et disponibilité synchronisés.

### Pin éditorial 2:3

- format recommandé 1000 x 1500 px ;
- une idée visuelle ;
- texte court dans une zone sûre ;
- photo MilAura originale ;
- déclinaisons : macro, porté, geste, comparaison, idée cadeau ;
- landing sur la collection ou le guide qui répond exactement à l'intention.

### Exemples de cohérence

- `Comment choisir une améthyste ?` vers la collection améthyste ou son guide, pas la homepage ;
- `Bracelet améthyste` vers la collection filtrée pertinente ou une PDP, pas le hub pierres ;
- `Pierre de naissance février` vers la landing février une fois publique ;
- `Cadeau 25 ans de mariage` vers la landing 25 ans, jamais vers `cadeau de mariage`.

## 6. Calendrier saisonnier qualitatif

Sans données Pinterest Analytics, ce calendrier est une hypothèse éditoriale à mesurer :

| Période | Thèmes | Préparation |
|---|---|---|
| Janvier | nouveaux départs, grenat, rangement | 6 à 8 semaines avant |
| Février | améthyste, Saint-Valentin, amour | décembre et janvier |
| Mars à juin | naissance, fête des mères, mariages | 6 à 10 semaines avant |
| Juillet et août | couleurs, péridot, sélection estivale | mai et juin |
| Septembre et octobre | rentrée, ancrage, tourmaline, cadeaux | juillet et août |
| Novembre et décembre | Noël, budgets, pierres de naissance, cadeaux | septembre à novembre |
| Toute l'année | anniversaires de mariage, entretien, types | continu |

## 7. Convention UTM Pinterest

```text
utm_source=pinterest
utm_medium=organic_social|paid_social
utm_campaign=<fr_theme_yyyy_qn>
utm_content=<format_assetid>
utm_term=<stone_type_intent_optional>
```

Exemple organique :

```text
?utm_source=pinterest&utm_medium=organic_social&utm_campaign=fr_amethyste_2026_q4&utm_content=pin_macro_001&utm_term=amethyste
```

Les UTMs ne changent pas le canonical. Les paramètres ne doivent contenir aucune donnée personnelle.

## 8. KPI et contrôles

- taux de produits acceptés dans le catalogue ;
- erreurs prix, disponibilité, image et landing ;
- impressions et clics sortants par tableau ;
- sauvegardes par format ;
- sessions engagées et ajout panier par landing ;
- chiffre d'affaires attribué selon une fenêtre documentée ;
- écart entre Pinterest, GA4 et Shopify expliqué, pas masqué.

Contrôles hebdomadaires une fois actif : diagnostics catalogue, 404, stock, images, domaines et événements. Contrôle mensuel : groupes, requêtes, créatifs et landings.

## 9. Sources officielles

- [Pinterest - Before you get started with catalogs](https://help.pinterest.com/en/business/article/before-you-get-started-with-catalogs)
- [Pinterest - Product groups](https://help.pinterest.com/en/business/article/product-groups)
- [Pinterest Developers - Catalogs](https://developers.pinterest.com/docs/api/v5/catalogs/)
- [Pinterest - Tag and Conversions API](https://help.pinterest.com/en/business/article/the-pinterest-tag)
