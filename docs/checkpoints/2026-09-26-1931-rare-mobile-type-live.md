# Typographie mobile du hero Pieces rares live

Date : 2026-09-26 19:31 CEST

## Demande

Patrice a demande une correction limitee au mobile apres controle sur iPhone : supprimer la virgule finale du H1, conserver sa taille et son blanc, maintenir une typographie premium et rendre visible en blanc l introduction `Geodes, mineraux rares & pierres precieuses.`

## Livraison

- Branche source : `codex/milaura-rare-mobile-type-20260926`
- Branche d integration : `codex/milaura-integration`
- Commit fonctionnel : `694da9fb fix: refine rare hero mobile type`
- Theme Shopify live : `dawn-X-milaura/main`, ID `190430282075`
- Fichiers deployes : `assets/milaura-rare-pieces-landing.css` et `sections/milaura-rare-pieces-landing.liquid`
- Deploiement cible sans suppression, sans preview.

## Correction

- Le H1 possede deux rendus visuels dans un seul element semantique : desktop avec la ponctuation existante, mobile sans virgule.
- Le mobile conserve Gloock 400, famille canonique des titres de hero MilAura, ainsi que la taille et la couleur existantes.
- Le paragraphe RTE de l introduction herite maintenant sur mobile de la couleur, de la taille, de la graisse et de l interligne du conteneur. Le style global Shopify ne peut plus le repasser en prune.

## Verifications

- `git diff --check` : PASS.
- Theme Check : `0` erreur, `16` avertissements historiques hors lot.
- Pullback live : egalite stricte `2/2` par SHA-1.
- QA publique mobile `390 x 844` : `Pieces rares`, Gloock 400, `50.7px`, blanc `rgb(253, 251, 248)`; introduction blanche, `17.94px`, graisse 500, interligne `25.116px`; largeur document exacte; aucune iframe de preview; aucune erreur navigateur.
- QA publique desktop `1440 x 900` : `Pieces rares,` conserve, Gloock 400 et mise en page intacte; largeur document exacte; aucune erreur navigateur.
- Capture de controle locale temporaire : `/private/tmp/milaura-mobile-type-live.png`.

## Etat final

`LIVE VERIFIE`. Le GO visuel final appartient a Patrice sur son appareil. Les fichiers concurrents du checkout principal sont restes intacts et hors commit.
