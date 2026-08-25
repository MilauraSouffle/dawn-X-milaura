# C1 O1-S : produit test dev store et QA privee des etats commandes

Date : 2026-08-25 09:14 CEST

Statut : `PRE-RESERVE - NON EXECUTE - ATTEND GO PATRICE`

## Verdict sur O1

Le master accepte le retour :

`O1_PREFLIGHT_BLOCKED_VARIANT_ABSENT - ZERO_ORDER_MUTATION - SCOPES_UNCHANGED - ROLLBACK_PASS`

Le lot O1 est ferme a `ab21c0df5946cd8b79b782d075dd8d00e5044404`. Le dev store C1 ne contient aucun variant correspondant au registre RC5. La session a correctement arrete avant scope, app dev, backend, commande, Mail ou mutation catalogue.

C1 n est pas bloque par le code. Il manque seulement une donnee de test appartenant au dev store. O1-S cree cette donnee de facon bornee, termine la QA O1 puis la supprime.

## GO exact requis

Patrice doit donner exactement :

`GO C1 O1-S - AJOUT TEMPORAIRE WRITE_PRODUCTS WRITE_PUBLICATIONS WRITE_ORDERS SUR L APP DE DEVELOPPEMENT PRIVEE, UN PRODUIT TEST OBSIDIENNE, UNE COMMANDE TEST SANS NOTIFICATION, QA ET ROLLBACK, SANS RELEASE NI LIVE`

Ce GO autorise uniquement le dev store C1. Il ne donne aucun droit sur le catalogue MilAura, le stock reel, les feeds, le theme, Mail, une app release, la production ou le live.

La suppression irreversible des deux objets crees reste soumise a une confirmation destructive apres restitution de leurs identifiants expurges :

`JE CONFIRME LA SUPPRESSION DE L UNIQUE COMMANDE ET DE L UNIQUE PRODUIT TEST C1 O1-S CREES DANS CE LOT`

## Audit master

- integration `codex/milaura-integration` propre et alignee `0/0` a `4dc02c66` ;
- O1 prive propre et aligne `0/0` a `ab21c0df5946cd8b79b782d075dd8d00e5044404` ;
- rapport O1 limite a une nouvelle preuve expurgee ;
- RNO1 exact et synthetique, zero commande ;
- `write_orders` absent avant et apres O1 ; configuration locale O1 jamais appliquee ;
- aucune commande, aucun produit, aucun variant, aucun scope, aucun runtime et aucune notification crees par O1 ;
- nouvelle branche locale et distante O1-S absente ; nouveau worktree absent ;
- theme `205027279193` reste non publie selon le rapport O1 ;
- master reste seul proprietaire de l integration et du live ; Mail reste seul proprietaire de ses surfaces.

Le registre utilise trois niveaux de correspondance : variant, produit, puis handle Storefront. Un produit du dev store ne peut pas reprendre les GID du store MilAura. Il peut en revanche reprendre l exact handle `bracelet-obsidienne-flocon-de-neige`, que le code utilise comme fallback explicite apres lecture Storefront du produit de la ligne.

Le master corrige aussi la future commande O1 : le calcul de pierre favorite ignore les commandes non executees. La commande synthetique doit donc etre marquee `PAID` et `FULFILLED`, tout en restant `test: true`, sans paiement externe et sans notification.

## Reservation Git

Depot prive : `Onora-studio/onora-ops`.

- branche a creer apres GO : `codex/milaura-c1-o1-seed-orders-qa-20260825` ;
- base exacte : `ab21c0df5946cd8b79b782d075dd8d00e5044404` ;
- worktree a creer : `/Users/paesano/Documents/_worktrees/agentic-ops-milaura-c1-o1-seed-orders-qa-20260825` ;
- tracking : `origin/codex/milaura-c1-o1-seed-orders-qa-20260825` ;
- seule zone suivie autorisee : `docs/milaura/shopify-admin-canonical/c1-o1-seed-orders-private-qa/**` ;
- configuration locale temporaire, jamais suivie : `docs/milaura/shopify-apps/customer-accounts-release-candidate/shopify.app.c1-o1-seed.toml` ;
- variables locales privees, jamais suivies : `docs/milaura/shopify-apps/customer-accounts-release-candidate/.c1-o1-seed.local.json`.

