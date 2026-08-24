# C1 Release Candidate, lot 1A runtime prive sans commande

Date : 2026-08-24 08:21 CEST

Statut : `RESERVE - EXECUTION PRIVEE SANS COMMANDE AUTORISEE`

## Decision master

Le retour en lecture seule de la nouvelle session C1 confirme l etat canonique : RC4 reste partiel faute de runtime authentifie, RC5 attend la verite inventaire et catalogue, RC6 est ferme avec NO-GO conditionnel, RC7 reste ouvert sans environnement de commandes et RC8 reste partiel.

Le master ouvre uniquement le plus petit lot suivant : runtime prive authentifie sans commande. Ce lot ne tranche pas `write_orders`, ne ferme pas RC5 et ne donne aucun droit de productionisation ou live.

L architecture reste sous controle de Patrice. Toute decision structurelle, tout nouvel acces, tout changement de scope ou tout ecart par rapport au contrat existant est explique avant execution et revient au master.

## Proprietaires

- lot : Codex, tache `Planifier la refonte Mon Ecrin`, thread `01a03261-3f60-7e43-bf6e-bce01a7eeeb1` ;
- integration, `docs/workstreams.md`, decisions de reservation et tout live : session master, thread `01a0232d-93da-7101-837e-cd83108072f8` ;
- Mail : tache `Planifier audit emails MilAura`, thread `01a02320-58bd-7981-8181-399c222a9f92` ; ses fichiers, templates, notifications et automations restent interdits ;
- aucun autre proprietaire ne modifie le lot, le theme prive RC ou l environnement C1 pendant le runtime.

## Base, branche et worktree

Depot prive `Onora-studio/onora-ops` :

- base exacte : `c877d630a8953a0cf1304c7392143288db110b99` ;
- branche a creer : `codex/milaura-c1-rc-runtime-no-orders-20260824` ;
- worktree a creer : `/Users/paesano/Documents/_worktrees/agentic-ops-milaura-c1-rc-runtime-no-orders-20260824` ;
- tracking : `origin/codex/milaura-c1-rc-runtime-no-orders-20260824` ;
- la branche et le worktree ont ete verifies absents localement et sur origin avant reservation.

Zone d ecriture Git exclusive :

`docs/milaura/shopify-admin-canonical/c1-release-candidate-runtime-no-orders/**`

L application existante sous `docs/milaura/shopify-apps/customer-accounts-release-candidate/**` est executable en lecture seule. Aucun code, config, scope, migration, extension, theme ou ancien lot C1 ne peut etre modifie. Si le runtime revele un correctif necessaire, la session s arrete et rend un diagnostic borne au master.

Fichiers locaux sensibles ou generes, toujours ignores et jamais affiches ni indexes :

- `.env.c1-release-candidate.local` ;
- `.c1-release-candidate-test-accounts.local.json` ;
- `.data/` ;
- `.shopify/` ;
- `dist/` et logs bruts.

La session peut recopier les fichiers locaux necessaires depuis le worktree RC precedent sans afficher leur contenu. Aucun secret ne doit apparaitre dans un outil, une preuve, une note ou Git.

## Environnement autorise

- seul store : `milaura-c1-preview.myshopify.com`, ID `107347837273` ;
- seul theme : `MilAura C1 Release Candidate 2026-08-23`, ID `205027279193`, role `unpublished` ;
- branche theme source, strictement en lecture seule : `codex/milaura-c1-release-candidate-theme-20260823` a `2f95b3d1ebb2af9863e98f914a1daa835e6b90be` ;
- backend local sur `127.0.0.1:3017` ;
- `shopify app dev` seulement sur `milaura-c1-preview`, avec ports CLI ou extension enregistres dans les preuves ;
- tunnel ephemere cree uniquement par la CLI pour cette session, puis arrete ;
- aucun autre store, theme, app, tunnel, backend ou environnement.

## Compte de test

Le lot peut utiliser un seul compte synthetique existant, sans commande, dont l adresse est explicitement controlee par Patrice. La session commence par une verification read-only de son existence et de son absence de commande.

- le GID reste dans l allowlist locale ignoree ;
- aucun email, GID, nom, adresse, telephone ou OTP n apparait dans Git ou les preuves ;
- le code de connexion Customer Accounts natif peut etre recu uniquement sur cette boite controlee ;
- aucune cliente ou donnee de production ;
- aucune creation de compte dans ce lot.

