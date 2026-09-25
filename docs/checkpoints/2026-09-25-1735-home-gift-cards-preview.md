# Refonte en cartes de la section Cadeaux Home

Date : 2026-09-25 17:35 CEST

## Statut

`PREVIEW PRIVEE PRETE, GO VISUEL PATRICE REQUIS`

Le thème public `190430282075` n'a pas été modifié. La recette est disponible uniquement sur le thème privé `201797534043` :

`https://milaura-2.myshopify.com?preview_theme_id=201797534043`

## Périmètre livré

- Remplacement des deux onglets Naissance et Mariage par deux cartes de destination visibles.
- Carte entièrement cliquable avec image responsive, repère, titre, description et CTA.
- Grille équilibrée sur bureau.
- Rail tactile de cartes de `290px` sur mobile, avec aperçu de la carte suivante.
- Suppression du JavaScript d'onglets et du réglage de schéma devenu inutile.
- Conservation volontaire de tous les textes, images et liens existants. La passe de copywriting reste distincte.

## Fichiers de thème

- `sections/milaura-home-occasions.liquid`
- `assets/milaura-home-occasions.css`
- `assets/milaura-home-occasions.js` supprimé du source car il n'est plus référencé

## Vérifications

- `python3 tests/css_contract_test.py` : PASS, quatre actifs de surface conformes et trois sections Liquid sans CSS inline.
- `git diff --check` : PASS.
- `shopify theme check` : exit `0`, aucune erreur, seize avertissements historiques hors périmètre.
- Pullback depuis le thème privé : égalité exacte `2/2` pour le CSS et la section Liquid.
- Bureau `1440 x 900` : largeur document `1440px`, aucun débordement, deux cartes de `646px`, espace bas `96px`, images et liens chargés.
- Mobile `390 x 844` : largeur document `390px`, aucun débordement, deux cartes de `290px`, espace bas `64px`, images mobiles chargées aux dimensions `1122 x 1402` et `1003 x 1568`.
- Destinations : `/pages/pierres-de-naissance` et `/pages/cadeaux-anniversaire-de-mariage`.
- Console : aucun échec applicatif ; uniquement les messages d'information de hot reload du thème privé.

## Revue de finition

La première revue indépendante a demandé quatre corrections : espace bas avant la section suivante, titres de cartes en `h3`, suppression du champ de schéma obsolète et suppression du JavaScript orphelin. Les quatre corrections sont appliquées. Le second passage conclut `PASS`, sans préjuger du GO visuel ou du GO live de Patrice.

## Prochaine décision

Patrice valide ou ajuste la direction visuelle sur la preview privée. Après ce GO visuel, la prochaine passe porte sur le surtitre, le titre, la description et les textes des cartes. Aucun déploiement live n'est autorisé dans ce lot sans GO live explicite distinct.
