# Search Console, confirmations physiques et identite hematite

Date : 2026-09-04 19:42 CEST. Proprietaire : Codex, GO explicites de Patrice pour l'audit GSC, les confirmations du Sheet et la reprise du cadeau hematite. Depart en lecture seule respecte.

Statut : AUDIT GSC TERMINE ; TROIS STOCKS SHEET CONFIRMES ; CADEAU SHOPIFY A 12 MAIS TOUJOURS DRAFT ; COMPTAGE HEMATITE A CLARIFIER.

## SEO

[Audit complet](../audits/2026-09-04-legacy-retirement-search-console.md). Les 237 anciens handles representent 231 clics sur trois mois et 109 clics sur 28 jours, ces derniers sur 59 handles. Ils pesent 55,6 % des clics de la table Pages sur 28 jours, pas une perte de 55,6 % deja mesuree. Donnees arretees au 2026-09-02, avant retrait.

Aucune action manuelle ou alerte securite. Le sitemap public contient exactement les 173 canoniques actifs ; le rapport GSC du sitemap est ancien, derniere lecture 2026-02-22. Inspection pendule cristal encore indexee apres exploration du 2026-08-31, alors que public 404. Nouvelle fiche hematite 200 et presente au sitemap mais URL encore inconnue de Google.

Aucune redirection, reactivation SEO, demande d'indexation, soumission de sitemap ni automatisation. Les options de correction sont preparees, pas autorisees par le seul GO audit. Aucun equivalent EAN exact trouve automatiquement entre les 237 retraits et les 179 canoniques proteges ; les equivalents commerciaux demandent une revue manuelle.

## Sheet : confirmations executees et verifiees

Fichier canonique `1QrtP77A-6FUmzOaOdD9U5CigCbrRpDWH5GTb7N1NUbM`, onglet `Inventaire canonique`, sheetId `1034959372`.

| EAN | Ligne | Quantite finale | Action |
| --- | ---: | ---: | --- |
| `3701459098132`, Boho obsidienne | 50 | 4 | A50 passe de 0 a 4, confirmation ajoutee a AP50 |
| `3701459010042`, rhodonite 6 mm | 57 | 1 | Ancien stock conserve, aucun ajout, confirmation AP57 |
| `3701459011551`, oeil-de-tigre 8 mm | 31 | 2 | Ancien stock conserve, aucun ajout, confirmation AP31 |

Quatre cellules modifiees exactement. Preflight des trois lignes A:AS, verification apres ecriture, structures/formules/formats preserves et aucune erreur de formule cible. Controle visuel natif Sheet : A50=4, EAN et nom corrects, A57=1 visible, mise en forme conservee. L'historique des cinq achats Boho figure deja dans I50=6 ; ne pas rajouter les cinq une seconde fois. Aucun stock Shopify de ces trois references modifie. Boho `10557516644699` reste DRAFT.

Les deux factures ont ete importees au lot precedent : commandes 76878/77055, 35 lignes d'achat, 33 EAN. Ne pas rejouer cet import ni recreer les 24 EAN ajoutes au Sheet.

## Hematite : deux objets distincts, meme reference physique probable

