# MilAura : retrait reversible du catalogue legacy

Date : 2026-09-04. Auteur : Codex. Reprise du mandat de `2026-09-04-1738-inventory-legacy-retirement-handoff.md`.
Mise a jour finale : 2026-09-04 18:39 CEST.
Statut : `237 RETRAITS VERIFIES ; 179 CANONIQUES INCHANGES ; SHEET SYNCHRONISE ; LIMITES D'ACCES NOMMEES`.

## Resultat Shopify etabli

- Lecture initiale complete : 749 produits Shopify, trois pages REST API 2026-07, tous statuts. Total compare a `products/count.json` et unicite des IDs verifiee.
- Boutique verifiee : Shop ID `97728069979`, domaine principal `milaura.fr`, endpoint `milaura-2.myshopify.com`, domaine permanent retourne `dvsi0r-1q.myshopify.com`.
- Sheet canonique : 308 lignes renseignees, onglet `Inventaire canonique`, sheetId `1034959372`. Lecture A5:AS350 puis verification D351:D1000 vide ; donnees presentes jusqu'a la ligne 312.
- Protection : 179 produits canoniques, dont 173 ACTIVE et six DRAFT volontaires. Les preuves consolidees couvrent 185 EAN avant exclusion des six cadeaux supprimes. Zero ambiguite d'identite, zero reference physique positive sans preuve et couverture exhaustive des 749 IDs.
- Le perimetre protege inclut 24 IDs anterieurs a `10600000000000` et 38 galeries historiques de six images. Ces caracteristiques n'ont jamais servi de criteres de retrait.
- Retrait effectue : 236 anciens ACTIVE et un ancien UNLISTED passes en DRAFT. 333 anciens deja DRAFT/ARCHIVED non mutes. Aucun DELETE, aucune activation, aucun nouveau produit.
- Apres retrait : 173 ACTIVE, 561 DRAFT, 15 ARCHIVED, zero UNLISTED. Tous les ACTIVE appartiennent aux 179 canoniques proteges.
- Trois controles des 179 proteges : sauvegarde initiale, comparaison complete immediatement avant execution, comparaison complete apres. Zero difference : prix, stock, cout, contenu, SEO, titre, handle, SKU/barcode, medias, metachamps, collections et etat observable de publication preserves.
- Les 237 mutations ne contiennent que `product.id` et `product.status=DRAFT`. Chaque ID a son intention, reponse, pullback complet et recu de verification.
- La relecture REST brute a signale 233 changements `published_scope: global -> web`. Ils ont ete rapproches des payloads status-only et classes comme effets automatiques observes de la mise hors vente, pas comme mutations autonomes de canal. Le rapport brut reste conserve ; aucun autre champ interdit n'a change. Ne pas confondre ce champ REST avec une enumeration exhaustive des canaux.

## Brouillons volontaires et exclusions preserves

Les six DRAFT canoniques restent inchanges :

| Produit | ID Shopify |
| --- | --- |
| Encens Palo Santo du Perou, un baton | 10358581723483 |
| Boucles d'oreilles en cornaline, perles de 6 mm | 10357427732827 |
| Calendrier Ref. 69927 | 10694307709275 |
| Calendrier Ref. 69910 | 10694309445979 |
| Calendrier Ref. 66896 | 10694309871963 |
| Coffret decouverte purification | 10694313541979 |

Les six cadeaux precedemment supprimes sont toujours absents et exclus. La grenouille quartz rose est preservee dans son statut ACTIVE observe, sans mutation de Codex. Aucun ancien GO de creation ou d'activation n'a ete rejoue.

## Points distincts du retrait

