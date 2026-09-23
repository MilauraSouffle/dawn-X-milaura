# Réaudit catalogue et catégories MilAura après les releases saisonnières

Date du constat : 2026-09-23 08:47 CEST

Base Git contrôlée : `d48f4bbc9178a6868418873e1e8e1b3c0a9a2f7e`

Thème public contrôlé : `190430282075`

Mise à jour post-P1 : 2026-09-23 11:17 CEST.

Le lot Admin autorisé a été exécuté. Le P1 thème reste validé uniquement sur le thème privé `200259043675`. Le thème live `190430282075` n'a pas été modifié.

## Verdict actuel

La distribution catalogue P1 est corrigée dans Shopify Admin et déjà reflétée sur le storefront. Les 7 produits signalés à tort comme brouillons dans le handoff restent `ACTIVE`, conformément à la décision de Patrice.

- 787 produits Admin contrôlés : 241 actifs, 531 brouillons et 15 archivés.
- 241 produits actifs présents au sitemap et répondant tous en HTTP 200.
- 70 collections publiques, contre 69 dans l'audit précédent.
- 337 vraies URLs de pages dans les sitemaps, toutes en HTTP 200.
- 22 produits créés depuis le 2026-09-21, désormais tous actifs.
- 0 rattachement actif manque dans les 40 landings par pierre auditées.
- 0 rattachement actif manque dans les 4 collections commerciales automatiques ciblées.
- 1 exception de taxonomie reste à arbitrer pour la chaîne dorée.
- 50 des 51 écarts initiaux sont résolus. Le seul restant est l'arbitrage de la chaîne dorée.
- 0 produit actif présente encore un tag `pierre:*` manquant par rapport à `milaura.stone_handles`.
- Le storefront public affiche Grenat à 10 produits et Sodalite à 12 produits.
- Le bracelet Howlite et Pierre de lave appartient aux deux landings, porte les deux tags et conserve les deux valeurs dans `milaura.stone_handles`.
- L'annuaire A à Z du thème privé contient 50 entrées et relie les 40 landings pierre, dont Grenat sous G. Le live conserve encore l'ancienne version tant que le GO live distinct n'est pas donné.
- `Bols chantants` reste la seule collection publique vide.
- Les 2 liens racine en 404 sont corrigés sur le thème privé uniquement.
- Le JSON-LD `Product` unique est ajouté et validé sur le thème privé uniquement. Les 241 PDP live restent inchangées tant que ce lot thème n'est pas déployé.

## Résultat du lot Admin P1

- 42 ajouts de rattachement dans 18 collections manuelles.
- 21 produits balisés, sans suppression de tag.
- 1 metafield modifié : ajout de `pierre-de-lave` à `milaura.stone_handles` en conservant `howlite`.
- 0 changement de statut, prix, stock, publication ou média.
- 241 produits actifs publics après écriture.
- 70 collections publiques réextraites. Les 63 endpoints JSON accessibles ont été lus directement et les 7 réponses protégées par Cloudflare ont été relues dans un vrai navigateur, sans reprise d'une donnée périmée.
- 6 matrices régénérées. Elles indiquent 0 manque landing pierre, 0 manque commercial et 0 divergence metafield-tag.

## Delta par rapport au rapport du 2026-09-22

| Indicateur | 2026-09-22 | 2026-09-23 | Lecture |
| --- | ---: | ---: | --- |
| Produits actifs | 234 | 241 | Les 7 anciens brouillons ont été publiés |
| Produits brouillons | 538 | 531 | Moins 7 |
| Bijoux actifs structurés | 163 | 170 | Plus 7 |
| Collections publiques | 69 | 70 | `selection-automne` ajoutée |
| Collections visibles par le jeton Admin | 63 | 64 | Une collection supplémentaire |
| URLs de pages dans les sitemaps | 328 | 337 | 7 produits, 1 collection et 1 page supplémentaires |
| Rattachements landing pierre manquants | 34 | 41 | Plus 7 liés aux anciens brouillons devenus actifs |
| Rattachements commerciaux manquants | 9 | 9 | Inchangé |
| Entrées A à Z | 49 | 49 | Inchangé |
| Liens A à Z vers une landing | 9 | 10 | Sodalite corrigée |
| Landings existantes non reliées depuis A à Z | 31 | 30 | Sodalite retirée du backlog |
| PDP sans schéma Product | 234 | 241 | Régression toujours globale |
| Liens internes 404 confirmés | 2 | 2 | Inchangé |

