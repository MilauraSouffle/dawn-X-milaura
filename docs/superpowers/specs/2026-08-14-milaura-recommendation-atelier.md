# MilAura Recommendation Atelier 2026

Date : 2026-08-14

Statut : implementation terminee, correction horizontale disponible sur le theme de developpement, GO visuel en attente

Proprietaire du GO creatif final : Patrice Allié

Theme autorise avant GO : developpement `199421952347`

## 1. Ambition

Transformer chaque recommandation MilAura en moment editorial attendu, utile et mesurable. Le systeme ne doit plus ressembler a une rangee de produits ajoutee par obligation. Il doit aider a composer un ensemble, comparer une alternative ou reprendre une visite, avec une hierarchie visuelle digne d'une maison de joaillerie.

Le geste visuel signe est une galerie editoriale horizontale asymetrique : une piece focale large, deux ou trois pieces secondaires plus compactes sur la meme ligne, du vide et une raison de recommandation explicite. La photographie porte l'attention. L'interface ne la recouvre pas.

La section doit pouvoir etre comprise d'un seul regard sur desktop. Sa hauteur de media est bornee et aucune composition verticale ne peut forcer un deuxieme ecran. Une recommandation faible ou vide ne s'affiche pas.

## 2. Regles non negociables

1. Un seul systeme de rendu partage pour les produits recommandes.
2. Une seule feuille de styles et un seul controleur JavaScript pour les interactions de recommandation.
3. Les adaptateurs PDP, panier, diagnostic, compte et editorial restent minces et ne dupliquent ni carte, ni carousel, ni ajout panier.
4. Une feature remplacee est supprimee du theme actif avec ses inclusions, son schema, son CSS et son JavaScript devenus inutiles.
5. L'ancienne implementation refusee reste recuperable sur `codex/milaura-pdp-crosssell-20260814` au commit `007b3dd0`, sans rester dans le futur main.
6. Aucun fichier reserve au lot Hero homepage n'est modifie.
7. Toutes les valeurs de couleur, typographie, espace, rayon, focus et mouvement viennent de `assets/milaura-tokens.css`.
8. Aucun live avant GO visuel explicite.

## 3. Semantique commerciale

Le terme generique `cross-sell` disparait de l'interface publique. Trois intentions distinctes sont exposees :

| Intention | Question client | Source canonique | Surface |
| --- | --- | --- | --- |
| Complement | Qu'est-ce qui complete exactement mon choix ? | Shopify Search & Discovery, intent `complementary` | PDP et panier |
| Alternative | Quelle autre piece repond au meme besoin ? | Shopify Product Recommendations, intent `related` | PDP et pages editoriales uniquement |
| Reprise | Qu'est-ce que je regardais deja ? | Historique local avec consentement de preference | PDP bas de page, panier page et compte |

Un produit lie par `related` ne doit jamais etre presente comme un complement. Dans le panier, aucune alternative n'est montree car elle pourrait remettre en cause un choix deja fait.

## 4. Logique de selection

### 4.1 PDP

1. Charger les produits `complementary` pour le produit courant.
2. Exclure le produit courant, les indisponibles et les doublons.
3. Si au moins deux complements restent, afficher la composition `complement`.
4. Sinon charger les produits `related` et afficher la composition `alternative` avec un titre distinct.
5. Si aucune recommandation pertinente ne reste, ne rien afficher.

### 4.2 Panier page

1. Parcourir les lignes du panier de la plus recente a la plus ancienne.
2. Demander au maximum quatre complements par produit.
3. Exclure tous les produits deja au panier, les indisponibles et les doublons.
4. Garder au maximum deux produits, issus si possible de deux lignes differentes.
5. Si aucun complement n'existe, masquer la section. Ne jamais injecter un bestseller generique.

### 4.3 Panier drawer

1. Meme source que le panier page.
2. Un seul complement, avec une raison courte et une action d'ajout directe.
3. Aucune grande galerie dans l'espace contraint du drawer.
4. Le drawer reste utilisable pendant le chargement, l'erreur ou l'absence de recommandation.

