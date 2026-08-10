# Audit SEO, AEO, GEO et catalogue MilAura

Date de référence : 2026-08-09
Périmètre : `milaura.fr`, thème Shopify local et catalogue Shopify en lecture seule
Statut : phase 1 terminée, aucune mutation Shopify publique

Mise à jour d'exécution du 2026-08-09 : le baseline ci-dessous reste la photographie avant mutation. Après GO, l'Admin compte 51 définitions produit, 11 définitions collection et 26 collections, dont 20 restent publiques. Cinq collections ont été créées hors Boutique en ligne. Le lot de 20 actifs possède maintenant une catégorie Shopify standard et `catalogue_family=bijou`. Le correctif technique `noindex,follow`, titles et schema global factuel est live. Voir [`../reference/2026-08-09-execution-phase2-catalogue.md`](../reference/2026-08-09-execution-phase2-catalogue.md).

## 1. Résumé de décision

MilAura possède déjà une base technique exploitable, mais elle ne doit pas encore multiplier les pages indexables. Le problème principal n'est pas l'absence de routes. Il est l'écart entre les promesses publiques, les données structurées, les règles de collection et les données produits.

Ordre recommandé :

1. P0 : corriger les faits commerciaux et les risques de conformité avant toute expansion SEO.
2. P1 : normaliser les types, pierres, intentions et matériaux, puis consolider les collections de type existantes.
3. P1 : activer un hub par pierre et dix collections pierre seulement lorsque chaque seuil est vérifié.
4. P2 : publier les hubs Pierres de naissance et Anniversaires de mariage avant leurs sous-pages.
5. P3 : étendre uniquement à partir de stock réel, de contenu original et de données Search Console.

## 2. Méthode et niveau de preuve

L'audit a combiné :

- lecture du thème, des contrats produit et des plans existants ;
- Shopify Admin API en lecture seule avec les accès déjà configurés ;
- comparaison Admin, `/collections.json`, sitemaps et routes publiques ;
- crawl HTML de routes représentatives ;
- recherche SERP française datée du 2026-08-09 ;
- vérification des règles officielles Google, Shopify, Pinterest et DGCCRF.

Statuts employés :

- **confirmé** : vu dans le code, l'Admin ou la réponse publique ;
- **inféré** : déduit de plusieurs signaux cohérents, mais sans outil propriétaire de mesure ;
- **non vérifié** : accès absent ou preuve insuffisante.

Les comptes et interfaces Google Search Console, GA4, Merchant Center et Pinterest n'étaient pas disponibles par un accès légitime déjà configuré. Leur état est donc **non vérifié**. La présence d'une balise de vérification Merchant dans le HTML ne prouve ni la qualité du flux ni l'état du compte.

## 3. Faits catalogue confirmés

### 3.1 Produits

| Indicateur | Valeur au 2026-08-09 |
|---|---:|
| Produits Admin | 589 |
| Actifs | 261 |
| Brouillons | 312 |
| Archivés | 15 |
| Non répertoriés | 1 |
| Produits publics vus dans `/products.json` | 261 |
| Produits dans le sitemap | 262 |
| Actifs avec inventaire Shopify positif | 260 |
| Actifs avec inventaire Shopify nul | 1 |
| Prix commercial minimum | 0,80 € |
| Prix commercial médian | 15,90 € |
| Prix commercial maximum | 240,90 € |

L'inventaire Shopify ne constitue pas une preuve du stock physique. La session inventaire devra rapprocher Shopify, le stock réel et les coûts avant toute création ou promotion.

Répartition des prix de 261 actifs visibles, cadeau à 0 € inclus :

- moins de 25 € : 194 ;
- de 25 € à 49,99 € : 45 ;
- de 50 € à 79,99 € : 15 ;
- 80 € et plus : 7.

Le catalogue est donc très concentré sous 25 €. Les futures pages cadeau ne doivent pas inventer une profondeur premium qui n'existe pas encore.

### 3.2 Collections

| Indicateur | Valeur |
|---|---:|
| Collections Admin | 21 |
| Collections publiques dans le sitemap | 20 |
| Collection interne non publiée | `recos-pool` |
| Collections avec template pierre | 0 |
| Définitions de metafields collection | 0 |
| Collections sans title et description SEO explicites | 13 sur 20 |

Comptes actifs visibles par collection, indépendamment du nombre Admin qui inclut aussi des brouillons :

