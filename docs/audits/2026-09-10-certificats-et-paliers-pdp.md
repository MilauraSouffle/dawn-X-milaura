# Audit des rapports d authenticite et des paliers PDP

Date : 2026-09-10 11:05 CEST

Statut : recuperation fournisseur terminee, correction dormante preparee localement, aucune publication Shopify.

## Reponse directe

- Le portail public de Camille Ambiance Nature liste actuellement 340 rapports sur huit pages.
- Les 340 fichiers ont ete recuperes dans l archive privee MilAura, sans echec et sans doublon SHA-256.
- Le fournisseur presente ces documents comme des rapports emis par le LFG Paris sur des echantillons de lots. Ils ne certifient pas automatiquement chaque produit MilAura.
- Aucun autre laboratoire n a ete identifie dans le portail. L OCR local reconnait explicitement le LFG sur 278 scans, le reconnait probablement sur 27 scans anciens et reste indecis sur 35 scans basse resolution. Le portail fournisseur attribue l ensemble de la liste au LFG, mais les 35 scans indecis doivent etre relus manuellement avant une affirmation document par document.
- Le bandeau de preuve sociale PDP est une decision commerciale temporaire approuvee par Patrice. Il reste hors perimetre et ne constitue plus un blocage.

## Archive constituee

Source canonique : [Nos rapports d authenticite](https://camille-ambiance-nature.fr/rapport-analyse)

- pages : 8 ;
- rapports uniques : 340 ;
- fichiers : 251 JPEG et 89 PNG ;
- volume : 21 174 952 octets ;
- telechargements en echec : 0 ;
- doublons de contenu SHA-256 : 0 ;
- rapports avec une note fournisseur sur un traitement ou une finition : 87 ;
- numeros de rapport ou identifiants extraits par OCR : 340 sur 340, a verifier sur le scan avant publication ;
- dates extraites par OCR : 235 sur 340.

Archive privee :

`/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation/data/supplier-certificates/camille-ambiance-nature/`

Inventaires versionnes :

- `docs/audits/2026-09-10-camille-authenticity-reports.csv`
- `docs/audits/2026-09-10-camille-authenticity-reports.json`

Le manifeste prive `manifest-ocr.json` contient les champs OCR et leur niveau de confiance. Il reste hors Git car il contient la transcription complete des scans.

## Perimetre de preuve

La page fournisseur precise que les analyses portent sur un ou plusieurs echantillons selectionnes dans un meme lot et que toutes les pierres ou perles ne sont pas analysees individuellement. Deux fiches fournisseur representatives ont aussi ete controlees publiquement : un collier Jaspe rouge 06 mm et un chapelet Sodalite 06 mm. Elles affichent leur reference produit, mais aucun lien direct vers un rapport precis n a ete trouve.

En consequence :

- la landing MilAura peut presenter la demarche fournisseur et des rapports reels avec leurs limites ;
- un rapport ne doit pas etre presente comme le certificat individuel du bijou photographie ;
- un rattachement PDP exige une preuve supplementaire reliant la reference achetee ou son lot au rapport ;
- le texte global `Pierres naturelles certifiees par le LFG Paris` n est pas publiable en l etat ;
- la mention et le logo du LFG ne doivent pas etre detaches du scan ;
- `telechargement libre` ne vaut pas, a lui seul, autorisation de republication commerciale. Cette autorisation doit etre confirmee avant le live.

## Explication de `reward_threshold_1: 20`

Cette cle signifie : `premier palier de recompense a 20 euros` pour l ancien apercu des cartes a gratter dans la fiche produit.

Elle ne pilotait pas le systeme panier actif :

- `show_scratch` vaut `false` dans les templates produit actuels ;
- le drawer panier actif utilise les reglages globaux 30, 50 et 80 euros ;
- le pullback du theme public `190430282075` du 2026-09-10 ne contient aucun override de ces trois seuils, donc les valeurs par defaut 30, 50 et 80 euros du schema s appliquent ;
- la remise de 15 % et le cadeau doivent encore etre testes au checkout avant d etre promis dans le nouveau bandeau.

Correction locale preparee :

- `templates/product.milaura-produit.json` : 20 devient 30 ;
- `sections/milaura-cart-rewards.liquid`, ancienne section non montee : fallback, note et valeur par defaut 20 deviennent 30 ;
- `sections/milaura-product-hero.liquid` conserve encore son fallback historique a 20 car ce fichier est reserve par le chantier favoris. Tous les templates produit actuels gardent `show_scratch: false`, et le template MilAura fournit maintenant explicitement 30. Il n existe donc pas de decalage actif.

## Plan d implementation apres GO

### 1. Bandeau et rapports

1. Constituer une courte selection de rapports pertinents pour les pierres reellement vendues par MilAura.
2. Faire confirmer le droit de republication et, pour chaque rattachement PDP, la correspondance reference ou lot.
3. Creer la landing courte en preview avec le scan complet, le numero, la date, la pierre, le traitement eventuel et une legende explicite `rapport d analyse fournisseur sur echantillon`.
4. Remplacer le bandeau actuel par un composant compact a trois messages uniquement lorsque les trois destinations et les trois preuves sont pretes.

Formulation de travail la plus prudente avant rattachement produit : `Rapports d authenticite LFG disponibles. Voir les analyses.`

### 2. Selection de Karine

1. Recevoir de Patrice les 6 a 10 produits, le produit phare et la photographie retenue.
2. Transformer `/collections/selection-de-karine` en selection permanente multi-pierres avec les sections existantes.
3. Renvoyer le CTA Sodalite vers sa collection propre ou le repositionner.
4. Ne modifier la collection Shopify Admin qu apres le GO visuel et editorial.

### 3. Avantages panier

1. Tester les paniers a 29, 30, 49, 50, 79 et 80 euros.
2. Verifier le point relais au checkout, l ajout du cadeau, son stock, puis la remise de 15 %.
3. Tester le retrait d un produit sous chaque palier et le retour arriere automatique.
4. Publier le message du bandeau uniquement apres PASS sur mobile 360, 390 et 430 px et desktop 1440 px.

## Elements attendus de Patrice

- confirmation ecrite de Camille Ambiance Nature autorisant la republication des scans sur MilAura, ou documents transmis explicitement pour cet usage ;
- factures, bordereaux ou confirmation fournisseur permettant de relier les EAN ou lots MilAura aux rapports a afficher sur les PDP ;
- liste finale des 6 a 10 produits de la Selection de Karine, produit phare et photographie ;
- GO explicite pour construire la landing et le bandeau sur un theme de preview apres validation de ce cadrage.

## Validation technique

- telechargement : 340 sur 340, zero echec ;
- OCR local : 340 sur 340, zero echec ;
- `shopify theme check` : zero erreur, seize avertissements historiques hors lot ;
- theme public : lecture seule du seul `config/settings_data.json` ;
- aucun produit, metachamp, collection, media, theme preview ou theme live modifie.