1. Cadeau panier : ancien produit UNLISTED `10504072954203`, variante `53142713925979`, `Cadeau - Bracelet Hematite 4mm`, maintenant DRAFT dans le perimetre legacy. La mecanique de recompense contient encore cette variante dans les fichiers du theme. Aucune correction automatique, aucun ajout panier ou achat de test. Un lot correctif cible doit etre decide.
2. Ecart de stock preexistant : Bracelet Unys, EAN `3667407007024`, produit `10685905011035`, variante `53946681426267`, ligne Sheet 181. Sheet physique = 4 ; Shopify = 1 avant et apres retrait. Aucune correction de stock. Le precedent rapprochement du 2026-09-02 n'est plus la verite courante ; cause non etablie dans ce lot, sans consultation de commandes clients.
3. Deux mappings Search & Discovery proteges restent references vers des DRAFT legacy : bracelet aigue-marine `10637459095899` vers boucles `10637436584283`, et bracelet Halo aventurine `10557518381403` vers collier `10557523099995`. Les cibles ne sont plus rendues dans les fragments publics controles. Les metachamps sont volontairement preserves ; leur correction demande un lot distinct. Audit local : 129 occurrences d'identifiants/handles anciens dans 25 fichiers, incluant schemas, donnees historiques, templates et tokens generiques ; ce nombre ne represente pas 129 liens casses en production. Home, selections Sodalite/Aigue-Marine, diagnostic et panier controles ne rendent aucun lien produit legacy. La variante cadeau est en revanche encore presente dans leur code public.
4. Limites d'acces : `read_publications` absent. Pas de certification des feeds Meta/Google/Pinterest ni de leurs delais de propagation. Le veritable Mon Ecrin live renvoie vers la page Shopify account `01a04dd8-c889-76f4-ac40-b8aa7d2d48c0` ; acces au compte client non autorise par le controle navigateur. Aucun contournement ni lecture du compte. Les anciens templates account locaux ne prouvent pas ce rendu live.

## Preuves privees durables

Racine : `/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation/data/catalogue-batches/2026-09-04-legacy-retirement/`.

- `classification.json` : listes disjointes, correspondances EAN/produit/variante, lignes Sheet et sources historiques avec SHA-256.
- `classement-lisible-2026-09-04.md` : tous les noms, statuts initiaux et liens Admin, canoniques, retraits et anciens deja hors vente.
- `shopify-before-rest.json` et `shopify-after-rest.json` : 749 produits complets chacun.
- `before/` : 416 snapshots GraphQL complets utiles au retour arriere, metachamps produit/variante, inventaire par emplacement et couts inclus ; aucune pagination imbriquee tronquee.
- `backup-receipt.json` : integrite de chaque snapshot et absence de derive depuis le premier pull.
- `execution/` : preflight des proteges et quatre recus par retrait, plus `retirement-complete.json`.
- `after/` : 179 snapshots complets des canoniques.
- `admin-verification.json` : audit brut conserve, incluant les effets `published_scope`.
- `admin-verification-reconciled.json` : PASS Admin apres classement explicite des effets de mise hors vente.
- `sheet-cells-before.json` : valeurs saisies, 4 312 formules, validations et structures de cellules avant synchronisation.
- `sheet-sync-plan.json`, `sheet-mutation-receipt.json`, `sheet-cells-after.json`, `sheet-after.json` et `sheet-verification.json` : requetes exactes et relecture complete apres synchronisation.
- `public-paced-1/summary.json`, `global-listings.json`, `collections.json`, `products/`, `ruban/`, `search.json` et `pages.json` : controles publics cadences ; les sous-chemins de cette ligne sont relatifs a `public-paced-1/`.
- `public-targeted.json` : 24 controles complementaires HTML, Ruban related et six DRAFT proteges.
- `placements-offline.json` : deux mappings proteges orphelins et occurrences locales, sans mutation et sans les assimiler au rendu live.
- `retrait-verifie-2026-09-04.md` : liste nominative finale des 237 retraits, liens Admin, statuts avant/apres et endpoints publics.
- `completion-receipt.json` : fermeture du perimetre, limites nommees et SHA-256 des artefacts ; 416 sauvegardes avant mutation recontrolees.

## Verification publique et Sheet