## Les 7 anciens brouillons sont publics

Ces produits ont été publiés entre 19:45 et 19:47 CEST le 2026-09-22. Ils répondent maintenant en HTTP 200 et apparaissent dans le sitemap.

1. Bracelet doré en howlite et pierre de lave 6 mm
2. Bracelet doré en quartz rose 8 mm
3. Bracelet argenté en labradorite 6 mm
4. Bracelet doré en howlite blanche 6 mm
5. Bracelet doré en obsidienne noire 6 mm
6. Bracelet en grenat rouge 8 mm
7. Boucles d'oreilles puces en grenat rouge 8 mm

Patrice a confirmé que ces 7 produits restent actifs. Le lot P1 n'a modifié aucun statut et les 7 URLs restent présentes dans l'extraction publique des 241 produits actifs.

## Grenat

- La landing Grenat affiche maintenant les 10 bijoux actifs attendus.
- Les 9 rattachements manquants ont été ajoutés.
- L'entrée G / Grenat et son lien vers `par-pierre-grenat` sont prêts sur le thème privé.
- La collection saisonnière `selection-automne` reste distincte et contient toujours 10 produits publics.

## Sodalite

- Sodalite reste permanente et publique.
- La landing affiche maintenant les 12 produits actifs attendus.
- Les 3 rattachements manquants ont été ajoutés.
- Aucun ancien template Karine ni média Sodalite supprimé n'a été restauré.

## Les 41 rattachements pierre initiaux

| Landing | Manquants |
| --- | ---: |
| Aigue-marine | 1 |
| Aventurine | 3 |
| Chrysocolle | 1 |
| Cornaline | 3 |
| Cristal de roche | 4 |
| Grenat | 9 |
| Howlite | 2 |
| Labradorite | 5 |
| Lapis-lazuli | 2 |
| Obsidienne | 1 |
| Oeil de tigre | 2 |
| Onyx | 1 |
| Pierre de lune | 1 |
| Quartz rose | 1 |
| Rhodonite | 1 |
| Sodalite | 3 |
| Tourmaline | 1 |

Cette table décrit le baseline de 08:47 CEST. Les 41 rattachements ont été ajoutés. La matrice actuelle indique 0 produit attendu manquant dans les 40 landings auditées.

### Mode de correction Shopify

Les 5 landings qui n'étaient pas exposées par le jeton Admin initial ont été retrouvées et confirmées manuelles dans l'interface Shopify avant écriture :

- Aigue-marine
- Aventurine
- Lapis-lazuli
- Oeil de tigre
- Quartz rose

## Howlite et Pierre de lave

Le défaut est résolu sans perte de donnée :

- `milaura.stone_handles` contient `howlite` et `pierre-de-lave` ;
- les tags contiennent `pierre:howlite` et `pierre:pierre-de-lave` ;
- le produit appartient aux landings Howlite et Pierre de lave ;
- son statut reste `ACTIVE`.

## Collections commerciales automatiques

Les 9 écarts initiaux sont résolus par les tags produits. Les collections `bracelets-aigue-marine`, `bracelets-cornaline`, `bracelets-lapis-lazuli` et `bracelets-onyx` se sont recalculées et aucun manque ne reste dans la matrice.

## Pierres de A à Z

État live actuel sur `/pages/bijoux-par-pierre?view=milaura-guide-pierres` :

- 49 entrées ;
- 10 entrées reliées à une collection ;
- Sodalite reliée et fonctionnelle ;
- Grenat absent ;
- lettres présentes : A, B, C, D, E, F, H, J, L, M, O, P, Q, R, S, T, U, Y ;
- lettres utiles encore absentes pour le catalogue actif : G, N et Z ;
- 30 des 40 landings pierre publiques ne sont pas reliées.

État du thème privé `200259043675` : 50 entrées, Grenat sous G et 40 liens sur 40 landings publiques. Le fichier `guide-a-z-entries.csv` représente ce nouvel état prêt à publier.

Nacre et Zoïsite ont des produits actifs mais aucune landing dédiée et aucune entrée A à Z. Elles doivent être traitées dans le lot de taxonomie, sans créer automatiquement des pages minces.

## Architecture saisonnière vérifiée

