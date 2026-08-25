# C1 O2 : QA privee des etats commandes avec schema GraphQL verrouille

Date : 2026-08-25 09:56 CEST

Statut : `ACTIF APRES GO - PREFLIGHT AMENDE - ZERO MUTATION AU 2026-08-25 10:10 CEST`

## Cloture O1-S et O1-SR

Le master accepte le retour prive `99fdaea03889d9dcd9fc6e240f338cb0698b0863` :

`O1S-0 PASS - O1S-1 PASS - O1S-2 FAIL VALIDATION AVANT PUBLICATION - O1S-3/O1S-4 NOT RUN - O1SR DELETE PASS - ROLLBACK PASS`

Le produit QA, son variant, son media et son handle sont absents. RNO1 reste a zero commande. Les trois scopes temporaires sont absents, `backend_url` est vide, le flag est `false`, le theme `205027279193` reste non publie, app dev, backend et listeners sont arretes. Aucun Mail, publication, commande, integration ou live.

O1-S et O1-SR sont fermes et geles. Aucun progres RC7 ou RC8 avec commandes n est revendique.

## But de O2

Reprendre le meme objectif fonctionnel dans un nouveau lot prive, apres validation read-only du schema GraphQL de chaque payload. O2 peut creer un produit QA Obsidienne, le publier seulement sur le dev store protege, creer une commande test silencieuse associee a RNO1, terminer la QA des etats commandes, puis supprimer exactement ces deux objets et restaurer tous les scopes et runtimes.

O2 ne prouve pas RC5, l inventaire reel, le catalogue MilAura ou une release.

## GO exact recu

Patrice a donne exactement :

`GO C1 O2 - RECREATION BORNEE DU PRODUIT TEST OBSIDIENNE, PUBLICATION PRIVEE CORRIGEE, UNE COMMANDE TEST SANS NOTIFICATION, QA DES ETATS COMMANDES ET ROLLBACK, SANS RELEASE NI LIVE`

GO exact recu avant creation de la branche et du worktree. Le preflight publication est amende sans elargissement par `docs/checkpoints/2026-08-25-1010-c1-o2-publication-preflight-amendment.md`.

Ce GO ne permet aucune execution avant le preflight de schema. Il ne donne aucun droit sur le store MilAura, le theme, Mail, les stocks, les feeds, une app release, la production ou le live.

Avant les suppressions, Patrice devra confirmer exactement :

`JE CONFIRME LA SUPPRESSION DE L UNIQUE COMMANDE TEST ET DE L UNIQUE PRODUIT TEST C1 O2 CREES DANS CE LOT`

## Reservation Git

Depot prive : `Onora-studio/onora-ops`.

- branche creee : `codex/milaura-c1-o2-orders-private-qa-20260825` ;
- base exacte : `99fdaea03889d9dcd9fc6e240f338cb0698b0863` ;
- worktree cree : `/Users/paesano/Documents/_worktrees/agentic-ops-milaura-c1-o2-orders-private-qa-20260825` ;
- tracking : `origin/codex/milaura-c1-o2-orders-private-qa-20260825`, aligne `0/0` avant execution ;
- seule zone suivie : `docs/milaura/shopify-admin-canonical/c1-o2-orders-private-qa/**` ;
- configuration locale temporaire ignoree : `docs/milaura/shopify-apps/customer-accounts-release-candidate/shopify.app.c1-o2.toml` ;
- etat prive local ignore : `docs/milaura/shopify-apps/customer-accounts-release-candidate/.c1-o2.local.json`.

La configuration canonique, le code RC, le backend, le bridge, le mapping, le theme, Mail et tous les anciens lots restent en lecture seule. Aucun fichier theme et aucun push theme.

## Environnements autorises

- seul store : `milaura-c1-preview.myshopify.com`, ID `107347837273` ;
- seule app : development preview C1 ;
- seul theme : `205027279193`, role `unpublished`, sans push ;
- seul compte : RNO1 synthetique allowliste et deja sans commande ;
- seul backend : endpoint stable prive `c1-preview-api.milaura.fr`, uniquement pendant la QA ;
- seule publication produit : Online Store du dev store protege ;
- seule observation Mail : read-only sur la boite controlee, sans lire de contenu non pertinent ;
- aucun objet, stock ou catalogue MilAura production.

## Preflight de schema obligatoire

Avant tout scope ou mutation, C1 doit valider en read-only le schema effectif de l API Admin GraphQL utilisee. La validation couvre au minimum :

- `ProductSetPayload` et `ProductSetUserError` ;
- `PublishablePublishPayload` et `UserError` ;
- `OrderCreatePayload` et `OrderCreateUserError` ;
- `OrderDeletePayload` et `OrderDeleteUserError` ;
- `ProductDeletePayload` et `UserError` ;
- les inputs et enums utilises par `productSet`, `publishablePublish`, `orderCreate`, `orderDelete` et `productDelete`.

Les selections de production sont volontairement minimales :

- `productSet` : produit et variant necessaires, puis `userErrors { field message }` ;
- `publishablePublish` : `userErrors { field message }` ;
- `orderCreate` : `order { id }` et `userErrors { field message }` ;
- `orderDelete` : `deletedId` et `userErrors { field message }` ;
- `productDelete` : `deletedProductId` et `userErrors { field message }`.

Aucune selection `code` n est autorisee, meme sur les payloads specialises qui la supportent. Chaque document GraphQL et ses variables doivent etre figes et haches apres validation et avant le premier scope.

Si le schema ne peut pas etre valide ou si un champ diverge, O2 s arrete avant scope et mutation.

References officielles verifiees le 2026-08-25 :

