# MilAura - Etat courant du projet

Derniere mise a jour : 2026-08-12 18:19 CEST

## Etat en une phrase

Le catalogue V1 est public, le depot actif est consolide sur une branche d'integration permanente, les changements Shopify locaux sont versionnes, le clone divergent est archive et la prochaine decision reste le GO visuel PDP avant le lot bandeau mobile et Hero immersif.

## Source de verite et etat du depot

- Seul depot actif : `/Users/paesano/Documents/MilAura website/dawn-X-milaura`.
- Branche de travail et d'integration : `codex/milaura-integration`.
- `main` reste le miroir automatique du theme Shopify live.
- L'historique `main` a ete rattache a l'integration par `952d7587` sans modifier l'arbre source audite et sans deploiement Shopify.
- GitHub ne conserve que deux branches actives : `main` et `codex/milaura-integration`.
- Quatre anciennes branches sont conservees sous des tags `archive/2026-08-12/*`, puis ont ete retirees des branches actives.
- Aucun worktree parallele n'est actif au 2026-08-12 18:19 CEST.
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

## Livraison et verite Shopify versionnee

Le commit `9220031e` versionne 31 fichiers auparavant locaux. L'audit du 2026-08-12 a etabli :

- 27 fichiers theme etaient identiques bit a bit au theme live
- la politique publique confirme expedition sous 24 h du lundi au vendredi, livraison France sous 3 a 5 jours et point relais offert des 30 EUR
- `templates/cart.milaura.json` correspond a la normalisation Shopify live
- aucun produit, stock, prix ou statut n'a ete modifie

Quatre fichiers signales comme chevauches ont ete classes ainsi :

| Fichier | Nature exacte | Etat Shopify |
| --- | --- | --- |
| `sections/milaura-product-hero.liquid` | pills pierre, symbolique, qualite et provenance, plus seuil point relais 30 EUR, sur le socle PDP-P0 | partie pills/logistique deja live, durcissement PDP-P0 uniquement en developpement |
| `templates/index.json` | deux libelles livraison remplaces par point relais offert des 30 EUR | source versionnee, ces deux libelles ne sont pas encore deployes live |
| `templates/page.lp-promo-bougies.json` | CTA vers le vrai produit, seuil 30 EUR, FAQ 24 h et 3 a 5 jours | identique bit a bit au live |
| `templates/product.milaura-produit.json` | seuil 30 EUR, normalisation de cinq settings invalides, texte logistique, plus socle PDP-P0 | logistique deja live, durcissement PDP-P0 uniquement en developpement |

## PDP et ScratchToReveal

Le lot `2effdfbd` est valide techniquement uniquement sur le theme de developpement `199421952347` :

- Scratch invisible et non initialise sur la PDP
- quantite, ajout panier, drawer et cadeau automatique fonctionnels
- faux claims et preuves sociales non prouvees retires ou conditionnes
- Product JSON-LD corrige
- quatre blocs JSON-LD parses sans erreur
- un H1 et achat direct verifies sur une bague, un bracelet et une bougie

Ce lot n'est pas live et attend le GO visuel de Patrice.

## Contrat produit

Le commit `6c4e6de4` fixe le contrat canonique complet : pierres, matieres, couleurs, intentions, occasions, disponibilite, fulfillment, provenance et six images minimum. Le pipeline reste draft-only et ne modifie ni hub ni collection publique.

Pipeline actif :

`/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation`

## Commits de consolidation du 2026-08-12

- `9220031e` : verite storefront et logistique
- `6c4e6de4` : contrat produit et catalogue
- `4853db6e` : procedure propre de parallelisation et archive
- `952d7587` : reconciliation de l'historique du miroir Shopify

## Prochain ordre d'execution

1. Faire le controle visuel mobile et desktop de PDP-P0 sur le theme de developpement, puis obtenir le GO explicite de Patrice.
2. En cas de GO, deployer uniquement les six fichiers PDP autorises sur le live, effectuer le pullback et retester l'achat.
3. Ouvrir un worktree declare pour le bandeau mobile 56 px et le Hero immersif, avec un media reel, puis soumettre une seule proposition mobile et desktop.

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
- `docs/checkpoints/2026-08-12-1019-catalogue-v1-activation.md`
- `docs/checkpoints/2026-08-12-1746-three-lots-reconciliation-pdp.md`
- `docs/superpowers/specs/2026-08-12-milaura-bandeau-hero-immersif.md`
