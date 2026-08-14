# Checkpoint - Bandeau compact et Hero homepage V2

Date : 2026-08-14 17:15 CEST

Statut : valide visuellement par Patrice, integre et live sur le theme `190430282075` depuis le 2026-08-14 19:22 CEST.

## Resultat livre

- bandeau fixe reduit a 48 px sur desktop et 52 px sur mobile ;
- promesse mobile unique, sans retour a la ligne aux largeurs 360, 390 et 430 px ;
- Hero plein ecran avec texte HTML fixe et trois scenes photographiques ;
- trois parcours manuels : `Choisir par pierre`, `Choisir par bijou`, `Me laisser guider` ;
- chaque parcours change uniquement le media et conserve un vrai lien ;
- navigation existante conservee, avec traitement transparent limite a la homepage et fond aigue-marine au scroll ;
- aucun autoplay, aucune video, aucune nouvelle bibliotheque JavaScript et aucun mannequin IA.

## Fichiers du lot

- `sections/milaura-announcement.liquid` ;
- `sections/milaura-hero-portal.liquid` ;
- `sections/milaura-navbar.liquid` ;
- `assets/milaura-home-hero-v2-stone-desktop.webp` : 177712 octets, 1672 x 941 ;
- `assets/milaura-home-hero-v2-stone-mobile.webp` : 107392 octets, 941 x 1671 ;
- `assets/milaura-home-hero-v2-jewelry-desktop.webp` : 158772 octets, 1672 x 941 ;
- `assets/milaura-home-hero-v2-jewelry-mobile.webp` : 131426 octets, 941 x 1672 ;
- `assets/milaura-home-hero-v2-guide-desktop.webp` : 174506 octets, 1672 x 941 ;
- `assets/milaura-home-hero-v2-guide-mobile.webp` : 109100 octets, 941 x 1672.

## Liens des parcours

- pierre : `/pages/bijoux-par-pierre` ;
- bijou : `/collections/bijoux-pierres-naturelles` ;
- guide : `/pages/diagnostic-emotionnel`.

## Validation technique

- `git diff --check` : valide ;
- `shopify theme check --fail-level error` : 0 erreur, 28 avertissements historiques dans 11 fichiers ;
- Playwright sur 1440 x 900, 430 x 932, 390 x 844 et 360 x 800 : largeur exacte, un seul H1, aucune zone de parcours sous 44 px et un seul media actif ;
- changement des trois scenes, navigation clavier par fleches et changement de fond de la navigation au scroll : valides ;
- `prefers-reduced-motion` : transitions supprimees ;
- CLS mesure : 0,0103 desktop au maximum et 0,0024 mobile au maximum ;
- LCP mesure sur le media Hero : 2644 ms desktop au premier chargement distant, puis 1556 ms ou moins sur les trois largeurs mobiles ;
- chaque asset est inferieur au budget de 180 Ko ;
- les six medias sont volontairement charges au-dessus de la ligne de flottaison, soit environ 487 Ko desktop et 335 Ko mobile, afin de rendre le changement de parcours immediat.

## Etat Shopify

- theme de developpement : `199421952347` ;
- URL de previsualisation : `https://milaura-2.myshopify.com/?preview_theme_id=199421952347&_fd=0&pb=0` ;
- pullback cible : 9 fichiers sur 9 identiques bit a bit au theme de developpement ;
- theme live : `190430282075`, non modifie ;
- aucune PDP, carte produit, collection, menu ou donnee catalogue modifiee ;
- les erreurs console de la previsualisation viennent du cadre Shop App bloque par CSP et du domaine de previsualisation Shopify, pas du script du Hero.

## Captures

- `output/playwright/milaura-home-hero-v2-desktop-1440.png` ;
- `output/playwright/milaura-home-hero-v2-desktop-jewelry.png` ;
- `output/playwright/milaura-home-hero-v2-desktop-guide.png` ;
- `output/playwright/milaura-home-hero-v2-mobile-360.png` ;
- `output/playwright/milaura-home-hero-v2-mobile-390.png` ;
- `output/playwright/milaura-home-hero-v2-mobile-430.png`.

## Frontiere et prochaine decision

Le lot doit rester sur sa branche et sur le theme de developpement jusqu'au GO visuel explicite de Patrice. Apres ce GO, le proprietaire du checkout d'integration pourra merger le commit, verifier l'absence de conflit avec le lot PDP actif, puis decider d'un push live cible et de son pullback. Un GO technique ou un push de previsualisation ne vaut pas GO live.