| Handle | Actifs visibles | Template | État observé |
|---|---:|---|---|
| `bijoux-pierres-naturelles` | 109 | `milaura-collection` | public, à corriger |
| `bracelets-pierres` | 74 | défaut | public, à enrichir |
| `pendentifs` | 29 | défaut | public, à enrichir |
| `colliers-pierres` | 14 | défaut | public, à enrichir |
| `boucles-oreilles` | 13 | défaut | public, à enrichir |
| `chaines` | 4 | défaut | public, mince |
| `par-pierre-amethyste` | 9 | défaut | public, à normaliser |
| `par-pierre-jaspe-rouge` | 2 | défaut | public, sous le seuil |
| `serenite-sommeil` | 10 | défaut | public, règle trop large |
| `protection-energie` | 5 | défaut | public, règle trop large |
| `amour-relations` | 3 | défaut | public, sous le seuil |
| `savons-naturels` | 13 | défaut | public |
| `bols-chantants` | 2 | défaut | public, sous le seuil |
| `selection-aout-2026` | 20 | dédié | public, hors périmètre de mutation |

### 3.3 Taxonomie produit

Les champs natifs `productType`, les tags et les metafields se contredisent encore. Exemples confirmés :

- `Bracelet`, `bracelet` et `Bracelet en pierres naturelles` coexistent ;
- `Pendentif` et `pendentif` coexistent ;
- `boucles` est utilisé comme `product_type_handle`, alors que le contrat attend `boucles-oreilles` ;
- `amour-de-soi` et `clarte-interieure` ne font pas partie du vocabulaire contractuel actuel ;
- les règles publiques reposent encore sur des tags exacts, alors que les metafields sont censés devenir la source de vérité.

Couverture des principaux metafields parmi 261 actifs visibles :

| Metafield | Produits renseignés | Couverture |
|---|---:|---:|
| `stone_handle` | 195 | 74,7 % |
| `product_type_handle` | 249 | 95,4 % |
| `intention_handle` | 40 | 15,3 % |
| `energy_handle` | 12 | 4,6 % |
| `stone_name` | 195 | 74,7 % |
| `stone_description` | 29 | 11,1 % |
| `stone_benefits` | 29 | 11,1 % |
| `vertus` | 41 | 15,7 % |
| `qualite` | 231 | 88,5 % |
| `specifications` | 258 | 98,9 % |
| `benefits_json` | 258 | 98,9 % |
| `story_text` | 239 | 91,6 % |
| `ritual_steps` | 40 | 15,3 % |
| `faq_json` | 258 | 98,9 % |

Plusieurs de ces champs existent sur des produits sans définition Admin correspondante. Ils sont donc fragiles pour l'édition, la validation et les collections intelligentes.

### 3.4 Doublons potentiels

Des groupes de titres strictement identiques ont été trouvés, notamment :

- quatre `Pendentif Améthyste Argent Rhodié` ;
- trois `Baguette Améthyste` ;
- plusieurs doubles de baguettes, pendules, sphères, pointes et porte-clés.

Ce sont des **suspicions de doublons**, pas une preuve de doublon physique. La session inventaire doit comparer EAN, SKU, fournisseur, dimensions, photo source, coût et stock avant fusion.

## 4. Crawl technique public

### 4.1 Indexation et sitemaps

Le sitemap parent référence :

- 262 produits ;
- 20 collections ;
- 9 pages ;
- 7 URLs de blogs et articles ;
- 1 route agentique.

Les principales routes publiques répondent en 200 avec canonical auto-référent. La pagination de collection possède des canonicals de page et des liens `prev` et `next`, ce qui est cohérent.

Risques confirmés :

- `/collections/bracelets-pierres/bracelet` répond en 200, est indexable et se canonise elle-même. Cette URL de tag duplique la collection principale ;
- `/search?q=amethyste` répond en 200, est indexable et se canonise elle-même ;
- les filtres simples se canonisent vers la collection de base, mais restent crawlables ;
- le produit non répertorié est `noindex,nofollow`, mais apparaît dans le sitemap produit ;
- un cadeau gratuit actif dans l'Admin répond en 404 sur sa route directe.

Actions P0/P1 proposées après GO :

1. rendre les pages de recherche interne `noindex,follow` ;
2. supprimer les liens internes vers les anciennes URLs de tag ;
3. rediriger ou neutraliser les variantes de tag auto-canoniques ;
4. vérifier le décalage entre produit non répertorié et sitemap ;
5. résoudre le cadeau actif qui répond en 404.