- Public, jusqu'au 2026-09-04 a 18:39 CEST : 237 endpoints `/products/{handle}.js` en HTTP 404 ; deux listes globales entierement paginees contiennent exactement les 173 IDs actifs proteges ; 30 collections paginees sans ancien ID ; 12 recherches predictives sans ancien ID.
- Ruban : cinq sources ciblees, dont les trois pendentifs canoniques et les deux mappings orphelins, controles en complementary et related ; aucun ancien ID rendu. Cinq PDP sources HTTP 200, huit anciennes pages HTML ciblees HTTP 404 (cadeau, deux cibles orphelines et cinq savons), six DRAFT canoniques toujours HTTP 404 sur leur endpoint .js. Aucun panier ou achat de test, aucun scenario personnalise exhaustif affirme.
- Une premiere passe publique trop concurrente a rencontre HTTP 429 et a ete arretee. Les 429 ont ete conserves comme echecs d'acces, jamais assimiles a des 404. La passe suivante, sequentielle et cadencee a au moins 1,3 seconde entre requetes avec arret au premier 429, a termine sans nouvelle limitation.
- Sheet [Inventaire canonique](https://docs.google.com/spreadsheets/d/1QrtP77A-6FUmzOaOdD9U5CigCbrRpDWH5GTb7N1NUbM/edit#gid=1034959372) : 145 cellules sur 46 lignes, seulement Z (statut), AB (URL), AP (preuve ajoutee sans effacer l'historique) et AS (date).
- 37 activations manuelles de Patrice constatees sont maintenant refletées dans la Sheet ; huit lignes legacy (50, 51, 142, 228, 236, 288, 292 et 308) passent en DRAFT avec URL vide ; ligne 181 completee par l'ecart Unys preexistant, sans correction de quantite.
- Relecture complete A5:AS312 : exactement les 145 differences attendues, zero difference hors liste, 4 312 formules et 308 validations conservees. Colonnes physiques/couts A:W, champs d'ancienne quantite Shopify et controles photos inchanges. Les sondes de format sont identiques ; aucune mutation de format ou dimension. Verification visuelle native Sheets indisponible car connexion Google demandee ; aucune authentification tentee.

## Prochaine mission et frontieres

Attendre les listes des deux commandes fournisseur annoncees par Patrice. Aucune liste ni facture recue dans cette reprise. Aucune recherche dans ses messages prives. Distinguer commande et reception physique ; rattacher les reassorts aux IDs canoniques exacts et conserver les achats historiques. Aucune creation, activation ou publication future sans GO adapte. Aucun theme, Ads, scope, definition de metachamp ou mapping protege modifie dans ce lot.

Git : checkout `codex/milaura-integration`, HEAD initial `26a06cfd`. Travaux concurrents CI, AGENTS, docs partagees, fichier `docs/codex-handoff 2.md` et HEIC preserves. Aucun merge, reset, clean ou deploiement. Perimetre du commit : ce nouveau checkpoint, deux blocs de reprise ajoutes dans les docs partagees et la seule ligne de registre de ce lot. Les changements preexistants restent hors index ; le checkout reste volontairement sale.

## Prompt de reprise

```text
Reprends MilAura depuis docs/checkpoints/2026-09-04-1826-inventory-legacy-retirement.md. Le retrait legacy est execute : 237 passages DRAFT, 179 canoniques inchanges, Sheet synchronise. Ne rejoue aucun retrait, aucune activation ni suppression. Commence en lecture seule et attends mes deux listes fournisseur pour rapprocher commandes, receptions physiques et IDs canoniques. Preserve les six DRAFT volontaires, les six cadeaux exclus et les quatre visuels refuses. Garde distincts le futur lot correctif cadeau panier/deux mappings orphelins, l'ecart Unys Sheet 4/Shopify 1 et les acces non verifies Mon Ecrin/feeds. Aucun theme, Ads, nouveau produit ou stock modifie sans GO adapte.
```
