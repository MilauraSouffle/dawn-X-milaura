# Plan des meilleures collections commerciales MilAura

Date : 2026-09-09
Dernière vérification : 2026-09-10 10:52 CEST
Statut : 9 collections publiées et vérifiées en production

## Décision

La matrice contient 99 intersections `type x pierre`. Huit seulement atteignent le seuil strict de cinq produits actifs et en stock. Elles sont retenues. Les 91 autres ne seront pas publiées maintenant.

Une neuvième page est retenue comme exception : `colliers améthyste`. Elle ne contient que deux produits, mais répond à une intention commerciale explicite demandée par Patrice et permet de consolider l'ancienne fiche `/products/collier-amethyste`, qui possède encore des signaux Search Console.

## Pages retenues

| Priorité | URL | Produits en stock au 2026-09-09 | Stock cumulé | Motif |
|---:|---|---:|---:|---|
| 1 | `/collections/bracelets-amethyste` | 9 | 22 | assortiment le plus profond, page concurrente existante à consolider |
| 2 | `/collections/bracelets-quartz-rose` | 6 | 8 | assortiment profond et SERP commerciale dédiée |
| 3 | `/collections/bracelets-aigue-marine` | 6 | 13 | assortiment profond, dont modèles simples et compositions |
| 4 | `/collections/bracelets-cornaline` | 6 | 9 | assortiment profond, plusieurs diamètres |
| 5 | `/collections/bracelets-onyx` | 6 | 8 | assortiment distinct par associations et finitions |
| 6 | `/collections/bracelets-sodalite` | 5 | 11 | cinq modèles et cohérence avec la collection pierre existante |
| 7 | `/collections/bracelets-aventurine-verte` | 5 | 8 | cinq modèles, vocabulaire pierre stabilisé sur `aventurine-verte` |
| 8 | `/collections/bracelets-lapis-lazuli` | 5 | 6 | cinq modèles, requête commerciale distincte |
| 9 | `/collections/colliers-amethyste` | 2 | 2 ou plus selon snapshot final | exception stratégique liée à l'ancienne URL cliquée |

Les pages `bracelets œil de tigre`, `bracelets hématite`, `bracelets labradorite`, `bagues aigue-marine` et toutes les autres cellules restent en observation. Elles seront réévaluées après croissance de l'assortiment et données GSC, pas générées par anticipation.

## Contrat de publication

Chaque page sera une collection intelligente Shopify avec deux conditions cumulatives :

- tag `type:<type>` ;
- tag `pierre:<pierre>`.

Le template sera `milaura-type`, car il rend la description factuelle avant la grille sans reprendre les anciennes preuves non vérifiées du template par défaut.

Le stock ne fait pas partie des règles de collection. Un produit actif temporairement épuisé doit conserver sa fiche et peut rester visible comme indisponible. Un produit définitivement retiré est traité par le contrat URL, pas par la règle de collection.

Shopify confirme que les collections intelligentes peuvent cumuler plusieurs conditions. Google recommande une hiérarchie catégorie, sous-catégorie, produit reliée par des liens internes.

- [Shopify, conditions des collections](https://help.shopify.com/en/manual/products/collections/conditions)
- [Google, structure e-commerce et liens internes](https://developers.google.com/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure)

## Maillage requis

Pour chaque nouvelle page :

1. lien depuis `/collections/bracelets-pierres` ou `/collections/colliers-pierres` ;
2. lien depuis la collection pierre correspondante ;
3. lien contextuel depuis un guide réellement pertinent ;
4. fil d'Ariane et canonical propres ;
5. aucun lien vers une cellule non publiée.

La page `/pages/bracelet-amethyste` est masquée et redirigée en une seule `301` vers `/collections/bracelets-amethyste`, destination `200`. L'ancienne fiche `/products/collier-amethyste` ne sera redirigée vers `/collections/colliers-amethyste` que si le propriétaire catalogue confirme son retrait définitif sans réassort.

Le guide `/blogs/journal/quelle-pierre-naturelle-choisir-selon-vos-besoins-le-guide-complet` contient maintenant un lien public vers chacune des neuf collections. Les descriptions et liens enregistrés sur les catégories mères ne sont pas rendus par tous les templates spéciaux actuels ; ils ne sont donc pas comptés comme liens publics. Leur intégration visuelle reste un lot thème séparé.

## Contenus exacts

Le manifeste JSON associé contient les titles, metas, règles et descriptions HTML prêtes à publier : [2026-09-09-commercial-collections-manifest.json](2026-09-09-commercial-collections-manifest.json).

Principes appliqués :

- intention d'achat explicite dans le H1 et le title ;
- différences concrètes entre modèles ;
- dimensions et matières renvoyées aux fiches, sans inventer de preuve globale ;
- symbolique présentée comme tradition, jamais comme résultat médical ;
- texte propre à chaque pierre, sans permutation automatique de mots-clés ;
- aucune promesse de fabrication, certification, provenance ou délai non prouvée.

## Mesure

Baseline à enregistrer le jour de publication : impressions, clics, position moyenne et requêtes par URL sur 28 jours.

Revue :

- J+7 : indexation, canonical, sitemap, erreurs et maillage ;
- J+28 : impressions, requêtes réelles, CTR, entrées organiques et clics produit ;
- J+90 : position, revenus organiques et décision de renforcer, fusionner ou retirer.

Une cellule ne sera pas dupliquée si une page existante commence à recevoir la même famille de requêtes. Une requête commerciale principale conserve une seule URL canonique.

## Preuve live du 2026-09-10

| Contrôle | Résultat |
|---|---:|
| Collections créées | 9/9 |
| Réponse publique `200` | 9/9 |
| Canonical exact | 9/9 |
| H1 unique et commercial | 9/9 |
| Title et meta exacts | 9/9 |
| Produit public attendu | 9/9 |
| Présence dans le sitemap collections | 9/9 |
| Lien contextuel depuis le guide de choix | 9/9 |
| Ancienne page Bracelet Améthyste | `301` en un saut vers `200` |