### 4.2 Robots

Le `robots.txt` Shopify bloque les zones privées, panier, tris et certaines combinaisons de filtres. Il ne bloque pas la recherche interne ni toutes les variantes de tags. Robots ne remplace pas une directive `noindex` pour une URL déjà découvrable.

### 4.3 Homepage

Deux H1 identiques sont rendus sur la homepage : `La beauté des bijoux rencontre les vertus des pierres.` La homepage appartient à la session UI/UX et n'a pas été modifiée. L'écart doit être transmis à cette session.

## 5. Données structurées

### 5.1 Éléments valides ou utiles

- Les fiches produit rendent `Product`, `Offer`, `BreadcrumbList` et une FAQ visible assortie de `FAQPage`.
- Les collections standard rendent `CollectionPage`, `ItemList` et `BreadcrumbList`.
- Le template `collection.milaura-pierre` existe localement et assemble un hero, des contenus pierre, une grille, une FAQ et des liens croisés.
- Le schema `Product` est placé sur les fiches produit, pas sur les pages de collection.

### 5.2 Écarts critiques

Le JSON-LD produit annonce encore :

- livraison offerte dès 39 € ;
- frais de 4,90 € sous le seuil ;
- des délais de traitement et transit non prouvés ;
- `mpn` égal au SKU, sans preuve qu'il s'agit du numéro fabricant.

La vérité commerciale documentée est actuellement 5,80 € en France sous 50 €, puis gratuite à partir de 50 €, et 12 € en Europe. Le schema doit refléter la politique visible et réellement appliquée, ou être retiré jusqu'à preuve.

Le schema global `Organization` ou `LocalBusiness` contient aussi des affirmations générales non prouvées : `pierres certifiées`, `créations artisanales françaises`, fondateur, adresse et horaires. Chaque champ doit être confirmé avant conservation.

Le template pierre et des templates collection contiennent encore `Artisanat Français`, `Créations faites main en France`, `Pierres Certifiées` et l'ancien seuil de livraison. Aucun de ces textes ne doit être publié sur de nouvelles routes sans preuve.

La collection saisonnière ne rend pas les schemas `CollectionPage` et `BreadcrumbList`. Cette surface est hors périmètre de mutation et le constat est seulement transmis.

### 5.3 FAQ

Google a retiré la documentation du résultat enrichi FAQ pour les sites ordinaires en 2026. Conserver `FAQPage` peut aider la compréhension sémantique si les questions et réponses sont réellement visibles, mais il ne faut promettre aucun résultat enrichi Google.

### 5.4 Article

L'article public sur l'améthyste rend un bloc `Article` et un bloc `WebPage` valides, avec canonical auto-référent, auteur `Karine`, `datePublished` et `dateModified` au 2026-03-31. Aucun bloc JSON-LD invalide n'a été détecté sur cet échantillon.

Le contenu visible et ses métadonnées posent toutefois un problème éditorial : le title duplique la marque, et la meta description cible explicitement `stress`, `sommeil` et `concentration` sous le mot `bienfaits`. Le schema Article ne corrige pas ce risque. Le texte, le title et la description doivent être relus selon la ligne factuelle et attribuée, puis `dateModified` doit refléter la vraie mise à jour.

## 6. Contenus et conformité

La page publique `/pages/bracelet-amethyste` cumule plusieurs risques :

- faux ou non prouvés `4,8/5` et `127 avis` ;
- badge `Bestseller` non relié à une preuve ;
- `pierres naturelles certifiées` et `artisanat français` non prouvés ;
- comparaison de prix et cadeaux non vérifiés ;
- retour annoncé à 30 jours, potentiellement différent de la politique réelle ;
- promesses de lithothérapie formulées comme effets.

Décision recommandée : ne pas réécrire cette page comme seconde landing. Après analyse Search Console et validation, la rediriger vers `/collections/par-pierre-amethyste` ou vers la fiche produit pertinente.

Les descriptions de collections actuelles emploient aussi des formulations telles que `favoriser le sommeil`, `chasser le stress`, `repousser les énergies lourdes` et `vibrations purifient`. La DGCCRF cite les propriétés de bien-être prétendument attribuées aux gemmes parmi les allégations fantaisistes ou trompeuses. La ligne éditoriale devra distinguer :

