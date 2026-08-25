# C1 O1 : commande test silencieuse et QA privee des etats avec commandes

Date : 2026-08-25 08:47 CEST

Statut : `PRE-RESERVE - NON EXECUTE - ATTEND GO PATRICE`

## Decision master

C1 n est pas bloque techniquement. Le correctif d idempotence est ferme et gele. Le plus petit lot suivant utile vers une release consiste a creer exactement une commande synthetique sur le seul dev store C1, sans notification, paiement ni impact inventaire, puis a prouver les deux etats Customer Accounts qui dependent de commandes.

Ce lot peut fermer RC7 et la partie avec commandes de RC8. Il ne ferme pas RC5, le francais du shell natif, la productionisation, le deploy, la release, l integration, la bascule Admin ou le live.

## GO exact requis

Patrice doit donner exactement :

`GO C1 O1 - AJOUT TEMPORAIRE WRITE_ORDERS SUR L APP DE DEVELOPPEMENT PRIVEE, UNE COMMANDE TEST SANS NOTIFICATION, QA DES ETATS COMMANDES, PUIS ROLLBACK, SANS RELEASE NI LIVE`

Ce GO autorise l ajout temporaire de `write_orders` uniquement dans une configuration locale nommee de l app de developpement, une seule mutation `orderCreate`, la QA privee et le rollback. Il n autorise aucune app release ou deploy, aucune commande sur MilAura production, aucune modification Mail, aucun theme live et aucune bascule de comptes.

La suppression irreversible de l unique commande creee reste soumise a une confirmation destructive distincte apres restitution de son identifiant expurge :

`JE CONFIRME LA SUPPRESSION DE L UNIQUE COMMANDE TEST C1 O1 CREEE DANS CE LOT`

## Audit avant reservation

- integration `codex/milaura-integration` propre et alignee `0/0` a `2959fb8e11bd361726a3fc3ab8ff732f904b5a66` ;
- correctif theme `codex/milaura-c1-idempotence-fix-20260824` propre et aligne `0/0` a `7bb67efca588913dc80ba877eb2c5e01f0d64f86` ;
- preuve privee `codex/milaura-c1-idempotence-fix-private-20260824` propre et alignee `0/0` a `1ee9c07f27a4f9953ade332a827393271413a2f4` ;
- RC prive `codex/milaura-c1-release-candidate-private-20260823` propre et aligne `0/0` a `c877d630a8953a0cf1304c7392143288db110b99` ;
- nouvelle branche locale et distante absente ; nouveau worktree absent ;
- aucun fichier theme n est reserve en ecriture par O1 ;
- master reste seul proprietaire de l integration et de tout live ; Mail reste seul proprietaire de ses surfaces et observations de boite.

## Reservation Git

Depot prive : `Onora-studio/onora-ops`.

- branche a creer apres GO : `codex/milaura-c1-orders-private-qa-20260825` ;
- base exacte : `1ee9c07f27a4f9953ade332a827393271413a2f4` ;
- worktree a creer : `/Users/paesano/Documents/_worktrees/agentic-ops-milaura-c1-orders-private-qa-20260825` ;
- tracking : `origin/codex/milaura-c1-orders-private-qa-20260825` ;
- seule zone suivie autorisee : `docs/milaura/shopify-admin-canonical/c1-orders-private-qa/**` ;
- configuration locale temporaire autorisee, jamais suivie : `docs/milaura/shopify-apps/customer-accounts-release-candidate/shopify.app.c1-orders-qa.toml` ;
- variables locales privees autorisees, jamais suivies : `docs/milaura/shopify-apps/customer-accounts-release-candidate/.c1-orders-qa.local.json`.

La configuration canonique `shopify.app.toml`, le code de l extension, le backend, les migrations, tous les anciens lots C1 et toutes les zones Mail restent en lecture seule. Les deux fichiers locaux temporaires doivent etre ignores, expurges des preuves et supprimes au rollback.

Aucune branche theme n est creee. Le tip theme `7bb67efc` et le theme prive Shopify restent des sources gelees en lecture seule ; seul le flag prive existant peut etre active temporairement puis restaure a `false`.

## Environnements autorises

- seul store : `milaura-c1-preview.myshopify.com`, ID `107347837273` ;
- seule app : development preview C1, jamais de version deployee ou releasee ;
- seul theme : `205027279193`, role `unpublished` ; aucun push theme ;
- seul compte : compte synthetique RNO1 allowliste, deja prouve et sans commande avant O1 ; aucune creation ni modification d identite ;
- seul backend : endpoint prive stable `c1-preview-api.milaura.fr` et son conteneur arrete deja reserve ; aucun changement DNS, nginx, certificat, volume ou secret ;
- seule observation Mail : recherche read-only du proprietaire Mail sur la boite controlee, sans lecture de corps prive ni modification ;
- zero donnee cliente production, zero store MilAura production, zero stock physique.

## Mutation autorisee

Une seule mutation `orderCreate` est autorisee apres preflight :

- API Admin GraphQL version de l app ;
- scope temporaire unique ajoute : `write_orders` ; aucun `read_all_orders` ;
- authentification hors ligne fournie par Shopify CLI, aucun jeton affiche ou versionne ;
- association par `customer.toAssociate.id` au seul compte RNO1 ; aucun email, telephone, adresse ou mise a jour client dans le payload ;
- une seule ligne sur un variant deja verifie et mappe dans RC5 ;
- `test: true` ;
- `inventoryBehaviour: BYPASS` ;
- `sendReceipt: false` ;
- `sendFulfillmentReceipt: false` ;
- aucun fulfillment, paiement, transaction, remboursement ou annulation ;
- tags `MILAURA_C1_RC_TEST` et `MILAURA_C1_O1` ;
- aucun retry si la reponse est absente, ambigue ou contient une erreur ; arret et audit master.

