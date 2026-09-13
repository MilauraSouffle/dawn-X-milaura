# Bandeau des avantages MilAura en preview privee

Date : 2026-09-13 08:08 CEST

Statut : `PREVIEW PRIVEE PRETE, LIVE INCHANGE`

## Direction retenue

Le bandeau superieur ne porte plus les messages Karine, atelier ou certificats. Il presente uniquement les trois avantages panier :

1. expedition offerte en point relais des 30 euros d achat ;
2. cadeau offert des 50 euros d achat, a decouvrir dans le panier ;
3. remise de 15 pour cent appliquee automatiquement au panier des 80 euros d achat.

Les contenus Karine, atelier et rapports fournisseur sont reserves pour une future bande de reassurance placee sous le Hero. Les e-mails, le checkout et le Hero sont hors de ce lot.

## Interface

- fond quartz rose, texte prune et filet or de la charte MilAura ;
- hauteur `56 px` sur mobile et `52 px` sur bureau ;
- texte mobile renforce entre `13 px` et `14 px`, graisse `700` ;
- trois messages distincts avec rotation, balayage tactile et mouvement reduit respecte ;
- compteur `1/3`, `2/3`, `3/3` et fleche simple dans une zone tactile separee ;
- chaque message conduit vers le panier, destination de decouverte et de deblocage des avantages.

## Verification

- `python3 tools/check_copywriting.py` : PASS, 350 fichiers controles ;
- `git diff --check` : PASS ;
- `shopify theme check --fail-level error` : PASS, zero erreur et 16 avertissements historiques hors lot ;
- theme prive `200974958939` : push limite a `sections/milaura-announcement.liquid`, sans suppression ;
- pullback : fichier local et distant identiques, SHA-256 `460b2d8de0fe882204deb803093d2e4e833388d60aa96187e3d966829e7e61ff` ;
- QA navigateur : aucun debordement horizontal a `360`, `390`, `430` et `1440 px`, trois messages lisibles, hauteur stable, compteur et action accessibles ;
- theme live `190430282075` : non modifie.

## Preview

`https://milaura.fr/?preview_theme_id=200974958939&banner=advantages-20260913`

La barre noire `Draft` visible en bas appartient uniquement au mode preview Shopify.

## Gate suivante

Attendre le GO visuel explicite de Patrice. Ce checkpoint ne vaut ni integration dans le checkout principal ni publication live.