### 4.4 Diagnostic

1. Lire le profil et la pierre uniquement si le stockage de preference est autorise.
2. Reprendre les produits bracelet, bougie et collier deja configures par profil dans le quiz, sans creer une seconde source de curation.
3. Resoudre chaque produit par son handle au moment de l'affichage afin de relire le prix, le media et la disponibilite dans Shopify.
4. Exclure les produits indisponibles ou dupliques et afficher une raison factuelle liee a la pierre du resultat.
5. En l'absence de profil ou de correspondance, masquer la section.

### 4.5 Compte

1. Reprendre le resultat du diagnostic avec le meme consentement que le diagnostic.
2. Afficher une piece focale et deux categories secondaires si elles sont configurees.
3. Utiliser les produits recemment consultes comme reprise, jamais comme preuve d'affinite.
4. Supprimer l'ancien snippet compte de 781 lignes et la section inerte qui ne sont plus inclus.

### 4.6 Pages editoriales

1. Conserver la curation manuelle des selections Mariage et Naissance.
2. Remplacer leur simple grille par le rendu partage en mode `editorial`.
3. Expliquer le lien avec la page : mois, anniversaire, pierre ou usage.
4. Ne pas transformer les destinations de collection en recommandations produit.

### 4.7 Frontiere avec les autres dispositifs marchands

- `milaura-selection-atelier` est la selection de campagne de la homepage et la reference visuelle deja validee. Elle reste une vitrine de collection, pas une recommandation contextuelle.
- `milaura-seasonal-collection` est un catalogue de collection avec pagination. Il ne devient pas une recommandation.
- `milaura-featured-products` presente Nouveautes et Bestsellers sur la homepage. Il reste un point d'entree catalogue.
- `milaura-lp-bundle-scratch` est un configurateur promotionnel avec paliers et cadeaux dans des templates de landing page. Il ne partage ni source produit ni promesse avec le moteur de recommandation. Sa refonte exige un audit commercial dedie et ne doit pas etre maquillee en cross-sell.

Cette frontiere evite de manquer une surface commerciale tout en empechant le nouveau composant de devenir un monolithe qui absorberait des parcours incompatibles.

## 5. Composition visuelle

### 5.1 Palette et matiere

- fond transparent sur la surface de page existante ;
- photographie sans voile, texte ni badge decoratif superpose ;
- cadre fin avec `--milaura-filet-mineral` sur les medias ;
- encre avec `--milaura-prune` ;
- raisons secondaires avec `--milaura-encre-secondaire` ;
- prix avec `--milaura-or-profond` ;
- action Ajouter soulignee par `--milaura-or` ;
- focus avec `--milaura-focus` ;
- aucune ombre volumineuse, aucun gradient, aucune pastille prune.

### 5.2 Typographie

- titre editorial en Gloock, une seule ligne forte lorsque la largeur le permet ;
- micro-label fonctionnel en Instrument Sans, capitales espacees ;
- noms, prix, raisons et actions en Instrument Sans ;
- Dancing Script uniquement si une signature humaine courte est justifiee, jamais comme titre principal de recommandation.

### 5.3 Desktop, largeur utile 1200 a 1440 px

```text
┌────────────────────────────────────────────────────────────────────┐
│ COMPOSITION MILAURA          Titre                 Raison courte   │
│                                                                    │
│ ┌────────────────────────────┐ ┌──────────────┐ ┌──────────────┐ │
│ │ Produit focal              │ │ Produit 2    │ │ Produit 3    │ │
│ │ image ou video large       │ │ image        │ │ image        │ │
│ │ nom / prix / raison        │ │ nom / prix   │ │ nom / prix   │ │
│ │ Ajouter                    │ │ Ajouter      │ │ Ajouter      │ │
│ └────────────────────────────┘ └──────────────┘ └──────────────┘ │
└────────────────────────────────────────────────────────────────────┘
        6 colonnes                3 colonnes        3 colonnes
```

