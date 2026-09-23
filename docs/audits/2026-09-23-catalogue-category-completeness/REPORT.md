# Réaudit catalogue et catégories MilAura après les releases saisonnières

Date du constat : 2026-09-23 08:47 CEST

Base Git contrôlée : `d48f4bbc9178a6868418873e1e8e1b3c0a9a2f7e`

Thème public contrôlé : `190430282075`

Statut : réaudit terminé en lecture seule. Aucun produit, statut, tag, metafield, rattachement, collection, navigation, fichier de thème ou thème Shopify n'a été modifié.

## Verdict actuel

Les releases Automne, Sodalite permanente, Sélection de Karine et Sélections saisonnières sont bien en ligne. Elles ont amélioré les destinations saisonnières et le maillage de Sodalite, mais elles n'ont pas corrigé la distribution taxonomique des produits.

Le delta important est ailleurs : les 7 produits encore `DRAFT` dans l'audit du 2026-09-22 sont maintenant `ACTIVE` et publics. Le handoff de 08:27 CEST est donc déjà dépassé sur ce point précis.

- 787 produits Admin contrôlés : 241 actifs, 531 brouillons et 15 archivés.
- 241 produits actifs présents au sitemap et répondant tous en HTTP 200.
- 70 collections publiques, contre 69 dans l'audit précédent.
- 337 vraies URLs de pages dans les sitemaps, toutes en HTTP 200.
- 22 produits créés depuis le 2026-09-21, désormais tous actifs.
- 41 rattachements actifs manquent dans 17 landings par pierre.
- 9 rattachements actifs manquent dans 4 collections commerciales automatiques.
- 1 exception de taxonomie reste à arbitrer pour la chaîne dorée.
- 46 produits actifs présentent au moins un écart.
- 20 produits actifs ont des pierres déclarées dans `milaura.stone_handles` sans tous les tags `pierre:*` correspondants.
- L'annuaire A à Z contient toujours 49 entrées. Il possède maintenant 10 liens vers les 40 landings pierre, grâce à Sodalite. Trente landings restent non reliées.
- Grenat reste absent de l'annuaire.
- `par-pierre-grenat` affiche 1 produit sur 10 attendus.
- `par-pierre-sodalite` affiche toujours 9 produits sur 12 attendus.
- `Bols chantants` reste la seule collection publique vide.
- Les 2 liens racine en 404 du premier audit sont toujours présents.
- Les 241 PDP actives sont toujours dépourvues de JSON-LD `Product`.

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

Aucune action automatique de retour en brouillon n'est recommandée. Avant toute mutation catalogue, Patrice doit confirmer l'une des deux décisions :

- ces 7 produits restent actifs et rejoignent le lot de distribution P1 ;
- ces 7 produits doivent revenir en brouillon, avec un GO Admin explicite distinct car cela les retire du storefront.

En attendant cette décision, le présent audit les traite selon leur état réel : `ACTIVE`.

## Grenat

Grenat est maintenant le défaut le plus visible.

- La lettre G et l'entrée Grenat sont absentes de l'annuaire A à Z.
- La landing Grenat est publique en HTTP 200, mais ne contient qu'un produit.
- Dix bijoux actifs déclarent le Grenat.
- Neuf bijoux actifs manquent donc dans `par-pierre-grenat`.

Les 9 produits à rattacher sont :

1. Boucles d'oreilles pendantes en grenat rouge 12 mm
2. Boucles d'oreilles puces en grenat rouge 8 mm
3. Bracelet doré en grenat rhodolite 3 mm
4. Bracelet en grenat rouge 4 mm
5. Bracelet en grenat rouge 6 mm
6. Bracelet en grenat rouge 8 mm
7. Bracelet facetté en grenat rouge 4 mm
8. Collier en grenat rouge 4 mm - 45 cm
9. Collier en grenat rouge 6 mm - 45 cm

La collection saisonnière `selection-automne` contient bien 10 produits publics, dont plusieurs Grenat. Elle ne remplace pas la landing taxonomique Grenat et ne réduit pas cette dette.

Entrée A à Z proposée, soumise au GO copywriting de Patrice :

- Lettre : `G`
- Titre : `Grenat`
- Résumé : `Bracelets, colliers et boucles d'oreilles en grenat.`
- Lien : `shopify://collections/par-pierre-grenat`
- Action : `Voir les bijoux`

## Sodalite

Le volet éditorial est maintenant correct :

- Sodalite est permanente et publique ;
- l'annuaire A à Z pointe vers `par-pierre-sodalite` ;
- la page ne contient plus de mention saisonnière Rentrée ou Septembre 2026 ;
- les médias `landing-v2` conservés sont servis ;
- aucun ancien template Karine ni média Sodalite supprimé ne doit être restauré.