## Correction apres retour visuel du 2026-08-14 a 17:48 CEST

- la navigation conserve maintenant son fond aigue-marine apres le scroll au lieu de redevenir nacre ;
- le filtre blanc du logo a ete retire, le logo Shopify reste dans ses couleurs natives ;
- les parcours restent plus lisibles sur les medias et passent a l'or clair au survol ou au focus ;
- le label `LFG Paris · Certificats presentes sur les fiches concernees` a ete deplace dans l'angle inferieur droit du Hero ;
- les trois preuves historiques ont ete restaurees avec leurs vrais assets : certificat LFG, Karine et atelier de Metz ;
- le pont de preuves chevauche proprement la limite Hero et Selection d'aout, sans recouvrir les liens ni le titre suivant ;
- controles navigateur sur 1440 x 900, 430 x 932, 390 x 844 et 360 x 800 : aucune largeur excedentaire, trois preuves chargees, aucun chevauchement geometrique entre le label LFG et les parcours ;
- couleur de la navigation scrollee mesuree : `rgb(63, 116, 116)` ; filtre du logo : `none` ; hover du parcours : `rgb(213, 191, 155)` ;
- pullback correctif : `sections/milaura-hero-portal.liquid` identique bit a bit au theme de developpement ;
- le bandeau superieur reste volontairement inchange dans cette correction. Une passe specifique est a planifier apres validation du Hero.

## Peaufinage apres retour visuel du 2026-08-14 a 19:07 CEST

- la signature `MilAura`, le filet or et `Bijoux & mineraux naturels` forment maintenant une seule ligne sur desktop et aux largeurs 430, 390 et 360 px ;
- la navigation scrollee reprend le fond `--milaura-aigue-ecume` du systeme MilAura, mesure a `rgb(220, 235, 232)`, avec texte prune `rgb(47, 34, 45)` et logo colore conserve ;
- le label `LFG Paris` est descendu a 24 px du bas du Hero sur desktop et a 72 px sur mobile, soit juste au-dessus du dock de 70 px ;
- aucune largeur excedentaire et aucun chevauchement entre le label LFG et les parcours sur 1440, 430, 390 et 360 px ;
- les trois preuves LFG, Karine et Metz restent volontairement en place jusqu'a la decision dediee sur leur suppression et leur reutilisation dans le futur bandeau ;
- le bandeau superieur reste inchange ;
- captures de controle : `output/playwright/milaura-home-hero-v2-polished-desktop-1440.png`, `output/playwright/milaura-home-hero-v2-polished-desktop-1440-bridge.png`, `output/playwright/milaura-home-hero-v2-polished-mobile-390.png` et `output/playwright/milaura-home-hero-v2-polished-mobile-390-bridge.png` ;
- Theme Check : 0 erreur et 28 avertissements historiques ;
- pullback du theme de developpement `199421952347` : `sections/milaura-hero-portal.liquid` identique bit a bit au fichier local ;
- theme live `190430282075` non modifie.

## Deploiement live du 2026-08-14 a 19:22 CEST

- GO visuel et GO live explicites de Patrice dans la tache Hero homepage V2 ;
- commits du lot : `f88c9c36`, `204ef589` et `cc57efef` ;
- integration dans `codex/milaura-integration` par le merge `abb301fd` ;
- push live limite a neuf fichiers : les trois sections du lot et les six medias Hero, avec `--nodelete` ;
- theme live cible : `190430282075` ;
- pullback live : 9 fichiers sur 9 identiques bit a bit au checkout d'integration ;
- controle public direct sur `https://milaura.fr` aux largeurs 1440, 430, 390 et 360 px : largeur exacte, signature sur une ligne, trois parcours actifs, trois preuves chargees et aucun chevauchement du label LFG ;
- navbar scrollee mesuree a `rgb(220, 235, 232)`, liens prune `rgb(47, 34, 45)` et filtre du logo `none` ;
- captures live : `output/playwright/milaura-home-hero-v2-live-desktop-1440.png`, `output/playwright/milaura-home-hero-v2-live-desktop-1440-bridge.png`, `output/playwright/milaura-home-hero-v2-live-mobile-390.png` et `output/playwright/milaura-home-hero-v2-live-mobile-390-bridge.png` ;
- aucune PDP, carte produit, collection, produit, stock, prix ou donnee catalogue modifies ;
- les travaux Navigation et Recommandation restent sur leurs worktrees de developpement et n'ont pas ete deployes.
