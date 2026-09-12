# Architecture des actifs propriétaires pierre MilAura

Date : 2026-09-10

Statut : preview privée, PASS technique et GO visuel Patrice en attente

## Périmètre

Ce lot crée trois surfaces indépendantes :

1. sélecteur interactif de pierre ;
2. matrice eau, soleil et sel ;
3. atlas photographique et repères sur les imitations.

La page publique `/pages/pierres-de-naissance` couvre deja le calendrier et le parcours cadeau. La version privee ajoutee dans ce lot a ete retiree le 2026-09-12 pour eviter un doublon. Son Hero desktop et mobile est conserve sur la destination canonique. La piste d une landing Ads avec questionnaire, avantage et collecte email est differee dans un chantier distinct.

Les produits, stocks, prix, médias Shopify, handles et contenus Admin restent inchangés. Les photographies sont relues depuis le template `Bijoux par pierre` et réutilisées sans retouche.

## Source de vérité

- Données éditoriales et scientifiques : `data/milaura-owned-stones.json`.
- Générateur : `scripts/build_owned_stone_assets.py`.
- Snippets générés : `snippets/milaura-owned-*.liquid`.
- Interface : `assets/milaura-owned-stone-guides.css` et `assets/milaura-owned-stone-guides.js`.
- Pages : `sections/milaura-owned-*.liquid` et `templates/page.milaura-*.json`.

Toute modification d'une pierre commence dans le JSON. Le générateur valide les identifiants, les sources, les routes de collection, les photographies Shopify et les trois statuts d'entretien. `python3 scripts/build_owned_stone_assets.py --check` détecte ensuite un snippet absent ou périmé.

## Contrat de données

Chaque pierre possède :

- un identifiant stable ;
- un nom visible et une famille minéralogique ;
- une dureté de Mohs donnée comme repère, jamais comme garantie de résistance globale ;
- plusieurs intentions de lithothérapie et familles de couleur ;
- une photographie Shopify existante avec légende exacte ;
- une collection commerciale principale et, si nécessaire, des liens secondaires ;
- un statut et un conseil détaillé pour l'eau, le soleil et le sel ;
- des repères visuels, confusions fréquentes et une limite d'identification ;
- la liste des sources utilisées.

Les comptes produits ne sont pas écrits dans le texte ou la donnée. Ils évoluent dans Shopify.

## Parcours du sélecteur

Le sélecteur complète le diagnostic émotionnel sans le reproduire. Trois axes facultatifs restent visibles : intention, couleur et niveau de précaution. Le calcul additionne les correspondances, classe les pierres et montre les quatre meilleures réponses. Un choix d'intention pèse davantage qu'une couleur, elle-même plus forte que l'entretien.

Sans JavaScript, les huit pierres et leurs liens restent présents dans le HTML. Avec JavaScript, chaque changement met à jour le classement et annonce le nombre de résultats dans une zone `aria-live`. Aucun profil n'est stocké dans le navigateur.

## Règle de la matrice

La matrice protège un bijou monté, pas seulement un minéral isolé. Elle retient la précaution la plus forte entre la pierre, un traitement possible et la monture.

- `Nettoyage doux` : méthode de nettoyage documentée comme sûre, avec rinçage bref et séchage.
- `Prudence` : chiffon humide, test discret ou limitation de l'exposition.
- `Éviter` : pas de contact recommandé dans ce contexte.

Le sel sec et l'eau salée restent déconseillés pour tous les bijoux montés. Cette règle est une décision conservatoire MilAura, pas une propriété gemmologique attribuée à chaque pierre.

## Direction d'interface

Mode principal : `Operate` pour le sélecteur et la matrice, `Read` pour l'atlas.

Le lot étend la direction MilAura existante. Il ne crée ni nouvelle palette, ni nouvelle police, ni nouveau symbole.

