# Refonte Notre histoire live

Date : 2026-09-25 18:56 CEST

## Resultat

La route publique `https://milaura.fr/pages/notre-histoire` utilise maintenant une page editoriale complete centree sur le regard de Karine et sur les produits MilAura.

- Hero : bijoux au premier plan, Karine comme repere humain, double entree vers sa selection et les bijoux.
- Recit : origine de la boutique en deux paragraphes courts.
- Methode : beaute, purete des lignes et impression degagee par la piece.
- Catalogue : trois cartes vers Bijoux, Mineraux et Bien-etre.
- Conclusion : diagnostic MilAura en action principale, Journal en lien secondaire.
- Anciennes affirmations non documentees retirees : certification globale, gemmologue, tracabilite, fabrication et composition des bougies.

## Fichiers publies

- `assets/milaura-notre-histoire.css`
- `assets/milaura-home-paths-jewelry-v3.webp`
- `sections/milaura-notre-histoire.liquid`
- `templates/page.milaura-notre-histoire.json`

## Git et Shopify

- Branche : `codex/milaura-integration`
- Commit fonctionnel : `0e7ef73c`
- Push Git : confirme sur `origin/codex/milaura-integration`
- Theme public : `190430282075`
- Deploiement : poussees ciblees avec `--nodelete --strict`, section et CSS avant le template.

## Verification

- `git diff --check` : PASS.
- `python3 tests/css_contract_test.py` : PASS.
- `shopify theme check` : PASS pour le lot, 16 avertissements preexistants dans 8 autres fichiers.
- Revue de finition independante : deux ecarts de contraste identifies puis corriges avant publication.
- QA preview puis publique : 1440 x 900 et 390 x 844.
- QA publique : un seul H1, aucune erreur Liquid, aucun debordement horizontal, hero et images charges, huit destinations internes correctes.
- Pullback public : CSS et section identiques octet pour octet. Template identique apres retrait du commentaire auto-genere ajoute par Shopify.

## Risque residuel

Les deux visuels statiques du hero sont charges en haute priorite depuis les assets du theme. Le rendu mobile est valide, mais leur impact LCP devra etre mesure lors d une passe performance dediee avant toute recompression d assets partages avec la Home.

Les fichiers sales et non suivis hors de ce perimetre ont ete preserves.
