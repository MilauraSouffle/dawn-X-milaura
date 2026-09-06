# Mon Ecrin V8 : publication live

Date : 2026-09-06, publication et recette entre 08:18 et 08:28 CEST.
Proprietaire : Codex, tache 01a05660-7e67-7473-8945-ee872773aa2d.

## Decision executee

GO explicite de Patrice pour backend, application, six fichiers theme et logo
natif partage avec le paiement. Aucun nouvel accord intermediaire demande.
Le lot valide du 2026-09-05 est maintenant en production. Les autres chantiers,
produits, prix, stocks, commandes et preferences marketing restent intacts.
La purge multi-navigateurs demeure reportee, sans changement dans cette release.

## Versions et cibles verifiees

- Boutique dvsi0r-1q.myshopify.com, ID 97728069979, theme live 190430282075.
- Source application 2070546 sur codex/milaura-mon-ecrin-finish-20260905,
  branche distante synchronisee. Le checkout principal Agentic-Ops, ancien et
  tres modifie par d'autres travaux, n'a pas ete synchronise ni modifie :
  publication depuis le worktree proprietaire du lot valide.
- App milaura-customer-accounts-8, version 1117541007361, active relue via CLI.
  Version 7 conservee inactive, 1109042987009.
- Theme : 41960bac integre par 5368ec27 ; rapports 38f671a7 et 8c21d6a5,
  pousses sur codex/milaura-integration. Le conflit documentaire modify/delete
  du rapport de recette a ete resolu en conservant le rapport du lot uniquement.
- Backend mon-ecrin-api.milaura.fr, conteneur milaura-mon-ecrin-backend,
  image milaura-mon-ecrin-backend:2026-09-06-2070546,
  sha256:a13372f2a61432c4f4cde2b1f4f60d27b4c68673c33e2bea710961554c44e9c3.
  Demarre 2026-09-06T06:18:09.83074513Z ; healthy, UID 19991, racine readonly.
  Base systeme existante conservee, aucune installation de dependance.
- Migration 003_handoff_commit.sql appliquee a 06:18:10 UTC ; SQLite quick_check
  ok sur sauvegarde et base active ; endpoint sans jeton toujours 401.
- Profil natif actif 5643436379 : logo officiel importe et largeur 72 px.
  Gloock, Instrument Sans, alignement gauche, couleurs et paiement preserves.

## Theme : six fichiers, sans suppression

Push depuis le checkout d'integration avec --allow-live --nodelete --strict
et six --only. Pullback six sur six identique bit a bit. Configuration
settings_data.json et layout/theme.liquid verifies identiques avant/apres,
non pousses. Flag bridge deja true avant publication.

| Fichier | SHA-256 publie et relu |
| --- | --- |
| assets/milaura-account-save-intent.js | 9b1d8ac1081b1dbc9bd8e32f59fd2ace86fe73a2e0f9f73e6c70fe75ae5a60cc |
| assets/milaura-c1-release-bridge.js | cad9b3c1e2531b487f750bd6afdc086a7f7e1db0c9d014e208e622667aa0abcb |
| snippets/milaura-c1-release-bridge.liquid | fe0b6f67ad0b774855d3cc1037119f1d1d1c4b462df39ec7dd524390e743aecc |
| snippets/milaura-quiz-account-save.liquid | b38c6a011ae1bb74be45d99d9e105e1d77e206c33b8324ccbf787fca25b4f716 |
| sections/milaura-quiz.liquid | 7cbc23488233549cf069c547eebf4105e65853b2b254dec570933404dca79244 |
| sections/milaura-footer.liquid | e849ab9d3a3d41cc06b699756c458c4f7f019760c64764e2bffcd0044a7e7e7d |

Le miroir origin/main omettait les deux anciens fichiers bridge, mais le pull
direct du live prouvait leur presence et leur identite a la source initiale.
Aucune fusion aveugle du miroir. Deux nouveaux fichiers ajoutes, quatre remplaces.

## Tests et recette live

- 81 tests app/backend et 19 tests theme : 100 PASS relances ce jour.
- Controle statique et build production PASS ; bundle 61 900 / 65 536 octets,
  SHA-256 ed912f522a17ad4645b5e1a884d5b611c01aaa6448bf783149286710859833f3.
- Theme Check integration : 351 fichiers, zero erreur, 16 avertissements
  historiques ; git diff --check PASS.
- Chrome profil MilAura : compte de recette de la maison deja connecte,
  sans prenom ni adresse ni commande. Aucun champ client ou marketing modifie.
  Le titre Mon Ecrin est donc le repli attendu, pas un echec de Bonjour prenom.
