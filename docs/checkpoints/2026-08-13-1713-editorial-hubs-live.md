# Hubs editoriaux MilAura, livraison live

Date : 2026-08-13 17:13 CEST

## Decision

Patrice a donne son GO visuel puis son autorisation explicite de commit, push et deploiement live le 2026-08-13.

## Git

- Branche de lot : `codex/milaura-editorial-hubs-20260813`.
- Branche canonique : `codex/milaura-integration`.
- Integration : fast-forward de `995b4bfc` vers `6522d42f`, sans conflit.
- GitHub : `origin/codex/milaura-integration` pousse jusqu'a `6522d42f` avant la documentation de fermeture.
- Le checkout principal Claude et ses fichiers reserves n'ont pas ete modifies par l'integration.

## Deploiement Shopify

Theme live : `dawn-X-milaura/main`, ID `190430282075`.

Fichiers deployes exclusivement :

- `assets/milaura-catalogue-hub.css`
- `assets/milaura-catalogue-hub.js`
- `sections/milaura-catalogue-hub.liquid`
- `templates/page.milaura-cadeaux-mariage.json`
- `templates/page.milaura-pierres-naissance.json`
- `templates/page.milaura-bijoux-pierre.json`

Commande cible avec `--nodelete --strict --allow-live`. Aucun autre fichier de theme n'a ete pousse. Aucune mutation de produit, stock, prix, metafield, page Admin ou menu.

## Preuves

- Push live : succes.
- Pullback frais du theme live : 6 fichiers sur 6 identiques bit a bit a la branche d'integration.
- Theme Check avant livraison : 0 erreur, 29 avertissements historiques hors perimetre.

Desktop 1440 x 1000, routes publiques sans parametre d'apercu :

| Route | H1 | Main | Main imbrique | Debordement | Contenu |
| --- | ---: | ---: | ---: | --- | --- |
| `/pages/cadeaux-anniversaire-de-mariage` | 1 | 1 | 0 | non | 3 produits, 1 panneau actif |
| `/pages/pierres-de-naissance` | 1 | 1 | 0 | non | 4 produits, 1 panneau actif |
| `/pages/bijoux-par-pierre` | 1 | 1 | 0 | non | 5 destinations, 8 images |

Mobile 390 x 844 :

- un H1 par page ;
- aucun `main` imbrique ;
- aucun debordement horizontal ;
- deux cartes produit par ligne sur Mariage et Naissance ;
- rail tactile actif sur Bijoux par pierre ;
- `48 ans` affiche uniquement `Noces d'amethyste` ;
- `Mars` affiche uniquement `Aigue-marine` et le lien `/collections/par-pierre-aigue-marine`.

## Incident de developpement conserve dans l'historique

Une autre operation avait ecrase les six fichiers sur le theme de developpement pendant la validation. La branche Git n'a jamais ete affectee. Le lot a ete restaure par push cible puis pullback 6/6 avant le GO. Cet incident confirme que les reservations de theme dans `docs/workstreams.md` doivent etre respectees autant que les reservations de fichiers.

## Etat final attendu apres fermeture

- `codex/milaura-integration` propre et pousse ;
- branche et worktree Codex du lot retires ;
- branche Claude du Hero preservee et documentee comme chantier independant ;
- live conforme aux six fichiers integres.
