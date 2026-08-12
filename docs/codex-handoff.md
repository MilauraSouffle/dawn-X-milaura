# MilAura - Handoff Codex actif

Date de mise a jour : 2026-08-12 17:46 CEST

## Mission de reprise

Faire valider PDP-P0 sur le theme de developpement, puis le livrer de facon ciblee si Patrice donne son GO. Le lot creatif suivant est un bandeau mobile de 56 px et un Hero a facette centrale video, uniquement apres choix d'un media reel.

## Lecture obligatoire

1. `AGENTS.md`
2. `docs/project-state.md`
3. `docs/checkpoints/2026-08-12-1019-catalogue-v1-activation.md`
4. `docs/checkpoints/2026-08-12-1506-reconciliation-ownership.md`
5. `docs/audits/2026-08-11-audit-fiche-produit-seo-aeo-geo.md`
6. `docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md`
7. `docs/checkpoints/2026-08-12-1746-three-lots-reconciliation-pdp.md`
8. `docs/superpowers/specs/2026-08-12-milaura-bandeau-hero-immersif.md`

## Faits live confirmes

- Theme public : `dawn-X-milaura/main`, ID `190430282075`.
- Theme de developpement : `Development (c105a8-mac-1)`, ID `199421952347`.
- Catalogue V1 public : 4 pages utiles en comptant `Choisir sa pierre`, 6 collections activees et 5 entrees de menu natives.
- Hero, selection d'aout, dock mobile, guide de decouverte, `Choisir sa pierre`, bandeau d'engagement et panier 30/50/80 sont live.
- Le quiz principal reste `/pages/diagnostic-emotionnel`.
- Le bandeau live est la version `c909f192`, posterieure au rollback `5d95b3b4`.
- Le panier live est maintenant versionne dans `6259200d` et correspond bit a bit au pullback du theme live.
- La homepage Bagues pointe vers `/collections/bagues-pierres`, commit `8e19bd12`, live et developpement.
- Les libelles panier 30/50/80 sont corriges par `7c823144`, live et developpement.
- PDP-P0 et S1A sont valides sur le theme de developpement dans `2effdfbd`, mais ne sont pas live.

## Catalogue V1 public

Routes publiques :

- `/pages/bijoux-par-pierre` ;
- `/pages/pierres-de-naissance` ;
- `/pages/cadeaux-anniversaire-de-mariage` ;
- `/collections/bagues-pierres` ;
- `/collections/par-pierre-aigue-marine` ;
- `/collections/par-pierre-agate` ;
- `/collections/par-pierre-quartz-rose` ;
- `/collections/par-pierre-lapis-lazuli` ;
- `/collections/par-pierre-amazonite`.

Le checkpoint `docs/checkpoints/2026-08-12-1019-catalogue-v1-activation.md` confirme 9 routes HTTP 200, un H1 par route, canoniques auto-referentes, aucune directive `noindex`, presence sitemap et `productMutations: 0`.

## Premier lot termine : integration UI du catalogue

- `templates/index.json` utilise `shopify://collections/bagues-pierres` ;
- le changement est live et en developpement ;
- pullback identique ;
- homepage publique avec un H1 ;
- navigation native correcte, sans suppression risquee du fallback Liquid garde.

## Deuxieme lot pret en developpement : PDP-P0 et Scratch S1A

Objectif atteint techniquement sur le theme `199421952347` : produire une PDP fiable sans gamification Scratch visible ou initialisee.

P0 :

- centraliser la promesse logistique a partir de la disponibilite reelle ;
- retirer les preuves sociales fabriquees ;
- rendre les claims produit conditionnels a des metafields verifies ;
- corriger Product JSON-LD et BreadcrumbList ;
- conserver variantes, quantite, composition, ajout panier, drawer et avantages 30/50/80 ;
- tester une bague, un bracelet et une bougie, avec une fiche pilote avant generalisation.

Fichiers locaux a isoler :

