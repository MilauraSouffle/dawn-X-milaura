# Automne conversion et Pinterest programme

Date : 2026-09-24 18:13 CEST

Statut : `PREVIEW TECHNIQUE PASS, PINTEREST PROGRAMME, ADS PREPAREES, GO LIVE EN ATTENTE`

## Autorisation recue

Patrice a donne le GO exact :

```text
GO CORRECTIONS AUTOMNE + PROGRAMMATION FP03-FP06 + PREPARATION ADS
```

La confirmation finale de programmation des quatre Pins a ete recue le 2026-09-24 avant les clics externes.

## Corrections Automne

Fichiers modifies :

- `sections/milaura-sodalite-landing.liquid`
- `assets/milaura-destination-landing.css`
- `templates/collection.selection-automne.json`
- `sections/footer-group.json`

Effets verifies :

- CTA `Voir les bijoux` visible dans le premier ecran mobile et lie a `#MilauraSeasonalCatalogue` ;
- prix et CTA du bracelet Iris places avant le texte long ;
- module de concours termine retire du footer actif au profit de la newsletter existante ;
- aucun debordement horizontal a `390 x 844` et `1440 x 900`.

Theme prive : `Development (570851-mac-1)` `201797534043`.

Preview : `https://milaura-2.myshopify.com/collections/selection-automne?preview_theme_id=201797534043`

Le theme public `190430282075` est reste intact. Une release exige encore le GO visuel puis le GO live de Patrice.

## Preuves techniques

- `git diff --check` : PASS.
- `python3 tests/css_contract_test.py` : PASS, quatre assets conformes et trois sections sans CSS inline.
- `python3 tests/autumn_conversion_contract_test.py` : PASS.
- `shopify theme check` : zero erreur, seize avertissements historiques hors lot.
- push cible prive : quatre fichiers avec `--nodelete --strict`.
- pullback prive : `4/4` fichiers strictement identiques.
- QA navigateur : mobile `390 x 844`, desktop `1440 x 900`, CTA et ordre d achat verifies, newsletter presente, concours absent.

## Pinterest organique

Tableau : `Fiches pierres : vertus & bienfaits`.

Les quatre fiches produit ont ete recontrolees publiques et disponibles le 2026-09-24. La file Pinterest affiche exactement quatre Pins programmes :

| ID | Titre | Publication Europe/Paris | ID programme Pinterest |
|---|---|---|---|
| FP03 | Quartz rose : douceur avec le bracelet Calysta | 2026-09-25 09:00 | `3886755273234648256` |
| FP06 | Labradorite : protection avec le bracelet Aska | 2026-09-25 14:00 | `3886754723411271424` |
| FP04 | Sodalite : confiance avec le bracelet Horus | 2026-09-25 20:30 | `3886754221470977216` |
| FP05 | Aigue-marine : expression avec le collier Nuage | 2026-09-26 09:00 | `3886753736978491072` |

FP01 et FP02 n ont pas ete recreees.

Preuve UI finale : page `https://fr.pinterest.com/MilAuraMineraux/scheduled-pins/`, libelle `4 Epingles`, quatre titres, dates, heures et tableau visibles.

## Preparation Ads

Plan : [Pinterest Ads Automne](../campaigns/automne/2026-09-24-pinterest-ads-preparation.md).

- aucune campagne Ads creee ;
- aucune campagne activee ;
- aucun budget engage ;
- proposition bornee : Ventes, un groupe large France, budget fixe 10 EUR/jour pendant sept jours ;
- passage a Purchase seulement apres validation de l evenement et reconciliation avec une vraie commande Shopify ;
- gates marge, stock, quatre creations et GO Ads distinct maintenus.

## Prochaines gates

1. Patrice controle la preview Automne.
2. GO exact attendu : `GO LIVE CORRECTIONS AUTOMNE`.
3. Apres release et QA publique, verifier Purchase, deduplication, panier moyen et marge contributive.
4. Produire et valider les quatre creations Ads.
5. GO exact attendu : `GO ACTIVATION ADS PINTEREST 10 EUR/JOUR`.
