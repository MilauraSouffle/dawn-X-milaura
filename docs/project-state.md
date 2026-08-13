# MilAura - Etat courant du projet

Derniere mise a jour : 2026-08-13 21:05 CEST

## Etat en une phrase

Le catalogue V1, la PDP-P0 et les trois hubs editoriaux sont live ; dix nouveaux Heroes photographiques GPT Image 2 sont integres dans Git et valides sur le theme de developpement, mais le live attend encore le GO visuel explicite de Patrice.

## Source de verite et etat du depot

- Seul depot actif : `/Users/paesano/Documents/MilAura website/dawn-X-milaura`.
- Branche de travail et d'integration : `codex/milaura-integration`.
- `main` reste le miroir automatique du theme Shopify live.
- L'historique `main` a ete rattache a l'integration par les commits de reconciliation documentes, dont `869d522a` apres la livraison du polish des cartes saisonnieres, sans modifier l'arbre source audite.
- Les seules branches durables sont `main` et `codex/milaura-integration`. Les branches temporaires sont retirees apres integration et fermeture de leur lot.
- Quatre anciennes branches sont conservees sous des tags `archive/2026-08-12/*`, puis ont ete retirees des branches actives.
- Les worktrees paralleles en cours sont declares dans `docs/workstreams.md`. Le worktree des Heroes editoriaux est retire a la fermeture de ce lot ; les lots UI sitewide et carrousel restent la propriete de leurs sessions respectives.
- Registre obligatoire : `docs/workstreams.md`.
- Procedure obligatoire : `docs/reference/2026-08-12-repository-workflow.md`.

Le clone `/Users/paesano/Documents/MilAura website/dawn-X-milaura 2` etait un depot complet obsolete de 3,4 Go, pas un worktree. Il est archive intact ici :

`/Users/paesano/Documents/MilAura website/_archives/2026-08-12-repo-cleanup/obsolete-clones/dawn-X-milaura-2-obsolete`

Les temporaires, sauvegardes et assets rejetes du depot principal sont archives ici :

`/Users/paesano/Documents/MilAura website/_archives/2026-08-12-repo-cleanup/primary-untracked`

Manifest : `docs/reference/2026-08-12-obsolete-repository-archive.md`.

## Regles de conduite actives

- Le checkout principal sert a l'integration, la documentation et aux deploiements.
- Une session parallele utilise une branche et un worktree geres, declares avant edition dans `docs/workstreams.md`.
- Deux sessions ne possedent jamais le meme fichier ou le meme theme Shopify au meme moment.
- Aucun clone manuel, dossier numerote, handoff non committe ou push complet du theme.
- Seul le proprietaire d'integration deploie le live, avec fichiers cibles, `--nodelete`, pullback et comparaison.
- Une validation technique ne vaut jamais validation creative de Patrice.
- Aucun produit, stock, prix ou statut de publication n'est modifie par un chantier theme sans autorisation explicite.

## Catalogue V1 public

Activation validee le 2026-08-12 dans `cb0da71b` et documentee dans `docs/checkpoints/2026-08-12-1019-catalogue-v1-activation.md`.

Pages publiques :

- `/pages/choisir-sa-pierre`
- `/pages/bijoux-par-pierre`
- `/pages/pierres-de-naissance`, avec des produits integres par mois et 4 produits de selection editoriale complementaire
- `/pages/cadeaux-anniversaire-de-mariage`, avec des produits integres par annee et 3 produits de selection editoriale complementaire

Collections publiques :

- `/collections/bagues-pierres`, 6 produits
- `/collections/par-pierre-aigue-marine`, 6 produits
- `/collections/par-pierre-agate`, 10 produits
- `/collections/par-pierre-quartz-rose`, 8 produits
- `/collections/par-pierre-lapis-lazuli`, 6 produits
- `/collections/par-pierre-amazonite`, 6 produits

Validation : 9 routes HTTP 200, un H1 par route, canoniques auto-referentes, aucun `noindex`, presence sitemap, Theme Check sans erreur et `productMutations: 0`.

## Homepage et design

