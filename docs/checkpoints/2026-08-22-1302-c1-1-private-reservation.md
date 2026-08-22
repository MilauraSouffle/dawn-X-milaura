# C1-1 reservation architecture et implementation privee

Date : 2026-08-22 13:02 CEST

Statut : reservation master active, branche et worktree non crees au moment du cadrage

## GO et limite de decision

Patrice a donne le GO exact le 2026-08-22 :

`GO C1-1 - ARCHITECTURE ET IMPLÉMENTATION PRIVÉE DES VRAIES DONNÉES, SANS BASCULE LIVE`

Ce GO ouvre une architecture puis une implementation privee C1-1 sur les vraies surfaces Shopify, exclusivement avec des comptes et donnees synthetiques de test. Il ne donne aucun droit de bascule des comptes, publication, release, deploy, theme, email, Admin production ou live.

La preuve C1 V3 au commit `d8d036ff7725c93168d24b9270da54de657ad6af` reste gelee en lecture seule. C1-1 est un lot distinct.

## Reservation exacte

- proprietaire : Codex, tache `Planifier la refonte Mon Ecrin`, thread `01a0231f-f5c8-7400-a4f9-665962dfcff3` ;
- depot : `Onora-studio/onora-ops` ;
- branche a creer : `codex/milaura-c1-1-private-implementation-20260822` ;
- base exacte : `d8d036ff7725c93168d24b9270da54de657ad6af` ;
- worktree a creer : `/Users/paesano/Documents/_worktrees/agentic-ops-milaura-c1-1-private-implementation-20260822` ;
- tracking attendu : `origin/codex/milaura-c1-1-private-implementation-20260822` ;
- zone application exclusive : `docs/milaura/shopify-apps/customer-accounts-c1-1-private/**` ;
- zone contrat, architecture, preuves et rollback exclusive : `docs/milaura/shopify-admin-canonical/c1-1-private/**` ;
- les zones V3 `docs/milaura/shopify-apps/customer-accounts-v3-preview/**` et `docs/milaura/shopify-admin-canonical/c1-v3-shopify-private-preview/**` sont des sources en lecture seule ;
- `docs/workstreams.md`, le theme MilAura, les emails, les autres lots C1 et tout autre fichier sont exclus de la session C1-1.

L audit final confirme que la branche reservee n existe ni localement ni sur `origin`, et que le worktree reserve est absent. La session C1 peut les creer puis partir strictement de la base ci-dessus.

## Boutique et comptes de test autorises

Une seule boutique est autorisee :

- boutique de developpement `milaura-c1-preview` ;
- store ID `107347837273` ;
- aucun autre store, aucune boutique production et aucun theme Shopify.

Six comptes synthetiques sont autorises, un par etat de test :

1. `MILAURA_C1_1_COMPLETE` ;
2. `MILAURA_C1_1_DIAGNOSTIC_NO_ORDERS` ;
3. `MILAURA_C1_1_ORDERS_NO_DIAGNOSTIC` ;
4. `MILAURA_C1_1_EMPTY` ;
5. `MILAURA_C1_1_CONSENT_WITHDRAWN` ;
6. `MILAURA_C1_1_SYNC_CONFLICT`.

Chaque compte doit aussi porter le tag commun `MILAURA_C1_1_TEST`. Une requete reelle n est autorisee que si le customer GID est present dans le fichier local non versionne `.c1-1-test-accounts.local.json` et si le compte porte ces tags sur le dev store. Les emails exacts, GID, codes de connexion et adresses ne vont ni dans Git, ni dans les preuves, ni dans les logs. Les alias doivent appartenir a une boite de test controlee par Patrice.

Les noms, adresses, commandes, remboursements, annulations, cadeaux et autres cas sont synthetiques. Aucune donnee cliente, commande, adresse, email, telephone ou identifiant de production ne peut etre importe, copie ou interroge.

Le seul email tolere par le parcours est le code de connexion natif Shopify envoye a une adresse synthetique allowlistee. C1-1 ne modifie, n envoie et n active aucun email de compte, transactionnel, lifecycle ou marketing.

## Donnees et API permises

Les lectures et ecritures reelles sont limitees aux donnees synthetiques du dev store :

