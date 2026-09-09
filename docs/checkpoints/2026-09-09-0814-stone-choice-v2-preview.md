# Bijoux par pierre V2 : preview technique

Date : 2026-09-09 08:14 CEST
Statut : PREVIEW TECHNIQUE PASS, VALIDATION VISUELLE PATRICE EN ATTENTE

## Resultat prepare

La page `/pages/bijoux-par-pierre` a ete reconstruite dans un composant dedie a partir de la hierarchie validee de `/collections/bijoux-pierres-naturelles`.

- Hero neuf centre sur huit pierres naturelles, sans bijou vedette.
- Composition bureau et mobile distincte, avec espace de lecture pour le H1 et le texte.
- Bloc de reassurance conserve sous le Hero.
- Trente-neuf cartes et trente-neuf destinations pierre conservees.
- Bureau : grille stable, quatre colonnes a 1440 px et trois colonnes a 768 px.
- Mobile : un rail horizontal natif continu, sans JavaScript de geste, avec la carte suivante visible.
- L ancien composant `milaura-stone-directory.js` n est pas charge sur cette page.

## Fichiers du lot

- `sections/milaura-stone-choice-landing.liquid`
- `assets/milaura-stone-choice-landing.css`
- `assets/milaura-hero-stone-choice-v2-desktop.webp`
- `assets/milaura-hero-stone-choice-v2-mobile.webp`
- `templates/page.milaura-bijoux-pierre.json`

Registre du lot : `docs/workstreams.md`.

## Preview Shopify

- Theme : `200974958939`, `MilAura Toutes les pierres 2026-09-05`.
- URL : `https://milaura.fr/pages/bijoux-par-pierre?preview_theme_id=200974958939&stone-choice=v2`
- Push cible uniquement, avec `--nodelete` et `--strict`.
- Pullback cible : sommes SHA-256 identiques 5/5.

Sommes de reference :

- CSS : `fc6857009637dca20c1bea1e3c1e9a743aabcca51aa32d16f62b093402b889f9`
- Section : `b7efb655557e80bf437244ad5adf4cd6b5848b940d37cccc5fe3cacbf562a4d0`
- Hero bureau : `e29c04684757d358fb5c44375fe407fd109f4e04313425857258e735517932f0`
- Hero mobile : `deaa6063c9f4cf17829d9a7cd07ae44b40ab705799dc1ee3d87b73a98e469727`
- Template : `b4f6430dc963d2e133a2e66207e72084cb27c9e30b564a6d19596dcbb82e8ac6`

## Verifications

- Copywriting MilAura : PASS, 340 fichiers controles.
- Theme Check : zero erreur, 16 avertissements historiques dans huit anciens fichiers, aucun dans le lot.
- JSON du template valide apres retrait du commentaire standard Shopify.
- Trente-neuf blocs, trente-neuf cartes, trente-neuf liens uniques, aucun bloc incomplet.
- Un H1 dans le contenu principal.
- Largeurs de page conformes a 360, 390, 430, 768 et 1440 px, sans debordement horizontal global.
- Rail mobile : `overflow-x: auto`, snap natif, largeur de carte 78 vw, ancien script et attribut `data-enhanced` absents.
- Deplacement horizontal mesure dans la preview de `0` a `372 px`.
- Images Hero chargees aux dimensions 1942 x 809 et 941 x 1672.
- Les seules erreurs console observees proviennent des telemetries Shopify et de la barre de preview bloquees par le contexte navigateur. Aucun message ne pointe vers le composant du lot.

## Gates et retour arriere

La preview est la seule cible distante modifiee. La page live et le theme `190430282075` sont inchanges.

Attendre le GO visuel explicite de Patrice avant integration et publication. Le retour arriere de preview consiste a repousser les cinq fichiers precedents depuis le theme live ou a ne plus utiliser cette preview.