- `sections/milaura-product-hero.liquid` ;
- `snippets/milaura-product-purchase-fallback.liquid` ;
- `templates/product.milaura-produit.json` ;
- `templates/page.lp-promo-bougies.json`.

Le commit cible est `2effdfbd`. La bague pilote a valide quantite, prix, ajout panier, drawer et cadeau automatique. La bague, le bracelet et la bougie ont chacun un H1, un bouton d'achat, une quantite, quatre JSON-LD valides et aucun Scratch visible. Ne pas publier sans GO visuel de Patrice.

## Troisieme lot : livraison globale

La formulation locale vise :

- point relais offert des 30 EUR ;
- expedition sous 24 h ;
- livraison sous 3 a 5 jours en France metropolitaine.

Ces remplacements couvrent de nombreuses surfaces et ne sont pas une source de verite dynamique. Ils doivent etre inventories, relies au mode de disponibilite produit et verifies contre les politiques, le checkout et le JSON-LD avant commit.

## Lot creatif suivant, specifie mais non implemente

Retour Patrice du 2026-08-12 :

- amincir le bandeau sur mobile ;
- ajouter un detail de marque ou un bijou sans redevenir decoratif ;
- rendre les trois cabochons du Hero plus immersifs ;
- etudier une video premium dans le grand cabochon, avec mannequin et bijou ;
- utiliser `tiffany.com` comme niveau d'exigence, pas comme modele a copier.

Direction recommandee : bandeau 56 px mobile sur une ligne avec un detail de marque reel, puis facette centrale video de 6 a 8 secondes dans le Hero, poster et reduced motion. Le brief complet est `docs/superpowers/specs/2026-08-12-milaura-bandeau-hero-immersif.md`. Les assets rejetes du 2026-08-11 ne constituent pas une base creative.

## Etat Git

- Branche : `codex/milaura-reconcile-2026-08-07`.
- `cb0da71b feat: activate catalogue v1` pousse le 2026-08-12.
- `6259200d fix: preserve live cart rewards` pousse le 2026-08-12.
- `c4200135 docs: reconcile catalogue v1 state` pousse le 2026-08-12.
- `8e19bd12 fix: route homepage rings to public collection` pousse et livre le 2026-08-12.
- `2effdfbd fix: harden product purchase truth` est livre seulement en developpement.
- `7c823144 fix: align cart reward labels` est livre en developpement et en live.
- 37 fichiers suivis concurrents restent modifies hors documentation de cette reprise.
- Aucun fichier concurrent n'a ete restaure, nettoye ou supprime.
- Le checkpoint `docs/checkpoints/2026-08-12-1746-three-lots-reconciliation-pdp.md` est la reprise operationnelle la plus recente.

## Interdits de reprise

- Ne pas merger globalement vers `origin/main`, qui reste le miroir Shopify.
- Ne pas pousser le theme complet.
- Ne pas supprimer les sauvegardes, copies, assets ou fichiers temporaires sans proprietaire confirme.
- Ne pas traiter les changements locaux de livraison comme deja live.
- Ne pas traiter S1A comme livre sur le theme live.
- Ne pas remplacer ou supprimer le diagnostic emotionnel.
- Ne pas reprendre le Cercle ou la page compte dans ce cycle.
- Ne pas publier un produit CAN ; les produits restent draft-only jusqu'a la decision de Patrice.

## Prompt de reprise

> Reprends MilAura depuis `docs/codex-handoff.md`, `docs/project-state.md` et `docs/checkpoints/2026-08-12-1746-three-lots-reconciliation-pdp.md`. Le catalogue V1, la route homepage Bagues et les libelles panier sont live. PDP-P0 avec retrait Scratch est valide uniquement sur le theme de developpement dans `2effdfbd`. Demande le GO visuel de Patrice avant de pousser ces six fichiers live. Ensuite, choisis un media reel et suis `docs/superpowers/specs/2026-08-12-milaura-bandeau-hero-immersif.md` pour produire une seule proposition bandeau 56 px et Hero video sur le theme de developpement. Preserve les 37 fichiers concurrents et ne touche pas au Cercle.
