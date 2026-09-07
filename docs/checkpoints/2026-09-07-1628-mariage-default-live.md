# Guide mariage : ouvrir sur une sélection disponible

Date : 2026-09-07 16:28 CEST.
Propriétaire : Codex, tâche Meta Ads `01a07a97-4d8f-7900-b84c-143b65439202`.

Patrice demande de corriger l'ouverture du guide mariage si une autre session ne l'a pas déjà fait. Lecture de la tâche SEO et de la page publique : le guide ouvre toujours sur les noces d'argent sans produit ; le lot SEO concerne la bague Aigue-marine.

## Changement publié

Dans `templates/page.milaura-cadeaux-mariage.json` uniquement :

- `sections.hub.blocks.year17.settings.is_default` : false vers true.
- `sections.hub.blocks.year25.settings.is_default` : true vers false.

Le premier onglet affiché devient « 17 ans, noces de rose », avec onze produits disponibles lors de la vérification. Les autres onglets, références, textes, images, règles de disponibilité, prix et stocks ne changent pas.

## Vérification

- Source live récupérée avant édition et identique au fichier du worktree.
- Diff sémantique limité aux deux booléens ; `git diff --check` valide.
- Theme Check : zéro erreur et seize avertissements.
- Push du seul fichier vers `190430282075`, avec `--only`, `--nodelete`, `--allow-live`, `--strict`.
- Pullback identique octet par octet. SHA-256 : `3200fa98d6b290aa06ff62c46913277e665bf49f2e075731fd49ab8d336fc08a`.
- Rechargement public : onglet « 17 ANS » sélectionné, titre « Noces de rose », onze liens produit uniques et onze boutons d'ajout actifs.
- Aucun achat, changement de panier, produit ou publicité.

## État Git et suite

Branche dédiée `codex/milaura-mariage-default-20260907`, base `0f23d275`. Le registre central préexistait modifié ; seuls les paragraphes de ce lot y sont ajoutés et actualisés. Les modifications préexistantes du checkout d'intégration sont conservées.

Le lot source est à rapprocher par le propriétaire d'intégration ; ne pas republier une ancienne version du modèle qui rétablirait 25 ans par défaut. Le choix par défaut est éditorial et fixe, pas un nouvel algorithme automatique de repli selon le stock. Les autres onglets restent à enrichir dans leurs sessions respectives.
