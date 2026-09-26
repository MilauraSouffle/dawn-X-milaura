# Rapport corrections PDP live - Geode GC0256

Date : 2026-09-26
Statut final : `LIVE_VERIFIED`

## Perimetre publie

- Produit Shopify : `10764374081883`
- Variante : `54192929866075`
- SKU : `GC0256`
- URL publique : `https://milaura.fr/products/geode-cathedrale-en-amethyste-19-9-kg`
- Theme public : `190430282075`

## Corrections

1. La note generique sur les variations naturelles est remplacee uniquement sur cette fiche par une information contractuelle : l acheteur recevra exactement cette geode. Un lien vers la page contact permet de demander d autres photos ou une video.
2. La preuve sociale `Plus de 135 clientes et clients` est masquee uniquement sur cette fiche.
3. Le quatrieme champ des caracteristiques principales devient `Grade / AA+ tres eleve` au lieu de repeter `Pierre / Amethyste`.
4. Le texte de l onglet Pierre decrit la qualite exceptionnelle, le grade AA+, la cavite, les nuances, les cristaux, le caractere decoratif, l apaisement, le sommeil et l usage de recharge des bijoux.

## Implementation

- `sections/milaura-product-hero-v2.liquid` accepte trois surcharges par produit :
  - `milaura.pdp_photo_notice`
  - `milaura.pdp_hide_social_proof`
  - `milaura.pdp_hero_grade`
- Metachamps existants mis a jour :
  - `milaura.qualite`
  - `milaura.stone_description`
- Les trois nouvelles surcharges restent vides sur les autres produits. Leur rendu demeure donc inchange.

## Preuves

- Baseline live avant push strictement identique au `HEAD` de la branche.
- `shopify theme check` : zero erreur, seize avertissements historiques hors lot.
- Push cible avec `--only sections/milaura-product-hero-v2.liquid --allow-live --nodelete --strict`.
- Pullback live du fichier Liquid strictement identique au fichier local.
- Pullback Admin API : cinq metachamps exacts, produit `ACTIVE`, prix `1299.00`, stock `1`, SKU, variante et collections preserves.
- HTML public : note contractuelle, lien contact, grade et nouveau texte presents; preuve sociale absente.
- QA navigateur mobile : bloc `Grade / AA+ tres eleve`, onglet Pierre et selection `AA+ tres eleve` visibles sans rupture de mise en page.

## Sauvegarde

- `shopify/snapshots/10764374081883-20260926T063950Z-before-pdp-specifics.json`
