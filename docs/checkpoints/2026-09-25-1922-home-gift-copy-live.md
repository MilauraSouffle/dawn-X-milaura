# Copy Cadeaux Home live

Date : 2026-09-25 19:22 CEST

## Perimetre

- Section Home : `home_occasions`.
- Fichiers publies : `templates/index.json`, `sections/milaura-home-occasions.liquid`.
- Theme public : `190430282075`.
- Commit fonctionnel : `21ebdcd6`.

## Textes publies

- Surtitre : `Pierres de naissance & de mariage`.
- Titre : `À chaque date, sa pierre.`
- Carte naissance : `Choisir votre bijou de naissance`, action `Trouver votre mois`.
- Carte mariage : `Choisir votre pierre d’anniversaire de mariage`, action `Trouver votre année`.

## Verification

- Base live relue avant deploiement : template et section identiques au parent du commit, aucune derive concurrente.
- JSON Shopify parse : PASS.
- `git diff --check` : PASS.
- Contrat CSS : PASS.
- Theme Check : aucune erreur, seize avertissements historiques hors perimetre.
- QA publique : `1440 x 900` et `390 x 844`, textes exacts, cartes lisibles, rail mobile conserve, aucun debordement de page et aucune erreur Liquid.
- Lecture HTTP publique sans cookie : les six libelles principaux sont servis.
- Pullback du theme live : egalite exacte `2/2` avec les fichiers locaux.

## Exclusions

- Aucun changement de design, image, destination, produit, prix, stock, Shopify Admin ou autre section Home.
