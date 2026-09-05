# Mon Ecrin : recette privee terminee avec reserves

Date : 2026-09-05 09:52 CEST. Mise a jour finale : 2026-09-05 10:10 CEST.
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

## Suite de la recette apres le code saisi par Patrice

- Connexion invite reelle, reprise automatique du resultat Protection, choix
  explicite face au diagnostic existant et persistance inter-navigateurs PASS.
- Recommandation reelle Obsidienne noire, prix et lien produit disponibles.
- Retrait depuis le navigateur integre : diagnostic du compte supprime, message
  explicite et compte generique avec commandes/profil accessibles.
- Retour boutique : purge locale acquittee, backend PURGE_FINALIZED 200.
- Chrome et navigateur integre retrouvent le compte sans diagnostic. Un nouveau
  quiz suivi de Continuer sans enregistrer ne cree aucun handoff.
- 97 tests relances PASS et controle statique PASS.

## Reserves avant live

ECART REEL : apres la purge acquittee par le navigateur integre, Chrome conserve
encore l'ancien lien Revoir ma derniere revelation du quiz. Le compte reste vide,
mais la suppression locale ne se propage pas aux navigateurs suivants.
Cause : pendingThemePurge ne renvoie que awaiting_theme, pas le retrait deja
finalise. Correction a developper avec marqueur de retrait versionne, comparaison
du consentement et regression multi-navigateurs, y compris retour OTP ancien.
Ne pas effacer un nouveau resultat explicitement reconserve apres le retrait.

Creation d'un nouveau compte, commandes avec suivi et panne injectee entre chaque
ecriture ne sont pas certifiees par cette recette. Les comptes de test ne contiennent
aucune commande. Ne pas elargir l'allowlist ni creer de commande par deduction.

Le rendu personnalise confirme des titres H1 multiples. La hierarchie des sections
et le branding natif restent a finir avant validation visuelle finale.

## Etat final

- App Dev arrete et dev preview nettoyee sur la seule boutique de test.
- Flag du theme prive false, confirme par pullback des reglages.
- URL backend videe/enregistree dans la configuration du dev store uniquement.
- Backend prive exited, image 2026-09-05-qa2, volume et sauvegardes conserves.
- Base privee saine : trois migrations, zero handoff, cinq purges historiques
  finalisees. Ne pas assimiler cet etat a l'effacement de tous les navigateurs.
- Aucune release, integration ou modification de production.
- Theme live 190430282075 non cible ; backend production toujours running avec
  la meme image et date de demarrage du 2026-08-29.
- Les modifications concurrentes du checkout d'integration sont preservees.

Compte rendu detaille :
/Users/paesano/Documents/_worktrees/agentic-ops-mon-ecrin-finish-20260905/docs/milaura/shopify-apps/customer-accounts-release-candidate/docs/2026-09-05-recette-backend-reel.md

Captures personnalisees 390/1440 dans :
/Users/paesano/.codex/visualizations/2026/08/31/01a05660-7e67-7473-8945-ee872773aa2d/.
Capture apres retrait : 2026-09-05-mon-ecrin-qa-apres-retrait-desktop.png.

Prochaine etape : correctif de purge multi-navigateurs et hierarchie des titres,
puis recette ciblee. Ne pas demander un GO live tant que ces reserves restent ouvertes.
