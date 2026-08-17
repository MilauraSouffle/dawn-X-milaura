# MilAura - Handoff Ruban V3

Date de mise à jour : 2026-08-17 09:10 CEST

## Objet de la reprise

Reprendre Ruban V3 sans confondre le système V2 réellement en production, les données Shopify V1 réellement actives et la nouvelle direction commerciale qui reste à construire.

Ce handoff ne constitue pas une implémentation. Le 2026-08-17, aucun fichier thème et aucune donnée Shopify n'ont été modifiés. Seuls le checkpoint, ce handoff, le snapshot `docs/project-state.md` et la note Obsidian ont été autorisés.

## Décision Patrice du 2026-08-17

Le nouveau cap commercial est ferme :

1. Une PDP montre une seule proposition cross-sell visible.
2. Cette proposition doit former une parure, un ensemble ou un matching concret et explicable avec le produit consulté.
3. Le produit recommandé doit être présenté en vidéo.
4. Higgsfield est retenu pour produire les vidéos du Ruban.
5. Grok est exclu de ce workflow, car sa fidélité produit n'est pas assez garantie.
6. Aucun produit visuellement transformé ne peut être accepté.

La fidélité produit impose au minimum le respect de la pierre, de la couleur, du nombre de perles, de la monture, du fermoir, du métal, des proportions et des détails identifiants.

Cette décision est un GO commercial de cadrage. Elle ne vaut pas GO de production Higgsfield, de création de metafields, de mutation Search & Discovery, de code, de preview, de validation visuelle ou de live.

## État Git vérifié