- `https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish` ;
- `https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreate` ;
- `https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput` ;
- `https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOptionsInput` ;
- `https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderDelete` ;
- `https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDelete` ;
- `https://shopify.dev/docs/api/admin-graphql/2026-10/objects/UserError`.

## Donnees synthetiques autorisees

### Produit

Le produit reprend strictement la specification O1-S :

- titre `Bracelet Obsidienne Flocon de Neige 6mm` ;
- handle `bracelet-obsidienne-flocon-de-neige` ;
- statut `ACTIVE` ;
- vendor `MilAura QA`, type `C1 QA` ;
- tags `MILAURA_C1_QA_ONLY`, `MILAURA_C1_O2` ;
- un variant, prix `12.90 EUR`, SKU `MILAURA-C1-QA-OBSIDIENNE-O2` ;
- inventaire non suivi, aucune quantite, aucun cout, non taxable et sans expedition ;
- media exact deja audite dans O1-S ;
- aucune collection, categorie, metafield, redirection, SEO, feed ou autre publication.

### Commande

Une seule commande `orderCreate` :

- `test: true` dans `OrderCreateOrderInput` ;
- client associe par l ID prive RNO1, sans upsert ;
- une ligne sur le variant O2 ;
- `financialStatus: PAID` ;
- `fulfillmentStatus: FULFILLED` ;
- options `inventoryBehaviour: BYPASS`, `sendReceipt: false`, `sendFulfillmentReceipt: false` ;
- aucune adresse, email ajoute, telephone, transaction, tracking, remise ou taxe ;
- tags `MILAURA_C1_RC_TEST`, `MILAURA_C1_O2`.

La documentation Shopify confirme que `test` appartient a l ordre, que `FULFILLED` est une valeur valide, que `BYPASS` ne reclame aucun inventaire et que les deux notifications sont desactivees par defaut et explicitement forcees a `false` dans O2.

## Gates

### O2-0 - Isolation

Branche, worktree, tracking et zone exacts. Integration et anciens lots inchanges.

### O2-1 - Schema et preflight read-only

- validation de schema complete ;
- cinq documents de mutation et variables figes, haches et sans champ `code` ;
- scopes temporaires absents ;
- produit QA O2 absent ;
- RNO1 exact et zero commande ;
- Mail pret en observation read-only.

La requete `publications` est exclue de cette premiere fenetre car elle exige un scope publication absent de la configuration canonique.

### O2-1B - Scopes et identification publication

- ajouter exactement `write_products`, `write_publications` et `write_orders` ;
- confirmer ces trois scopes actifs et aucun scope supplementaire ;
- lire `publications` avec le droit de lecture inclus dans `write_publications` ;
- identifier sans ambiguite l unique publication Online Store du dev store ;
- en cas d ambiguite, arreter avant toute mutation et revenir au master.

### O2-2 - Produit et publication

- creer exactement un produit et un variant O2 ;
- verifier la specification par lecture Admin ;
- executer exactement une publication ;
- exiger `userErrors` vide ;
- confirmer par lecture Admin et Storefront que le produit est publie seulement sur Online Store du dev store.

Si une etape echoue, aucune commande n est creee. C1 revient au master pour le nettoyage, sans retry.

### O2-3 - Commande et Mail

- creer exactement une commande test ;
- exiger `userErrors` vide et conserver l ID seulement dans l etat prive ;
- confirmer `PAID`, `FULFILLED`, test, RNO1, une ligne, inventaire non touche ;
- observer zero message Mail ; toute notification inattendue vaut `NO-GO`.

### O2-4 - QA avec commandes

- `orders-no-diagnostic` avant nouvel import ;
- `complete` apres diagnostic consenti ;
- commande, produit, media, mapping par handle, pierre favorite Obsidienne noire et destinations coherents ;
- retrait du consentement achat : commande visible, calcul personnalise masque ;
- 360, 390, 430 et 1440 px, clavier, focus, overflow et console ;
- aucun checkout, paiement, pixel Purchase ou evenement Ads.

### O2-5 - Confirmation destructive

Restituer uniquement les preuves expurgees et attendre la confirmation exacte de Patrice. Aucune suppression avant cette confirmation.

### O2-6 - Suppression et rollback

- une seule mutation `orderDelete` sur l ID O2, `deletedId` egal en memoire, puis RNO1 zero commande ;
- une seule mutation `productDelete` sur l ID O2, `deletedProductId` egal en memoire ;
- produit, variant, media, handle et publication absents ;
- config canonique restauree, trois scopes absents ;
- purge runtime sans resurrection ;
- `backend_url` vide, flag `false`, theme non publie ;
- app dev, backend et listeners arretes ;
- fichiers locaux temporaires supprimes ;
- rapport expurge commit/push, worktree propre `0/0`.

Chaque mutation est autorisee une seule fois. Toute reponse absente, ambigue, validation GraphQL invalide ou `userErrors` non vide arrete le lot et revient au master sans autre mutation.

### O2-7 - Verdict

Si toutes les gates passent : RC7 devient `PASS PRIVE` et RC8 devient `PASS PRIVE` pour les etats avec et sans commandes. RC5, le shell natif francais, la productionisation, la release, l integration, la bascule Admin et le live restent ouverts.

## Interdictions

- aucun store MilAura, theme live ou theme de developpement general ;
- aucun autre produit, client, compte, commande, publication ou canal ;
- aucun stock, cout, marge, inventaire reel, collection, catalogue, feed ou Ads ;
- aucune modification Mail, aucun email ou SMS ;
- aucun app deploy, release, clean, reset, relink, C1-2, integration ou live ;
- aucun secret, email ou GID brut dans Git et les retours publics.
