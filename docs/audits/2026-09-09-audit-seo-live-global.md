# Audit SEO live global MilAura

Date du crawl : 2026-09-09
Dernière vérification ciblée : 2026-09-10 10:52 CEST
Périmètre : sitemap public, liens internes, produits Shopify en lecture seule, redirections exportées depuis Shopify Admin, historique Search Console déjà collecté
Statut : lot SEO commercial appliqué et vérifié en production ; décisions catalogue historiques encore ouvertes

## Verdict

Le socle technique indexable est propre sur les URL présentes dans le sitemap : 298 URL testées, 298 réponses `200`, aucune duplication de title ou de meta description détectée. Les 215 produits actifs ont tous un title SEO et une meta description explicites.

Le défaut principal est ailleurs : la gouvernance des URL catalogue est instable. Des fiches ayant encore des signaux Google ont été repassées en brouillon, des redirections pointent vers des produits non publics et le Journal contient des liens mal encodés. Corriger uniquement le title de la collection améthyste aurait traité un symptôme mineur.

## Mise à jour live du 2026-09-10

Le lot autorisé par Patrice avec `GO SEO LIVE` est publié :

- 15 collections existantes relues après écriture, sans écart avec le manifeste ;
- 3 pages avec title et meta description vérifiés dans le HTML public ;
- 4 articles enregistrés, dont 3 avec nouveau title et nouvelle meta description ;
- 17 occurrences de liens du Journal mal encodées réparées dans 3 articles ;
- la redirection Sauge raccourcie à une seule réponse `301`, suivie d'une destination `200` ;
- 9 collections commerciales créées, toutes en `200`, avec canonical propre, H1 unique, contenu distinct et 2 à 9 produits publics ;
- `/pages/bracelet-amethyste` masquée, retirée du sitemap pages et redirigée en une seule `301` vers `/collections/bracelets-amethyste` ;
- 9 liens contextuels publics ajoutés depuis le guide `quelle pierre choisir` vers les nouvelles collections ;
- les descriptions factuelles et liens des catégories mères sont enregistrés dans Shopify, mais leurs templates actuels ne rendent pas tous `collection.description`. Ces liens non visibles ne sont pas comptés comme maillage public.

Le lot parallèle a aussi retiré `/pages/promo-bougies`, créé sa redirection `301` vers `/collections/bougies-senteurs` et supprimé son template mort. Cette action est citée comme état externe vérifié, pas attribuée à ce lot.

## Chiffres vérifiés

| Contrôle | Résultat |
|---|---:|
| URL du sitemap | 298 |
| URL du sitemap en erreur HTTP | 0 |
| Produits publics | 215 |
| Collections publiques | 60 |
| Pages publiques | 14 |
| Articles et blogs | 7 |
| Produits actifs sans title SEO explicite | 0 |
| Produits actifs sans meta description explicite | 0 |
| Liens internes vers une `404` | 10 |
| Redirections Shopify exportées | 61 |
| Redirections conformes | 36 |
| Redirections en défaut ou cas spécial | 25 |
| Anciennes URL avec clic sur 28 jours actuellement en brouillon | 35 |
| Anciennes URL avec clic sur 90 jours actuellement en brouillon | 79 |

## P0 : continuité des URL produit

Le lot de retrait du 2026-09-04 contenait 237 produits. Au 2026-09-09 :

- 26 sont actifs ;
- 211 sont en brouillon ;
- parmi 59 produits ayant obtenu au moins un clic sur 28 jours, 35 sont en brouillon ;
- parmi 103 produits ayant obtenu au moins un clic sur 90 jours, 79 sont en brouillon.

Exemple directement lié à la demande : `/products/collier-amethyste` est en brouillon, répond `404`, mais conserve 1 clic et 23 impressions sur 28 jours, puis 2 clics et 70 impressions sur 90 jours.

Décision : appliquer le contrat [Cycle de vie SEO des URL catalogue](../reference/2026-09-09-cycle-de-vie-url-catalogue-seo.md). Le SEO ne doit pas réactiver les 35 fiches par déduction. Chaque produit doit être classé en réassort, successeur exact ou retrait définitif par le propriétaire catalogue.

## P0 : redirections cassées

Sur 61 redirections Shopify :

- 23 sources aboutissent à une destination produit en `404` ;
- 1 source passe par une chaîne de deux redirections ;
- `/llms.txt` répond directement `200` malgré une règle enregistrée vers `/pages/llms-txt`, cas spécial non bloquant ;
- 36 redirections sont conformes.

La plupart des destinations `404` sont des produits en brouillon. Plusieurs ont pourtant un stock interne positif, jusqu'à 10 unités. Leur publication reste une décision catalogue, pas un correctif SEO automatique. Une comparaison par EAN et SKU n'a trouvé aucun successeur actif exact pour ces 23 destinations.

La chaîne à supprimer est :

`/products/sauge-blanche-et-romarin` -> `/products/sauge-blanche-au-romarin-10-cm-3-batons` -> `/products/sauge-blanche-au-romarin-10-cm-1-baton`

La première source doit viser directement la dernière URL.

## P0 : liens internes cassés

Trois articles du Journal contenaient 17 occurrences, réparties sur dix destinations distinctes, dont l'attribut avait été enregistré avec des guillemets échappés. Le navigateur construisait alors une URL relative invalide sous `/blogs/journal/`. Les 17 occurrences sont corrigées et le contrôle public ne trouve plus aucun lien contenant ces guillemets.

