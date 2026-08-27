# Handoff final inventaire MilAura et workflow produit V3

Date : 2026-08-27 19:01 CEST

## Verdict

La session inventaire est fermee proprement. Aucun traitement catalogue ne doit repartir automatiquement.

- Cohorte historique traitee : `60` identites EAN exactes.
- Etat Shopify controle le 2026-08-27 vers 18:45 CEST : `40 ACTIVE`, `20 DRAFT`.
- References non traitees : `125`, soit `110` en file et `15 BLOCKED_PRICE`.
- Reprise exacte : lot 06, positions de file `51` a `60`, prepare localement, `0` ecriture Shopify.
- Workflow visuel definitif : V3, exactement cinq images.
- Benchmark valide et active par Patrice : Bracelet Iris Shopify `10669947781467`, EAN `3667407021495`.
- Camilla : doctrine, skill, pipeline V1.3, tests et preuves V3 synchronises sur le VPS puis conteneur redemarre.
- Pendant ce handoff : aucune mutation de produit, prix, stock, statut, collection ou theme Shopify.

## Pourquoi Patrice voyait initialement 52 produits ajoutes

Le bilan historique `60 traites` ne signifiait pas 60 nouvelles fiches visibles :

- `52` nouveaux produits crees ;
- `2` brouillons Shopify existants mis a jour ;
- `6` produits deja actifs audites et laisses intacts.

Depuis, Patrice a controle et active plusieurs brouillons. Le statut courant de la cohorte est donc `40 ACTIVE` et `20 DRAFT`, sans changer le total de 60 identites traitees.

## Source de verite catalogue

Workspace local :

`/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation`

Ledgers :

- pilote 10 : `data/pilot-batches/2026-08-25-physical-stock-pilot-10/ledger.json`
- file 175 : `data/catalogue-batches/2026-08-25-physical-stock-175/ledger.json`
- audit courant des 60 : `data/catalogue-batches/2026-08-25-physical-stock-175/audit-60/shopify-exact-identity.json`
- batch Sodalite V3 : `data/batches/2026-08-27-sodalite-visual-v3/`
- benchmark Iris : `data/outputs/bracelet-iris-dore-cornaline-grenat-rouge-aigue-marine-aa/`

La reconciliation se fait par EAN exact entre Sheet, ledger, source fournisseur, snapshots et Shopify. Ne jamais deduire l'identite par ressemblance visuelle ou titre approximatif.

## Les 20 produits encore DRAFT dans la cohorte des 60

| EAN | Product ID | Produit | Images | Etat de controle |
| --- | ---: | --- | ---: | --- |
| `3667407006164` | `10669293076827` | Bague doree en sodalite, taille 54 | 5 V3 | brouillon Sodalite a controler |
| `3667407006430` | `10669623476571` | Boucles Loa argentees sodalite | 5 V3 | brouillon Sodalite a controler |
| `3667407006683` | `10669293568347` | Boucles dorees sodalite, 36 mm | 5 V3 | brouillon Sodalite a controler |
| `3667407006713` | `10669294682459` | Bracelet dore amethyste, 16 a 21 cm | 6 ancien workflow | a controler, ne pas regenerer automatiquement |
| `3667407006768` | `10669625147739` | Bracelet Clea sodalite | 5 V3 | brouillon Sodalite a controler |
| `3667407007796` | `10670433993051` | Boucles Ornel hematite et lapis | 6 ancien workflow | validation physique Patrice obligatoire |
| `3667407008090` | `10669625966939` | Bracelet Horus sodalite | 5 V3 | brouillon Sodalite a controler |
| `3667407013186` | `10669294158171` | Bracelet sodalite et pierres bleues | 5 V3 | brouillon Sodalite a controler |
| `3667407013216` | `10669623968091` | Bracelet Calysta quartz rose et cristal | 6 ancien workflow | a controler, ne pas regenerer automatiquement |
| `3667407015593` | `10669860192603` | Bague ouverte argent et aigue-marine | 6 ancien workflow | validation physique Patrice obligatoire |
| `3667407018303` | `10669774831963` | Bracelet Murmure amethyste | 6 ancien workflow | a controler, ne pas regenerer automatiquement |
| `3667407018587` | `10669418283355` | Chapelet obsidienne | 5 V3 | images reprises, texte conserve, controle Patrice attendu |
| `3701459031078` | `10669417595227` | Bracelet cyanite | 6 ancien workflow | a controler, ne pas regenerer automatiquement |
| `3701459054732` | `10358581723483` | Encens Palo Santo | 6 ancien workflow | a controler |
| `3701459072507` | `10669416186203` | Coffret roller jade | 6 ancien workflow | anomalie visuelle corrigee le 2026-08-26, reste a controler |
| `3701459082018` | `10357427732827` | Boucles cornaline | 6 ancien workflow | a controler, ne pas regenerer automatiquement |
| `3701459098330` | `10669295272283` | Collier sodalite | 5 V3 | brouillon Sodalite a controler |
| `3701459098477` | `10669625344347` | Bracelet Halo sodalite | 5 V3 | brouillon Sodalite a controler |
| `3701459098934` | `10669626720603` | Bracelet Mira cristal | 6 ancien workflow | a controler, ne pas regenerer automatiquement |
| `3701459098958` | `10669627375963` | Bracelet Mira quartz rose et cristal | 6 ancien workflow | a controler, ne pas regenerer automatiquement |