Toutes les cartes restent sur une seule ligne. Le media a une hauteur commune bornee afin que la composition complete reste visible dans un viewport desktop courant. La piece focale peut utiliser une video produit reelle. Elle ne demarre qu'au survol ou a la prise de focus et s'arrete a la sortie. Sans video validee, elle utilise la photographie produit. Aucun mannequin genere n'est introduit.

### 5.4 Mobile, 360 a 430 px

```text
┌──────────────────────────┐
│ COMPOSITION MILAURA      │
│ Titre                    │
│ Raison courte            │
├──────────────────────────┤
│ Produit focal            │
│ grande photographie      │
│ nom / prix / raison      │
│ Ajouter                  │
├──────────────────────────┤
│ Produit 2  →  Produit 3  │  rail tactile, apercu suivant visible
└──────────────────────────┘
```

Le scroll horizontal est natif, avec `scroll-snap`, cibles tactiles de 44 px, apercu de la carte suivante et controles clavier. Le desktop n'est pas un rail et le mobile n'est pas un crop du desktop.

### 5.5 Panier drawer

```text
┌────────────────────────────────┐
│ Complete ce choix              │
│ ┌──────┐ Nom du produit        │
│ │image │ Raison                │
│ └──────┘ Prix       Ajouter    │
└────────────────────────────────┘
```

La section tient dans le flux du drawer, sans modal supplementaire, sans carrousel et sans modifier la priorite du paiement.

## 6. Architecture de code cible

### 6.1 Sources uniques

| Fichier cible | Responsabilite |
| --- | --- |
| `assets/milaura-recommendations.css` | Tous les layouts de galerie horizontale, rail et compact, plus les etats |
| `assets/milaura-recommendations.js` | Chargement API, filtrage, rail, consentement, recent, analytics et ajout panier |
| `snippets/milaura-recommendation-card.liquid` | Carte produit unique, variantes focal, compact et standard |
| `snippets/milaura-recommendation-shell.liquid` | Entete, liste, live region et donnees de contexte |
| `sections/milaura-recommendations.liquid` | Adaptateur de section pour PDP, panier, diagnostic et editorial |
| `sections/milaura-recommendation-fragment.liquid` | Reponse HTML minimale de l'API Shopify, rendue avec la carte unique |
| `sections/milaura-product-fragment.liquid` | Rendu serveur d'un produit cure dans un contexte client comme le compte |
| `sections/milaura-recent-fragment.liquid` | Rendu serveur d'un produit recemment consulte, sans persister son prix ou son stock |
| `snippets/milaura-cart-recommendation.liquid` | Adaptateur mince du drawer |

Les fragments API, produit et recent ne sont pas des secondes features. Ils ne contiennent aucun style, aucun controleur et aucune variante de carte. Ils existent uniquement parce que Shopify rend une section par son identifiant.

### 6.2 Contrat DOM

Chaque instance porte :

- `data-milaura-recommendations` ;
- `data-context` parmi `pdp`, `cart-page`, `cart-drawer`, `diagnostic`, `account`, `editorial`, `recent` ;
- `data-intent` parmi `complementary`, `related`, `curated`, `recent` ;
- un ou plusieurs identifiants de produits source ;
- la liste des identifiants exclus ;
- une limite de produits ;
- un etat `idle`, `loading`, `ready`, `empty` ou `error`.

Le controleur est idempotent. Une mise a jour Ajax du panier peut reinjecter le composant sans doubler les listeners.

### 6.3 API et tracking

- utiliser `/{locale}/recommendations/products` avec `intent=complementary` ou `intent=related` ;
- conserver les URL Shopify contenant les parametres `pr_*` ;
- publier `milaura:recommendation_impression`, `milaura:recommendation_click` et `milaura:recommendation_add` via `Shopify.analytics.publish` lorsqu'il est disponible ;
- ne publier aucune donnee personnelle ;
- ne jamais bloquer l'interface si aucun pixel n'ecoute les evenements.

### 6.4 Produits recemment consultes

- stockage local limite a six references ;
- uniquement apres `preferencesProcessingAllowed()` ;
- donnees minimales : identifiant et handle ;
- aucun titre, prix, stock ou media persiste ;
- rendu a jour demande au serveur Shopify a partir du handle ;
- aucune action Ajouter depuis une donnee potentiellement ancienne ;
- suppression silencieuse de l'historique si le consentement n'est plus permis.

