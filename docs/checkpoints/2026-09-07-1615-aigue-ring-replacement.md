# Remplacement bague aigue-marine, 2026-09-07 16:15 Europe/Paris

## Autorisation et perimetre

Patrice confirme que les deux fiches correspondent a la meme bague et demande le remplacement public immediat et la suppression du doublon. Le programme SEO general reste en attente de GO.

Branche : `codex/milaura-aigue-ring-replacement-20260907`.
Worktree : `/Users/paesano/.codex/worktrees/d25d/dawn-X-milaura`.

## Execute

- Ancien produit `10488132108635`, stock zero, retire du public par passage en brouillon. Suppression definitive non executee : confirmation navigateur demandee et encore sans reponse.
- Nouvelle fiche conservee : `10680525357403`, `/products/bague-en-argent-925-et-aigue-marine-du-bresil`, prix public 69,90 EUR et ajout au panier actif observe. Aucun changement de stock ni de panier.
- Redirection Shopify `1019368767835` creee depuis `/products/bague-argent-925-modele-01-aigue-marine-bresil-aa-1-piece-lo` vers la nouvelle fiche. Ancienne URL testee : destination nouvelle fiche, HTTP 200 apres suivi.
- Cinq references produit remplacees dans `templates/index.json`, `templates/collection.milaura-pierre-aigue-marine.json` et `templates/collection.milaura-campaign-aigue.json`. Aucun autre texte modifie.
- Trois fichiers pousses explicitement sur le theme live `190430282075` avec `--nodelete --allow-live --strict`. Lecture distante avant push identique aux originaux locaux ; pullback apres push identique aux trois fichiers modifies.

## Verification et limites

- Theme Check : zero erreur, 16 avertissements existants ; git diff --check valide.
- Collection `/collections/par-pierre-aigue-marine` : HTTP 200 sans parametre view, canonique identique, produit star et CTA vers la nouvelle fiche a 69,90 EUR.
- Admin ancien produit : Brouillon enregistre, bouton Enregistrer desactive.
- Aucun achat effectue. Aucun merge dans le checkout principal, dont les modifications concurrentes sont preservees.
- Les copies distantes temporaires restent hors Git : `/private/tmp/milaura-ring-replacement-20260907` et `/private/tmp/milaura-ring-pullback-20260907`.
- Reste : confirmation avant effacement definitif du seul ancien produit, puis integration des fichiers par le proprietaire du checkout principal pour eviter un retour de l ancienne reference lors d un futur deploy.
