# Handoff Codex MilAura, C1-1 prive ferme et Rentree Sodalite en pause

Date : 2026-08-23 10:46 CEST

## Mission de reprise

Reprendre le pilotage master MilAura en lecture seule. La session master reste seule proprietaire de l integration et de tout live. C1 V3 est fermee et gelee. C1-1 est ferme et gele au commit prive `cf2877ba` avec G0 a G11 PASS, sans aucun droit de release ou live. Rentree Sodalite est en pause a `70 %` jusqu au 2026-08-31, sans GO visuel final, integration ou live.

Le cap commercial reste un site capable d atteindre 100 000 EUR de chiffre d affaires. La charte et la DA MilAura sont executables. Tiffany & Co. et Van Cleef & Arpels donnent le niveau d exigence visuelle, sans copie.

## Lecture obligatoire

1. `/Users/paesano/Documents/MilAura website/dawn-X-milaura/AGENTS.md`
2. `docs/project-state.md`
3. `docs/workstreams.md`
4. `docs/checkpoints/2026-08-23-1046-c1-1-g11-closed.md`
5. `docs/checkpoints/2026-08-22-1645-rentree-sodalite-pause-70.md`
6. `docs/checkpoints/2026-08-22-1302-c1-1-private-reservation.md`
7. `docs/checkpoints/2026-08-22-1235-c1-v3-closed-handoff.md`
8. `docs/checkpoints/2026-08-21-0859-master-strategic-handoff.md`
9. `docs/checkpoints/2026-08-20-2013-all-active-customer-email-tests.md`
10. `docs/checkpoints/2026-08-20-0809-diagnostic-consent-live.md`
11. `docs/checkpoints/2026-08-17-0910-ruban-v3-handoff.md`
12. `docs/checkpoints/2026-08-16-0751-master-midpoint-handoff.md`
13. `docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md`

## Verite Git au handoff

- integration theme avant le commit de ce handoff : `codex/milaura-integration` a `8721b7cc78cf3eb2a377255cf4e934daea98fb82`, propre et alignee avec origin ;
- `origin/main` reste un miroir Shopify incomplet, interdit de merge aveugle ;
- live : `190430282075` ;
- developpement general : `199421952347` ;
- C1 V3 privee : branche `codex/milaura-c1-v3-shopify-private-preview-20260822`, commit `d8d036ff7725c93168d24b9270da54de657ad6af`, propre et aligne ;
- C1-1 prive : branche `codex/milaura-c1-1-private-implementation-20260822`, commit `cf2877ba4ee5faac143a4273c486fe39c96106a8`, worktree propre et aligne ;
- boutique C1 privee : `milaura-c1-preview`, store ID `107347837273` ;
- aucun listener app dev sur `64112` ou `3457` ;
- Rentree Sodalite : branche et distant alignes a `47cc3e62`, worktree propre, theme prive non publie `200259043675`, pause a `70 %` jusqu au 2026-08-31 ;
- Ruban V3 : `3aa0b66d`, parque ;
- Atelier : `2befe429`, theme prive `200007713115`, parque ;
- aucune mutation Shopify, Admin ou live pendant cette cloture.

`/Users/paesano/Documents/Agentic-Ops` sur `main` est tres dirty avec Stella et d autres travaux concurrents. Ne pas y ecrire, nettoyer, indexer ou committer dans le cadre de C1.

## C1 V3 fermee

Patrice a donne le GO exact :

`GO VISUEL C1 V3 - PREVIEW SHOPIFY PRIVÉE VALIDÉE`

Les gates G1 a G4 techniques et G5 visuelle sont fermees au commit `d8d036ff7725c93168d24b9270da54de657ad6af`. La preview couvre six etats, cinq profils, les photographies produit exactes et les viewports 360, 390, 430 et 1440 px.

Cette validation porte uniquement sur la preview privee. V3 utilise des fixtures fictives et des actions simulees. Elle est une preuve UX et runtime, pas un artefact live. Le lot reste gele en lecture seule.

Aucun droit C1-1, persistance, Customer Account API reelle, Admin, bascule de comptes, theme, email ou live n est deduit.

## C1-1 prive ferme et gele

Patrice a donne le 2026-08-22 le GO exact :

`GO C1-1 - ARCHITECTURE ET IMPLÉMENTATION PRIVÉE DES VRAIES DONNÉES, SANS BASCULE LIVE`

Le lot distinct part de `d8d036ff` dans le depot prive `Onora-studio/onora-ops`. Sa branche est `codex/milaura-c1-1-private-implementation-20260822`, son worktree `/Users/paesano/Documents/_worktrees/agentic-ops-milaura-c1-1-private-implementation-20260822`, et ses deux seules zones d ecriture sont `docs/milaura/shopify-apps/customer-accounts-c1-1-private/**` et `docs/milaura/shopify-admin-canonical/c1-1-private/**`. Son HEAD pousse, propre et aligne est `cf2877ba4ee5faac143a4273c486fe39c96106a8`.

