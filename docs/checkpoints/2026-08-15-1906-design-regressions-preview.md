# Correctifs design cibles prets en preview

Date : 2026-08-15 19:06 CEST

## Perimetre confirme

Les cinq regressions transmises par Patrice ont ete corrigees sans modification des produits, templates PDP, logique metier des recommandations, panier, drawer ou contenus publics.

1. Le Hero mobile ne decale plus sa photographie de 70 px. Sa hauteur est reduite de la meme valeur et la section suivante commence exactement a sa fin.
2. Le dock mobile existant est reactive. La sticky PDP est completement hors ecran au repos puis se place a 8 px au-dessus du dock quand elle devient utile.
3. Le dock ouvre de nouveau le menu apres Navigation V2. Le panneau mobile retrouve l'ecrin prune, les accents aigue-marine et or, et s'arrete au-dessus du dock.
4. La navbar des pages hors Home est full width, transparente avec un fond Nacre a 16 % et un blur de 12 px. Le comportement specifique du Hero de la Home reste intact.
5. La marge globale de 32 px appliquee a chaque section desktop est supprimee. Les fonds sont full width et les conteneurs internes conservent leurs propres marges de lecture.

## Fichiers modifies

- `assets/milaura-navigation.css`
- `assets/milaura-navigation.js`
- `assets/milaura-recommendations.css`
- `assets/milaura.css`
- `sections/footer-group.json`
- `sections/milaura-dock.liquid`
- `sections/milaura-hero-portal.liquid`
- `sections/milaura-sticky-bar.liquid`
- `docs/workstreams.md`
- `docs/checkpoints/2026-08-15-1906-design-regressions-preview.md`

## Theme Shopify

- Theme de developpement : `199421952347`
- Preview : `https://milaura-2.myshopify.com/?preview_theme_id=199421952347`
- Theme live `190430282075` : inchange
- Dependances deja presentes dans le depot mais absentes ou obsoletes sur le theme de developpement synchronisees pour une preview fidele : `sections/milaura-navbar.liquid`, `sections/milaura-footer.liquid`, `snippets/milaura-nav-curated-links.liquid`.

## Validations

- `git diff --check` : OK.
- `shopify theme check` : 292 fichiers inspectes, aucune erreur, 17 avertissements historiques dans 9 fichiers hors perimetre.
- Pullback du theme de developpement : 9 fichiers sur 9 identiques octet pour octet aux sources locales attendues.
- Mobile 430 px : Hero, image et section suivante jointifs ; dock de 70 px present ; aucun debordement horizontal sur Home et collection.
- Mobile 390 px : sticky PDP hors ecran au repos, visible a 8 px au-dessus du dock apres scroll.
- Mobile 360 px : dock et navbar a la largeur exacte du viewport ; menu ouvrable, refermable et jointif au dock ; aucun debordement horizontal sur Home.
- Desktop 1440 px : navbar et toutes les sections principales mesurent 1440 px avec `padding-left` et `padding-right` a 0 sur leurs enveloppes de fond.
- Collection et PDP controlees hors Home : navbar a fond Nacre 16 % avec blur 12 px.

## Complement valide le 2026-08-15 a 19:18 CEST

- La navbar mobile ne montre plus le burger, la recherche et le panier deja presents dans le dock. Elle conserve le logo flottant a gauche et `Trouver ma pierre` a droite.
- Le burger reste present hors affichage pour que le bouton `Menu` du dock continue a piloter le panneau.
- La barre haute est masquee pendant l'ouverture du panneau mobile. Le masquage complet pendant l'ouverture du panier, deja gere par le drawer, a ete revalide.
- La sticky PDP se declenche une seule fois apres le passage complet du CTA du Hero produit et reste fixe, y compris lors d'une remontee au-dessus de ce CTA.
- La regle mobile du Ruban Vivant qui masquait la sticky dans la partie basse de la PDP a ete retiree.
- Validations navigateur : Home a 430 et 360 px, PDP a 390 px, menu, panier, sticky aller-retour et desktop a 1440 px.
- Pullback du complement sur le theme de developpement : 4 fichiers sur 4 identiques octet pour octet.

## Decision live

- GO visuel et GO live explicites recus de Patrice le 2026-08-15. Le deploiement reste cible aux fichiers du lot et soumis au pullback live.
- Le doublon de navigation `Rituels & bien-etre` deja produit par Navigation V2 a ete laisse intact, car il ne fait pas partie des cinq corrections demandees.