La configuration canonique `shopify.app.toml`, le code de l extension, `stone-mapping.js`, le backend, les migrations, les anciens lots C1 et toutes les zones Mail restent en lecture seule. Les deux fichiers locaux sont ignores, expurges des preuves puis supprimes au rollback.

Aucune branche theme n est creee. Aucun fichier theme ne peut etre modifie ou pousse.

## Environnements autorises

- seul store : `milaura-c1-preview.myshopify.com`, ID `107347837273` ;
- seule app : development preview C1, jamais de version deployee ou releasee ;
- seul theme : `205027279193`, role `unpublished`, sans push ;
- seul compte : RNO1 synthetique allowliste ;
- seul backend : endpoint stable prive `c1-preview-api.milaura.fr` et son conteneur arrete existant ;
- seule publication produit : Online Store du dev store, derriere sa protection par mot de passe ;
- seule observation Mail : recherche read-only du proprietaire Mail sur la boite controlee ;
- zero store, cliente, commande, produit, stock ou catalogue MilAura production.

## Produit synthetique autorise

Une seule mutation synchrone `productSet` cree un produit avec un variant :

- titre : `Bracelet Obsidienne Flocon de Neige 6mm` ;
- handle exact de mapping : `bracelet-obsidienne-flocon-de-neige` ;
- statut : `ACTIVE` ;
- vendor : `MilAura QA` ;
- product type : `C1 QA` ;
- tags : `MILAURA_C1_QA_ONLY`, `MILAURA_C1_O1_S` ;
- description explicite : produit synthetique de validation, dev store uniquement ;
- un seul variant `Default Title` ;
- prix public date repris sans invention : `12.90 EUR` ;
- SKU synthetique : `MILAURA-C1-QA-OBSIDIENNE` ;
- inventaire non suivi, aucune quantite et aucun cout ;
- non taxable et sans expedition physique ;
- un seul media exact du registre RC5 : `https://cdn.shopify.com/s/files/1/0977/2806/9979/files/3701459009633_lifestyle.png?v=1772307120` ;
- aucune collection, categorie, metafield, redirection, template, SEO, feed ou autre publication.

La source publique relue le 2026-08-25 confirme le titre, le handle, le prix, le media et le variant RC5 :

`https://milaura.fr/products/bracelet-obsidienne-flocon-de-neige.js`

Le produit est ensuite publie une seule fois avec `publishablePublish` vers la seule publication Online Store du dev store. La publication et la lecture Storefront du handle exact doivent passer avant toute commande.

## Configuration temporaire

La configuration locale nommee differe de la configuration canonique uniquement par l ajout temporaire de :

- `write_products` ;
- `write_publications` ;
- `write_orders`.

`currentAppInstallation.accessScopes` doit prouver les trois scopes absents avant le lot, exactement ces trois scopes ajoutes pendant la fenetre QA, puis les trois absents apres retour a la configuration canonique. Aucun `read_all_orders`, scope inventaire ou scope catalogue supplementaire.

References Shopify officielles verifiees le 2026-08-25 :

- `https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet` ;
- `https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetInput` ;
- `https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantSetInput` ;
- `https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish` ;
- `https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDelete` ;
- `https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreate` ;
- `https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOptionsInput` ;
- `https://shopify.dev/docs/api/admin-graphql/latest/queries/currentAppInstallation`.

## Commande synthetique autorisee

Une seule mutation `orderCreate`, sans retry ambigu :

- client associe par `customer.toAssociate.id` au seul RNO1 ;
- une seule ligne sur le variant retourne par `productSet` ;
- `test: true` ;
- `financialStatus: PAID`, statut synthetique sans paiement externe ;
- `fulfillmentStatus: FULFILLED`, necessaire a la regle de pierre favorite ;
- `inventoryBehaviour: BYPASS` ;
- `sendReceipt: false` ;
- `sendFulfillmentReceipt: false` ;
- aucune adresse, email, telephone, transaction, fulfillment detaille, tracking, remise ou taxe ;
- tags `MILAURA_C1_RC_TEST` et `MILAURA_C1_O1_S`.

