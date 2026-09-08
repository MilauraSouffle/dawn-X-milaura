# SEO, performance et autorite : live verifie

Date : 2026-09-08 19:16 CEST

Statut : `TROIS TACHES EXECUTEES ET VERIFIEES, ADS NON LANCEES`

## Resultat

1. Performance : sept fichiers cibles publies sur le theme live Shopify `190430282075`, sans suppression, puis relus `7/7` identiques.
2. SEO : corrections Admin appliquees, redirections controlees, H1 Home corrige et `/blogs/infos` public en `noindex,follow`.
3. Autorite : fichier de `100` cibles livre, premiere vague executee ; neuf messages ne presentent aucun rejet immediat, FemininBio a rejete ses deux adresses publiques testees.

Audit complet : `docs/audits/2026-09-08-seo-performance-authority.md`.
Classement des cibles : `docs/audits/2026-09-08-authority-outreach-100.csv`.

## Deploiement live

GO explicite de Patrice : `GO ENVOI + GO LIVE` le 2026-09-08.

Fichiers publies :

- `layout/theme.liquid` ;
- `sections/milaura-product-hero.liquid` ;
- `sections/milaura-selection-atelier.liquid` ;
- `sections/milaura-home-occasions.liquid` ;
- `assets/milaura-hero-editorial-hub-birthstone-desktop.webp` ;
- `assets/milaura-hero-editorial-hub-birthstone-mobile.webp` ;
- `assets/milaura-rentree-sodalite-hero-v4-mobile-poster.webp`.

Commande Shopify ciblee avec `--nodelete --strict --allow-live`. Aucun push complet. Le theme live a confirme le succes sur `dawn-X-milaura/main (#190430282075)`.

Sauvegarde cible avant push : `/private/tmp/milaura-seo-live-before-final-20260908-1852`.
Pullback final : `/private/tmp/milaura-seo-live-after-final-20260908-1855`.

SHA-256 locaux et pullback identiques :

- `layout/theme.liquid` : `184be5645635090c5b7f1865ba55f569de1f4f52f033ac24710d9dc49f4308b7` ;
- `sections/milaura-product-hero.liquid` : `af193dab4b929375de3c7707e7770026faf9cdbcfab6f8aaf27acab69d9b5ce3` ;
- `sections/milaura-selection-atelier.liquid` : `3e2f23510b8bf53be72a57ee15fed029c34fed1b71a7ca0426712e17cb10b410` ;
- `sections/milaura-home-occasions.liquid` : `325dd7fdecd3faa3329e5bf093d755bb2cfef28437ec2085f1abf86edb955445` ;
- hero naissance desktop : `0f40da7a86cbcd30544dc734414a91a3262aaaa3ce02191638424b65896821da` ;
- hero naissance mobile : `fad335db27964724161096bce91b01c49a734e2df459b8b474f8214ae7d6def1` ;
- poster Sodalite mobile : `4601229a96ca03fe2fae9a9dee2c2fce8006052972272cf57d5111bacd54b6f2`.

## QA publique

- Home `390 x 844` et `1440 x 900` : un seul H1, aucun debordement horizontal, recommandations non chargees.
- PDP Horus `390 x 844` : un seul H1, canonique et schema Product presents, recommandations chargees et visibles.
- Panier : ajout du bracelet Horus en HTTP 200, drawer ouvert avec une ligne et total ; panier de la session de test vide ensuite.
- `/blogs/infos` : canonique publique correcte, `noindex,follow`, aucun debordement a `390 px`.
- Theme Check : `360` fichiers, `0` erreur, `16` avertissements historiques.
- Tests favoris preserves apres fusion concurrente : `4/4` PASS.

Captures locales :

- `/private/tmp/milaura-seo-live-mobile-home.png` ;
- `/private/tmp/milaura-seo-live-mobile-pdp.png` ;
- `/private/tmp/milaura-seo-live-desktop-home.png`.

## PageSpeed public

Rapport du 2026-09-08 a 19:03 CEST :

URL : `https://pagespeed.web.dev/analysis/https-milaura-fr/p811h06fmc?form_factor=mobile`.

- mobile : performance `60`, SEO `100`, FCP `5,5 s`, LCP `12,5 s`, TBT `30 ms`, CLS `0`, Speed Index `6,2 s`, `2 764 KiB` ;
- bureau : performance `95`, SEO `100`, FCP `0,6 s`, LCP `1,4 s`, TBT `110 ms`, CLS `0,001`, Speed Index `0,8 s`, `2 787 KiB`.

Le poids mobile baisse de `143 KiB`, le TBT de `280 ms` et le blocage du rendu estime de `280 ms` par rapport au run public avant lot. Le score mobile unique baisse toutefois de `65` a `60` et son LCP de `7,6 s` a `12,5 s`. Le detail LCP du meme rapport ne reconstitue pas cette valeur et une seconde execution PageSpeed est restee bloquee. Ce run mobile est donc conserve comme preuve, sans declarer une amelioration globale. Les donnees reelles disponibles restent bonnes : Shopify LCP P75 `1 354 ms`, INP `88 ms`, CLS `0`; Search Console `35` URL mobiles bonnes, aucune a ameliorer ou mauvaise.

## Autorite et envois

Premiere vague du 2026-09-08 : Journal du Yoga, Esprit Yoga, MeditationFrance, Metz Magazine, Blog MOSL, Metamorphose, Hello Metz, Yoga avec Valentine, NeverMind et FemininBio.

- Neuf messages sans rejet immediat dans Gmail.
- FemininBio : `redaction@femininbio.com` et `presse@femininbio.com` rejetees en `550 5.4.1`. Statut CSV corrige en `FAILED_BOUNCED_2026-09-08`.
- Tout-Metz avait deja ete contacte le 2026-09-07.
- La Mariee aux Pieds Nus ne prend pas de nouvelles propositions et ne doit pas etre relancee.
- Aucun lien achete, faux compte, spam de forum, echantillon, commission ou depense.

## Gate Ads

Les Ads ne sont pas lancees. Restent obligatoires avant depense : selection de produits approvisionnables et approuves, marge contributive, preuve fraiche de l evenement Purchase Pixel/CAPI et GO budget explicite. Le lot performance public et le parcours d ajout au panier ne bloquent plus cette checklist.

## Git et reprise

Code du lot : `2fe9e0c4`, autorisation documentee : `026a5b9e`, fusion avec le canonique courant : `bbee0ef8`. La branche d integration distante contient ce lot et a continue avec les checkpoints concurrents jusqu a `1886f2f5` avant la documentation finale. Le checkout principal sale n a pas ete modifie ni nettoye.

```text
Reprends MilAura depuis docs/checkpoints/2026-09-08-1916-seo-performance-authority-live.md. Les trois taches SEO, performance et autorite sont executees et verifiees. Ne redeploie pas les sept fichiers par deduction. Commence en lecture seule par les reponses de la vague d outreach et les donnees reelles de vitesse. FemininBio est un echec de delivrance sur ses deux adresses publiques et ne doit pas etre retente sans nouveau contact confirme. Les Ads restent interdites tant que stock, marge contributive, Purchase Pixel/CAPI et budget ne sont pas valides ensemble. Preserve la revue catalogue manuelle de Patrice et tous les travaux concurrents.
```
