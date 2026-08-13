# Checkpoint, fondation design MilAura livree live

Date : 2026-08-13 09:57 CEST
Session : Claude, frontend et design
Branche : `claude/milaura-design-foundation-20260813`
Themes : developpement `199421952347`, live `190430282075`
Statut : livre sur le developpement et le live, pullback valide sur les deux, GO creatif de Patrice encore attendu

## Ce que le lot corrige

La charte validee a 100 % par Patrice le 2026-08-04 existait sur le papier et
dans trois fichiers TTF. Elle n'etait pas appliquee au theme. Mesures d'entree :

| Constat | Avant |
| --- | --- |
| Occurrences Playfair Display et Lato | 414 |
| Occurrences Gloock et Instrument Sans | 52 |
| Reglage Shopify titres et corps | `assistant_n4` |
| Polices servies | trois TTF, 416 Ko |
| Blocs `@font-face` | dupliques dans cinq sections |
| Familles de polices rendues sur la page d'accueil | 13 |
| Valeurs de l'ancienne palette en dur | 1014 |

Cause racine : `CLAUDE.md` du repo datait du 2026-01-26 et decrivait encore
Playfair Display, Lato, l'or `#C0A062` et le glassmorphism Vision OS, alors que
`AGENTS.md` le declarait reduit a un pointeur. Chaque session qui demarrait
lisait cette charte morte et la reappliquait.

## Ce qui a ete fait

### Gouvernance

- `CLAUDE.md` reduit a `@AGENTS.md`.
- `AGENTS.md` gagne une section Identite visuelle qui nomme la charte, ses
  couleurs, ses polices et leurs regles d'usage, et declare l'ancienne identite
  morte depuis le 2026-08-04.

### Polices

- Sous-ensemble latin et conversion WOFF2 : 416 Ko vers 144 Ko, soit -65 %.
  Gloock 95 vers 26 Ko, Instrument Sans 189 vers 75 Ko, Dancing Script 130 vers
  43 Ko. Couverture francaise verifiee glyphe par glyphe.
- Dix blocs `@font-face` dupliques dans cinq sections remplaces par une
  declaration unique dans `assets/milaura-tokens.css`.
- Trente alias locaux (`MilAura Gloock`, `MilauraInstrument`, etc.) bascules
  vers les tokens.
- Preload des deux polices critiques. Retrait du preload Assistant, qui
  n'etait plus rendu nulle part.

### Tokens

- `assets/milaura-tokens.css` devient la source unique de verite : colorway
  mineral, echelle typographique mobile-first, espacement, filets, ombres.
- Reprise de `--font-body-family` et `--font-heading-family` de Dawn.
- `milaura.css` ne redeclare plus couleurs, polices ni ombres. Il se charge
  apres les tokens et les ecrasait silencieusement.

### Typographie

- 145 declarations Lato bascules vers Instrument Sans.
- Playfair bascule vers Gloock au-dessus de 24 px seulement, vers Instrument
  Sans en dessous. La charte interdit Gloock pour la navigation, les boutons,
  les prix et le texte long. L'audit a resolu les tailles via les valeurs par
  defaut des schemas : trois cas seulement etaient reellement ambigus.
- 88 fallbacks de l'ancienne charte nettoyes.
- `font-synthesis: none` sur les titres : la charte interdit le faux gras.
- `text-wrap: balance` sur les titres, `pretty` sur les paragraphes.

### Couleur

- 1014 valeurs migrees vers la palette validee, dont 551 `rgba` dores dans les
  ombres et halos.
- Or profond redose a 65 % d'or sur prune pour atteindre `#926451`, soit
  4.76:1 sur Nacre. L'ancien `#8F723A` ne tenait que 4.38:1 et servait pourtant
  de couleur de texte : le lot corrige un defaut d'accessibilite preexistant.
- Defauts et libelles de `config/settings_schema.json` mis a la charte.

### Defauts preexistants corriges au passage

- Les elements `button`, `input`, `select` et `textarea` n'heritent pas de la
  police : la feuille de style du navigateur leur impose Arial 13.33px. Onze
  elements visibles de la page d'accueil rendaient en Arial, dont les noms de
  pierres, les prix de l'explorateur de bienfaits et le bouton d'inscription a
  la newsletter.