Le fait qu'une galerie contienne six images indique seulement l'ancien workflow. Patrice a explicitement demande de ne pas reprendre automatiquement les produits deja crees. Une reprise se decide produit par produit apres controle visuel.

## Produits repris ou arbitres le 2026-08-27

### Sodalite, huit galeries V3 poussees sur des brouillons

- `10669293076827`, bague sodalite, EAN `3667407006164`
- `10669293568347`, boucles dorees sodalite, EAN `3667407006683`
- `10669623476571`, boucles Loa sodalite, EAN `3667407006430`
- `10669294158171`, bracelet sodalite et pierres bleues, EAN `3667407013186`
- `10669625147739`, bracelet Clea sodalite, EAN `3667407006768`
- `10669625344347`, bracelet Halo sodalite, EAN `3701459098477`
- `10669625966939`, bracelet Horus sodalite, EAN `3667407008090`
- `10669295272283`, collier sodalite, EAN `3701459098330`

Scope reel : galerie et alt texts uniquement. Aucun texte, prix, stock ou statut n'a ete modifie. Les huit sont encore `DRAFT` au dernier controle.

### Autres reprises

- Pendentif coeur sodalite `10357637546331` : enrichissement V3 complet texte et cinq images, produit `ACTIVE`. Il est bien vendu sans chaine ; la galerie montrant le pendentif seul est correcte.
- Chapelet sodalite `10522152436059`, EAN `3667407018617` : reprise V3 complete texte et cinq images, toujours `DRAFT`.
- Chapelet obsidienne `10669418283355`, EAN `3667407018587` : cinq nouvelles images V3, texte conserve, toujours `DRAFT`.
- Bracelet Iris `10669947781467`, EAN `3667407021495` : galerie entierement refaite en V3. Patrice a juge le resultat excellent et l'a passe `ACTIVE`. Ce produit devient le benchmark.
- Galet anti-stress aventurine `10669957775707`, EAN `3701459020850` : Patrice a confirme physiquement la forme creuse ; titre corrige de pierre roulee vers `Galet anti-stress en aventurine verte - 45 a 50 mm`, produit `ACTIVE`.

### Refus ou attentes encore ouverts

- Boucles Ornel `10670433993051` : produit non reconnu initialement par Patrice. Laisser `DRAFT`, aucune correction avant controle physique.
- Bague aigue-marine `10669860192603` : presence d'une pierre blanche contestee. Laisser `DRAFT`, aucune correction avant controle physique.

### Refus resolus

- Aventurine creuse : erreur de lecture resolue par controle physique de Patrice.
- Bracelet Iris : premiere scene humaine rejetee pour bras incoherent ; premiere macro V3 rejetee car medaillon trop grand. Galerie finale corrigee, validee et activee.
- Chapelets : anciennes photos produit jugees peu realistes ; les deux galeries V3 ont ete refaites, mais les produits attendent encore le controle final de Patrice.

## Les 15 prix manquants, tous bloques

Ne jamais inventer, arrondir ou calculer ces prix. Reprendre uniquement avec une preuve TTC authentique ou un override explicite de Patrice.

| EAN | Produit | Stock physique |
| --- | --- | ---: |
| `3701459065882` | Distributeur savon pierre brute quartz rose | 2 |
| `3701459069354` | Bouddha jaspe rouge | 1 |
| `3701459069927` | Calendrier avent modele 2 | 12 |
| `3701459069910` | Calendrier avent modele 3 | 1 |
| `3701459066896` | Calendrier avent modele 4 | 1 |
| `3701459055838` | Coffret decouverte purification | 1 |
| `3701459064779` | Grenouille quartz rose | 1 |
| `3701459060016` | Pierre roulee amethyste Bresil A, 40 a 50 mm | 1 |
| `3701459003600` | Pierre roulee amethyste Bresil AA, 20 a 30 mm | 10 |
| `3701459060023` | Pierre roulee aventurine verte A, 40 a 60 mm | 3 |
| `3701459049356` | Pierre roulee calcedoine bleue gangue | 2 |
| `3701459060122` | Pierre roulee obsidienne noire A, 40 a 50 mm | 5 |
| `3701459023387` | Pierre roulee quartz rose Bresil A, 30 a 40 mm | 18 |
| `3701459043132` | Porte-cles goutte quartz rose | 3 |
| `3701459065127` | Sphere jade Chine, 30 mm | 3 |

