# Actifs propriétaires pierre, périmètre final en preview privée

Date : 2026-09-12 18:38 CEST
Statut : `PASS TECHNIQUE, PREVIEW PRIVÉE CONFORME, LIVE INCHANGÉ`

## Décision de Patrice

- La page publique canonique `/pages/pierres-de-naissance` est conservée.
- La version `milaura-birthstones` créée dans ce lot est supprimée car elle faisait doublon.
- Son Hero desktop et mobile, préféré par Patrice, remplace uniquement les deux assets du Hero de la page canonique sur le thème privé.
- La page `milaura-study` est retirée du lot.
- L'idée d'une landing Ads avec questionnaire, avantage de 10 % et collecte email est conservée comme piste distincte. Aucun questionnaire, consentement marketing, remise, automatisation email, campagne ou dépense Ads n'est créé dans ce lot.

Le périmètre final comprend donc trois actifs propriétaires :

1. le sélecteur interactif de pierre ;
2. la matrice eau, soleil et sel ;
3. l'atlas photographique des pierres et de leurs imitations.

## Modifications du thème

Les nouveaux visuels ont été copiés bit pour bit vers les assets canoniques suivants :

- `assets/milaura-hero-editorial-hub-birthstone-desktop.webp` ;
- `assets/milaura-hero-editorial-hub-birthstone-mobile.webp`.

Les neuf fichiers retirés localement et du thème privé sont :

- `assets/milaura-hero-editorial-owned-birthstones-desktop.webp` ;
- `assets/milaura-hero-editorial-owned-birthstones-mobile.webp` ;
- `assets/milaura-hero-editorial-owned-study-desktop.webp` ;
- `assets/milaura-hero-editorial-owned-study-mobile.webp` ;
- `sections/milaura-owned-birthstones.liquid` ;
- `sections/milaura-owned-study.liquid` ;
- `snippets/milaura-owned-birth-months.liquid` ;
- `templates/page.milaura-birthstones.json` ;
- `templates/page.milaura-study.json`.

Le protocole devenu hors périmètre `docs/reference/2026-09-10-milaura-annual-study-protocol.md` est également retiré du dépôt. Les données, le générateur, les tests, le CSS et l'architecture ne couvrent plus que les trois actifs retenus.

## Vérification Shopify privée

- Thème de recette : `200974958939`, confirmé non publié.
- Thème live : `190430282075`, non touché.
- Sauvegarde exacte avant mutation : `/private/tmp/milaura-owned-retire-backup-20260912.NWKGXy`, 12 fichiers sur 12 présents.
- Push ciblé sans publication des deux assets canoniques et du CSS nettoyé.
- Suppression distante ciblée des neuf anciens fichiers, sans `--live`.
- Pullback final : `/private/tmp/milaura-owned-retire-final-pullback-20260912.NM3nCd`.
- Résultat du pullback : 3 fichiers actifs sur 3 identiques, 9 fichiers retirés sur 9 absents, aucun écart.

Les suppressions restent récupérables depuis le commit antérieur `b8dd86e4` et depuis la sauvegarde temporaire tant qu'elle existe.

## QA navigateur

Recette effectuée sur le thème privé avec une largeur mobile de 390 px et une largeur desktop de 1440 px.

### Page canonique Pierres de naissance

- un seul H1 `Pierres de naissance` ;
- Hero mobile chargé depuis `milaura-hero-editorial-hub-birthstone-mobile.webp`, largeur naturelle 1122 px ;
- Hero desktop chargé depuis `milaura-hero-editorial-hub-birthstone-desktop.webp`, largeur naturelle 1536 px ;
- douze onglets de mois et 34 liens produits présents ;
- aucun débordement horizontal ;
- composition visuelle mobile et desktop conforme.

### Trois actifs propriétaires

- H1, variante et Hero attendus pour le sélecteur, l'entretien et l'atlas ;
- assets mobiles de largeur naturelle 1122 px et assets desktop de largeur naturelle 1536 px ;
- CTA mobile et desktop de 44 px de haut avec cible interne existante ;
- aucun débordement horizontal ;
- composition visuelle mobile et desktop conforme.

### Routes retirées

Les deux vues suivantes retombent sur la page standard `Bijoux par pierre`, sans section dupliquée et toujours sur le thème privé :

- `?view=milaura-birthstones` ;
- `?view=milaura-study`.

Captures : `/private/tmp/milaura-owned-final-three-browser-20260912/`.

## Vérifications techniques

- générateur : `PASS: 8 stones, 3 generated snippets` ;
- tests Node : 6 sur 6 réussis ;
- syntaxe JavaScript : conforme ;
- copywriting MilAura : 348 fichiers contrôlés, PASS ;
- `git diff --check` : conforme ;
- Shopify Theme Check : 0 erreur, 16 avertissements historiques dans 8 fichiers, 372 fichiers inspectés.

## Gates restants

1. validation visuelle finale de Patrice sur les trois actifs et le Hero canonique ;
2. décisions Shopify Admin pour les trois pages seulement ;
3. intégration Git ;
4. GO live explicite distinct avant toute publication.

La future landing de génération de leads sera cadrée après ce lot. Elle devra séparer clairement participation, consentement marketing, remise, délivrabilité email, mesure du coût par lead et économie de la remise avant toute campagne.
