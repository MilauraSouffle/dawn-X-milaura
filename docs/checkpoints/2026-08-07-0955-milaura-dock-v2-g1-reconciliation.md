# Checkpoint MilAura - dock V2 et reconciliation G1

Date : 2026-08-07 09:55 CEST

Projet : MilAura Shopify

Theme live : `dawn-X-milaura/main`, ID `190430282075`

## Resultat

Le hero est termine et valide par Patrice. Le dock mobile V2 et le nouveau prune d'action des CTA ont ete commites, pousses sur une branche sure et deployes sur le theme live. Le pullback cible est strictement identique au local approuve. La validation publique confirme le rendu mobile et l'absence du dock sur desktop.

La reconciliation G1 a produit un worktree propre separe, base sur le dernier miroir Shopify/GitHub. L'ancien checkout sale reste intact. Aucun reset, clean, merge global ou archivage n'a ete effectue.

## Dock V2

- commits : `0567fff1 chore: record approved live homepage baseline` et `252f31b5 feat: polish mobile dock and prune ctas` ;
- branche poussee : `codex/milaura-mobile-dock-2026-08-07` ;
- fichiers deployes :
  - `sections/milaura-dock.liquid` ;
  - `sections/milaura-navbar.liquid` ;
  - `sections/milaura-hero-portal.liquid` ;
  - `sections/milaura-featured-products.liquid` ;
- asset verifie : `assets/milaura-dock-gem-line-v1.webp` ;
- mobile 390 px : gemmes sous les boutons et coupe inferieure visible ;
- Menu, Recherche et Panier fonctionnels ;
- desktop 1440 px : dock masque ;
- CTA Hero et `Trouver ma pierre` : degrade `#52394D` vers `#493246` ;
- Theme Check : 0 erreur, 29 avertissements historiques.

## Verite Git au debut de G1

- vieux checkout : branche `main`, HEAD `252f31b5` ;
- divergence apres fetch : 29 commits devant, 338 derriere `origin/main` ;
- merge base : `b57d11c634ac8db917157c8ed5039e9bd420182f` ;
- 75 fichiers suivis modifies ;
- 1 fichier suivi supprime ;
- 177 fichiers non suivis ;
- dernier miroir Shopify : `b55b7494` ;
- le commit miroir `b55b7494` reprend exactement les quatre fichiers du dock V2.

Conclusion : `origin/main` est un miroir automatique Shopify. Ce n'est pas une branche humaine de developpement et il ne faut pas la fusionner globalement dans l'ancien `main`.

## Comparaison du theme live

- 484 fichiers live ;
- 402 fichiers strictement identiques au vieux checkout ;
- aucun fichier live absent du vieux checkout ;
- 61 differences de serialisation automatique Shopify : 51 fichiers de langue et 10 templates systeme ;
- 21 ecarts local/live a conserver et reprendre par lots fonctionnels ;
- 17 fichiers locaux de theme ou de metadonnees absents du live ;
- 29 assets binaires live absents du miroir GitHub.

Les 21 ecarts a ne pas recopier globalement concernent notamment les reglages, le panier, la page produit, le popup newsletter, la homepage, le footer, la recherche et quelques templates. Le live reste la base de comportement. Les versions locales sont conservees dans l'ancien checkout pour examen lors de leur lot.

## Nouvelle base propre

- worktree : `/Users/paesano/Documents/MilAura website/dawn-X-milaura-reconcile-2026-08-07` ;
- branche : `codex/milaura-reconcile-2026-08-07` ;
- base : `origin/main` au commit `b55b7494` ;
- tout le code Liquid, JSON, CSS et JavaScript live est present ;
- 20 assets publics actuellement references ont ete recopies depuis le snapshot live ;
- 9 fichiers JSON de metadonnees Git, absents du live car non deployables, sont conserves.

Les 20 assets actifs representent environ 2,06 Mo. Ils comprennent les polices, la ligne de gemmes, les images du hero, les visuels de l'explorateur de benefices et les visuels Aigue-marine encore references.

## Assets live non references, non recopies

Ces neuf anciens prototypes restent sur Shopify. Ils ne sont ni supprimes ni ajoutes a la base propre :

- `milaura-hero-aigue-marine-chloe-desktop-v4.png` ;
- `milaura-hero-aigue-marine-chloe-desktop-v5-clean.png` ;
- `milaura-hero-aigue-marine-chloe-mobile-v1.webp` ;
- `milaura-hero-aigue-marine-chloe-mobile-v2.png` ;
- `milaura-hero-aigue-marine-chloe-mobile-v3.png` ;
- `milaura-hero-aigue-marine-chloe-mobile-v4.png` ;
- `milaura-hero-aigue-marine-chloe-mobile-v5-clean.png` ;
- `milaura-hero-aigue-marine-chloe-v1.webp` ;
- `milaura-hero-triptych-prototype-v2.webp`.

Poids total approximatif : 11,9 Mo.

## Reste a faire pour terminer G1

1. Copier dans le worktree propre les seuls documents de contexte actifs et `AGENTS.md`.
2. Executer Theme Check et `git diff --check` dans le worktree propre.
3. Presenter le contenu exact du commit baseline a Patrice.
4. Apres accord distinct, committer et pousser `codex/milaura-reconcile-2026-08-07`.
5. Utiliser ce worktree pour les nouveaux lots.
6. Conserver l'ancien checkout sans nettoyage jusqu'a inventaire ou archivage explicite de chaque lot prive.

## Prochaine etape produit apres G1

Lot `P0A` : calculer l'economie des paliers panier, verifier les cumuls Shopify et auditer le reliquat Scratch de `/cart` avant de construire la Selection de l'atelier.
