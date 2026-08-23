# C1 Release Candidate, reservation de productionisation privee

Date : 2026-08-23 11:00 CEST

Statut : `RESERVE - A CREER APRES RETOUR MASTER`

## GO et limite de decision

Patrice a donne le GO exact :

`GO C1 RELEASE CANDIDATE - PRODUCTIONISATION PRIVÉE, SANS BASCULE ADMIN NI LIVE`

Ce GO ouvre un Release Candidate prive, pas une release. Il autorise la preparation technique du bridge theme, de la purge locale, panier et serveur, du backend, du mapping catalogue, de la coordination Mail, du francais et de la QA sur donnees synthetiques. Il ne donne aucun droit de deploy ou release d app, publication de theme, bascule de comptes, Admin de production, email, C1-2 ou live.

Le canonique theme reste `codex/milaura-integration` a `6560d59cf62df1e147c33585197e61821bd22b6b` ou plus recent. `origin/main` reste un miroir incomplet et ne doit jamais etre merge aveuglement. C1-1 reste ferme et gele au commit prive `cf2877ba4ee5faac143a4273c486fe39c96106a8`.

## Audit prealable du 2026-08-23

- checkout d integration theme propre et aligne avec origin a `6560d59c` ;
- worktree C1-1 propre et aligne avec origin a `cf2877ba` ;
- les nouvelles branches sont absentes localement et sur leurs deux origins ;
- les deux nouveaux worktrees sont absents ;
- tous les worktrees theme actifs sont propres et alignes : Cookie, Rentree Sodalite, Ruban V3 et Atelier ;
- `Agentic-Ops/main` est tres dirty sur Stella et reste strictement hors scope ;
- aucun lot actif ne reserve les sept fichiers theme proposes ;
- Mail est propre et aligne a `add705ffdb7de3da8b44e936e70cfa50b9b670ea` ;
- le dev store C1 contient un theme live `204897517913` et deux themes non publies `204897485145` et `204897550681`, tous trois interdits en ecriture ;
- un vrai bridge exige que le theme et l app tournent sur le meme store. Le theme general `199421952347` du store MilAura principal ne peut donc pas servir de preuve avec l app du dev store C1.

## Proprietaires

- proprietaire du lot C1 Release Candidate : Codex, tache `Planifier la refonte Mon Ecrin`, thread `01a0231f-f5c8-7400-a4f9-665962dfcff3` ;
- proprietaire de l integration, de `docs/workstreams.md`, du theme general de developpement et de tout live : session master, thread `01a0232d-93da-7101-837e-cd83108072f8` ;
- proprietaire Mail : Codex, tache `Planifier audit emails MilAura`, thread `01a02320-58bd-7981-8181-399c222a9f92` ;
- aucun autre proprietaire ne modifie les branches, worktrees, fichiers ou theme prive du lot.

La session C1 ne modifie jamais `docs/workstreams.md`, `docs/project-state.md`, `docs/codex-handoff.md`, les checkpoints master, les zones Mail, l integration ou un theme live.

## Piste theme MilAura

- depot : `/Users/paesano/Documents/MilAura website/dawn-X-milaura` ;
- branche a creer : `codex/milaura-c1-release-candidate-theme-20260823` ;
- base exacte : `6560d59cf62df1e147c33585197e61821bd22b6b` ;
- worktree a creer : `/Users/paesano/Documents/MilAura website/_worktrees/c1-release-candidate-theme-20260823` ;
- tracking : `origin/codex/milaura-c1-release-candidate-theme-20260823` ;
- fichiers exclusifs :
  - `assets/milaura-preference-storage.js` ;
  - `assets/milaura-c1-release-bridge.js`, nouveau ;
  - `snippets/milaura-c1-release-bridge.liquid`, nouveau ;
  - `layout/theme.liquid` ;
  - `sections/milaura-quiz.liquid` ;
  - `config/settings_schema.json` ;
  - `config/settings_data.json`.

`sections/milaura-dashboard.liquid`, `assets/milaura-cookie-consent.js`, les templates compte, les emails, les rails homepage, Rentree Sodalite, Ruban, Atelier, le catalogue et tout autre fichier restent en lecture seule. Le bridge doit etre derriere un feature flag desactive par defaut et ne doit modifier ni le contrat de consentement Preferences ni les formulations validees du quiz.

