# C1 Release Candidate, second réaudit RC10 des correctifs

Date : 2026-08-23 19:36 CEST

Statut : `CORRECTIFS RC1 ET RC3 PASS - RC GLOBAL OUVERT, AUCUN GO PATRICE DEMANDE`

## Périmètre audité

- thème : branche `codex/milaura-c1-release-candidate-theme-20260823`, ancien tip `fde2f875a5e579f39c0180bc884f6a09f0973f60`, nouveau tip poussé `2f95b3d1ebb2af9863e98f914a1daa835e6b90be` ;
- privé : branche `codex/milaura-c1-release-candidate-private-20260823`, ancien tip `522a411ebafdbe1bb5eee53a5dc2a3031db51b15`, correctif fonctionnel `77cd15f3a09cf0c4f3c61337e52179bfda11035c`, nouveau tip poussé `c877d630a8953a0cf1304c7392143288db110b99` ;
- thème Shopify privé : `MilAura C1 Release Candidate 2026-08-23`, ID `205027279193`, store `107347837273`, rôle `unpublished` ;
- les deux worktrees sont propres, alignés `0/0` avec leurs origins et leurs diffs restent strictement bornés aux zones réservées ;
- C1 V3, C1-1, Mail, les autres thèmes, l'intégration et le live restent inchangés.

## Verdict des trois blocages du premier RC10

### 1. Émission de handoff idempotente

`PASS`.

Le bridge conserve `resultId` et `acceptedAt` dans l'unique diagnostic local existant, dérive une clé stable par résultat et révision, puis reste désactivé après succès. Le backend valide la clé et le consentement daté, hache la clé, et la migration `002_issue_idempotency.sql` impose une unicité partielle sur `(customer_hash, issue_idempotency_digest)`.

Le retry identique renvoie le même `handoffId`, `issuedAt`, `expiresAt` et digest sans seconde ligne. La réutilisation de la même clé avec un diagnostic différent échoue avec `IDEMPOTENCY_KEY_REUSED`. La migration 001 vers 002 et le comportement endpoint sont couverts par les tests repassés par le master.

### 2. Maintenance de rétention continue

`PASS`.

Le prune s'exécute au démarrage puis sur un intervalle borné, avec valeur par défaut 300000 ms et minimum 10000 ms. Le timer est `unref`, une exécution en cours bloque le chevauchement, les erreurs utilisent uniquement le code fixe `MAINTENANCE_PRUNE_FAILED`, et les métriques exposent les exécutions, erreurs et dernier passage. L'arrêt SIGINT ou SIGTERM stoppe le timer, attend l'exécution en cours, puis ferme SQLite.

Les tests prouvent le prune sans redémarrage, l'absence de chevauchement, `unref`, le drain, les métriques et la rédaction des erreurs.

### 3. Conteneur non root et SQLite persistante

`PASS PRIVE`.

Le Dockerfile crée `/app/.data` pour `node:node` en mode `0700`, copie le serveur avec `--chown=node:node`, déclare le volume puis exécute sous `USER node`. La preuve de la session C1 établit le build du code final sur `node:24-bookworm-slim`, UID et GID 1000, création SQLite par `node`, `/health`, `/ready`, deux migrations, maintenance active, redémarrage sur le même volume et récupération du même handoff idempotent.

Le master n'a pas redémarré Colima pour dupliquer cette preuve après son nettoyage. Il a audité le Dockerfile final, les tests, la documentation de preuve, constaté `colima is not running` et l'absence de listener C1, app dev ou tunnel. Aucun registre ni hébergement externe n'a été contacté.

## Contrôles master du 2026-08-23

- `npm run check` : PASS, 33 tests sur 33 ;
- `shopify app build` : PASS ;
- bundle : `65019 / 65536`, marge 517 octets ;
- `npm audit --omit=dev` : 0 vulnérabilité ;
- `node --check assets/milaura-c1-release-bridge.js` : PASS ;
- `shopify theme check` : 292 fichiers, 16 avertissements hérités, 0 erreur ;
- pullback master limité à `assets/milaura-c1-release-bridge.js` : fichier distant strictement identique, SHA-256 `37b4bb7faace2b061b7a59179aa9e2eb7e79402641437c9d5d63ace9bf6d3c64` ;
- `shopify theme list` : thème `205027279193` toujours `unpublished` ;
- aucun listener sur 3017 ou 3457, aucun `shopify app dev`, `cloudflared`, backend C1 ou Colima actif ;
- aucun compte, commande, scope `write_orders`, Admin, email, app deploy ou release, C1-2, intégration, publication ou live.

Les avertissements npm sur `auto-install-peers` et `shamefully-hoist` sont des avertissements de compatibilité future de configuration npm, sans échec du lot.

## Matrice après second réaudit

| Gate | Verdict master |
| --- | --- |
| RC0 | PASS |
| RC1 | PASS |
| RC2 | PASS TECHNIQUE |
| RC3 | PASS PRIVE |
| RC4 | PARTIEL, runtime authentifié thème vers compte non exécuté |
| RC5 | PARTIEL, stock physique, coût, marge et couverture catalogue complète ouverts |
| RC6 | FERME AVEC NO-GO CONDITIONNEL Mail ; shell natif encore anglais |
| RC7 | OUVERT, comptes et commandes non autorisés dans le cadre courant |
| RC8 | PARTIEL, runtime Shopify complet, états avec commandes, dimensions et clavier ouverts |
| RC9 | PASS |
| RC10 | SECOND RÉAUDIT TECHNIQUE PASS SUR LES TROIS CORRECTIFS ; gate globale ouverte, aucun verdict Patrice demandé |

## Décision

Les trois P1 du checkpoint `2026-08-23-1548-c1-rc-rc10-audit-no-go.md` sont fermés. Le Release Candidate global n'est pas déclaré PASS : RC4, RC5, RC6, RC7 et RC8 conservent leurs limites et blockers. Aucun GO Patrice ne doit être demandé sur cette seule correction technique.

La session C1 peut poursuivre uniquement après une nouvelle décision master sur les gates restantes. Aucun élargissement implicite vers `write_orders`, comptes ou commandes, Admin, email, app deploy ou release, C1-2, intégration, publication ou live.
