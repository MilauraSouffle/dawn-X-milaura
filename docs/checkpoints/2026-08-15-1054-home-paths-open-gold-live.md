# Section 3 homepage, cadres ouverts Or mat

Date : 2026-08-15 10:54 CEST
Branche de lot : `codex/milaura-navigation-home-v2-20260814`
Commit de lot : `979e0223`
Correctif focus : `486d6cae`
Merges d'intégration : `5bc962ac`, puis `2a77605f`
Thème live : `190430282075`

## Autorisation

Patrice a validé le contrat visuel puis demandé un push live direct le 2026-08-15. Aucun passage supplémentaire par le thème de preview n'était demandé.

## Périmètre exact

- `assets/milaura-home-paths.css`
- `sections/milaura-home-paths.liquid`
- documentation du lot

Aucun autre bloc de homepage, Hero, bandeau, navbar, footer, panier, PDP, recommandation, carte produit ou donnée catalogue n'a été modifié.

## Résultat

- suppression du grand fond aigue-marine des trois sélecteurs ;
- suppression des fonds aigue-marine et quartz rose des panneaux ;
- trois cadres ouverts avec un trait supérieur et deux traits latéraux Or mat, sans trait inférieur ;
- numéro discret, libellé Gloock et flèche limitée au parcours actif ;
- image desktop réduite et panneau plafonné à 380 px ;
- image mobile contenue à 86 pour cent de la largeur, avec une limite de 340 px ;
- panneau actif sur fond nacre transparent, avec seulement deux filets neutres ;
- focus clavier réaligné en Or mat après contrôle à 360 px ;
- les trois parcours et leurs liens restent inchangés.

## Validation

- `git diff --check` : succès ;
- Theme Check : 293 fichiers, zéro erreur, 18 avertissements historiques hors lot ;
- push live ciblé initial : deux fichiers ;
- pullback initial : 2 fichiers sur 2 identiques ;
- micro-correctif live ciblé : un fichier CSS ;
- pullback final du CSS : identique ;
- thème public détecté : `190430282075` ;
- desktop 1440 px : trois parcours vérifiés visuellement ;
- mobile 390 et 360 px : libellés lisibles, un seul panneau visible, aucun débordement horizontal ;
- navigation clavier : flèches gauche et droite fonctionnelles, état sélectionné correct ;
- erreurs JavaScript pendant le parcours : aucune ;
- aucun H1 ajouté, la homepage conserve un seul H1.

## État final

La section est publiée sur `https://milaura.fr/`. Le bleu-vert du Hero n'est plus repris comme surface d'interface dans ce bloc. Le cadre ouvert Or mat devient sa signature principale.

