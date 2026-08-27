# Correctifs PDP et consentement, preparation de la preview

Date : 2026-08-27 18:36 CEST

## Demande

Patrice demande deux corrections sur `milaura.fr` :

1. rendre le lien `Photos et variations naturelles` visible pres de la galerie produit ;
2. empecher le bandeau cookies de reapparaitre apres une acceptation ou un refus, puis remplacer le gros refus gris par un lien secondaire clair.

## Diagnostic factuel

### PDP

Le commit `68a4fa72` etait bien deploye sur le live `190430282075`. Le HTML public du 2026-08-27 contenait le lien et le modal sur plusieurs produits, dont une bougie, un bracelet et une bague.

Le probleme etait le placement : le lien vivait dans le premier onglet de la section editoriale, loin sous la galerie. Il n etait donc pas visible a l endroit ou Patrice et un client le cherchent.

### Cookies

Le correctif `aa3a9930` du 2026-08-21 recoupait `shouldShowBanner()` avec `currentVisitorConsent()`. Il dependait encore entierement de la restitution immediate de l API Shopify a chaque chargement de page.

Lorsque cette restitution est vide ou retardee, le theme ne dispose d aucun autre signal indiquant qu une decision vient deja d etre prise. Le bandeau peut alors se rouvrir pendant une navigation normale.

## Correctifs codes

### PDP

- l unique lien est deplace sous la galerie et les miniatures ;
- il reste visible sur mobile et desktop ;
- le modal et son texte existants sont conserves ;
- l identifiant du modal devient stable pour relier les deux sections Shopify ;
- aucun produit, template, stock ou contenu catalogue n est modifie.

### Cookies

- Shopify Customer Privacy reste le seul moteur qui enregistre les valeurs Analytics, Marketing et Preferences ;
- un cookie fonctionnel MilAura `milaura_cookie_choice=v1` memorise seulement qu une decision a ete prise ;
- ce marqueur ne contient ni valeur de consentement detaillee, ni identifiant, ni donnee de suivi ;
- sa duree est de 180 jours, avec `SameSite=Lax`, `Path=/` et `Secure` en HTTPS ;
- il est ecrit uniquement apres le retour reussi de `setTrackingConsent()` ou lorsque Shopify restitue deja trois choix explicites ;
- si Shopify restitue momentanement des valeurs vides pendant une navigation mais que le marqueur existe, le bandeau reste masque ;
- le refus reste accessible en un clic sous forme de lien secondaire `Refuser les cookies`, au-dessus des deux actions principales ;
- le panneau detaille `Je choisis mes cookies` et le lien de gestion du footer restent inchanges.

## Fichiers reserves et modifies

- `sections/milaura-product-hero.liquid`
- `sections/milaura-product-experience.liquid`
- `assets/milaura-product-experience.css`
- `assets/milaura-cookie-consent.js`
- `assets/milaura-cookie-consent.css`
- `snippets/milaura-cookie-consent.liquid`
- `docs/workstreams.md`
- ce checkpoint

## Validations locales

- `git diff --check` : PASS ;
- `node --check assets/milaura-cookie-consent.js` : PASS ;
- test fonctionnel isole du consentement : 4 sur 4 PASS ;
  - premier visiteur sans choix : bandeau affiche ;
  - choix Shopify deja enregistre : bandeau masque et marqueur cree ;
  - API momentanement vide avec marqueur : bandeau masque ;
  - refus : trois valeurs `false` envoyees a Shopify et marqueur cree ;
- `shopify theme check --path .` : PASS, 0 erreur, 16 avertissements historiques dans 8 fichiers non modifies.

## Preflight theme de developpement

Theme : `Development (c105a8-mac-1)`, ID `199421952347`.

Le pull cible avant push confirme :

- les trois fichiers cookies et `sections/milaura-product-hero.liquid` correspondent a la base Git `196c5c39` ;
- `sections/milaura-product-experience.liquid` est la version juste avant le modal du 2026-08-27 ;
- `assets/milaura-product-experience.css` est egalement avant le modal et ne presente qu un ecart canonique historique supplementaire, `position: relative` sur le texte du rail de preuves ;
- aucun changement concurrent plus recent n a ete detecte dans les six fichiers cibles.

## Etat a 18:36 CEST

Le code est pret pour un push cible sur le theme de developpement. Le theme live `190430282075` reste intact. Aucun controle visuel automatise n a ete lance ; Patrice validera la preview manuellement avant tout GO live distinct.
