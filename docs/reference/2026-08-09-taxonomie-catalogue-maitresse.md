# Carte maîtresse de la taxonomie MilAura

Date : 2026-08-09
Statut : recommandation de phase 1, activation soumise au GO de Patrice

## 1. Principes d'architecture

La hiérarchie cible est :

```text
Accueil
├── Bijoux en pierres naturelles
│   ├── Bracelets
│   ├── Colliers
│   ├── Boucles d'oreilles
│   ├── Bagues
│   └── Pendentifs
├── Choisir par pierre
│   ├── 10 collections pierre solides
│   └── autres handles réservés non publiés
├── Choisir selon une intention
│   └── 4 groupes maximum après normalisation
├── Pierres de naissance
│   └── mois activés un par un après seuil
└── Cadeaux d'anniversaire de mariage
    └── 6 à 8 années fortes après seuil
```

Règles :

- une requête et une intention dominantes par URL ;
- une collection pour une intention d'achat et un stock filtrable ;
- une page hub pour orienter, expliquer et agréger plusieurs routes ;
- un article pour une question informationnelle qui ne mérite pas une collection ;
- aucune sous-page vide ou faible dans le sitemap ;
- les handles existants utiles sont conservés pour limiter les migrations ;
- un handle réservé reste hors Boutique en ligne, hors menu, hors sitemap et hors Ads.

## 2. Vocabulaire canonique proposé

### 2.1 Types

Valeurs `milaura.product_type_handle` :

`bracelet`, `collier`, `boucles-oreilles`, `bague`, `pendentif`, `chaine`, `bougie`, `pendule`, `sphere`, `pointe`, `oeuf`, `savon`, `bol-chantant`, `sauge`, `encens`, `geode`, `accessoire`, `decoration`.

Migration requise : `boucles` vers `boucles-oreilles`. Le champ natif Shopify `productType` doit être normalisé en parallèle, mais les règles de collection cibleront le metafield canonique après preuve de parité.

### 2.2 Pierres

Valeur unique par variante gemmologique réellement vendue. Exemples :

`amethyste`, `agate`, `quartz-rose`, `jaspe`, `jaspe-rouge`, `aventurine`, `aventurine-verte`, `lapis-lazuli`, `amazonite`, `oeil-de-tigre`, `sodalite`, `jade`, `cornaline`, `tourmaline-noire`, `pierre-de-lune`, `labradorite`, `citrine`.

Ne pas fusionner automatiquement `aventurine` avec `aventurine-verte`, `obsidienne` avec `obsidienne-noire` ou `jaspe` avec `jaspe-rouge`. La fusion exige la vérification de chaque produit.

### 2.3 Intentions

Le champ singulier actuel ne permet pas de décrire honnêtement plusieurs intentions. Cible :

- `milaura.primary_intention` : valeur principale ;
- `milaura.intention_handles` : liste contrôlée ;
- conservation temporaire de `milaura.intention_handle` pendant la migration.

Vocabulaire cible limité :

`calme`, `sommeil`, `douceur`, `amour`, `confiance`, `energie`, `protection`, `ancrage`, `intuition`, `creativite`, `nouveaux-departs`.

Les textes publics les présentent comme symboliques ou traditionnels, jamais comme effets médicaux.

### 2.4 Attributs nécessaires

- `milaura.materials` : liste contrôlée, par exemple `argent-925`, `acier-inoxydable`, `dore`, `cuir`, `nacre` ;
- `milaura.colors` : liste contrôlée ;
- `milaura.recipient_handles` : `femme`, `homme`, `mixte`, `couple` si prouvé ;
- `milaura.occasion_handles` : liste contrôlée ;
- `milaura.birth_months` : liste des mois réellement compatibles ;
- `milaura.wedding_anniversary_years` : liste d'années, avec justification éditoriale ;
- `milaura.gem_treatments` et `milaura.gem_origin` : seulement avec données fournisseur ;
- `milaura.stone_handle` pour la pierre principale ;
- `milaura.stone_handles` pour les pierres secondaires ou l'ensemble des pierres d'un produit multi-pierres.

Le contrat complet et prioritaire est `docs/reference/2026-08-10-contrat-donnees-catalogue.md`.

## 3. Matrice des destinations

### 3.1 Types de bijoux