Si aucun compte synthetique existant et controle n est disponible, le lot s arrete avec le blocker `ACCOUNT_REQUIRED`. Il ne cree pas de compte et ne demande pas de nouvel acces implicitement.

## Mutations privees strictement permises

- ecritures app-owned necessaires au diagnostic, consentement, conflit, synchronisation et purge sur l unique compte synthetique allowliste ;
- attributs panier de ce compte ou navigateur de test uniquement ;
- activation temporaire du seul setting `milaura_c1_release_candidate_enabled` sur le theme prive `205027279193`, puis restauration obligatoire a `false` avant cloture ;
- development preview de `shopify app dev`, backend local, base SQLite locale et tunnel ephemere ;
- nettoyage des seules donnees C1 creees par ce lot sur le compte synthetique, avec preuve de non-resurrection.

L activation du flag se fait dans le theme prive uniquement. Aucun push theme, aucune modification Git theme et aucun autre setting ne sont autorises. La valeur avant et apres doit etre prouvee `false`.

## Interdictions

- aucune commande, meme test ;
- aucun scope `write_orders` ;
- aucune mutation Admin client, commande, email, langue, branding, compte ou store ;
- aucun fichier Mail, notification, automation ou template ;
- aucun `shopify app deploy`, release, publication, approbation production, reset ou clean ;
- aucun push theme, theme publish ou theme delete ;
- aucun backend, DNS, hostname, Worker, VPS, registre, base ou secret de production ;
- aucune donnee cliente reelle ;
- aucune ecriture dans les lots C1 precedents, le theme, l integration ou `Agentic-Ops/main` ;
- aucun C1-2, integration ou live.

## Scenarios obligatoires

1. connexion au compte synthetique controle et chargement reel de l extension ;
2. etat sans diagnostic et sans commande ;
3. diagnostic local consenti transmis par le bridge theme au backend puis reclame dans Mon Ecrin ;
4. retry du meme handoff sans doublon ;
5. cinq profils verifies successivement, sans inventer de donnee ;
6. consentement refuse ou retire, avec absence de transfert ;
7. conflit entre deux diagnostics et resolution explicite ;
8. coupure avant et apres emission, reclamation, synchronisation et purge, puis reprise ;
9. purge locale, panier, compte et backend avec recu, reload et nouvelle session sans resurrection ;
10. 360, 390, 430 et 1440 px, clavier, focus, cibles, overflow et console ;
11. logs et preuves rediges sans secret ni donnee personnelle ;
12. rollback final : compte nettoye des donnees C1 du lot, flag theme `false`, app dev, backend et tunnel arretes.

Les etats qui exigent une commande ne sont ni simules ni declares passes.

## Gates de sortie du lot 1A

| Gate | Condition |
| --- | --- |
| RNO0 | branche et worktree exacts, tracking distant, zone exclusive et lots geles verifies |
| RNO1 | compte synthetique existant, controle, allowliste et sans commande, ou blocker `ACCOUNT_REQUIRED` |
| RNO2 | app, backend et theme prive connectes sur le meme dev store sans deploy ni release |
| RNO3 | handoff, consentement, retry, conflit, sync et purge executes bout en bout sans commande |
| RNO4 | QA responsive, clavier, console, coupures et nouvelle session documentees |
| RNO5 | rollback complet, flag `false`, donnees C1 nettoyees et aucun listener ou tunnel restant |
| RNO6 | preuves redigees, commit pousse, worktree propre et aligne |

Un PASS RNO0 a RNO6 peut fermer RC4 et augmenter la couverture RC8. Il ne ferme ni RC5, ni RC6, ni RC7, ni les etats commandes de RC8, ni RC10 global.

## Retour attendu au master

La session rend :

- branche, commit, tracking et statut Git ;
- compte qualifie sans identifiant personnel ;
- matrice exacte des scenarios PASS, PARTIEL ou BLOCKED ;
- preuves desktop et mobile redigees ;
- etat du flag avant et apres ;
- preuve d absence de listener, tunnel et processus ;
- ecarts et plus petit prochain lot recommande ;
- aucune demande de GO Patrice tant que le master n a pas audite.
