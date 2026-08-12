# MilAura - Etat courant du projet

Derniere mise a jour : 2026-08-12 15:06 CEST

## Etat en une phrase

Le catalogue V1 est public et operationnel, le Hero, la selection d'aout, `Choisir sa pierre`, le dock mobile, le bandeau d'engagement et le panier 30/50/80 sont live. La priorite est maintenant de consolider les destinations UI, puis de traiter la verite PDP et le retrait de l'ancien Scratch avant toute nouvelle passe creative.

## Regles de conduite actives

- Une seule session possede a un instant donne le theme actif, la branche Git et les deploiements Shopify.
- Aucun commit global, aucun push complet du theme, aucun reset et aucun nettoyage du worktree concurrent.
- Les deploiements Shopify restent cibles, suivis d'un pullback et d'une comparaison locale.
- Une validation technique ne vaut jamais validation creative de Patrice.
- Aucun produit, brouillon, stock ou prix n'est modifie par un chantier theme ou catalogue sans autorisation explicite.
- Le quiz `/pages/diagnostic-emotionnel` reste le funnel principal et ne doit pas etre remplace.
- Le Cercle et la page compte restent hors du chemin critique actuel.
- Les treize anciennes collections sans metas definitives restent dependantes de l'inventaire, du stock et du contenu fiable.

## Catalogue V1 public

Activation validee le 2026-08-12 dans le commit `cb0da71b` et documentee dans `docs/checkpoints/2026-08-12-1019-catalogue-v1-activation.md`.

Pages publiques :

- `/pages/choisir-sa-pierre` ;
- `/pages/bijoux-par-pierre` ;
- `/pages/pierres-de-naissance`, avec 4 produits reels ;
- `/pages/cadeaux-anniversaire-de-mariage`, avec 3 produits reels.

Collections publiques :

- `/collections/bagues-pierres`, 6 produits ;
- `/collections/par-pierre-aigue-marine`, 6 produits ;
- `/collections/par-pierre-agate`, 10 produits ;
- `/collections/par-pierre-quartz-rose`, 8 produits ;
- `/collections/par-pierre-lapis-lazuli`, 6 produits ;
- `/collections/par-pierre-amazonite`, 6 produits.

Navigation Shopify native :

- `Pierres & Mineraux` : Choisir sa pierre, Bijoux par pierre, Pierres de naissance ;
- `Bijoux & Pierres Naturelles` : Bagues en pierres, Cadeaux de mariage.

Validation catalogue V1 : 9 routes HTTP 200, un H1 par route, canoniques auto-referentes, aucun `noindex`, presence dans les sitemaps, Theme Check sans erreur, pullback live et developpement identique pour les 9 fichiers cibles. Le journal de mutation confirme `productMutations: 0`.

## Etat homepage et design live

- Hero live et visuellement valide par Patrice : `La beaute des bijoux rencontre les vertus des pierres.`
- Selection d'aout live : homepage et `/collections/selection-aout-2026`.
- Guide de decouverte live : type, emotion et diagnostic.
- Landing `Choisir sa pierre` live avec Benefits Explorer et triptyque anime.
- Bandeau live depuis `c909f192` : `L'engagement MilAura`, service humain, equipe disponible 6j/7 et commandes preparees et expediees depuis l'atelier a Metz.
- Reference de qualite pour la prochaine passe creative : `tiffany.com`.

Retour Patrice du 2026-08-12, non implemente :

- le bandeau est trop epais sur mobile et manque d'un detail de marque ;
- le Hero est beau, mais ses trois cabochons pourraient devenir plus immersifs ;
- piste a etudier : le plus grand cabochon accueille une video courte et premium d'un mannequin presentant un bijou ;
- toute evolution doit commencer par des propositions mobile et desktop, sans reutiliser les sprites, gemmes generees ou detourages rejetes le 2026-08-11.

## Panier et livraison

Avantages live :

- 30 EUR : point relais offert via `MILAURA-RELAIS30` ;
- 50 EUR : cadeau mensuel, variante `53142713925979` ;
- 80 EUR : remise de 15 % via `MILAURA15-80` ;
- `VINTED10` reste manuel.

