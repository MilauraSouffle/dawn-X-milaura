# Home MilAura, candidate joint mineral

Date : 2026-09-02 09:14 CEST

## Perimetre et autorite

- GO de Patrice : `GO JOINT MINERAL HOME`.
- Lot limite a la Home, aux raccords inter-sections et au nettoyage du code directement associe.
- Textes, titres, CTA, PDP, collections, produits, Admin, Ads, integration et live exclus.
- Patrice conserve les GO visuel, integration et live.

## Implementation

- Ancien separateur global retire de `layout/theme.liquid`, CSS et JavaScript inline compris.
- Espacement global historique de 12 px desactive uniquement sur la Home.
- Bordures hautes et basses visibles retirees des sections Home concernees.
- Un composant explicite `milaura-home-transition` remplace les effets automatiques lies au type de wrapper Shopify.
- Cinq raccords sont rendus aux changements editoriaux utiles, avec surface Nacre ou Minerale selon la section suivante.
- Animation en `transform`, executee une seule fois ; affichage immediat sans mouvement si `prefers-reduced-motion` est actif.
- Hauteur mobile du hero Aigue-marine resserree et espace sous son CTA ramene a 86 px pour supprimer le grand vide avant les best-sellers.
- Bilan du code du theme : 20 lignes ajoutees et 149 supprimees dans les fichiers existants, 117 lignes dans les trois nouveaux composants, soit 12 lignes de code en moins au total.

## Publication privee

- Theme cible : `MilAura Sodalite Rentree Preview 2026-08-21`, ID `200259043675`.
- Push strict et cible de 16 fichiers avec `--nodelete`.
- Pullback apres push : 16 fichiers sur 16 identiques au worktree.
- Theme live `190430282075` non touche.

Preview : https://milaura-2.myshopify.com?preview_theme_id=200259043675

## Verifications

- `git diff --check` : PASS.
- `node --check assets/milaura-home-transitions.js` : PASS.
- `shopify theme check` : 0 erreur, 16 warnings historiques dans huit fichiers hors lot.
- Navigateur reel : 360 x 800, 390 x 844, 430 x 932 et 1440 x 1000.
- Aucun debordement horizontal sur les quatre tailles.
- Sept sections controlees : aucune bordure haute ou basse calculee.
- Cinq raccords presents : 18 px sur mobile, 28 px sur desktop.
- `prefers-reduced-motion` : cinq raccords visibles, transformation finale et duree `0s`.
- Console : aucune erreur JavaScript ; seul message informatif Shopify sur le hot reload absent en preview.

## Etat et prochaine porte

Candidate privee prete. Patrice a valide le polish 1 visuellement le 2026-09-02 a 09:23 CEST. Aucun merge, aucune integration et aucune publication live sans les GO correspondants.
