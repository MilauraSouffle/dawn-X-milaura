# Landing Automne : polish conversion en preview

Date : 2026-09-24 16:55 CEST

## Resultat

La landing `selection-automne` est prete pour validation visuelle sur le theme prive Shopify `201797534043`. Le theme public `190430282075` est reste intact.

- Hero : reprise des quatre assets visuels valides sur le hero Automne de la Home, avec seulement `Automne 2026` et le H1 `Grenat & cornaline`.
- Introduction : texte reduit a une phrase pour rapprocher le premier produit.
- Produit phare : label `Le bracelet phare`, titre `Bracelet Iris` place dans le bloc de conversion, texte reecrit et bento compacte sur desktop et mobile.
- Catalogue : titre `Tous les bijoux de la selection` et affichage des vingt produits publics de la collection.
- Video : boucle explicite, fallback poster conserve et commande lecture-pause compacte.

## Cause du catalogue incomplet

La collection Shopify contenait deja vingt produits. Le template de landing etait manuel et ne declarait que neuf cartes, auxquelles s ajoutait Iris. Les dix produits manquants ont ete ajoutes au template, sans mutation du catalogue, des prix, des stocks ni des medias produit.

## Verification

- Preview privee : `https://milaura-2.myshopify.com/collections/selection-automne?preview_theme_id=201797534043`.
- QA visuelle : desktop `1440 x 900` et mobile `393 x 706`, hero, produit phare et debut du catalogue controles.
- Collection preview : `20 produits`, soit Iris et dix-neuf cartes catalogue.
- `python3 tests/css_contract_test.py` : PASS.
- `git diff --check` : PASS.
- JSON du template : valide, dix-neuf blocs produit.
- Theme Check : 0 erreur, 16 avertissements historiques hors lot.

## Perimetre preserve

Le hero Home, la landing Sodalite, les fiches produit, Shopify Admin, les prix, les stocks, les medias produit et les Ads n ont pas ete modifies. Aucun push live n a ete effectue avant le GO visuel de Patrice.
