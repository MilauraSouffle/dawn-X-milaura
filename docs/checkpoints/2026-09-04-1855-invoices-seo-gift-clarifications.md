# MilAura : deux factures integrees, SEO et cadeau a clarifier

Date : 2026-09-04 18:55 CEST. Auteur : Codex.
Statut : `IMPORT SHEET VERIFIE ; TROIS STOCKS ET IDENTITE CADEAU EN ATTENTE ; AUCUNE MUTATION SHOPIFY`.

## Mandat et priorites

Patrice demande une explication claire de l'effet SEO du retrait legacy et propose de conserver le cadeau panier avec une fiche remise au workflow courant. Il fournit deux factures locales, detaille les ventes et demande de reutiliser les references du Sheet sans doublons, en ajoutant les restes au stock deja present.

La priorite accordee au referencement organique est explicite. Le retrait technique du catalogue est termine, mais son accompagnement SEO n'est pas termine. Aucune analyse Search Console ou backlinks n'a quantifie la valeur des anciennes URLs ; aucun impact nul ne peut etre garanti. Aucune redirection, reactivation, modification de stock Shopify ou remise au workflow n'est autorisee par deduction depuis ces questions.

## Reponse SEO et prochaine decision

- Une serie de vraies 404 n'est pas, a elle seule, une penalite globale Google. Une page disparue peut cependant perdre son indexation, ses positions et son trafic.
- Produit temporairement epuise : conserver une page 200 informative et non achetable, avec disponibilite et stock reels. Mettre artificiellement les stocks a zero pour un retrait commercial ne constitue pas un inventaire fiable.
- Ancienne fiche remplacee par un produit reellement equivalent : preparer une redirection permanente 301 vers la nouvelle destination pertinente, apres verification des identites et de la destination publique.
- Retrait durable sans equivalent : 404/410 possible ; ne pas rediriger en bloc vers la Home ou des pages sans rapport.
- Etape recommandee avant nouvelles creations : inventorier les anciennes URLs HTML, relever clics/impressions et liens disponibles, rapprocher les vrais remplacements, proposer une table de redirections puis verifier les destinations et le maillage. Pas de publication SEO executee dans ce lot.

