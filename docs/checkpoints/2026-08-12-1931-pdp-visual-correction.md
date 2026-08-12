# Checkpoint PDP, correction visuelle

Date : 2026-08-12 20:00 CEST

## Perimetre

- Branche : `codex/milaura-pdp-visual-correction-20260812`
- Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/pdp-visual-correction-20260812`
- Theme de validation : developpement `199421952347`
- Fichiers produit : `sections/milaura-product-hero.liquid`, `templates/product.milaura-produit.json`
- Live `190430282075` : livre apres GO visuel explicite de Patrice

## Decisions retenues

1. Sur mobile, toutes les pills restent sur une seule ligne animee. Le rail tourne en boucle en 24 secondes. Si la reduction des animations est demandee par le systeme, le mouvement est remplace par un defilement horizontal manuel.
2. Les pills sont atomiques : pierre, grade, provenance quand elle existe, puis une vertu par pill. `Premium` et la formule `selon les usages traditionnels de la lithotherapie` ne sont jamais rendus.
3. Pour les bougies, les faits affiches sont `Fabrication artisanale`, `Cire vegetale`, `40 h de combustion` et `Pierre naturelle integree`, puis la pierre et l'intention.
4. Patrice a demande le 2026-08-12 la restauration de la bulle sociale historique. Elle n'est connectee a aucune commande Shopify et represente le volume multi-canal communique par MilAura, incluant site, atelier et evenements.
5. Le nombre est stable pour chaque produit et calcule depuis `product.id` entre 12 et 141. Le message restaure est `Ce produit a deja fait le bonheur de + de X client(e)s en mois annee`.
6. La bulle mesure environ 41 px sur mobile et 42 px sur desktop, avec cinq etoiles dorees et aucun pictogramme diamant. Le message utilise Lato ; seul le mot `bonheur` reste en Dancing Script.
7. Le selecteur de quantite reprend une capsule neutre proche du panier. Le CTA utilise le prune et l'aigue-marine du branding courant, sans dore ni reflet historique.
8. L'ancien espace Scratch to Reveal reste supprime. La description et la preuve Karine occupent la colonne d'achat sur desktop.

## Controles realises

- `shopify theme check --path .` : 0 erreur, 29 avertissements historiques dans 12 fichiers hors perimetre.
- `git diff --check` : OK.
- Push cible `--only` sur le theme de developpement : reussi.
- Pullback cible apres le dernier push : fichier distant identique bit a bit au fichier Git.
- SHA-256 local, developpement et live de `sections/milaura-product-hero.liquid` : `f0515bafd8b4ac51877daf48e8e8cb15995060861516df198e922a81769ac009`.
- SHA-256 local et distant de `templates/product.milaura-produit.json` : `eba321ff25ec78f33445d2dc204d7ecec2ae58f8173b1756754dc119c128a866`.
- Mobile 390 x 844 : un H1, aucun debordement horizontal, rail `milauraPillsRail` actif sur 24 s, pills sur 28 px de haut, selecteur 104 x 52 px, CTA 52 px, aucun Scratch visible.
- Bulle sociale mobile : 272 x 41 px, rayon 999 px, cinq etoiles dorees, Lato 10.56 px pour le message et Dancing Script 12.672 px uniquement sur `bonheur`, aucun diamant.
- Compteurs publics verifies sur trois produits : bague 37, bracelet 113, bougie 49. Les trois valeurs sont dans la plage 12 a 141 et differentes entre produits.
- Bague : `Aigue-Marine`, `AA (Tres elevee)`, `Serenite`, `Clarte`, `Expression`.
- Bracelet : `Oeil de tigre`, `Grade A`, `Ancrage`, `Clarte`, `Confiance`, `Stabilite Interieure`.
- Bougie : `Fabrication artisanale`, `Cire vegetale`, `40 h de combustion`, `Pierre naturelle integree`, `Amethyste`, `Serenite`.
- Desktop 1440 x 1000 sur le theme de developpement, identique au live par pullback : grille `social social / gallery rightcol`, bulle sociale centree 431 x 42 px, galerie et colonne achat sans debordement, description et preuve Karine visibles, aucun Scratch.
- Push live strict des six fichiers PDP-P0 autorises : reussi avec `--only`, `--nodelete`, `--strict` et `--allow-live`.
- Pullback live : les six fichiers sont identiques bit a bit a Git.
- Test public mobile : un H1, aucun debordement, aucun Scratch, cinq etoiles, aucun diamant et accent Dancing Script limite a `bonheur` sur la bague, le bracelet et la bougie.
- Test achat public : selecteur 1 vers 2 puis retour a 1, ajout de la bougie au panier, drawer ouvert, puis retrait de l'article de test.

## Etat Git

- Commits du lot source : `f7462507`, `ebe63c8e`, `031618f0`, `a3fb30c2`, `61e35217`, `59452b3e`, `f0582bb4`.
- Integration finale du code : `882c474b`.
- Miroir Shopify automatique : `74553fd3`, rattache a l'integration par `75ae911f` sans modification de l'arbre audite.
- Branche poussee sur `origin`.
- La branche temporaire et le worktree du lot sont fermes apres la livraison.

## Prochaine action

Ouvrir un nouveau worktree declare pour le bandeau mobile 56 px et le Hero immersif avec media reel, puis soumettre une proposition mobile et desktop avant tout push live.