- Hero actuel live et valide visuellement par Patrice. Son evolution immersive reste un lot distinct.
- La selection de Karine a ete refondue puis polie et livree live le 2026-08-13 : titre reutilisable, marqueurs saisonniers en Dancing Script, photographies non masquees, cartes transparentes, cadre aigue-marine fin, informations compactes, quantite soulignee et ajout panier souligne d'or.
- Le petit separateur court et epais refuse a ete retire. Le filet historique aigue-marine de 1 px et pleine largeur est restaure.
- Patrice a valide cette deuxieme proposition comme nouvelle direction du site : simple, sobre, efficace et premium, sans gros boutons ni panneaux blancs ajoutes. Reference canonique : `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md`.
- La page `/collections/selection-aout-2026` utilise le decor lagon derriere la navigation, un Hero compact, un seul H1 et une grille de 20 produits en deux colonnes sur mobile.
- Le pullback live des neuf fichiers saisonniers est identique bit a bit a Git. Les controles publics desktop et mobile ne montrent aucun debordement.
- Selection d'aout, guide de decouverte, `Choisir sa pierre`, dock mobile et panier 30/50/80 sont live.
- Le bandeau d'engagement live reste trop epais sur mobile selon Patrice.
- Le Hero doit etre etudie avec une facette plus immersive, potentiellement une video reelle de 6 a 8 secondes dans le grand cabochon.
- Reference de qualite : `tiffany.com`, sans copie et sans decoration generique.
- Brief : `docs/superpowers/specs/2026-08-12-milaura-bandeau-hero-immersif.md`.
- La priorite chromatique par pierre est implementee sur le theme de developpement : Amethyste, Aigue-marine, Agate, Quartz rose, Lapis-lazuli et Amazonite ont chacune leur scene et leur palette.

## Heroes editoriaux GPT Image 2 en attente de GO live

Le 2026-08-13, une nouvelle direction media-first a ete appliquee a dix destinations :

- hubs `/pages/pierres-de-naissance`, `/pages/cadeaux-anniversaire-de-mariage` et `/pages/bijoux-par-pierre` ;
- collections `/collections/bagues-pierres`, `/collections/par-pierre-amethyste`, `/collections/par-pierre-aigue-marine`, `/collections/par-pierre-agate`, `/collections/par-pierre-quartz-rose`, `/collections/par-pierre-lapis-lazuli` et `/collections/par-pierre-amazonite`.

Chaque page utilise une composition desktop et une recomposition mobile dediee, soit vingt WebP pour 2 747 684 octets. Les scenes sont construites autour de vrais produits MilAura, avec une zone de respiration pour le texte HTML. Les collages CSS, filets decoratifs et flous de fond ont ete retires du Hero. Les collections non mappees conservent leur ancien Hero en repli.

Validation sur le theme de developpement `199421952347` : 20 controles HTTP 200, exactement un H1 par route et viewport, bons assets desktop/mobile, aucune image en echec, aucun debordement horizontal, Theme Check sans erreur et pullback frais 23/23 identique bit a bit. Le theme live `190430282075` n'a pas ete modifie par ce lot.

La regle est canonisee dans `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md`. Checkpoint : `docs/checkpoints/2026-08-13-2058-editorial-heroes-gpt-image-2.md`.

## Hubs editoriaux Mariage, Naissance et Bijoux par pierre

Patrice a valide visuellement puis autorise le live le 2026-08-13. Les trois pages publiques utilisent maintenant un composant reutilisable de joaillerie editoriale, construit exclusivement avec les tokens MilAura :

- `/pages/cadeaux-anniversaire-de-mariage` : univers nacre chaud, guide interactif de 7 anniversaires, produits contextuels integres par annee et 3 produits de selection editoriale complementaire ;
- `/pages/pierres-de-naissance` : univers amethyste, 12 mois accessibles, produits contextuels integres par mois et 4 produits de selection editoriale complementaire ;
- `/pages/bijoux-par-pierre` : univers aigue-marine, 5 collections publiques illustrees et grille chromatique compacte.

Le Hero est media-first avec de vraies photos produit. Les reperes mois et annees n'affichent qu'un panneau a la fois, restent accessibles sans JavaScript et fonctionnent au clavier. Sur mobile, engagements, reperes et destinations deviennent des rails tactiles, et les produits restent sur deux colonnes.

Un second deploiement cible de 4 fichiers a ajoute les grilles contextuelles. Sur Mariage, les panneaux rendent respectivement 5, 8, 1, 1, 3, 11 et 0 produits ; sur Naissance, Fevrier rend 11 produits et Mars 6. Les cross-sells de 3 et 4 produits sont conserves sur decision de Patrice. Pullback final 4/4 identique bit a bit, canoniques, H1, absence de `noindex`, interactions et absence de debordement verifies sur le live.

Audit des autres pages nouvelles : Mariage et Naissance etaient les seules pages avec le defaut de simple redirection. `Bijoux par pierre` est intentionnellement un repertoire de collections ; il lui manque toutefois la destination Amethyste, publique avec 11 produits. Les collections de pierre rendent deja leurs produits et ne sont pas concernees.

Checkpoints : `docs/checkpoints/2026-08-13-1713-editorial-hubs-live.md` et `docs/checkpoints/2026-08-13-1752-hub-inline-products-live.md`.

## Collections