Shopify documente que `orderCreate` exige `write_orders` et un token hors ligne, que `test` marque la commande comme test, que `sendReceipt` et `sendFulfillmentReceipt` valent `false` par defaut et que `inventoryBehaviour` accepte le contournement d inventaire. References verifiees le 2026-08-25 :

- `https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreate` ;
- `https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput` ;
- `https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOptionsInput` ;
- `https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateCustomerInput` ;
- `https://shopify.dev/docs/api/admin-graphql/latest/queries/currentAppInstallation`.

## Commandes permises

- Git borne a la branche et au worktree reserves, commit et push de la seule zone de preuve ;
- checks, tests, build et audit deja canoniques du RC ;
- creation locale de `shopify.app.c1-orders-qa.toml` avec `write_orders`, sans changer la configuration canonique ;
- `shopify app dev --config c1-orders-qa --store milaura-c1-preview` ;
- `shopify app execute --config c1-orders-qa` pour la liste des scopes, l unique `orderCreate`, les lectures bornees et, apres confirmation destructive, l unique `orderDelete` ;
- demarrage du backend prive stable existant ;
- saisie manuelle unique de `backend_url` dans la development preview et activation temporaire du flag du theme prive ;
- QA du compte synthetique a `360`, `390`, `430` et `1440` px, clavier, focus, overflow et console ;
- recherche Mail read-only limitee a la fenetre de creation de la commande ;
- rollback de tous les reglages et processus.

## Interdictions

- aucune deuxieme commande, aucun retry de mutation ambigue ;
- aucune creation ou modification de client ;
- aucun email, SMS, fulfillment, paiement, transaction, remboursement, annulation ou checkout ;
- aucun changement de stock, cout, marge, produit, variant, catalogue ou feed ;
- aucun `shopify app deploy`, `shopify app release`, publication, `clean`, reset ou relink ;
- aucun push theme, theme general `199421952347`, live `190430282075` ou autre theme du dev store ;
- aucune modification Mail, Admin production, Customer Accounts switch, C1-2, integration ou live ;
- aucun secret, email, GID client, identifiant de commande ou token dans Git ou les retours publics.

## Gates de sortie

### O1-0 - Isolation

Branche et worktree exacts, tracking distant, base `1ee9c07f`, seule zone suivie nouvelle, integration et lots geles inchanges.

### O1-1 - Preflight scopes et cible

`currentAppInstallation.accessScopes` prouve `write_orders` absent avant le lot. La configuration locale differe seulement par `write_orders`. Le compte RNO1 est le compte synthetique allowliste attendu, avec zero commande. Le variant est exact, mappe et sa destination est valide. Le payload redige et son hash sont figes avant mutation. Mail est pret a observer sans mutation.

### O1-2 - Commande silencieuse unique

Une seule commande `test` est creee, associee a RNO1, avec une seule ligne, inventaire bypass et deux notifications explicitement a `false`. Zero user error, zero deuxieme mutation, zero message Mail observe. Toute notification inattendue vaut `NO-GO`.

### O1-3 - Etats avec commandes

Sur le compte reel synthetique :

1. `orders-no-diagnostic` est prouve avant nouvel import ;
2. `complete` est prouve apres diagnostic consenti ;
3. commande, produit, pierre favorite, mapping et destinations sont coherents ;
4. retrait du consentement achat masque le calcul personnalise sans masquer la commande ;
5. les deux etats passent a `360`, `390`, `430` et `1440` px, clavier, focus, overflow et console ;
6. aucun checkout, paiement ou evenement achat n est genere.

### O1-4 - Nettoyage destructif borne

Apres confirmation Patrice, seule la commande creee par O1 est supprimee avec `orderDelete`. Son absence est prouvee apres reload et RNO1 revient a zero commande. Si la suppression API est refusee, aucune autre commande ni client n est touche et le lot s arrete pour decision master.

### O1-5 - Rollback scopes et runtime

- diagnostic, consentements de test, handoff, backend, stockage local et panier sont purges sans resurrection ;
- `backend_url` est vide apres reload ;
- flag theme prive `false` ;
- app dev relance avec la configuration canonique sans `write_orders`, puis arrete ;
- `currentAppInstallation.accessScopes` confirme `write_orders` absent ;
- fichiers locaux temporaires supprimes ;
- backend arrete, ports et listeners absents ;
- theme `205027279193` toujours non publie ;
- worktree propre, preuve expurgee commitee et poussee.

### O1-6 - Verdict

Si toutes les gates passent : RC7 devient `PASS PRIVE` et RC8 devient `PASS PRIVE` sur les etats avec et sans commandes. La branche notification de RC6 est fermee sans envoi, mais le shell natif anglais reste un blocker Admin distinct. RC5 et le RC global restent ouverts.

## Suite apres O1

1. fermer RC5 depuis l inventaire reel, les couts, marges, variants et destinations ;
2. traiter le francais du shell natif et signer la coordination Mail de release ;
3. productioniser le backend et les secrets sous une gate de deploy distincte ;
4. audit RC global et GO Release Candidate Patrice ;
5. seulement ensuite : integration selective, GO Admin, bascule comptes, QA publique, rollback et GO live distinct.

O1 ne donne aucun droit sur ces lots suivants.
