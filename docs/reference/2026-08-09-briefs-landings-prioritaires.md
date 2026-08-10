# Briefs des landings prioritaires MilAura

Date : 2026-08-09
Statut : contenus proposés, à valider avant saisie Shopify

## 1. Contrat commun

Chaque landing prioritaire doit comporter :

1. une réponse directe de 40 à 80 mots ;
2. une grille de produits réellement disponibles ;
3. un bloc de choix concret ;
4. des caractéristiques factuelles ;
5. une section entretien ou port ;
6. des liens vers deux à cinq destinations proches ;
7. une date de mise à jour ;
8. une mention de relecture ou d'expérience réelle de Karine lorsque vraie ;
9. des images originales ;
10. aucun avis, certificat, origine, fabrication ou bénéfice non prouvé.

Les titles proposés ne doivent pas être suffixés deux fois par Shopify. La convention est : champ SEO sans marque si le thème ajoute automatiquement `MilAura`, sinon suffixe unique `| MilAura`.

## 2. Collections de type

### 2.1 Bijoux en pierres naturelles

- URL : `/collections/bijoux-pierres-naturelles`
- Statut : live, à corriger
- Requête principale : `bijoux en pierres naturelles`
- H1 : `Bijoux en pierres naturelles`
- Title : `Bijoux en pierres naturelles : bracelets, colliers et bagues`
- Meta description : `Découvrez les bijoux en pierres naturelles MilAura : bracelets, colliers, bagues, boucles d'oreilles et pendentifs, avec matières et dimensions détaillées.`
- Réponse d'ouverture : expliquer que la page réunit les bijoux classés par type et pierre, sans promesse de lithothérapie.
- Sections : choisir par type ; choisir par pierre ; matières ; guide d'entretien ; sélection disponible.
- Produits : bijoux actifs avec pierre et type renseignés.
- Règle : famille bijoux ET `stone_handle` renseigné ; exclure cadeaux internes.
- Metafields : type, pierre, matières, couleur, dimensions, entretien, photos.
- Liens entrants : accueil, menu Bijoux, guides d'entretien.
- Liens sortants : cinq types, hub pierre, hub intention.
- CTA : `Choisir mon bijou`
- Photos : composition multi-types, détail de pierre, trois photos portées.
- Schema : `CollectionPage`, `ItemList`, `BreadcrumbList`.
- Pinterest : tableau `Bijoux en pierres naturelles`, groupe `all_jewelry`.
- Ads : landing générique Search et remarketing, pas d'annonce avant tracking et consentement.

### 2.2 Briefs par type

| URL | H1 | Title SEO | Meta description | CTA | Besoin photo |
|---|---|---|---|---|---|
| `/collections/bracelets-pierres` | Bracelets en pierres naturelles | Bracelets en pierres naturelles pour femme et homme | Explorez les bracelets en pierres naturelles MilAura. Pierre, diamètre, tour de poignet, matière et entretien sont indiqués pour mieux choisir. | Choisir mon bracelet | poignet, fermoir, échelle des perles |
| `/collections/colliers-pierres` | Colliers en pierres naturelles | Colliers en pierres naturelles : chaînes et pierres | Découvrez nos colliers en pierres naturelles avec longueur, matière, type de pierre et détails du fermoir pour choisir un bijou adapté. | Voir les colliers | porté buste, longueur, fermoir |
| `/collections/boucles-oreilles` | Boucles d'oreilles en pierres naturelles | Boucles d'oreilles en pierres naturelles | Découvrez les boucles d'oreilles MilAura ornées de pierres naturelles, avec dimensions, matière et type de fermoir clairement indiqués. | Voir les boucles | face et profil porté, fermoir, paire complète |
| `/collections/bagues-pierres` | Bagues en pierres naturelles | Bagues en pierres naturelles : tailles et matières | Parcourez les bagues en pierres naturelles MilAura. Taille, caractère ajustable, matière et pierre sont précisés pour choisir sans ambiguïté. | Trouver ma bague | main portée, vue de profil, mesure |
| `/collections/pendentifs` | Pendentifs en pierres naturelles | Pendentifs en pierres naturelles | Choisissez un pendentif en pierre naturelle selon sa pierre, ses dimensions et sa matière. Chaîne incluse ou non : l'information est indiquée sur chaque fiche. | Choisir mon pendentif | porté, détail bélière, échelle |