- La capsule de titre aigue-marine est live sur toutes les pages utilisant `milaura-collection-hero` depuis le 2026-08-12 19:37 CEST.
- Fond `#DDF8F4` vers `#BFEAE3`, texte prune `#4A3147`, point dore conserve et compteur francais `modele(s)`.
- Le jambage du `g` n'est plus coupe par le masque du typewriter.
- Push live limite a `sections/milaura-collection-hero.liquid`, puis pullback identique bit a bit.
- Controles publics : `/collections/bagues-pierres` sur desktop et `/collections/par-pierre-aigue-marine` sur mobile, un H1 et aucun debordement horizontal.
- Checkpoint : `docs/checkpoints/2026-08-12-1927-collection-pill-aqua.md`.

## Livraison et verite Shopify versionnee

Le commit `9220031e` versionne 31 fichiers auparavant locaux. L'audit du 2026-08-12 a etabli :

- 27 fichiers theme etaient identiques bit a bit au theme live
- la politique publique confirme expedition sous 24 h du lundi au vendredi, livraison France sous 3 a 5 jours et point relais offert des 30 EUR
- `templates/cart.milaura.json` correspond a la normalisation Shopify live
- aucun produit, stock, prix ou statut n'a ete modifie

Quatre fichiers signales comme chevauches ont ete classes ainsi :

| Fichier | Nature exacte | Etat Shopify |
| --- | --- | --- |
| `sections/milaura-product-hero.liquid` | pills pierre, symbolique, qualite et provenance, plus seuil point relais 30 EUR, sur le socle PDP-P0 | live, pullback bit a bit valide |
| `templates/index.json` | deux libelles livraison remplaces par point relais offert des 30 EUR | live depuis le 2026-08-12 18:29 CEST, pullback bit a bit valide |
| `templates/page.lp-promo-bougies.json` | CTA vers le vrai produit, seuil 30 EUR, FAQ 24 h et 3 a 5 jours | identique bit a bit au live |
| `templates/product.milaura-produit.json` | seuil 30 EUR, normalisation de cinq settings invalides, texte logistique, plus socle PDP-P0 | live, pullback bit a bit valide |

## PDP et ScratchToReveal

Le lot PDP-P0 a recu le GO visuel explicite de Patrice le 2026-08-12 et a ete livre sur le theme live `190430282075` :

- Scratch invisible et non initialise sur la PDP
- quantite, ajout panier, drawer et cadeau automatique fonctionnels
- faux claims et preuves sociales non prouvees retires ou conditionnes
- Product JSON-LD corrige
- quatre blocs JSON-LD parses sans erreur
- un H1 et achat direct verifies sur une bague, un bracelet et une bougie

La correction visuelle complementaire est integree dans `codex/milaura-integration` et live :

- pills mobiles sur une seule ligne animee en boucle, avec repli horizontal sans animation
- une pill par information utile, sans `Premium` et sans formule `selon les usages traditionnels de la lithotherapie`
- faits bougie explicites, grade unique, provenance quand elle existe et vertus separees
- bulle sociale historique restauree sur decision explicite de Patrice : cinq etoiles dorees, message lisible en Lato, accent rose `b♥nheur` avec coeur a la place du premier `o`, aucun diamant et aucune Dancing Script
- message restaure : `Ce produit a deja fait le bonheur de + de X client(e)s en mois annee`
- nombre stable par produit entre 12 et 141, calcule depuis `product.id`, sans connexion aux commandes Shopify ; Patrice le rattache au volume multi-canal site, atelier et evenements
- selecteur de quantite neutre et CTA prune, sans dore historique
- espace Scratch supprime et colonne achat desktop remplie par la description et la preuve Karine

Deploiement cible des six fichiers autorises :

- `sections/milaura-product-hero.liquid`
- `sections/milaura-product-reassurance.liquid`
- `sections/milaura-product-trust-block.liquid`
- `snippets/milaura-product-purchase-fallback.liquid`
- `templates/page.lp-promo-bougies.json`
- `templates/product.milaura-produit.json`

Le pullback live des six fichiers est identique bit a bit a Git. Les controles publics mobile couvrent une bague, un bracelet et une bougie : un H1, aucun debordement, aucun diamant, cinq etoiles et compteurs stables 37, 113 et 49. Le selecteur a ete teste de 1 a 2 puis restaure a 1 ; un ajout panier a ouvert le drawer et l'article de test a ensuite ete retire.

Checkpoints : `docs/checkpoints/2026-08-12-1931-pdp-visual-correction.md` et `docs/checkpoints/2026-08-13-0810-pdp-bonheur-heart.md`.

## Contrat produit

Le commit `6c4e6de4` fixe le contrat canonique complet : pierres, matieres, couleurs, intentions, occasions, disponibilite, fulfillment, provenance et six images minimum. Le pipeline reste draft-only et ne modifie ni hub ni collection publique.

Pipeline actif :

`/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation`

## Commits de consolidation des 2026-08-12 et 2026-08-13