- Ancien mode preview Panier detecte dans le navigateur puis quitte via Exit
  preview. Recette ensuite sur vrai CDN t/3, sans PBarNextFrame, nouveaux scripts
  save-intent/bridge presents et footer Mon compte vers la page exacte Mon Ecrin.
- Sept questions publiques, reponses synthetiques Serenite : Amethyste revelee.
  Explication de conservation et choix Continuer sans enregistrer visibles.
  Conserver mon resultat : retour compte, message de confirmation, date du
  6 septembre 2026, recommandation Shopify reelle a 32,00 EUR.
- Backend : HANDOFF_BOUND 201, HANDOFF_CLAIMED 200, HANDOFF_COMMITTED 200,
  CATALOGUE_RECOMMENDATIONS_READY 200. Un recu total, reclame et confirme.
- Rechargement : resultat toujours present, sans nouveau conflit ni alerte.
  Rituel trois etapes ouvert puis replie. Profil et commandes natifs accessibles.
- Decouverte : cinq pierres sur une ligne a 360/390/430/768/1440, sans overflow
  document ; ouverture et fermeture de la modale Aventurine conformes.
- Personnalise : aucun overflow aux cinq largeurs ; portrait unique visible
  96 x 96 a 360/390/430, 307 px a 768, 490 px a 1440. Page mobile 390 : 1274 px.
- Logo nouveau observe a 72 x 72 dans le compte, meme fichier dans le paiement
  simule du profil actif. Enregistrer desactive apres succes dans l'editeur.
- Erreurs de telemetrie native Shopify Bugsnag/XHR observees dans la console.
  Aucun echec visible du parcours ni reponse metier en erreur ; ne pas annoncer
  une console entierement sans erreur.

Le skill frontend-ui-ux-review a guide la verification mobile/desktop et les
captures. Aucun redesign supplementaire ni changement de texte ajoute ce jour.

Captures reelles :
/Users/paesano/.codex/visualizations/2026/08/31/01a05660-7e67-7473-8945-ee872773aa2d/

- 2026-09-06-mon-ecrin-live-mobile-390.png
- 2026-09-06-mon-ecrin-live-desktop-1440.png

## Sauvegardes et retour arriere

VPS : /docker/backups/milaura-mon-ecrin-backend/20260906-before-2070546/
contient Compose/env sauvegardes sans lecture de secrets, base froide data/
et theme-snapshots.tar.gz (avant/apres). Dossier 0700, fichiers sensibles 0600.
Artefacts : /docker/milaura-mon-ecrin-backend/releases/2026-09-06-2070546/
avec sources, Dockerfile, compose.yaml et deploy.sh. Source tar SHA-256 :
131b2c4fbf9c9e1aff31e3fbea3578b9f359464500cb39ec04e3d4aa83a134fe.
Copie locale : /private/tmp/mon-ecrin-live-20260906.u5lOU9/.

Image precedente conservee, tag rollback-20260906, SHA-256
135df0875cb200a6103bcc3d453b13bbbc02ed4c666d871641ed0f6b3895327d.
Revenir a l'app 7 et a cette image est compatible avec la migration additive.
Ne pas restaurer une ancienne base qui supprimerait des recus plus recents.
Le retour theme peut remettre les quatre anciens fichiers existants ; les deux
nouveaux, alors inertes, ne necessitent pas de suppression distante.

Ancien logo conserve : logo_MiL_Aura_Detoure_2, version CDN 1764831730, 120 px.
Un ancien fichier homonyme milaura-logo-officiel (version 1787398105) ne correspond
pas au master actuel ; il a ete preserve, pas selectionne ni ecrase.
Nouveau fichier : milaura-logo-officiel_8f0ff188-a5b3-47df-bfd2-789cdeef98fc,
version CDN 1788675670, chemin /s/files/1/0977/2806/9979/files/.
Master local SHA-256 : 3fd40b3b3c3088c80d0422d17a83adf7d1f189784c4d398a46348aed7a0cbc17.

## Limites et etat final

Purge multi-navigateurs reportee selon decision deja actee ; H1 internes natifs
Shopify toujours presents. Pas de recette sur iPhone physique, nouveau compte,
commande expediee ou remboursement reel. Le resultat synthetique Amethyste est
laisse dans le compte de recette de la maison ; aucune purge reelle effectuee.
Panier preexistant conserve. Pas de modification catalogue ou configuration privee.

Le navigateur est remis a sa largeur normale ; Mon Ecrin reste ouvert.
Worktrees de preuve propres conserves pour le suivi application/theme, sans
reservation du live apres cloture. Branches et sauvegardes disponibles.
Les modifications concurrentes du checkout d'integration ne sont ni embarquees
ni annulees : seuls les nouveaux paragraphes de statut de ce lot sont committes.
