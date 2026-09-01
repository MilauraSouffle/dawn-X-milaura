# Handoff Codex MilAura, inventaire du 01/09/2026

Date : 2026-09-01 12:19 CEST

Statut : `LOT V4 10 SUR 10 ACTIF - 118 REFERENCES RAPPROCHEES - 67 RESTANTES`

## Prompt de reprise

```text
Salut Codex, reprends l inventaire MilAura. Check le handoff inventaire du 01/09/2026.
```

Cette phrase lance une reprise en lecture seule. Lire `AGENTS.md`, ce fichier, puis `docs/checkpoints/2026-09-01-1219-inventory-v4-ten-active-crosssell.md`. Relire ensuite le Sheet canonique, Shopify et les sources fournisseur avant de proposer le prochain lot.

## Point inventaire confirme

Le rapprochement frais du 2026-09-01 donne :

- `185` references physiques positives et `456` unites ;
- `118` identites Shopify exactes et `118` stocks exacts ;
- `116 ACTIVE`, `2 DRAFT`, `67 absentes` ;
- `237` unites dans les references rapprochees et `219` unites dans les references restantes ;
- progression : `63,8 %` par reference.

Le lot ferme dans cette session compte dix produits. Il a passe les controles V4 `10/10`, avec exactement cinquante images en `1024 x 1024`. La preuve initiale les montre correctement en `DRAFT`. Un pull Shopify complet de fermeture confirme maintenant les dix produits `ACTIVE`, publics et avec les stocks du Sheet.

Le bracelet aigue-marine EAN `3701459072392`, produit `10684076949851`, est bien membre de la collection `par-pierre-aigue-marine`.

## Cross-sell chaine doree

Patrice a confirme que seule la chaine doree est presente en stock physique : produit `10684097986907`, EAN `3701459096435`, prix `11,90 EUR`, stock `3`.

Elle est maintenant le produit complementaire Shopify standard des 29 pendentifs actifs candidats : Admin `29/29 PASS`, storefront `29/29 PASS` et rendu reel controle sur une fiche produit. Aucun theme, stock, prix, contenu ou statut n a ete change pendant ce micro-lot.

## Deux brouillons a laisser separes

1. EAN `3701459054732`, encens Palo Santo du Perou, produit `10358581723483`, stock `5`.
2. EAN `3701459082018`, boucles d oreilles en cornaline 6 mm, produit `10357427732827`, stock `5`.

Ne pas les activer par deduction. Ils exigent un controle et un GO distincts.

## Prochain lot provisoire

Ces dix references etaient les premieres absentes lors du pull du 2026-09-01. Leur identite, leur prix, leur stock, leur absence Shopify et leur page fournisseur doivent etre relus avant presentation.

| Ligne | EAN | Produit | Stock | Prix TTC | Fournisseur au dernier controle |
| ---: | --- | --- | ---: | ---: | --- |
| 161 | `3701459018840` | Bracelet baroque fluorine multicolore AA | 9 | 11,90 EUR | disponible |
| 162 | `3701459018895` | Bracelet baroque hematite A | 9 | 11,90 EUR | disponible |
| 163 | `3701459008254` | Bracelet boule 04 mm hematite AB | 9 | 8,50 EUR | disponible |
| 165 | `3701459036929` | Bracelet boule 06 mm amazonite Etats-Unis AA | 1 | 19,90 EUR | rupture |
| 166 | `3701459009237` | Bracelet boule 06 mm hematite A | 6 | 9,90 EUR | disponible |
| 171 | `3701459074839` | Collier boule 08 mm howlite blanche A | 1 | 17,90 EUR | disponible |
| 174 | `3701459082100` | Boucles d oreilles modele 04 amethyste 8 mm | 2 | 11,90 EUR | rupture |
| 177 | `3701459082223` | Boucles d oreilles modele 04 cornaline 10 mm | 3 | 12,90 EUR | disponible |
| 178 | `3701459082261` | Boucles d oreilles modele 04 obsidienne noire 10 mm | 2 | 12,90 EUR | rupture |
| 181 | `3667407007024` | Bracelet Unys argente onyx et oeil de taureau | 1 | 25,90 EUR | disponible |

## Contrat du prochain lot

1. Commencer en lecture seule.
2. Relire le Sheet `Inventaire canonique`, Shopify complet et les pages fournisseur.
3. Presenter dix produits avec EAN, stock, prix et identite prouves avant toute creation.
4. Apres validation seulement, appliquer integralement le workflow V4.
5. Creer uniquement des produits Shopify `DRAFT`.
6. Verifier handle, SEO, descriptifs, grammaire, syntaxe, orthographe, tournure, metachamps, prix, stock et les cinq images a pleine resolution.
7. Ne jamais activer ni publier automatiquement.
8. Livrer les dix liens Admin a Patrice pour verification finale.

## Sources et preuves

- Checkpoint complet : `docs/checkpoints/2026-09-01-1219-inventory-v4-ten-active-crosssell.md`.
- Sheet : `https://docs.google.com/spreadsheets/d/1QrtP77A-6FUmzOaOdD9U5CigCbrRpDWH5GTb7N1NUbM/edit`, onglet `Inventaire canonique`.
- Batch V4 : `/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation/data/catalogue-batches/2026-09-01-inventory-next-10-v4/`.

## Etat Git

Le checkout `codex/milaura-integration` reste sale avec des changements concurrents ou utilisateur hors inventaire. Ne rien reinitialiser, nettoyer, fusionner, indexer ou committer en bloc. Le handoff inventaire ne modifie que son checkpoint, ce fichier, la section inventaire de `docs/project-state.md` et la ligne inventaire de `docs/workstreams.md`.
