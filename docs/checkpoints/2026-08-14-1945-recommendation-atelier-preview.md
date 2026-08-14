# Systeme de recommandation MilAura, preview technique

Date : 2026-08-14 19:45 CEST

## Etat

Le nouveau systeme de recommandation editorial est implemente dans le worktree
`/Users/paesano/Documents/MilAura website/_worktrees/recommendation-system-20260814`,
sur la branche `codex/milaura-recommendation-system-20260814`.

Il est deploye uniquement sur le theme de developpement Shopify `199421952347`.
Le theme live `190430282075` est reste inchange. L'integration et le live exigent
un GO visuel explicite de Patrice.

Preview :
`https://milaura-2.myshopify.com?preview_theme_id=199421952347`

## Architecture livree

- un composant et une carte uniques pour les contextes PDP, panier, tiroir,
  diagnostic, compte, pages editoriales et historique recent ;
- une grille bento asymetrique sur desktop, avec une carte photographique
  focale et des cartes secondaires ;
- un rail natif horizontal sur mobile, avec scroll snap, clavier et focus ;
- des cartes transparentes, un filet aigue-marine et des actions soulignees
  d'or, exclusivement alimentees par `assets/milaura-tokens.css` ;
- une video Shopify reelle seulement sur la carte focale lorsqu'un produit en
  possede une, avec lecture au hover ou au focus et poster pour les preferences
  de mouvement reduit ou d'economie de donnees ;
- un quick add partage qui conserve quantite, loading, disabled, erreurs et
  mise a jour du panier ;
- des evenements analytiques publies avec `Shopify.analytics.publish` ;
- un historique recent qui ne stocke que l'identifiant et le handle, soumis au
  consentement, puis recharge la carte produit depuis Shopify ;
- des recommandations PDP d'abord complementaires. Si Shopify retourne moins
  de deux complements, un repli associe clairement identifie devient
  `Comparer avant de choisir`. Aucun best-seller generique n'est injecte ;
- des recommandations panier exclusivement complementaires, sans produit deja
  present, sans doublon et sans remplissage artificiel ;
- le diagnostic et le compte utilisent les produits reellement configures par
  profil ;
- les selections des hubs Mariage et Naissance utilisent le meme composant.

Les selections homepage, la collection saisonniere et les produits mis en avant
restent des surfaces de merchandising catalogue. Elles partagent les memes
cartes et actions, mais ne sont pas faussement etiquetees comme recommandations
contextuelles.

## Nettoyage permanent

Le prototype refuse reste recuperable sur la branche distante
`codex/milaura-pdp-crosssell-20260814`, commit `007b3dd0`.

Dans le nouveau lot, les implementations concurrentes ont ete supprimees :

- anciennes sections PDP et `related-products` ;
- anciennes sections et snippets panier de recommandation ;
- anciennes sections diagnostic et compte de recommandation ;
- anciennes feuilles `section-related-products.css`,
  `component-complementary-products.css` et `milaura-cart-drawer-v2.css` ;
- ancien custom element Dawn `ProductRecommendations` ;
- anciens adaptateurs JavaScript et selecteurs CSS devenus morts ;
- bloc Dawn complementaire retire de `sections/main-product.liquid` ;
- imports locaux dupliques de `milaura-card.css` retires des sections qui
  beneficiaient deja du chargement global.

Le configurateur promotionnel `milaura-lp-bundle-scratch` reste volontairement
hors de cette consolidation : il s'agit d'un configurateur d'offre, pas d'un
cross-sell contextuel. Il demande un audit dedie avant remplacement.

## Validation executee

- `node --check assets/milaura-recommendations.js` : OK ;
- parse Shopify des huit templates JSON modifies : OK ;
- `git diff --check` : OK ;
- `shopify theme check` : 283 fichiers inspectes, 27 avertissements historiques
  dans 10 fichiers non modifies par le moteur, aucune nouvelle erreur ;
- premier push cible : 34 fichiers sur le theme de developpement ;
- pullback initial : 32 fichiers identiques octet par octet et deux templates
  identiques semantiquement apres normalisation Shopify ;
- pullback final des cinq derniers fichiers : 5 sur 5 identiques octet par
  octet ;
- PDP desktop : 3 cartes, repli associe explicite, surface transparente,
  filet mineral, ajout rapide fonctionnel et zero erreur du composant ;
- PDP mobile 390 x 844 : rail reel, largeur de contenu superieure au viewport,
  navigation `ArrowRight`, focus visible de 3 px ;
- barre d'achat PDP mobile : masquee uniquement pendant la lecture de l'atelier
  et restauree des que la section quitte le viewport ;
- page Mariage : composant editorial pret avec 3 produits configures, carte
  focale photographique sans zone vide et un seul chargement de
  `milaura-card.css` ;
- diagnostic Protection : 2 produits configures recuperes, avec les raisons
  `Bracelet associe a Obsidienne noire` et
  `Bougie associee a Obsidienne noire` ;
- panier : ajout rapide confirme, tiroir mis a jour, etat vide assume quand
  Shopify ne fournit aucun complement ;
- historique recent : carte rechargee depuis Shopify lorsque le consentement
  est autorise.

Les erreurs console observees sur certaines navigations de preview provenaient
des iframes Shopify Preview et Shop Pay. Le composant de recommandation ne
produit aucune erreur apres correction.

## Restant avant integration

1. Patrice controle visuellement la PDP, le panier, le diagnostic, le compte et
   les deux hubs editoriaux sur le theme `199421952347`.
2. Apres GO visuel, synchroniser la branche avec `codex/milaura-integration`,
   integrer le commit et effectuer un push Shopify cible sans suppression.
3. La suppression physique des anciens fichiers du theme Shopify doit suivre la
   procedure de deploiement de l'integrateur. Ils ne sont plus references par le
   code actif, mais le push de preview a respecte l'option `--nodelete`.
4. Effectuer un nouveau pullback apres integration. Aucun live sans GO live
   distinct.
