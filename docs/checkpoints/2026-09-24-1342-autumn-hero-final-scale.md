# Hero Automne : dernier reglage d echelle

Date : 2026-09-24 13:42 CEST

## Resultat

Le dernier ajustement demande par Patrice est public sur le theme Shopify `190430282075`.

- Desktop : les boucles d oreilles passent de l echelle `0.60` a `0.54`. Leur position optique est conservee avec `translate(2%, -5%)`.
- Mobile : les boucles d oreilles restent inchangees. La zone visible de la flaque est reduite par un masque passant de `88% / 95%` a `91% / 97%`.
- Aucun autre element du hero, texte, branche, bracelet, video ou CTA n a ete modifie.

## Livraison

- Commit source : `9455e695` sur `codex/milaura-autumn-mobile-live-hotfix-20260924`.
- Commit integration : `2a941f41` sur `codex/milaura-integration`.
- Fichier live pousse : `assets/milaura-home-seasonal.css` uniquement, avec `--allow-live --nodelete --strict`.
- Pullback Shopify : identique bit a bit.
- SHA-256 local et live : `01e84760439dfc5dd0327e71732474ba6b44a9fa35c1420f4083f7038a9104c5`.

## Verification

- `python3 tests/css_contract_test.py` : PASS.
- `git diff --check` : PASS.
- Theme Check : 0 erreur, 16 avertissements historiques hors lot.
- Preview privee `201797534043` : desktop `1440 x 900` et mobile `393 x 706` conformes.
- Public sans barre de preview : desktop `1440 x 900` et mobile `393 x 706` conformes.
- Mobile : flaque bord a bord, ancree au bas du hero, hauteur reduite, boucles inchangees.
- Desktop : flaque inchangee, boucles reduites, composition toujours equilibree.

## Perimetre preserve

Les modifications documentaires et fichiers non suivis deja presents dans le checkout d integration ont ete preserves. Aucun produit, prix, stock, media produit, Shopify Admin ou Ads n a ete modifie.