Le volet catalogue reste incomplet. La landing contient 9 produits uniques sur 12 attendus. Les 3 rattachements encore manquants sont :

1. Bracelet doré en sodalite 6 mm
2. Bracelet doré en sodalite, perles de 6 mm
3. Collier argenté en sodalite à pampilles

## Les 41 rattachements pierre manquants

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

La liste exhaustive avec produit, handle, URL produit et URL collection est dans `active-product-category-gaps.csv`.

### Mode de correction Shopify

Douze des 17 landings concernées sont confirmées comme collections manuelles par l'API Admin. Elles représentent 32 des 41 rattachements actuels.

Les 5 landings publiques suivantes ne sont pas exposées par le jeton Admin utilisé. Elles représentent 9 rattachements et doivent être inspectées dans l'Admin avant toute écriture :

- Aigue-marine
- Aventurine
- Lapis-lazuli
- Oeil de tigre
- Quartz rose

Cette limite API n'est pas une preuve que les collections sont absentes ou supprimées. Elles sont publiques et répondent en HTTP 200.

## Défaut actif Howlite et Pierre de lave

`Bracelet doré en howlite et pierre de lave 6 mm` est maintenant actif. Ses données sont incohérentes :

- le titre mentionne Howlite et Pierre de lave ;
- `milaura.materials` contient `howlite` et `pierre-de-lave` ;
- `milaura.stone_handles` ne contient que `howlite` ;
- le seul tag pierre est `pierre:howlite` ;
- le produit n'est ni dans la landing Howlite, ni dans la landing Pierre de lave.

Après validation de la vérité produit, la correction complète doit ajouter `pierre-de-lave` au metafield et au tag, puis rattacher le produit aux deux landings. Cela ajoute un rattachement Pierre de lave implicite qui n'apparaît pas dans le total actuel de 41, car le metafield erroné le masque.

## Collections commerciales automatiques

Neuf écarts restent ouverts :

- `bracelets-aigue-marine` : 1
- `bracelets-cornaline` : 1
- `bracelets-lapis-lazuli` : 1
- `bracelets-onyx` : 6

Ces quatre collections sont automatiques avec une règle `type:bracelet` ET `pierre:<pierre>`. La correction doit donc passer par les tags produits, pas par un rattachement manuel forcé.

Vingt produits actifs présentent au moins un décalage entre `stone_handles` et les tags `pierre:*`. Les 9 écarts commerciaux sont la conséquence directement visible d'une partie de ces décalages. Les 20 lignes doivent être relues sur la base de la composition produit avant ajout de tags.

## Pierres de A à Z

État public confirmé sur `/pages/bijoux-par-pierre?view=milaura-guide-pierres` :

- 49 entrées ;
- 10 entrées reliées à une collection ;
- Sodalite reliée et fonctionnelle ;
- Grenat absent ;
- lettres présentes : A, B, C, D, E, F, H, J, L, M, O, P, Q, R, S, T, U, Y ;
- lettres utiles encore absentes pour le catalogue actif : G, N et Z ;
- 30 des 40 landings pierre publiques ne sont pas reliées.

Le résultat parfait n'est pas d'ajouter seulement Grenat. Chaque landing pierre existante et utile doit être accessible depuis A à Z. Le fichier `guide-a-z-entries.csv` permet de distinguer les entrées existantes à relier des nouvelles entrées à créer.

Nacre et Zoïsite ont des produits actifs mais aucune landing dédiée et aucune entrée A à Z. Elles doivent être traitées dans le lot de taxonomie, sans créer automatiquement des pages minces.

## Architecture saisonnière vérifiée

- `/collections/selection-automne` : HTTP 200, 10 produits publics, présente au sitemap.
- `/pages/selections-saisonnieres` : HTTP 200, présente au sitemap, reliée depuis le footer.
- `/collections/selection-de-karine` : HTTP 200, 9 produits publics.
- Home : CTA Automne vers `selection-automne` et section `La sélection de Karine` vers `selection-de-karine`.
- Menu Cadeaux : `Sélection de Karine` sur desktop et mobile.

Ces surfaces sont conformes au contrat saisonnier et ne doivent pas être utilisées comme substituts aux landings pierre.

## Défauts techniques toujours ouverts

### Deux liens internes en 404

- `/bijoux-par-pierre`, liée depuis `Entretien des pierres` et `Trouver votre pierre`.
- `/diagnostic-emotionnel`, liée depuis `Trouver votre pierre`.

Les routes correctes sont `/pages/bijoux-par-pierre` et `/pages/diagnostic-emotionnel`.

Fichiers concernés :

