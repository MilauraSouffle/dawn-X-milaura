# Bandeau cookies - persistance de l affichage live

Date : 2026-08-21 17:51 CEST

## Autorisation

Patrice a donne le GO exact : `GO LIVE COOKIES.`

## Defaut confirme

Sur Chrome desktop, le bandeau disparaissait apres acceptation puis reapparaissait lors du passage de la homepage a une PDP ou au retour sur la homepage. Le panneau `Gerer mes cookies` restituait pourtant Preferences, Analytics et Marketing comme acceptes. La persistance Shopify fonctionnait donc ; la regression venait de la condition d affichage du theme.

`assets/milaura-cookie-consent.js` faisait confiance a `shouldShowBanner()` sans recouper les decisions explicites renvoyees par `currentVisitorConsent()`.

## Correctif

Le correctif ajoute `hasRecordedConsent()`. Le bandeau ne s ouvre maintenant que si Shopify demande son affichage et qu au moins une des trois categories Analytics, Marketing ou Preferences ne contient encore ni `yes` ni `no`.

- proposition source : `04e51247a10f46fdde7916ecc610e9758b8a10ca` ;
- integration canonique : `aa3a99300eb83cd798f290a2574bb2d6b204974d` ;
- fichier unique : `assets/milaura-cookie-consent.js` ;
- SHA-256 canonique : `5ade6196746a4395d4482e293a108d1cd57791ca5cec23f654d4b4f26d27a219`.

Le correctif ne cree aucun stockage parallele, ne modifie aucun choix sans interaction et conserve Shopify Customer Privacy comme moteur unique.

## Deploiement

Theme live : `dawn-X-milaura/main`, ID `190430282075`.

Le push a ete limite au fichier unique avec `--only`, `--nodelete`, `--strict` et `--allow-live`. Aucun autre fichier, produit, reglage Admin, pixel ou consentement n a ete modifie.

Pullback cible : `/private/tmp/milaura-cookie-live-pullback.IbQ9B5/assets/milaura-cookie-consent.js`.

Le pullback et le canonique ont le meme SHA-256 :

`5ade6196746a4395d4482e293a108d1cd57791ca5cec23f654d4b4f26d27a219`

## QA publique

Le storefront public charge le nouvel asset sur le theme `t/3`.

Parcours verifies avec la vraie API Shopify :

1. consentement accepte, homepage, PDP, retour homepage : aucun reaffichage ;
2. refus via `Gerer mes cookies`, PDP, retour homepage : aucun reaffichage ;
3. choix accepte restaure puis rechargement : trois categories acceptees et bandeau masque ;
4. mobile 390 x 844, homepage, PDP, retour homepage : aucun reaffichage ;
5. ouverture et fermeture de `Gerer mes cookies` toujours fonctionnelles.

Les erreurs reseau `Failed to fetch` deja observees dans le privacy banner Shopify et les Web Pixels restent un chantier tracking separe. Elles n ont pas empeche l enregistrement, la restitution ou la validation du consentement.

## Etat final

Lot ferme, integre, pousse Git et live. Le theme de developpement `199421952347` contient le meme correctif. Le worktree source reste propre et aligne jusqu a son retrait coordonne.
