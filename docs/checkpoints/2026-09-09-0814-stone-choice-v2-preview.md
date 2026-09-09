# Bijoux par pierre : preview technique

Date : 2026-09-09 08:14 CEST
Derniere mise a jour : 2026-09-09 09:08 CEST
Statut : PREVIEW TECHNIQUE PASS, VALIDATION VISUELLE PATRICE EN ATTENTE

## Resultat prepare

La page `/pages/bijoux-par-pierre` a ete reconstruite dans un composant dedie a partir de la hierarchie validee de `/collections/bijoux-pierres-naturelles`.

- Hero neuf centre sur une faille minerale prune et plusieurs pierres naturelles, sans bijou vedette.
- Composition bureau et mobile distincte, avec espace de lecture pour le H1 et le texte.
- Navigation de page rendue claire sur fond prune, y compris lorsqu elle reste fixe au-dessus des sections claires.
- Bloc de reassurance conserve sous le Hero.
- Trente-neuf cartes et trente-neuf destinations pierre conservees.
- Bureau : grille stable, quatre colonnes a 1440 px et trois colonnes a 768 px.
- Mobile : un rail horizontal natif continu, sans JavaScript de geste, avec la carte suivante visible.
- L ancien composant `milaura-stone-directory.js` n est pas charge sur cette page.

## Fichiers du lot

- `sections/milaura-stone-choice-landing.liquid`
- `assets/milaura-stone-choice-landing.css`
- `assets/milaura-hero-stone-choice-v3-desktop.webp`
- `assets/milaura-hero-stone-choice-v3-mobile.webp`
- `templates/page.milaura-bijoux-pierre.json`

Registre du lot : `docs/workstreams.md`.

## Preview Shopify

- Theme : `200974958939`, `MilAura Toutes les pierres 2026-09-05`.
- URL : `https://milaura.fr/pages/bijoux-par-pierre?preview_theme_id=200974958939&stone-choice=v3`
- Push cible uniquement, avec `--nodelete` et `--strict`.
- Pullback cible : sommes SHA-256 identiques 5/5.

Sommes de reference :

- CSS : `5caa84e3f41b64a58a8ce58877ff54e708b6fba3863d57924ead6308a79c31de`
- Section : `cad923c4b7c8481529ee4a7ef8f84ebf641b166ffd44271fed05952a0f73d7b7`
- Hero bureau : `f63a10eb29e16693677c8d6daed6b43df226c3d2c0cc9756a197cc1689449470`
- Hero mobile : `b0dce732edfe8d0cf145717ae7fd773909c42f38387a0750758700f7f541b12c`
- Template : `fe0a88c4665bab27623ce1aa4447708792b82a5d25fe7c0064436fa1a7339d02`

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
- Images Hero chargees aux dimensions 1942 x 810 et 941 x 1672.
- Le texte du Hero herite bien de la couleur Nacre et la navigation de page utilise Nacre sur Prune sur mobile et bureau.
- Les seules erreurs console observees proviennent des telemetries Shopify et de la barre de preview bloquees par le contexte navigateur. Aucun message ne pointe vers le composant du lot.

## Gates et retour arriere

La preview est la seule cible distante modifiee. La page live et le theme `190430282075` sont inchanges.

Attendre le GO visuel explicite de Patrice avant integration et publication. Le retour arriere de preview consiste a repousser les cinq fichiers precedents depuis le theme live ou a ne plus utiliser cette preview.