- Customer Account API pour le client authentifie seulement ;
- lecture bornee du profil, des adresses et des commandes synthetiques ;
- ecriture et suppression des seuls metafields client appartenant a cette app ;
- Storefront API en lecture seule pour `title`, `handle`, URL et media public produit ou collection ;
- aucun stock, cout, marge, quantite, fournisseur, inventaire ou donnee Admin produit.

Scopes permis dans `shopify.app.toml` :

`write_customers,customer_read_customers,customer_write_customers,customer_read_orders`

`write_customers` est le seul scope Admin permis, uniquement parce que la configuration declarative Shopify des metafields appartenant a l app sur la ressource Customer le requiert dans son exemple canonique. Il est limite a l app du dev store et ne donne aucun droit d appel GraphQL Admin depuis le code. Aucun `read_customers`, `read_orders`, `write_orders`, `read_products`, `write_products` ou scope inventaire n est autorise.

Capabilities permises dans `shopify.extension.toml` :

- `api_access = true` pour les destinations produit et collection publiques ;
- `network_access = true` pour le backend prive C1-1 ;
- aucun `collect_buyer_consent` : le consentement C1-1 est un contrat de personnalisation distinct des cookies, de l email et du SMS.

Metafields app-owned autorises, type `json`, `access.customer_account = "read_write"`, `access.admin = "merchant_read"`, Storefront non expose :

- `[customer.metafields.app.diagnostic_v1]` ;
- `[customer.metafields.app.personalization_consent_v1]` ;
- `[customer.metafields.app.sync_state_v1]` ;
- `[customer.metafields.app.handoff_receipt_v1]` ;
- `[customer.metafields.app.purge_receipt_v1]`.

Toute ecriture utilise `metafieldsSet` avec controle de revision ou `compareDigest` lorsqu il est disponible. Toute purge canonique utilise `metafieldsDelete` et produit un recu versionne. Aucun autre namespace client n est autorise.

## Frontiere Admin et donnees protegees

Dans le Partner Dashboard et l Admin du seul dev store, la session C1-1 peut uniquement :

- selectionner l acces aux donnees client protegees necessaires au developpement ;
- selectionner les champs `Name` et `Address`, sans `Email` ni `Phone` dans les requetes de l app ;
- installer ou mettre a jour la development preview ;
- creer, taguer, reinitialiser et supprimer les six comptes, adresses et commandes synthetiques de test ;
- autoriser `network_access` pour la preview de developpement.

Sont interdits : bascule legacy vers nouveaux comptes, changement de branding ou de navigation, sauvegarde de configuration comptes production, publication, release, deploy, approbation production, modification de notification, theme, checkout, Customer Events, Web Pixels, consentement Shopify global et toute donnee reelle.

## Backend, reseau et secrets

Le backend vit uniquement sous `docs/milaura/shopify-apps/customer-accounts-c1-1-private/server/**`. Il peut etre expose par le tunnel ephemere cree par `shopify app dev` pour le seul dev store.

Flux reseau autorises :

- extension vers Customer Account API via le client Shopify authentifie ;
- extension vers Storefront API via `api_access` ;
- extension vers le seul backend C1-1 via `network_access` et HTTPS ;
- aucun tiers, analytics, email, webhook production ou appel GraphQL Admin API ; `write_customers` ne sert qu a l application de la configuration declarative par Shopify CLI sur le dev store.

Le backend doit valider le session token Shopify, notamment signature, `exp`, `nbf`, `iss`, `dest`, `aud` et `sub`. Il refuse tout shop different du dev store et tout `sub` absent de l allowlist locale. Le parametre `customer_id` fourni par le navigateur n est jamais une autorite. CORS peut repondre `Access-Control-Allow-Origin: *` car l extension tourne dans un Web Worker, mais chaque endpoint reste authentifie, rate-limited et idempotent.

Secrets et donnees locales :

- `.env.c1-1.local` a la racine de la nouvelle app pour le secret app et les URLs locales ;
- `.c1-1-test-accounts.local.json` pour les GID et alias synthetiques ;
- `.data/` pour un eventuel stockage local de developpement, sans valeur cliente en clair ;
- un `.gitignore` local doit exclure ces trois surfaces avant tout secret ou identifiant ;
- seuls `.env.example` et un manifest allowlist redige peuvent etre versionnes.