- `/collections/selection-automne` : HTTP 200, 10 produits publics, présente au sitemap.
- `/pages/selections-saisonnieres` : HTTP 200, présente au sitemap, reliée depuis le footer.
- `/collections/selection-de-karine` : HTTP 200, 9 produits publics.
- Home : CTA Automne vers `selection-automne` et section `La sélection de Karine` vers `selection-de-karine`.
- Menu Cadeaux : `Sélection de Karine` sur desktop et mobile.

Ces surfaces sont conformes au contrat saisonnier et ne doivent pas être utilisées comme substituts aux landings pierre.

## Défauts techniques corrigés en preview, encore ouverts sur le live

### Deux liens internes en 404

- `/bijoux-par-pierre`, liée depuis `Entretien des pierres` et `Trouver votre pierre`.
- `/diagnostic-emotionnel`, liée depuis `Trouver votre pierre`.

Les routes correctes sont `/pages/bijoux-par-pierre` et `/pages/diagnostic-emotionnel`.

Fichiers concernés :

- `sections/milaura-owned-stone-care.liquid`
- `sections/milaura-owned-stone-selector.liquid`

### JSON-LD Product absent du live

Les 241 pages produit actives répondent en HTTP 200, sont présentes au sitemap, mais aucune ne rend de schéma `Product`.

Le correctif est isolé dans `sections/milaura-product-hero-v2.liquid` sur le thème privé, avec exactement un schéma Product par PDP et sans duplication dans les templates. Sa publication reste soumise au GO live distinct.

### Collection vide

`Bols chantants` reste publique, indexable, présente au sitemap et vide. Il faut choisir entre une offre réelle à publier ou la dépublication de cette destination. Aucun faux produit ni contenu de remplissage ne doit être ajouté.

## Cas de taxonomie à arbitrer séparément

Les contaminations du premier audit restent inchangées :

- Amazonite contient un bracelet Sodalite et pierres bleues sans Amazonite déclarée.
- Améthyste contient 7 produits non bijoux malgré un titre `Bijoux en améthyste`.
- Aventurine mélange un produit Aventurine rouge avec une page éditoriale centrée sur le vert.
- Jaspe générique contient 2 bijoux Jaspe rouge alors qu'une landing Jaspe rouge existe.
- Jaspe rouge contient 2 produits non bijoux.
- La chaîne dorée est classée `bijou` mais absente de la collection générale bijoux.

Ces points ne doivent pas être corrigés par suppression automatique. Ils exigent une décision de périmètre : page bijoux stricte ou univers pierre plus large.

Huit pierres actives n'ont toujours pas de landing dédiée : Aventurine bleue, Aventurine rouge, Nacre, Pyrite, Quartz fumé, Séraphinite, Spinelle et Zoïsite.

## État d'exécution du lot P1

### Gate 0 : statut des 7 produits

Décision Patrice du 2026-09-23 : conserver les 7 produits `ACTIVE`. Le gate est levé. Aucun lot ne doit changer leur statut par effet de bord.

### P1-A : vérité produit et distribution Admin - exécuté et vérifié

Périmètre : produits, metafields, tags et rattachements uniquement. Aucun fichier thème.

1. Exporter un manifeste idempotent avant écriture avec produit, état actuel, état cible et raison.
2. Corriger Howlite + Pierre de lave après contrôle de la composition.
3. Ajouter les 32 rattachements aux 12 landings manuelles confirmées.
4. Inspecter dans l'Admin les 5 landings non exposées par l'API, puis traiter leurs 9 rattachements selon leur vrai mode.
5. Réconcilier les 20 écarts `stone_handles` et tags après contrôle produit.
6. Laisser les 4 collections commerciales automatiques se recalculer depuis les tags.
7. Ne modifier aucun statut produit pendant ce lot.
8. Réextraire Admin et storefront. Cible : 0 rattachement pierre manquant et 0 rattachement commercial manquant, hors arbitrages explicitement documentés.

Résultat : 42 rattachements ajoutés, 21 produits balisés, 1 metafield complété, 0 statut modifié, 0 manque pierre et 0 manque commercial.

### P1-B : annuaire A à Z complet - PASS preview

Périmètre : `templates/page.milaura-guide-pierres.json` uniquement, plus son checkpoint.

1. Ajouter G et Grenat.
2. Relier toutes les entrées existantes qui possèdent déjà une landing publique cohérente.
3. Ajouter les entrées manquantes nécessaires pour que les 40 landings pierre soient accessibles.
4. Conserver Sodalite telle qu'elle est désormais publiée.
5. Ne pas restaurer l'ancien template Karine ni les anciens médias Sodalite.
6. Passer le copywriting par validation Patrice, puis preview privée mobile et bureau.

