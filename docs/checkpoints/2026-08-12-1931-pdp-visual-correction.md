# Checkpoint PDP, correction visuelle

Date : 2026-08-12 19:31 CEST

## Perimetre

- Branche : `codex/milaura-pdp-visual-correction-20260812`
- Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/pdp-visual-correction-20260812`
- Theme de validation : developpement `199421952347`
- Fichiers produit : `sections/milaura-product-hero.liquid`, `templates/product.milaura-produit.json`
- Live `190430282075` : non touche, en attente du GO visuel de Patrice

## Decisions retenues

1. Sur mobile, toutes les pills restent sur une seule ligne animee. Le rail tourne en boucle en 24 secondes. Si la reduction des animations est demandee par le systeme, le mouvement est remplace par un defilement horizontal manuel.
2. Les pills sont atomiques : pierre, grade, provenance quand elle existe, puis une vertu par pill. `Premium` et la formule `selon les usages traditionnels de la lithotherapie` ne sont jamais rendus.
3. Pour les bougies, les faits affiches sont `Fabrication artisanale`, `Cire vegetale`, `40 h de combustion` et `Pierre naturelle integree`, puis la pierre et l'intention.
4. Le bandeau bleu est conserve sans connexion aux commandes Shopify. Un futur metafield manuel `milaura.customer_count` pourra contenir le total multi-canal, incluant site, atelier et evenements.
5. Tant que ce total manuel est absent ou egal a zero, aucun `0 cliente` et aucun chiffre calcule ne sont affiches. Le texte de repli est `Selectionnee et controlee par Karine avant preparation a Metz.`
6. Le selecteur de quantite reprend une capsule neutre proche du panier. Le CTA utilise le prune et l'aigue-marine du branding courant, sans dore ni reflet historique.
7. L'ancien espace Scratch to Reveal reste supprime. La description et la preuve Karine occupent la colonne d'achat sur desktop.

## Controles realises

- `shopify theme check --path .` : 0 erreur, 29 avertissements historiques dans 12 fichiers hors perimetre.
- `git diff --check` : OK.
- Push cible `--only` sur le theme de developpement : reussi.
- Pullback cible apres le dernier push : fichier distant identique bit a bit au fichier Git.
- SHA-256 local et distant de `sections/milaura-product-hero.liquid` : `f0f584766c2778b54c7297b9128a6dbdd333e30c2ffe127dece9dbd5b50b7d4e`.
- Mobile 390 x 844 : un H1, aucun debordement horizontal, rail `milauraPillsRail` actif sur 24 s, pills sur 28 px de haut, selecteur 104 x 52 px, CTA 52 px, aucun Scratch visible.
- Bague : `Aigue-Marine`, `AA (Tres elevee)`, `Serenite`, `Clarte`, `Expression`.
- Bracelet : `Oeil de tigre`, `Grade A`, `Ancrage`, `Clarte`, `Confiance`, `Stabilite Interieure`.
- Bougie : `Fabrication artisanale`, `Cire vegetale`, `40 h de combustion`, `Pierre naturelle integree`, `Amethyste`, `Serenite`.
- Desktop 1440 x 1000 : grille `social social / gallery rightcol`, bandeau pleine largeur, galerie et colonne achat sans debordement, description et preuve Karine visibles, aucun Scratch.

## Etat Git

- Commits du lot : `f7462507`, `ebe63c8e`, `031618f0`, `a3fb30c2`, `61e35217`.
- Branche poussee sur `origin`.
- Le checkpoint doit etre le dernier commit documentaire du lot.

## Prochaine action

Patrice controle visuellement les trois previews du theme de developpement. Apres son GO explicite, le proprietaire d'integration integre la branche puis pousse strictement les six fichiers PDP-P0 listes dans `docs/checkpoints/2026-08-12-1746-three-lots-reconciliation-pdp.md`. Les deux fichiers modifies par ce lot visuel en font partie.
