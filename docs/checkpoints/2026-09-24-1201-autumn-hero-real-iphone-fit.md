# Hero Automne, recalage mobile depuis captures iPhone reelles

Date : 2026-09-24 12:01 CEST

Statut : `FERME, INTEGRE, LIVE ET VERIFIE`

## Source du correctif

Patrice a fourni deux captures Safari reelles en `736 x 1600` le 2026-09-24. Elles montraient trois defauts que l emulation precedente n avait pas suffisamment representes :

- hero de `920px` exigeant un ecran complet de scroll ;
- H1 trop grand, casse sur trois lignes avec coupure visuelle de `L automne` ;
- boucles et flaque trop grandes, coupees sous le dock fixe.

La branche et les deux bracelets suspendus etaient explicitement valides et ont ete conserves.

## Correctif

- Hauteur mobile liee au petit viewport disponible : `100svh` moins le bandeau avantage et le dock mobile.
- Hauteur de securite bornee entre `520px` et `760px`.
- H1 mobile ramene a `32px` a `36px`, sans coupure interne, avec mise en page equilibree sur deux lignes.
- Signature, description et CTA legerement resserres sans changer leur contenu.
- Boucles et flaque rendues independantes de la hauteur du hero, reduites et ancrees au bord inferieur.
- Branche mobile conservee sans modification visuelle.
- Desktop hors media query mobile et donc inchange.

## Fichier publie

- `assets/milaura-home-seasonal.css`

## Preuves

- Theme prive `201797534043` valide avant release.
- QA mobile cible : `393 x 706`, hero `393 x 574px`, du bas du bandeau a `y=62` jusqu au dock a `y=636`.
- H1 : `361 x 71px`, `36px`, deux lignes completes.
- CTA : `273 x 48px`, bas a `538px`.
- Boucles entierement visibles au-dessus de la flaque ; flaque coupee uniquement par le bord inferieur du hero.
- Largeur document mobile `393px`, aucun debordement horizontal.
- Video active avec `loop=true`.
- Garde desktop `1440 x 900` : hero `1440 x 848px`, dock masque, composition conservee.
- Contrat CSS : PASS.
- `git diff --check` : PASS.
- Theme Check : zero erreur et seize avertissements historiques hors lot.

## Integration et live

- Commit de travail : `aafa470a`.
- Commit integre : `c35ff018` (`fix: fit autumn hero to mobile viewport`).
- Branche d integration poussee : `codex/milaura-integration`.
- Push cible sur le theme public `190430282075`, un fichier, sans suppression.
- Pullback live : `/private/tmp/milaura-autumn-mobile-v2-live-pullback-u7tJ29`, `1/1` identique.
- QA live propre, sans theme de developpement : `393 x 706`, hero et dock jointifs, aucun scroll interne necessaire pour voir la composition complete.