## Piste application et backend prives

- depot : `Onora-studio/onora-ops` ;
- branche a creer : `codex/milaura-c1-release-candidate-private-20260823` ;
- base exacte : `cf2877ba4ee5faac143a4273c486fe39c96106a8` ;
- worktree a creer : `/Users/paesano/Documents/_worktrees/agentic-ops-milaura-c1-release-candidate-20260823` ;
- tracking : `origin/codex/milaura-c1-release-candidate-private-20260823` ;
- zone application exclusive : `docs/milaura/shopify-apps/customer-accounts-release-candidate/**` ;
- zone architecture, contrats, mapping, Mail, preuves et rollback exclusive : `docs/milaura/shopify-admin-canonical/c1-release-candidate/**`.

Les zones C1-1 et C1 V3 sont des sources en lecture seule. Le Release Candidate doit copier uniquement les artefacts necessaires dans les nouvelles zones puis documenter chaque delta. Il ne devient pas C1-2.

Secrets et donnees locales, jamais versionnes :

- `.env.c1-release-candidate.local` ;
- `.c1-release-candidate-test-accounts.local.json` ;
- `.data/` ;
- `.shopify/`, `dist/`, logs bruts et exports QA non rediges.

## Environnements autorises

### Shopify app et comptes

- seul store : `milaura-c1-preview.myshopify.com`, ID `107347837273` ;
- `shopify app dev` et development preview seulement ;
- six comptes synthetiques maximum avec le tag commun `MILAURA_C1_RC_TEST` et un tag d etat ;
- trois commandes synthetiques maximum, notifications desactivees avant creation ;
- seuls les comptes presents dans l allowlist locale sont interroges ;
- seuls les codes de connexion natifs Shopify peuvent atteindre des adresses synthetiques controlees ;
- aucune donnee, cliente, commande, adresse, email, telephone ou identifiant de production.

La creation des comptes et commandes de test est suspendue jusqu a la fermeture de RC6 Mail et la preuve que les notifications de commande sont desactivees. Leur suppression finale est soumise a une confirmation destructive explicite de Patrice.

### Theme prive sur le meme dev store

Un seul nouveau theme non publie est autorise :

`MilAura C1 Release Candidate 2026-08-23`

Le theme a ete cree le 2026-08-23 sur `milaura-c1-preview`, store ID `107347837273` : ID `205027279193`, role `unpublished`, preview `https://milaura-c1-preview.myshopify.com?preview_theme_id=205027279193`. Le master a recontrole la liste Shopify a 11:08 CEST : ce theme est distinct du live du dev store et des deux themes non publies preexistants.

Themes interdits en ecriture :

- `204897517913`, live du dev store ;
- `204897485145`, Horizon non publie ;
- `204897550681`, debut-vintage-theme non publie ;
- `199421952347`, developpement general MilAura ;
- `190430282075`, live MilAura ;
- tous les themes Rentree, Atelier et autres previews.

Le premier bootstrap peut pousser le theme complet vers ce nouveau theme vide, avec `--unpublished --nodelete`, depuis le worktree RC propre. Tous les pushes suivants sont limites aux sept fichiers reserves, avec `--nodelete`, puis pullback exact des memes fichiers. Aucun autre theme ne peut etre cible.

Le bootstrap complet `--unpublished --nodelete --strict` a remonte une seule erreur heritee : ressource video Shopify invalide dans `templates/list-collections.json`. Ce fichier est hors reservation C1 RC et reste interdit en ecriture. Cette erreur ne justifie ni extension de scope ni correction opportuniste ; elle doit rester consignee comme dette amont. Tous les prochains pushes restent bornes aux sept fichiers reserves vers `205027279193`, puis pullback borne des memes fichiers.

### Backend

- execution locale et tunnel ephemere de `shopify app dev` autorises pour la QA privee ;
- aucune donnee de production ;
- aucun hostname, DNS, Worker, VPS, base ou secret de production n est cree dans ce lot sans nouveau GO nommant la cible ;
- le backend production est prepare sous forme de code, migrations, manifests, healthchecks, stockage transactionnel, politique de secrets, retention, observabilite et rollback testables localement ;
- un eventuel environnement de staging stable reste une gate separee et ne peut pas etre infere de ce GO.

