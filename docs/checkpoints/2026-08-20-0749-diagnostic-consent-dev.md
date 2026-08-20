# Lot 1 - Diagnostic et consentement en developpement

Date : 2026-08-20 07:49 CEST
Statut : implementation terminee, revue et validee sur le theme de developpement. Aucun deploiement live.

## Perimetre livre

Le lot centralise la persistance navigateur du diagnostic sous le consentement Shopify `Preferences`.

- nouvel asset unique `assets/milaura-preference-storage.js` ;
- aucune nouvelle ecriture du cookie historique `milauraLastResult` ;
- migration unique de cet ancien cookie vers `localStorage` seulement avec consentement, puis expiration ;
- aucune lecture ni nouvelle ecriture du diagnostic lorsque l API de consentement est indisponible ;
- purge du navigateur et des attributs panier lors d un refus ou d un retrait explicite ;
- une seule ecriture panier consentie, sans double POST pour les clients connectes ;
- ordre garanti entre ecriture et purge panier, requetes bornees a huit secondes et purge retentee une fois ;
- resultat courant, meteo et rituel conserves en memoire pendant la visite meme sans consentement ;
- diagnostic, Mon Ecrin et recommandations branches sur le meme contrat ;
- anciens rendus personnalises invalides immediatement au retrait ;
- texte compte corrige pour ne plus promettre une sauvegarde serveur inexistante.

Le backend C1, la persistance entre appareils, les emails, le lifecycle, les popups newsletter, ScratchToReveal, Atelier des emotions et Ruban restent hors perimetre.

## Fichiers

1. `assets/milaura-preference-storage.js`
2. `assets/milaura-recommendations.js`
3. `layout/theme.liquid`
4. `sections/milaura-dashboard.liquid`
5. `sections/milaura-quiz.liquid`
6. `sections/milaura-quiz-weather.liquid`
7. `sections/milaura-quiz-ritual.liquid`

Commit fonctionnel : `43e93d10`. Documentation : `7a68ca5d`. Integration canonique : `e96ed097`. Les branches source et d integration sont poussees sur `origin`. Le worktree du lot a ete retire proprement apres integration.

## Revue contradictoire

La premiere revue a detecte puis fait corriger :

- une course possible entre ecriture et retrait du consentement ;
- la confusion entre refus explicite et API temporairement indisponible ;
- un rendu personnalise ancien pouvant revenir apres retrait ;
- une promesse fausse de sauvegarde dans le compte ;
- une requete panier bloquee pouvant retarder la purge ;
- une purge incorrecte de l historique recent en etat de consentement inconnu.

La revue finale ne remonte aucun P0 ou P1 residuel.

## Validations locales

- `node --check assets/milaura-preference-storage.js` : reussi ;
- `node --check assets/milaura-recommendations.js` : reussi ;
- harness temporaire : sept scenarios reussis, dont acceptation, refus, migration, retrait, stockage bloque, API indisponible et course ecriture/retrait ;
- `git diff --check` : reussi ;
- `shopify theme check` : code retour 0, 17 avertissements preexistants dans neuf fichiers hors lot, aucun avertissement dans les sept fichiers du lot ;
- recherche globale : les seuls acces directs residuels a `milauraLastResult` sont dans `milaura-newsletter-popup.liquid` et `milaura-floating-bubble.liquid`, tous deux desactives et reserves au lot de suppression newsletter.

## Theme de developpement

Theme : `Development (c105a8-mac-1)`, ID `199421952347`.

Push cible strict des sept fichiers avec `--nodelete` et `--strict`. Aucun live. Pullback cible dans `/private/tmp/milaura-lot1-pullback.J2xmgC` : sept fichiers sur sept identiques au commit par SHA-256.

## QA navigateur reelle

Route : `/pages/diagnostic-emotionnel` sur le theme de developpement.

- refus avant diagnostic : resultat Apaisement visible pendant la visite, puis aucune restauration apres rechargement ;
- preferences acceptees : resultat et selection diagnostic visibles, puis restauration automatique avec `?show=result` ;
- retrait sur la meme page : resultat courant conserve, recommandations diagnostic masquees immediatement ;
- rechargement apres retrait : retour a l introduction, aucun resultat ni recommandation restaure ;
- texte compte public conforme : aucune promesse de persistance dans Mon Ecrin ;
- aucun nouvel avertissement ou erreur console pendant les rechargements et changements de consentement.

Une erreur `MutationObserver` unique et anterieure au parcours a ete observee au premier chargement. Aucun fichier du lot ne cree de `MutationObserver` et l erreur ne s est pas reproduite sur les rechargements. Elle reste hors perimetre de ce lot tant qu une regression reproductible ne la relie pas au diagnostic.

## Limites et suite

- Le compte client authentifie n etait pas disponible dans le navigateur de test. Le branchement de Mon Ecrin est valide statiquement et par le contrat partage, mais sa restitution connectee devra etre recontrolee avant ou pendant le GO live.
- Le stockage durable multi-appareils n existe toujours pas. Il appartient a C1.
- Le live `190430282075` est intact. Un GO live explicite de Patrice reste requis.
