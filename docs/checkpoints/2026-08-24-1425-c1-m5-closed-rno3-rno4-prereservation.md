# C1 M5 ferme, RNO3 et RNO4 pre-reserves

Date : 2026-08-24 14:25 CEST

## Verdict M5

`PASS - OTP_DELIVERED_AUTH_SESSION_READY`

Audit master du lot M5 :

- branche `codex/milaura-c1-otp-single-test-20260824` ;
- base `ff6cc0616b9bedee2323a9c5d3a197659170f260` ;
- commit pousse `90c1d8d4c1921cf65d5da3cc5cbfe3f4b9e264d1` ;
- HEAD strictement egal a origin, worktree propre ;
- diff limite a `docs/milaura/shopify-admin-canonical/c1-otp-single-test/2026-08-24-m5-execution-report.md` ;
- `git diff --check` vert ;
- un seul OTP demande par Patrice, recu et saisi uniquement par lui ;
- aucune valeur OTP, donnee de session ou preuve sensible conservee ;
- aucun renvoi, Admin, Mail, app dev, backend, tunnel, flag, theme ou runtime Mon Ecrin ;
- aucun listener ou processus C1 restant.

M5 ferme uniquement la livraison et l authentification native. RC4 et RC8 restent ouverts.

## Reservation Git RNO3 et RNO4

- proprietaire d execution : tache C1 `01a03261-3f60-7e43-bf6e-bce01a7eeeb1` ;
- master : seul proprietaire de l integration, de `docs/workstreams.md` et de tout live ;
- depot prive : `Onora-studio/onora-ops` ;
- branche a creer apres GO : `codex/milaura-c1-rc-runtime-authenticated-20260824` ;
- base exacte : `90c1d8d4c1921cf65d5da3cc5cbfe3f4b9e264d1` ;
- worktree a creer apres GO : `/Users/paesano/Documents/_worktrees/agentic-ops-milaura-c1-rc-runtime-authenticated-20260824` ;
- tracking : `origin/codex/milaura-c1-rc-runtime-authenticated-20260824` ;
- zone d ecriture exclusive : `docs/milaura/shopify-admin-canonical/c1-release-candidate-runtime-authenticated/**` ;
- application RC sous `docs/milaura/shopify-apps/customer-accounts-release-candidate/**` executable en lecture seule ;
- branche theme `codex/milaura-c1-release-candidate-theme-20260823` a `2f95b3d1ebb2af9863e98f914a1daa835e6b90be`, strictement en lecture seule.

La branche et le worktree sont absents localement et sur origin au preflight. Si un correctif de code, config, scope, migration, theme ou contrat est necessaire, le lot s arrete et rend un diagnostic au master.

## Environnement autorise

- seul store : `milaura-c1-preview.myshopify.com`, ID `107347837273` ;
- seul theme : `MilAura C1 Release Candidate 2026-08-23`, ID `205027279193`, non publie ;
- unique compte synthetique RNO1, sans commande, deja authentifie par Patrice ;
- aucun nouvel OTP autorise ; si la session native a expire, stop `AUTH_SESSION_EXPIRED` sans renvoi ;
- backend local sur `127.0.0.1:3017` et port enfant enregistre dans la preuve ;
- `shopify app dev` uniquement sur le dev store autorise ;
- tunnel ephemere de la CLI uniquement pendant le lot ;
- fichiers locaux sensibles ou generes ignores, recopies sans affichage : `.env.c1-release-candidate.local`, `.c1-release-candidate-test-accounts.local.json`, `.data/`, `.shopify/`, `dist/` et logs bruts.

## Mutations privees permises

- activation temporaire du seul setting `milaura_c1_release_candidate_enabled` sur le theme prive `205027279193`, apres preuve de sa valeur initiale `false` ;
- ecritures app-owned necessaires au diagnostic, consentement, handoff, conflit, synchronisation et purge sur l unique compte synthetique allowliste ;
- attributs panier de ce compte ou navigateur de test uniquement ;
- backend local, SQLite locale, development preview et tunnel ephemere ;
- nettoyage final des seules donnees C1 creees par ce lot ;
- restauration obligatoire du flag a `false`, puis verification apres rechargement.

Aucun push theme, changement Git theme, autre setting ou autre compte.

## Scenarios RNO3

1. chargement reel de l extension dans la session authentifiee ;
2. etat sans diagnostic et sans commande ;
3. diagnostic local consenti transmis par le bridge au backend puis reclame dans Mon Ecrin ;
4. retry du meme handoff sans doublon ;
5. cinq profils verifies successivement sans donnee inventee ;
6. consentement refuse ou retire avec absence de transfert ;
7. conflit entre deux diagnostics et resolution explicite ;
8. coupures avant et apres emission, reclamation, synchronisation et purge, puis reprise ;
9. purge locale, panier, compte et backend avec recu, reload et absence de resurrection.

## Scenarios RNO4

- 360, 390, 430 et 1440 px ;
- clavier, focus visible, cibles, overflow et console ;
- session rechargee sans nouveau login ni nouvel OTP ;
- preuves desktop et mobile expurgees ;
- aucune erreur extension non documentee.

Les etats exigeant une commande restent exclus, non simules et non declares passes.

## Rollback RNO5 et preuve RNO6

- purge des seules donnees C1 du lot sur compte, panier, navigateur et backend ;
- flag theme prive restaure a `false` ;
- app dev, backend et tunnel arretes ;
- aucun listener ou processus restant ;
- preuve de non-resurrection apres rechargement ;
- rapport expurge, commit pousse, tracking `0/0` et worktree propre.

## Interdictions

- aucun nouvel OTP, renvoi, logout volontaire ou autre compte ;
- aucune commande, meme test, et aucun scope `write_orders` ;
- aucune mutation Admin client, email, langue, branding, compte ou store ;
- aucun fichier Mail, notification, automation ou template ;
- aucun code, config, scope, migration ou theme modifie ;
- aucun `shopify app deploy`, release, reset, clean, push theme, publication ou suppression ;
- aucun backend, DNS, hostname, Worker, VPS, registre, base ou secret de production ;
- aucun C1-2, integration ou live.

## Gate de sortie

Un PASS RNO3, RNO4, RNO5 et RNO6 peut fermer RC4 et augmenter la couverture sans commande de RC8. Il ne ferme pas RC5, RC6, RC7, les etats commandes de RC8 ni le Release Candidate global. Audit master obligatoire avant toute suite.

## GO exact requis

`GO C1 RNO3 RNO4 - QA AUTHENTIFIEE PRIVEE SANS COMMANDE, SANS RELEASE NI LIVE`
