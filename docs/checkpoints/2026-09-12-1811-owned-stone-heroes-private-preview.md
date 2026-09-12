# Hero editoriaux des actifs proprietaires pierre, preview privee

Date : 2026-09-12 18:11 CEST

Statut : `PASS_TECHNIQUE_PREVIEW_PRIVEE`, revue visuelle Patrice des nouveaux Hero en attente

## Demande et limites

Patrice valide le corps des cinq vues a environ 80 % et demande un beau Hero propre a chaque page, coherent avec son sujet et sans rendu generique d IA.

- Branche : `codex/milaura-owned-assets-20260910`.
- Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/owned-assets-20260910`.
- Theme de recette : `200974958939`, non publie.
- Theme live `190430282075` : non touche.
- Aucune page Shopify Admin, URL publique, meta SEO, navigation ou integration n est autorisee par ce retour.

## Direction produite

Les cinq pages partagent une structure HTML accessible et gardent une composition visuelle distincte :

1. selecteur : trois bijoux MilAura sur des plateaux mineraux clairs, lecture immediate par couleurs ;
2. entretien : bagues aigue-marine, linge, brosse et coupelle pour rendre le geste concret ;
3. pierres de naissance : bracelet multicolore sur un cadran mineral discret ;
4. atlas : bijoux bleu profond, loupe et contraste mineral sombre pour evoquer l observation ;
5. etude : trois bijoux et trois cartes vierges avec crayon, sans faux resultat publie.

Les scenes ont ete generees avec l outil Imagegen integre a partir de photographies exactes de produits MilAura. Le prompt set imposait photographie editoriale produit, produits fideles, espace de composition reserve au texte HTML, aucun texte dans l image, aucune personne, aucune pierre generique et aucun effet magique. Une revue pleine resolution a retire une coquille decorative, une sphere doree coupee, une bague supplementaire, un bracelet non source et une tranche de geode doree.

Chaque direction comprend un fichier desktop 3:2 et une recomposition mobile 4:5 dediee :

- `assets/milaura-hero-editorial-owned-stone-finder-desktop.webp`, 198884 octets ;
- `assets/milaura-hero-editorial-owned-stone-finder-mobile.webp`, 237910 octets ;
- `assets/milaura-hero-editorial-owned-stone-care-desktop.webp`, 155434 octets ;
- `assets/milaura-hero-editorial-owned-stone-care-mobile.webp`, 123502 octets ;
- `assets/milaura-hero-editorial-owned-birthstones-desktop.webp`, 222362 octets ;
- `assets/milaura-hero-editorial-owned-birthstones-mobile.webp`, 238066 octets ;
- `assets/milaura-hero-editorial-owned-stone-atlas-desktop.webp`, 295514 octets ;
- `assets/milaura-hero-editorial-owned-stone-atlas-mobile.webp`, 292388 octets ;
- `assets/milaura-hero-editorial-owned-study-desktop.webp`, 266604 octets ;
- `assets/milaura-hero-editorial-owned-study-mobile.webp`, 244658 octets.

Le texte reste en HTML via `snippets/milaura-owned-hero.liquid`. Les CTA ont une cible tactile de 44 px et mènent au premier contenu utile de chaque page. Les conseils, limites et statuts sont affiches dans une bande sous le Hero. Ce choix vient du contrôle Impeccable : la premiere composition superposait le conseil du selecteur a un bracelet.

## Preview Shopify privee

- selecteur : `https://milaura.fr/pages/bijoux-par-pierre?view=milaura-stone-finder&preview_theme_id=200974958939&_fd=0&pb=0` ;
- entretien : `https://milaura.fr/pages/bijoux-par-pierre?view=milaura-stone-care&preview_theme_id=200974958939&_fd=0&pb=0` ;
- naissance : `https://milaura.fr/pages/bijoux-par-pierre?view=milaura-birthstones&preview_theme_id=200974958939&_fd=0&pb=0` ;
- atlas : `https://milaura.fr/pages/bijoux-par-pierre?view=milaura-stone-atlas&preview_theme_id=200974958939&_fd=0&pb=0` ;
- etude : `https://milaura.fr/pages/bijoux-par-pierre?view=milaura-study&preview_theme_id=200974958939&_fd=0&pb=0`.

Dix images et sept fichiers de code ont ete pousses de facon ciblee avec `--nodelete --strict`. Le pullback frais dans `/private/tmp/milaura-owned-hero-final-pullback-20260912.ZZvpP4` confirme une egalite octet par octet de `17/17` fichiers.

## Verification finale

- generation source : PASS, 8 pierres, 12 mois et 4 snippets ;
- tests Node : 6 sur 6 ;
- syntaxe JavaScript : PASS ;
- grille copywriting MilAura : PASS, 353 fichiers controles ;
- Theme Check : 0 erreur et 16 avertissements historiques dans huit fichiers hors lot ;
- `git diff --check` : PASS ;
- aucun code couleur hexadecimal, `backdrop-filter` ou tiret cadratin dans les fichiers du Hero ;
- navigateur 390 px : cinq H1 uniques, assets mobiles charges en 1122 px, Hero 760 px, CTA 44 px, ancres valides, bandes sous les images, aucun debordement et aucun journal d erreur ;
- navigateur 1440 px : cinq H1 uniques, assets desktop charges en 1536 px, Hero de 734 a 748 px, CTA 44 px, ancres valides, bandes sous les images, aucun debordement et aucun journal d erreur ;
- activation du CTA du selecteur : ancre atteinte a environ 80 px sous la navigation fixe.

Captures finales hors Git : `/private/tmp/milaura-owned-hero-browser-20260912/`.

## Gates restants

1. revue et GO visuel Patrice sur les cinq nouveaux Hero ;
2. decision separee sur les pages Admin, handles, titles, metas et navigation ;
3. integration Git ;
4. GO live explicite ;
5. pullback et QA publics apres publication.

Le PASS technique et la preview privee ne valent ni integration ni publication live.