| Source | Destinations à corriger |
|---|---|
| `bougie-artisanale-comment-choisir-une-bougie-naturelle-de-qualite` | `/collections/bougies-senteurs`, `/collections/rituels-bien-etre`, `/pages/notre-histoire` |
| `guide-complet-purifier-et-recharger-vos-pierres-naturelles` | `/collections/pierres-mineraux`, `/collections/rituels-bien-etre`, `/products/sauge-blanche` |
| `les-bienfaits-de-l-amethyste-la-pierre-de-la-serenite` | `/collections/bijoux-pierres-naturelles`, `/collections/pierres-mineraux`, `/collections/serenite-sommeil`, `/pages/diagnostic-emotionnel` |

Deux autres liens pointent vers des bougies non publiques :

- `/products/bougie-reconfort-neroli-calcedoine`, depuis la page concours ;
- `/products/bougie-serenite-the-amethyste`, depuis la page concours et `/pages/promo-bougies`.

Ces deux liens doivent être retirés ou remplacés par une destination commerciale réellement disponible. Une redirection vers un produit vague est exclue.

## P1 : défauts éditoriaux confirmés

Les seuils de longueur servent de signal de contrôle, pas de règle mécanique. Les changements prioritaires sont ceux où la page cible mal l'intention, contient une erreur, une promesse non prouvée ou un contenu incohérent.

| URL | Défaut | Décision |
|---|---|---|
| `/collections/par-pierre-amethyste` | title générique `Par pierre Amethyste`, meta longue et promesse de sommeil | title, meta et H1 commerciaux factuels |
| `/collections/par-pierre-jaspe-rouge` | title générique, meta de bénéfice | réécriture factuelle |
| `/collections/bougies-emotionnelles` | title corrompu et collection vide | corriger immédiatement le title, puis décider maintien ou dépublication selon le réassort |
| `/collections/boucles-oreilles` | title trop vague, meta de bénéfice | cibler `boucles d'oreilles en pierres naturelles` |
| `/collections/pendentifs` | title vague, meta de bénéfice | cibler `pendentifs en pierres naturelles` |
| `/collections/protection-energie` | promesse de bouclier et d'énergies repoussées | attribuer la symbolique aux traditions, sans garantie |
| `/collections/serenite-sommeil` | promesse de sommeil réparateur et stress chassé | cadrage symbolique et commercial |
| `/collections/selection-de-karine` | meta absente et H1 sodalite incohérent | corriger l'affectation de template ou consolider |
| `/pages/contact-milaura` | faute `litotérapie`, assertions `expert` et `certifiée` non prouvées | meta de contact factuelle |
| `/pages/notre-histoire` | title long, `pierres certifiées` et `bougies artisanales françaises` non prouvés | réécriture factuelle |
| `/pages/bracelet-amethyste` | page concurrente, ancienne et sans meta | redirection vers la future collection `/collections/bracelets-amethyste` |

Les cinq titles produit signalés comme longs ne sont pas une urgence. Ils décrivent précisément le produit et restent uniques. Leur réduction pourra se faire lors de la revue catalogue, sans modifier les handles.

## P1 : surfaces spéciales

- `/blogs/infos` est volontairement en `noindex,follow`. Sa présence dans le sitemap reste une incohérence faible à supprimer quand Shopify le permet sans casser le blog historique.
- `/pages/llms-txt` est une représentation interne spéciale. La vraie route `/llms.txt` répond `200`. Elle doit être exclue des contrôles HTML ordinaires.
- les doubles H1 de `/pages/decouvrir-ma-bougie` et `/pages/mentions-legales` sont réels mais secondaires face aux défauts d'URL.

## Architecture et maillage

Google explique qu'une architecture e-commerce doit relier menu, catégories, sous-catégories et produits, et qu'il infère l'importance relative d'une page par ses liens internes. Les meilleures cellules commerciales doivent donc être de vraies sous-catégories reliées depuis les collections de type et de pierre, pas des URL orphelines.

Sources :

- [Google, aider Google à comprendre la structure e-commerce](https://developers.google.com/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure)
- [Shopify, collections intelligentes avec métadonnées](https://help.shopify.com/en/manual/custom-data/metafields/collections)
- [Shopify, conditions des collections](https://help.shopify.com/en/manual/products/collections/conditions)

## Ordre d'exécution restant

1. reconstituer un snapshot des URL produit après la revue catalogue en cours ;
2. classer chaque ancienne URL cliquée entre réassort, successeur exact et retrait définitif ;
3. réparer les redirections historiques vers des produits non publics à partir de ces décisions, sans destination approximative ;
4. traiter les surfaces encore signalées par le crawl sitewide du 2026-09-10, notamment la collection vide `bols-chantants` et les pages obsolètes restantes ;
5. ajouter, dans un lot thème séparé et visuellement validé, les liens parent vers les nouvelles collections lorsque les templates spéciaux n'affichent pas `collection.description` ;
6. lancer un crawl lent final quand les mouvements catalogue sont terminés, jusqu'à obtenir `0` lien interne cassé et `0` redirection vers une `404` ;
7. mesurer l'indexation et les requêtes des neuf cellules à J+7, J+28 et J+90.

## Limites de preuve

- le snapshot Shopify est en lecture seule ;
- aucune mutation de stock, prix ou produit n'a été faite ; la seule visibilité modifiée est l'ancienne page concurrente `bracelet-amethyste` ;
- aucune donnée de volume de mots-clés payante n'a été inventée ;
- la sélection commerciale repose sur l'assortiment actif, l'intention observée dans les SERP, les signaux Search Console disponibles et l'absence de collision d'URL ;
- aucun Ads n'a été lancé ; le présent lot ne constitue pas à lui seul un nouveau contrôle PageSpeed ou une validation Ads.
