# MilAura - Handoff Codex actif

Date de mise a jour : 2026-08-12 15:06 CEST

## Mission de reprise

Consolider le theme lot par lot depuis le catalogue V1 public, puis executer PDP-P0 et le retrait Scratch S1A sur une fiche pilote. Ne pas demarrer une mutation creative du bandeau ou du Hero avant d'avoir stabilise les destinations UI et separe les changements concurrents.

## Lecture obligatoire

1. `AGENTS.md`
2. `docs/project-state.md`
3. `docs/checkpoints/2026-08-12-1019-catalogue-v1-activation.md`
4. `docs/checkpoints/2026-08-12-1506-reconciliation-ownership.md`
5. `docs/audits/2026-08-11-audit-fiche-produit-seo-aeo-geo.md`
6. `docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md`

## Faits live confirmes

- Theme public : `dawn-X-milaura/main`, ID `190430282075`.
- Theme de developpement : `Development (c105a8-mac-1)`, ID `199421952347`.
- Catalogue V1 public : 4 pages utiles en comptant `Choisir sa pierre`, 6 collections activees et 5 entrees de menu natives.
- Hero, selection d'aout, dock mobile, guide de decouverte, `Choisir sa pierre`, bandeau d'engagement et panier 30/50/80 sont live.
- Le quiz principal reste `/pages/diagnostic-emotionnel`.
- Le bandeau live est la version `c909f192`, posterieure au rollback `5d95b3b4`.
- Le panier live est maintenant versionne dans `6259200d` et correspond bit a bit au pullback du theme live.

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

## Premier lot actif : integration UI du catalogue

Actions autorisees et attendues :

1. remplacer la destination historique `shopify://collections/bagues` de `templates/index.json` par `shopify://collections/bagues-pierres` ;
2. verifier que les cartes du guide utilisent uniquement les destinations maintenant publiques ;
3. confirmer que la navigation native Shopify rend `Choisir sa pierre` sans doublon avant de supprimer un fallback Liquid eventuel ;
4. verifier le double H1 homepage signale par le checkpoint catalogue ;
5. valider desktop, mobile, Theme Check et `git diff --check` ;
6. demander le GO de Patrice avant tout push live si le rendu change.

## Deuxieme lot : PDP-P0 et Scratch S1A

Objectif : produire une premiere PDP fiable sans gamification Scratch visible ou initialisee.

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

Risque : `sections/milaura-product-hero.liquid` melange actuellement S1A et des changements concurrents de badges/metafields. Ne pas committer le fichier en bloc sans relecture fonctionnelle complete.

## Troisieme lot : livraison globale

La formulation locale vise :

- point relais offert des 30 EUR ;
- expedition sous 24 h ;
- livraison sous 3 a 5 jours en France metropolitaine.

Ces remplacements couvrent de nombreuses surfaces et ne sont pas une source de verite dynamique. Ils doivent etre inventories, relies au mode de disponibilite produit et verifies contre les politiques, le checkout et le JSON-LD avant commit.

## Lot creatif suivant, non implemente

Retour Patrice du 2026-08-12 :

- amincir le bandeau sur mobile ;
- ajouter un detail de marque ou un bijou sans redevenir decoratif ;
- rendre les trois cabochons du Hero plus immersifs ;
- etudier une video premium dans le grand cabochon, avec mannequin et bijou ;
- utiliser `tiffany.com` comme niveau d'exigence, pas comme modele a copier.

Methode : captures live mobile et desktop, au maximum trois propositions, verification performance et accessibilite, puis GO visuel avant code ou live. Les assets rejetes du 2026-08-11 ne constituent pas une base creative.

## Etat Git

- Branche : `codex/milaura-reconcile-2026-08-07`.
- `cb0da71b feat: activate catalogue v1` pousse le 2026-08-12.
- `6259200d fix: preserve live cart rewards` pousse le 2026-08-12.
- 41 fichiers suivis restent modifies apres isolation du panier.
- Aucun fichier concurrent n'a ete restaure, nettoye ou supprime.
- Les documents canoniques et la matrice d'ownership forment un lot documentation autonome.

## Interdits de reprise

- Ne pas merger globalement vers `origin/main`, qui reste le miroir Shopify.
- Ne pas pousser le theme complet.
- Ne pas supprimer les sauvegardes, copies, assets ou fichiers temporaires sans proprietaire confirme.
- Ne pas traiter les changements locaux de livraison comme deja live.
- Ne pas traiter S1A comme livre.
- Ne pas remplacer ou supprimer le diagnostic emotionnel.
- Ne pas reprendre le Cercle ou la page compte dans ce cycle.
- Ne pas publier un produit CAN ; les produits restent draft-only jusqu'a la decision de Patrice.

## Prompt de reprise

> Reprends MilAura depuis `docs/codex-handoff.md`, `docs/project-state.md`, `docs/checkpoints/2026-08-12-1019-catalogue-v1-activation.md` et `docs/checkpoints/2026-08-12-1506-reconciliation-ownership.md`. Le catalogue V1 et le panier 30/50/80 sont maintenant versionnes et pousses sur `codex/milaura-reconcile-2026-08-07`. Commence par integrer les nouvelles destinations publiques dans la homepage et la navigation, sans push live avant validation si le rendu change. Puis isole PDP-P0 et Scratch S1A sur une fiche pilote. Preserve les 41 fichiers concurrents, ne committe jamais tout le worktree et ne touche pas au Cercle. Le bandeau mobile et le Hero video sont un lot creatif separe apres consolidation.
