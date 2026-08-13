# Produits integres aux hubs Mariage et Naissance

Date : 2026-08-13 17:41 CEST

> Etat historique d'apercu. La decision finale de Patrice conserve les deux cross-sells et le lot est desormais integre et live. Voir `docs/checkpoints/2026-08-13-1752-hub-inline-products-live.md`.

## Statut

- Lot implemente, pousse sur sa branche et deploie uniquement sur le theme de developpement `199421952347`.
- Theme live `190430282075` non modifie par ce lot.
- GO visuel de Patrice encore requis avant integration et deploiement live.
- Branche : `codex/milaura-hub-inline-products-20260813`.
- Commit fonctionnel : `560a7fdf` (`feat: embed products in catalogue correspondences`).

## Intention validee

Le panneau actif d'une annee de mariage ou d'un mois de naissance devient une vraie surface marchande. Les cartes produit apparaissent directement sous le texte du repere. Les collections Amethyste et Aigue-marine restent les sources de verite : une future modification de leur composition se repercutera automatiquement sur les hubs.

La section generique `Pour marquer l'instant` et son equivalent `Le choix de Karine` etaient un cross-sell editorial ajoute lors de la passe precedente. Ils ne faisaient pas partie de la page historique. Ils ont ete retires des templates Mariage et Naissance car ils dupliquaient maintenant la fonction des panneaux.

## Produits affiches

### Mariage

| Repere | Source | Produits rendus sur le theme de developpement |
| --- | --- | ---: |
| 4 ans, noces de cire | collection `bougies-emotionnelles` | 5 |
| 17 ans, noces de rose | collection `par-pierre-quartz-rose` | 8 |
| 25 ans, noces d'argent | produit explicitement tague `mariage:25-argent` | 1 |
| 40 ans, noces d'emeraude | produit Emeraude public | 1 |
| 42 ans, noces de nacre | trois produits Nacre publics | 3 |
| 48 ans, noces d'amethyste | collection `par-pierre-amethyste` | 11 |
| 50 ans, noces d'or | aucune offre suffisamment fiable | 0 |

### Naissance

| Mois | Source | Produits rendus sur le theme de developpement |
| --- | --- | ---: |
| Janvier | aucun Grenat public identifie | 0 |
| Fevrier | collection `par-pierre-amethyste` | 11 |
| Mars | collection `par-pierre-aigue-marine` | 6 |
| Avril | aucun Diamant public identifie | 0 |
| Mai | produit Emeraude public | 1 |
| Juin | aucune Perle, Alexandrite ou Pierre de lune publique fiable | 0 |
| Juillet | aucun Rubis public identifie | 0 |
| Aout | trois produits Peridot publics | 3 |
| Septembre | aucun Saphir public identifie | 0 |
| Octobre | un produit Opale et quatre produits Tourmaline publics | 5 |
| Novembre | un produit Topaze et un produit Citrine publics | 2 |
| Decembre | un produit Turquoise public | 1 |

## Implementation

- Le bloc `correspondence` accepte maintenant une collection ou une liste explicite de produits.
- Une collection est prioritaire sur une liste explicite et rend tous ses produits dans l'ordre Shopify.
- Le lien de redirection historique n'est rendu que lorsqu'aucun produit n'est disponible dans le panneau.
- Les cartes reutilisent `milaura-card-product` et `milaura-editorial-purchase`, avec selecteur de quantite et ajout panier.
- Grille responsive : quatre colonnes sur desktop, deux sur tablette et mobile.
- Les trois images des Heroes sont maintenant des reglages de section independants. Le retrait des anciens blocs de cross-sell ne modifie donc pas les produits presentes dans les Heroes.

## Fichiers du lot

- `sections/milaura-catalogue-hub.liquid`
- `assets/milaura-catalogue-hub.css`
- `templates/page.milaura-cadeaux-mariage.json`
- `templates/page.milaura-pierres-naissance.json`
- `docs/checkpoints/2026-08-13-1741-hub-inline-products-preview.md`

## Validation

- `git diff --check` : OK.
- JSON des deux templates : valides avec `jq` apres retrait de l'en-tete commente.
- `shopify theme check --fail-level error` : exit 0, 0 erreur, 29 avertissements historiques hors lot.
- Deploiement cible sur le theme de developpement : reussi.
- Shopify nettoie les nouveaux reglages lorsqu'un schema de section et ses templates sont envoyes simultanement. Le schema a donc ete enregistre en premier, puis les deux templates ont ete renvoyes seuls.
- Pullback final : quatre fichiers sur quatre identiques bit a bit.
- Test navigateur desktop `1280 x 720` : 11 cartes sur `48 ans`, grille quatre colonnes, ancien lien absent, aucun debordement horizontal.
- Test navigateur mobile `390 x 844` : 11 cartes sur `48 ans`, grille deux colonnes, aucun debordement horizontal.
- Naissance : Fevrier 11 cartes, Mars 6, Aout 3, changement d'onglet fonctionnel.
- Console navigateur : aucune erreur.
- Les textes `Pour marquer l'instant` et `Le choix de Karine` sont absents des deux pages de developpement.

## Procedure live apres GO visuel

1. Integrer la branche dans `codex/milaura-integration`.
2. Pousser d'abord `sections/milaura-catalogue-hub.liquid` et `assets/milaura-catalogue-hub.css` sur le live.
3. Pousser ensuite les deux templates seuls, afin que Shopify connaisse deja le nouveau schema.
4. Faire un pullback frais et comparer les quatre fichiers.
5. Controler Mariage `48 ans` et Naissance `Fevrier` puis `Mars` en desktop et mobile.
