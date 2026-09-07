# Lien Pinterest du footer : live verifie

Date : 2026-09-07 16:02 CEST. Proprietaire : Codex, tache Pinterest `01a07069-b8b7-73e2-880a-37f444a91195`.

Demande explicite de Patrice : corriger en priorite le lien Pinterest du footer vers MilAuraMineraux. Compteur produit conserve sur sa demande. Aucun nouveau GO de creation, publication ou modification Ads deduit de cette correction.

## Resultat

- `current.social_pinterest_link` : `https://fr.pinterest.com/MilAuraCreations/` devient `https://fr.pinterest.com/MilAuraMineraux/`.
- Theme live confirme par CLI : `190430282075`, `dawn-X-milaura/main`.
- Source et integration : commit `c019bd9e`, branche source `codex/milaura-pinterest-footer-20260907`, fast-forward sur `codex/milaura-integration`, deux branches poussees.
- Push Shopify cible : `config/settings_data.json` uniquement, avec `--allow-live --nodelete --strict`. Aucun autre fichier de theme publie.
- Footer public de `https://milaura.fr/` verifie dans Chrome apres publication : lien Pinterest vers MilAuraMineraux.

## Verification et protection du live

La configuration live a ete tiree avant edition. Elle differait de Git par trois reglages deja publies : `milaura_reward_gift_variant_id`, `milaura_c1_release_candidate_enabled` et `milaura_c1_mon_ecrin_url`. Ils ont ete conserves tels quels puis rapproches dans Git, sans alteration du live. Le diff avant/apres live porte sur une seule URL.

JSON valide ; remplacement unique controle. Theme Check : 0 erreur, 16 avertissements historiques hors fichier modifie. `git diff --check` conforme. Pullback final bit a bit identique a la configuration preparee. SHA-256 : `0084a8992360f37d5b98fa8bbd546ad04b3485c5edb068a8848b1c0a5fd09777`.

Sauvegardes avant, export deploiement et pullback : `/Users/paesano/.codex/visualizations/2026/09/05/01a07069-b8b7-73e2-880a-37f444a91195/pinterest-footer-2026-09-07/`. Pour annuler uniquement ce changement, restaurer la valeur du lien apres nouvelle lecture du live ; ne pas pousser une ancienne configuration complete sans comparaison.

## Limites

Le checkout d'integration reste volontairement sale avec les changements des autres travaux : CI, AGENTS, documents de coordination et fichiers non suivis. Aucun de ces changements n'a ete embarque dans le commit fonctionnel. Le present lot ne modifie ni le compteur produit, ni les galeries, ni les Pins, ni la campagne A1, ni son budget.

La direction creative discutee le 2026-09-07 est preparee dans le Content Hub : produit lisible en premier, mannequins au service du bijou, accroches commerciales et destinations coherentes. Cette direction n'est pas une annonce deja produite, approuvee ou lancee.