| Nom public | Handle et URL | Objet | Requête principale | Stock actuel | Seuil | Règle cible | Statut |
|---|---|---|---|---:|---:|---|---|
| Bijoux en pierres naturelles | `/collections/bijoux-pierres-naturelles` | collection hub | bijoux en pierres naturelles | 109 | 30 | type bijoux ET pierre renseignée | live, à corriger |
| Bracelets en pierres naturelles | `/collections/bracelets-pierres` | collection | bracelets en pierres naturelles | 74 | 12 | `product_type_handle=bracelet` | live, à corriger |
| Colliers en pierres naturelles | `/collections/colliers-pierres` | collection | colliers en pierres naturelles | 14 | 8 | `product_type_handle=collier` | live, à corriger |
| Boucles d'oreilles en pierres naturelles | `/collections/boucles-oreilles` | collection | boucles d'oreilles pierres naturelles | 13 | 8 | `product_type_handle=boucles-oreilles` | live, à corriger |
| Bagues en pierres naturelles | `/collections/bagues-pierres` | collection | bagues pierres naturelles | 3 bijoux confirmés, 21 valeurs techniques historiques | 8 | sélection manuelle jusqu'à reclassification des 18 baguettes minérales | créée non publiée le 2026-08-09, bloquée pour publication |
| Pendentifs en pierres naturelles | `/collections/pendentifs` | collection | pendentif pierre naturelle | 29 | 8 | `product_type_handle=pendentif` | live, à corriger |
| Chaînes pour pendentifs | `/collections/chaines` | collection support | chaîne pour pendentif | 4 | 6 | `product_type_handle=chaine` | live, ne pas promouvoir en navigation principale |

### 3.2 Hub et dix collections pierre cibles

Seuil de publication pierre : au moins 5 bijoux actifs et réellement disponibles, au moins 2 types de bijoux, contenu unique complet, une image hero originale et trois images secondaires utiles. Le seuil préféré est 8 bijoux.

| Nom public | Handle et URL | Objet | Bijoux renseignés | Diversité actuelle | Statut cible |
|---|---|---|---:|---|---|
| Bijoux par pierre | `/pages/bijoux-par-pierre` | page hub | 195 produits avec pierre, dont 130 bijoux selon les types canoniques actuels | large | à créer P1 |
| Bijoux en améthyste | `/collections/par-pierre-amethyste` | collection | 14 par metafield, 9 dans la règle publique | plusieurs types | live, à corriger P0/P1 |
| Bijoux en agate | `/collections/par-pierre-agate` | collection | 10 | bracelet, collier | créée non publiée le 2026-08-09 |
| Bijoux en quartz rose | `/collections/par-pierre-quartz-rose` | collection | 8 | 4 types | créée non publiée le 2026-08-09 |
| Bijoux en jaspe | `/collections/par-pierre-jaspe` | collection | 9 | bague, bracelet | à créer non publiée P1 |
| Bijoux en aventurine | `/collections/par-pierre-aventurine` | collection | 8 | 4 types | réservé jusqu'à normalisation vert/générique |
| Bijoux en lapis-lazuli | `/collections/par-pierre-lapis-lazuli` | collection | 6 | 3 types | créée non publiée le 2026-08-09 |
| Bijoux en amazonite | `/collections/par-pierre-amazonite` | collection | 6 | 3 types | créée non publiée le 2026-08-09 |
| Bijoux en œil de tigre | `/collections/par-pierre-oeil-de-tigre` | collection | 5 | 5 types | à créer non publiée P1 |
| Bijoux en sodalite | `/collections/par-pierre-sodalite` | collection | 5 | 3 types | à créer non publiée P1 |
| Bijoux en jade | `/collections/par-pierre-jade` | collection | 5 | 3 types | à créer non publiée P1 |

La collection publique `/collections/par-pierre-jaspe-rouge` ne contient que 2 actifs visibles. Elle doit rester inchangée avant GO, puis être retirée des menus et réévaluée. Options : l'intégrer à Jaspe avec redirect, ou la réserver jusqu'à 5 bijoux propres.

Découverte d'exécution du 2026-08-09 : les 21 produits portant historiquement `product_type_handle=bague` comprennent 18 baguettes minérales et seulement 3 vraies bagues. Une collection intelligente fondée sur cette valeur serait fausse. La collection privée `bagues-pierres` utilise donc 3 membres manuels vérifiés jusqu'à reprise par la session inventaire.

