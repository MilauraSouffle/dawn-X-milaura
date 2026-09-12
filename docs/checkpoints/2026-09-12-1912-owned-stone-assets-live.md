# Actifs proprietaires pierre, live verifie

Date : 2026-09-12 19:12 CEST
Statut : `VALIDE PAR PATRICE, INTEGRE, POUSSE ET LIVE VERIFIE`

## Resultat public

Les trois actifs proprietaires valides par Patrice sont maintenant accessibles sur leurs URL canoniques :

- `https://milaura.fr/pages/trouver-votre-pierre` ;
- `https://milaura.fr/pages/entretien-des-pierres` ;
- `https://milaura.fr/pages/atlas-des-pierres`.

La page canonique `https://milaura.fr/pages/pierres-de-naissance` conserve son contenu existant et utilise le Hero corrige avec trois bracelets MilAura.

La version dupliquee de Pierres de naissance et la page Etude annuelle restent retirees. La future landing Ads avec questionnaire, avantage et collecte email reste un chantier distinct. Aucun formulaire de lead, consentement marketing, remise, automatisation email, campagne ou depense Ads n a ete cree dans ce lot.

## Shopify Admin

Trois pages visibles ont ete creees apres autorisation explicite de Patrice :

| ID | Titre Admin | Handle | Template |
| --- | --- | --- | --- |
| `168401666395` | Trouver votre pierre | `trouver-votre-pierre` | `milaura-stone-finder` |
| `168401731931` | Entretien des pierres | `entretien-des-pierres` | `milaura-stone-care` |
| `168401830235` | Atlas des pierres | `atlas-des-pierres` | `milaura-stone-atlas` |

Chaque page possede un title SEO et une meta description propres. Les trois URL repondent `200` et figurent dans le sitemap public des pages.

## Git

- branche source : `codex/milaura-owned-assets-20260910` ;
- commit visuel final : `c3bd0a25` ;
- normalisation des en-tetes Shopify : `6f069db8` ;
- `origin/codex/milaura-integration` avance par fast-forward jusqu a `6f069db8` avant la cloture documentaire ;
- checkout principal sale et en retard preserve sans edition, reset, stash ou nettoyage.

## Deploiement Shopify

- theme live : `190430282075` ;
- theme prive de recette : `200974958939`, non publie ;
- sauvegarde avant mutation : `/private/tmp/milaura-owned-live-before-20260912.7vIymD` ;
- push cible de 20 fichiers avec `--nodelete`, `--strict` et `--allow-live` ;
- aucun fichier supprime ;
- pullback final : `/private/tmp/milaura-owned-live-pullback-20260912.j5XQtk` ;
- comparaison bit a bit : `20/20` identiques.

Le premier appel non interactif a ete interrompu avant ecriture car le CLI exigeait le drapeau `--allow-live`. Le second appel, explicitement autorise, a publie le perimetre exact.

## QA live

Le storefront public sans parametre de preview a ete controle a `390 x 844` et `1440 x 1000`.

- les quatre URL repondent `200` sans redirection ;
- un H1 unique et le title SEO attendu sont presents sur chaque page ;
- les Heroes mobiles chargent les WebP de largeur naturelle `1122` ;
- les Heroes desktop chargent les WebP de largeur naturelle `1536` ;
- aucun debordement horizontal ;
- aucun message dans le journal d erreurs ou la console ;
- selecteur : huit pierres indexables, le choix Protection ramene quatre resultats ;
- entretien : huit lignes, la recherche Amethyste ramene une ligne ;
- atlas : huit fiches, la recherche Sodalite ramene une fiche ;
- naissance : douze mois, le clic Fevrier active un seul panneau ;
- le Hero de naissance montre les trois bracelets valides sur mobile et desktop.

Captures : `/private/tmp/milaura-owned-live-qa-20260912/`.

## Verifications techniques

- `python3 scripts/build_owned_stone_assets.py --check` : PASS, huit pierres et trois snippets ;
- `node --test tests/owned-stone-guides.test.mjs` : 6 sur 6 ;
- `python3 tools/check_copywriting.py` : PASS, 348 fichiers ;
- `git diff --check` : PASS ;
- Theme Check : 0 erreur, 16 avertissements historiques dans huit fichiers ;
- pullback live : 20 sur 20 identiques.

## Etat final

Le lot est ferme. Aucun nouveau deploiement ne doit etre rejoue par deduction. Les produits, stocks, prix, medias Shopify existants, preuve sociale, catalogue et Ads sont restes hors perimetre.