État : PASS technique sur le thème privé `200259043675`. Le GO live distinct reste requis.

### P1-C : réparer les deux 404 internes - PASS preview

Les deux URLs sont corrigées et relues identiques sur le thème privé. Le live reste inchangé.

### P1-D : restaurer le schéma Product - PASS preview

Un JSON-LD `Product` unique est rendu sur les six familles PDP testées dans le thème privé. Le live reste inchangé.

## Polish complet après P1

### P2-A : cohérence des landings

- Décider le périmètre Améthyste, Jaspe et Jaspe rouge.
- Décider le traitement des variantes Aventurine.
- Traiter les 8 pierres actives sans landing sans créer de pages SEO minces.
- Décider le cas de la chaîne dorée.
- Retirer les compteurs `piece_count` dormants ou les rendre dynamiques.

### P2-B : collection vide

- Décision Patrice du 2026-09-23 : ne pas alimenter `Bols chantants`; Patrice supprimera lui-même cette destination, faute de stock et de réassort prévu.
- Après sa suppression, vérifier sitemap, navigation, liens et indexabilité.

### P2-C : QA finale de distribution et accessibilité

1. Réextraire les produits, metafields, tags et collections.
2. Recalculer les six matrices.
3. Crawler le sitemap complet et les liens internes hors sitemap.
4. Vérifier Grenat, Sodalite, A à Z, Bijoux par pierre, Sélection de Karine, Automne et Sélections saisonnières sur mobile et bureau.
5. Vérifier clavier, focus, liens, H1, canonical, indexabilité et absence de débordement.
6. Contrôler une PDP de chaque famille pour le schéma Product.
7. Garder séparés PASS technique, GO copywriting/visuel Patrice, GO Admin et GO live.

## Critères de sortie pour un site parfaitement distribué

- 0 produit actif absent de sa catégorie de type.
- 0 produit actif absent de chaque landing correspondant à ses pierres vérifiées.
- 0 collection automatique manquée à cause d'un tag absent.
- 0 divergence non justifiée entre `stone_handles`, matériaux et tags.
- 40 landings pierre accessibles depuis A à Z ou décision documentée de retrait.
- Grenat présent sous G et landing complète.
- Sodalite complète à 12 produits si les 12 restent actifs.
- 0 lien interne 404.
- 0 collection publique vide non intentionnelle.
- exactement 1 schéma Product valide par PDP.
- 100 % des produits actifs au sitemap et en HTTP 200.
- aucune restauration des assets Sodalite ou du template Karine supprimés.
- aucune interférence avec la session de polish visuel concurrente.

## Fichiers de preuve

- `active-product-category-gaps.csv` : 1 arbitrage restant, la chaîne dorée.
- `new-products.csv` : les 22 nouveaux produits, tous actifs au moment du constat.
- `stone-landing-matrix.csv` : les 40 landings et leur couverture réelle.
- `guide-a-z-entries.csv` : les 50 entrées et les 40 liens du thème privé prêt à publier.
- `public-collections.csv` : les 70 collections publiques et leurs produits visibles.
- `stone-metafield-tag-gaps.csv` : en-tête seul, donc 0 divergence restante.
- `POST-P1-VERIFICATION.json` : synthèse chiffrée du lot et séparation preview/live.
- `storefront-browser-memberships.json` : les 7 collections relues dans le navigateur lorsque Cloudflare a protégé leurs endpoints JSON.

## Méthode et limites

Sources croisées le 2026-09-23 : snapshot Admin GraphQL de 08:47 CEST, inspection et écriture contrôlée dans Shopify Admin, export public frais des 241 produits, endpoints publics frais de 63 collections, lecture navigateur fraîche des 7 collections protégées par Cloudflare, HTML live, thème privé `200259043675`, rapport du 2026-09-22 et handoff post-saisonnier.

L'API Admin initiale expose 64 collections alors que le storefront en expose 70. Les 70 destinations publiques ont été contrôlées indépendamment. Les cinq landings P1 non exposées par ce jeton ont été inspectées dans l'Admin avant mutation et confirmées manuelles.

Le GO Admin reçu couvre le lot désormais exécuté. Il n'autorise pas le déploiement du thème privé sur le live, la suppression de `Bols chantants` ni les arbitrages P2.