Le lien fournisseur donne par Patrice est [Bracelet boule 04mm hematite A](https://camille-ambiance-nature.fr/produit/bracelet-boule-04mm-hematite-a), EAN `3701459008254`, prix public CAN releve le 2026-09-04 de 8,50 EUR.

Une fiche canonique pour cet EAN existe deja, avec un enrichissement et une galerie de cinq images approuves par Patrice dans le chantier precedent :

- Produit `10685849862491`, variante `53946608517467`.
- [Bracelet fin en hematite, perles de 4 mm](https://milaura.fr/products/bracelet-fin-en-hematite-perles-de-4-mm).
- ACTIVE, prix 8,50 EUR, Shopify stock 9, Sheet ligne 163 stock 9, EAN exact en SKU/barcode.
- Public 200, canonique correcte, cinq images. Aucune modification de cette fiche ni de la ligne 163 pendant ce lot.
- Ne pas regenerer une galerie deja acceptee uniquement pour la basculer du workflow V4 au V4.1. Pas de nouvelle generation d'images executee ici.

L'objet cadeau historique est different :

- Produit `10504072954203`, variante `53142713925979`, inventoryItem `55237081268571`, location `111293628763`.
- Handle `cadeau-bracelet-hematite-4mm`, SKU `MILAURA-GIFT-BR-HEMATITE`, aucun barcode, DRAFT, prix 0,00 EUR, compareAt 8,90 EUR, une ancienne image.
- Stock corrige de 50 a 12 a la demande de Patrice, ecriture compare-and-set depuis 50 puis pullback strict. Available et on_hand a 12, autres etats a zero. Statut, prix, contenu, media, tags, cout et taxe inchanges.
- Idempotency key de l'operation terminee : `80e1373b-49a2-4f24-9614-fbe64887024a`. Ne pas rejouer `gift_stock.py`.

Question envoyee a Patrice, sans reponse au moment de ce checkpoint : les 12 cadeaux s'ajoutent-ils aux neuf deja dans le Sheet et Shopify, ou 12 est-il le total physique ? Ne pas inventer un total de 21, ne pas retrancher des unites des neuf canoniques, ne pas activer les deux pools avant clarification.

L'activation et l'enrichissement du cadeau ne sont pas termines. La source exacte est desormais identifiee, mais le comptage et le modele cadeau/vente doivent etre coherents. Le theme reconnait comme cadeaux le prefixe `cadeau-`, le titre `Cadeau -` ou la propriete `_milaura_gift=true` et retire les cadeaux ineligibles ; changer seulement le prix de cet objet ne cree pas une vente ordinaire correcte.

Une vente ordinaire est deja possible via la fiche canonique a 8,50 EUR. Apres confirmation des pools, privilegier la reutilisation de cette fiche et de son travail valide, sans nouveau doublon commercial. Le raccordement operationnel du cadeau demande une preuve panier et la preservation du seuil ; ne pas declarer ce raccordement fonctionnel tant que l'objet est DRAFT. Aucune modification theme ou remise serveur n'est incluse par deduction.

## Preuves et limites

Racine privee : `/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation/data/catalogue-batches/2026-09-04-gsc-gift-confirmations/`.

Preuves : `sheet-before.json`, `sheet-after.json`, `sheet-verification.json`, `stock-request.json`, `stock-response.json`, `stock-verification.json`, `gift-before.json`, `gift-after.json`, `hematite-canonical-live.json`, source CAN actualisee, matrice GSC et controles publics. Copie controlee de 32 fichiers dans `audit-evidence-manifest.json` ; les recus stock preexistants sont preserves.

Pas de scope `read_publications` ni de scope remises dans l'acces utilise. Pas d'affirmation d'audit exhaustif des canaux. Aucun raw secret affiche. Blocage du telechargement GSC respecte, aucun contournement. Aucun deploy, Ads, suppression, nouvelle fiche ou activation dans ce lot. L'ecart Unys ligne 181 Sheet 4 / Shopify 1 et les recommandations orphelines restent distincts et non corriges.

## Reprise

```text
Reprends MilAura depuis docs/checkpoints/2026-09-04-1942-gsc-stock-hematite.md, d'abord en lecture seule. Ne rejoue ni le retrait des 237 legacy, ni les factures, ni les corrections du Sheet et du stock cadeau. Lis l'audit GSC associe : trafic historique expose, pas perte mesuree. Attends le GO pour les redirections/sitemap. Pour l'hematite EAN 3701459008254, la fiche canonique 10685849862491 est deja ACTIVE, enrichie et validee, stock 9 ; l'objet cadeau 10504072954203 est DRAFT avec stock maintenant 12. Resous avec Patrice si les 12 s'ajoutent aux neuf ou constituent le total, puis preserve la galerie acceptee et verifie le modele cadeau/vente avant activation. Aucun theme, autre produit ou faux stock a modifier par deduction.
```

Git au depart : `codex/milaura-integration`, HEAD `7ad10ff103acf5fd07edf498180d61e7f51a7bff`, index vide, checkout deja sale. Ce lot ne versionne que son audit, son checkpoint, ses nouveaux blocs de reprise et sa ligne du registre. Changements concurrents conserves, aucun fichier theme modifie. Verification : parite des donnees, HTTP/XML, lecture GSC, controle visuel Sheet et diff documentaire ; Theme Check non requis pour ce lot sans edition de theme.
