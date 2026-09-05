# Mon Ecrin : recette privee en cours, connexion invite en attente

Date : 2026-09-05 09:52 CEST.
Proprietaire : Codex, tache 01a05660-7e67-7473-8945-ee872773aa2d.
GO : tester le parcours complet prive avec le vrai backend. Aucun live.

## Verifie

- Theme prive 205027279193, store 107347837273, toujours unpublished.
- Cinq fichiers du quiz charges et pullback 5/5 identique :
  assets/milaura-account-save-intent.js, assets/milaura-c1-release-bridge.js,
  snippets/milaura-c1-release-bridge.liquid, snippets/milaura-quiz-account-save.liquid,
  sections/milaura-quiz.liquid. Pas de push global ni suppression.
- Backend prive sauvegarde puis migre, base saine, exactement trois migrations.
- Correction du filtre de migrations pour ignorer les fichiers AppleDouble macOS.
- 78 tests app/backend et 19 tests theme PASS, total 97.
- Quiz connecte reel, transfert App Proxy signe, ecriture Shopify et acquittement PASS.
- Conflit ancien/nouveau diagnostic conserve apres reload, resolution explicite PASS.
- Resultat du 2026-09-05 retrouve dans Chrome et un navigateur integre distinct.
- Panne reelle du seul backend prive : mode degrade lisible et reprise sans perte PASS.
- Commandes/profil natifs accessibles, compte synthetique sans commande et non abonne marketing.
- Vue personnalisee sans overflow a 360/390/430/1440.
- Quiz invite Protection termine, message connexion/creation par email visible,
  redirection Shopify et demande de code reel executees, case marketing non cochee.

## Etape en attente

Le navigateur integre attend la saisie humaine du code Shopify. Demande envoyee
a Patrice par la question de cette tache ; ne pas lire Mail ni des OTP sans
autorisation explicite. Le resultat temporaire du quiz expire apres 20 minutes.
S'il expire avant la reprise, refaire le quiz invite et suivre le vrai parcours.

Une fois connecte : verifier retour au quiz, reprise automatique, resultat Protection
dans le compte et conservation apres reload, puis executer retrait du consentement
et purge compte/theme. Ne pas intercaler une purge avant la fin de ce scenario.

Creation d'un nouveau compte, commandes avec suivi et panne injectee entre chaque
ecriture ne sont pas certifiees par cette recette. Les comptes de test ne contiennent
aucune commande. Ne pas elargir l'allowlist ni creer de commande par deduction.

Le rendu personnalise confirme des titres H1 multiples. La hierarchie des sections
et le branding natif restent a finir avant validation visuelle finale.

## Etat conserve pendant la pause

- App Dev actif, configuration ui-preview, boutique de test uniquement.
- Backend prive running/healthy, restart no, image 2026-09-05-qa2.
- Arret et nettoyage a effectuer apres la recette ; ils ne sont pas declares faits.
- Aucune release, integration ou modification de production.
- Theme live 190430282075 et backend production non modifies.
- Les modifications concurrentes du checkout d'integration sont preservees.

Compte rendu detaille :
/Users/paesano/Documents/_worktrees/agentic-ops-mon-ecrin-finish-20260905/docs/milaura/shopify-apps/customer-accounts-release-candidate/docs/2026-09-05-recette-backend-reel.md

Captures personnalisees 390/1440 dans :
/Users/paesano/.codex/visualizations/2026/08/31/01a05660-7e67-7473-8945-ee872773aa2d/.
