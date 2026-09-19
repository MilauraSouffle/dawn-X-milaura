# PDP V2 adaptative live - 2026-09-19 20:06 CEST

## Decision et perimetre

- GO explicite de Patrice : `GO LIVE PDP V2 ADAPTATIVE`.
- Theme public cible : `dawn-X-milaura/main`, ID `190430282075`.
- Theme prive de preview conserve : `MilAura PDP V2 Preview 2026-09-19`, ID `201381216603`.
- Aucun produit, prix, stock, media, collection, canal ou affectation de template Shopify Admin n a ete modifie.

## Source et integration

- Branche source : `codex/milaura-pdp-v2-20260919`.
- Commit source : `26aeee70` (`feat: unify adaptive product PDP`).
- Branche canonique : `codex/milaura-integration`.
- Commit d integration : `a14d55d4`.
- Les modifications concurrentes locales de `AGENTS.md`, `docs/project-state.md`, les fichiers de campagne non suivis et `docs/project-state-ledger.md` ont ete preserves et exclus.
- Les doublons non suivis `sections/milaura-product-narrative-v2 2.liquid` et `sections/milaura-product-reassurance-v2 2.liquid` ont ete preserves et exclus du commit, de l integration et du deploiement.

## Contrat adaptatif livre

- `templates/product.json` et `templates/product.milaura-produit.json` utilisent la meme structure V2.
- Les produits existants rattaches a ces deux templates passent automatiquement en V2 sans mutation Admin.
- Les nouveaux produits utilisent la V2 par defaut via `templates/product.json`.
- Six familles sont resolues : bijou, pierre/mineral, bougie/senteur, rituel, soin et accessoire.
- La galerie consomme H01 a H05. H06 reste une projection editoriale hors galerie. E01 a E03 alimentent les chapitres narratifs.
- Le manifeste `milaura.pdp_media_manifest` remplace les marqueurs ALT techniques. Les ALT publics restent descriptifs.
- Contrat complet : `docs/reference/2026-09-19-pdp-v2-data-contract.md`.

## Deploiement live cible

Commande Shopify executee avec `--allow-live --nodelete --strict` et quatorze `--only` :

1. `assets/milaura-tokens.css`
2. `assets/milaura-product-pdp-v2.css`
3. `assets/milaura-product-pdp-v2.js`
4. `sections/milaura-product-hero-v2.liquid`
5. `sections/milaura-product-reassurance-v2.liquid`
6. `sections/milaura-product-guide-v2.liquid`
7. `sections/milaura-product-narrative-v2.liquid`
8. `sections/milaura-product-editorial-v2.liquid`
9. `sections/milaura-product-services-v2.liquid`
10. `sections/milaura-product-sticky-v2.liquid`
11. `snippets/milaura-pdp-family.liquid`
12. `snippets/milaura-pdp-manifest-image.liquid`
13. `templates/product.json`
14. `templates/product.milaura-produit.json`

- Sauvegarde cible avant deploiement : `/private/tmp/milaura-pdp-v2-live-before.nyJEok`.
- Pullback live : `/private/tmp/milaura-pdp-v2-live-pullback.jiqAUY`.
- Resultat : `14/14` fichiers identiques au canonique, comparaison byte pour byte.

## Validation technique

- `node --test tests/pdp-v2-contract.test.mjs` : `12/12 PASS`.
- `node --check assets/milaura-product-pdp-v2.js` : PASS.
- `git diff --check` : PASS.
- `shopify theme check` : 0 erreur, 16 avertissements historiques dans huit fichiers hors lot.

## QA publique

Produits verifies sans parametre de preview :

- Bijou : Bracelet Iris.
- Pierre/mineral : galet de rhodonite 45 mm.
- Bougie/senteur : Bougie Elegance quartz rose.
- Rituel : pendule oeil de tigre.
- Soin : savon a l argan.
- Accessoire : rouleau de massage visage en jade.

Mobile `390 x 844` :

- titre, CTA, galerie et services presents ;
- titres et onglets adaptes a chaque famille ;
- quatre a cinq images selon le produit ;
- aucune image cassee ;
- `documentElement.scrollWidth = 390`, aucun debordement horizontal.

Desktop `1440 x 900` :

- `documentElement.scrollWidth = 1440` ;
- second onglet activable sur les six familles ;
- premier panneau masque et second panneau visible apres interaction ;
- bloc technique en deux colonnes, texte a gauche et photo a droite ;
- aucune image cassee ni erreur console relevee.

Captures de controle :

- `/private/tmp/milaura-pdp-v2-live-iris-desktop.png`
- `/private/tmp/milaura-pdp-v2-live-bougie-mobile.png`

## Etat final

- `LIVE VERIFIE` sur le theme `190430282075`.
- Git source et integration pousses.
- Le workflow creatif peut publier progressivement les manifestes et les medias enrichis. Le fallback legacy conserve les photos et contenus disponibles sur les produits non encore enrichis.
- La sauvegarde de retour arriere des templates et tokens reste disponible dans le dossier temporaire indique ci-dessus pour cette session.