- Couleurs : tokens Nacre, Encre prune, Or mat, Aigue-marine et Améthyste existants.
- Typographie : Gloock pour les titres, Instrument Sans pour les contrôles et la lecture, Dancing Script uniquement dans les emplacements déjà prévus par la charte.
- Structure : photographie réelle, filets fins, surfaces transparentes et actions soulignées.
- Mouvement : un seul geste, le reclassement des résultats après un choix. Le contenu reste visible avant l'activation JavaScript.

### Structures étudiées

1. Plateau partagé, filtres fixes et résultats photographiques. Retenu pour voir immédiatement l'outil fonctionner.
2. Questionnaire par étapes. Écarté car il duplique le diagnostic émotionnel existant.
3. Matrice d'abord, produits ensuite. Écarté car l'entretien prendrait le pas sur le désir de choisir.
4. Long récit éditorial avant l'interaction. Écarté car il retarde l'action sur mobile.
5. Cinq outils dans des onglets sur une seule page. Écarté car il affaiblit l'indexation et rend les URL moins explicites.

### Wireframes

Mobile :

```text
[H1 + explication]
[conseil de Karine]
[intention]
[couleur]
[entretien]
[statut des résultats]
[photo][photo]
[nom  ][nom  ]
[lien ][lien ]
```

Bureau :

```text
[H1                         ][explication + conseil]
[filtres fixes              ][résultats photographiques]
[intention                  ][photo][photo][photo]
[couleur                    ][nom  ][nom  ][nom  ]
[entretien                  ][lien ][lien ][lien ]
```

Le plateau partagé est propre à ce besoin : le visiteur garde ses critères sous les yeux pendant qu'il compare de vraies pièces MilAura. Il évite la pile de cartes génériques et le faux diagnostic.

## Direction contract

**THESIS:** un plateau de comparaison photographique garde les critères et les bijoux visibles ensemble. Il refuse le questionnaire par étapes qui dupliquerait le diagnostic émotionnel existant.

**OWN-WORLD:** Nacre en fond, Encre prune pour la lecture, Aigue-marine pour les états et Or mat pour les filets. Gloock porte les titres, Instrument Sans les contrôles. Les photographies Shopify réelles, les surfaces transparentes et les actions soulignées restent les seuls matériaux.

**STORY:** la cliente comprend qu'elle peut partir de son intention, de sa couleur ou de ses contraintes d'entretien. Elle compare plusieurs réponses, lit leur limite puis rejoint une collection réellement disponible.

**FIRST VIEWPORT:** sur mobile, le titre, l'explication et le conseil de Karine précèdent immédiatement les trois groupes de choix, puis les résultats commencent en deux colonnes. Sur bureau, le titre et l'explication se répondent, puis les filtres occupent la colonne gauche face à trois résultats photographiques.

**FORM:** plateau partagé, option 1 sur les 5 structures étudiées. Aucun seed key n'a été généré : il s'agit d'une extension locale d'un monde existant et la procédure Impeccable interdit le concept roll dans ce cas. L'interaction signature est le reclassement immédiat de quatre pierres au plus, sans masquer le contenu avant JavaScript.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Pages privées proposées

- `page.milaura-stone-finder.json`
- `page.milaura-stone-care.json`
- `page.milaura-stone-atlas.json`

Avant création de pages Shopify Admin, les previews utilisent une page existante avec un paramètre `view`. Les handles publics, titles SEO, metas et navigation seront décidés dans un gate Admin séparé après validation visuelle.

## Sources retenues

- Gemological Institute of America pour l'entretien.
- CIBJO pour la distinction entre pierre naturelle, produit synthétique et imitation.
- Mindat pour les propriétés minéralogiques de la sodalite.

La date de consultation est conservée dans le JSON. Une révision de source ne modifie jamais silencieusement un contenu live.

## Gates

1. validation des données et génération ;
2. Theme Check, tests, accessibilité et responsive ;
3. preview Shopify privée ;
4. validation visuelle Patrice ;
5. décision des URL et création Admin ;
6. intégration ;
7. live sur GO explicite.