## 7. Matrice de remplacement et suppression

| Source actuelle | Etat | Decision cible | Risque controle |
| --- | --- | --- | --- |
| `sections/milaura-product-crosssell.liquid` | 572 lignes, CSS et JS internes, fallback catalogue generique | remplacer puis supprimer | PDP custom et schema template |
| `sections/milaura-pdp-recommendations.liquid` | wrapper d'un ancien snippet | remplacer puis supprimer | PDP Dawn |
| `snippets/milaura-pdp-recos.liquid` | depend de `recos-pool` | supprimer | collection publique absente |
| `sections/related-products.liquid` | second systeme Dawn sur le meme template | remplacer puis supprimer | template produit standard |
| `assets/section-related-products.css` | style lie au systeme Dawn remplace | supprimer | verifier aucune autre inclusion |
| bloc `complementary_product` de `sections/main-product.liquid` | feature Dawn concurrente non utilisee | retirer apres verification des templates | schema de l'editeur Shopify |
| `assets/component-complementary-products.css` | lie au bloc Dawn retire | supprimer | verifier aucune autre inclusion |
| `snippets/milaura-cart-recos.liquid` | premier article et `recos-pool`, maximum 2 | remplacer puis supprimer | refresh Ajax du drawer |
| `sections/milaura-cart-upsell.liquid` | 676 lignes, trois produits manuels et JS duplique | remplacer puis supprimer | panier page, loading, variantes |
| `sections/milaura-quiz-crosssell.liquid` | 619 lignes, styles anciens et filtre client isole | remplacer puis supprimer | evenement du diagnostic |
| zone produits de `sections/milaura-quiz.liquid` | onglets, carte et CTA fabriques en JavaScript avec plusieurs couches CSS | remplacer par la coquille partagee et supprimer le rendu mort | resultat du quiz et stockage |
| `snippets/milaura-crosssell-card.liquid` | non inclus | supprimer immediatement avec le lot | aucun appel trouve |
| `sections/milaura-dashboard-recommendations.liquid` | section volontairement inerte | supprimer | aucun template ne l'inclut |
| `snippets/milaura-dashboard-recos.liquid` | 781 lignes, non inclus | supprimer | aucun appel trouve |
| zone produit de `sections/milaura-dashboard.liquid` | rendu JS artisanal | migrer vers la carte partagee | profil, tabs et stockage |
| `product_selection` de `sections/milaura-catalogue-hub.liquid` | curation utile, presentation en grille | conserver la donnee, remplacer le rendu | Mariage et Naissance |
| `milaura.crosssell_products` documente mais absent du contrat JSON | gouvernance incoherente | ne pas utiliser comme nouvelle source, documenter la migration vers Search & Discovery | valeurs admin historiques eventuelles |

La suppression n'intervient qu'apres preuve que chaque inclusion a ete remplacee et que les parcours cibles fonctionnent. Elle a lieu dans le meme lot avant demande d'integration.

## 8. Critique anti-generique avant code

### Ce qui rendrait le resultat generique

- une rangee de quatre cartes identiques ;
- un titre vague comme `Vous aimerez aussi` ;
- des produits choisis uniquement parce qu'ils sont bestsellers ;
- une video decorative sans lien avec le produit ;
- un gros fond de section colore pour simuler l'importance ;
- des badges, etoiles ou pictogrammes de luxe ;
- des animations de levee sur toutes les cartes.

### Reponse de design

- une seule piece focale, deux secondes roles et une raison lisible ;
- une distinction publique entre complement, alternative et reprise ;
- une asymetrie horizontale stable, pas un masonry aleatoire ;
- un detail or reserve a l'action ;
- une transition principale sur le media focal uniquement ;
- aucune recommandation lorsque le moteur n'a rien de credible.

## 9. Accessibilite et navigation

