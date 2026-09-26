# Rapport galerie Shopify live - Geode GC0256

Date : 2026-09-26
Statut final : `LIVE_MEDIA_BOUND_VERIFIED`

## Produit

- Product ID : `10764374081883`
- Variant ID : `54192929866075`
- SKU : `GC0256`
- Statut : `ACTIVE`
- URL : `https://milaura.fr/products/geode-cathedrale-en-amethyste-19-9-kg`
- Prix preserve : `1299.00 EUR`
- Stock preserve : `1`

## Galerie

- Ancien etat observe : huit medias live au lieu des neuf attendus.
- Etat final : neuf JPEG `2048 x 2048`, neuf ALT distincts, ordre verifie.
- Image principale : `01-packshot-principal-strict.jpg`.
- Medias 7 et 8 correctement repris par les blocs editoriaux de la PDP : scene interieur et recharge bijoux.
- Metafield `milaura.pdp_media_manifest` : `LIVE_MEDIA_BOUND`, neuf slots.

## Verification

- Pullback Admin API : neuf images, statut `ACTIVE`, URL publique, SKU, prix et stock inchanges.
- Endpoint public `.js` : `image_count=9`, produit disponible, prix `129900` centimes, image principale correcte.
- Page publique : les nouveaux ALT et les images editoriales sont visibles; controle visuel desktop du hero reussi.
- Collections, coeur produit et variante preserves.

## Incident et reprise

La premiere execution a charge les neuf nouveaux medias puis s est interrompue pendant la suppression des anciens. La fiche a temporairement contenu quatorze images : neuf nouvelles et cinq anciennes. La reprise a identifie les neuf nouveaux medias par leurs ALT, n a charge aucun doublon, a supprime les cinq anciens restants, puis a finalise l ordre et le manifeste.

## Sauvegardes

- Avant mutation : `shopify/snapshots/10764374081883-20260926T062458Z-before-live-gallery-v2.json`
- Avant reprise : `shopify/snapshots/10764374081883-20260926T062608Z-before-live-gallery-v2.json`