## Reprise exacte, lot 06 sans ecriture Shopify

Attention : le total traite 60 correspond a 10 pilotes plus 50 produits de la file principale. La prochaine position de file est donc `51`, pas `61`.

| Position | EAN | Produit |
| ---: | --- | --- |
| 51 | `3701459022113` | Bracelet boule 04 mm tourmaline multicolore AA |
| 52 | `3701459009053` | Bracelet boule 06 mm corail fossile A |
| 53 | `3701459055777` | Bracelet boule 06 mm jaspe heliotrope Bresil A |
| 54 | `3701459010646` | Bracelet boule 08 mm angelite A |
| 55 | `3701459035342` | Bracelet boule 08 mm chrysocolle Congo A+ |
| 56 | `3701459010882` | Bracelet boule 08 mm cornaline A |
| 57 | `3701459021895` | Bracelet boule 10 mm pierre de lune multicolore A+ |
| 58 | `3701459091928` | Bracelet boule 10 mm pierre de soleil noire orangee AA |
| 59 | `3701459084449` | Collier boule 04 mm amethyste Bresil A |
| 60 | `3701459084531` | Collier boule 04 mm apatite bleue A |

Les briefs peuvent etre lus, mais le lot ne doit etre ni genere ni pousse automatiquement. La nouvelle session commence en lecture seule, confirme avec Patrice la priorite, le rythme et le niveau de controle, puis demande les GO necessaires.

## Workflow visuel V3 definitif

### Les cinq roles fixes

1. `01-cover.png` : produit entier, seul, sur pierre claire, lecture immediate.
2. `02-macro-product.png` : vraie macro d'un detail d'achat utile. Le produit entier ne doit pas etre visible.
3. `03-editorial-contrast.png` : produit seul dans une nature morte franchement differente, par exemple noyer sombre et textile ivoire.
4. `04-calm-context-inset.png` : scene humaine calme et chaleureuse, avec une macro portee validee integree dans un rectangle horizontal arrondi. L'encart occupe 32 a 36 % de la largeur et 21 a 25 % de la hauteur.
5. `05-vivid-lifestyle.png` : scene humaine vive, contrastee, crediblement vecue et sans encart. Elle change decor, tenue, geste, distance camera et lumiere.

### Regles dures

- Exactement cinq images finales, carrees et normalisees en `1024x1024` sans etirement.
- Slots 1 a 3 : produit seul. Slots 4 et 5 : seuls slots humains d'un bijou porte.
- Une seule identite mannequin par produit. Repartition femme ou mixte : 70 % Chloé, 30 % Elena, comptee par produit. Chloé est le choix par defaut.
- Generer et accepter chaque actif separement. Aucun batch aveugle de cinq images.
- Fidelite source : type, nombre de perles ou elements, couleur, matiere, montage, metal, fermoir, chaine, medaillons et echelle relative.
- Une image belle mais disproportionnee est refusee.
- Peau avec pores, plis, veinules, tendons, pilosite fine et ongles naturels.
- Epaules, bras, coudes, poignets et mains doivent former une chaine continue. Refuser membre inverse, detache, du mauvais cote ou masque contre un mur, une roche, un arbre ou un objet.
- Aucun tee-shirt gris chine, piece froide et vide, decor generique, peau plastique ou main lisse.
- Galerie permanente : aucune saison, mois, rentree, fete, campagne ou selection temporaire. La personnalisation saisonniere appartient aux landings et modules de home.
- PASS technique, GO visuel Patrice, GO Shopify, GO stock et GO publication restent cinq gates distincts.

### Benchmark Bracelet Iris

Produit Shopify `10669947781467`, EAN `3667407021495`.

Le benchmark contient : cover claire, macro serree, nature morte noyer, Chloé calme avec encart macro et scene vive au bar en aubergine. Les sources, premieres images refusees, images finales et plan vivent dans :

`data/outputs/bracelet-iris-dore-cornaline-grenat-rouge-aigue-marine-aa/`

## Doctrine et pipeline Camilla

Fichiers canoniques locaux mis a jour :

- `AGENTS.md`
- `README.md`
- `docs/milaura-product-agent-contract.md`
- `docs/2026-06-08-runbook-lancer-generation-produit.md`
- `docs/2026-08-27-codex-native-image-workflow-v3.md`
- `prompts/image_generation_codex_native_v3.md`
- `deploy/camilla/milaura-product-generation/SKILL.md`, version `3.1.0`
- `scripts/test_camilla_readiness.sh`
- `scripts/replace_shopify_draft_gallery_v3.py`
- `/Users/paesano/Documents/Agentic-Ops/milaura-automation/agents/soul-camilla-v2.md`

