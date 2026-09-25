# Home Pieces rares mobile V5 live, 2026-09-25 20:01 CEST

## Statut

- `FERME`
- `GO VISUEL PATRICE RECU`
- `GO LIVE PATRICE RECU`
- `LIVE VERIFIE`
- Theme public Shopify : `190430282075`, `dawn-X-milaura/main`.

## Integration Git

- Commit source : `e0a060b1`, `feat: overlay rare pieces mobile hero`.
- Merge dans `codex/milaura-integration` : `732a4061`, `merge: integrate rare pieces mobile hero`.
- Branche source et branche d integration poussees sur `origin`.
- Le conflit documentaire de `docs/workstreams.md` a ete resolu en conservant integralement le workstream concurrent de la landing Pieces rares et celui du hero Home.
- Les fichiers modifies ou non suivis hors perimetre du checkout d integration ont ete preserves et non stages.

## Publication ciblee

- Base live verifiee avant publication : `sections/milaura-hero-portal.liquid` et `templates/index.json` etaient identiques au parent d integration `732a4061^1`.
- Fichiers publies avec `--allow-live --nodelete --strict` :
  - `assets/milaura-hero-pieces-rares-lapis-mobile-v5.webp`
  - `sections/milaura-hero-portal.liquid`
  - `templates/index.json`
- Shopify a retire `mobile_title` et `mobile_cta_label` lors du premier envoi simultane avant enregistrement complet du schema.
- Correctif applique : second push cible du seul `templates/index.json` apres activation du schema.
- Pullback final strictement identique `3/3` :
  - asset `113818f91f39c501be1734218a6b009d258e8b45a83eac6280421dddb3b571c7`
  - section `0cb4e912220ed4b249f8597247f7bd57dade3d87d781a77c9bd2a511f2a3a020`
  - template `3c4c319ace279228e5000e23efed8e0a15934ea5259d8650d197b869c4bb71cd`

## Validation

- JSON Shopify extrait et valide avec `jq` : PASS.
- Theme Check : `0` erreur, `16` avertissements historiques hors lot.
- Mobile public `390 x 844`, sans preview bar : source V5 chargee en `941 x 1672`, titre `Pieces rares & de collection`, CTA `Voir la selection`, lien `/collections/pieces-rares`, aucune largeur parasite, console vide.
- Desktop public `1440 x 900`, sans preview bar : asset bureau `1672 x 941`, position `50% 50%`, titre `Certaines pierres meritent une place a part.`, description et CTA precedents visibles, variantes mobiles masquees, aucune largeur parasite.

## Resultat

La version mobile validee est en production. Le collier est le sujet principal; le mannequin reste le support. La version bureau validee est inchangee.