- Dépôt canonique : `/Users/paesano/Documents/MilAura website/dawn-X-milaura`.
- Branche canonique : `codex/milaura-integration`.
- Vérification réseau : `git fetch origin codex/milaura-integration` exécuté le 2026-08-17.
- HEAD local avant réservation : `97a90f79f5b264922b52f157a120cb291502e2dc`.
- HEAD distant après fetch : `97a90f79f5b264922b52f157a120cb291502e2dc`.
- Checkout canonique propre avant réservation.
- Réservation du lot documentaire : `9bdc52b4abcbd788df83ecaac0bc9fda5873b235`.
- Branche de ce lot : `codex/milaura-ruban-v3-handoff-20260817`.
- Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/ruban-v3-handoff-20260817`.
- Base : `97a90f79f5b264922b52f157a120cb291502e2dc`.
- `docs/workstreams.md` appartient au master et ne doit pas être repris depuis cette branche.

Worktree fonctionnel parallèle au contrôle :

- Atelier des émotions : `/Users/paesano/Documents/MilAura website/_worktrees/atelier-emotions-20260816` ;
- branche `codex/milaura-atelier-emotions-20260816` ;
- propre et alignée sur `origin/codex/milaura-atelier-emotions-20260816` ;
- entièrement hors périmètre Ruban V3.

## Commits et branches Ruban concernés

| Objet | Branche ou commit source | Intégration ou clôture |
| --- | --- | --- |
| Moteur de recommandations partagé | `codex/milaura-recommendation-system-20260814`, `413596f7` | `f89f57b5` |
| Polish interactions et médias | `codex/milaura-ruban-polish-20260815`, `09fb3fce` | présent dans le canonique |
| Ruban de parure V2 | `codex/milaura-ruban-parure-v2-20260816`, `222ef44f` | `469212c0`, docs `22ef7ef6` |
| Matrices commerciales V1 | `codex/milaura-ruban-matrices-commerciales-20260816`, `9b006b25` | `e17e25be`, clôture `cf5ca421` |
| Mobile root overflow | `codex/milaura-mobile-root-overflow-20260816`, `be96a5d1`, `ffd46c58` | clôture `97a90f79` |
| Réservation du handoff V3 | `codex/milaura-integration` | `9bdc52b4` |

Les branches Ruban V2, matrices, polish, système de recommandation et mobile overflow sont conservées localement et sur `origin` avec les mêmes tips vérifiés.

## Ce qui est actuellement intégré et live

Ruban de parure V2 est live sur le thème `190430282075`. Ruban V3 ne l'est pas.

Fonctions V2 en production :

- requêtes Shopify Product Recommendations avec `intent=complementary` ;
- source produit courant ;
- compléments des articles panier pondérés ;
- historique récent comme départage après consentement ;
- exclusion du produit courant, des articles panier, des indisponibles et des doublons ;
- classement des candidats validés ;
- ajout panier ;
- événements `milaura:recommendation_impression`, `milaura:recommendation_click` et `milaura:recommendation_add` ;
- rail PDP horizontal, clavier, compteur et progression quand plusieurs cartes existent ;
- masquage de la sticky pendant la traversée du Ruban ;
- média `milaura.recommendation_cutout` quand il existe, fallback catalogue sinon.

Fichiers V2 live :

1. `assets/milaura-recommendations.css`
2. `assets/milaura-recommendations.js`
3. `sections/milaura-recommendation-fragment.liquid`
4. `sections/milaura-recommendations.liquid`
5. `snippets/milaura-card-product.liquid`
6. `snippets/milaura-recommendation-card.liquid`
7. `snippets/milaura-recommendation-shell.liquid`
8. `templates/product.json`
9. `templates/product.milaura-produit.json`

Shopify CLI a confirmé le 2026-08-17 :

- `dawn-X-milaura/main` ;
- rôle live ;
- ID `190430282075`.

Un pullback frais des neuf fichiers a été effectué dans `/private/tmp/milaura-ruban-v3-handoff-pullback-20260817.YmegJy`. Résultat : 9/9 identiques au canonique avec `cmp`.

Le thème de développement `199421952347` existe encore et avait servi à Ruban V2. Il n'est pas attribué à V3. Le thème privé `200007713115` appartient à Atelier des émotions et reste interdit à Ruban V3.

## Correction mobile liée mais distincte

Le bug de pan horizontal mobile a été corrigé séparément dans `assets/milaura-product-experience.css` :

- commit fonctionnel `be96a5d1` ;
- checkpoint `ffd46c58` ;
- clôture master `97a90f79` ;
- push live ciblé sur `190430282075` ;
- pullback SHA-256 `359fc5986dcc8ddfb0fef6779b51704c32eb88ac9850662e985ee2df7b7729f1` ;
- QA publique 360, 390 et 430 px : racine égale au viewport et `scrollX = 0` ;
- rail Services interne conservé à 1 470 px et scrollable.

Ce correctif fonctionne et ne doit pas être rouvert sans régression reproductible.

## Matrices Shopify actives

Search & Discovery contient actuellement 9 sources prouvées, réparties en quatre familles et 12 placements dirigés.

| Source | Compléments actifs dans l'ordre public |
| --- | --- |
| `10557516644699` Collier obsidienne noire boho doré | `10357431206235`, `10357456601435` |
| `10357431206235` Boucles obsidienne noire 8 mm | `10557516644699`, `10357456601435` |
| `10357456601435` Bracelet obsidienne flocon 6 mm | `10557516644699`, `10357431206235` |
| `10637459095899` Bracelet doré aigue-marine | `10637436584283` |
| `10637436584283` Boucles dorées aigue-marine | `10637459095899` |
| `10637436977499` Bague argent 925 améthyste | `10637436715355` |
| `10637436715355` Collier argenté améthyste | `10637436977499` |
| `10557523099995` Collier aventurine verte boho doré | `10557518381403` |
| `10557518381403` Bracelet aventurine verte Halo doré | `10557523099995` |

Vérification publique du 2026-08-17 : 9/9 endpoints `recommendations/products.json?intent=complementary` exacts, sans produit supplémentaire.

## Metafields Shopify actifs

Définition active et documentée :

- `milaura.recommendation_cutout` ;
- type fichier image ;
- accès Storefront actif ;
- identifiant admin `448166265179`.

Valeurs actives :

| Produit | Fichier exact |
| --- | --- |
| `10357431206235` | `milaura-reco-cutout-obsidienne-earrings-v1.png` |
| `10637459095899` | `milaura-ribbon-cutout-aigue-marine-bracelet-v1.png` |
| `10637436584283` | `milaura-ribbon-cutout-aigue-marine-earrings-v1.png` |
| `10637436977499` | `milaura-ribbon-cutout-amethyste-ring-v1.png` |
| `10637436715355` | `milaura-ribbon-cutout-amethyste-necklace-v1.png` |

Vérification publique du 2026-08-17 : 5/5 fragments servent le fichier attendu depuis `/cdn/shop/files/`.

Aucun metafield V3 n'a été créé par ce chantier. Les noms suivants sont seulement des propositions de contrat :

- `milaura.recommendation_video` ;
- `milaura.cross_sell_reason` ;
- `milaura.cross_sell_video_override`.

## Mesures du catalogue et limites de la preuve

Le endpoint public `products.json` a retourné le 2026-08-17 :

- 250 produits disponibles sur la première page ;
- 18 produits disponibles sur la deuxième ;
- aucun produit sur la troisième ;
- total observé : 268 produits publics et disponibles au sens storefront.

La couverture source directe V1 est donc `9 / 268`, environ 3,4 %.

Cette mesure ne prouve pas :

- que les 268 produits doivent tous recevoir une association ;
- le stock physique ;
- la marge ou la contribution ;
- les droits média ;
- l'existence d'une correspondance honnête ;
- la présence d'une vidéo fidèle.

## Ce qui est seulement recommandé ou estimé

- Construire une matrice V3 pour l'ensemble réellement éligible. Aucune des 268 associations n'existe aujourd'hui.
- Afficher une seule proposition principale. L'éventuel secours invisible pour rupture ou article déjà au panier reste une recommandation à valider.
- Regrouper les sources autour de produits ambassadeurs pour éviter une vidéo par PDP.
- Produire environ 25 à 40 vidéos est un ordre de grandeur, pas un objectif validé.
- Créer d'abord un petit lot de direction représentatif avec Higgsfield est recommandé, mais aucun GO de production n'est enregistré.
- Utiliser une vidéo produit dédiée, une raison source-spécifique et un override éventuel pour les parures premium reste un contrat proposé.
- Transformer le rail PDP multi-cartes en scène unique verticale reste à concevoir, coder et valider.
- Déclencher la vidéo muette quand la scène entre dans le viewport, la mettre en pause hors écran et conserver un poster pour reduced motion ou économie de données reste à implémenter.

## GO reçus

- 2026-08-16 : GO visuel Ruban V2.
- 2026-08-16 : GO live Ruban V2.
- 2026-08-16 : autorisation de nettoyer proprement l'ancienne section remplacée.
- 2026-08-16 : GO Shopify exact pour 9 sources Search & Discovery, 12 placements et 5 valeurs `milaura.recommendation_cutout`.
- 2026-08-16 : GO live ciblé pour le correctif mobile root overflow.
- 2026-08-17 : direction commerciale Ruban V3, une seule proposition visible, vidéo obligatoire, Higgsfield retenu, Grok exclu, aucune transformation produit acceptable.
- 2026-08-17 : GO documentaire limité au checkpoint, à `docs/project-state.md`, à ce handoff et à la note Obsidian.

## Autorisations manquantes

1. Validation de l'ensemble exact des produits éligibles.
2. Validation de la matrice exacte source, proposition principale, raison et secours éventuel.
3. GO de production Higgsfield avec sources, volume, budget ou crédits et direction visuelle.
4. GO de création des définitions de metafields V3.
5. GO de saisie ou mutation en masse des données Shopify.
6. GO de développement et réservation des fichiers Ruban V3.
7. Attribution d'un thème privé V3.
8. GO visuel après preview réelle.
9. GO d'intégration Git.
10. GO live distinct.

## Risques et inconnues

1. La disponibilité storefront n'est pas une preuve de stock physique.
2. La taxonomie actuelle comporte des types hétérogènes et des valeurs historiques. Elle ne suffit pas pour créer automatiquement un matching.
3. Le matching unique doit être meilleur qu'un simple produit similaire. Une proposition faible sera très visible.
4. Higgsfield peut générer une vidéo esthétiquement réussie mais factuellement fausse. Le contrôle produit exact est bloquant.
5. Les droits de réutilisation et de transformation des photos fournisseur doivent être prouvés.
6. Le volume vidéo réel dépend du nombre final de produits ambassadeurs. L'estimation 25 à 40 peut varier.
7. Les fichiers vidéo doivent être archivés hors du fournisseur avec sources, prompts, génération, modèle, date et sortie finale.
8. La lecture vidéo peut dégrader LCP, INP ou consommation mobile si le poster, le chargement et les pauses sont mal gérés.
9. Le code V2 sert plusieurs contextes. La simplification PDP ne doit pas casser panier, drawer, diagnostic, récent ou sélections éditoriales.
10. Les événements analytiques existent, mais aucun consommateur Pixel confirmé n'est prouvé dans le dépôt.
11. Les ventes sont trop faibles pour décider seules. Les choix initiaux doivent être éditoriaux et commerciaux, puis mesurés par impressions, clics, ajouts et taux d'attache.

## Prochaines actions, dans l'ordre

1. Réserver un lot Ruban V3 en lecture seule dans `docs/workstreams.md`.
2. Extraire le catalogue et séparer produit public, disponible storefront, stock réellement vérifié et produit commercialement éligible.
3. Normaliser les critères nécessaires au matching : famille, type, pierre, métal, couleur, rituel, usage, prix, marge et média.
4. Produire la matrice complète sans mutation Shopify.
5. Faire valider les associations par familles par Patrice.
6. Déduire le nombre réel de produits ambassadeurs et de vidéos nécessaires.
7. Obtenir le GO de production Higgsfield.
8. Produire un lot de direction court, puis appliquer le gate de fidélité produit.
9. Valider le contrat de metafields et obtenir le GO Shopify.
10. Implémenter V3 dans un worktree isolé et un thème privé attribué.
11. Tester à 360, 390, 430, 820, 1440, reduced motion et économie de données.
12. Obtenir le GO visuel, intégrer, obtenir le GO live, pousser des fichiers nommés, pullback et QA publique.

## Lecture obligatoire

1. `AGENTS.md`
2. `docs/project-state.md`
3. `docs/workstreams.md`
4. `docs/codex-handoff.md`
5. `docs/checkpoints/2026-08-17-0910-ruban-v3-handoff.md`
6. `docs/checkpoints/2026-08-16-1046-ruban-v2-live.md`
7. `docs/audits/2026-08-16-ruban-matrices-commerciales-v1.md`
8. `docs/superpowers/specs/2026-08-16-milaura-ruban-parure-v2.md`
9. `docs/reference/2026-08-12-repository-workflow.md`
10. `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md`
11. `docs/reference/2026-08-12-copywriting-milaura.md`

## Interdits de reprise

- ne pas présenter les 268 associations comme réalisées ;
- ne pas présenter 25 à 40 vidéos comme un volume validé ;
- ne pas utiliser Grok dans le workflow vidéo Ruban ;
- ne pas accepter une vidéo qui transforme le produit ;
- ne pas muter Shopify avant validation de la matrice exacte et GO explicite ;
- ne pas créer de metafield V3 sans GO ;
- ne pas toucher au thème Atelier `200007713115` ;
- ne pas développer dans le checkout d'intégration ;
- ne pas déployer un thème complet ;
- ne pas confondre décision commerciale, GO production, GO Shopify, GO visuel, GO intégration et GO live.

## Prompt de reprise copiable

```text
Reprends le chantier MilAura Ruban V3 au 2026-08-17 depuis /Users/paesano/Documents/MilAura website/dawn-X-milaura. Lis AGENTS.md, docs/project-state.md, docs/workstreams.md, docs/codex-handoff.md, docs/checkpoints/2026-08-17-0910-ruban-v3-handoff.md, docs/checkpoints/2026-08-16-1046-ruban-v2-live.md, docs/audits/2026-08-16-ruban-matrices-commerciales-v1.md et docs/superpowers/specs/2026-08-16-milaura-ruban-parure-v2.md. Commence en lecture seule et vérifie Git, les worktrees, les thèmes Shopify et les propriétaires avant toute écriture.

