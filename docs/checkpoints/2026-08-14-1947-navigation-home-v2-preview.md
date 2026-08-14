# Checkpoint MilAura - Navigation et homepage V2 en preview

Date : 2026-08-14 19:47 CEST

## Résultat

La navigation et la homepage V2 sont implémentées sur un thème Shopify isolé non publié. Le thème live `190430282075` n a pas été modifié par cette session.

- thème de preview : `199957807451`, `MilAura Navigation V2 2026-08-14` ;
- preview : `https://milaura-2.myshopify.com?preview_theme_id=199957807451` ;
- menu Shopify privé : `Navigation V2 - Preview`, ID Admin `322508423515`, handle `navigation-v2-preview` ;
- branche : `codex/milaura-navigation-home-v2-20260814` ;
- worktree : `/Users/paesano/Documents/MilAura website/_worktrees/navigation-home-v2-20260814`.

## Architecture livrée

La homepage rend huit mouvements visibles, dans cet ordre :

1. Hero de marque ;
2. sélection saisonnière ;
3. trois façons de choisir ;
4. Aigue-marine vers toute la collection ;
5. best-sellers ;
6. nouveautés ;
7. Naissance et Mariage ;
8. Karine et Journal.

La navigation permanente contient six intentions : Nouveautés, Bijoux, Pierres, Bougies et senteurs, Cadeaux et Guides. Recherche, diagnostic, Cercle, contact et panier restent des utilitaires. Le Cercle renvoie exclusivement vers `/account`.

`Offres du moment` reste conditionnel. Aucun lien promotionnel n est affiché sans sélection commerciale, prix et durée vérifiés.

## Pages et SEO

- `page.milaura-guide-pierres` : template prêt, 49 entrées alphabétiques, liens seulement vers des sélections réelles, bloc histoire et symbolique, sources et `content_updated_at` ;
- `page.milaura-guide-senteurs` : template prêt, cinq senteurs vérifiées, même contrat de date ;
- routes canoniques réservées : `/pages/guide-des-pierres` et `/pages/guide-des-senteurs` ;
- aucune page Shopify correspondante n a été créée ou publiée ;
- les previews de templates utilisent temporairement `/pages/bijoux-par-pierre?view=milaura-guide-pierres` et `/pages/bijoux-par-pierre?view=milaura-guide-senteurs` ;
- les 20 destinations publiques déjà utilisées par le menu répondent en HTTP 200 ; les deux futures routes de guide restent volontairement en HTTP 404 jusqu à leur activation coordonnée.

## Réconciliation concurrente

État validé au contrôle de 19:47 : les hotfixs Hero alors présents sur la branche d intégration avaient été repris dans la preview. Les seuls écarts conservés sur `milaura-hero-portal.liquid` étaient ceux nécessaires à la nouvelle navigation : surface transparente avant scroll et couleur du burger.

Mise à jour de coordination, 2026-08-14 19:52 CEST : Patrice a depuis validé dans la tâche Hero un bandeau-vitrine LFG, Karine et Metz ainsi que le retrait coordonné des trois bulles. La tâche Hero reprend la propriété exclusive de `sections/milaura-announcement.liquid` et `sections/milaura-hero-portal.liquid`. Navigation V2 gèle ces deux fichiers dans leur état local actuel, ne les édite plus et ne les pousse plus. La preview `199957807451` documentée ici ne constitue donc plus la référence finale du Hero. Aucun nouveau push de preview ni aucun déploiement ne doit avoir lieu avant réception et synchronisation du commit d intégration Hero.

La session n a touché ni au panier, ni à la livraison, ni aux PDP, ni aux recommandations, ni aux produits, ni aux stocks.

## Contrôles réalisés

- desktop `1440 x 1000` : un seul H1, aucun débordement horizontal, Header et Hero alignés ;
- mobile `390 x 844` : aucun débordement horizontal, Header sur une ligne, menu ouvert et page verrouillée ;
- accordéon Pierres : sept destinations visibles ;
- recherche mobile : overlay ouvert, champ visible, actif et focalisé ;
- fermeture et états ARIA contrôlés ;
- `node --check assets/milaura-navigation.js` : succès ;
- validation JSON des fichiers touchés : succès ;
- correction du défaut antérieur dans `templates/page.json` : virgule terminale supprimée ;
- `git diff --check` : succès ;
- Theme Check : zéro erreur, 18 avertissements préexistants dans dix fichiers hors lot.

Les deux erreurs console observées dans le contexte de preview concernent l iframe Shop et une ressource 403 de la barre de preview Shopify. Elles ne proviennent pas des composants de navigation.

## Mutations Shopify exactes

Créé dans Shopify Admin :

- un thème non publié `199957807451` ;
- un menu privé `322508423515`.

Poussé uniquement sur le thème non publié : fichiers de navigation, homepage, guides, Header, Footer et templates du lot.

Non modifié :

- thème live `190430282075` ;
- menu public `main-menu` ;
- produits, statuts produit, collections, stocks, livraison et panier ;
- pages Shopify des deux guides ;
- GSC, GA4, Merchant Center, Pinterest et campagnes Ads.

## Blocages avant activation publique

1. réception et synchronisation du commit d intégration Hero validé par Patrice ;
2. nouvelle validation technique de la preview globale après cette synchronisation ;
3. GO visuel explicite de Patrice sur cette preview resynchronisée ;
4. création et publication coordonnée des deux pages guides avec leurs templates et métadonnées ;
5. remplacement simultané des liens guides dans le menu public ;
6. contrôle de la collection best-sellers et de son ordre réel ;
7. ajout de `Offres du moment` uniquement après création d une vraie promotion ;
8. polish séparé du bandeau cookies, encore trop massif sur mobile et détenu par les fichiers globaux actuellement réservés à une autre session ;
9. contrôle sitemap puis Search Console dès qu un accès légitime est disponible.
