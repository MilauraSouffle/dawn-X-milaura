# MilAura - Reconciliation, catalogue UI et PDP-P0

Date : 2026-08-12 17:46 CEST
Branche : `codex/milaura-reconcile-2026-08-07`

## Resultat

Les trois lots recommandes sont maintenant isoles :

1. la documentation, les handoffs et les frontieres d'ownership ont ete reconcilies ;
2. la destination homepage Bagues pointe vers la collection V1 publique ;
3. PDP-P0 et le retrait Scratch S1A sont valides sur le theme de developpement, mais pas publies sans GO visuel de Patrice.

Un correctif independant a aussi remis les libelles du panier en coherence avec les seuils live 30/50/80.

## Commits fonctionnels

- `cb0da71b feat: activate catalogue v1` ;
- `6259200d fix: preserve live cart rewards` ;
- `c4200135 docs: reconcile catalogue v1 state` ;
- `8e19bd12 fix: route homepage rings to public collection` ;
- `2effdfbd fix: harden product purchase truth` ;
- `7c823144 fix: align cart reward labels`.

## Lot 1 - consolidation

- Le commit catalogue V1 et le panier live ont ete preserves sur la branche canonique.
- `docs/project-state.md`, `docs/codex-handoff.md`, le plan canonique, l'audit PDP et les handoffs utiles ont ete rapproches de l'etat reel.
- Aucun merge global vers `origin/main`, aucun reset, aucun clean et aucun theme push complet n'ont ete executes.
- Les fichiers concurrents restent intacts et hors des commits cibles.

## Lot 2 - integration catalogue UI

- `templates/index.json` pointe maintenant vers `shopify://collections/bagues-pierres`.
- Le changement est live sur `190430282075` et present sur le theme de developpement `199421952347`.
- Pullback live et developpement identiques au fichier cible livre.
- La homepage publique rend `/collections/bagues-pierres`, un seul H1 et aucun doublon visible de `Choisir sa pierre` dans la navigation native.

## Lot 3 - PDP-P0 et Scratch S1A

Commit `2effdfbd`, six fichiers :

- `sections/milaura-product-hero.liquid` ;
- `sections/milaura-product-reassurance.liquid` ;
- `sections/milaura-product-trust-block.liquid` ;
- `snippets/milaura-product-purchase-fallback.liquid` ;
- `templates/page.lp-promo-bougies.json` ;
- `templates/product.milaura-produit.json`.

Etat sur le theme de developpement :

- Scratch invisible et non initialise sur la PDP ;
- bloc Scratch de la landing bougies desactive ;
- variantes, quantite, composition, ajout panier, drawer et badge panier preserves ;
- preuves sociales generiques retirees ;
- claims de confiance generiques desactives ;
- texte de Karine rendu factuel ;
- faux MPN, `shippingDetails` et politique de retour statique retires du Product JSON-LD ;
- valeurs metafields converties en texte avant serialisation JSON-LD ;
- message livraison neutralise en `Livraison calculee au paiement`.

Validation Playwright sur la bague Aigue-marine :

- un H1 ;
- quantite de 1 a 2 et prix CTA de 69,90 EUR a 139,80 EUR ;
- `POST /cart/add.js` HTTP 200 ;
- `GET /cart.js` HTTP 200 ;
- drawer ouvert avec quantite 2, total 139,80 EUR et cadeau automatique ;
- quatre blocs JSON-LD parses sans erreur : graph, Product, BreadcrumbList et FAQPage ;
- aucun `shippingDetails` ni `mpn` dans le JSON-LD rendu.

Controle de generalisation :

- bracelet Oeil de tigre : un H1, quantite, ajout panier, quatre JSON-LD valides, aucun Scratch visible ;
- bougie Serenite Amethyste : un H1, quantite, ajout panier, quatre JSON-LD valides, aucun Scratch visible.

Le pullback du theme de developpement est identique pour cinq fichiers sur six. Shopify a normalise `templates/product.milaura-produit.json` en retirant cinq reglages historiques non declares du sticky bar et en reordonnant la cle `disabled`. Les six intentions fonctionnelles verifiees sont bien presentes dans le template distant.

Le lot PDP-P0 n'est pas live. La validation technique ne vaut pas GO visuel.

## Correctif panier live

Le test reel a revele que les seuils etaient corrects mais que deux libelles distants historiques etaient inverses. Le commit `7c823144` normalise maintenant :

- 30 EUR : `Point relais offert` ;
- 50 EUR : `Cadeau du mois offert` ;
- 80 EUR : `-15 % sur la commande`.

Le snippet cible est deploye sur le theme de developpement et le theme live. Le pullback des deux themes correspond bit a bit a `HEAD`. Le drawer de developpement a ete controle avec un panier a 139,80 EUR.

## Validations techniques

- Theme Check sur archive Git propre : 0 erreur, 29 avertissements historiques ;
- JSON des templates valide ;
- `git diff --check` valide sur les lots cibles ;
- tests mobile et desktop dans un navigateur reel ;
- aucun produit, stock, prix ou brouillon modifie ;
- aucun deploiement global du theme.

Captures :

- `output/playwright/pdp-p0-dev-mobile-2026-08-12.png` ;
- `output/playwright/pdp-p0-dev-cart-corrected-2026-08-12.png` ;
- `output/playwright/milaura-home-live-mobile-top-creative-baseline-2026-08-12.png` ;
- `output/playwright/milaura-home-live-desktop-creative-baseline-2026-08-12.png`.

## Frontiere creative

Le diagnostic du bandeau et du Hero est formalise dans `docs/superpowers/specs/2026-08-12-milaura-bandeau-hero-immersif.md`.

Direction recommandee : bandeau mobile de 56 px sur une ligne, detail de marque reel et discret, puis facette centrale du Hero transformee en media principal video. Aucun code creatif ni asset rejete n'a ete utilise.

## Reprise exacte

1. Patrice controle la PDP de developpement et donne ou refuse le GO live.
2. En cas de GO, pousser uniquement les six fichiers de `2effdfbd` sur `190430282075`, puis pullback et test achat original.
3. Choisir ou produire la video reelle et son poster avant de coder le bandeau et le Hero sur le theme de developpement.
4. Garder l'audit livraison globale comme lot distinct des fichiers concurrents deja presents.

## Risques restants

- parcours reel du point relais non confirme au checkout ;
- checkout reel non execute sur le bracelet et la bougie, meme si leur rendu et leur achat direct sont presents ;
- formulations livraison concurrentes encore locales et non consolidees ;
- GSC, GA4, Merchant Center et Pinterest non verifies ;
- inventaire des 18 baguettes et treize anciennes collections toujours ouverts ;
- quatre erreurs console historiques liees au preview Shopify et aux doubles declarations `SearchForm` et `PredictiveSearch`, sans blocage du parcours teste.