État prouvé : Ruban V2 est intégré et live sur 190430282075 ; les 9 fichiers live ont été revérifiés 9/9 identiques au canonique le 2026-08-17 ; 9 sources et 12 placements Search & Discovery sont actifs avec 9/9 endpoints exacts ; milaura.recommendation_cutout existe et 5/5 médias sont servis depuis les metafields. Le storefront public comptait 268 produits disponibles au sens Shopify, ce qui ne prouve pas le stock physique.

Décision Patrice du 2026-08-17 : chaque PDP doit montrer une seule proposition cross-sell visible, en vidéo, avec une parure ou un matching explicable. Higgsfield est le seul outil vidéo retenu. Grok est exclu. Toute transformation visuelle du produit est interdite.

Ne présente pas les 268 associations ou les 25 à 40 vidéos comme réalisées. Aucune matrice V3 complète, aucune vidéo, aucun metafield vidéo, aucun code V3, aucune preview et aucun live V3 n'existent. Avant toute écriture, réserve un lot distinct dans docs/workstreams.md. Première mission : déterminer l'ensemble commercialement éligible, puis produire une matrice exacte source -> proposition principale -> raison -> secours éventuel -> vidéo requise. Distingue les faits, les recommandations et les estimations. Demande le GO de Patrice sur la matrice avant toute mutation Shopify. Obtiens ensuite séparément le GO Higgsfield, le GO metafields/données, le GO développement, le GO visuel, le GO intégration et le GO live.
```