- fait gemmologique et composition ;
- tradition ou croyance, clairement attribuée ;
- symbolique personnelle et rituel ;
- usage esthétique et conseil d'entretien.

Elle ne doit jamais présenter une pierre comme traitement, garantie ou résultat objectif.

## 7. Recherche française et SERP

La recherche du 2026-08-09 est qualitative. Aucun volume, difficulté ou position MilAura n'a été inventé.

### Cluster A - Types de bijoux

| Requêtes observées | Intention dominante | Résultats observés | Concurrents récurrents | Destination MilAura |
|---|---|---|---|---|
| bracelets en pierres naturelles | commerciale | catégories, produits, guides intégrés | Pierre & Lune, MATY, Solivaya, La Pierre FR | collection |
| bijoux en pierres naturelles | mixte commerciale et découverte | home spécialisées, catégories, guides | La Pierre FR, boutiques spécialisées | hub collection |
| colliers en pierres naturelles | commerciale | catégories et produits | boutiques verticales bijoux | collection |
| boucles d'oreilles pierres naturelles | commerciale | catégories, images, produits | Ouizengo, Fidget Lab, créateurs | collection |
| bagues pierres naturelles | commerciale | catégories et créateurs | bijouteries et marketplaces | collection |
| pendentif pierre naturelle | commerciale | catégories, produits | minéraux et bijoux spécialisés | collection |

Opportunité : titres précis, photos portées originales, matière et dimensions visibles, filtres stables. Le niveau de concurrence est qualitativement élevé, mais non chiffré.

### Cluster B - Pierres

Les SERP mélangent catégories, fiches produit et guides. Les domaines observés vont des maisons de joaillerie aux boutiques lithothérapie. Le meilleur objet MilAura est une collection pierre solide, complétée par un guide éditorial seulement lorsqu'il apporte de la gemmologie, de l'entretien et des conseils d'achat originaux.

Les dix meilleures opportunités issues du catalogue ne sont pas exactement les dix pierres demandées. En nombre de bijoux actuellement renseignés : améthyste 14, agate 10, quartz rose 9, jaspe 9, aventurine 8, lapis-lazuli 6, amazonite 6, œil de tigre 5, sodalite 5 et jade 5. Tourmaline 4, cornaline 4, pierre de lune 2, labradorite 1 et citrine 1 doivent rester réservées.

### Cluster C - Intentions

Les SERP sont surtout composées de guides `quelle pierre pour...`, de catégories lithothérapie et de produits. Elles emploient souvent des promesses trop fortes. MilAura doit choisir une position plus sûre : `pierre traditionnellement associée à`, `symbole de`, `support d'intention`, jamais `réduit`, `soigne`, `améliore` ou `protège` comme résultat garanti.

La couverture de `intention_handle` n'est que de 40 produits. Une page indexable par intention serait donc prématurée, sauf après normalisation et seuil. Le bon premier objet est un hub de choix avec préselection, puis au maximum quatre groupes sémantiques solides : calme et sommeil, amour et douceur, protection et ancrage, confiance et énergie.

### Cluster D - Pierres de naissance

Les SERP présentent des guides complets par mois, des pages bijoutiers et des collections. La source gemmologique de référence retenue est le GIA. Les associations sont des traditions, parfois multiples : janvier grenat ; février améthyste ; mars aigue-marine ou héliotrope ; avril diamant ; mai émeraude ; juin perle, alexandrite ou pierre de lune ; juillet rubis ; août péridot, spinelle ou sardonyx ; septembre saphir ; octobre opale ou tourmaline ; novembre topaze ou citrine ; décembre turquoise, tanzanite ou zircon.

Le catalogue MilAura ne soutient aujourd'hui qu'une vraie page mensuelle forte, février avec l'améthyste. Il faut donc publier un hub complet avant douze pages faibles.

### Cluster E - Anniversaires de mariage

Les SERP distinguent nettement les guides par année et les pages de bijoutiers pour les grandes noces, surtout 25 ans et 40 ans. Les listes françaises ne sont pas universelles et peuvent diverger des listes internationales de pierres d'anniversaire. Les contenus devront expliquer cette différence au lieu de la masquer.

Le stock et les matières structurées ne suffisent pas encore à six ou huit pages fortes. Le bon premier objet est `/pages/cadeaux-anniversaire-de-mariage`, explicitement distinct d'un cadeau offert le jour du mariage. Les premières années candidates après inventaire sont 4 ans cire, 17 ans rose, 25 ans argent, 40 ans émeraude, 42 ans nacre, 48 ans améthyste et 50 ans or, en précisant que `doré` n'est pas `or massif`.

