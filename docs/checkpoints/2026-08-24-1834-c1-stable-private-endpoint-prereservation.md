# C1, pre-reservation endpoint prive stable

Date : 2026-08-24 18:34 CEST

## Decision proposee

Abandonner definitivement les quick tunnels pour C1. Le plus petit lot utile consiste a deployer le backend RC deja Dockerise sur le VPS ONORA existant, derriere nginx et une URL HTTPS stable dediee, puis a connecter uniquement la development preview C1 le temps de fermer RNO3 et RNO4.

Ce document est un plan et une pre-reservation. Aucun hebergement, DNS, secret, VPS, Shopify, theme ou compte n est modifie avant le GO exact de Patrice.

## Pourquoi cette voie

- le backend Node 24, SQLite, migrations, maintenance, health, ready, metriques, image non root et volume persistant sont deja implementes et testes ;
- le VPS ONORA dispose historiquement de Docker, nginx, TLS, UFW et Fail2ban, mais son etat courant devra etre revalide en lecture seule ;
- le service peut ecouter uniquement sur `127.0.0.1`, sans nouveau port public ;
- un sous-domaine HTTPS stable supprime la dependance aux quick tunnels ;
- Shopify CLI accepte une URL HTTPS personnalisee pour `app dev`, ce qui permet de garder une development preview sans app deploy ni release ;
- l extension et le bridge restent proteges par les signatures Shopify, la boutique exacte et l allowlist synthetique.

## Reservation Git apres GO

- depot prive : `Onora-studio/onora-ops` ;
- branche a creer : `codex/milaura-c1-stable-private-endpoint-20260824` ;
- base exacte : `fac94126be4ed23d4e92a4a5edf690fd6af19ffe` ;
- worktree a creer : `/Users/paesano/Documents/_worktrees/agentic-ops-milaura-c1-stable-private-endpoint-20260824` ;
- branche et worktree verifies absents localement ; branche verifiee absente sur origin le 2026-08-24 ;
- zones d ecriture exclusives :
  - `docs/milaura/shopify-apps/customer-accounts-release-candidate/deploy/private-stable-preview/**` ;
  - `docs/milaura/shopify-admin-canonical/c1-stable-private-endpoint/**` ;
- application RC existante, anciens rapports C1, Mail, theme, integration et tout autre fichier en lecture seule.

Le master reste seul proprietaire de `docs/workstreams.md`, de l integration et du live.

## Cible privee proposee

- VPS ONORA existant `147.79.100.97`, sous reserve du preflight read-only ;
- repertoire distant exclusif propose : `/docker/milaura-c1-preview-backend/` ;
- donnees distantes exclusives proposees : `/var/lib/milaura-c1-preview-backend/` ;
- conteneur exclusif : `milaura-c1-preview-backend` ;
- port candidat : `127.0.0.1:3018`, utilise seulement si prouve libre ; sinon stop et retour master ;
- hostname candidat : `c1-preview-api.milaura.fr`, utilise seulement si prouve disponible et isolable ;
- nginx expose uniquement HTTPS `443` et proxy vers le port localhost ;
- UFW reste limite a `22`, `80` et `443`, aucun nouveau port public ;
- TLS public valide. Si le DNS est proxifie par Cloudflare, mode Full strict obligatoire ; sinon certificat public valide sur nginx ;
- aucun Cloudflare Tunnel, quick tunnel, ngrok ou tunnel local.

Le hostname, le port et les chemins ne sont pas crees par cette pre-reservation. Toute collision, absence de capacite, DNS non administrable ou risque pour les services ONORA egale stop avant mutation.

## Secrets et donnees

- reutiliser seulement l identite de l app privee C1 et l allowlist synthetique deja approuvee ;
- aucun compte, email, commande ou identifiant de production ;
- secrets generes ou transferes sans affichage, stockes hors Git dans un fichier root-only mode `0600` ;
- fichier allowlist hors Git et non affiche ;
- image Docker et contexte de build sans `.env`, allowlist, base ou backup ;
- conteneur non root, root filesystem durci si compatible, volume SQLite dedie mode `0700` ;
- logs sans token, GID, email, nom, diagnostic, query sensible ou payload ;
- `/health` minimal public ; `/ready` et `/metrics` proteges par le secret operations ;
- sauvegarde SQLite avant QA et rollback teste ;
- aucune valeur secrete dans terminal partage, capture, Git, checkpoint ou retour final.

## Plan simple d execution apres GO

### 1. Preflight et hebergement