- ordre DOM identique a l'ordre de lecture ;
- H2 unique et descriptif ;
- noms produit en H3 ;
- aucun lien imbrique dans un autre lien ;
- boutons Ajouter avec nom accessible du produit ;
- live region polie pour chargement, ajout et erreur ;
- scroll tactile libre et clavier par fleches lorsque le rail a le focus ;
- focus toujours visible ;
- boutons de 44 px minimum ;
- video sans autoplay, lue uniquement au survol ou au focus et arretee a la sortie ;
- poster, video muette et `playsinline` ;
- aucune lecture automatique avec `prefers-reduced-motion: reduce` ou economie de donnees.

## 10. Performance

- CSS et JS charges une fois ;
- aucun framework ni nouvelle dependance ;
- section chargee paresseusement a 400 px du viewport ;
- au maximum quatre produits demandes par produit source ;
- images responsives avec dimensions explicites ;
- video uniquement si asset valide, poster obligatoire ;
- aucune mutation de hauteur brutale : espace reserve par ratio ;
- budget cible du nouveau JavaScript minifie : moins de 16 Ko ;
- budget cible du nouveau CSS minifie : moins de 20 Ko ;
- aucun nouveau probleme LCP, CLS ou INP sur les pages representatives.

## 11. Vagues d'execution

### Vague 1, socle

- composants partages ;
- fragment API ;
- events analytics ;
- recent avec consentement ;
- tests unitaires legers du controleur si l'environnement le permet.

### Vague 2, pages representatives

- PDP custom ;
- PDP Dawn ;
- panier page ;
- panier drawer.

### Vague 3, contextes personnalises

- diagnostic ;
- compte ;
- selections Mariage et Naissance.

### Vague 4, assainissement

- suppression des anciens fichiers et blocs ;
- suppression des anciennes inclusions et settings ;
- recherche globale des selecteurs et noms de feature retires ;
- comparaison du nombre de lignes ajoutees et supprimees.

## 12. Portes de validation

### Technique

- `git diff --check` ;
- Theme Check sans nouvelle erreur ;
- JSON des templates valide ;
- JavaScript parse sans erreur ;
- aucun include ou type de section supprime encore reference ;
- ajout panier simple, variante, indisponible et stock partiel ;
- refresh du drawer sans listener double ;
- clavier, focus et mouvement reduit ;
- mobile 360, 390 et 430 px ;
- desktop 1024, 1280 et 1440 px.

### Marchande

- recommandation visible seulement si pertinente ;
- raison de chaque produit coherente avec la source ;
- aucun produit courant, en rupture, deja au panier ou duplique ;
- aucun texte medical ou preuve non documentee ;
- le paiement reste l'action dominante du panier.

### Visuelle

- photographie clairement prioritaire ;
- hierarchie horizontale lisible en moins de deux secondes ;
- section desktop complete visible sans empilement vertical de cartes ;
- aucune trace de Dawn natif ;
- aucun panneau blanc ajoute ;
- aucune grosse pastille prune ;
- aucun faux luxe ;
- GO explicite de Patrice sur le theme de developpement avant propagation ou live.

## 13. Mesure

KPI principal : taux d'ajout d'un produit recommande parmi les sessions exposees.

KPI secondaires :

- taux de clic par intention et contexte ;
- attach rate, nombre de commandes avec au moins un complement ;
- variation du panier moyen ;
- taux de conversion panier ;
- taux de masquage pour absence de recommandation pertinente ;
- impact LCP, CLS et INP.

Garde-fou : une hausse des clics ne compense jamais une baisse mesurable de conversion panier ou une degradation de navigation.

## 14. Definition de termine

Le lot est termine seulement lorsque :

1. les neuf sources uniques ciblees sont en place ;
2. toutes les surfaces referencees utilisent ce socle ;
3. les anciens fichiers enumeres sont supprimes du theme actif ;
4. les recherches globales prouvent l'absence des anciens includes et selecteurs ;
5. le commit est pousse et le worktree est propre ;
6. le theme de developpement est verifie par pullback ;
7. Patrice a donne son GO visuel explicite ;
8. le live fait l'objet d'une autorisation distincte.
