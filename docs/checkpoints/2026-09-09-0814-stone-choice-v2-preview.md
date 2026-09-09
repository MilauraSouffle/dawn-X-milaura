# Bijoux par pierre : preview technique

Date : 2026-09-09 08:14 CEST
Derniere mise a jour : 2026-09-09 12:17 CEST
Statut : PREVIEW TECHNIQUE PASS, PAGE ET SWIPE VALIDES PAR PATRICE, HERO V5 A VALIDER

## Resultat prepare

La page `/pages/bijoux-par-pierre` a ete reconstruite dans un composant dedie a partir de la hierarchie validee de `/collections/bijoux-pierres-naturelles`.

- Hero V5 tres clair centre sur cinq pierres naturelles, posees sur un socle en oeil-de-tigre, sans bijou vedette.
- Geode grenat pale et translucide placee derriere la copie, avec voile Nacre calibre pour conserver la lisibilite.
- Composition bureau et mobile distincte, avec espace de lecture pour le H1 et le texte.
- Fond Nacre, texte prune et navigation claire conservant le comportement global du theme.
- Bloc de reassurance conserve sous le Hero.
- Trente-neuf cartes et trente-neuf destinations pierre conservees.
- Bureau : grille stable, quatre colonnes a 1440 px et trois colonnes a 768 px.
- Mobile : un rail horizontal natif continu, sans JavaScript de geste, avec la carte suivante visible.
- L ancien annuaire a ete retire : section, JavaScript, template de preview et styles orphelins supprimes.
- Le generateur `scripts/build_stone_landings.py` reconstruit maintenant directement le composant final et ne peut plus regenerer l ancien annuaire.

## Fichiers du lot

- `sections/milaura-stone-choice-landing.liquid`
- `assets/milaura-stone-choice-landing.css`
- `assets/milaura-hero-stone-choice-v5-desktop.webp`
- `assets/milaura-hero-stone-choice-v5-mobile.webp`
- `assets/milaura-stone-pages.css`
- `scripts/build_stone_landings.py`
- `templates/page.milaura-bijoux-pierre.json`

Fichiers retires du composant remplace :

- `assets/milaura-stone-directory.js`
- `sections/milaura-stone-directory.liquid`
- `templates/page.milaura-stones-preview.json`

Les deux assets V4 restent disponibles comme repli visuel, sans aucune reference active dans le composant ou le template.

Registre du lot : `docs/workstreams.md`.

## Preview Shopify

- Theme : `200974958939`, `MilAura Toutes les pierres 2026-09-05`.
- URL : `https://milaura.fr/pages/bijoux-par-pierre?preview_theme_id=200974958939&stone-choice=v5-final`
- Push du Hero V5 cible uniquement, avec `--nodelete` et `--strict`.
- Nettoyage cible de l ancien annuaire sur la preview uniquement.
- Pullback : section, template, Hero V5 et CSS actifs identiques au local ; trois anciens fichiers absents du theme de preview.

## Verifications

- Copywriting MilAura : PASS, 338 fichiers controles apres retrait des anciens fichiers.
- Theme Check : zero erreur, 16 avertissements historiques dans huit anciens fichiers, aucun dans le lot.
- Phrase de repertoire remplacee apres retour de Patrice : `Choisissez votre bijou ou votre accessoire en commençant par la pierre que vous recherchez. À moins que ce soit elle qui vous recherche…`
- JSON du template valide apres retrait du commentaire standard Shopify.
- Trente-neuf blocs, trente-neuf cartes, trente-neuf liens uniques, aucun bloc incomplet.
- Un H1 dans le contenu principal.
- Largeurs de page conformes a 360, 390, 430, 768 et 1440 px, sans debordement horizontal global.
- Rail mobile : `overflow-x: auto`, snap natif, largeur de carte 78 vw, ancien script et attribut `data-enhanced` absents.
- Deplacement horizontal mesure dans la preview de `0` a `372 px`.
- Images Hero V5 chargees aux dimensions 1941 x 810 et 941 x 1672.
- Recette visuelle reelle a 390 x 844 et 1440 x 900 : fond Nacre, texte prune lisible, geode grenat transparente derriere la copie, cinq pierres sur oeil-de-tigre.
- Rail mobile mesure avec `overflow-x: auto`, snap natif, largeur de carte 304,19 px et deplacement de 0 a 302 px.
- Swipe physique valide fluide par Patrice le 2026-09-09.
- Page Aigue-marine verifiee apres nettoyage de la CSS partagee : un H1, retour pierre present, aucun debordement a 390 px.
- Aucune erreur navigateur observee. Captures locales : `/private/tmp/milaura-stone-choice-v5-mobile-390-final.png`, `/private/tmp/milaura-stone-choice-v5-desktop-1440-final-clean.png` et `/private/tmp/milaura-aigue-marine-mobile-after-directory-cleanup.png`.

## Gates et retour arriere

La preview est la seule cible distante modifiee. La page live et le theme `190430282075` sont inchanges. La validation generale de la page et du swipe est acquise ; le Hero V5 demande encore le GO visuel final avant publication.

Attendre le GO visuel explicite de Patrice avant integration et publication. Le retour arriere de preview consiste a remettre la V4 referencee dans la section et le template, ou a ne plus utiliser cette preview.