- `9220031e` : verite storefront et logistique
- `6c4e6de4` : contrat produit et catalogue
- `4853db6e` : procedure propre de parallelisation et archive
- `952d7587` : reconciliation de l'historique du miroir Shopify
- `6f9b90b5` : capsule aigue-marine des collections integree et livree live
- `8bc59704` : rattachement du miroir Shopify automatique apres le push collection, arbre source inchange
- `882c474b` : accent Dancing Script limite au mot `bonheur` dans la bulle sociale PDP
- `74553fd3` : commit miroir Shopify automatique du push PDP live
- `75ae911f` : rattachement du miroir Shopify PDP, arbre source audite inchange
- `bf2d1fe9` : accent rose `b♥nheur` en Lato integre
- `71797a16` : commit miroir Shopify du push live cible `b♥nheur`
- `a6803efa` : rattachement du miroir Shopify `b♥nheur`, arbre source audite inchange
- `896a78d1` : integration du hotfix technique MilAura
- `a4ed7077` : retrait de quatre assets dupliques et non references
- `441bb7f0` : integration de la refonte editoriale saisonniere
- `d8c8053d` : rattachement des cinq commits miroir Shopify jusqu'a `b1893898`, arbre source audite inchange
- `6522d42f` : refonte editoriale des trois hubs, preuves d'apercu et integration fast-forward
- `aee62c12` : commit miroir Shopify automatique du push live des hubs
- `82c2cc13` : rattachement du miroir Shopify des hubs a l'integration, arbre source inchange
- `871ef137` : integration des produits contextuels et maintien des cross-sells dans Mariage et Naissance
- `ef639621` et `069cc6de` : commits miroir Shopify du deploiement live des quatre fichiers du lot
- `f8e2dfc2` : rattachement du miroir Shopify apres les produits integres, arbre source audite inchange
- `60634812` : integration du polish transparent des cartes de la Selection d'aout
- `0cc7ce28` : commit miroir Shopify du deploiement live des deux fichiers du polish
- `869d522a` : rattachement du miroir Shopify apres le polish saisonnier, arbre source audite inchange
- `a3c26aaa` : integration des dix Heroes editoriaux et de leurs vingt assets dans la branche canonique, theme live inchange

Deploiement homepage du 2026-08-12 : `templates/index.json` uniquement sur le theme live `190430282075`. La homepage publique rend les deux nouveaux libelles 30 EUR et ne rend plus les deux anciens libelles 39 EUR. Checkpoint : `docs/checkpoints/2026-08-12-1829-homepage-shipping-labels-live.md`.

## Prochain ordre d'execution

1. Obtenir le GO visuel de Patrice sur les dix Heroes du theme de developpement, puis seulement un GO live distinct pour leur deploiement cible.
2. Integrer et valider les lots paralleles carrousel Nouveautes et UI sitewide selon leur ownership dans `docs/workstreams.md`.
3. Prototyper le bandeau 56 px et le Hero immersif de la homepage en reprenant la nouvelle regle media-first, sans reutiliser les fichiers reserves par les lots en cours.

## Dependances encore ouvertes

- inventaire et retrait controle des 18 baguettes minerales
- treize anciennes collections sans metas definitives
- pages mensuelles de naissance et pages enfants mariage
- GSC, GA4, Merchant Center et Pinterest non verifies
- parcours checkout reel du point relais non confirme
- stock, couts, delais et tracking avant acquisition payante
- Atelier de Karine : composants, faisabilite, prix, stock, photos et rendu d'apercu

## References de reprise

- `docs/codex-handoff.md`
- `docs/workstreams.md`
- `docs/reference/2026-08-12-repository-workflow.md`
- `docs/checkpoints/2026-08-12-1819-repository-cleanup.md`
- `docs/checkpoints/2026-08-12-1829-homepage-shipping-labels-live.md`
- `docs/checkpoints/2026-08-12-1019-catalogue-v1-activation.md`
- `docs/checkpoints/2026-08-12-1746-three-lots-reconciliation-pdp.md`
- `docs/checkpoints/2026-08-12-1927-collection-pill-aqua.md`
- `docs/checkpoints/2026-08-12-1931-pdp-visual-correction.md`
- `docs/checkpoints/2026-08-13-0810-pdp-bonheur-heart.md`
- `docs/checkpoints/2026-08-13-1010-seasonal-editorial-preview.md`
- `docs/checkpoints/2026-08-13-1752-hub-inline-products-live.md`
- `docs/checkpoints/2026-08-13-1840-home-seasonal-da-live-handoff.md`
- `docs/checkpoints/2026-08-13-2058-editorial-heroes-gpt-image-2.md`
- `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md`
- `docs/superpowers/specs/2026-08-12-milaura-bandeau-hero-immersif.md`
