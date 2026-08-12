# MilAura - Etat courant du projet

Derniere mise a jour : 2026-08-12 17:46 CEST

## Etat en une phrase

Le catalogue V1 et sa destination homepage Bagues sont publics, le panier 30/50/80 est versionne avec ses libelles corriges, et PDP-P0 avec retrait Scratch est valide sur le theme de developpement. La prochaine decision est le GO visuel PDP, puis le prototype bandeau mobile et Hero immersif avec un media reel.

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

Retour Patrice du 2026-08-12, documente mais non implemente :

- le bandeau est trop epais sur mobile et manque d'un detail de marque ;
- le Hero est beau, mais ses trois cabochons pourraient devenir plus immersifs ;
- piste a etudier : le plus grand cabochon accueille une video courte et premium d'un mannequin presentant un bijou ;
- toute evolution doit commencer par des propositions mobile et desktop, sans reutiliser les sprites, gemmes generees ou detourages rejetes le 2026-08-11.

Direction recommandee : bandeau mobile ramene de 108 px a 56 px sur une seule ligne, detail de marque discret issu d'un vrai bijou, puis facette centrale du Hero transformee en media principal. Le brief, les contraintes video et les captures live sont dans `docs/superpowers/specs/2026-08-12-milaura-bandeau-hero-immersif.md`.

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

Le controle navigateur du 2026-08-12 a revele deux anciens libelles Shopify inverses. Le commit `7c823144` force maintenant les libelles canoniques `Point relais offert`, `Cadeau du mois offert` et `-15 % sur la commande`. Le snippet est live et en developpement, avec pullback bit a bit sur les deux themes.

Limite de preuve : aucun checkout reel n'a encore confirme le parcours point relais complet.

L'harmonisation `point relais des 30 EUR`, `expedition sous 24 h` et `livraison sous 3 a 5 jours` existe encore dans de nombreux fichiers locaux non livres. Elle ne doit pas etre committee ou deployee en bloc avant audit des proprietaires et de la source de verite logistique.

## PDP et ScratchToReveal

L'audit initial du 2026-08-11 est `docs/audits/2026-08-11-audit-fiche-produit-seo-aeo-geo.md`. Le lot `2effdfbd` est maintenant deploye uniquement sur le theme de developpement `199421952347`.

Etat confirme en developpement :

- Scratch invisible et non initialise sur la PDP ;
- landing bougies Scratch desactivee ;
- quantite, ajout panier, drawer et cadeau automatique fonctionnels ;
- preuves sociales et claims generiques non prouves retires ou desactives ;
- texte de Karine factuel ;
- faux MPN et donnees logistiques statiques retires du Product JSON-LD ;
- quatre blocs JSON-LD parses sans erreur ;
- un H1, achat direct et absence Scratch verifies sur une bague, un bracelet et une bougie.

Le lot n'est pas live. Il attend le GO visuel de Patrice. La verite logistique globale, les politiques et le checkout point relais restent un lot distinct.

## Contrat de donnees et pipeline produit

Le contrat canonique reste :

- `stone_handle` pour la pierre principale ;
- `stone_handles` pour les pierres secondaires ou multiples ;
- `stone_benefits` avec le libelle public `Symbolique traditionnelle` ;
- `content_updated_at` pour la date editoriale.

Le pipeline CAN/Camilla V1.2 vit dans `/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation`. Il reste draft-only, suit le prix conseille CAN exact, bloque les ambiguites lot/unite et reserve la publication finale a Patrice.

## Etat Git et ownership au 2026-08-12 17:46 CEST

- Branche : `codex/milaura-reconcile-2026-08-07`.
- Branche distante synchronisee jusqu'a `8e19bd12` avant le push final de cette reprise.
- Catalogue V1 : `cb0da71b`, pousse.
- Panier live : `6259200d`, pousse.
- Documentation reconciliee : `c4200135`, poussee.
- Destination homepage Bagues : `8e19bd12`, poussee et live.
- PDP-P0 et S1A : `2effdfbd`, theme de developpement uniquement.
- Libelles panier : `7c823144`, live et developpement.
- 37 fichiers suivis restent modifies localement hors documentation de cette reprise.
- Les fichiers non suivis d'experiences design, sauvegardes et copies temporaires restent intacts.
- Matrice d'ownership : `docs/checkpoints/2026-08-12-1506-reconciliation-ownership.md`.

## Prochain ordre d'execution

1. Obtenir le GO visuel de Patrice sur PDP-P0 en developpement.
2. En cas de GO, pousser uniquement les six fichiers `2effdfbd` sur le theme live, puis pullback et test achat.
3. Choisir ou tourner une video reelle MilAura de 6 a 8 secondes avec son poster.
4. Prototyper sur le theme de developpement le bandeau 56 px et le Hero Cabochon cinema, puis demander le GO visuel.
5. Auditer et isoler l'harmonisation livraison avant de reprendre Karine, Sur mesure, Atelier des emotions, Cadeaux, Journal, puis Cercle.

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
- Trois lots : `docs/checkpoints/2026-08-12-1746-three-lots-reconciliation-pdp.md`.
- Audit PDP : `docs/audits/2026-08-11-audit-fiche-produit-seo-aeo-geo.md`.
- Brief bandeau et Hero : `docs/superpowers/specs/2026-08-12-milaura-bandeau-hero-immersif.md`.
- Bandeau : commit `c909f192`.
