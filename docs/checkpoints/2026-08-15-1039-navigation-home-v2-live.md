# Navigation et homepage V2, activation live

Date : 2026-08-15 10:39 CEST
Branche d'intégration : `codex/milaura-integration`
Thème live : `190430282075`
GO : Patrice, `GO` explicite dans la tâche Navigation et homepage V2 le 2026-08-15

## Mutations Shopify Admin

Deux collections existantes, préparées dans cette session, ont été publiées sur le canal Boutique en ligne. Aucun produit n'a été modifié.

| ID Shopify | Handle | Publication Boutique en ligne | Sélection rendue |
| --- | --- | --- | ---: |
| `678216892763` | `par-pierre-oeil-de-tigre` | `2026-08-15T10:31:48+02:00` | 4 bijoux actifs |
| `678216925531` | `par-pierre-aventurine` | `2026-08-15T10:31:49+02:00` | 7 bijoux actifs |

Les baguettes et les objets hors bijou restent exclus de ces collections. Les produits en brouillon, stocks, prix, titres et metafields produit n'ont pas été touchés.

## Déploiement thème live

Push ciblé, sans suppression, de 23 fichiers sur `190430282075` :

- `assets/milaura-guide-index.css`
- `assets/milaura-home-editorial.css`
- `assets/milaura-home-occasions.css`
- `assets/milaura-home-paths.css`
- `assets/milaura-home-paths.js`
- `assets/milaura-navigation.css`
- `assets/milaura-navigation.js`
- `sections/footer-group.json`
- `sections/header-group.json`
- `sections/milaura-featured-products.liquid`
- `sections/milaura-footer.liquid`
- `sections/milaura-guide-index.liquid`
- `sections/milaura-hero-editorial.liquid`
- `sections/milaura-hero-portal.liquid`
- `sections/milaura-home-editorial.liquid`
- `sections/milaura-home-occasions.liquid`
- `sections/milaura-home-paths.liquid`
- `sections/milaura-navbar.liquid`
- `snippets/milaura-nav-curated-links.liquid`
- `templates/index.json`
- `templates/page.json`
- `templates/page.milaura-guide-pierres.json`
- `templates/page.milaura-guide-senteurs.json`

Le push exclut le panier, la livraison, les PDP, les recommandations, les cartes produit et les données produit. Le Hero canonique et le bandeau validés sont conservés. `sections/milaura-hero-portal.liquid` ne reçoit que les trois lignes de compatibilité navbar prévues au-dessus de son canonique.

Shopify a retiré deux anciens réglages devenus inconnus du schéma dans `sections/header-group.json`. Le fichier canonique local a été réaligné sur le pullback Shopify avec `settings: {}` pour le bandeau.

## Validation

- validation JSON après retrait du commentaire Shopify : succès ;
- `git diff --check` : succès ;
- Theme Check : 293 fichiers, zéro erreur, 18 avertissements historiques hors lot ;
- push live : succès ;
- pullback live : 23 fichiers sur 23 identiques au canonique local ;
- thème détecté dans le navigateur public : `190430282075` ;
- desktop 1440 px : méga-menu Pierres complet, six pierres incontournables visibles ;
- mobile 390 x 844 : menu et accordéon Pierres fonctionnels, zéro débordement horizontal ;
- homepage : un seul H1, Hero canonique conservé ;
- collection Œil de tigre : HTTP 200, canonique propre, 4 modèles ;
- collection Aventurine : HTTP 200, canonique propre, 7 modèles ;
- erreurs JavaScript pendant le parcours : aucune.

## Risque catalogue conservé

La collection Œil de tigre est publique avec quatre bijoux, donc sous le seuil éditorial préféré de cinq. Cette exception est assumée par le GO live de Patrice. Elle devra être réévaluée après consolidation de l'inventaire réel.

## Reprise section 3 homepage

La section `Commencez par ce qui compte pour vous` reste live dans son état validé avant ce déploiement. Son prochain polish doit suivre ce contrat, sans mutation dans le présent lot :

- trois sélecteurs : `Choisir par bijou`, `Choisir par pierre`, `Me laisser guider` ;
- fond neutre ou transparent, sans reprise du bleu-vert du Hero ;
- cadre Or mat limité au trait supérieur et aux deux côtés, sans trait inférieur ;
- libellé de chaque parcours placé dans ce cadre ouvert ;
- contenu associé affiché au clic ;
- photographie plus contenue, hiérarchie simple, rendu premium et épuré.