## Coordination Mail

Etat canonique, non reverifie dans Admin le 2026-08-23 :

- six Notifications live : confirmation commande, expedition, mise a jour expedition, annulation, remboursement, carte cadeau ;
- trois Messaging actives : consultation, panier et checkout ;
- zero automation inactive et zero modele personnalise ;
- package Mail `add705ff`, 515 controles et 18 sur 18 rendus PASS.

Dix surfaces compte restent gelees : invitation, bienvenue compte, mot de passe, ajout, mise a jour ou restauration paiement, acces ou paiement B2B, contact manuel client et changement d email. C1 RC peut ecrire un contrat de coordination dans sa propre zone, mais ne modifie aucun fichier Mail, template, automation, notification ou reglage. Toute correction exige un nouveau lot reserve au proprietaire Mail, puis des GO technique, creatif Patrice, Admin et live distincts.

## Commandes permises

Apres lecture de ce checkpoint et creation exacte des deux worktrees :

- commandes Git bornees aux deux branches RC, commit et push vers leurs origins ;
- `npm ci`, checks, tests, builds, audit et scans locaux ;
- build conteneur ou stockage local de test sans secret de production ;
- `shopify app info`, `shopify app build`, `shopify app dev --store milaura-c1-preview` ;
- `shopify theme list --store milaura-c1-preview` ;
- `shopify theme check` ;
- creation du seul theme non publie nomme ci-dessus, bootstrap `--unpublished --nodelete`, puis pushes `--only` des sept fichiers reserves ;
- pullback `--only` des memes fichiers depuis le theme RC ;
- lectures Storefront publiques et Customer Account API uniquement sur les comptes synthetiques allowlistes ;
- QA navigateur desktop, mobile, clavier, reseau coupe et multi-session ;
- arret propre des serveurs et tunnels, puis preuve d absence de listener.

## Commandes et actions interdites

- `shopify app deploy`, release, publication, approbation production, `clean`, reset ou relink ;
- `shopify theme publish`, delete, push ou pull sans cible exacte, push sans `--nodelete`, ou toute cible autre que le nouveau theme RC ;
- toute mutation des themes `204897517913`, `204897485145`, `204897550681`, `199421952347`, `190430282075` ;
- toute bascule de comptes, sauvegarde de navigation ou branding compte, demande de donnees protegees production ou autre action Admin ;
- tout email, SMS, automation, template, notification ou test vers une adresse reelle ;
- toute donnee cliente production, scope Admin supplementaire, Customer Events, Web Pixels, cookies, feed, stock, cout, marge, inventaire ou Ads ;
- toute ecriture dans `Agentic-Ops/main`, les lots C1 fermes, les zones Mail ou un fichier non reserve ;
- tout merge de `origin/main` ou integration par la session C1 ;
- tout live.

## Gates de sortie

### RC0 - Reservation et isolation

Deux branches et deux worktrees crees depuis les bases exactes, tracking distant, fichiers et zones verifies, lots C1 precedents inchanges, integration et Mail inchanges.

### RC1 - Architecture bout en bout

Contrat versionne pour `MilauraPreferenceStorage -> bridge theme -> backend -> Customer Account`, consentement distinct, handoff opaque signe, purge inverse, idempotence, concurrence, offline, retries, expiration, non-resurrection, menace, retention et rollback. Aucun secret navigateur. Le theme et l app sont prouves sur le meme store.

### RC2 - Application candidate

Copie selective de C1-1 dans la nouvelle zone, fixtures et selecteurs QA exclus du chemin candidate, scopes inchanges et minimaux, build vert. Le bundle reste sous la limite Shopify avec au moins 512 octets de marge. Aucun appel GraphQL Admin.

### RC3 - Backend production prepare

Stockage transactionnel et migrations, chiffrement, rotation de secrets, health/readiness, logs rediges, correlation IDs, metriques, alertes locales, rate limits, TTL, prune, sauvegarde, restauration et rollback testes. Le stockage JSON local ne peut pas etre la cible candidate. Aucun deploiement externe n est requis ni autorise sans cible approuvee.

### RC4 - Bridge theme et purge reelle

