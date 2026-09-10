# Rapports fournisseur et paliers PDP

Date : 2026-09-10 11:05 CEST

Statut : audit termine, correction dormante preparee, aucun deploiement.

## Resultat

- 340 rapports publics recuperes sur huit pages, zero echec, zero doublon SHA-256.
- Archive privee de 21 174 952 octets avec manifeste OCR et outils reproductibles.
- Le portail fournisseur attribue la liste au LFG Paris et precise que les analyses portent sur des echantillons de lots.
- Aucun rattachement automatique a un EAN ou produit MilAura n est autorise sans preuve de reference ou de lot.
- La preuve sociale PDP est approuvee et strictement hors perimetre.

## Palier 20 euros

- Le panier actif du theme public utilise les valeurs par defaut 30, 50 et 80 euros.
- Le `20` signale se trouvait dans l ancien apercu PDP, desactive par `show_scratch: false`.
- `templates/product.milaura-produit.json` est aligne de 20 a 30.
- La section panier ancienne et non montee est alignee de 20 a 30 dans son fallback, sa note et son schema.
- Le fallback de `sections/milaura-product-hero.liquid` reste temporairement intact car ce fichier est reserve par le chantier favoris. Il n est actif dans aucun template produit courant.

## Fichiers versionnes du lot

- `templates/product.milaura-produit.json`
- `sections/milaura-cart-rewards.liquid`
- `docs/audits/2026-09-10-camille-authenticity-reports.csv`
- `docs/audits/2026-09-10-camille-authenticity-reports.json`
- `docs/audits/2026-09-10-certificats-et-paliers-pdp.md`
- `docs/workstreams.md`
- `docs/checkpoints/2026-09-10-1105-certificates-rewards-audit.md`

## Verification

- `shopify theme check` : zero erreur, seize avertissements historiques hors lot.
- JSON : lisible et 340 entrees.
- CSV : en-tete plus 340 lignes de donnees.
- Archive : 251 JPEG, 89 PNG, 340 empreintes uniques.
- Pull du seul `config/settings_data.json` du live `190430282075` : lecture seule, aucun seuil explicite, valeurs du schema 30, 50 et 80 appliquees.

## Gates restantes

1. Droit de republication des scans.
2. Correspondance reference ou lot pour tout affichage PDP.
3. GO Patrice pour construire la landing et le bandeau sur preview.
4. Tests checkout des avantages avant toute promesse publique.
5. GO visuel et editorial, puis GO Admin et live distincts.

Audit detaille : `docs/audits/2026-09-10-certificats-et-paliers-pdp.md`.
