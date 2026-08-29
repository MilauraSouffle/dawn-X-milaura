# Handoff Codex MilAura, dix brouillons inventaire prets pour revue

Date : 2026-08-29 18:13 CEST

Statut : `PASS TECHNIQUE - 10 DRAFTS - REVUE PATRICE OUVERTE - LIVE INCHANGE`

## Reprise canonique

```text
Reprends la revue des dix brouillons inventaire du 29/08. Lis docs/codex-handoff.md et ouvre les liens Admin un par un. Aucun produit ne doit etre active ou publie sans mon GO explicite.
```

Avant toute action, lire `AGENTS.md`, `docs/project-state.md`, `docs/workstreams.md` et `docs/checkpoints/2026-08-29-1813-inventory-next-ten-drafts.md`.

## Etat ferme

- Vue canonique : 185 references, 456 unites physiques.
- Shopify dans la vue : 86 `ACTIVE`, 12 `DRAFT`, 87 absentes.
- Correspondances et stocks exacts : 98 sur 98, zero ecart.
- Ledger 175 : 78 actifs prouves, 10 `batch-complete-draft`, 81 `queued`, 6 `excluded-non-sale`.
- Photos : 78 `validee pipeline + Patrice`, 107 `a valider`.
- Catalogue Shopify complet : 668 produits relus le 2026-08-29.
- Theme et live : aucun changement.

## Dix brouillons a inspecter

| EAN | Produit | Prix TTC | Stock | Lien Admin |
| --- | --- | ---: | ---: | --- |
| `3701459084494` | Collier en lapis-lazuli d'Afghanistan 4 mm - 45 cm | 39,90 EUR | 1 | https://admin.shopify.com/store/milaura-2/products/10678645522779 |
| `3701459074563` | Collier en howlite blanche 6 mm - 45 cm | 15,90 EUR | 1 | https://admin.shopify.com/store/milaura-2/products/10678645883227 |
| `3701459074556` | Collier en hematite 6 mm - 45 cm | 15,90 EUR | 2 | https://admin.shopify.com/store/milaura-2/products/10678646309211 |
| `3701459074617` | Collier en oeil de taureau 6 mm - 45 cm | 15,90 EUR | 1 | https://admin.shopify.com/store/milaura-2/products/10678646866267 |
| `3701459074624` | Collier en oeil de tigre 6 mm - 45 cm | 15,90 EUR | 1 | https://admin.shopify.com/store/milaura-2/products/10678647521627 |
| `3701459074686` | Collier en rhodonite de Madagascar 6 mm - 45 cm | 14,90 EUR | 1 | https://admin.shopify.com/store/milaura-2/products/10678648308059 |
| `3667407000353` | Orgonite pyramide Arbre de Vie en amethyste - 60 mm | 19,90 EUR | 1 | https://admin.shopify.com/store/milaura-2/products/10678648701275 |
| `3667407000155` | Orgonite pyramide Cercle magique en amethyste - 60 mm | 19,90 EUR | 1 | https://admin.shopify.com/store/milaura-2/products/10678648996187 |
| `3701459056033` | Plaque Arbre de Vie en bois de tilleul - 10 cm | 8,90 EUR | 3 | https://admin.shopify.com/store/milaura-2/products/10678649454939 |
| `3701459027453` | Rouleau de massage visage en jade de Chine a deux tetes | 25,90 EUR | 1 | https://admin.shopify.com/store/milaura-2/products/10678649848155 |

Le collier rhodonite est en rupture fournisseur, mais MilAura possede une unite physique. La plaque bois est vendue a l unite et le stock Shopify de 3 represente trois unites physiques.

## Preuves techniques

- 20 gates texte et final PASS.
- 50 images V3, exactement cinq par produit, 1024 x 1024.
- 10 identites Shopify uniques par EAN, SKU et barcode exacts.
- 10 statuts `DRAFT`, 10 URLs publiques nulles.
- Prix, couts, stocks, suivi, politique `DENY`, categories, collections et metachamps exacts.
- Sheet ecrit puis relu sur les dix lignes. Prix et quantites physiques inchanges.
- `Photo fidele validee` reste `a valider` pour les dix.
- Le builder 185 a ete corrige afin qu un `batch-complete-draft` ne soit jamais assimile a une validation Patrice.

## Artefacts de reprise

Workspace prive :

`/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation`

- `data/catalogue-batches/2026-08-25-physical-stock-175/next-10-2026-08-29/manifest.json`
- `data/catalogue-batches/2026-08-25-physical-stock-175/next-10-2026-08-29/live-proof.json`
- `data/catalogue-batches/2026-08-25-physical-stock-175/next-10-2026-08-29/sheet-proof.json`
- `data/catalogue-batches/2026-08-25-physical-stock-175/next-10-2026-08-29/shopify-live-identity-audit.json`
- `data/catalogue-batches/2026-08-25-physical-stock-175/next-10-2026-08-29/shopify-read-audit-post-drafts.json`
- `data/catalogue-batches/2026-08-25-physical-stock-175/consolidated-185.json`
- `backups/2026-08-29T1806-next10-live-proof/`

## Gates encore ouvertes

1. Patrice inspecte les dix brouillons, un par un.
2. Chaque verdict visuel est consigne sans extrapolation aux autres produits.
3. Une validation visuelle ne vaut pas activation automatique.
4. Activation, canaux, publication et live exigent un nouveau GO explicite.
5. Arbitrage variantes, Ads, theme, C1 et produits hors lot restent exclus.
