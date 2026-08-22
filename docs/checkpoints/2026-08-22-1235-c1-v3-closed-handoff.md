# C1 V3 fermee et gates C1-1

Date : 2026-08-22 12:35 CEST

Statut : C1 V3 fermee, G1 a G5 passes, lot gele en lecture seule

## Decision

Patrice a valide la preview Shopify privee par le GO exact :

`GO VISUEL C1 V3 - PREVIEW SHOPIFY PRIVÉE VALIDÉE`

Cette validation porte uniquement sur la preview privee au commit `d8d036ff7725c93168d24b9270da54de657ad6af`. Elle ne vaut aucun GO C1-1, persistance, Customer Account API reelle, Admin, bascule de comptes, theme, email ou live.

La session C1 peut fermer. V3 reste une preuve UX et runtime sur fixtures, pas un artefact de production.

## Verite Git et runtime

- integration theme avant ce handoff : `codex/milaura-integration` a `7cd851eb328b6db35046fdba63238a0c8953cb39`, propre et alignee avec origin ;
- V3 privee : branche `codex/milaura-c1-v3-shopify-private-preview-20260822`, base `cecb7769644695dbab2329e3ae55d1e5f5ec805f`, HEAD `d8d036ff7725c93168d24b9270da54de657ad6af`, propre et aligne avec origin ;
- worktree V3 : `/Users/paesano/Documents/_worktrees/agentic-ops-milaura-c1-v3-shopify-private-preview-20260822` ;
- boutique privee de developpement : `milaura-c1-preview`, store ID `107347837273` ;
- aucun listener app dev sur `64112` ou `3457` ;
- aucun `shopify app deploy`, release, Admin, theme ou live ;
- live theme `190430282075` non modifie ;
- developpement theme `199421952347` non utilise par C1.

Le depot `/Users/paesano/Documents/Agentic-Ops` sur `main` contient de nombreux changements Stella et autres travaux concurrents. Il n a pas ete modifie, nettoye, indexe ou committe par cette cloture.

## Resultat C1 V3

- G1 : checks metier et build produits par la session C1, scopes vides, aucun acces API, reseau ou stockage ;
- G2 : medias produit exacts pour Serenite, Apaisement, Protection, Amour et Chance avec provenance et SHA-256 ;
- G3 : registre de parite V2.1 vers composants Customer Accounts et ecarts natifs Shopify documentes ;
- G4 : six etats a 360, 390, 430 et 1440 px, cinq profils desktop et mobile, produit phare limite a `diagnostic-no-orders`, zero overflow et interactions simulees validees ;
- G5 : GO visuel Patrice recu le 2026-08-22 pour la preview privee seulement.

Preuves principales sur la branche V3 :

- `docs/milaura/shopify-admin-canonical/c1-v3-shopify-private-preview/2026-08-22-c1-v3-evidence.md` ;
- `docs/milaura/shopify-admin-canonical/c1-v3-shopify-private-preview/2026-08-22-c1-v3-parity-register.md` ;
- `docs/milaura/shopify-admin-canonical/c1-v3-shopify-private-preview/2026-08-22-c1-v3-data-consent-test-rollback.md` ;
- `docs/milaura/shopify-admin-canonical/c1-v3-shopify-private-preview/evidence/desktop-diagnostic-no-orders-apaisement-full.png` ;
- `docs/milaura/shopify-admin-canonical/c1-v3-shopify-private-preview/evidence/mobile-diagnostic-no-orders-apaisement-full.png`.

## Ce qui manque avant une future release C1-1

C1-1 n est pas ouvert. Le plan devra fermer les onze gates suivantes avant une release :

1. remplacer les six fixtures et les selecteurs QA par les vraies donnees du compte ;
2. lire de facon reelle et bornee commandes, adresses et profil via la surface Customer Accounts retenue ;
3. choisir une source canonique durable du diagnostic, un schema versionne et un consentement explicite de personnalisation ;
4. definir un handoff signe et idempotent depuis `MilauraPreferenceStorage` vers le compte, sans secret navigateur ;
5. assurer la synchronisation inter-appareils, la resolution explicite des conflits et un mode hors ligne date ;
6. garantir la purge locale, panier et serveur avec recu, reprise partielle et prevention de resurrection ;
7. fermer le registre produit ou variant vers pierre pour historique, retours, annulations, remboursements, egalites, cadeaux et produits sans pierre ;
8. brancher les vrais liens produit et collection, retirer toutes les actions simulees et traiter les etats d erreur production ;
9. fermer securite, retention, audit, migration, observabilite, tests de parite et rollback ;
10. valider sur comptes de test, coordonner les emails de compte avec Mail, traiter le francais du shell natif et obtenir un GO Admin distinct avant toute bascule ;
11. obtenir un GO live explicite seulement apres toutes les gates precedentes.

## Dependances et non-dependances

Ne bloquent pas le demarrage d un futur plan C1-1 :

- fin du SEO ;
- Pinterest ;
- Rentree Sodalite ;
- Ruban V3 ;
- Atelier ;
- S1B et S1C, qui sont downstream.

Dependances de release :

- Mail coordonne les emails de compte avant un switch de type de comptes ;
- inventaire et catalogue fiables ferment la couverture du mapping commande-vers-pierre et les destinations produit ;
- fidelite reelle non requise : le bloc `A venir` reste honnete.

## Interdictions apres cloture

- ne pas rouvrir ou modifier V3 ;
- ne pas creer de branche, worktree ou reservation C1-1 ;
- ne pas lancer `shopify app dev` ;
- ne pas ajouter de scope ou appeler une API cliente reelle ;
- ne pas ecrire de persistance ;
- ne pas toucher a Shopify Admin, aux themes, aux emails ou au live ;
- attendre un nouveau GO explicite de Patrice et un cadrage master sans chevauchement.

## Reprise minimale

Lire `AGENTS.md`, `docs/project-state.md`, `docs/workstreams.md`, `docs/codex-handoff.md` et ce checkpoint. Verifier ensuite Git, les worktrees, les proprietaires et les themes. Ne rien ecrire pour C1-1 avant un nouveau GO explicite de Patrice.