Le seul environnement est `milaura-c1-preview`, store ID `107347837273`, avec six comptes synthetiques tags et allowlistes. Les scopes permis sont `write_customers,customer_read_customers,customer_write_customers,customer_read_orders` ; `write_customers` sert uniquement aux definitions declaratives et aucun appel GraphQL Admin depuis le code n est permis. `api_access` et `network_access` sont permis pour les destinations publiques et le backend prive. Les donnees clients de production, autres scopes Admin, theme, emails, inventaire reel, bascule de comptes et live sont interdits.

G0 a G10 sont passes sur donnees synthetiques. Le master a ensuite audite le lot, exige puis verifie deux vagues de corrections sur la durabilite des conflits, la reprise de purge et la fenetre entre preparation et finalisation. Contre-verification finale : 28 tests sur 28, build Shopify PASS, bundle `65416/65536`, zero vulnerabilite, aucun secret reel, listener ou tunnel. La source canonique privee est un groupe de cinq metafields client app-owned ; le protocole signe, la sync, les conflits, la purge serveur, le mapping et les liens publics sont implementes et testes dans le cadre prive.

Patrice a donne le 2026-08-23 le GO exact `GO VISUEL ET FONCTIONNEL C1-1 - PREVIEW PRIVÉE VALIDÉE, SANS RELEASE NI LIVE`. G11 est ferme sur `cf2877ba`. Le lot reste gele en lecture seule. Sans fichier theme, le vrai bridge et la purge de `MilauraPreferenceStorage` ou du panier ne sont pas fermes ; catalogue, Mail, backend production, C1-2, release, deploy, Admin, bascule de comptes, theme, email et live restent interdits sans nouveaux GO. Cadre et audit : `docs/checkpoints/2026-08-22-1302-c1-1-private-reservation.md` et `docs/checkpoints/2026-08-23-1046-c1-1-g11-closed.md`.

## Gates canoniques avant une release C1-1

C1-1 prive est ferme avec G0 a G11 PASS. Une future release doit encore :

1. remplacer fixtures et selecteurs QA par les vraies donnees du compte ;
2. lire reellement et de facon bornee commandes, adresses et profil ;
3. choisir la source canonique durable du diagnostic, son schema versionne et le consentement explicite de personnalisation ;
4. definir le handoff signe et idempotent depuis `MilauraPreferenceStorage`, sans secret navigateur ;
5. assurer synchronisation inter-appareils, conflits explicites et mode hors ligne date ;
6. garantir purge locale, panier et serveur avec recu, reprise partielle et prevention de resurrection ;
7. fermer le mapping produit ou variant vers pierre pour historique, retours, annulations, remboursements, egalites, cadeaux et produits sans pierre ;
8. brancher les vraies destinations, retirer les actions simulees et couvrir les erreurs production ;
9. fermer securite, retention, audit, migration, observabilite, parite, tests et rollback ;
10. valider sur comptes de test, coordonner Mail, traiter le francais natif et obtenir un GO Admin avant toute bascule ;
11. obtenir un GO live explicite apres toutes les gates precedentes.

La fin du SEO, Pinterest, Rentree Sodalite, Ruban V3 et Atelier ne bloque pas l implementation privee C1-1. Pour une release, Mail coordonne les emails de compte, l inventaire ou catalogue fiable ferme le mapping et les destinations produit, et un micro-lot theme distinct ferme le vrai bridge et la purge locale. La fidelite reelle ne bloque pas : `A venir` reste honnete. S1B et S1C sont downstream.

## Rentree Sodalite en pause a 70 %

Patrice a mis le lot en pause le 2026-08-22 faute de temps et parce que la section complete ne lui convient pas encore. Reprise demandee le 2026-08-31. Ce `70 %` est un point de travail, pas un GO visuel.

La photographie fixe est retenue et remplace la piste video. La home privee affiche l image en pleine largeur sans voile, texte superpose, video ou bouton pause, puis le contenu commercial dans un bandeau Nacre. Ne pas relancer l animation sans demande explicite.

La branche `codex/milaura-rentree-sodalite-20260821` est propre et alignee a `47cc3e627277f22b115ded88baa7762e7b989967`. Le theme prive `200259043675` sert la version fixe. QA navigateur passee a 360, 390, 430 et 1440 px, sans overflow ni erreur console. Le push cible prive a reussi. Le pullback final reste bloque par l erreur locale Shopify CLI `Maximum call stack size exceeded` ; ne pas supprimer le dossier de preferences suggere par la CLI.

La landing reste hybride avec produits d aout temporaires. La liste Sodalite finale, le stock physique et Shopify, les couts rendus, les marges, les statuts publics, les dates, la vraie collection, le feed, les redirects, l integration, le live et les Ads restent ouverts et separes. Reprise exacte : `docs/checkpoints/2026-08-22-1645-rentree-sodalite-pause-70.md`.