Décision du 2026-08-10 : les 18 baguettes actives sont listées dans `docs/reference/2026-08-10-baguettes-retrait-catalogue-public.md`. Elles doivent sortir du catalogue public après contrôle des URLs, commandes et signaux Search Console, sans suppression automatique. La route Bagues future reste `/collections/bagues-pierres` et son fallback temporaire est `/collections/bijoux-pierres-naturelles`.

### 3.3 Pierres à réserver sans publier

| Pierre | Handle réservé recommandé | Bijoux actuels | Blocage principal |
|---|---|---:|---|
| Cornaline | `par-pierre-cornaline` | 4 | sous le seuil |
| Tourmaline noire | `par-pierre-tourmaline-noire` | au plus 4, taxonomie non normalisée | couleur/variété à confirmer |
| Pierre de lune | `par-pierre-pierre-de-lune` | 2 | sous le seuil |
| Labradorite | `par-pierre-labradorite` | 1 | sous le seuil |
| Citrine | `par-pierre-citrine` | 1 | sous le seuil |
| Aigue-marine | `par-pierre-aigue-marine` | 2 | sous le seuil |
| Péridot | `par-pierre-peridot` | 2 | sous le seuil |
| Obsidienne noire | `par-pierre-obsidienne-noire` | au plus 1 bijou exactement qualifié | taxonomie non normalisée |
| Jaspe rouge | `par-pierre-jaspe-rouge` | 2 | page déjà publique mais mince |
| Sélénite | `par-pierre-selenite` | 2 bijoux, 9 produits totaux | intention plutôt minéraux que bijoux |

### 3.4 Intentions

Seuil de publication intention : 8 bijoux actifs, 3 types de bijoux, intention renseignée et relue, contenu original, aucune promesse médicale.

| Destination | URL | Objet | Situation actuelle | Statut |
|---|---|---|---|---|
| Choisir sa pierre | `/pages/choisir-sa-pierre` | page hub et outil de choix | page absente, données intentions 15,3 % | à créer P1 |
| Calme et sommeil | `/collections/serenite-sommeil` | collection | 10 membres par règles tags, 6 bijoux `sommeil` dans le metafield | live, à corriger avant maintien |
| Amour et douceur | `/collections/amour-relations` | collection | 3 membres, règle tags large | live, sous le seuil |
| Protection et ancrage | `/collections/protection-energie` | collection | 5 membres, règle tags large | live, sous le seuil |
| Confiance et énergie | `/collections/confiance-energie` | collection | données insuffisantes | réservé non publié |
| Intuition et créativité | `/collections/intuition-creativite` | collection | données insuffisantes | ne pas créer publiquement |
| Nouveaux départs | `/collections/nouveaux-departs` | collection | données insuffisantes | ne pas créer publiquement |

Les handles publics existants sont conservés jusqu'à obtention des données Search Console. Un changement de handle n'est justifié qu'avec redirect 301, cartographie des liens et preuve que le bénéfice dépasse le coût.

### 3.5 Pierres de naissance

| Destination | URL | Objet | Seuil | Statut |
|---|---|---|---:|---|
| Pierres de naissance par mois | `/pages/pierres-de-naissance` | hub éditorial et commercial | 12 mois documentés, 6 produits au total dans chaque sélection affichée | à créer P2 |
| Février, améthyste | `/pages/pierre-de-naissance-fevrier` | landing mois | 6 bijoux éligibles, 2 types, contenu unique | candidate après hub |
| Janvier à décembre, autres mois | `/pages/pierre-de-naissance-<mois>` | landings réservées | 6 bijoux par mois, 2 types | ne pas publier actuellement |

La page hub peut afficher tous les mois, expliquer les traditions et n'afficher des produits que lorsqu'ils existent. Une case sans offre renvoie vers l'information, pas vers une collection vide.

### 3.6 Anniversaires de mariage

