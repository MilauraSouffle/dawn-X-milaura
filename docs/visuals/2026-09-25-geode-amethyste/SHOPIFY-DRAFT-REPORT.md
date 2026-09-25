# Rapport Shopify DRAFT - Geode GC0256

Date : 2026-09-25
Agent : Codex
Statut final : `DRAFT_VERIFIED_NOT_PUBLISHED`

## Identite distante

- Product ID : `10764374081883`
- Variant ID : `54192929866075`
- Admin : `https://milaura-2.myshopify.com/admin/products/10764374081883`
- Handle : `geode-cathedrale-en-amethyste-19-9-kg`
- SKU : `GC0256`
- Statut : `DRAFT`
- Template : `milaura-produit`
- Type public : `Géode d'améthyste`
- Type canonique : `geode`
- Famille PDP : `pierre-mineral`

## Commerce et stock

- Prix TTC : `1 299,00 EUR`
- Cout rendu HT : `300,00 EUR`, transport fournisseur inclus
- Stock physique : `1`
- Inventaire suivi : oui
- Politique de rupture : `DENY`
- Mode fulfillment : `physical-stock`
- Transport client annonce : transporteur prive, forfait `59,90 EUR`

## Medias et donnees

- Neuf PNG contractuels `2048 x 2048`
- Neuf ALT distincts verifies dans l ordre
- Manifeste `milaura.pdp_media_manifest` present avec neuf slots
- Metafields produit ecrits : `26`
- Metafield variante Google ecrit : `1`
- Categorie Shopify : `Gemstones`
- Collections attendues presentes : `pieces-rares`, `pierres-mineraux`, `par-pierre-amethyste`, `nouveautes`
- Collections automatiques supplementaires observees : `recos-pool`, `serenite-sommeil`

## Verification

- Pipeline local complet : `PIPELINE_LOCAL_TESTS_PASSED`
- Gate texte : `QUALITY_GATE_PASSED`
- Gate final : `QUALITY_GATE_PASSED`
- Gate images : `ok=true`, neuf fichiers et neuf hashes conformes
- Dry-run : `would_create=true`, `preflight_ok=true`, `image_count=9`
- Pullback Shopify : `status=DRAFT`, `onlineStoreUrl=null`, prix `1299.00`, cout `300.0`, stock `1`, neuf images
- Route publique : HTTP `404`
- Lecture directe des publications : indisponible avec le scope du token actuel. Aucun canal n a ete active par le script de creation.

## Gate restant

Le forfait transporteur prive de `59,90 EUR` est documente dans la fiche mais doit encore etre configure et teste dans Shopify avant activation. Activation, publication, navigation et mise en avant exigent des validations distinctes.
