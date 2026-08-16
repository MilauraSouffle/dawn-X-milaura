# Checkpoint - Ruban de parure V2, preview Shopify

Date : 2026-08-16 10:04 CEST

Statut : preview technique terminee sur le theme de developpement, en attente du GO visuel de Patrice. Aucune integration et aucun live.

## Perimetre et coordination

- Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/ruban-parure-v2-20260816`
- Branche : `codex/milaura-ruban-parure-v2-20260816`
- Canonique synchronise avant preview : `396502cf`
- Commit fonctionnel apres rebase : `d3a51a5f`
- Correctif d integration preview : `ca346c0d`
- Theme de developpement : `199421952347`
- Theme live : `190430282075`, non modifie par ce lot
- Le lot Sticky a ete declare integre et son theme libere par le master le 2026-08-16 a 09:32 CEST.
- Aucun fichier Sticky, dock, Hero ou experience PDP n a ete modifie.

Le registre `docs/workstreams.md` a ete actualise avec la liberation du theme, le statut de preview et les gates restants.

## Resultat produit

Le PDP ne contient plus huit produits fixes. Le Ruban :

1. demande uniquement les complements Shopify `intent=complementary` du produit courant et des lignes panier ;
2. ne cree jamais de candidat a partir de l historique, qui sert seulement de departage apres consentement ;
3. exclut le produit courant, le panier, les indisponibles et les doublons ;
4. classe au maximum cinq complements avec les scores documentes ;
5. masque toute la section quand Shopify ne renvoie aucun complement credible ;
6. conserve le scroll natif, le snap, les fleches, le clavier, le prix, la raison et l ajout direct ;
7. utilise `milaura.recommendation_cutout` quand une image validee existe, avec fallback catalogue et fallback historique temporaire.

La cible commerciale `+60 %` est definie comme une hausse relative du taux d ajout attache aux recommandations, pas comme une promesse de hausse des ventes totales.

## Push de preview cible

Neuf fichiers theme seulement ont ete pousses avec `--nodelete --strict` :

- `assets/milaura-recommendations.css`
- `assets/milaura-recommendations.js`
- `sections/milaura-recommendation-fragment.liquid`
- `sections/milaura-recommendations.liquid`
- `snippets/milaura-card-product.liquid`
- `snippets/milaura-recommendation-card.liquid`
- `snippets/milaura-recommendation-shell.liquid`
- `templates/product.json`
- `templates/product.milaura-produit.json`

Le contrat local `config/metafields/product-metafields-definition.json` et la documentation n ont pas ete pousses vers Shopify.

URL de preview :

`https://milaura.fr/products/collier-obsidienne-noire-boho-dore?preview_theme_id=199421952347&_fd=0&pb=0`

## Pullback final

Pullback cible effectue depuis le theme `199421952347` dans :

`/private/tmp/milaura-ruban-v2-final-pullback-20260816.xeLjZ7`

Resultat : 9/9 fichiers strictement identiques au worktree avec `cmp -s`.

## QA reelle

### Etat Shopify actuel

Sur le collier obsidienne controle, Shopify Search & Discovery renvoie actuellement zero complement. Le composant termine en etat `empty`, hauteur 1 px et reste masque. Ce comportement est volontaire et valide le garde-fou contre le remplissage artificiel.

Aucune matrice Search & Discovery n a ete saisie. La matrice de trois familles proposee dans la specification reste soumise a validation commerciale produit par produit par Patrice.

### QA visuelle non persistante

Pour controler l interface integree sans mutation catalogue, quatre vraies cartes publiques ont ete injectees uniquement dans la page Playwright en memoire. Aucun HTML, produit, recommandation ou reglage Shopify n a ete persiste.

Produits de preuve :

- boucles d oreilles obsidienne noire ;
- bracelet obsidienne flocon de neige ;
- bracelet dore en aigue-marine ;
- bague argent 925 et amethyste.

Largeurs controlees : 360, 390, 430, 820 et 1440 px.

Resultats :

- aucune largeur de page depassee par le Ruban ;
- cartes mobile `84vw` bornees a 360 px avec la suivante visible ;
- medias entiers en `object-fit: contain` ;
- titre et prix visibles avant le dock mobile ;
- controles 44 x 44 px ;
- raison et achat presents ;
- rail desktop fluide, quatre cartes reelles et apercu de la suite ;
- fleche Suivant, compteur, progression et scroll synchronises ;
- clavier ArrowRight valide : carte 2, `02 / 04`, progression 50 %, scroll 340 px, annonce `2 sur 4`, focus conserve sur la liste ;
- la sticky produit se retire derriere le dock pendant le Ruban, avec `pointer-events: none`, sans modification de ses fichiers.

Le conflit Sticky decouvert par Playwright a ete corrige exclusivement dans `assets/milaura-recommendations.css`. La regle locale existante `html.milaura-recommendations-in-view` pilote ce retrait.

Captures :

- mobile 390 : `/Users/paesano/.codex/visualizations/2026/08/16/01a0093b-04e1-7912-b8f0-10649451c524/ruban-parure-v2-preview-mobile-390-final-v2.png`
- desktop 1440 : `/Users/paesano/.codex/visualizations/2026/08/16/01a0093b-04e1-7912-b8f0-10649451c524/ruban-parure-v2-preview-desktop-1440-final-v2.png`

## Validations techniques

- `node --check assets/milaura-recommendations.js` : succes.
- JSON des deux templates et du contrat metafield parse apres retrait des commentaires Shopify : succes.
- `git diff --check` : succes.
- `shopify theme check` : succes, 292 fichiers inspectes, 17 avertissements historiques dans 9 fichiers hors lot, aucune alerte dans les fichiers modifies.
- Tests moteur locaux : produit courant 167, panier 110, historique 49, exclusions et absence de requetes `related` valides.
- Console preview : deux erreurs tierces seulement, iframe Shop.app en 403 et politique CSP, aucune erreur Ruban.

## Gate restant

1. Patrice donne ou refuse le GO visuel sur les captures de preview.
2. Patrice valide ensuite la matrice commerciale Search & Discovery, produit par produit.
3. L ajout panier reel reste a verifier manuellement dans une session au panier vide. Le test automatique n a pas ete execute car une remise a zero globale du panier aurait pu effacer un panier existant.
4. Le master integre uniquement apres ces decisions et une nouvelle verification du diff.
5. Aucun live sans un second GO explicite, distinct du GO visuel.

## Reprise copiable

> Reprends le Ruban de parure V2 au 2026-08-16 depuis `AGENTS.md`, `docs/workstreams.md`, `docs/superpowers/specs/2026-08-16-milaura-ruban-parure-v2.md` et `docs/checkpoints/2026-08-16-1004-ruban-parure-v2-preview.md`. Le lot est sur `codex/milaura-ruban-parure-v2-20260816`, synchronise sur le canonique `396502cf`, avec les commits `d3a51a5f` et `ca346c0d`. Le theme de developpement `199421952347` contient exactement les neuf fichiers de preview, pullback 9/9 identique. Ne modifie ni Sticky, ni dock, ni Hero, ni experience PDP. Attends le GO visuel de Patrice, puis la validation distincte de la matrice Search & Discovery. Aucun live et aucune integration directe depuis le worktree.
