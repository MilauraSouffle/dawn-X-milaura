# MilAura - Brief creatif bandeau mobile et Hero immersif

Date : 2026-08-12 17:46 CEST
Statut : direction recommandee, aucun code ni deploiement
Reference d'exigence : `tiffany.com`, pour la sobriete, la photographie portee et l'usage editorial de la video, sans copie de composition ni d'identite.

## Diagnostic confirme

### Bandeau

- Le bandeau live est force a `108px` sous `989px`, soit presque 13 % d'un viewport mobile de 844 px avant la navigation.
- Il empile trois niveaux de texte : signature, promesse, service.
- Le fond et la typographie sont coherents avec MilAura, mais la densite ressemble davantage a un encart de contenu qu'a une signature de marque.
- Les assets experimentaux non suivis et les deux copies `milaura-announcement` du 2026-08-11 ne sont pas une base validee.

### Hero

- Le Hero live est valide et ne doit pas etre refondu depuis zero.
- Sur mobile, le bloc visuel fait `clamp(310px, 84vw, 365px)` et les trois facettes occupent 46 %, 58 % et 46 % de sa largeur.
- Sur desktop, le bloc visuel occupe 58 % du Hero et la facette centrale 52 % de ce bloc.
- Le systeme change deja une image a la fois toutes les quatre secondes et respecte `prefers-reduced-motion`.
- Le rendu est elegant, mais l'image centrale reste une vignette dans une composition. Elle ne produit pas encore l'effet editorial plein cadre attendu d'une maison de joaillerie.

Captures de reference :

- `output/playwright/milaura-home-live-mobile-top-creative-baseline-2026-08-12.png` ;
- `output/playwright/milaura-home-live-desktop-creative-baseline-2026-08-12.png`.

## Direction recommandee

### 1. Bandeau Signature, 56 px mobile

- Hauteur cible : `56px` sur mobile, `72px` sur desktop.
- Mobile : une seule promesse visible, `Pierres choisies avec exigence. Conseils humains 6j/7.`
- Detail de marque : un petit medaillon de 28 a 32 px utilisant une vraie macro de bijou MilAura ou un glyphe lineaire exclusif derive du symbole floral.
- La mention Metz reste sur desktop ou dans un libelle secondaire accessible, pas dans une troisieme ligne mobile.
- Aucun detourage IA, gemme generique, pictogramme de stock ou carrousel dans le bandeau.

KPI de validation :

- gain de 52 px au-dessus de la ligne de flottaison mobile ;
- aucun retour a la ligne a 360, 390 et 430 px ;
- contraste AA, focus visible et zero decalage de mise en page.

### 2. Hero Cabochon cinema

- Conserver les trois facettes et toute la typographie actuelle.
- Transformer uniquement la facette centrale en media principal.
- Mobile : facette centrale portee a 72 a 78 % de la largeur, hauteur visuelle cible `62svh` au maximum, facettes laterales partiellement hors cadre pour creer de la profondeur.
- Desktop : facette centrale a environ 62 % du bloc visuel, les deux facettes secondaires deviennent des ponctuations et non trois surfaces equivalentes.
- Media prefere : video verticale native Shopify, 6 a 8 secondes, mannequin reel, un seul bijou, mouvement lent de cou ou de main, lumiere naturelle, cadrage macro, aucun dialogue.
- Lecture : `muted`, `playsinline`, boucle courte, poster prioritaire, pause quand la page est masquee ou le media hors viewport.
- Fallback : image poster pour `prefers-reduced-motion`, economie de donnees et echec video.

Budget technique cible :

- video mobile WebM ou MP4 inferieure a 2,5 Mo ;
- poster AVIF ou WebP inferieur a 180 Ko ;
- aucun impact sur le LCP textuel ;
- aucune nouvelle librairie JavaScript.

## Asset requis

Le prototype final doit partir d'une video reelle MilAura ou d'un tournage valide par Patrice. En l'absence de video, la premiere maquette utilisera un poster photo reel et simulera seulement le cadrage. Elle ne generera pas de mannequin IA pour obtenir artificiellement un rendu premium.

Brief de tournage minimal :

- format vertical 9:16, 4K source si possible ;
- plan poitrine ou main, fond clair et silencieux ;
- bijou lisible dans la premiere seconde ;
- mouvement unique et lent ;
- aucun texte incruste ;
- deux prises maximum : collier porte et bracelet ou bague en macro.

## Ordre de production

1. Obtenir ou choisir le media reel et son poster.
2. Produire une seule version mobile et desktop sur le theme de developpement `199421952347`.
3. Mesurer poids, LCP, CLS, reduced motion et lisibilite 360/390/430 px.
4. Soumettre les deux captures a Patrice.
5. Appliquer au maximum trois corrections, puis attendre le GO visuel avant le live.

## Frontiere

Ce brief ne modifie ni `sections/milaura-announcement.liquid`, ni `sections/milaura-hero-portal.liquid`, ni les assets experimentaux non suivis. La fiche produit PDP-P0 et le lot creatif restent deux validations distinctes.
