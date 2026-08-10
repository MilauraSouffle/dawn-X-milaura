# Carte des destinations Ads MilAura

Date : 2026-08-09
Statut : préparation uniquement, aucune campagne lancée

## 1. Gate obligatoire avant média payant

Une destination Ads est éligible seulement si :

- elle est publique, indexable lorsque pertinent et répond en 200 ;
- l'offre, le prix, le stock, la livraison et les retours sont exacts ;
- le consentement et les événements sont validés ;
- le catalogue Merchant ou Pinterest ne présente pas d'erreur critique ;
- le stock dépasse le seuil de la catégorie ;
- la page mobile a été testée ;
- aucune promesse médicale, certification ou preuve sociale fictive n'est présente.

## 2. Google Search et Shopping

| Groupe d'intention | Exemple de requête | Landing | Format potentiel | Statut |
|---|---|---|---|---|
| Bijoux génériques | bijoux en pierres naturelles | collection bijoux | Search, remarketing | après correction P0 |
| Bracelets | bracelet pierre naturelle | collection bracelets | Search, Shopping | stock suffisant, contenu à corriger |
| Colliers | collier pierre naturelle | collection colliers | Search, Shopping | stock suffisant |
| Boucles | boucles d'oreilles pierres naturelles | collection boucles | Search, Shopping | stock suffisant |
| Bagues | bague pierre naturelle | future collection bagues | Search, Shopping | non publiée |
| Pendentifs | pendentif pierre naturelle | collection pendentifs | Search, Shopping | stock suffisant |
| Améthyste | bijou améthyste | collection améthyste | Search, Shopping groupe pierre | corriger avant Ads |
| Quartz rose | bijou quartz rose | future collection quartz rose | Search, Shopping | non publiée |
| Autres pierres | bijou <pierre> | collection pierre exacte | Search, Shopping | seulement après seuil |
| Intention | quelle pierre pour le calme | hub préselectionné | Search informationnel prudent | données insuffisantes |
| Naissance | bijou pierre de naissance | hub naissance | Search | page absente |
| Mois | pierre de naissance février | landing février | Search | réservée |
| Mariage | cadeau anniversaire mariage | hub mariage | Search | page absente |
| Année | cadeau 25 ans mariage | landing 25 ans | Search | réservée |

Shopping envoie toujours vers une PDP spécifique. Une collection sert aux annonces Search, aux sitelinks et à l'exploration, pas comme landing d'un item Merchant.

## 3. Meta et Pinterest Ads

| Angle créatif | Audience ou signal | Destination | Garde-fou |
|---|---|---|---|
| Type de bijou | intérêt bijoux, visiteurs type | collection type | ne pas annoncer un modèle absent |
| Pierre et couleur | interaction créatif pierre | collection pierre | landing exacte, stock disponible |
| Cadeau de naissance | intention cadeau | hub ou mois | correspondance documentée |
| Anniversaire de mariage | année et couple | landing année | ne pas confondre avec mariage initial |
| Retargeting produit | vue produit ou panier | PDP | consentement et exclusion acheteurs |
| Retargeting catégorie | vue collection | même collection | fréquence contrôlée |
| Intention symbolique | interaction éditoriale | hub préselectionné | aucun ciblage sensible, aucune promesse de santé |

## 4. Conservation de l'intention

| Message publicitaire | Destination correcte | Destination incorrecte |
|---|---|---|
| Bracelet en améthyste | collection améthyste filtrée visuellement sur bracelets, ou PDP | homepage |
| Retrouver un moment de calme | `/pages/choisir-sa-pierre?intention=calme` | collection améthyste sans explication |
| Pierre de naissance de février | landing février après publication | hub générique non positionné |
| Cadeau pour 25 ans de mariage | landing noces d'argent | page cadeau de mariage |
| Collier en amazonite | collection amazonite ou PDP collier | collection bijoux générale |

Le paramètre de préselection modifie l'état d'interface, pas le canonical. Il ne doit pas créer une variante SEO.

## 5. Négatifs et exclusions à préparer

À valider avec les vrais termes de recherche :

- `gratuit`, `grossiste`, `perles en vrac`, `tutoriel fabrication`, `emploi`, `formation` si l'offre ne répond pas ;
- requêtes médicales : `guérir`, `traiter`, `cancer`, `dépression`, `anxiété traitement`, `insomnie traitement` ;
- `bague fiançailles`, `alliance` et `cadeau mariage` pour la campagne anniversaire de mariage ;
- matières absentes : `or massif`, `diamant`, `platine` si non vendues ;
- année ou mois dont la landing n'est pas publique.

Les négatifs ne sont pas une vérité universelle. Ils seront ajustés à partir des termes réels, sans bloquer une requête commerciale utile.

## 6. Structure des campagnes, après GO média

### Google Search

```text
FR | Search | Bijoux | Type
FR | Search | Bijoux | Pierre
FR | Search | Cadeaux | Naissance
FR | Search | Cadeaux | Anniversaire mariage
```

### Catalogues

```text
FR | Shopping | All products
FR | Shopping | Type
FR | Shopping | Stone
FR | Pinterest | Catalog sales | Type
FR | Pinterest | Catalog sales | Stone
FR | Meta | Catalog | Remarketing
```

Ne pas segmenter au-delà du volume disponible. Les structures restent une carte de destination, pas une instruction de lancement.

## 7. Convention UTM commune

```text
utm_source=google|meta|pinterest
utm_medium=cpc|paid_social
utm_campaign=fr_<objective>_<theme>_<yyyyq>
utm_content=<adgroup>_<creative>
utm_term=<keyword_or_audience>
```

Exemple :

```text
?utm_source=google&utm_medium=cpc&utm_campaign=fr_search_stone_2026q4&utm_content=amethyste_text01&utm_term=bijou_amethyste
```

## 8. Mesure de succès

### KPI primaire

- achat et chiffre d'affaires net attribuable ;
- marge après coût produit, livraison, remise et média lorsque les coûts sont disponibles.

### KPI secondaires

- taux de correspondance landing/message ;
- ajout panier ;
- début de checkout ;
- conversion ;
- coût par achat ;
- valeur par session ;
- taux de refus catalogue ;
- requêtes négatives et gaspillage.

Une campagne ne doit pas être optimisée sur le clic seul. Aucun ROAS cible n'est fixé tant que marge, attribution et volume ne sont pas vérifiés.