Les trois fichiers du moteur panier ont ete verifies par pullback live, committes dans `6259200d` et pousses le 2026-08-12 :

- `assets/milaura-cart-rewards-auto.js` ;
- `config/settings_schema.json` ;
- `snippets/milaura-cart-rewards-drawer.liquid`.

Limite de preuve : aucun checkout reel n'a encore confirme le parcours point relais complet.

L'harmonisation `point relais des 30 EUR`, `expedition sous 24 h` et `livraison sous 3 a 5 jours` existe encore dans de nombreux fichiers locaux non livres. Elle ne doit pas etre committee ou deployee en bloc avant audit des proprietaires et de la source de verite logistique.

## PDP et ScratchToReveal

L'audit initial du 2026-08-11 est `docs/audits/2026-08-11-audit-fiche-produit-seo-aeo-geo.md`.

Risques P0 non clos :

- promesse logistique contradictoire entre interface, politiques et JSON-LD ;
- preuves sociales deterministes ou generiques ;
- claims de fabrication, certification et sourcing non conditionnes par une preuve produit ;
- Product JSON-LD incoherent ;
- informations produit insuffisamment hierarchisees sur mobile.

Le patch S1A de retrait Scratch est local et non livre. Il touche `sections/milaura-product-hero.liquid`, qui contient aussi des changements concurrents de badges et metafields. Le lot doit donc etre separe et traite avec PDP-P0 sur une fiche pilote avant commit ou live.

## Contrat de donnees et pipeline produit

Le contrat canonique reste :

- `stone_handle` pour la pierre principale ;
- `stone_handles` pour les pierres secondaires ou multiples ;
- `stone_benefits` avec le libelle public `Symbolique traditionnelle` ;
- `content_updated_at` pour la date editoriale.

Le pipeline CAN/Camilla V1.2 vit dans `/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation`. Il reste draft-only, suit le prix conseille CAN exact, bloque les ambiguites lot/unite et reserve la publication finale a Patrice.

## Etat Git et ownership au 2026-08-12 15:06 CEST

- Branche : `codex/milaura-reconcile-2026-08-07`.
- Branche distante synchronisee apres `6259200d`.
- Catalogue V1 : `cb0da71b`, pousse.
- Panier live : `6259200d`, pousse.
- 41 fichiers suivis restent modifies localement.
- Des fichiers non suivis appartiennent a des experiences design, des checkpoints, des sauvegardes, des copies temporaires et au fallback PDP.
- Matrice d'ownership : `docs/checkpoints/2026-08-12-1506-reconciliation-ownership.md`.

## Prochain ordre d'execution

1. Mettre les destinations homepage et navigation en coherence avec le catalogue V1 public.
2. Executer PDP-P0 et S1A sur une fiche pilote, sans deploiement avant validation.
3. Auditer et isoler l'harmonisation livraison.
4. Ouvrir ensuite un lot creatif dedie au bandeau mobile et au Hero immersif.
5. Reprendre Karine, Sur mesure, Atelier des emotions, Cadeaux, Journal, puis Cercle.

## Dependances encore ouvertes

- inventaire et retrait controle des 18 baguettes minerales ;
- treize anciennes collections sans metas definitives ;
- pages mensuelles de naissance et pages enfants mariage ;
- GSC, GA4, Merchant Center et Pinterest non verifies ;
- stock, couts, delais et tracking avant acquisition payante ;
- Atelier de Karine : composants, faisabilite, prix, stock, photos et rendu d'apercu.

## References de reprise

- Handoff actif : `docs/codex-handoff.md`.
- Plan canonique : `docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md`.
- Catalogue V1 : `docs/checkpoints/2026-08-12-1019-catalogue-v1-activation.md`.
- Ownership : `docs/checkpoints/2026-08-12-1506-reconciliation-ownership.md`.
- Audit PDP : `docs/audits/2026-08-11-audit-fiche-produit-seo-aeo-geo.md`.
- Bandeau : commit `c909f192`.
