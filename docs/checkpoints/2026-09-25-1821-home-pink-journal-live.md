# Fond rose Cadeaux et bandeau Journal Home en production

Date : 2026-09-25 18:21 CEST

## Statut

`FERME, POUSSE ET LIVE VERIFIE`

Patrice a valide la direction du bandeau Journal et demande l application immediate du fond rose sur la section Naissance et Mariage.

## Perimetre

- `assets/milaura-home-occasions.css`
- `assets/milaura-home-editorial.css`
- `sections/milaura-home-editorial.liquid`
- reglages `home_editorial` de `templates/index.json`
- documentation du lot

Aucun produit, prix, stock, collection, Shopify Admin, Ads ou contenu de la page Notre histoire n a ete modifie.

## Git

- Branche : `codex/milaura-integration`
- Commit fonctionnel : `8f1e0734`
- Commit pousse sur `origin/codex/milaura-integration`
- Les modifications et fichiers non suivis concurrents du checkout ont ete preserves.

## Publication Shopify

- Theme public : `190430282075`
- Push cible avec `--allow-live --nodelete --strict`
- Fichiers publies : les quatre fichiers de theme du perimetre
- La base live avant publication etait identique a `HEAD` pour les quatre fichiers cibles.
- Le premier push a enregistre le nouveau schema de section mais Shopify a ignore le nouveau reglage `lead` du template pendant ce meme lot.
- Un second push cible de `templates/index.json`, effectue apres enregistrement du schema, a restaure la description validee.
- Pullback final : egalite stricte `4/4` avec la source locale.
- Snapshot avant : `/private/tmp/milaura-home-journal-live-before.VKYwGp`
- Pullback final : `/private/tmp/milaura-home-journal-live-after.QwmJc7`

## Verification

- `git diff --check` : PASS
- Contrat CSS : PASS
- Theme Check : aucune erreur, seize avertissements historiques hors lot
- Desktop `1440 x 900` : section Cadeaux sur fond quartz rose, cartes blanches, bandeau Journal de `370px`, CTA principal et lien secondaire distincts, aucun debordement horizontal
- Mobile `390 x 844` : section Cadeaux de `759px`, rail tactile conserve, bandeau Journal de `554px`, texte et deux actions visibles, aucun debordement horizontal
- Couleur publique mesuree pour la section Cadeaux : `rgb(240, 217, 224)`, soit le token `--milaura-quartz-rose-poudre`
- Destinations conservees : `/blogs/journal` et `/pages/notre-histoire`

## Suite

La prochaine passe validee concerne la refonte complete de la page `/pages/notre-histoire`. Elle reste volontairement hors de ce lot.
