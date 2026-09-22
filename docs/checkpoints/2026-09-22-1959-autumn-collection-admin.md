# Collection Automne Shopify Admin

Date : 2026-09-22 19:59 CEST

Statut : `GO ADMIN EXECUTE, COLLECTION CREEE NON PUBLIEE, LIVE INTACT`

## Autorisation

Retour exact de Patrice : `GO Admin`.

Cette autorisation couvre la creation de la collection permanente, ses dix produits et ses champs SEO. Elle ne couvre ni le theme live, ni la publication de la collection, ni Search and Discovery, Ads ou Pinterest.

## Mutation Admin realisee

- Collection : `Sélection d’automne : grenat & cornaline`
- ID Shopify : `681359311195`
- Handle : `selection-automne`
- Type : collection manuelle
- Produits : `10`
- Canaux de vente : `0`
- Modele de theme : `Collection par defaut`
- Titre SEO : `Bijoux grenat et cornaline : sélection d’automne | MilAura`, 58 caracteres
- Meta description : `Découvrez la sélection d’automne MilAura : bracelets, colliers et boucles d’oreilles en grenat et en cornaline, dans des tons rouge profond et orange.`, 150 caracteres

## Produits inclus

1. `bracelet-iris-dore-en-aigue-marine-cornaline-et-grenat-4-mm`
2. `bracelet-dore-en-grenat-rhodolite-3-mm`
3. `bracelet-en-grenat-rouge-4-mm`
4. `bracelet-en-grenat-rouge-6-mm`
5. `bracelet-facette-en-grenat-rouge-4-mm`
6. `boucles-d-oreilles-pendantes-en-grenat-rouge-12-mm`
7. `collier-en-grenat-rouge-4-mm-45-cm`
8. `collier-en-grenat-rouge-6-mm-45-cm`
9. `bracelet-en-cornaline-10-mm-16-a-18-cm`
10. `boucles-d-oreilles-puces-en-cornaline-8-mm`

Les produits `bracelet-en-grenat-rouge-8-mm` et `boucles-d-oreilles-puces-en-grenat-rouge-8-mm` restent exclus car leurs routes publiques renvoyaient `404` pendant la preparation de la landing.

## Verification

- L Admin confirme la creation de `Sélection d’automne : grenat & cornaline`.
- L Admin confirme dix inclusions manuelles.
- L Admin confirme `publie sur 0 canal`.
- L apercu SEO Admin confirme le handle, le title et la meta description.
- `curl https://milaura.fr/collections/selection-automne` renvoie `HTTP 404` a 19:59 CEST, attendu tant que la collection reste non publiee.
- Theme public `190430282075` : non modifie.
- Theme prive `200259043675` : landing approuvee conservee.

## Limite et prochaine gate

Le template `selection-automne` n est pas selectionnable dans Shopify Admin tant qu il existe seulement sur le theme prive. Ne pas pousser ce template sur le theme public ni publier la collection sans `GO live` explicite.

Apres GO live : pousser les fichiers cibles, affecter `selection-automne` a la collection `681359311195`, publier sur les canaux approuves, puis verifier HTTP 200, canonical, sitemap, schema, panier et tracking. Search and Discovery reste un lot public PDP distinct.
