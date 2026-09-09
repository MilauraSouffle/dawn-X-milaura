# Coeurs favoris PDP et catalogue live

Date : 2026-09-08 18:51 CEST

## Resultat

Les coeurs favoris sont deployes sur le theme live `190430282075`, sur les fiches produit et les cartes catalogue. Ils utilisent directement l identifiant du produit Shopify rendu par Liquid : aucun mapping manuel du catalogue n est necessaire lorsque les produits changent.

Le favori est durable dans le metafield client `$app/favorites_v1`, commun avec Mon Ecrin. Un client connecte peut ajouter ou retirer un produit avec mise a jour optimiste, retour a l etat precedent si l ecriture n est pas confirmee et synchronisation des doublons visibles du meme produit. Un visiteur est dirige vers la connexion puis son clic explicite est repris pendant 20 minutes ; aucun faux favori persistant n est stocke localement.

## Production

- Backend : release `2026-09-08-bbeb6f9`, image `sha256:7e99c7d4efcee5e5fd98e585cfd1fa15972c2bd262244079d5ec6c845bdf1f6c`, conteneur `milaura-mon-ecrin-backend` healthy.
- Sauvegarde backend : `/docker/backups/milaura-mon-ecrin-backend/20260908-before-bbeb6f9/`.
- Source backend : commits `bbeb6f9` et `9cc34c9`, branche `codex/milaura-favorite-hearts-backend-20260908` poussee.
- Source theme : commits `6a47db00` et `7d439f61`, branche `codex/milaura-favorite-hearts-20260908` poussee.
- Implementation theme integree : `codex/milaura-integration` contient `7d439f61`.

Fichiers pousses sur le live :

- `assets/milaura-favorites.css`
- `assets/milaura-favorites.js`
- `layout/theme.liquid`
- `snippets/card-product.liquid`
- `snippets/milaura-card-product.liquid`
- `snippets/milaura-favorite-button.liquid`
- `snippets/milaura-c1-release-bridge.liquid`

Le fichier live `sections/milaura-product-hero.liquid` contenait une evolution concurrente de la note sur les variations photo. Il a ete sauvegarde, exclu du push et conserve sans modification. Le bouton PDP est monte dans la galerie depuis le pont global.

## Verifications

- Backend : 113 tests PASS, controle statique PASS, conteneur healthy, readiness authentifiee PASS, racine en lecture seule, utilisateur `19991:19991`, endpoints non signes ou non authentifies refuses avec HTTP 401.
- Theme : 31 tests PASS, controle copywriting PASS sur 339 fichiers, `git diff --check` PASS.
- Theme Check : 0 erreur, 16 avertissements historiques hors lot.
- Pullback live : egalite exacte des sept fichiers avec la source Git.
- HTTP public : assets favoris presents sur PDP et catalogue ; marqueur PDP et identifiants Shopify dynamiques presents.
- Aucun test visuel execute, conformement a la demande de Patrice.

## Gate restant

Patrice garde le GO visuel mobile et bureau : placement du coeur, equilibre Van Cleef-like, et parcours reel ajoute, recharge, retrait et connexion invite. Les worktrees restent ouverts pour les iterations qui suivront ce controle.

## Retour arriere

Les quatre fichiers live existants ont une sauvegarde locale dans `/private/tmp/milaura-favorite-hearts-live-before.VK1eFc`. Un retour arriere restaure ces quatre fichiers et retire uniquement les trois nouveaux fichiers favoris. La sauvegarde backend ci-dessus permet de revenir a la V9 precedente.
