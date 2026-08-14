# Handover technique MilAura

> Etat actualise le 2026-08-14. Ce document remplace la passation obsolete du 2026-01-26.

## Sources de verite

- Regles du depot : `AGENTS.md`
- Etat courant : `docs/project-state.md`
- Reprise Codex : `docs/codex-handoff.md`
- Sessions et proprietaires : `docs/workstreams.md`
- Direction artistique : `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md`
- Copywriting : `docs/reference/2026-08-12-copywriting-milaura.md`
- Tokens UI : `assets/milaura-tokens.css`

La direction Playfair Display, Lato, glassmorphism et or `#C0A062` est obsolete. Elle ne doit pas etre reintroduite.

## Theme et securite de travail

Le theme est base sur Dawn 15.4.0. Toute session parallele utilise un worktree, une branche `codex/*` et une ligne reservee dans `docs/workstreams.md`. Le checkout principal sert a l'integration. Seul son proprietaire peut merger et deployer sur le theme live.

Avant toute modification :

1. Lire `AGENTS.md` et les documents de reprise.
2. Verifier `git status --short --branch -uall` et `git worktree list --porcelain`.
3. Identifier les fichiers et le theme Shopify reserves par les autres sessions.
4. Valider avec `shopify theme check`, des controles navigateur mobile et desktop, puis un pullback cible.

## Architecture UI actuelle

- `assets/milaura-tokens.css` contient toutes les couleurs, polices, tailles et geometries de marque.
- `assets/milaura-card.css` porte la carte produit partagee.
- `assets/milaura-actions.css` porte les controles d'achat et CTA partages.
- `assets/milaura-recommendations.css` porte les compositions editoriales et le rail mobile de recommandation.
- `assets/milaura-recommendations.js` porte le chargement, le dedoublonnage, le consentement, les interactions et la mesure des recommandations.
- `snippets/milaura-card-product.liquid` rend le media et les informations produit.
- `snippets/milaura-editorial-purchase.liquid` rend le controle d'achat compact.
- `snippets/milaura-recommendation-card.liquid` compose une carte de recommandation.
- `snippets/milaura-recommendation-shell.liquid` fournit la seule coquille semantique de recommandation.
- `sections/milaura-recommendations.liquid` configure les contextes PDP, panier, recent et editorial.

## Systeme de recommandation

Le systeme unique remplace les anciens moteurs PDP, panier, diagnostic et compte. Les familles actives sont :

- PDP : produits complementaires Shopify, puis alternatives Shopify si le minimum n'est pas atteint.
- Panier et tiroir : complements uniquement, sans produit deja present ni doublon.
- Diagnostic : produits explicitement associes au profil dans `sections/milaura-quiz.liquid`.
- Compte : produits explicitement associes au profil dans `sections/milaura-dashboard.liquid`.
- Consulte recemment : identifiants et handles stockes uniquement si le traitement des preferences est autorise, puis donnees produit resolues a nouveau par Shopify.
- Editorial : selections produit configurees dans les hubs de destination.

Les donnees de prix, disponibilite et variante ne sont pas persistees. Les cartes dynamiques sont rerendues depuis Shopify. Une video produit reelle peut occuper la carte focale ; elle ne joue qu'au survol ou au focus et reste arretee si la reduction des animations est demandee.

Les anciens fichiers et leurs styles ont ete supprimes du code actif. Leur derniere version reste accessible dans l'historique Git et dans la branche de preservation creee avant la refonte.

## Contrats a ne pas casser

- Aucun fond blanc ajoute aux cartes.
- Aucun gros bouton prune generique.
- Photo prioritaire, cadre aigue-marine fin, informations compactes.
- CTA et achat soulignes, cibles tactiles de 44 px minimum.
- Focus visible, clavier, etats loading et disabled, panier Ajax preserves.
- Pas de recommandation generique de bestseller pour masquer une absence de pertinence.
- L'historique recent et la reutilisation du diagnostic dans les recommandations respectent le consentement de preferences.
- Aucun deployement live sans GO visuel explicite de Patrice.

## Validation minimale

```sh
node --check assets/milaura-recommendations.js
git diff --check
shopify theme check
```

Completer par une verification navigateur sur PDP, page panier, tiroir, diagnostic, compte accessible et pages editoriales, en desktop et en mobile.
