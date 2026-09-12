# Checkpoint MilAura, preview des rapports d'authenticite

Date : 2026-09-12 17:45 CEST

Statut : preview privee techniquement validee apres protection des documents. Bandeau valide par Patrice le 2026-09-12 apres correction rose. A 18:54 CEST, le flou integral juge trop fort par Patrice a ete remplace par un masquage localise : structure du rapport, logo LFG et illustration de la pierre visibles ; informations et filigrane fournisseur illisibles. La page et le theme prive ne servent plus les scans lisibles. La purge de l'ancien commit sur la branche GitHub publique exige cependant un GO destructif distinct. Le GO final de la landing, Shopify Admin, l'integration Git et la publication live restent distincts et ouverts.

## Objectif et portee

- Construire une landing permanente de preuve et un bandeau de confiance compact, sans publication publique.
- Montrer les rapports disponibles, expliquer leur perimetre exact et orienter ensuite vers la selection de Karine.
- Preserver la direction canonique `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md`. Ce lot l'etend sans creer de doctrine de design concurrente.
- Conserver la preuve sociale approuvee de la PDP hors perimetre et strictement inchangee.

## Source et limite de preuve

- Source inventoriee le 2026-09-10 : 340 rapports issus du portail fournisseur, conserves uniquement dans l'archive de travail privee.
- La preview montre quatre apercus definitivement floutes : amethyste 8 mm, quartz rose 8 mm, aigue-marine 8 mm et sodalite 6 mm. Les informations utiles sont resumees en texte sans donner acces aux documents complets.
- Ces documents portent sur des echantillons selectionnes dans des lots. Ils ne constituent pas un certificat individuel pour chaque bijou ou mineral MilAura.
- Aucun rattachement individuel entre ces rapports et un produit, un EAN ou un lot MilAura n'est etabli. Aucun affichage PDP par produit ne peut etre deduit de cette preview.

## Etat Git et Shopify

- Branche : `codex/milaura-certificates-rewards-20260910`.
- Commits du lot avant la correction du 2026-09-12 a 18:02 CEST : `7d8dffee`, `d77c0e46`, `d7f00856` et `caac2604`.
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

Le push est reste cible sur le theme prive. Les deux derniers fichiers alignent le premier palier technique de 20 a 30 euros, en coherence avec les textes et les deux autres paliers de 50 et 80 euros. La correction du 2026-09-12 a 18:39 CEST remplace les quatre fichiers de scans par leurs versions floutees sous les memes noms, afin que les anciennes URL du theme prive ne servent plus les originaux lisibles.

## Revue Impeccable et validation

- `shopify theme check` : 0 erreur et 16 warnings historiques hors lot.
- Controle copywriting : PASS sur 340 fichiers.
- Recette navigateur : 360, 390, 430 et 1440 px, sans debordement horizontal.
- Structure : un seul H1 et quatre rapports affiches.
- Aucun lien d'ouverture des rapports, aucune consigne d'agrandissement et aucun lien vers le portail fournisseur ne subsistent dans la page.
- Bandeau : rotation, navigation manuelle, focus clavier et `prefers-reduced-motion` conformes.
- Non-regression : accueil et PDP controles en mobile et desktop. La preuve sociale PDP est inchangee.
- La revue de finition a detecte un effet de `ghost-card` autour du rapport principal. Le fond et l'ombre du cadre ont ete retires, puis le H1 mobile a ete corrige pour eviter la cassure d'un mot.
- Apres correction et seconde lecture mobile et desktop, verdict final : `ship` pour la preview privee.
- Retour Patrice du 2026-09-12 a 18:02 CEST : bandeau valide, fond passe de l'aigue-marine au quartz rose poudre canonique. Le texte public nomme maintenant `l'un de nos fournisseurs` sans exposer son nom commercial a l'ouverture. Push prive cible et pullback 2 sur 2 identique. Controle a 390 px : H1 sur deux lignes et aucun debordement.
- Retour Patrice du 2026-09-12 a 18:39 CEST : les documents complets ne doivent pas etre accessibles publiquement. Le floutage est integre dans les pixels des quatre images ; la page n'utilise donc pas un simple filtre CSS reversible.
- Push cible de six fichiers sur le theme prive `201115566427`, puis pullback six sur six identique. Controle reel a 390 px et en bureau : cinq apercus proteges affiches, zero lien vers un scan, zero lien vers le portail fournisseur et aucun debordement horizontal.
- Retour Patrice du 2026-09-12 a 18:54 CEST : flou integral refuse. Les quatre apercus utilisent maintenant un masquage localise plus leger. Push cible de quatre fichiers, pullback quatre sur quatre identique et nouvelle recette mobile 390 px conforme.
- Inventaire prive confirme : 340 rapports recuperes sur 8 pages, 340 traites par OCR et 0 echec de telechargement. La landing montre quatre exemples seulement ; les 336 autres restent dans l archive de travail privee.

Captures : `output/playwright/certificates-preview-2026-09-12/`.

## Gates et risques restants

1. GO visuel et editorial final de la landing par Patrice ; le bandeau est deja valide.
2. Gate Shopify Admin pour la destination permanente.
3. Integration du lot et commit des finitions finales.
4. GO live explicite avant toute publication sur le theme public.

Risques non leves :

- le depot GitHub est public et l'ancien commit `d77c0e46` de la seule branche `codex/milaura-certificates-rewards-20260910` contient encore les quatre scans lisibles dans son historique. Une reecriture ciblee de cette branche distante est necessaire avant de declarer leur exposition publique totalement traitee ;
- la landing floutee doit recevoir le GO visuel final de Patrice avant toute integration ;
- l'absence de mapping entre les rapports, les lots fournisseurs et les produits MilAura interdit toute attribution individuelle.

Aucun live et aucun Shopify Admin n'ont ete touches par ce lot.