## 8. AEO, GEO et état Google au 2026-08-09

Google confirme que les fondamentaux SEO restent applicables aux AI Overviews et à AI Mode : indexabilité, contenu utile, liens internes, texte visible, images de qualité et données structurées conformes au visible. Aucun schema spécial IA n'est requis.

Google confirme également que `llms.txt` n'est pas nécessaire et n'a pas d'impact positif ou négatif connu sur le classement. La route indexable `/pages/llms-txt` n'est donc pas un avantage Google. Elle doit être évaluée comme une page publique ordinaire : utilité réelle, titre, canonical, contenu et statut d'indexation.

Le Google Search Status Dashboard ne signalait aucun incident actif au moment de la vérification. Les derniers changements listés étaient le spam update de juin 2026, le core update de mai 2026 et les mises à jour de mars et février 2026. Aucune baisse ne doit être attribuée à un update sans données Search Console datées.

Les contenus AEO et GEO MilAura devront :

- répondre en 40 à 80 mots dès l'introduction ;
- séparer fait, tradition et conseil ;
- employer des sous-titres correspondant à de vraies questions ;
- inclure des photos originales et légendées ;
- indiquer l'auteur ou la relecture réelle de Karine ;
- afficher une date de mise à jour ;
- citer une source gemmologique lorsqu'une correspondance est factuelle ;
- lier la réponse aux produits réellement disponibles.

## 9. Google Images, Shopping et Merchant Center

Opportunités :

- une image principale nette, sans texte promotionnel ni watermark envahissant ;
- produit occupant environ 75 à 90 % du cadre pour le flux ;
- variantes et disponibilité cohérentes entre page, schema et flux ;
- photos secondaires portées, macro pierre, fermoir, dimensions et emballage ;
- `alt` descriptif factuel, pas une liste de mots-clés ;
- GTIN uniquement quand un code fournisseur réel existe.

Seuls 223 produits actifs ont au moins un SKU et 7 au moins un code-barres. Il ne faut ni inventer un GTIN ni transformer automatiquement un SKU en MPN.

## 10. Sources primaires

- [Google - AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google - Structure d'un site e-commerce](https://developers.google.com/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure)
- [Google - Product structured data](https://developers.google.com/search/docs/appearance/structured-data/product)
- [Google Search Status Dashboard](https://status.search.google.com/)
- [Google Search documentation updates](https://developers.google.com/search/updates)
- [Google Merchant Center - données structurées](https://support.google.com/merchants/answer/7331077)
- [Shopify - collections intelligentes](https://help.shopify.com/en/manual/products/collections/automated-collections/auto-select)
- [Shopify - filtres Search & Discovery](https://help.shopify.com/en/manual/online-store/search-and-discovery/filters)
- [Pinterest - démarrer avec les catalogues](https://help.pinterest.com/en/business/article/before-you-get-started-with-catalogs)
- [GIA - pierres de naissance](https://www.gia.edu/birthstones)
- [DGCCRF - qualité et conformité des bijoux comportant des pierres gemmes](https://www.economie.gouv.fr/dgccrf/laction-de-la-dgccrf/les-enquetes/qualite-et-conformite-des-bijoux-comportant-des-pierres)

## 11. Limites et preuves manquantes

- Search Console : non vérifié ;
- requêtes, clics, impressions et cannibalisation réelle : non vérifiés ;
- GA4, consent mode et événements : non vérifiés ;
- flux Merchant Center, diagnostics et refus : non vérifiés ;
- compte Pinterest, site revendiqué, tag, catalogue et diagnostics : non vérifiés ;
- volumes et difficulté des mots-clés : non vérifiés ;
- stock physique et coût : non vérifiés ;
- fabrication française, certification, provenance, traitements et qualité gemmologique : non vérifiés sauf preuve produit individuelle ;
- performances Core Web Vitals réelles : non mesurées dans ce chantier catalogue.

## 12. Conclusion phase 1

Le moteur organique doit être construit sur une taxonomie vérifiable, pas sur une multiplication de pages. La boutique a assez de profondeur pour les catégories de type et dix familles pierre après normalisation, mais pas encore pour onze intentions, douze mois de naissance ou plusieurs dizaines d'anniversaires de mariage. Aucune mutation publique n'est autorisée avant le GO de Patrice.
