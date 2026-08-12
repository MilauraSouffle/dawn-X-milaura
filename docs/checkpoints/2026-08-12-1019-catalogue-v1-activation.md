# Activation catalogue V1

Date: 2026-08-12 10:19 CEST

## Autorisation et périmètre

Patrice a donné le GO pour l'activation publique du catalogue V1.

Périmètre exécuté:

- activation de six collections validées;
- création et activation de trois hubs éditoriaux;
- ajout de cinq liens au menu principal;
- activation ciblée des templates nécessaires sur le thème live;
- contrôles SEO techniques, sitemap et parité des thèmes.

Hors périmètre et non modifié:

- produits et produits en brouillon;
- inventaire, prix et frais de port;
- homepage;
- panier et livraison;
- campagnes, tracking, Pinterest, Merchant Center, GA4 et Search Console.

Le journal de mutation confirme `productMutations: 0`.

## Créé dans Shopify Admin

### Pages

| ID Admin | Route | Template | Statut |
|---|---|---|---|
| `166714081627` | `/pages/bijoux-par-pierre` | `milaura-bijoux-pierre` | visible |
| `166714179931` | `/pages/pierres-de-naissance` | `milaura-pierres-naissance` | visible |
| `166714245467` | `/pages/cadeaux-anniversaire-de-mariage` | `milaura-cadeaux-mariage` | visible |

Les trois pages ont un titre SEO et une méta-description explicites.

### Collection créée pour la V1

- ID Admin: `677833834843`;
- route: `/collections/par-pierre-aigue-marine`;
- titre: `Bijoux en aigue-marine`;
- template: `milaura-pierre`;
- six produits actifs;
- contrat collection `milaura.*` complet, dont `stone_handle`, `stone_benefits`, `source_urls` et `content_updated_at`;
- sources GIA contrôlées en HTTP 200 le 2026-08-12.

## Publié sur la Boutique en ligne

Publication Shopify enregistrée entre 2026-08-12 10:12:12 et 10:12:14 CEST:

| Collection | ID Admin | Produits actifs |
|---|---:|---:|
| `/collections/bagues-pierres` | `677666718043` | 6 |
| `/collections/par-pierre-aigue-marine` | `677833834843` | 6 |
| `/collections/par-pierre-agate` | `677666750811` | 10 |
| `/collections/par-pierre-quartz-rose` | `677666783579` | 8 |
| `/collections/par-pierre-lapis-lazuli` | `677666816347` | 6 |
| `/collections/par-pierre-amazonite` | `677666849115` | 6 |

Les trois hubs listés plus haut sont également publics.

## Navigation principale

Menu Shopify Admin `main-menu`, ID `304632889691`:

- sous `Pierres & Mineraux`: `Choisir sa pierre`, `Bijoux par pierre`, `Pierres de naissance`;
- sous `Bijoux & Pierres Naturelles`: `Bagues en pierres`, `Cadeaux de mariage`.

Chaque entrée a été reliée à l'objet Shopify correspondant, pas à une URL libre.

## Thèmes

### Thème live `190430282075`

Fichiers poussés de manière ciblée avec `--nodelete --strict --allow-live`:

- `sections/milaura-catalogue-hub.liquid`;
- `sections/milaura-collection-intro.liquid`;
- `sections/milaura-collection-vertus.liquid`;
- `sections/milaura-collection-faq.liquid`;
- `templates/collection.milaura-pierre.json`;
- `templates/collection.milaura-type.json`;
- `templates/page.milaura-bijoux-pierre.json`;
- `templates/page.milaura-pierres-naissance.json`;
- `templates/page.milaura-cadeaux-mariage.json`.

Un pullback ciblé confirme une égalité bit à bit pour les neuf fichiers.

### Thème de développement `199421952347`

Les neuf fichiers du périmètre final ont été contrôlés par pullback après l'activation live. Ils correspondent bit à bit aux fichiers locaux. Le template pierre a aussi été contrôlé en preview.

## Contrôles publics

- les neuf routes publiques répondent HTTP 200;
- chaque route contient exactement un H1;
- chaque route a une canonique auto-référente;
- aucune route ne contient `noindex`;
- les collections rendent respectivement 6, 6, 10, 8, 6 et 6 liens produit uniques;
- le hub Naissance rend quatre produits sélectionnés;
- le hub Mariage rend trois produits sélectionnés;
- le hub Bijoux par pierre relie les cinq collections pierre;
- les cinq entrées du menu sont présentes dans le HTML public desktop et mobile;
- les trois hubs apparaissent dans le sitemap pages;
- les six collections apparaissent dans le sitemap collections.

## Contrôles locaux et Git

- Theme Check: 285 fichiers, 0 erreur, 29 avertissements historiques;
- validation JSON Shopify des cinq templates ciblés par suppression du commentaire d'en-tête puis `JSON.parse`: réussite;
- `git diff --check` ciblé et global: réussite;
- commit strict: uniquement le composant hub, les trois templates de page et ce checkpoint.

## Dépendances et chantiers non clôturés

### Dépendant de l'inventaire

- douze pages mensuelles de naissance non créées;
- pages enfants par anniversaire de mariage non créées;
- autres collections pierre et type à activer seulement après seuil produit et contrôle du stock;
- metas définitives des treize collections publiques historiques à poser seulement après fiabilisation des membres, du stock et du contenu;
- liste des dix-huit baguettes à retirer du catalogue public transmise à la session inventaire, sans mutation dans ce lot.

### Dépendant des accès externes

- GSC, GA4, Merchant Center et Pinterest restent non vérifiés dans cette session;
- les performances organiques, requêtes, erreurs d'exploration et signaux marchands devront être mesurés après accès légitime.

### Autres faits critiques hors de ce lot

- écart de prix et frais de port dans le schéma produit;
- page `/pages/bracelet-amethyste` et ses allégations non prouvées;
- indexabilité des recherches internes et de certaines URLs de tags;
- double H1 de la homepage, transmis à la session UI/UX.

Ces points ne sont pas présentés comme corrigés par l'activation catalogue V1.