- `sections/main-search.liquid` passait `img_loading: lazy_load | default:
  'lazy'` au rendu de la carte produit. Liquid n'autorise pas de filtre dans un
  argument de `render` : la section etait rejetee par Shopify depuis le
  2026-03-13, soit cinq mois, et les resultats produit ne rendaient pas.

### Durcissement des tokens

Les nuances derivees utilisaient d'abord `color-mix(in oklch, ...)`. La fonction
n'existe pas avant Safari 16.2, sorti en decembre 2022 : sur un navigateur plus
ancien la variable devient invalide et toute propriete qui la consomme tombe,
ce qui aurait fait sauter des couleurs de fond et de texte sur les iPhone
anciens. Les onze melanges sont calcules en OKLab puis figes en valeurs
statiques, formule conservee en commentaire. Les melanges vers `transparent`
passent en `rgba`.

`--milaura-encre-tertiaire` a ete redosee de 58 a 62 % de prune : 58 % ne
donnait que 4.26:1 sur Nacre, sous le seuil AA. A 62 % elle tient 4.83:1.

## Verification

| Controle | Resultat |
| --- | --- |
| Theme Check | 29 offenses avant, 29 apres, zero regression, zero erreur |
| Familles rendues sur la page d'accueil | 13 avant, 3 apres |
| Polices hors charte sur texte visible, live | aucune, hors deux `SF Mono` sur la touche `Esc`, volontaires |
| Routes controlees | accueil, collection, produit, recherche, panier |
| Viewports | 390x844 et 1440x900 |
| HTTP | 200 sur les dix combinaisons |
| H1 | un seul par page sur les dix combinaisons |
| Debordement horizontal | aucun |
| Pullback live | 101 fichiers sur 101 identiques bit a bit |
| Pullback developpement | 101 fichiers sur 101 identiques bit a bit |
| Assets experimentaux du live | preserves, push en `--nodelete` |
| Recherche publique | `/search?q=bague` rend 11 resultats et les cartes produit |

Captures : `output/playwright/design-foundation-2026-08-13/`.

## Frontieres respectees

- La geometrie n'a pas ete touchee. `--milaura-border-radius` reste a 20 px.
  Le nouveau standard `--milaura-rayon-*` existe dans les tokens mais n'est
  applique nulle part.
- Le glassmorphism n'a pas ete touche. 171 `backdrop-filter` subsistent.
- Aucune composition, aucun contenu, aucun produit, prix, stock ou statut de
  publication n'a ete modifie.
- `-webkit-font-smoothing: antialiased` a ete essaye puis retire : il affinait
  tout le texte du site, ce qui est un parti pris visuel a soumettre a Patrice
  et non un point de la charte.

## Points ouverts

1. GO creatif de Patrice sur le rendu live. La verification technique ne vaut
   pas validation creative.
2. Arbitrer `-webkit-font-smoothing`, une ligne, effet sur tout le site.
3. Homepage a 17 sections. Les maisons de reference tournent entre 6 et 9.
   Decision de contenu qui appartient a Patrice.
4. Geometrie et glassmorphism : 163 rayons superieurs a 20 px et 171
   `backdrop-filter` restent a arbitrer.
5. Les trois TTF restent dans `assets/`. Ils ne sont plus references donc plus
   telecharges. Leur retrait demande un push avec suppression, hors procedure.
6. `Filtrer et trier` de la page recherche a un contraste tres faible, constate
   a la capture. Non traite, hors perimetre de ce lot.
7. Tokeniser les hex restants : le lot a migre valeur par valeur, la cible est
   `var(--milaura-*)` partout.

## Commits

- `b2ffde88` gouvernance, `CLAUDE.md` reduit au pointeur et charte inscrite
- `4000cb5f` fondation design appliquee au theme
- `6f08699b` controles de formulaire, sortie d'Arial
- `2590fdb4` reparation de la syntaxe Liquid de la recherche
- `34fd71c1` documentation de la livraison
- `ead5ec43` merge dans `codex/milaura-integration`
- `4688554d` tokens derives figes en valeurs statiques

## Note de parallelisation

Une session Codex a travaille le 2026-08-13 entre 08:11 et 08:26 sur l'accent
coeur de la PDP et a livre live. Son lot etait clos avant l'ouverture de
celui-ci et sa branche est un ancetre de ce travail, donc aucun conflit. Le lot
fondation ne doit toutefois jamais tourner en parallele d'un lot de section :
le registre protege le merge, pas la coherence visuelle.
