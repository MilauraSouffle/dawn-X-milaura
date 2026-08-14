# Reprise DA - Heroes editoriaux de destination MilAura

Date : 2026-08-14 09:47 CEST

Statut : brief canonique et copiable pour toute nouvelle session qui cree, etend ou polit un Hero de destination MilAura.

## Resultat a preserver

Dix destinations sont live avec une scene photographique editoriale, une composition desktop et une recomposition mobile dediee. Ce systeme remplace les collages CSS, cadres flottants, filets decoratifs et flous de fond.

La reference d'exigence est Van Cleef & Arpels pour la respiration, la retenue et la priorite donnee au bijou. Il ne faut copier ni ses signes, ni ses compositions, ni son identite.

## Hierarchie visuelle

1. Le produit exact attire le regard en premier.
2. La matiere, la lumiere et la couleur racontent la destination.
3. Le H1 et la signature HTML structurent la lecture sans dominer le produit.
4. Le CTA reste discret, lisible et tactile.

Le premium vient de la precision, du cadrage, de la lumiere et du vide utile. Il ne vient pas d'un diamant generique, d'un gradient sombre, d'une grosse pilule ou d'un effet de verre.

## Contrat photographique

- Une seule scene coherente par destination, avec ombres, socles et perspective compatibles.
- Les bijoux MilAura fournis en reference sont immuables : formes, couleurs, pierres, fermoirs et proportions restent fideles.
- Aucun logo invente, texte, CTA, prix, symbole, main ou pierre supplementaire dans l'image.
- Aucun mannequin genere pour simuler une campagne joaillerie. Une personne n'entre dans la composition qu'avec un media reel valide par Patrice.
- Une zone de respiration est reservee au texte HTML. Elle est placee a gauche sur desktop et dans le tiers superieur sur mobile, selon la composition.
- Le mobile est une recomposition 4:5 environ, jamais un crop automatique du desktop.
- Le desktop vise une composition 3:2 environ. L'objet principal ne doit pas etre coupe par le viewport entre 1280 et 1600 px.
- Export WebP optimise. Le poids reste proportionne au gain visuel, sans perte visible sur les pierres et les metaux.

## Langage de marque

- Nacre structure la lumiere et les respirations.
- Encre prune porte le texte sur les scenes claires.
- Or mat reste un reflet ou un filet, jamais une grande surface.
- Aigue-marine porte les contours fonctionnels et certaines transitions.
- Gloock porte le H1. Instrument Sans porte les informations et actions.
- Dancing Script est limitee a une signature de 2 a 6 mots, une fois par ecran, jamais pour une information essentielle.

## Cartographie live

| Destination | Cle technique | Direction chromatique | Contraste texte |
| --- | --- | --- | --- |
| Pierres de naissance | `hub-birthstone` | lilas mineral, nacre, amethyste | sombre |
| Cadeaux de mariage | `hub-wedding` | ivoire chaud, nacre, or mat | sombre |
| Bijoux par pierre | `hub-stone` | eau pale, mineral clair | sombre |
| Bagues | `collection-bagues` | ivoire lumineux, metal chaud | sombre |
| Amethyste | `collection-amethyste` | violet nocturne, reflets prune | clair |
| Aigue-marine | `collection-aigue-marine` | eau pale, bleu mineral | sombre |
| Agate | `collection-agate` | terres stratifiees, creme | sombre |
| Quartz rose | `collection-quartz-rose` | rose poudre, nacre | sombre |
| Lapis-lazuli | `collection-lapis-lazuli` | bleu nuit, veines d'or | clair |
| Amazonite | `collection-amazonite` | aqua givre, ivoire | sombre |

## Implementation canonique

- hubs : `sections/milaura-catalogue-hub.liquid` et `assets/milaura-catalogue-hub.css` ;
- collections : `sections/milaura-collection-hero.liquid` ;
- assets : `assets/milaura-hero-editorial-<famille>-<destination>-desktop.webp` et `-mobile.webp` ;
- hubs live : `birthstone`, `wedding`, `stone` ;
- collections live : `bagues`, `amethyste`, `aigue-marine`, `agate`, `quartz-rose`, `lapis-lazuli`, `amazonite` ;
- les collections non mappees gardent le Hero historique en repli ;
- le Hero passe derriere la navbar, jamais derriere le bandeau d'engagement ;
- hauteurs actuelles : hubs `clamp(620px, 51vw, 760px)` sur desktop et `760px` sur mobile ; collections `clamp(560px, 52vw, 760px)` sur desktop et `760px` sur mobile.

## Regles d'intervention

1. Lire `AGENTS.md`, `docs/project-state.md`, `docs/workstreams.md`, `docs/codex-handoff.md` et `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md`.
2. Declarer une branche et un worktree avant toute edition.
3. Ne jamais modifier un fichier reserve par une autre session.
4. Pour un simple probleme de cadrage, corriger `object-position`, overlay ou hauteur. Ne pas regenerer l'image.
5. Pour une nouvelle destination, utiliser les vrais visuels produit comme references et l'outil OpenAI imagegen. Aucun remplacement silencieux par un autre fournisseur.
6. Pousser uniquement sur le theme de developpement jusqu'au GO visuel explicite de Patrice.
7. Apres GO live, push cible avec `--nodelete --strict --allow-live`, pullback frais et comparaison bit a bit.

## Controle obligatoire

- mobile 390 x 844 puis desktop 1440 x 1000 ;
- produit principal visible, non masque par le texte, la navbar ou le consentement une fois ferme ;
- un seul H1 ;
- bon asset mobile et bon asset desktop ;
- aucune image en echec ;
- aucun `backdrop-filter` sur la photographie ;
- aucun debordement horizontal ;
- contraste lisible et cible tactile de 40 px minimum ;
- `prefers-reduced-motion` respecte si une animation est ajoutee ;
- Theme Check sans erreur ;
- validation technique et GO creatif de Patrice consignes separement.

## Prompt GPT Image 2 de base

> Cree une photographie editoriale de joaillerie premium pour MilAura a partir des produits de reference joints. Conserve exactement leurs formes, pierres, couleurs, metaux, fermoirs et proportions. Compose une seule scene realiste, calme et lumineuse, avec une profondeur sobre, des ombres coherentes et des matieres minerales correspondant a [DESTINATION]. Reserve [ZONE DE TEXTE] comme espace negatif propre. Aucun texte, logo, prix, symbole, pierre supplementaire, main ou mannequin. Le resultat doit paraitre photographie pour une maison de joaillerie francaise contemporaine, avec la retenue et la precision d'une campagne haut de gamme, sans copier une marque existante. Format [DESKTOP 3:2 / MOBILE 4:5].

## Prompt de reprise pour une nouvelle session

> Reprends la direction artistique des Heroes MilAura depuis `docs/prompts/2026-08-14-hero-destination-da-reprise.md`, `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md`, `docs/checkpoints/2026-08-14-0947-editorial-hero-da-session-handoff.md` et `docs/workstreams.md`. Les dix Heroes actuels sont live et constituent la base approuvee. Commence en lecture seule, choisis un seul lot, declare son worktree et son ownership, puis preserve la hierarchie produit, scene, texte, action. Ne regenere aucune image pour un simple cadrage et ne pousse jamais le live sans GO explicite de Patrice.