Feature flag off par defaut. Handoff reel depuis le diagnostic consenti et le panier, aucun transfert sans consentement Preferences et personnalisation explicite, purge locale et attributs panier avec recu verifiable, reprise apres coupure, absence de resurrection et non-regression cookies ou quiz. Aucune donnee sensible dans URL, localStorage supplementaire ou logs.

### RC5 - Catalogue et destinations

Registre produit et variant versionne, IDs, handles, destinations et medias verifies sur les catalogues autorises. Cas annulation, remboursement, retour, cadeau, egalite, produit sans pierre et mapping absent testes en fail-closed. Toute couverture incomplete, stock, cout ou marge non fiable reste un blocker de release et ne peut pas etre maquille par un fallback.

### RC6 - Mail et francais

Handoff Mail signe sans modification : surfaces compte applicables, risques de doublon ancien ou nouveau systeme, variables, liens securises, consentement service ou marketing, delivrabilite et rollback. Extension entierement francaise. Le shell Shopify natif doit etre constate en francais ou reste un blocker Admin explicite ; C1 ne modifie pas le store pour le forcer.

### RC7 - Environnement prive controle

Nouveau theme non publie avec ID enregistre, app dev sur le meme store, backend local ou tunnel, six comptes et trois commandes synthetiques maximum apres preflight Mail, aucune notification inattendue, aucune donnee reelle et aucun autre theme touche.

### RC8 - QA Release Candidate

Six etats, cinq profils, 360, 390, 430 et 1440 px, Chrome et navigateur isole, clavier, focus, cibles, overflow, console, performance de base, consentement refuse ou retire, handoff valide ou expire ou rejoue, conflit multi-appareils, coupures reseau a chaque etape, purge locale, panier, compte et backend, rechargement et nouvelle session. Preuves redigees et pullback theme bit a bit.

### RC9 - Rollback et nettoyage

Rollback app, backend, metafields, bridge et theme prive documente et teste. App dev, serveurs et tunnels arretes. Comptes et commandes synthetiques supprimes seulement apres confirmation destructive Patrice. Deux worktrees propres, commits pousses, aucun changement Admin, Mail, integration ou live.

### RC10 - Audit master et GO Patrice RC

Audit selectif des deux branches par le master, puis GO visuel et fonctionnel Patrice sur le Release Candidate prive. Meme ferme, RC10 ne donne aucun droit de merge theme, app deploy ou release, Admin, bascule de comptes, email ou live. Chacune de ces actions exige une gate et un GO distincts.

## Reprise copiable pour la session C1

```text
GO C1 Release Candidate reserve par le master au 2026-08-23. Lis integralement docs/checkpoints/2026-08-23-1100-c1-release-candidate-reservation.md avant toute ecriture.

Cree deux branches et deux worktrees exacts : theme codex/milaura-c1-release-candidate-theme-20260823 depuis 6560d59cf62df1e147c33585197e61821bd22b6b dans /Users/paesano/Documents/MilAura website/_worktrees/c1-release-candidate-theme-20260823 ; prive codex/milaura-c1-release-candidate-private-20260823 depuis cf2877ba4ee5faac143a4273c486fe39c96106a8 dans /Users/paesano/Documents/_worktrees/agentic-ops-milaura-c1-release-candidate-20260823. Tracke les deux origins.

Theme : ecris seulement assets/milaura-preference-storage.js, le nouvel asset milaura-c1-release-bridge.js, le nouveau snippet milaura-c1-release-bridge.liquid, layout/theme.liquid, sections/milaura-quiz.liquid, config/settings_schema.json et config/settings_data.json. Prive : ecris seulement dans docs/milaura/shopify-apps/customer-accounts-release-candidate/** et docs/milaura/shopify-admin-canonical/c1-release-candidate/**. Tous les anciens lots C1, Mail, integration, cookies et autres fichiers restent en lecture seule.

Utilise seulement milaura-c1-preview ID 107347837273. Ne touche aucun theme existant. Le seul nouveau theme autorise se nomme MilAura C1 Release Candidate 2026-08-23 ; retourne son ID au master des sa creation. Aucun app deploy/release, theme publish, Admin, bascule comptes, email, C1-2 ou live. Ferme RC0 a RC9 puis rends les deux commits au master pour RC10.
```