Aucun secret ne va dans l extension, le navigateur, le localStorage, le panier, Git, les captures ou les logs. Les journaux utilisent des identifiants haches et ne contiennent ni nom, adresse, email, payload diagnostic en clair ni token.

## Source canonique, handoff et limite theme

La source canonique durable du diagnostic et du consentement est le groupe de metafields client app-owned ci-dessus. `MilauraPreferenceStorage`, le localStorage et le panier restent des caches ou sources de migration, jamais la verite serveur.

Le lot doit implementer un protocole signe et idempotent de handoff, une resolution de conflit explicite, la synchronisation inter-appareils, un mode hors ligne date et un recu de purge. Le navigateur ne possede jamais de secret.

Limite non negociable : une extension Customer Accounts ne peut pas lire ou purger directement le localStorage du theme. Comme aucun fichier theme n est ouvert dans ce lot, C1-1 implemente le protocole, le backend et un simulateur de `MilauraPreferenceStorage` ou panier, mais ne pretend pas avoir branche ni purge le vrai theme. L integration et la preuve bout en bout du bridge theme exigeront plus tard une reservation de fichiers theme et un GO distincts. Cette limite ne bloque pas l implementation privee, mais bloque toute release.

## Proprietaire Mail

Les emails de compte appartiennent exclusivement a la session Mail :

- tache `Planifier audit emails MilAura` ;
- thread `01a02320-58bd-7981-8181-399c222a9f92` ;
- branche `codex/milaura-e4-e6-mail-20260821`.

C1-1 ne modifie ni template, ni automation, ni notification. Avant toute future bascule de type de comptes, Mail doit auditer les emails de compte et donner un GO coordonne distinct.

## Commandes permises et interdites

Permises apres creation conforme de la branche et du worktree :

- commandes Git bornees au nouveau worktree ;
- `npm ci`, checks, tests, build et audits locaux ;
- `shopify app info`, `shopify app build` et `shopify app dev --store milaura-c1-preview` ;
- appels Customer Account API, Storefront API et backend uniquement depuis les six comptes allowlistes ;
- arret propre de chaque session app dev et preuve d absence de listener.

Interdites :

- `shopify app deploy`, release, publication, `clean`, reset ou relink vers une autre app ;
- toute commande `shopify theme` ;
- tout push theme, Admin production, live ou changement de comptes ;
- tout email, import de donnees reelles, autre scope Admin, inventaire, catalogue, feed, Ads ou analytics.

## Gates de sortie C1-1 prive

### G0 - Reservation et environnement

Branche et worktree crees depuis `d8d036ff`, tracking distant propre, V3 inchangee, store ID confirme, six comptes synthetiques tags et allowlistes, champs proteges minimaux selectionnes, aucun secret versionne.

### G1 - Architecture et contrat de donnees

Schemas JSON versionnes, source canonique, consentement distinct, diagramme de flux, menace, retention, idempotence, concurrence, etats hors ligne, purge, migration et rollback valides avant appel en ecriture.

### G2 - Configuration Shopify minimale

Scopes et capabilities exactement conformes au present checkpoint, cinq definitions app-owned, seul `write_customers` admis pour leur configuration declarative, aucun appel GraphQL Admin depuis le code, build vert et capture de la development preview.

### G3 - Vraies lectures sur donnees de test

Profil, adresses et commandes lus via Customer Account API sur les comptes synthetiques, pagination bornee, annulation et remboursement couverts, aucune fixture dans le chemin runtime hors mode test explicite.

### G4 - Persistance et consentement

Consentement de personnalisation explicite, refus par defaut, ecriture CAS du diagnostic, relecture apres nouvelle session, sync inter-appareils, conflit visible et resolution deterministe. Cookies, email et SMS restent independants.

### G5 - Handoff signe et synchronisation

Backend authentifie par session token, allowlist stricte, nonce, expiration, digest et cle d idempotence. Le simulateur theme prouve reprise, doublon, expiration, rejeu et payload invalide. Aucun secret navigateur.

### G6 - Purge et non-resurrection

Suppression des metafields canoniques, purge backend, recu versionne, reprise partielle et prevention de resurrection validees. La purge localStorage et panier reels reste explicitement non fermee tant que le micro-lot theme n existe pas.