| Destination | URL | Objet | Seuil | Statut |
|---|---|---|---:|---|
| Cadeaux d'anniversaire de mariage | `/pages/cadeaux-anniversaire-de-mariage` | hub | guide complet et au moins 4 sélections réelles | à créer P2 |
| 4 ans, noces de cire | `/pages/4-ans-mariage-noces-de-cire` | landing année | 6 cadeaux cohérents | candidate après inventaire |
| 17 ans, noces de rose | `/pages/17-ans-mariage-noces-de-rose` | landing année | 6 cadeaux cohérents | candidate après inventaire |
| 25 ans, noces d'argent | `/pages/25-ans-mariage-noces-d-argent` | landing année | 6 bijoux en argent prouvés | candidate forte |
| 40 ans, noces d'émeraude | `/pages/40-ans-mariage-noces-d-emeraude` | landing année | 6 offres, émeraude ou interprétation explicite | réservée, 1 produit émeraude |
| 42 ans, noces de nacre | `/pages/42-ans-mariage-noces-de-nacre` | landing année | 6 offres | réservée, 3 tags nacre seulement |
| 48 ans, noces d'améthyste | `/pages/48-ans-mariage-noces-d-amethyste` | landing année | 6 offres | candidate forte |
| 50 ans, noces d'or | `/pages/50-ans-mariage-noces-d-or` | landing année | 6 offres, matière exacte | réservée ; ne jamais appeler `or` un produit seulement doré |

Ces landings sont des anniversaires du couple. Elles ne ciblent pas `cadeau de mariage`, qui répond à une intention différente.

### 3.7 Destinataire, occasion et budget

Décision 2026-08-09 : ne pas créer de pages SEO dédiées pour `cadeau femme`, `cadeau homme`, `cadeau couple`, `moins de 30 €` ou `moins de 50 €` avant :

- données structurées fiables ;
- profondeur de stock ;
- requêtes Search Console ;
- différence de contenu réelle.

Ces dimensions servent d'abord de filtres, de groupes de catalogue, de blocs dans les hubs et de destinations Ads préselectionnées avec canonical vers le hub.

## 4. Contrat collection intelligente

Séquence avant migration :

1. exporter la liste actuelle ;
2. normaliser les metafields sur un lot test ;
3. créer la collection de preview hors Boutique en ligne ;
4. comparer membres attendus et réels ;
5. inspecter dix produits limites ;
6. remplacer la règle tag uniquement si la parité est prouvée ;
7. assigner le template en preview ;
8. publier seulement après validation stock, contenu, juridique et visuelle.

Une collection pierre cible :

- `milaura.stone_handle = <pierre>` ;
- `milaura.product_type_handle` appartient à la famille bijoux ;
- produit actif et disponible ;
- exclusion des cadeaux internes et produits non répertoriés.

Shopify ne permet pas toujours d'exprimer toutes les inclusions/exclusions dans une collection intelligente simple. Si la règle devient ambiguë, préférer une collection manuelle auditée à une automatisation fausse.

## 5. Contrat des cartes de la future homepage

Cette table est destinée directement à la session UI/UX. Elle ne lui demande aucune modification de design dans ce chantier.

| Carte | Sous-libellé | URL définitive | Destination | Publication au 2026-08-09 | Stock requis | Image à produire | Préselection |
|---|---|---|---|---|---:|---|---|
| Choisir par type de bijou | Bracelets, colliers, bagues et plus | `/collections/bijoux-pierres-naturelles` | collection hub | live, à corriger | 30 | composition portée multi-types | aucune |
| Choisir par pierre | Améthyste, quartz rose, œil de tigre et plus | `/pages/bijoux-par-pierre` | page hub | à créer, non publiée | 5 bijoux par pierre affichée | mosaïque macro de pierres réelles | aucune |
| Choisir selon une intention | Un repère symbolique pour votre moment | `/pages/choisir-sa-pierre` | page hub | à créer, non publiée | 8 bijoux par intention activée | gestes et pierres, sans promesse médicale | aucune |

Préselection future autorisée pour les campagnes ou le quiz : `?intention=calme`, `?intention=amour`, `?intention=protection`. Le contenu principal et le canonical restent ceux du hub. Une URL paramétrée ne doit pas devenir une nouvelle page indexable.

## 6. Décisions à soumettre au GO

1. Valider les handles définitifs ci-dessus.
2. Valider le seuil pierre de 5 minimum, 8 préféré, avec deux types.
3. Valider le retrait progressif des trois intentions publiques faibles.
4. Valider la redirection future de `/pages/bracelet-amethyste`.
5. Valider la création en preview des collections et metafields, sans publication.
6. Valider le contenu légal : aucune certification, origine ou fabrication sans preuve.
