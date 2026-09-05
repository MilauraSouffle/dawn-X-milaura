# MilAura : handoff dedie a l'enrichissement du catalogue

Date : 2026-09-05 09:41 CEST. Proprietaire sortant : Codex.
Statut : `SEO RESTAURE ; CADEAU OPERATIONNEL ; SHEET A JOUR ; 18 PRODUITS PHYSIQUES A CREER ; 4 FICHES PHYSIQUES LEGACY A REENRICHIR`.

## Decision de passage de relais

Patrice demande une session fraiche exclusivement consacree a la remise a niveau du catalogue avant les contenus Meta et Pinterest. La prochaine session ne doit pas refaire un audit general ni rejouer les retraits, stocks, factures, activations ou remises deja executes. Elle doit commencer par une relecture ciblee des EAN et IDs ci-dessous, puis produire les enrichissements et visuels selon le workflow courant.

Source de verite stock : [MILAURA - Inventaire physique canonique](https://docs.google.com/spreadsheets/d/1QrtP77A-6FUmzOaOdD9U5CigCbrRpDWH5GTb7N1NUbM/edit#gid=1034959372), onglet `Inventaire canonique`, sheetId `1034959372`.

## Etat exact des trois missions demandees

### 1. Correctif SEO apres retrait brutal du catalogue : partiellement ferme

- Audit Search Console termine : 59 anciennes URLs ayant recu 109 clics sur 28 jours avaient ete retirees.
- Les 59 URLs ont ete restaurees sous leurs handles historiques. Elles sont ACTIVE et indexables : 55 sont maintenant a stock zero, quatre portent du stock physique issu des factures.
- Le sitemap a ete soumis dans Search Console. Le recrawl, les impressions et les positions restent asynchrones et non mesures au moment de ce handoff.
- Aucun contenu des 59 anciennes fiches n'a encore ete remis au nouveau workflow. Aucune redirection 301 n'a ete creee par simple similarite.
- Conclusion : le risque de 404 massif a ete corrige, mais le chantier SEO n'est pas termine tant que les quatre fiches physiques prioritaires et les futures nouvelles fiches ne sont pas enrichies, puis que les 55 anciennes fiches a stock zero ne sont pas arbitrees une par une.

Preuves : `docs/checkpoints/2026-09-04-2210-seo-clicked-urls-restored.md` et `docs/audits/2026-09-04-legacy-retirement-search-console.md`.

### 2. Bracelet hematite et cadeau des 50 EUR : operationnel, nouveau visuel a arbitrer

- Fiche utilisee pour la vente et le cadeau : produit `10685849862491`, variante `53946608517467`, EAN `3701459008254`.
- URL : `https://milaura.fr/products/bracelet-fin-en-hematite-perles-de-4-mm`.
- Etat relu le 2026-09-05 : ACTIVE, prix 8,50 EUR, stock physique total 12, suivi actif, politique DENY, cinq images, 29 metachamps, `availability_mode=physical-stock`.
- La remise automatique ajoute une unite offerte des 50 EUR d'achat. Le rendu a ete constate dans le panier par Patrice. Le libelle redondant `1 cadeau` a ete retire du panier sur le theme live `190430282075`, commit `2e3b74b2`.
- La relecture API fraiche de la remise n'est pas disponible avec le jeton courant, qui n'a pas `read_discounts`. Ne pas interpreter cette limite de lecture comme une remise absente et ne pas recreer une deuxieme remise.
- La fiche satisfait deja le contrat courant a cinq images et 29 metachamps. Patrice avait demande de nouvelles photos et un nouvel enrichissement : la prochaine session doit d'abord lui montrer la galerie et le contenu existants, puis ne regenerer que s'il confirme encore ce besoin visuel. Toute reprise doit conserver le produit, l'EAN, l'URL, le stock 12 et la mecanique cadeau.

### 3. Deux factures et stock catalogue : Sheet ferme, Shopify partiel

- Factures `FCAN2026-59350-77206.pdf` et `FCAN2026-59481-77383.pdf` integrees au Sheet : 35 lignes d'achat, 33 EAN, 24 nouvelles lignes canoniques et neuf EAN existants, zero doublon.
- Parmi les 33 EAN : 27 references vendables ont un stock physique positif, cinq references vendables sont a zero et une reference correspond aux cartes d'information Sodalite, hors vente.
- Shopify : neuf des 27 references physiques sont deja ACTIVE avec leur quantite exacte ; 18 n'existent pas encore dans Shopify.
- Sur les neuf actives, cinq sont deja au workflow courant. Quatre sont des fiches historiques restaurees pour le SEO et doivent etre enrichies en place.
- Les 18 sources fournisseur exactes ont ete collectees. Aucun des 18 produits n'a encore ete enrichi, cree en DRAFT ou publie.

## Lot P1 : enrichir en place quatre URLs physiques existantes

Conserver strictement leurs IDs et handles pour le SEO. Ne pas creer de doublon. Le stock est un total physique, jamais un ajout.

| EAN | Produit Shopify | ID | Handle | Stock exact | Etat du workflow |
| --- | --- | ---: | --- | ---: | --- |
| `3701459098132` | Collier obsidienne noire boho dore | `10557516644699` | `collier-obsidienne-noire-boho-dore` | 4 | 5 images, metachamps legacy, `availability_mode` manquant |
| `3701459098071` | Collier aventurine verte dore boho | `10557523099995` | `collier-aventurine-verte-boho-dore` | 2 | 5 images, metachamps legacy, `availability_mode` manquant |
| `3701459098088` | Collier quartz rose dore boheme | `10521073385819` | `collier-quartz-rose-boho-dore` | 2 | 5 images, metachamps legacy, `availability_mode` manquant |
| `3667407018617` | Chapelet en sodalite, perles de 6 mm | `10522152436059` | `chapelet-sodalite-6mm` | 1 | 5 images, metachamps legacy, `availability_mode` manquant |

Action attendue : source exacte, enrichissement texte et SEO MilAura, metachamps V4.1, cinq visuels controles en pleine resolution, puis mise a jour de la fiche existante. Appliquer `physical-stock`, suivi actif et DENY. La validation technique, le GO visuel et l'ecriture Shopify restent des gates distinctes. Aucun changement de handle.

## Cinq references physiques actives deja au workflow courant

Ne pas regenerer leurs galeries acceptees par deduction. Corriger uniquement une anomalie prouvee.

| EAN | Produit | ID | Stock exact |
| --- | --- | ---: | ---: |
| `3667407008090` | Bracelet Horus dore en sodalite 6 mm | `10669625966939` | 3 |
| `3667407021495` | Bracelet Iris dore en aigue-marine, cornaline et grenat 4 mm | `10669947781467` | 2 |
| `3701459010042` | Bracelet en rhodonite d'Australie 6 mm | `10669962461531` | 1 |
| `3701459011551` | Bracelet en oeil de tigre 8 mm | `10669855277403` | 2 |
| `3701459098095` | Collier boho dore en amethyste | `10669953122651` | 3 |

## Lot P2 : 18 references physiques absentes de Shopify

Creer sous workflow V4.1 en DRAFT uniquement. Les quantites ci-dessous viennent du Sheet et doivent etre relues par EAN juste avant l'ecriture Shopify.

| Ligne Sheet | EAN | Produit fournisseur | Stock physique |
| ---: | --- | --- | ---: |
| 53 | `3701459046959` | Fil de perles 06 mm jade de Chine A | 2 |
| 241 | `3701459010677` | Bracelet boule 08 mm aventurine verte A | 1 |
| 313 | `3667407021419` | Bracelet Eclat dore nacre AA | 2 |
| 314 | `3667407021471` | Bracelet Iris dore tourmaline noire, cristal de roche fume, aigue-marine AA | 1 |
| 315 | `3667407021518` | Bracelet Loumea dore amethyste, cornaline, cristal de roche A | 1 |
| 316 | `3667407021525` | Bracelet Loumea dore lapis-lazuli, spinelle noire, cristal de roche A | 1 |
| 317 | `3667407021402` | Bracelet Loumea dore nacre, pierre de lune AA | 1 |
| 318 | `3701459098705` | Bracelet Ona dore sodalite A | 1 |
| 319 | `3701459082698` | Bracelet boule 06 mm aventurine bleue A | 1 |
| 325 | `3701459023837` | Bracelet boule 10 mm zoisite AA | 1 |
| 327 | `3701459040551` | Fil de perles 06 mm apatite bleue A+ | 1 |
| 328 | `3701459076543` | Galet 45 mm howlite blanche A, lot de trois pieces | 2 |
| 329 | `3701459076604` | Galet 45 mm rhodonite Madagascar A, lot de trois pieces | 2 |
| 330 | `3667407013124` | Bracelet Alea dore cornaline AA | 3 |
| 333 | `3701459098118` | Collier Boho dore cristal de roche A | 2 |
| 334 | `3701459098125` | Collier Boho dore labradorite A | 2 |
| 335 | `3701459098101` | Collier Boho dore oeil de tigre A | 2 |
| 336 | `3667407018822` | Collier Lueur sodalite AA | 1 |

Sources durables :

`/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation/data/catalogue-batches/2026-09-05-invoices-enrichment-handoff/source/`

Chaque sous-dossier contient le `source_product.json` fournisseur exact. Le scraper laisse encore `public_price_scope=unknown` et `lot_unit_verified=false` lorsque la preuve n'est pas finalisee. La prochaine session doit fermer prix public, cout, unite de vente et lot avant l'enrichissement. Ne pas inventer de prix ou de conditionnement.

## References des factures a stock zero, hors lot prioritaire

Ne pas creer ou remettre en vente uniquement parce qu'elles figurent sur les factures :

| EAN | Produit | Stock physique |
| --- | --- | ---: |
| `3701459048885` | Bracelet boule 06 mm beryls A | 0 |
| `3701459011780` | Bracelet boule 08 mm quartz rose Madagascar A | 0 |
| `3701459010899` | Bracelet boule 08 mm cristal de roche A | 0 |
| `3701459011049` | Bracelet boule 08 mm grenat rouge A | 0 |
| `3701459011322` | Bracelet boule 08 mm labradorite A | 0 |

Les cartes d'information Sodalite `3701459086320` sont un support, pas une fiche produit vendable.

## Les 59 anciennes fiches actives a arbitrer

Les quatre lignes marquees `P1 physique` doivent etre enrichies maintenant et rester sur leur ID/handle. Les 55 autres restent ACTIVE, stock zero et DENY pour preserver leurs URLs pendant la revue. Patrice veut ensuite une decision une par une : enrichir et conserver, maintenir temporairement, rediriger vers un equivalent prouve, ou retirer. Ne pas les passer en DRAFT, supprimer, enrichir ou rediriger en masse.

| # | Produit | ID Shopify | Handle | Stock | Priorite |
| ---: | --- | ---: | --- | ---: | --- |
| 1 | Pendule Cristal de Roche | `10358876275035` | `pendule-cristal-de-roche` | 0 | revue ulterieure |
| 2 | Pendentif Tourmaline Noire | `10357645771099` | `pendentif-tourmaline-noire` | 0 | revue ulterieure |
| 3 | Pendule Cornaline | `10359677157723` | `pendule-cornaline` | 0 | revue ulterieure |
| 4 | Pendule Labradorite | `10358581625179` | `pendule-labradorite` | 0 | revue ulterieure |
| 5 | Collier obsidienne noire boho dore | `10557516644699` | `collier-obsidienne-noire-boho-dore` | 4 | P1 physique |
| 6 | Pendule Jaspe Rouge | `10359677387099` | `pendule-jaspe-rouge` | 0 | revue ulterieure |
| 7 | Bague Aigue-Marine Argent | `10488132108635` | `bague-argent-925-modele-01-aigue-marine-bresil-aa-1-piece-lo` | 0 | revue ulterieure |
| 8 | Bracelet Jaspe Mokaite 4 mm | `10357445525851` | `bracelet-jaspe-mokaite` | 0 | revue ulterieure |
| 9 | Bracelet Selenite 6 mm | `10357459878235` | `bracelet-selenite` | 0 | revue ulterieure |
| 10 | Boucles d'Oreilles Obsidienne Noire 8 mm | `10357431206235` | `boucles-doreilles-obsidienne-noire` | 0 | revue ulterieure |
| 11 | Oeuf de Yoni Cristal de Roche | `10358875881819` | `oeufs-cristal-de-roche` | 0 | revue ulterieure |
| 12 | Bracelet Baroque Labradorite | `10357440446811` | `bracelet-labradorite` | 0 | revue ulterieure |
| 13 | Bracelet Agate Fleur de Cerisier 8 mm | `10357462532443` | `bracelet-agate-fleur-de-cerisier-1` | 0 | revue ulterieure |
| 14 | Bracelet Peridot 6 mm | `10357457256795` | `bracelet-peridot-1` | 0 | revue ulterieure |
| 15 | Bracelet Liberite Bleue 8 mm | `10357467611483` | `bracelet-liberite-bleue-1` | 0 | revue ulterieure |
| 16 | Collier aventurine verte dore boho | `10557523099995` | `collier-aventurine-verte-boho-dore` | 2 | P1 physique |
| 17 | Bracelet Jaspe Rouge 8 mm | `10357477704027` | `bracelet-jaspe-rouge` | 0 | revue ulterieure |
| 18 | Pendentif Aventurine | `10357635547483` | `pendentif-aventurine` | 0 | revue ulterieure |
| 19 | Bol Selenite Rond 100 mm | `10357705539931` | `bol-selenite-rond-100-mm` | 0 | revue ulterieure |
| 20 | Pendule Sodalite | `10358580805979` | `pendule-sodalite` | 0 | revue ulterieure |
| 21 | Pendentif Chrysocolle | `10357641904475` | `pendentif-chrysocolle` | 0 | revue ulterieure |
| 22 | Pointe Calcedoine Bleue | `10359675978075` | `pointe-calcedoine-bleue-1` | 0 | revue ulterieure |
| 23 | Bracelet Amazonite 12 mm | `10357488484699` | `bracelet-amazonite-4` | 0 | revue ulterieure |
| 24 | Bracelet Baroque Spinelle Noire | `10357443854683` | `bracelet-spinelle-noire` | 0 | revue ulterieure |
| 25 | Bougie Serenite, amethyste | `10314321101147` | `bougie-serenite-the-amethyste` | 0 | revue ulterieure |
| 26 | Distributeur Savon Lapis-Lazuli | `10357707014491` | `distributeur-savon-lapis-lazuli` | 0 | revue ulterieure |
| 27 | Boucles d'Oreilles Aventurine | `10357425176923` | `boucles-doreilles-aventurine-1` | 0 | revue ulterieure |
| 28 | Orgonite Pointe Obsidienne | `10359675158875` | `pointe-obsidienne` | 0 | revue ulterieure |
| 29 | Pyramide Selenite | `10357668577627` | `pyramide-selenite` | 0 | revue ulterieure |
| 30 | Collier Jaspe Rouge | `10402430452059` | `collier-boule-06mm-jaspe-rouge-a` | 0 | revue ulterieure |
| 31 | Bracelet Aventurine Rouge 10 mm | `10357486027099` | `bracelet-aventurine-rouge-1` | 0 | revue ulterieure |
| 32 | Bracelet Jade Nephrite 6 mm | `10357453160795` | `bracelet-jade-nephrite` | 0 | revue ulterieure |
| 33 | Collier Amethyste | `10357494055259` | `collier-amethyste` | 0 | revue ulterieure |
| 34 | Bracelet Lapis Lazuli Onyx | `10488166220123` | `bracelet-celyos-argente-lapis-lazuli-onyx-a` | 0 | revue ulterieure |
| 35 | Pendentif Oeil de Sainte Lucie | `10357650948443` | `pendentif-oeil-de-sainte-lucie` | 0 | revue ulterieure |
| 36 | Bougie Reconfort, calcedoine bleue | `10314320904539` | `bougie-reconfort-neroli-calcedoine` | 0 | revue ulterieure |
| 37 | Plaque Bois Fleur de Vie | `10402433433947` | `plaque-bois-fleur-de-vie-pleine-creuse-150mm` | 0 | revue ulterieure |
| 38 | Bracelet Baroque Pierre de Soleil | `10357442707803` | `bracelet-pierre-de-soleil` | 0 | revue ulterieure |
| 39 | Chapelet en sodalite, perles de 6 mm | `10522152436059` | `chapelet-sodalite-6mm` | 1 | P1 physique |
| 40 | Pendule Oeil de Tigre | `10357688631643` | `pendule-oeil-de-tigre` | 0 | revue ulterieure |
| 41 | Bracelet Jaspe Brun 6 mm | `10357454176603` | `bracelet-jaspe-brun` | 0 | revue ulterieure |
| 42 | Bracelet Jade Nephrite 8 mm | `10357476295003` | `bracelet-jade-nephrite-3` | 0 | revue ulterieure |
| 43 | Collier Pyrite | `10357493203291` | `collier-pyrite-1` | 0 | revue ulterieure |
| 44 | Bracelet Baroque Citrine | `10357436711259` | `bracelet-citrine` | 0 | revue ulterieure |
| 45 | Bracelet Agate Indienne 8 mm | `10357464793435` | `bracelet-agate-indienne-1` | 0 | revue ulterieure |
| 46 | Oeuf Agate | `10358580412763` | `oeuf-agate` | 0 | revue ulterieure |
| 47 | Bracelet Opale Dendrite 8 mm | `10357482062171` | `bracelet-opale-dendrite` | 0 | revue ulterieure |
| 48 | Pendentif Amethyste Argent Rhodie | `10402435727707` | `pendentif-argent-925-rhodie-modele-10-amethyste-facettee-bre` | 0 | revue ulterieure |
| 49 | Bracelet Baroque Seraphinite | `10357443330395` | `bracelet-seraphinite` | 0 | revue ulterieure |
| 50 | Pendentif Rhodonite Serti Ovale | `10357660221787` | `pendentif-rhodonite` | 0 | revue ulterieure |
| 51 | Baguette Pyrite | `10357681619291` | `bague-pyrite` | 0 | revue ulterieure |
| 52 | Bracelet Peridot 4 mm | `10357446017371` | `bracelet-peridot` | 0 | revue ulterieure |
| 53 | Distributeur Savon Quartz Rose | `10357710029147` | `savon-quartz-rose` | 0 | revue ulterieure |
| 54 | Collier quartz rose dore boheme | `10521073385819` | `collier-quartz-rose-boho-dore` | 2 | P1 physique |
| 55 | Baton de Sauge Blanche et Cedre | `10357692105051` | `sauge-blanche-et-cedre` | 0 | revue ulterieure |
| 56 | Baton de Sauge Blanche et Rose | `10358581952859` | `sauge-blanche-et-rose` | 0 | revue ulterieure |
| 57 | Baguette Amethyste | `10357682766171` | `bague-amethyste-1` | 0 | revue ulterieure |
| 58 | Orgonite Pointe Lapis-Lazuli | `10359674765659` | `pointe-lapis-lazuli` | 0 | revue ulterieure |
| 59 | Pochon en velours camel, ecrin Mil'Aura | `10504051032411` | `pochon-en-velours-camel-ecrin-milaura` | 0 | revue ulterieure |

Preuve nominative et donnees GSC :

`/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation/data/catalogue-batches/2026-09-04-seo-corrective/preflight.json`

## Classification stock et surveillance fournisseur

Definitions Shopify creees et epinglees :

- `milaura.availability_mode` : `physical-stock`, `supplier-backed`, `made-to-order` ;
- `milaura.supplier_url` ;
- `milaura.supplier_status` : `disponible`, `rupture`, `introuvable`, `inconnu` ;
- `milaura.supplier_status_checked_at`.

Camilla ne controle que la requete `status:active AND milaura.availability_mode=supplier-backed`. Les produits physiques, les 59 legacy non classes et les DRAFT sont exclus. La file courante contient une seule fiche fournisseur, disponible chez CAN et sans alerte.

Cron actif : `supplier-watch-can-daily`, ID `2b4400dc036b`, tous les jours a `07:15 UTC`, livraison Telegram, mode sans agent et silencieux quand il n'y a aucune alerte. Il signale rupture, déréférencement, verification impossible, contrat inventaire incoherent ou quantite negative a commander. Ne pas le dupliquer.

## Workflow obligatoire pour la prochaine session

Workspace :

`/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation`

Lire completement avant action :

- `AGENTS.md` ;
- `docs/milaura-product-agent-contract.md` ;
- `docs/2026-06-08-runbook-lancer-generation-produit.md` ;
- `docs/2026-08-31-product-workflow-v4.md` ;
- `prompts/image_generation_codex_native_v4.md` ;
- skill `onora-copywriting` et `docs/reference/2026-08-12-copywriting-milaura.md` du repo theme.

Ordre d'execution impose :

1. Relire uniquement les 27 EAN physiques dans le Sheet et les 9 IDs Shopify deja connus. Ne pas relancer un audit global du catalogue.
2. Commencer par le lot P1 des quatre fiches physiques legacy. Enrichir en place, preserve handles/IDs/stocks, produire les cinq images et soumettre le texte et la galerie a Patrice.
3. Montrer egalement l'hematite existante et demander seulement si Patrice maintient une regeneration visuelle malgre sa conformite courante. Ne jamais casser la remise cadeau.
4. Enchainer les 18 produits absents par petits lots gerables. DRAFT uniquement apres les controles techniques. Aucun ACTIVE, publication, Ads ou feed par inference.
5. Apres GO visuel et GO d'ecriture pour chaque lot : ecrire Shopify, synchroniser le Sheet par EAN/ID exact, faire un pullback et fournir les liens Admin.
6. Quand les 27 references physiques sont coherentes et que Patrice a active les fiches retenues, verifier les feeds Pinterest/Meta avant toute campagne. Un catalogue incomplet ne doit pas etre presente comme pret pour les Ads.

## Etat Git et limites

- Repo theme : branche `codex/milaura-integration`, checkout sale avec travaux concurrents. Ne pas reset, clean, stage global ou fusionner `origin/main`.
- Le correctif du libelle cadeau est deja committe et pousse : `2e3b74b2`.
- Le dossier produit prive n'est pas un lot a committer avec le theme.
- Les 18 sources et les cinq recus de cette session ont ete copies dans `data/catalogue-batches/2026-09-05-invoices-enrichment-handoff/`.
- Le jeton Shopify courant n'a pas `read_discounts`. Aucun nouvel elargissement de scope n'est requis pour l'enrichissement produit.
- Aucun produit des 18, aucune image et aucun texte d'enrichissement n'ont ete generes dans cette session.

## Prompt de reprise a copier

```text
Reprends MilAura depuis docs/checkpoints/2026-09-05-0941-catalogue-enrichment-dedicated-handoff.md. Cette session est exclusivement dediee a l'enrichissement du catalogue avant Pinterest et Meta. Ne refais pas d'audit global et ne rejoue ni les factures, ni les stocks, ni les 59 activations SEO, ni le cadeau hematite, ni le cron Camilla. Commence par relire les 27 EAN physiques dans le Sheet canonique. Traite d'abord en place les quatre fiches legacy physiques P1, sans changer leurs IDs ou handles : Boho obsidienne EAN 3701459098132 stock 4, Boho aventurine 3701459098071 stock 2, Boho quartz rose 3701459098088 stock 2, chapelet sodalite 3667407018617 stock 1. Utilise le workflow V4.1 complet, le copywriting MilAura, cinq images controlees et les metachamps physical-stock, puis presente textes et galeries a Patrice avant ecriture. Montre aussi la fiche hematite actuelle, deja ACTIVE a 8,50 EUR, stock total 12, cinq images et 29 metachamps, et ne regenere ses visuels que si Patrice maintient sa demande apres revue. Enchaine ensuite les 18 references physiques absentes de Shopify a partir des sources durables du handoff, DRAFT uniquement, sans inventer prix ou lots. Les cinq references a stock zero et les cartes Sodalite restent hors lot. Les 55 autres anciennes fiches SEO restent ACTIVE a stock zero et seront arbitrees une par une plus tard. Preserve tous les travaux Git concurrents et garde GO visuel, ecriture Shopify, activation, feeds et Ads comme gates distinctes.
```
