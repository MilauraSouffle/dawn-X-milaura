# Checkpoint MilAura, preview des rapports d'authenticite

Date : 2026-09-12 17:45 CEST

Statut : preview privee techniquement validee. Revue de finition terminee avec verdict `ship`. Les gates visuelle et editoriale, Shopify Admin, integration Git et publication live restent distinctes et ouvertes.

## Objectif et portee

- Construire une landing permanente de preuve et un bandeau de confiance compact, sans publication publique.
- Montrer les rapports disponibles, expliquer leur perimetre exact et orienter ensuite vers la selection de Karine.
- Preserver la direction canonique `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md`. Ce lot l'etend sans creer de doctrine de design concurrente.
- Conserver la preuve sociale approuvee de la PDP hors perimetre et strictement inchangee.

## Source et limite de preuve

- Source inventoriee le 2026-09-10 : 340 rapports publics issus du portail de Camille Ambiance Nature.
- La preview montre quatre rapports reels : amethyste 8 mm, quartz rose 8 mm, aigue-marine 8 mm et sodalite 6 mm.
- Ces documents portent sur des echantillons selectionnes dans des lots. Ils ne constituent pas un certificat individuel pour chaque bijou ou mineral MilAura.
- Aucun rattachement individuel entre ces rapports et un produit, un EAN ou un lot MilAura n'est etabli. Aucun affichage PDP par produit ne peut etre deduit de cette preview.

## Etat Git et Shopify

- Branche : `codex/milaura-certificates-rewards-20260910`.
- Commits du lot : `7d8dffee`, `d77c0e46` et `d7f00856`.
- Les finitions finales issues de la revue et le commentaire standard ajoute par Shopify au template JSON sont commites dans `d7f00856`.
- Theme prive : `201115566427`.
- URL temporaire de preview : `/pages/contact-milaura?view=milaura-certificats`.
- Destination permanente prevue : `/pages/nos-pierres-et-leurs-certificats`. Son affectation reste derriere la gate Shopify Admin.
- Aucun theme live et aucune valeur Shopify Admin n'ont ete modifies.

## Lot de dix fichiers theme

1. `assets/milaura-authenticity-reports.css`
2. `assets/milaura-report-lfg-aigue-marine-08mm-377250.jpg`
3. `assets/milaura-report-lfg-amethyste-08mm-420060.png`
4. `assets/milaura-report-lfg-quartz-rose-08mm-420585.png`
5. `assets/milaura-report-lfg-sodalite-06mm-bd030771-8.png`
6. `sections/milaura-announcement.liquid`
7. `sections/milaura-authenticity-reports.liquid`
8. `templates/page.milaura-certificats.json`
9. `templates/product.milaura-produit.json`
10. `sections/milaura-cart-rewards.liquid`

Le push est reste cible sur le theme prive. Le pullback confirme la parite des dix fichiers sur dix. Les deux derniers fichiers alignent le premier palier technique de 20 a 30 euros, en coherence avec les textes et les deux autres paliers de 50 et 80 euros.

## Revue Impeccable et validation

- `shopify theme check` : 0 erreur et 16 warnings historiques hors lot.
- Controle copywriting : PASS sur 340 fichiers.
- Recette navigateur : 360, 390, 430 et 1440 px, sans debordement horizontal.
- Structure : un seul H1 et quatre rapports affiches.
- Liens des rapports et destinations controles avec reponses HTTP 200.
- Bandeau : rotation, navigation manuelle, focus clavier et `prefers-reduced-motion` conformes.
- Non-regression : accueil et PDP controles en mobile et desktop. La preuve sociale PDP est inchangee.
- La revue de finition a detecte un effet de `ghost-card` autour du rapport principal. Le fond et l'ombre du cadre ont ete retires, puis le H1 mobile a ete corrige pour eviter la cassure d'un mot.
- Apres correction et seconde lecture mobile et desktop, verdict final : `ship` pour la preview privee.

Captures : `output/playwright/certificates-preview-2026-09-12/`.

## Gates et risques restants

1. GO visuel et editorial explicite de Patrice.
2. Gate Shopify Admin pour la destination permanente.
3. Integration du lot et commit des finitions finales.
4. GO live explicite avant toute publication sur le theme public.

Risques non leves :

- le droit de republication commerciale des scans doit etre confirme avant le live ;
- l'absence de mapping entre les rapports, les lots fournisseurs et les produits MilAura interdit toute attribution individuelle.

Aucun live et aucun Shopify Admin n'ont ete touches par ce lot.