Le schema, les scripts, prompts et tests du pipeline ont aussi ete alignes sur la version locale V1.3 a cinq images. Le workspace Agentic-Ops est volontairement tres dirty a cause d'autres chantiers ; aucun nettoyage, indexation ou commit global n'a ete effectue. Le workspace produit prive est ignore de Git.

Chemins VPS :

- hote : `/docker/hermes-milaura-control/data/milaura-generation-nouveau-produit`
- conteneur : `/opt/data/milaura-generation-nouveau-produit`
- SOUL : `/docker/hermes-milaura-control/data/profiles/camilla/SOUL.md`
- skill installe : `/docker/hermes-milaura-control/data/profiles/camilla/skills/productivity/milaura-product-generation/SKILL.md`

Artefacts Iris et Sodalite ont ete copies sur le VPS aux memes chemins relatifs sous `data/`.

Sauvegardes :

- locale : `/Users/paesano/Documents/Agentic-Ops/backups/camilla-product-workflow-20260827T1848CEST/`
- VPS : `/docker/backups/camilla-product-workflow-pre-20260827T185650CEST/`

Verification :

- local : `CAMILLA_*_READY`, `CONTRACT_V1_3_TEST_PASSED`, `PIPELINE_LOCAL_TESTS_PASSED`
- conteneur : memes resultats V1.3 et cinq images
- SOUL et skill installes relus avec regles 70/30, cinq images et benchmark Iris
- `hermes-milaura-control` redemarre seul, etat final `running`, `restarting=false`

## Theme et modal global

Le lien `Photos et variations naturelles` et son modal sont live sur toutes les PDP du template concerne :

- theme live : `190430282075`
- commit source : `68a4fa72`
- pullback : 2 fichiers sur 2 identiques
- checkpoint : `docs/checkpoints/2026-08-27-1805-chapelets-v3-modal-produit.md`

Aucun redeploiement theme n'a ete effectue pendant ce handoff.

## Gates de la prochaine session

1. Lecture seule et reconciliation EAN.
2. Etat des lieux a Patrice et confirmation des priorites.
3. GO creation locale avant generation.
4. GO visuel Patrice apres controle des planches.
5. GO Shopify distinct avant creation ou remplacement d'une galerie.
6. GO stock distinct avant tout changement de quantite.
7. GO publication distinct avant passage `ACTIVE` ou canal public.

Ne jamais deduire un GO du precedent. Un produit deja actif n'est pas modifie automatiquement. Un ancien visuel a six images n'est pas une anomalie a corriger sans demande.

## Prompt de reprise copiable

```text
Reprends l'inventaire MilAura au 2026-08-27 depuis /Users/paesano/Documents/MilAura website/dawn-X-milaura, dans une nouvelle session dediee. Ne relis pas l'ancienne conversation archivee et ne relance aucun batch automatiquement.

Lis integralement AGENTS.md, docs/project-state.md, docs/workstreams.md, docs/codex-handoff.md et docs/checkpoints/2026-08-27-1901-inventory-v3-final-handoff.md. Puis lis le workspace /Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation, ses AGENTS.md, README.md, le contrat produit, le runbook, le workflow image V3, les prompts et les deux ledgers.

Commence en lecture seule. Recontrole Shopify et le Sheet par EAN exact, car les statuts peuvent avoir change depuis le snapshot du 2026-08-27 vers 18:45 CEST. Le snapshot de fermeture est : 60 identites traitees, 40 ACTIVE, 20 DRAFT, 125 non traitees dont 110 en file et 15 BLOCKED_PRICE. La reprise exacte est le lot 06 positions 51 a 60, prepare localement mais sans aucune ecriture Shopify. Les boucles Ornel 10670433993051 et la bague aigue-marine 10669860192603 restent DRAFT en attente de validation physique Patrice.

Le workflow visuel V3 est definitif : cinq images, trois produit seules puis deux humaines ; vraie macro, nature morte contrastee, scene calme avec macro portee integree, scene vive distincte ; galerie permanente sans saison ; generation et controle slot par slot ; fidelite des proportions et anatomie comme gates dures. Bracelet Iris 10669947781467 est le benchmark valide. Camilla possede le meme workflow, son pipeline V1.3 et les preuves sur le VPS.

Rends d'abord a Patrice un etat des lieux court et demande ses priorites : activation des brouillons deja controles, verification des 20 DRAFT, controle physique Ornel et aigue-marine, chapelets, 15 prix manquants, puis ordre et rythme du lot 06. Ne modifie rien avant ses GO explicites. Separe toujours GO creation locale, GO visuel, GO Shopify, GO stock et GO publication.
```