Plan de contenu pour chaque type : réponse directe ; grille ; filtres pierre/matière/couleur/prix ; comment choisir ; dimensions et tailles ; entretien ; liens pierres ; CTA.

Règle intelligente cible : `milaura.product_type_handle=<type>`. Avant remplacement des tags, comparer chaque membre et chaque exclusion.

## 3. Hub Bijoux par pierre

- URL : `/pages/bijoux-par-pierre`
- Statut : à créer non publiée
- Requête principale : `bijoux par pierre`
- Secondaires : `choisir une pierre pour un bijou`, `bijoux pierre naturelle par couleur`
- H1 : `Choisir un bijou par pierre`
- Title : `Bijoux par pierre : améthyste, quartz rose et plus`
- Meta description : `Comparez les bijoux MilAura par pierre, couleur et type. Découvrez les collections disponibles et des conseils factuels pour choisir et entretenir votre bijou.`
- Réponse d'ouverture : `Chaque pierre se distingue d'abord par sa composition, sa couleur, ses nuances et son entretien. Ce guide permet de comparer les collections MilAura réellement disponibles, puis de choisir le type de bijou qui vous convient.`
- Sections : grille des pierres publiques ; choisir par couleur ; choisir par type ; entretien ; différence entre fait gemmologique et tradition ; sources.
- Produits : aperçus de 3 produits maximum par pierre, puis lien vers collection.
- Metafields : image, nom public, composition, couleurs, entretien, route, statut public.
- Liens entrants : accueil, collection bijoux, articles pierres.
- Liens sortants : dix collections pierre, cinq types, hub intention.
- CTA : `Découvrir les bijoux en <pierre>`
- Photos : une mosaïque de pierres MilAura et une macro par collection.
- Schema : `WebPage`, `BreadcrumbList`, éventuellement `ItemList` des collections, jamais `Product` pour les cartes.
- Pinterest : tableau `Guide des pierres naturelles`.
- Ads : destination de découverte ; les annonces précises vont directement à la pierre concernée.

## 4. Collections pierre prioritaires

### 4.1 Matrice éditoriale

| Pierre | URL | H1 | Title SEO | Meta description |
|---|---|---|---|---|
| Améthyste | `/collections/par-pierre-amethyste` | Bijoux en améthyste | Bijoux en améthyste : bracelets, bagues et pendentifs | Découvrez les bijoux en améthyste MilAura. Comparez les nuances, les types de bijoux, les matières et les conseils d'entretien de ce quartz violet. |
| Agate | `/collections/par-pierre-agate` | Bijoux en agate | Bijoux en agate : bracelets et colliers | Explorez les bijoux en agate MilAura et leurs motifs naturels. Chaque fiche précise la variété, les dimensions, la matière et l'entretien. |
| Quartz rose | `/collections/par-pierre-quartz-rose` | Bijoux en quartz rose | Bijoux en quartz rose : bagues, colliers et bracelets | Découvrez les bijoux en quartz rose MilAura : bague, colliers, bracelet et boucles, avec détails de matière, dimensions et entretien disponibles sur chaque fiche. |
| Jaspe | `/collections/par-pierre-jaspe` | Bijoux en jaspe | Bijoux en jaspe : couleurs et variétés | Découvrez les bijoux en jaspe MilAura. Les variétés, motifs, dimensions et matières sont précisés pour comparer chaque pièce avec clarté. |
| Aventurine | `/collections/par-pierre-aventurine` | Bijoux en aventurine | Bijoux en aventurine : bracelets, bagues et colliers | Explorez les bijoux en aventurine MilAura, leurs nuances et inclusions. Variété, matière, dimensions et entretien sont détaillés sur chaque fiche. |
| Lapis-lazuli | `/collections/par-pierre-lapis-lazuli` | Bijoux en lapis-lazuli | Bijoux en lapis-lazuli : le bleu en détail | Découvrez les bijoux en lapis-lazuli MilAura. Comparez les nuances, les matières, les dimensions et les conseils d'entretien. |
| Amazonite | `/collections/par-pierre-amazonite` | Bijoux en amazonite | Bijoux en amazonite : nuances bleu-vert | Découvrez les bijoux en amazonite MilAura et leurs nuances bleu-vert, avec matière, dimensions, photos de détail et conseils d'entretien. |
| Œil de tigre | `/collections/par-pierre-oeil-de-tigre` | Bijoux en œil de tigre | Bijoux en œil de tigre : reflets et chatoyance | Explorez les bijoux en œil de tigre MilAura. Comparez leurs reflets, leurs types, leurs matières et leurs dimensions avant de choisir. |
| Sodalite | `/collections/par-pierre-sodalite` | Bijoux en sodalite | Bijoux en sodalite : bleu veiné et entretien | Découvrez les bijoux en sodalite MilAura, leurs nuances bleues, leurs matières et les conseils pour les distinguer et les entretenir. |
| Jade | `/collections/par-pierre-jade` | Bijoux en jade | Bijoux en jade : variétés, couleurs et matières | Découvrez les bijoux en jade MilAura. La variété, la couleur, la matière, les dimensions et l'entretien doivent être précisés sur chaque fiche. |

### 4.2 Contenu visible commun, à rendre spécifique

- Réponse courte : définition minéralogique simple et offre disponible.
- H2 `Quels bijoux en <pierre> sont disponibles ?`
- H2 `Comment reconnaître les nuances de <pierre> ?`
- H2 `Comment choisir et porter ce bijou ?`
- H2 `Comment entretenir <pierre> et sa monture ?`
- H2 `Quelle symbolique est traditionnellement associée à <pierre> ?`
- H2 `Questions fréquentes`, seulement si les réponses sont spécifiques.

La section symbolique commence par une attribution explicite : `Dans certaines traditions associées aux pierres...`. Elle se termine par : `Ces usages relèvent de traditions et ne remplacent aucun avis ni traitement médical.`

### 4.3 Règles, metafields et activation

- Produits attendus : 5 minimum, 8 préférés, 2 types de bijoux minimum.
- Règle : `stone_handle=<pierre>` et famille bijoux.
- Metafields collection : `stone_intro`, `stone_composition`, `stone_colors`, `stone_benefits`, `comment_porter`, `care`, `source_urls`, `content_updated_at`.
- Libellé public de `stone_benefits` : `Symbolique traditionnelle`.
- Contrat prioritaire : `docs/reference/2026-08-10-contrat-donnees-catalogue.md`.
- Liens entrants : hub pierre, types, articles, éventuel mois ou année.
- Liens sortants : types présents, deux pierres proches, guide d'entretien, hub intention.
- CTA : `Voir les bijoux en <pierre>` puis CTA produit natif.
- Photos : hero 3:2 ou 4:3, macro pierre, porté, détail matière, emballage.
- Schema : collection schemas ; FAQ seulement si visible et spécifique.
- Pinterest : un tableau et un groupe produit par pierre active.
- Ads : groupe Search pierre et groupe Shopping uniquement après parité page/flux.

## 5. Hub Choisir sa pierre

- URL : `/pages/choisir-sa-pierre`
- Statut : à créer non publiée
- H1 : `Quelle pierre choisir ?`
- Title : `Quelle pierre choisir selon sa couleur et sa symbolique ?`
- Meta description : `Choisissez une pierre selon sa couleur, le bijou recherché et les symboliques traditionnellement associées, puis découvrez les produits MilAura disponibles.`
- Réponse d'ouverture : expliquer que le choix peut partir de l'esthétique, du type de bijou ou d'une intention symbolique, sans effet garanti.
- Sections : par couleur ; par type ; par symbolique ; comparatif ; entretien ; limites des traditions ; sélection disponible.
- Produits : aperçus des groupes ayant dépassé le seuil.
- Règle : aucune collection produit globale ; lecture de listes contrôlées.
- Liens : accueil, hub pierre, collections intention activées, guide naissance.
- CTA : `Explorer les pierres disponibles`
- Photos : palette de couleurs réelle, gestes de sélection, portés.
- Schema : `WebPage`, `BreadcrumbList`.
- Pinterest : tableau `Quelle pierre choisir ?`.
- Ads : landing avec `?intention=<valeur>` autorisé comme état d'interface non indexable.

## 6. Hub Pierres de naissance

- URL : `/pages/pierres-de-naissance`
- Statut : à créer P2
- H1 : `Pierres de naissance par mois`
- Title : `Pierres de naissance par mois : guide et bijoux`
- Meta description : `Découvrez les pierres de naissance mois par mois, les variantes selon les traditions et les bijoux MilAura réellement disponibles pour un cadeau personnel.`
- Réponse d'ouverture : expliquer qu'il existe des listes modernes et traditionnelles, parfois plusieurs pierres par mois.
- Sections : tableau des 12 mois ; origine de la tradition ; différences de listes ; comment choisir ; disponibilité MilAura ; entretien ; sources.
- Source principale : GIA, complétée seulement par des sources gemmologiques identifiées.
- Produits : uniquement pour les mois avec correspondance réelle, stock et variété vérifiés.
- Metafields produit : `birth_months`, source de correspondance, pierre exacte.
- Liens : collections pierre, cadeau, entretien, enfant mensuel seulement après seuil.
- CTA : `Voir les bijoux disponibles pour <mois>`
- Photos : calendrier 12 mois original, macros des pierres réellement vendues.
- Schema : `WebPage`, `BreadcrumbList`, éventuellement `ItemList` des mois.
- Pinterest : tableau `Pierres de naissance par mois`, groupes `birth_month_<month>`.
- Ads : générique vers hub ; requête mensuelle vers enfant uniquement après publication.

## 7. Hub Anniversaires de mariage

- URL : `/pages/cadeaux-anniversaire-de-mariage`
- Statut : à créer P2
- H1 : `Cadeaux d'anniversaire de mariage par année`
- Title : `Cadeaux d'anniversaire de mariage et noces par année`
- Meta description : `Trouvez un cadeau d'anniversaire de mariage selon l'année, la symbolique, le destinataire et le budget, parmi les créations MilAura disponibles.`
- Réponse d'ouverture : distinguer l'anniversaire de mariage du cadeau offert au moment du mariage et préciser que les traditions varient selon les pays.
- Sections : tableau par année ; grandes noces ; femme/homme/couple ; budget ; personnalisation réellement disponible ; délai ; matière exacte ; FAQ visible.
- Produits : sélections manuelles seulement, jamais une association automatique non relue.
- Metafields : année, matière/pierre, destinataire, délai, personnalisation, occasion.
- Liens : pages années actives, collections pierre, pages type, livraison et retours.
- CTA : `Choisir l'année de mariage`
- Photos : cadeau emballé réel, duo de produits, carte de message si disponible.
- Schema : `WebPage`, `BreadcrumbList`; pas de Product sur les sélections.
- Pinterest : tableau `Cadeaux d'anniversaire de mariage`, sous-thèmes par grande noce.
- Ads : groupes par année ; aucune annonce vers une année non publiée.

## 8. Contrôle final de chaque brief

- le title n'est pas dupliqué par le thème ;
- la meta description ne promet pas de bénéfice ;
- le H1 est unique ;
- le stock respecte le seuil ;
- les règles n'incluent aucun brouillon, cadeau interne ou produit hors famille ;
- les photos sont originales ;
- les sources sont visibles lorsque nécessaires ;
- la livraison, le retour, la matière et l'origine sont conformes à la vérité ;
- le canonical et le sitemap sont corrects ;
- les variantes paramétrées ne deviennent pas de nouvelles pages SEO.
