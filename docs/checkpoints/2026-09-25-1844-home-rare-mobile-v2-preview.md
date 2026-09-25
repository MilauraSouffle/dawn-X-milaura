# Home Pieces rares mobile V2 en preview

Date : 2026-09-25 18:44 CEST

Statut : `PREVIEW ISOLEE PRETE, PASS TECHNIQUE, GO VISUEL PATRICE REQUIS`

## Resultat

La section Home `Pieces rares & de collection` est recomposee uniquement sous `820px`.

- Le collier lapis apparait en gros plan des l arrivee dans la section.
- Le portrait vertical refuse n est plus servi.
- L asset bureau valide est reutilise avec un cadrage mobile dedie a `72% 50%`.
- Le media vient avant la copy compacte ; le produit reste le sujet et le mannequin le support.
- Aucun texte, CTA, lien, asset bureau ou regle desktop n est modifie.

## Fichiers

- `sections/milaura-hero-portal.liquid`
- `templates/index.json`, uniquement `hero_homepage.settings.mobile_asset`
- `docs/workstreams.md`
- `docs/checkpoints/2026-09-25-1844-home-rare-mobile-v2-preview.md`

## Preview Shopify

- Theme prive : `MilAura Rare Mobile V2 2026-09-25`
- ID : `201918447963`
- URL : `https://dvsi0r-1q.myshopify.com?preview_theme_id=201918447963`
- Theme public `190430282075` : non modifie.

## Verification

- `git diff --check` : PASS.
- JSON Shopify : PASS.
- Theme Check : 0 erreur ; 16 avertissements historiques hors lot.
- Mobile `320`, `360`, `390` et `430px` : image `1672 x 941` servie, cadrage `72% 50%`, aucune largeur parasite, copy contenue et CTA visible.
- Bureau `1440 x 900` : hauteur `648px`, source bureau et cadrage `50% 50%` inchanges.
- CTA : `https://milaura.fr/collections/pieces-rares`.
- Images cassees dans la section : `0`.
- Erreurs console : `0`.
- Pullback prive : `2/2` identique.
- SHA-256 section : `72816562e281e46bec18e115b86d52850c9c00eaa9f008b8f51906681ac7c9f0`.
- SHA-256 template : `b67990c3c3eaac9bf34b5379a6fe173f56648718db7c635b92a36cc139585292`.

## Gates

- PASS technique : acquis.
- GO visuel Patrice : requis.
- Integration : non autorisee a ce stade.
- GO live : non donne.
- Publication live : non executee.

## Reprise exacte

Ouvrir la preview `201918447963` sur mobile reel, valider ou refuser la composition, puis integrer et publier uniquement apres GO visuel et GO live explicites. Le push live devra rester cible aux deux fichiers fonctionnels, sans suppression, suivi d un pullback et d une QA publique mobile et bureau.