Toute reponse absente, ambigue ou avec user error arrete le lot. Aucune deuxieme creation de produit, publication ou commande.

## Gates de sortie

### O1S-0 - Isolation

Branche et worktree exacts depuis `ab21c0d`, tracking distant, seule zone de preuve nouvelle, integration et lots geles inchanges.

### O1S-1 - Preflight

- trois scopes absents ;
- aucun produit du dev store avec le handle exact ;
- RNO1 exact et zero commande ;
- publication Online Store identifiee sans ambiguite ;
- payloads `productSet`, `publishablePublish`, `orderCreate`, `orderDelete` et `productDelete` figes et haches avant mutation ;
- Mail pret en observation read-only.

### O1S-2 - Produit et publication

- exactement un produit et un variant crees ;
- handle, titre, prix, media, SKU QA, inventaire non suivi et tags verifies ;
- produit publie seulement sur Online Store du dev store ;
- Storefront retourne le produit, son handle exact, son media et une destination valide ;
- aucun catalogue, collection, feed, stock ou autre canal touche.

Si la lecture Storefront echoue, aucune commande n est creee. Le produit est supprime apres confirmation destructive et le lot revient au master.

### O1S-3 - Commande et Mail

- exactement une commande test `PAID` et `FULFILLED` creee ;
- inventaire bypass, zero mouvement de stock et zero paiement externe ;
- notifications explicitement false ;
- zero message Mail observe ; toute notification inattendue vaut `NO-GO`.

### O1S-4 - QA avec commandes

1. `orders-no-diagnostic` avant nouvel import ;
2. `complete` apres diagnostic consenti ;
3. ligne de commande, produit, media, mapping par handle, pierre favorite Obsidienne noire et destinations coherents ;
4. retrait du consentement achat masque le calcul personnalise sans masquer la commande ;
5. QA a `360`, `390`, `430` et `1440` px, clavier, focus, overflow et console ;
6. aucun checkout, paiement, pixel Purchase ou evenement Ads.

### O1S-5 - Nettoyage destructif borne

Apres confirmation Patrice :

1. supprimer uniquement l order ID cree par O1-S avec `orderDelete` ;
2. confirmer RNO1 revenu a zero commande ;
3. supprimer uniquement le product ID cree par O1-S avec `productDelete` ;
4. confirmer handle, produit, variant, media et publication absents du dev store.

Si une suppression est refusee, ne toucher a aucun autre objet et revenir au master.

### O1S-6 - Rollback runtime et scopes

- diagnostic, consentements de test, handoff, backend, stockage local et panier purges sans resurrection ;
- `backend_url` vide apres reload ;
- flag theme prive `false` ;
- app dev relance avec la configuration canonique puis arrete ;
- trois scopes temporaires absents ;
- fichiers locaux supprimes ;
- backend et listeners arretes ;
- theme `205027279193` toujours non publie ;
- worktree propre, preuve expurgee commitee et poussee.

### O1S-7 - Verdict

Si tout passe : RC7 devient `PASS PRIVE` et RC8 devient `PASS PRIVE` sur les etats avec et sans commandes. La branche notification de RC6 est fermee sans envoi. Le shell natif anglais, RC5 et le RC global restent ouverts.

## Interdictions

- aucun store MilAura, aucun theme live ou general, aucun push theme ;
- aucune cliente reelle, nouveau compte, autre produit, autre variant ou autre commande ;
- aucun stock, cout, marge, inventaire, collection, catalogue, feed, Merchant Center ou Ads ;
- aucune modification Mail, aucun email ou SMS ;
- aucun `shopify app deploy`, release, publication d app, `clean`, reset ou relink ;
- aucune bascule Customer Accounts, C1-2, integration ou live ;
- aucun secret, email, GID client, GID produit, GID commande ou token dans Git et les retours publics.

O1-S ne prouve pas l inventaire reel ni la couverture catalogue RC5. Il fournit seulement la donnee synthetique necessaire a la QA Customer Accounts privee.
