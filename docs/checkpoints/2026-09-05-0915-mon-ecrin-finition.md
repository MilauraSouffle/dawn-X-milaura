# Mon Ecrin : parcours de sauvegarde et cinq pierres sur une ligne

Date : 2026-09-05 09:15 CEST.
Proprietaire : Codex, tache 01a05660-7e67-7473-8945-ee872773aa2d.
Autorisation : GO developpement du plan apres audit, avec correction du carrousel
mobile et desktop demandee explicitement. Aucune autorisation live inferee.

## Etat du lot

Developpe et teste localement, carrousel verifie dans Shopify natif.
Recette complete quiz/connexion/compte encore a terminer. Le plan complet,
notamment Mes pieces et vrais favoris choisis, n'est pas declare termine.

Theme :
- branche codex/milaura-mon-ecrin-finish-20260905 ;
- worktree /Users/paesano/Documents/MilAura website/_worktrees/mon-ecrin-finish-20260905 ;
- base 2e3b74b20b0ca28cffcbff4c898c140a9220f2a5.

Application :
- worktree /Users/paesano/Documents/_worktrees/agentic-ops-mon-ecrin-finish-20260905 ;
- meme nom de branche ; commit fonctionnel 50572c8 ;
- migration pnpm dediee be62ce6, branche codex/milaura-mon-ecrin-pnpm-20260905 ;
- dossier docs/milaura/shopify-apps/customer-accounts-release-candidate ;
- compte rendu complet docs/2026-09-05-finition-et-recette.md dans ce dossier.

## Fichiers theme

- assets/milaura-account-save-intent.js : demande explicite temporaire,
  resultat minimal, 20 minutes, pas de modification du consentement Preferences.
- assets/milaura-c1-release-bridge.js : connexion puis reprise, App Proxy signe,
  envoi idempotent, erreurs recuperables, delai maximal, purge prioritaire.
- snippets/milaura-c1-release-bridge.liquid : identite customer et chargement du module.
- snippets/milaura-quiz-account-save.liquid : conservation invite/connecte,
  explication et choix de continuer sans enregistrer.
- sections/milaura-quiz.liquid : invitation avant la selection produit,
  restauration au retour de connexion, un seul composant d'invitation.
- sections/milaura-footer.liquid : Mon compte et route canonique.
- tests/mon-ecrin-save.test.mjs : 19 tests, dont cinq profils invite/connecte.

## Verification

- Theme Check : 0 erreur, 16 avertissements historiques hors fichiers modifies.
- JS syntax et git diff --check : PASS.
- Application/backend : 77 tests PASS.
- Total de ce lot : 96 tests PASS.
- Build local Shopify : PASS ; bundle 62 229 / 65 536 octets, marge 3 307.
- Carrousel sur le store de test 107347837273 : une ligne a 360/390/430/1440.
  Hauteur 193 px aux trois largeurs mobiles, 252 px a 1440. Aucun overflow
  horizontal de page. A 1440, les cinq images tiennent sans defilement.
- Defilement horizontal et navigation clavier jusqu'a la cinquieme pierre
  verifies ; sa modale de conseils s'ouvre et se ferme.
- La preview utilise le mode degrade reel car son backend_url est vide.
  Aucun resultat simule n'a ete injecte dans la capture.
- Configuration UI-only generee depuis le TOML canonique, ignoree par Git.
- App Dev arretee, tunnel arrete, dev preview nettoyee ; version active
  restauree sur le seul store de test. Largeur navigateur retablie.

Captures dans :
/Users/paesano/.codex/visualizations/2026/08/31/01a05660-7e67-7473-8945-ee872773aa2d/

- 2026-09-05-mon-ecrin-mobile-390.png
- 2026-09-05-mon-ecrin-mobile-carousel-end.png
- 2026-09-05-mon-ecrin-desktop-1440.png

## Avant une mise en ligne

1. Raccorder le backend de recette a la nouvelle version et tester le theme
   modifie jusqu'a l'ecriture Shopify, reload et second navigateur, sur comptes
   synthetiques seulement. Les tests locaux ne prouvent pas encore ce parcours reel.
2. Recetter les etats personnalises, conflit, purge et commandes de test.
   Terminer la hierarchie de titres native, le contraste et le branding compte.
3. Presenter le lot verifie pour une seule decision live. Ordre futur :
   sauvegarde SQLite, backend/migration 003, app, fichiers theme cibles.
   Ne pas livrer le nouveau client devant l'ancien backend.

Mes pieces, entretien par produit et favoris choisis restent le lot suivant.
Le bloc de fidelite sans fonctionnalite a ete retire ; aucune regle commerciale
ou promesse de service n'a ete inventee.

## Frontieres

Aucune modification de produit, prix, stock, commande cliente ou email.
Aucun push theme, deploy backend, app release, integration ou live.
Theme live 190430282075 et release 7 non modifies.
La suppression de l'entree menu avait deja ete traitee a sa source Shopify.

Les branches de travail sont sauvegardees sans melanger les modifications
preexistantes du checkout d'integration. Sa documentation et ses workflows
restent dirty et appartiennent aux sessions concernees.
Commit theme avec [skip ci] : ne pas declencher l'ancien workflow Lighthouse
avec secrets et actions non epinglees. Les controles locaux ci-dessus ont ete executes.
