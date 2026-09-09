# Bijoux par pierre : preview technique

Date : 2026-09-09 08:14 CEST
Derniere mise a jour : 2026-09-09 09:37 CEST
Statut : PREVIEW TECHNIQUE PASS, VALIDATION VISUELLE PATRICE EN ATTENTE

## Resultat prepare

La page `/pages/bijoux-par-pierre` a ete reconstruite dans un composant dedie a partir de la hierarchie validee de `/collections/bijoux-pierres-naturelles`.

- Hero V4 tres clair centre sur cinq pierres naturelles et un socle mineral unique, sans bijou vedette.
- Composition bureau et mobile distincte, avec espace de lecture pour le H1 et le texte.
- Fond Nacre, texte prune et navigation claire conservant le comportement global du theme.
- Bloc de reassurance conserve sous le Hero.
- Trente-neuf cartes et trente-neuf destinations pierre conservees.
- Bureau : grille stable, quatre colonnes a 1440 px et trois colonnes a 768 px.
- Mobile : un rail horizontal natif continu, sans JavaScript de geste, avec la carte suivante visible.
- L ancien composant `milaura-stone-directory.js` n est pas charge sur cette page.

## Fichiers du lot

- `sections/milaura-stone-choice-landing.liquid`
- `assets/milaura-stone-choice-landing.css`
- `assets/milaura-hero-stone-choice-v4-desktop.webp`
- `assets/milaura-hero-stone-choice-v4-mobile.webp`
- `templates/page.milaura-bijoux-pierre.json`

Registre du lot : `docs/workstreams.md`.

## Preview Shopify

- Theme : `200974958939`, `MilAura Toutes les pierres 2026-09-05`.
- URL : `https://milaura.fr/pages/bijoux-par-pierre?preview_theme_id=200974958939&stone-choice=v4`
- Push cible uniquement, avec `--nodelete` et `--strict`.
- Pullback cible : sommes SHA-256 identiques 5/5.

Sommes de reference :

- CSS : `13239cc3706be4b888691ec69d5a604afb134f764504a80fd14df08b4f31fa6c`
- Section : `b8c5347d7f161106b51bb851fc81e5ff2bd17c01a6028649892293c15736f17a`
- Hero bureau : `25489a7cdbe998d52dfdbf44c291d4c00d0b219fc13cfa4c1f69eadeff1dcec9`
- Hero mobile : `fa9fa301db29dc9e98a18a3ecad1e259297c30e6533b9441f5ee0fb02f452f0c`
- Template : `87f2c32df8f2abb90777c334dec34b5b0b1ae99afaa8b0464c70041e0fe5b093`

## Verifications

- Copywriting MilAura : PASS, 340 fichiers controles.
- Theme Check : zero erreur, 16 avertissements historiques dans huit anciens fichiers, aucun dans le lot.
- Phrase de repertoire remplacee apres retour de Patrice : `Choisissez votre bijou ou votre accessoire en commençant par la pierre que vous recherchez. À moins que ce soit elle qui vous recherche…`
- JSON du template valide apres retrait du commentaire standard Shopify.
- Trente-neuf blocs, trente-neuf cartes, trente-neuf liens uniques, aucun bloc incomplet.
- Un H1 dans le contenu principal.
- Largeurs de page conformes a 360, 390, 430, 768 et 1440 px, sans debordement horizontal global.
- Rail mobile : `overflow-x: auto`, snap natif, largeur de carte 78 vw, ancien script et attribut `data-enhanced` absents.
- Deplacement horizontal mesure dans la preview de `0` a `372 px`.
- Images Hero chargees aux dimensions 1941 x 810 et 941 x 1672.
- Recette visuelle reelle a 390 x 844 et 1440 x 900 : fond Nacre, texte prune, cinq pierres dans la moitie basse sur mobile et zone de lecture degagee.
- Rail mobile mesure avec `overflow-x: auto`, snap natif, largeur de carte 304,19 px et deplacement de 0 a 302 px.
- Aucune erreur navigateur observee. Captures locales : `/private/tmp/milaura-stone-choice-v4-mobile-390.png` et `/private/tmp/milaura-stone-choice-v4-desktop-1440.png`.

## Gates et retour arriere

La preview est la seule cible distante modifiee. La page live et le theme `190430282075` sont inchanges.

Attendre le GO visuel explicite de Patrice avant integration et publication. Le retour arriere de preview consiste a repousser les cinq fichiers precedents depuis le theme live ou a ne plus utiliser cette preview.
