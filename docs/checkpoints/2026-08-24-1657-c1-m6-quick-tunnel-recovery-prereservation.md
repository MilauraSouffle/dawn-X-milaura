# C1 M6, pre-reservation recovery quick tunnel

Date : 2026-08-24 16:57 CEST

## Verdict intermediaire

`BLOCKED_QUICK_TUNNEL_DNS_NOT_RESOLVED - AUCUNE DONNEE METIER TRANSMISE`

Apres le GO M6, Patrice a enregistre une fois le seul setting `backend_url` dans la development preview privee. Le controle immediat a ensuite prouve :

- hostname du quick tunnel non resolu depuis le navigateur et `curl`, avec `ERR_NAME_NOT_RESOLVED` ;
- processus `cloudflared` encore vivant, sans endpoint public joignable ;
- extension toujours dans son etat proprement indisponible ;
- aucune requete metier, aucun diagnostic et aucune donnee synthetique transmis au backend ;
- aucun defaut du code C1 prouve ;
- aucune seconde URL ni seconde sauvegarde executee.

Le champ contient donc une URL ephemere morte. Cette valeur ne doit apparaitre dans aucun fichier, log, capture ou retour. Le statut exact du flag theme apres cet echec n est pas etabli dans le retour ; toute reprise commence par le confirmer ou le restaurer a `false`.

## Decision master

Le master choisit un recovery A borne, pas un retry aveugle. Un seul nouveau quick tunnel peut etre cree, mais aucune nouvelle valeur ne peut etre enregistree avant preuve complete de sa disponibilite. Si cette prevalidation echoue, Patrice vide immediatement le champ actuel et le lot s arrete.

Cette decision ne valide ni le tunnel precedent, ni RNO3, ni RNO4. Elle ne donne aucun droit release, deploy, Admin client, commande, theme live ou live.

## Git, proprietaires et environnement

- tache C1 : `01a03261-3f60-7e43-bf6e-bce01a7eeeb1` ;
- master : seul proprietaire de l integration, de `docs/workstreams.md` et de tout live ;
- branche maintenue : `codex/milaura-c1-rc-runtime-authenticated-20260824` ;
- base initiale du lot : `90c1d8d4c1921cf65d5da3cc5cbfe3f4b9e264d1` ;
- worktree maintenu : `/Users/paesano/Documents/_worktrees/agentic-ops-milaura-c1-rc-runtime-authenticated-20260824` ;
- zone d ecriture Git exclusive : `docs/milaura/shopify-admin-canonical/c1-release-candidate-runtime-authenticated/**` ;
- seul store : `milaura-c1-preview`, ID `107347837273` ;
- seul theme : `MilAura C1 Release Candidate 2026-08-23`, ID `205027279193`, non publie ;
- seule cliente : compte synthetique RNO1 authentifie et sans commande ;
- aucun autre proprietaire sur cette branche, ce worktree, ce theme ou ce dev store pendant le recovery.

Avant toute action runtime, C1 verifie que la branche est propre, que son upstream existe et que le tracking est `0/0`. Aucun code, manifest, config, scope, migration, theme, Mail ou ancien lot ne peut etre modifie.

## Sequence recovery autorisable apres nouveau GO

1. confirmer ou restaurer le flag du theme prive a `false` ;
2. arreter le processus `cloudflared` invalide et verifier qu aucun ancien app dev, backend, tunnel ou listener du lot ne reste ;
3. demarrer le backend local et prouver localement `/health` et `/ready` ;
4. creer exactement un nouveau quick tunnel Cloudflare ;
5. avant toute sauvegarde Shopify, prouver que le tunnel a enregistre sa connexion, que son hostname resout et que les endpoints HTTPS publics `/health` et `/ready` repondent ;
6. effectuer ces controles depuis au moins deux surfaces independantes parmi `curl`, navigateur et resolution DNS ;
7. seulement si tous les controles passent, communiquer la nouvelle URL a Patrice dans la tache C1, sans Git ni preuve ;
8. Patrice remplace directement l URL morte dans le seul champ `backend_url` et enregistre une fois ;
9. C1 recharge Mon Ecrin, confirme la connexion backend authentifiee puis execute RNO3 et RNO4 dans les limites deja autorisees ;
10. avant tout arret du tunnel, Patrice vide `backend_url`, enregistre une fois et C1 confirme apres rechargement que le champ est vide ;
11. restaurer et confirmer le flag `false`, purger les seules donnees du lot, puis arreter app dev, backend, tunnel et listeners ;
12. rediger un rapport expurge, commit, push et confirmer le tracking `0/0`.

Le quick tunnel est un connecteur sortant et n ouvre aucun port entrant local. Son URL reste neanmoins sensible par contexte et doit etre ephemere. Les requetes restent protegees par le jeton de session Shopify, l allowlist du dev store et l absence de payload dans les logs.

## Gates M6 recovery

| Gate | Condition |
| --- | --- |
| M6R-0 | branche propre, upstream et tracking `0/0`, flag prive `false`, ancien runtime arrete |
| M6R-1 | backend local sain ; nouveau tunnel unique avec connexion enregistree, DNS resolu et `/health` plus `/ready` publics PASS avant sauvegarde |
| M6R-2 | remplacement manuel unique du seul `backend_url`, puis connexion backend authentifiee constatee |
| M6R-3 | RNO3 et RNO4 executes sans nouvel OTP, commande ni autre compte |
| M6R-4 | `backend_url` vide apres rollback et rechargement, flag `false`, donnees du lot purgees |
| M6R-5 | app dev, backend, tunnel et listeners arretes ; rapport expurge, commit pousse, tracking `0/0` |

## Echec et rollback

- si le nouveau tunnel ne passe pas toute la prevalidation, aucune nouvelle URL n est sauvegardee ; Patrice vide l URL morte actuelle, enregistre une fois, C1 confirme le champ vide puis arrete tout avec `RECOVERY_TUNNEL_PREVALIDATION_FAILED` ;
- si la valeur est remplacee mais que la connexion runtime echoue, Patrice vide le champ avant tout diagnostic supplementaire ;
- si le champ ne peut pas etre vide, C1 coupe immediatement le tunnel puis rend `ROLLBACK_BLOCKED` au master ;
- aucun troisieme tunnel, nouvelle URL, nouvelle sauvegarde ou autre surface sans nouvelle decision master ;
- aucune URL tunnel dans Git, captures, logs, checkpoint ou message final.

## Interdictions maintenues

- aucun nouvel OTP ou renvoi ;
- aucune creation ou modification de cliente, adresse, profil, commande ou email ;
- aucune commande, meme test, et aucun `write_orders` ;
- aucun autre setting, texte, langue, branding ou configuration ;
- aucun code, manifest, scope, migration, theme ou fichier Mail modifie ;
- aucun app deploy, release, reset, clean, push theme, publication ou suppression ;
- aucun backend, DNS, hostname, Worker, VPS, registre, base ou secret de production ;
- aucun C1-2, integration ou live.

## GO exact requis

`GO C1 M6 RECOVERY - UN NOUVEAU QUICK TUNNEL PREVALIDE AVANT SAUVEGARDE, REMPLACEMENT UNIQUE DE BACKEND_URL, RNO3 RNO4, PUIS ROLLBACK VIDE, SANS RELEASE NI LIVE`