Sources officielles consultees le 2026-09-04 : [Google 404](https://support.google.com/webmasters/answer/2445990?hl=en), [Google indisponibilite temporaire](https://developers.google.com/search/docs/crawling-indexing/pause-online-business), [redirections Shopify](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect).

## Cadeau panier : faits relus et question d'identite

- Produit exact relu dans Admin : `10504072954203`, variante `53142713925979`, titre `Cadeau - Bracelet Hematite 4mm`, SKU `MILAURA-GIFT-BR-HEMATITE`, barcode vide.
- Etat courant : DRAFT, URL publique null, prix 0, quantite Shopify 50, inventoryPolicy DENY. Le theme reference encore cette variante ; le maintien du mecanisme ne prouve pas la disponibilite du cadeau.
- Patrice decrit un bracelet amethyste reserve aux cadeaux et declare 12 unites physiques, absent du Sheet. HEMATITE et AMETHYSTE ne sont pas interchangeables. Ne pas appliquer 12 a cet ID sans confirmation de la pierre ou preuve du produit exact.
- Avis : conserver une identite cadeau dediee et la remettre au workflow est coherent. Cela doit inclure un stock physique suivi, une exclusion du catalogue de vente ordinaire et un controle reel du seuil/quantite au paiement. Le statut UNLISTED masque les listes mais n'interdit pas a lui seul un ajout par URL directe ; ne pas assimiler les tags `no-buy` a une protection serveur.
- Aucun produit cadeau cree, enrichi, reactive ou modifie. Aucun test panier/commande. Le cadeau n'a pas ete ajoute au Sheet sous une identite incertaine.

## Import des deux factures dans le Sheet

Sources privees : `FCAN2026-59350-77206.pdf` (commande 76878 du 2026-08-30, facture du 2026-08-31) et `FCAN2026-59481-77383.pdf` (commande 77055 du 2026-09-02, facture du 2026-09-03), fournies dans `/Users/paesano/Downloads/`. Les quatre pages ont ete extraites et inspectees visuellement. Aucun PDF, coordonnee personnelle ou bancaire versionne dans Git.

Sheet exact : [Inventaire physique canonique](https://docs.google.com/spreadsheets/d/1QrtP77A-6FUmzOaOdD9U5CigCbrRpDWH5GTb7N1NUbM/edit#gid=1034959372).

- Controle anti-doublon : les commandes n'etaient pas importees. 35 lignes de facture, 33 EAN distincts ; neuf EAN deja presents et 24 nouveaux, sans correspondance de nom fournisseur exact sur une autre reference. Les deux presences Eclat et fil de jade sont agregees chacune dans une seule ligne canonique.
- `Inventaire canonique` : lignes 313:336 ajoutees, neuf lignes existantes 13/31/47/49/50/51/53/57/241 mises a jour de facon ciblee. 332 EAN uniques apres import. Historique d'achat, dernier achat et couts moyens ponderes actualises sur ces 33 references, sans modifier les prix de vente ni les IDs/statuts Shopify existants.
- `Commandes` : lignes 21:22 ajoutees, 18 commandes au total. `Lignes d'achat` : lignes 392:426 ajoutees, 422 lignes d'achat au total. Les quantites facturees sont conservees ; aucune facture existante reecrite.
- Les lots de trois galets sont comptes en trois pieces achetees et deux restantes par reference. La reference rhodonite sans EAN dans le message est identifiee sur facture : `3701459076604`. Le lot de cartes sodalite comporte dix cartes physiques ; aucune fiche de vente n'est creee pour elles. Un fil de perles reste un fil, pas un nombre de perles invente.
- Stocks non ambigus : ajout total de 46 unites physiques, dont dix cartes d'information. Six stocks existants augmentes ; les trois lignes ambigues ci-dessous restent inchangees. Les cinq nouvelles references declarees entierement vendues sont inscrites a zero.
- Hypothese appliquee, conforme a la demande d'ajout : les quantites restantes des nouveaux achats s'ajoutent au stock anterieur du Sheet. Pour les lignes non signalees comme vendues, la quantite facturee est retenue comme restante dans le contexte de reception declare par Patrice.
- Aucun stock, cout, prix, statut, canal, contenu ou media Shopify modifie. Les 24 nouvelles lignes Sheet ne sont pas 24 nouveaux produits Shopify ; les nouveaux produits/activations restent soumis a leur GO propre.

## Trois stocks physiques en attente

| EAN | Produit | Fait et question | Sheet conserve |
| --- | --- | --- | --- |
| 3701459098132 | Collier Boho obsidienne noire | Facture : cinq exemplaires. Message : un achete, un vendu, zero restant. Faire confirmer le stock total ; les cinq achats factures sont conserves dans l'historique. | ligne 50, zero |
| 3701459010042 | Bracelet rhodonite Australie 6 mm | Deux nouveaux vendus declares, mais une ancienne unite existe au Sheet. Confirmer si elle existe toujours ou si zero est le total physique actuel. | ligne 57, une unite |
| 3701459011551 | Bracelet oeil-de-tigre 8 mm | Une nouvelle unite vendue, zero restant annonce, mais deux anciennes unites existent au Sheet. Confirmer le total physique actuel. | ligne 31, deux unites |

L'ecart Unys du lot precedent reste distinct : EAN 3667407007024, ligne 181, physique Sheet 4 / Shopify 1. Aucune de ces factures ne justifie sa correction.

## Verification et preuves

Sauvegarde privee et recus : `/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation/data/catalogue-batches/2026-09-04-invoices-59350-59481/`.

- Deux PDF sources copies a l'identique, `backup-receipt.json`, `invoices-parsed.json`, `sheet-before.json`, `sheet-import-plan.json`, `sheet-after.json` et `sheet-verification.json`.
- Avant ecriture : metadonnees, en-tetes, donnees/cellules, validation, exemples de structure et queues vides verifies. Relecture immediate sans derive concurrente.
- 102 requetes atomiques sur les trois onglets. Apres : valeurs et formules attendues, zero doublon d'EAN, 4 312 formules preexistantes conservees et aucune erreur de formule. Les 61 changements de valeurs preexistantes correspondent uniquement au plan ; lignes nouvelles et deux sous-titres historiques controles separement.
- Montants de chaque facture et allocations de transport reconcilies. Trois stocks en attente, zero mutation Shopify, zero redirection.
- Formats et validations des nouvelles lignes compares aux exemples. 205 changements de metadonnees de liens correspondent seulement a la nouvelle URL ou a l'absence d'URL ; aucun lien d'un produit ou d'une facture exemple n'a ete copie dans une nouvelle identite. Rapport brut conserve puis rapprochement valide.
- Rendu natif Google non accessible sans connexion ; controle de format par API seulement, absence de clipping non certifiee. Aucune largeur, hauteur, formule ou style global change.

Git : HEAD initial 701d9304 ; commit documentaire limite a ce checkpoint, aux nouveaux blocs prioritaires et a la seule ligne de registre de ce lot. Travaux concurrents preserves ; aucun deploiement.
