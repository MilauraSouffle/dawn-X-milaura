# Cartes cadeaux Home en production

Date : 2026-09-25 18:05 CEST

## Statut

`FERME, INTEGRE, POUSSE ET LIVE VERIFIE`

Patrice a donné le GO explicite pour commit, push et déploiement live après validation visuelle de la version alignée sur la section `Trois façons de choisir`.

## Git

- Branche source : `codex/milaura-home-gift-cards-20260925`.
- Dernier commit source : `1bfd8172`.
- Commit d'intégration : `6761bc8c`.
- Branche `codex/milaura-integration` poussée sur origin.
- Les modifications et fichiers non suivis concurrents du checkout d'intégration ont été préservés.

## Contrôle de la base live

Avant fusion et publication, `templates/index.json` du thème live `190430282075` était strictement identique à la branche d'intégration. Le hero concurrent `Pièces rares` était donc déjà présent sur le live et n'a pas été publié ni écrasé par effet de bord.

Snapshot avant déploiement :

`/private/tmp/milaura-gifts-live-before.cPTfhV`

## Déploiement ciblé

Thème public : `190430282075`.

Fichiers publiés avec `--allow-live --nodelete --strict` :

- `assets/milaura-home-occasions.css`
- `assets/milaura-home-occasions-birthstone-cutout-v1.webp`
- `assets/milaura-home-occasions-wedding-cutout-v1.webp`
- `sections/milaura-home-occasions.liquid`
- `templates/index.json`

L'ancien asset JavaScript reste présent à distance à cause de `--nodelete`, mais il n'est plus référencé par la section et ne s'exécute plus.

## Vérifications

- JSON Shopify : PASS.
- Contrat CSS : PASS.
- `git diff --check` : PASS.
- Theme Check : aucune erreur, seize avertissements historiques hors lot.
- Pullback post-déploiement : égalité exacte `5/5`.
- Dossier de pullback : `/private/tmp/milaura-gifts-live-after.2EoSeV`.
- QA publique sans preview bar, bureau `1440 x 900` : deux cartes `424 x 576px`, document `1440px`, aucun débordement, deux images chargées.
- QA publique sans preview bar, mobile `390 x 844` : deux cartes `290 x 425px`, rail `390/650px`, aperçu de la suivante, document `390px`, aucun débordement.
- Images live : deux WebP transparents `1254 x 1254px` chargés depuis le CDN du thème public.
- Destinations : `/pages/pierres-de-naissance` et `/pages/cadeaux-anniversaire-de-mariage`.
- Console publique : aucune erreur.

## Suite

La refonte visuelle et sa publication sont fermées. Une passe distincte peut maintenant traiter le surtitre, le titre, la description de section, les titres de cartes et les CTA.
