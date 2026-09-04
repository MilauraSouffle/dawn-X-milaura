# Polish 6 : integration et mise en ligne

Date : 2026-09-04

## Autorisation et perimetre

- GO visuel et GO integration/live explicites de Patrice : `magnifique on deploie push et commit toutes tes modifs en attente`.
- Source validee : branche `codex/milaura-ui-hierarchy-polish6-20260903`, HEAD `79716e625eee6529f853285bcfeafaca91c9b6c7`.
- Integration cible : `codex/milaura-integration`, base `1a529e7126ba8b3708180a9cf037186340d01a7a`.
- Theme live confirme : `190430282075`, boutique `milaura-2.myshopify.com`.
- Perimetre : hierarchie editoriale partagee, CTA, fleches diagonales uniques et respiration des quatre introductions Home.
- Textes, produits, prix, medias, templates JSON, Admin, Ads et autres chantiers exclus.

## Fichiers theme

```text
assets/milaura-actions.css
assets/milaura-home-editorial.css
assets/milaura-home-occasions.css
assets/milaura-home-paths.css
assets/milaura-section-heading.css
assets/milaura-tokens.css
layout/theme.liquid
sections/milaura-catalogue-hub.liquid
sections/milaura-featured-products.liquid
sections/milaura-hero-editorial.liquid
sections/milaura-home-editorial.liquid
sections/milaura-home-occasions.liquid
sections/milaura-home-paths.liquid
sections/milaura-seasonal-collection.liquid
sections/milaura-selection-atelier.liquid
sections/milaura-sodalite-landing.liquid
snippets/milaura-action-icon.liquid
snippets/milaura-section-heading.liquid
```

## Controle avant release

- Pullback du live : les 17 fichiers existants a modifier et les deux dependances C1 deja presentes sont sauvegardes dans `/private/tmp/milaura-polish6-release.BzFEPu/live-before`.
- 18 des 19 fichiers controles identiques a la base d'integration.
- Exception : `sections/milaura-seasonal-collection.liquid`. Le live conserve la landing d'aout a quatre produits ; le depot contenait une autre structure Sodalite. La version live est reconciliee dans Git, puis seule sa premiere ligne de chargement CSS redondant est retiree. Aucun remplacement de sa structure ni de son contenu sur le live.
- Les 17 autres fichiers du lot sont identiques a la source approuvee. Le fichier saisonnier est strictement identique au pullback live, moins cette ligne.
- Les deux bridges C1 sont deja identiques au live et ne seront pas redeployes.
- Theme Check : 303 fichiers, zero erreur, 16 warnings historiques hors perimetre.
- `git diff --cached --check` : PASS.
- Les modifications concurrentes preexistantes sont preservees. Sauvegarde du diff initial : `/private/tmp/milaura-polish6-release.BzFEPu/unrelated-before.patch`. Aucun staging global.

## Etat de publication

Integration preparee le 2026-09-04. Commit, push, deploiement cible, pullback et QA publique a renseigner apres execution.