## Autres lots

- E1 a E3 sont fermes. E4 a E6 appartiennent a la session Mail. Validation technique, validation creative, GO Admin et GO live restent distincts.
- Rentree Sodalite est en pause a `70 %` au commit `47cc3e62` jusqu au 2026-08-31. Photo fixe retenue, section complete sans GO visuel final, landing hybride et catalogue Sodalite a fermer. Aucun live, redirect, feed ou Ads.
- Pinterest P0 est fige hors theme. Tracking `INCONCLUSIF`, huit avertissements GPC et aucune Ads avant inventaire, feed, consentement, tracking et economie.
- Ruban V3 reste parque jusqu a un inventaire, des couts, marges, disponibilites et un catalogue fiables.
- Atelier reste parque sous son gate physique propre. La reception Sodalite ne ferme pas ce gate.

## Sujets clos

Ne pas rouvrir sans regression ou nouvelle decision explicite : LFG, longueur PDP, formulations validees du quiz, preuve sociale, cookies et Ruban V2.

Ne jamais fusionner `origin/main` aveuglement, pousser un theme complet depuis un ancien worktree, confondre les consentements, annoncer une persistance inter-appareils sans preuve ou lancer Ads avant les gates business et mesure.

## Message de reprise copiable

```text
Reprends le pilotage master MilAura au 2026-08-23 depuis /Users/paesano/Documents/MilAura website/dawn-X-milaura. Commence en lecture seule.

Lis integralement AGENTS.md, docs/project-state.md, docs/workstreams.md, docs/codex-handoff.md, docs/checkpoints/2026-08-23-1046-c1-1-g11-closed.md, docs/checkpoints/2026-08-22-1302-c1-1-private-reservation.md, docs/checkpoints/2026-08-22-1235-c1-v3-closed-handoff.md, docs/checkpoints/2026-08-21-0859-master-strategic-handoff.md, docs/checkpoints/2026-08-20-2013-all-active-customer-email-tests.md, docs/checkpoints/2026-08-20-0809-diagnostic-consent-live.md, docs/checkpoints/2026-08-17-0910-ruban-v3-handoff.md, docs/checkpoints/2026-08-16-0751-master-midpoint-handoff.md et docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md.

Verifie Git, origin, tous les worktrees, les proprietaires et les taches actives. Base connue avant le commit du handoff : codex/milaura-integration propre et aligne a 8721b7cc78cf3eb2a377255cf4e934daea98fb82. origin/main reste un miroir Shopify incomplet. Live 190430282075, developpement 199421952347. Une seule session master possede l integration et le live.

C1 V3 est fermee au commit prive d8d036ff7725c93168d24b9270da54de657ad6af. G1 a G4 techniques et G5 visuelle sont passes. V3 reste une preuve UX/runtime sur six fixtures et cinq profils, pas un artefact live. Aucun listener app dev ne reste. Ne rouvre pas V3.

C1-1 prive est ferme et gele a cf2877ba4ee5faac143a4273c486fe39c96106a8 sur codex/milaura-c1-1-private-implementation-20260822. G0 a G11 sont passes ; Patrice a valide la preview privee, sans release ni live. Ne rouvre pas C1-1 et ne lance pas C1-2 sans nouveau GO et nouvelle reservation. Le vrai bridge theme, la purge MilauraPreferenceStorage ou panier, Mail, catalogue, backend production, release, deploy, GO Admin, bascule de comptes et live restent fermes. Fidelite reelle non bloquante, bloc A venir conserve. S1B et S1C sont downstream.

Agentic-Ops main est tres dirty sur Stella et d autres travaux concurrents. Ne pas y ecrire ni nettoyer.

Rentree Sodalite est en pause a 70 % jusqu au 2026-08-31. Branche et distant alignes a 47cc3e62, worktree propre, theme prive 200259043675. La photo fixe est retenue mais la section complete n a aucun GO visuel final. Lis docs/checkpoints/2026-08-22-1645-rentree-sodalite-pause-70.md avant toute reprise. Pinterest reste hors theme et sans Ads. Ruban V3 reste parque a 3aa0b66d. Atelier reste parque a 2befe429 sur 200007713115.

Commence par rendre un point factuel Git, worktrees, proprietaires, conflits, integrations et gates. Aucune mutation avant ce point.
```

## Fichiers canoniques

- `docs/checkpoints/2026-08-23-1046-c1-1-g11-closed.md` ;
- `docs/checkpoints/2026-08-22-1302-c1-1-private-reservation.md` ;
- `docs/checkpoints/2026-08-22-1235-c1-v3-closed-handoff.md` ;
- `docs/checkpoints/2026-08-22-1645-rentree-sodalite-pause-70.md` ;
- `docs/project-state.md` ;
- `docs/codex-handoff.md` ;
- `docs/workstreams.md`.