### G7 - Commandes vers pierre et destinations

Registre versionne produit ou variant vers pierre, cas cadeaux, egalites, sans pierre, annulations, remboursements et retours. Liens produit et collection reels via Storefront API. Stock, cout, marge et inventaire restent hors scope ; leur fiabilisation reste une dependance de release.

### G8 - Securite et donnees protegees

Minimisation, separation test ou production, chiffrement transport, retention, redaction logs, rate limit, validation tokens, secret scan, audit dependances et tests d autorisation croisee verts.

### G9 - QA fonctionnelle et visuelle privee

Six comptes, cinq profils, viewports 360, 390, 430 et 1440 px, erreurs reseau, donnees absentes, clavier, focus, cibles, francais extension, absence d overflow, console extension propre et captures redigees. Le shell Shopify natif en francais reste un gate de future bascule s il n est pas controlable dans l extension.

### G10 - Rollback prive

Sauvegarde des seuls metafields synthetiques, rollback idempotent, suppression des donnees de test creees, arret app dev, aucun listener, worktree propre, commit pousse et preuves completes. Aucun `clean` ou reset Shopify.

### G11 - Audit master et GO Patrice

Audit selectif par le master, puis GO visuel et fonctionnel Patrice sur la preview privee. Ce GO ne donnera aucun droit de bascule, Admin production, release, deploy, theme, email ou live.

## Gates ulterieures hors lot

Meme apres G0 a G11, une release restera fermee jusqu a :

1. micro-lot theme autorise et preuve reelle du bridge `MilauraPreferenceStorage`, panier et purge locale ;
2. catalogue ou inventaire fiables pour fermer le mapping et les destinations ;
3. coordination et GO Mail sur les emails de compte ;
4. plan production du backend, secrets, retention, observabilite et donnees protegees ;
5. GO Admin distinct pour toute bascule de comptes ;
6. GO live explicite apres QA de production et rollback.

SEO, Pinterest, Rentree Sodalite, Ruban V3, Atelier, S1B et S1C ne bloquent pas le demarrage de cette implementation privee.

## References Shopify officielles verifiees le 2026-08-22

- Customer Account API : `https://shopify.dev/docs/api/customer/latest` ;
- scopes Customer Account : `https://shopify.dev/docs/api/usage/access-scopes` ;
- ecriture de metafields depuis Customer Accounts : `https://shopify.dev/docs/apps/build/customer-accounts/metafields` ;
- definitions app-owned declaratives : `https://shopify.dev/docs/apps/build/metafields/definitions` ;
- capabilities `api_access` et `network_access` : `https://shopify.dev/docs/apps/build/customer-accounts/capabilities` ;
- donnees client protegees : `https://shopify.dev/docs/apps/launch/protected-customer-data` ;
- session tokens : `https://shopify.dev/docs/apps/build/authentication-authorization/session-tokens/set-up-session-tokens`.

## Reprise C1 copiable

```text
GO C1-1 prive reserve par le master au 2026-08-22. Cree la branche codex/milaura-c1-1-private-implementation-20260822 depuis la base exacte d8d036ff7725c93168d24b9270da54de657ad6af dans /Users/paesano/Documents/_worktrees/agentic-ops-milaura-c1-1-private-implementation-20260822, puis tracke origin/codex/milaura-c1-1-private-implementation-20260822.

Ecris uniquement dans docs/milaura/shopify-apps/customer-accounts-c1-1-private/** et docs/milaura/shopify-admin-canonical/c1-1-private/**. V3 et tous les autres fichiers restent en lecture seule. Utilise seulement le dev store milaura-c1-preview ID 107347837273 et les six comptes synthetiques tags MILAURA_C1_1_TEST, presents dans l allowlist locale non versionnee. Aucun client production.

Lis et applique integralement docs/checkpoints/2026-08-22-1302-c1-1-private-reservation.md. Ferme G0 a G10, puis rends le lot au master pour G11. Aucun app deploy, release, clean, reset, theme, email, Admin production, bascule de comptes ou live. Le bridge et la purge du vrai MilauraPreferenceStorage restent hors scope theme et devront etre qualifies comme non fermes pour la release.
```
