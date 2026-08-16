# Checkpoint PDP Hero desktop preview

Date : 2026-08-16 10:19 CEST

## Perimetre livre

- Branche : `codex/milaura-pdp-hero-desktop-20260816`
- Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/pdp-hero-desktop-20260816`
- Preview Shopify dediee : `200007352667`, dupliquee du live `190430282075`
- Fichiers fonctionnels :
  - `sections/milaura-product-hero.liquid`
  - `sections/milaura-sticky-bar.liquid`
- Mobile du Hero conserve. Colonne droite desktop conservee sans compacter ses espacements ni son panneau d'achat.
- Aucun fichier Ruban/recommandations, template, navigation, dock ou panier modifie.
- Aucun deploiement live effectue.

## Implementation

- Composition desktop en deux colonnes : image principale bornee a la hauteur utile du viewport, preuve sociale puis informations d'achat a droite.
- Une seule image produit est rendue dans la grande galerie desktop ; les autres vues sont accessibles dans une rail de miniatures sous le bloc Karine.
- Changement de vue HTML/JS stable, avec `aria-pressed` et conservation du zoom de l'image principale.
- Sticky desktop activee seulement lorsque le CTA principal et le Hero complet sont passes sous la navbar ; disparition bidirectionnelle au retour au-dessus du seuil.
- Seuil mobile conserve : la sticky apparait des que le CTA principal est depasse, sans attendre la fin du Hero.

## Validation technique

- `git diff --check` : OK.
- `shopify theme check` : 0 erreur, 17 avertissements historiques hors des deux fichiers du lot.
- Push Shopify cible avec `--only`, `--nodelete` et `--strict` : OK sur la preview `200007352667`.
- Pullback : les deux blobs distants sont byte-identiques aux fichiers locaux.
- Tests navigateur sur une fiche produit publique valide :
  - 2048 x 800 : contenu utile du Hero visible, Hero a 4 px de debordement uniquement par son padding bas, aucune information masquee, sticky inactive au chargement, aucun overflow horizontal.
  - 1440 x 900 : Hero complet visible, sticky inactive au chargement, aucun overflow horizontal.
  - 1280 x 720 : colonne droite non compactee conformement a la decision Patrice ; fin de panneau a 33 px sous le viewport. Ce format court reste a arbitrer apres validation visuelle.
  - 360, 390 et 430 px : galerie mobile conservee, rail desktop masque, sticky inactive au chargement.
  - Interaction miniatures : changement de `src` confirme et etat `aria-pressed` correct.
  - Sticky desktop : masquee CTA depasse mais Hero encore visible ; visible apres depassement du Hero ; masquee au retour en haut.
  - Sticky mobile : visible des le depassement du CTA alors que le Hero est encore visible ; masquee au retour au-dessus du CTA.

## Etat et prochaine decision

- Lot techniquement pret a integrer mais non approuve visuellement.
- Attendre le GO visuel explicite de Patrice sur la preview.
- Apres GO visuel, integrer via le checkout maitre puis attendre un GO live distinct avant tout push vers `190430282075`.
- La preview incomplete `200007188827`, creee pendant une duplication Shopify encore asynchrone, a ete supprimee le 2026-08-16 apres validation de `200007352667`.
