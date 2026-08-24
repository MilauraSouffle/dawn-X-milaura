# C1 RNO3/RNO4, pre-reservation M6 backend_url ephemere

Date : 2026-08-24 16:27 CEST

## Verdict intermediaire

`BLOCKED_BACKEND_SETTING_NOT_CONFIGURED - ROLLBACK TECHNIQUE PASS`

Apres le GO RNO3/RNO4 et l autorisation informee du transit Cloudflare borne, la tache C1 a confirme :

- branche et worktree reserves crees depuis `90c1d8d4c1921cf65d5da3cc5cbfe3f4b9e264d1` ;
- fichiers locaux ignores recopies sans affichage ;
- `npm ci` PASS, 33 tests sur 33 PASS, build PASS, bundle `65019/65536`, audit zero ;
- tunnel Cloudflare ephemere, backend local et `shopify app dev` demarres sur le seul dev store autorise ;
- session Customer Accounts toujours authentifiee ;
- theme prive `205027279193` uniquement ;
- flag theme prouve `false`, active temporairement, puis restaure `false` et confirme apres rechargement ;
- premier chargement reel de Mon Ecrin proprement bloque avec `BACKEND_NOT_CONFIGURED` ;
- aucune requete metier ni donnee synthetique transmise au backend ;
- app dev, backend et tunnel arretes, aucun listener sur `3017` ou `3457`, aucun processus restant.

Le manifest de l extension declare `backend_url` comme `single_line_text_field`. Le code refuse toute valeur non HTTPS et desactive le transfert et la purge lorsque le champ est vide. Ce setting marchand vit dans l editeur Customer Accounts ou checkout de la development preview ; il ne doit jamais etre inscrit dans Git ou dans un fichier theme.

## Decision master

RNO3 et RNO4 ne sont pas refuses. Ils restent bloques par une configuration runtime manquante, sans defaut de code prouve. Le master pre-reserve M6, unique extension de scope : renseigner temporairement `backend_url` avec l URL HTTPS du tunnel Cloudflare ephemere dans la development preview, reprendre les scenarios deja autorises, puis vider le champ et verifier le rollback.

Le cadre Cloudflare retenu est un connecteur sortant uniquement : aucun port entrant local n est ouvert. L URL publique ephemere reste toutefois bornee par le jeton de session Shopify, l allowlist du dev store, l absence de payload dans les logs, la duree du lot et l arret du tunnel.

## Git et proprietaires

- tache C1 : `01a03261-3f60-7e43-bf6e-bce01a7eeeb1` ;
- master : seul proprietaire de l integration, de `docs/workstreams.md` et de tout live ;
- branche existante : `codex/milaura-c1-rc-runtime-authenticated-20260824` ;
- base et HEAD avant M6 : `90c1d8d4c1921cf65d5da3cc5cbfe3f4b9e264d1` ;
- worktree existant : `/Users/paesano/Documents/_worktrees/agentic-ops-milaura-c1-rc-runtime-authenticated-20260824` ;
- la branche locale n a pas encore d upstream au preflight master ; apres GO et avant toute mutation Shopify, C1 etablit `origin/codex/milaura-c1-rc-runtime-authenticated-20260824` ;
- zone d ecriture Git exclusive maintenue : `docs/milaura/shopify-admin-canonical/c1-release-candidate-runtime-authenticated/**` ;
- aucun code, manifest, config, scope, migration, theme, Mail ou ancien lot modifie.

M6 reste dans le meme worktree afin de conserver la session native authentifiee et d eviter un nouvel OTP. Aucun autre proprietaire ne travaille sur cette branche, ce theme ou ce dev store pendant le lot.

## Mutation unique autorisable

Dans l editeur Customer Accounts de la seule development preview :

1. prouver `backend_url` vide ;
2. demarrer backend local, tunnel ephemere et app dev ;
3. verifier `/health` et `/ready` avant exposition metier ;
4. communiquer l URL HTTPS ephemere a Patrice uniquement dans la tache C1, sans Git ni preuve ;
5. Patrice renseigne manuellement le seul champ `backend_url` et enregistre une fois ;
6. C1 recharge Mon Ecrin et confirme que `BACKEND_NOT_CONFIGURED` a disparu avant les scenarios ;
7. executer RNO3 et RNO4 dans les bornes du checkpoint du 2026-08-24 14:25 ;
8. avant l arret du tunnel, Patrice vide manuellement `backend_url`, enregistre une fois et C1 confirme apres rechargement que le champ est vide ;
9. restaurer le flag theme a `false`, purger les seules donnees du lot, puis arreter app dev, backend et tunnel.

Aucun autre setting, texte, branding, extension, compte ou environnement. Si le controle de l editeur est indisponible, C1 guide Patrice ; aucun contournement API ou GraphQL Admin.

## Gates M6

| Gate | Condition |
| --- | --- |
| M6-0 | upstream etabli, worktree propre, environnement et proprietaires revalides |
| M6-1 | `backend_url` initial vide, backend sain et URL HTTPS ephemere non persistee dans les preuves |
| M6-2 | Patrice renseigne uniquement le champ autorise, une sauvegarde, puis connexion backend authentifiee constatee |
| M6-3 | RNO3 et RNO4 executes sans commande ni nouvel OTP |
| M6-4 | `backend_url` vide apres rollback et rechargement, flag `false`, donnees du lot purgees |
| M6-5 | app dev, backend, tunnel et listeners arretes ; rapport expurge, commit pousse, tracking `0/0` |

## Echec et rollback

- si le champ ne peut pas etre renseigne, stop `BACKEND_SETTING_CONTROL_UNAVAILABLE` sans autre surface ;
- si la connexion backend echoue, vider immediatement le champ avant diagnostic ;
- si le champ ne peut pas etre vide, stopper le tunnel pour couper l exposition puis rendre `ROLLBACK_BLOCKED` au master ;
- aucune nouvelle URL, relance ou seconde tentative sans comprendre et documenter le premier echec ;
- aucune valeur tunnel dans Git, capture, log, checkpoint ou message final.

## Interdictions maintenues

- aucun nouvel OTP, renvoi ou autre compte ;
- aucune commande, meme test, et aucun `write_orders` ;
- aucune mutation Admin client, email, langue, branding ou store ;
- aucun autre setting de l extension ou du theme ;
- aucun fichier Mail, notification, automation ou template ;
- aucun code, manifest, config, scope, migration ou theme modifie ;
- aucun app deploy, release, reset, clean, push theme, publication ou suppression ;
- aucun backend, DNS, hostname, Worker, VPS, registre, base ou secret de production ;
- aucun C1-2, integration ou live.

## GO exact requis

`GO C1 M6 BACKEND URL - CONFIGURATION EPHEMERE DANS LA PREVIEW PRIVEE, REPRISE RNO3 RNO4 ET ROLLBACK VIDE, SANS RELEASE NI LIVE`
