# Ruban Vivant, polish couleur et interaction mobile

Date : 2026-08-15 19:42 CEST

## Perimetre

- Branche : `codex/milaura-ruban-polish-20260815`
- Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/ruban-polish-20260815`
- Theme Shopify : developpement `199421952347`
- Live `190430282075` : inchange
- Fichiers fonctionnels : `assets/milaura-recommendations.css`, `assets/milaura-recommendations.js`
- Hors perimetre preserves : assets produits, templates, Hero, sticky, dock, panier, drawer, PDP et contenu public

## Diagnostic confirme

- Les huit PNG detoures sont nets, transparents et suffisamment dimensionnes, de 704 x 942 px a 1533 x 898 px selon la piece.
- La perte de couleur venait principalement de `opacity: 0.68` appliquee a toutes les cartes non actives sur un fond presque blanc.
- L'ancien mobile mettait le ruban en pause sur `pointerover` et `pointerdown`, puis le relancait seulement 1,2 seconde apres `pointerup`. Le premier tap sur l'image etait en plus un lien direct vers le produit.

## Correction

- Suppression du voile d'opacite sur les pieces.
- Rehausse moderee et uniforme des detourages : saturation `1.2`, contraste `1.12`, luminosite `0.97` et ombre de la charte.
- Halo mineral discret par emplacement, uniquement avec les tokens MilAura existants.
- Mobile : defilement continu, aucune commande de pause visible et aucun arret lie au simple toucher du ruban.
- Premier tap sur une piece : navigation annulee, piece centree, fiche d'information affichee et ruban mis en pause.
- Second tap sur cette meme piece : entree normale sur la fiche produit.
- Sans second tap, fermeture de la selection et reprise automatique apres 6 secondes.
- La carte selectionnee est replacee dans la zone visible entre la navigation et les composants fixes existants.
- Desktop : comportement historique preserve, avec defilement, survol et bouton manuel de pause.
- Preference systeme `prefers-reduced-motion` preservee.

## Validation

- `node --check assets/milaura-recommendations.js` : OK.
- `git diff --check` : OK.
- `shopify theme push --strict --nodelete` cible sur les deux assets : succes.
- Theme Check du push strict : 0 erreur, 17 avertissements historiques dans 9 fichiers hors perimetre.
- Pullback du theme de developpement : CSS 1/1 et JS 1/1 identiques par octets.
- Browser QA : 360 x 800, 390 x 844, 430 x 900 et 1440 x 900.
- Mobile : mouvement continu confirme, premier tap sans navigation confirme, pause stable confirmee, carte et achat visibles, reprise automatique a 6 secondes confirmee, second tap vers la fiche confirme.
- Desktop : mouvement continu confirme, carte active conservee et bouton pause/reprise confirme.

## Validation visuelle demandee

Preview : `https://milaura-2.myshopify.com/products/collier-obsidienne-noire-boho-dore?preview_theme_id=199421952347`

Le lot est pret pour le GO visuel de Patrice. Aucun push live ne doit etre fait sans un nouveau GO explicite.
