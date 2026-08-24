# C1 endpoint stable : RNO3 en echec borne et correctif d idempotence pre-reserve

Date : 2026-08-24 20:21 CEST

## Verdict master

Le lot endpoint prive stable est ferme avec le verdict exact :

`RNO3_FAIL_IDEMPOTENCE_AFTER_RELOAD - RNO4_PARTIAL_PASS - ROLLBACK_PASS`

L infrastructure stable fonctionne. Le defaut est maintenant borne au theme Release Candidate. RC4, RC8 et le Release Candidate global restent ouverts. Mon Ecrin n est pas live.

## Audit des preuves

- integration master `codex/milaura-integration` propre et alignee `0/0` a `35e5907b97d4a1c101750f86a7368dbe76f255e8` avant ce checkpoint ;
- branche privee `codex/milaura-c1-stable-private-endpoint-20260824` propre et alignee `0/0` a `146ac02633a14c43436a09611996c71d8c861f7d` ;
- branche theme RC `codex/milaura-c1-release-candidate-theme-20260823` propre et alignee `0/0` a `2f95b3d1ebb2af9863e98f914a1daa835e6b90be` ;
- diff prive borne aux nouveaux fichiers du paquet de deploiement et au rapport C1, `git diff --check` passe ;
- theme `205027279193` reste non publie ; aucun listener local `3017`, `3457` ou `3018`, aucun quick tunnel actif.

Rapport prive audite :

`/Users/paesano/Documents/_worktrees/agentic-ops-milaura-c1-stable-private-endpoint-20260824/docs/milaura/shopify-admin-canonical/c1-stable-private-endpoint/2026-08-24-c1-stable-private-endpoint-rno3-rno4.md`

## Ce qui est prouve

- `c1-preview-api.milaura.fr` a fonctionne en HTTPS avec nginx, certificat valide, backend non root, rootfs en lecture seule, bind `127.0.0.1:3018`, SQLite isolee et secrets hors Git ;
- `/health`, `/ready` et la validation de session Shopify ont repondu comme prevu ;
- le compte synthetique RNO1 et zero commande ont ete verifies ;
- la premiere emission et le premier import du diagnostic synthetique `Apaisement` ont fonctionne ;
- le rendu initial a passe `360`, `390`, `430` et `1440` px sans overflow visible ;
- apres reload, un nouvel envoi du meme resultat a cree un second handoff et un faux conflit ;
- le rollback a purge compte, backend, navigateur et panier, sans resurrection ; `backend_url` est vide, le flag theme est `false`, App Dev et le conteneur sont arretes.

Le DNS, le vhost nginx, le certificat, le volume, les secrets VPS et le conteneur arrete sont conserves. Leur retrait est destructif et hors de ce lot.

## Cause confirmee et correction attendue

`sections/milaura-quiz.liquid` appelle `displayResults()` lors de la restauration, reconstruit `storageData`, remplace `timestamp` et perd `resultId`, `revision` et `accountPersonalization`, puis reecrit le diagnostic local. Le bridge genere alors une nouvelle identite et une nouvelle cle.

Le backend calcule cependant son digest sur le diagnostic normalise, qui contient aussi `timestamp`. Copier seulement `resultId`, `revision` et le consentement serait donc incomplet : la meme cle avec un timestamp regenere doit etre refusee par `IDEMPOTENCY_KEY_REUSED`.

Le correctif doit distinguer deux chemins :

1. restauration explicite du dernier resultat : afficher et republier l objet deja stocke sans le reecrire ni modifier son identite, son consentement ou son timestamp ;
2. nouveau passage reel du quiz : creer un nouvel objet, un nouveau timestamp et, apres choix de conservation, une nouvelle identite, meme si le profil final est identique.

Aucun changement du backend, du contrat de consentement, des textes valides du quiz ou de l interface n est autorise.

## Nouvelle pre-reservation, non executee

### Theme

- branche a creer apres GO : `codex/milaura-c1-idempotence-fix-20260824` ;
- base exacte : `2f95b3d1ebb2af9863e98f914a1daa835e6b90be` ;
- worktree a creer : `/Users/paesano/Documents/MilAura website/_worktrees/c1-idempotence-fix-20260824` ;
- fichier exclusif : `sections/milaura-quiz.liquid` ;
- `assets/milaura-c1-release-bridge.js`, les six autres fichiers RC, le live et tout autre fichier restent en lecture seule.

La reservation de `sections/milaura-quiz.liquid` est transferee du lot RC gele vers ce seul micro-lot. Le lot RC historique ne peut plus l editer pendant cette execution.

### Preuves privees

- branche a creer apres GO : `codex/milaura-c1-idempotence-fix-private-20260824` ;
- base exacte : `146ac02633a14c43436a09611996c71d8c861f7d` ;
- worktree a creer : `/Users/paesano/Documents/_worktrees/agentic-ops-milaura-c1-idempotence-fix-private-20260824` ;
- zone exclusive : `docs/milaura/shopify-admin-canonical/c1-idempotence-fix/**` ;
- application RC, paquet endpoint stable, secrets, Mail et anciens rapports restent en lecture seule.

### Environnement autorise apres GO

- dev store `milaura-c1-preview`, ID `107347837273` ;
- theme prive non publie `205027279193` uniquement ;
- compte synthetique RNO1 sans commande ;
- endpoint stable existant, redemarre seulement pour la QA puis arrete ;
- App Dev de la development preview, sans deploy ni release ;
- saisie manuelle bornee de `backend_url`, activation temporaire du flag prive, puis rollback obligatoire vers URL vide et flag `false` ;
- un OTP natif unique, declenche et saisi uniquement par Patrice, seulement si la session a expire.

## Gates de sortie

1. diff theme limite au seul fichier reserve, controle syntaxique et Theme Check sans nouvelle erreur ;
2. push Git des deux branches, worktrees propres et alignes ;
3. push Shopify limite a `sections/milaura-quiz.liquid` sur `205027279193` avec `--nodelete`, puis pullback borne identique ;
4. premier diagnostic emis et importe ; reload puis nouvel envoi du resultat restaure avec meme `resultId`, meme revision, meme timestamp normalise, meme cle, meme handoff et `duplicate=true` ;
5. aucune seconde ligne de handoff et aucun faux conflit ;
6. nouveau passage reel du quiz prouve avec nouvelle identite et vrai conflit, puis resolution explicite ;
7. RNO4 termine sur les etats sans commande a `360`, `390`, `430` et `1440` px, clavier, focus, console et absence d overflow ;
8. purge et non-resurrection confirmees ; `backend_url` vide, flag `false`, theme non publie, App Dev et endpoint arretes, aucun listener restant.

Restent interdits : commande, `write_orders`, Admin cliente, Mail, email, modification DNS ou nginx, nouveau secret, app deploy, release, C1-2, integration master, publication de theme et live.

## GO exact requis

`GO C1 CORRECTIF IDEMPOTENCE - NE PAS REECRIRE LE DIAGNOSTIC RESTAURE, REJOUER RNO3 RNO4 SUR LE THEME PRIVE 205027279193 ET L ENDPOINT STABLE, PUIS ROLLBACK, SANS COMMANDE, ADMIN CLIENTE, MAIL, RELEASE NI LIVE`

Sans cette phrase exacte, la nouvelle reservation reste documentaire et aucune branche, worktree, edition ou action Shopify n est autorisee.
