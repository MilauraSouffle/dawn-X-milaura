# Recommendation Atelier, correction horizontale

Date : 2026-08-15 09:48 CEST

Branche : `codex/milaura-recommendation-system-20260814`

Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/recommendation-system-20260814`

Theme Shopify : developpement `199421952347`

Statut : correctif visuel controle et disponible pour GO, aucun live

## Decision visuelle

La composition desktop verticale refusee est remplacee par une galerie horizontale compacte :

- introduction sur une ligne, titre a gauche et explication a droite ;
- une carte focale large et les cartes secondaires sur la meme ligne ;
- hauteur de media desktop bornee ;
- aucun empilement vertical de cartes sur desktop ;
- rail tactile `scroll-snap` conserve sur mobile ;
- variante compacte du tiroir panier conservee.

Le correctif remplace les regles precedentes dans la feuille partagee. Il ne cree ni nouvelle feature, ni seconde variante CSS dormante.

## Controles navigateur

Fenetre desktop : `1440 x 1000`.

- PDP, 3 cartes : une ligne, largeurs `652 / 314 / 314`, medias `336 px`, section `824 px`, aucun overflow horizontal.
- page Pierres de naissance, 4 cartes : une ligne, largeurs `684 / 212 / 212 / 212`, medias `336 px`, section `843 px`, aucun overflow horizontal.
- page panier, variante 2 cartes rendue avec deux handles de controle : une ligne, largeurs `765 / 539`, section `756 px`, aucun overflow horizontal.
- tiroir panier : variante compacte sur une ligne, hauteur du composant `310 px`.

Fenetre mobile : `390 x 844`.

- PDP, 3 cartes : rail `scroll-snap` obligatoire, largeurs `288 / 245 / 245` ;
- largeur visible `360 px`, largeur defilable `842 px` ;
- test fonctionnel du rail : `scrollLeft` de `16` a `320`, maximum `482`.

Le panier de controle avec le collier obsidienne ne possedait pas de produit `complementary` renvoye par Shopify. La section reelle s'est donc masquee, conformement au contrat. Deux handles existants ont ete injectes uniquement dans le DOM de la session navigateur pour valider la mise en page a deux cartes. Aucune donnee Shopify n'a ete modifiee.

## Fichier theme pousse

- `assets/milaura-recommendations.css`

Push cible avec `--nodelete` sur le theme de developpement uniquement. Les fichiers Hero, Navigation, catalogue et homepage n'ont pas ete touches.

## Validation finale du lot

- `git diff --check` : valide.
- Theme Check : `283` fichiers, `27` warnings historiques dans `10` fichiers, aucune nouvelle erreur du lot.
- pullback CSS : identique au fichier local, SHA-256 `e4271360a9df6a2c118549bf85b9eafe563296fcb9157ffa65821b1f5e5d5c2f`.
- controles desktop et mobile : valides sur les surfaces listees ci-dessus.

## Porte restante

GO visuel explicite de Patrice avant integration ou live.
