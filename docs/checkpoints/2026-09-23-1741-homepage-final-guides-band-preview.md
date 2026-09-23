# Homepage MilAura, bandeau final guides

Date : 2026-09-23 17:41 CEST

## Decision visuelle

La section editoriale avec photographie et apercu d article alourdissait la fin de la Home. Elle est remplacee par un bandeau de sortie compact, sans media, sans paragraphe et sans carte article.

Le bandeau conserve uniquement :

- `Le regard de Karine` ;
- `Choisir avec des reperes simples.` ;
- `Lire le Journal` ;
- `Decouvrir MilAura`.

L apercu du premier article n est pas retenu. Il recreerait une troisieme hierarchie juste avant le footer alors que les deux actions suffisent.

## Verification

- Theme prive : `Development (570851-mac-1)` `201797534043`.
- Bureau `1440 x 900` : bandeau de `312px`, titre a gauche et actions a droite.
- Mobile `390 x 844` : bandeau replie de `436px`, titre puis actions.
- Zero image ou `picture` dans la section.
- Aucun debordement horizontal.
- Theme Check : 0 erreur, 16 avertissements historiques hors lot.
- `git diff --check` et JSON du template conformes.
- Theme public `190430282075` inchange.

## Gate

La preview est prete pour validation visuelle Patrice. Integration et publication live restent separees et non autorisees a cette etape.
