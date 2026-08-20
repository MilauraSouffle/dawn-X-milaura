# Lot 1 - Diagnostic et consentement live

Date : 2026-08-20 08:09 CEST
Statut : ferme, pousse sur Git et live sur le theme `190430282075`.

## Autorisation et perimetre

Patrice a donne son GO live explicite le 2026-08-20. Le deploiement initial a ete limite aux sept fichiers du lot avec `--nodelete`, `--strict` et `--allow-live` :

1. `assets/milaura-preference-storage.js`
2. `assets/milaura-recommendations.js`
3. `layout/theme.liquid`
4. `sections/milaura-dashboard.liquid`
5. `sections/milaura-quiz.liquid`
6. `sections/milaura-quiz-weather.liquid`
7. `sections/milaura-quiz-ritual.liquid`

Aucun autre fichier theme, reglage Shopify, email, Flow, produit, stock ou contenu live n a ete modifie. Cross-sell live et Atelier des emotions sont restes strictement hors perimetre.

## Source et deploiement

- commit fonctionnel : `43e93d10` ;
- documentation de developpement : `7a68ca5d` ;
- integration canonique : `e96ed097` ;
- fermeture de developpement : `05b8d34b` ;
- correctif Mon Ecrin apres QA authentifiee : `0697785d`.

Le push initial des sept fichiers a reussi sur `dawn-X-milaura/main`, ID `190430282075`. Le pullback cible `/private/tmp/milaura-lot1-live-pullback.7EPF67` est identique 7/7 a Git par SHA-256. Le HTML public de `/pages/diagnostic-emotionnel` charge les nouveaux assets de consentement et de recommandations.

La QA authentifiee a ensuite revele que le retrait masquait le profil Mon Ecrin mais laissait la selection personnalisee visible jusqu au rechargement. La cause etait limitee au contexte de recommandations `account`, absent du listener de retrait, avec une requete produit asynchrone non invalidee.

Le correctif `0697785d` :

- traite `account` comme un contexte personnalise soumis a un controle de consentement frais ;
- invalide toute requete produit en vol lors du retrait ;
- vide le composant de recommandations `account` ;
- masque son conteneur lorsque Mon Ecrin passe en etat vide.

Le second push live a ete limite a `assets/milaura-recommendations.js` et `sections/milaura-dashboard.liquid`. Le pullback `/private/tmp/milaura-lot1-hotfix-pullback.GQyJ6r` est identique 2/2 a Git par SHA-256.

## Validations

- `node --check assets/milaura-preference-storage.js` : reussi pendant la validation de developpement ;
- `node --check assets/milaura-recommendations.js` : reussi apres le correctif et avant son push live ;
- harness du contrat : sept scenarios reussis en developpement ;
- `git diff --check` : reussi ;
- `shopify theme check` : code retour 0, 17 avertissements preexistants dans neuf fichiers hors lot ;
- pullback initial : 7/7 identique ;
- pullback correctif : 2/2 identique.

QA publique sur le vrai theme live :

- refus avant diagnostic : resultat Apaisement visible pendant la visite, puis aucune restauration apres navigation ;
- Preferences acceptees : resultat et selection visibles, puis restauration avec `?show=result` ;
- retrait sur la page diagnostic : resultat courant conserve, recommandations masquees immediatement ;
- rechargement apres retrait : retour a l introduction, sans resultat ni recommandation ;
- Mon Ecrin authentifie : profil, diagnostic et selection visibles avec consentement ;
- retrait depuis Mon Ecrin apres correctif : etat vide et disparition immediate de la selection ;
- rechargement de Mon Ecrin : aucune restauration du profil ni de la selection.

La session client a ete laissee en refus explicite et le diagnostic de test a ete purge. Les erreurs console observees viennent des endpoints Shopify de confidentialite et de telemetrie bloques dans l environnement de controle Chrome, ainsi que d une extension Chrome. Aucune erreur ne pointe vers les fichiers du lot.

## Miroir Shopify

Le commit automatique Shopify `1dccd18c` contient les six fichiers existants du push initial et ils sont identiques au canonique. Il omet toutefois le nouvel asset `assets/milaura-preference-storage.js`.

Le commit automatique suivant `763d7ad9` reprend exactement les deux fichiers du correctif. L asset de stockage reste absent de `origin/main`. Le live est prouve par le pullback 7/7, le pullback 2/2 et la QA publique. Ne pas fusionner `origin/main` aveuglement ni utiliser son arbre seul pour reconstruire le lot 1. La branche `codex/milaura-integration` reste la source minimale obligatoire.

## Limite restante et suite

Le diagnostic est maintenant persiste dans le navigateur et le panier uniquement avec consentement Preferences. Mon Ecrin fonctionne sur le meme navigateur, mais aucune persistance cliente durable entre appareils n existe encore. Cette evolution appartient a `C1 - Le Cercle MilAura`.

La prochaine priorite du plan master est l audit complet des emails, notifications transactionnelles, inscription et automatisations lifecycle. Les popups newsletter et `Bienvenue10` ne doivent pas etre reactives ; leur suppression definitive reste un lot separe avant ScratchToReveal.
