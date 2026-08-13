# Produits integres aux hubs Mariage et Naissance, livraison live

Date : 2026-08-13 17:52 CEST

## Decision finale

Patrice a confirme que les produits doivent apparaitre directement dans le panneau de l'annee de mariage ou du mois de naissance selectionne. Il a aussi demande de conserver les sections editoriales de cross-selling ajoutees lors de la refonte precedente : `Pour marquer l'instant` sur Mariage et `Le choix de Karine` sur Naissance.

Les deux fonctions coexistent donc :

- la grille contextuelle repond directement au choix de l'internaute ;
- la selection editoriale finale propose une ouverture complementaire sans remplacer cette grille.

## Contenu contextuel live

### Mariage

| Repere | Source | Produits |
| --- | --- | ---: |
| 4 ans, noces de cire | collection `bougies-emotionnelles` | 5 |
| 17 ans, noces de rose | collection `par-pierre-quartz-rose` | 8 |
| 25 ans, noces d'argent | produit tague `mariage:25-argent` | 1 |
| 40 ans, noces d'emeraude | produit Emeraude public | 1 |
| 42 ans, noces de nacre | produits Nacre publics | 3 |
| 48 ans, noces d'amethyste | collection `par-pierre-amethyste` | 11 |
| 50 ans, noces d'or | aucune offre suffisamment fiable | 0 |

La selection complementaire `Pour marquer l'instant` conserve ses 3 produits.

### Naissance

| Mois | Source | Produits |
| --- | --- | ---: |
| Janvier | aucun Grenat public identifie | 0 |
| Fevrier | collection `par-pierre-amethyste` | 11 |
| Mars | collection `par-pierre-aigue-marine` | 6 |
| Avril | aucun Diamant public identifie | 0 |
| Mai | produit Emeraude public | 1 |
| Juin | aucune Perle, Alexandrite ou Pierre de lune publique fiable | 0 |
| Juillet | aucun Rubis public identifie | 0 |
| Aout | produits Peridot publics | 3 |
| Septembre | aucun Saphir public identifie | 0 |
| Octobre | un produit Opale et quatre produits Tourmaline publics | 5 |
| Novembre | un produit Topaze et un produit Citrine publics | 2 |
| Decembre | un produit Turquoise public | 1 |

La selection complementaire `Le choix de Karine` conserve ses 4 produits.

## Audit des autres pages nouvellement creees

- `/pages/cadeaux-anniversaire-de-mariage` et `/pages/pierres-de-naissance` etaient les deux seules pages qui presentaient le defaut signale : un choix contextuel suivi d'un simple lien au lieu des produits correspondants. Le defaut est corrige.
- `/pages/bijoux-par-pierre` est un repertoire de destinations. Ses liens vers les collections sont intentionnels et ne doivent pas etre transformes en catalogue unique. Une petite lacune reste ouverte : la collection Amethyste, publique avec 11 produits, n'est pas encore representee parmi les cinq destinations.
- Les collections publiques de pierre utilisent deja leurs propres grilles produit. Elles ne presentent pas le meme defaut.
- Les pages mensuelles de naissance et les pages enfants de mariage n'existent pas encore comme destinations completes ; elles restent dependantes de l'inventaire et ne sont pas un defaut de rendu du lot actuel.

## Fichiers deployes

Le deploiement live a ete effectue en deux etapes afin que Shopify enregistre le schema de section avant les reglages des templates :

1. `sections/milaura-catalogue-hub.liquid`
2. `assets/milaura-catalogue-hub.css`
3. `templates/page.milaura-cadeaux-mariage.json`
4. `templates/page.milaura-pierres-naissance.json`

Theme live : `dawn-X-milaura/main`, ID `190430282075`.

Aucun produit, stock, prix, metafield, statut de publication ou menu n'a ete modifie.

## Validation live

- Push cible avec `--nodelete --strict --allow-live` : reussi.
- Pullback dans un dossier frais : 4 fichiers sur 4 identiques bit a bit a Git.
- Mariage : 1 H1, canonical correcte, `48 ans` selectionne, 11 produits contextuels, ancien lien de redirection absent, 3 cartes de cross-selling, aucun `noindex` et aucun debordement horizontal.
- Naissance : 1 H1, canonical correcte, Fevrier affiche 11 produits, Mars affiche 6 produits apres interaction, 4 cartes de cross-selling, aucun `noindex` et aucun debordement horizontal.
- Console navigateur : 0 erreur sur les deux routes controlees.

## Git et reconciliation Shopify

- Commit fonctionnel du lot : `560a7fdf`.
- Commit conservant les deux cross-sells : `1125f370`.
- Integration dans la branche canonique : `871ef137`.
- Commits miroir Shopify : `ef639621` et `069cc6de`.
- Rattachement du miroir a l'integration sans changement d'arbre : `f8e2dfc2`.
- Worktree et branche ephemere locale retires apres verification.
- Branche ephemere distante supprimee apres integration.

## Suite validee avec Patrice

Le prochain lot UI concerne la selection d'aout de la homepage : resserrer les informations et controles sous les cartes produit, reprendre le selecteur de quantite et l'ajout panier, supprimer ou redesigner le separateur refuse visuellement, puis reduire l'espace vide avant le debut de la section.
