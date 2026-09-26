# Rapport remplacement visuel recharge - Geode GC0256

Date : 2026-09-26
Statut final : `LIVE_MEDIA_BOUND_VERIFIED`

## Demande

Patrice a rejete le visuel montrant un collier suspendu et deux bagues, juge irrealiste. La composition demandee montre uniquement deux ou trois bracelets poses naturellement dans la cavite.

## Nouveau visuel

- Master : `replacement-2026-09-26/08-recharge-bracelets-v2-master.png`
- Derive Shopify : `replacement-2026-09-26/08-recharge-bracelets-v2.jpg`
- Dimensions Shopify : `2048 x 2048`
- SHA-256 : `e929c237271641853444463be91e0d8c63824dba98aab50050fdce021be71976`
- Composition : deux bracelets elastiques, amethyste et cristal de roche, poses dans la partie basse de la cavite avec un chevauchement leger.
- Elements absents : collier, chaine, pendentif, bague, bijou suspendu.
- Workflow : edition precise avec le mode integre `image_gen`, puis conversion JPEG qualite `95`.

## Remplacement Shopify

- Produit : `10764374081883`
- Variante : `54192929866075`
- SKU : `GC0256`
- Position : `8`
- Slot : `E02_JEWELRY_RECHARGE`
- Image Shopify : `75629610959195`
- ALT : `Deux bracelets en pierres naturelles poses dans la geode pour le rechargement`
- URL CDN : `https://cdn.shopify.com/s/files/1/0977/2806/9979/files/08-recharge-bracelets-v2.jpg?v=1790405713`

## Verification

- Galerie finale : neuf medias.
- Ancien ALT et ancien fichier absents du HTML public.
- Nouvel ALT, nouveau fichier CDN et nouveau slot manifeste presents.
- Page publique controlee apres sortie explicite du theme de preview.
- Produit toujours `ACTIVE`, prix `1299.00`, stock `1`, SKU, variante et collections preserves.
- Les huit autres medias sont restes dans leur ordre initial.

## Sauvegardes

- `shopify/snapshots/10764374081883-20260926T065510Z-before-recharge-media-v2.json`
- `shopify/snapshots/10764374081883-20260926T065535Z-before-recharge-media-v2.json`
- `shopify/snapshots/10764374081883-20260926T065559Z-before-recharge-media-v2.json`

Les trois captures documentent respectivement l etat avant chargement, l etat transitoire avec dix medias pendant la propagation Shopify et l etat avant finalisation de l ordre et du manifeste.