- `sections/milaura-owned-stone-care.liquid`
- `sections/milaura-owned-stone-selector.liquid`

### JSON-LD Product absent

Les 241 pages produit actives répondent en HTTP 200, sont présentes au sitemap, mais aucune ne rend de schéma `Product`.

Le correctif doit être isolé dans un lot SEO technique sur `sections/milaura-product-hero-v2.liquid`, avec exactement un schéma Product par PDP et sans duplication dans les templates.

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

## Lot P1 borné proposé

### Gate 0 : statut des 7 produits

Décision Patrice requise avant mutation : conserver les 7 produits actifs ou les repasser en brouillon. Aucun autre lot ne doit changer leur statut par effet de bord.

### P1-A : vérité produit et distribution Admin

Périmètre : produits, metafields, tags et rattachements uniquement. Aucun fichier thème.

1. Exporter un manifeste idempotent avant écriture avec produit, état actuel, état cible et raison.
2. Corriger Howlite + Pierre de lave après contrôle de la composition.
3. Ajouter les 32 rattachements aux 12 landings manuelles confirmées.
4. Inspecter dans l'Admin les 5 landings non exposées par l'API, puis traiter leurs 9 rattachements selon leur vrai mode.
5. Réconcilier les 20 écarts `stone_handles` et tags après contrôle produit.
6. Laisser les 4 collections commerciales automatiques se recalculer depuis les tags.
7. Ne modifier aucun statut produit pendant ce lot.
8. Réextraire Admin et storefront. Cible : 0 rattachement pierre manquant et 0 rattachement commercial manquant, hors arbitrages explicitement documentés.

Gate : `GO ADMIN CATALOGUE P1` explicite avant toute écriture.

### P1-B : annuaire A à Z complet

Périmètre : `templates/page.milaura-guide-pierres.json` uniquement, plus son checkpoint.

1. Ajouter G et Grenat.
2. Relier toutes les entrées existantes qui possèdent déjà une landing publique cohérente.
3. Ajouter les entrées manquantes nécessaires pour que les 40 landings pierre soient accessibles.
4. Conserver Sodalite telle qu'elle est désormais publiée.
5. Ne pas restaurer l'ancien template Karine ni les anciens médias Sodalite.
6. Passer le copywriting par validation Patrice, puis preview privée mobile et bureau.

Gate : PASS technique, GO copywriting/visuel Patrice, puis GO live distinct.

### P1-C : réparer les deux 404 internes

Périmètre : les deux sections identifiées uniquement. Corriger les URLs racine, exécuter Theme Check, crawl privé, push ciblé et pullback.

### P1-D : restaurer le schéma Product

Périmètre technique séparé. Ajouter un JSON-LD Product unique sur les PDP V2, tester plusieurs familles produit, prix, disponibilité, variantes et données visibles, puis valider avec le test des résultats enrichis.

## Polish complet après P1

### P2-A : cohérence des landings

- Décider le périmètre Améthyste, Jaspe et Jaspe rouge.
- Décider le traitement des variantes Aventurine.
- Traiter les 8 pierres actives sans landing sans créer de pages SEO minces.
- Décider le cas de la chaîne dorée.
- Retirer les compteurs `piece_count` dormants ou les rendre dynamiques.

### P2-B : collection vide

- Alimenter `Bols chantants` avec une offre réelle, ou la dépublier proprement.
- Vérifier ensuite sitemap, navigation, liens et indexabilité.

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

- `active-product-category-gaps.csv` : 51 écarts actuels, dont 41 pierre, 9 commerciaux et 1 arbitrage.
- `new-products.csv` : les 22 nouveaux produits, tous actifs au moment du constat.
- `stone-landing-matrix.csv` : les 40 landings et leur couverture réelle.
- `guide-a-z-entries.csv` : les 49 entrées et leurs 10 liens actuels.
- `public-collections.csv` : les 70 collections publiques et leurs produits visibles.
- `stone-metafield-tag-gaps.csv` : les 20 produits avec des tags pierre incomplets.

## Méthode et limites

Sources croisées le 2026-09-23 : Shopify Admin GraphQL en lecture seule, règles de collections, endpoints publics des collections, sitemaps, crawl HTTP, HTML live, templates de `d48f4bbc`, rapport du 2026-09-22, handoff post-saisonnier et checkpoints live.

L'API Admin expose 64 collections alors que le storefront en expose 70. Les 70 destinations publiques ont été contrôlées indépendamment. Les cinq landings P1 non exposées par ce jeton doivent être inspectées dans l'Admin avant toute mutation.

Le présent rapport n'autorise aucune écriture Admin, activation, désactivation, publication, déploiement ou modification de la session de polish visuel.
