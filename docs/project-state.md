# MilAura - Etat courant du projet

Derniere mise a jour : 2026-08-12 20:00 CEST

## Etat en une phrase

Le catalogue V1, la capsule aigue-marine des collections et la PDP-P0 corrigee sont live ; le prochain lot est le bandeau mobile 56 px et le Hero immersif avec media reel.

## Source de verite et etat du depot

- Seul depot actif : `/Users/paesano/Documents/MilAura website/dawn-X-milaura`.
- Branche de travail et d'integration : `codex/milaura-integration`.
- `main` reste le miroir automatique du theme Shopify live.
- L'historique `main` a ete rattache a l'integration par `952d7587`, le commit automatique Shopify du deploiement collection par `8bc59704`, puis le miroir PDP `74553fd3` par `75ae911f`, sans modifier l'arbre source audite.
- Les branches durables sont `main` et `codex/milaura-integration`. La branche temporaire PDP a ete fermee apres integration et livraison.
- Quatre anciennes branches sont conservees sous des tags `archive/2026-08-12/*`, puis ont ete retirees des branches actives.
- Aucun worktree parallele de lot ne reste actif apres la fermeture PDP.
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
- `/pages/pierres-de-naissance`, avec 4 produits reels
- `/pages/cadeaux-anniversaire-de-mariage`, avec 3 produits reels

Collections publiques :

- `/collections/bagues-pierres`, 6 produits
- `/collections/par-pierre-aigue-marine`, 6 produits
- `/collections/par-pierre-agate`, 10 produits
- `/collections/par-pierre-quartz-rose`, 8 produits
- `/collections/par-pierre-lapis-lazuli`, 6 produits
- `/collections/par-pierre-amazonite`, 6 produits

Validation : 9 routes HTTP 200, un H1 par route, canoniques auto-referentes, aucun `noindex`, presence sitemap, Theme Check sans erreur et `productMutations: 0`.

## Homepage et design

- Hero actuel live et valide visuellement par Patrice.
- Selection d'aout, guide de decouverte, `Choisir sa pierre`, dock mobile et panier 30/50/80 sont live.
- Le bandeau d'engagement live reste trop epais sur mobile selon Patrice.
- Le Hero doit etre etudie avec une facette plus immersive, potentiellement une video reelle de 6 a 8 secondes dans le grand cabochon.
- Reference de qualite : `tiffany.com`, sans copie et sans decoration generique.
- Brief : `docs/superpowers/specs/2026-08-12-milaura-bandeau-hero-immersif.md`.

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
- bulle sociale historique restauree sur decision explicite de Patrice le 2026-08-12 : cinq etoiles dorees, message lisible en Lato, seul `bonheur` en Dancing Script et aucun diamant
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

Checkpoint : `docs/checkpoints/2026-08-12-1931-pdp-visual-correction.md`.

## Contrat produit

Le commit `6c4e6de4` fixe le contrat canonique complet : pierres, matieres, couleurs, intentions, occasions, disponibilite, fulfillment, provenance et six images minimum. Le pipeline reste draft-only et ne modifie ni hub ni collection publique.

Pipeline actif :

`/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation`

## Commits de consolidation du 2026-08-12

- `9220031e` : verite storefront et logistique
- `6c4e6de4` : contrat produit et catalogue
- `4853db6e` : procedure propre de parallelisation et archive
- `952d7587` : reconciliation de l'historique du miroir Shopify
- `6f9b90b5` : capsule aigue-marine des collections integree et livree live
- `8bc59704` : rattachement du miroir Shopify automatique apres le push collection, arbre source inchange
- `882c474b` : accent Dancing Script limite au mot `bonheur` dans la bulle sociale PDP
- `74553fd3` : commit miroir Shopify automatique du push PDP live
- `75ae911f` : rattachement du miroir Shopify PDP, arbre source audite inchange

Deploiement homepage du 2026-08-12 : `templates/index.json` uniquement sur le theme live `190430282075`. La homepage publique rend les deux nouveaux libelles 30 EUR et ne rend plus les deux anciens libelles 39 EUR. Checkpoint : `docs/checkpoints/2026-08-12-1829-homepage-shipping-labels-live.md`.

## Prochain ordre d'execution

1. Ouvrir un worktree declare pour le bandeau mobile 56 px et le Hero immersif.
2. Construire la proposition avec un media reel, un poster et le support `prefers-reduced-motion`.
3. Soumettre une seule proposition mobile et desktop a Patrice avant tout push live.

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
- `docs/superpowers/specs/2026-08-12-milaura-bandeau-hero-immersif.md`
