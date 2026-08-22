# Handoff Codex MilAura, C1 V3 fermee

Date : 2026-08-22 12:35 CEST

## Mission de reprise

Reprendre le pilotage master MilAura en lecture seule. La session master reste seule proprietaire de l integration et de tout live. C1 V3 est fermee, validee en preview Shopify privee et gelee. C1-1 n est pas ouvert.

Le cap commercial reste un site capable d atteindre 100 000 EUR de chiffre d affaires. La charte et la DA MilAura sont executables. Tiffany & Co. et Van Cleef & Arpels donnent le niveau d exigence visuelle, sans copie.

## Lecture obligatoire

1. `/Users/paesano/Documents/MilAura website/dawn-X-milaura/AGENTS.md`
2. `docs/project-state.md`
3. `docs/workstreams.md`
4. `docs/checkpoints/2026-08-22-1235-c1-v3-closed-handoff.md`
5. `docs/checkpoints/2026-08-21-0859-master-strategic-handoff.md`
6. `docs/checkpoints/2026-08-20-2013-all-active-customer-email-tests.md`
7. `docs/checkpoints/2026-08-20-0809-diagnostic-consent-live.md`
8. `docs/checkpoints/2026-08-17-0910-ruban-v3-handoff.md`
9. `docs/checkpoints/2026-08-16-0751-master-midpoint-handoff.md`
10. `docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md`

## Verite Git au handoff

- integration theme avant le commit de ce handoff : `codex/milaura-integration` a `7cd851eb328b6db35046fdba63238a0c8953cb39`, propre et alignee avec origin ;
- `origin/main` reste un miroir Shopify incomplet, interdit de merge aveugle ;
- live : `190430282075` ;
- developpement general : `199421952347` ;
- C1 V3 privee : branche `codex/milaura-c1-v3-shopify-private-preview-20260822`, commit `d8d036ff7725c93168d24b9270da54de657ad6af`, propre et aligne ;
- boutique C1 privee : `milaura-c1-preview`, store ID `107347837273` ;
- aucun listener app dev sur `64112` ou `3457` ;
- Rentree Sodalite : branche `codex/milaura-rentree-sodalite-20260821`, commit `05fb43be`, theme prive non publie `200259043675`, QA technique passee, verdict visuel en attente ;
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

## Gates canoniques avant une future release C1-1

C1-1 n est pas ouvert. Aucun lot ne peut etre reserve sans nouveau GO explicite de Patrice. Une future release doit :

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

La fin du SEO, Pinterest, Rentree Sodalite, Ruban V3 et Atelier ne bloque pas le demarrage du plan C1-1. Pour une release, Mail coordonne les emails de compte et l inventaire ou catalogue fiable ferme le mapping commande-vers-pierre ainsi que les destinations produit. La fidelite reelle ne bloque pas : `A venir` reste honnete. S1B et S1C sont downstream.

## Autres lots

- E1 a E3 sont fermes. E4 a E6 appartiennent a la session Mail. Validation technique, validation creative, GO Admin et GO live restent distincts.
- Rentree Sodalite V2 est techniquement validee a `05fb43be` sur le theme prive `200259043675`. La home et les elements exacts de la landing hybride attendent des verdicts visuels separes. Les produits d aout restent temporaires. Aucun live, redirect, feed ou Ads.
- Pinterest P0 est fige hors theme. Tracking `INCONCLUSIF`, huit avertissements GPC et aucune Ads avant inventaire, feed, consentement, tracking et economie.
- Ruban V3 reste parque jusqu a un inventaire, des couts, marges, disponibilites et un catalogue fiables.
- Atelier reste parque sous son gate physique propre. La reception Sodalite ne ferme pas ce gate.

## Sujets clos

Ne pas rouvrir sans regression ou nouvelle decision explicite : LFG, longueur PDP, formulations validees du quiz, preuve sociale, cookies et Ruban V2.

Ne jamais fusionner `origin/main` aveuglement, pousser un theme complet depuis un ancien worktree, confondre les consentements, annoncer une persistance inter-appareils sans preuve ou lancer Ads avant les gates business et mesure.

## Message de reprise copiable

```text
Reprends le pilotage master MilAura au 2026-08-22 depuis /Users/paesano/Documents/MilAura website/dawn-X-milaura. Commence en lecture seule.

Lis integralement AGENTS.md, docs/project-state.md, docs/workstreams.md, docs/codex-handoff.md, docs/checkpoints/2026-08-22-1235-c1-v3-closed-handoff.md, docs/checkpoints/2026-08-21-0859-master-strategic-handoff.md, docs/checkpoints/2026-08-20-2013-all-active-customer-email-tests.md, docs/checkpoints/2026-08-20-0809-diagnostic-consent-live.md, docs/checkpoints/2026-08-17-0910-ruban-v3-handoff.md, docs/checkpoints/2026-08-16-0751-master-midpoint-handoff.md et docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md.

Verifie Git, origin, tous les worktrees, les proprietaires et les taches actives. Base connue avant le commit du handoff : codex/milaura-integration propre et aligne a 7cd851eb328b6db35046fdba63238a0c8953cb39. origin/main reste un miroir Shopify incomplet. Live 190430282075, developpement 199421952347. Une seule session master possede l integration et le live.

C1 V3 est fermee au commit prive d8d036ff7725c93168d24b9270da54de657ad6af. G1 a G4 techniques et G5 visuelle sont passes. V3 reste une preuve UX/runtime sur six fixtures et cinq profils, pas un artefact live. Aucun listener app dev ne reste. Ne rouvre pas V3.

C1-1 n est pas ouvert. Ne cree aucune reservation, branche, worktree, app dev, Admin, API, persistance ou live sans nouveau GO explicite de Patrice. Avant une future release, ferme les onze gates du checkpoint : vraies donnees, lecture bornee compte, source canonique et schema, consentement, handoff signe, synchronisation et conflits, purge avec recu, mapping commande-vers-pierre, vrais liens et erreurs, securite et observabilite, comptes de test et Mail, GO Admin puis GO live.

La fin du SEO, Pinterest, Rentree Sodalite, Ruban et Atelier ne bloque pas le demarrage d un futur plan C1-1. Mail et inventaire/catalogue fiables sont des dependances de release. Fidelite reelle non bloquante, bloc A venir conserve. S1B et S1C sont downstream.

Agentic-Ops main est tres dirty sur Stella et d autres travaux concurrents. Ne pas y ecrire ni nettoyer.

Rentree Sodalite reste gelee a 05fb43be sur le theme prive 200259043675 avec QA technique passee et verdict visuel en attente. Pinterest reste hors theme et sans Ads. Ruban V3 reste parque a 3aa0b66d. Atelier reste parque a 2befe429 sur 200007713115.

Commence par rendre un point factuel Git, worktrees, proprietaires, conflits, integrations et gates. Aucune mutation avant ce point.
```

## Fichiers de cloture

- `docs/checkpoints/2026-08-22-1235-c1-v3-closed-handoff.md` ;
- `docs/project-state.md` ;
- `docs/codex-handoff.md` ;
- `docs/workstreams.md` ;
- note Obsidian `2026-08-22-c1-v3-closed-c1-1-gates.md`.