1. auditer en lecture seule VPS, Docker, nginx, TLS, DNS, disque, sauvegardes, ports et conflits ;
2. creer branche et worktree seulement si le preflight est PASS ;
3. construire l image exacte du backend RC et repasser 33 tests, build Shopify, audit, scan et test conteneur ;
4. installer le service isole sur le VPS, secrets hors Git, volume persistant et nginx HTTPS ;
5. prouver depuis au moins deux surfaces : DNS, certificat, `/health`, `/ready`, redemarrage, persistence, logs expurges et rollback ;
6. ne poursuivre vers Shopify que si tous ces controles passent.

### 2. Connexion preview privee et RNO

1. seul store `milaura-c1-preview`, ID `107347837273` ;
2. seul theme non publie `205027279193` ;
3. lancer uniquement la development preview avec l URL stable personnalisee, sans quick tunnel, app deploy ou release ;
4. verifier `backend_url` vide et flag theme `false` avant mutation ;
5. Patrice renseigne une fois le seul `backend_url` avec l URL stable ;
6. activer temporairement le seul flag du theme prive ;
7. executer RNO3 et RNO4 sur le seul compte synthetique sans commande ;
8. si la session a expire, un seul OTP natif peut etre declenche et saisi uniquement par Patrice ; aucun code n est lu ou conserve par Codex ;
9. aucune creation de cliente ou commande, aucune mutation Admin cliente et aucun fichier Mail.

### 3. Rollback et cloture

1. purger les seules donnees synthetiques creees par le lot et prouver zero handoff ou purge residuelle ;
2. Patrice vide `backend_url`, puis rechargement et preuve champ vide ;
3. restaurer et confirmer le flag theme `false` ;
4. arreter `shopify app dev` ;
5. arreter le conteneur de preview apres la QA, sans supprimer volume, DNS ou fichiers avant un GO destructif separe ;
6. verifier absence de listener public hors nginx et etat intact des autres services VPS ;
7. commit, push, rapport expurge et tracking `0/0` ;
8. audit master avant toute decision Admin, release ou live.

## Gates de sortie

| Gate | Condition |
| --- | --- |
| SP0 | Git, worktrees, VPS, DNS, port, proprietaires et conflits PASS en lecture seule |
| SP1 | image exacte construite, tests et securite PASS, aucun secret dans image ou Git |
| SP2 | endpoint HTTPS stable PASS, conteneur non root, volume persistant, health, ready, metriques et redemarrage PASS |
| SP3 | development preview connectee sans quick tunnel, app deploy ni release |
| SP4 | RNO3 PASS sur compte synthetique sans commande |
| SP5 | RNO4 PASS, dont handoff, consentement, conflit, purge, reprise et responsive dans le scope existant |
| SP6 | rollback PASS : `backend_url` vide, flag `false`, donnees du lot purgees, app dev et conteneur arretes |
| SP7 | preuve expurgee, commit pousse, worktree propre `0/0`, audit master |

Un PASS SP0 a SP7 ferme seulement RC4 et la couverture sans commande de RC8. RC5, RC6, RC7, les etats avec commandes, app deploy, release, Admin, bascule de comptes et live restent separes.

## Interdictions

- aucun quick tunnel ou troisieme retry Cloudflare ;
- aucune donnee cliente de production ;
- aucune creation ou modification de cliente ;
- aucune commande, aucun `write_orders` ;
- aucun fichier ou reglage Mail ;
- aucun autre theme et aucun theme live ;
- aucun app deploy, release, publication ou bascule Customer Accounts ;
- aucune integration master, C1-2 ou live ;
- aucune modification des autres conteneurs, nginx vhosts, agents, n8n ou services ONORA.

## GO exact requis

`GO C1 ENDPOINT PRIVE STABLE - DEPLOYER LE BACKEND PREVIEW SUR LE VPS ONORA AVEC HTTPS ET SECRETS NON EXPOSES, CONNECTER UNIQUEMENT LE DEV STORE 107347837273 ET LE THEME PRIVE 205027279193, EXECUTER RNO3 RNO4 PUIS ROLLBACK, AVEC UN OTP NATIF UNIQUE SI NECESSAIRE, SANS COMMANDE, ADMIN CLIENTE, MAIL, RELEASE NI LIVE`

## References officielles

- Shopify CLI, `app dev` et URL personnalisee : `https://shopify.dev/docs/api/shopify-cli/app/app-dev` ;
- options reseau Shopify : `https://shopify.dev/docs/apps/build/cli-for-apps/networking-options` ;
- test des extensions Customer Accounts : `https://shopify.dev/docs/apps/build/customer-accounts/test` ;
- secrets Docker Compose : `https://docs.docker.com/reference/compose-file/secrets/` ;
- TLS Cloudflare Origin CA, seulement si DNS proxifie : `https://developers.cloudflare.com/ssl/origin-configuration/origin-ca/`.
