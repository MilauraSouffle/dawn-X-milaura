# Handoff Codex MilAura - 2026-08-06 07:21 CEST

## Décision actuelle

Le brainstorming homepage est terminé et le plan est validé par Patrice.

Les lots H1A et H1B sont publiés sur le thème live `190430282075`. H1A couvre la lisibilité, le CTA unique, la preuve logistique exacte, l'ancre interne et l'ordre produits puis portes. H1B remplace le prototype visuel par trois photographies produit officielles indépendantes et non régénérées par IA.

Patrice a donné son GO explicite de publication le 2026-08-05. La réception technique est complète. Le jugement créatif final sur le site réel reste le sien.

## Message de reprise à copier

```text
On reprend MilAura après la publication live ciblée des lots H1A et H1B du 2026-08-05, vérifiée par pullback le 2026-08-06 à 07:21 CEST.

Lis d'abord :
- /Users/paesano/Documents/MilAura website/dawn-X-milaura/AGENTS.md
- /Users/paesano/Documents/MilAura website/dawn-X-milaura/docs/project-state.md
- /Users/paesano/Documents/MilAura website/dawn-X-milaura/docs/codex-handoff.md
- /Users/paesano/Documents/MilAura website/dawn-X-milaura/docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md
- /Users/paesano/Documents/MilAura website/dawn-X-milaura/docs/superpowers/specs/2026-07-31-milaura-renouveau-commerce-design.md
- /Users/paesano/Documents/MilAura website/dawn-X-milaura/docs/checkpoints/2026-08-05-1135-milaura-panier-homepage-handoff.md

Contexte ferme :
- Le panier drawer est live et validé par Patrice.
- La rentabilité des paliers 30/50/80 EUR et les règles de cumul Shopify restent à vérifier avant Ads.
- Les corrections H1A et H1B sont live sur le thème `190430282075`.
- Les petits textes, les deux CTA, le triptyque incohérent et la preuve Vosges ont été corrigés.
- Les commandes sont préparées et expédiées depuis l'atelier MilAura à Metz.
- La formulation publique validée est `Expédiées depuis notre atelier en France`.
- Les pierres sont certifiées, les certificats fournisseur sont émis par LFG Paris.
- Ne jamais utiliser publiquement la référence déclarée à Cartier sans preuve et droit d'usage.

Lot H1A publié :
1. augmenter les textes courants, CTA, preuves, descriptions et liens du hero et des trois portes ;
2. conserver les grands titres actuels ;
3. supprimer le CTA secondaire ;
4. utiliser le CTA unique `Voir la sélection de l'atelier`, avec scroll interne ;
5. remplacer `Expédiées depuis les Vosges` par `Expédiées depuis notre atelier en France` ;
6. placer la section produit actuelle avant les trois portes avec une ancre interne stable ;
7. reformuler les trois portes comme une aide après les produits ;
8. conserver provisoirement le triptyque afin de ne pas mélanger typographie et image ;
9. vérifier 360, 390, 430, 768, 1280 et 1440 px, clavier, focus, contraste et débordements ;
10. GO live explicite reçu de Patrice ;
11. publication ciblée sur le thème live effectuée.

Vérifications H1A : JSON valide, Theme Check 0 erreur et 31 warnings préexistants. Push ciblé réussi sur la preview `199421952347`, puis sur le live `190430282075` après le GO de Patrice.

Lot H1B publié :
- bracelet aventurine verte Halo doré, photographie portée officielle recadrée ;
- collier quartz rose bohème doré, photographie portée officielle recadrée et zoomée ;
- distributeur de savon améthyste, photographie lifestyle officielle recadrée ;
- essais IA Chloé et homme rejetés, car les bijoux avaient été modifiés ;
- aucun mannequin homme dans ce lot ;
- aucune recréation IA du produit ;
- trois assets indépendants, 768 x 1152 px ;
- Theme Check 0 erreur, 31 warnings préexistants ;
- section et trois assets poussés d'abord sur `199421952347`, puis sur le live `190430282075` ;
- trois assets présents dans le HTML public ;
- un seul H1, CTA et preuve exacte confirmés dans le HTML public ;
- pullback ciblé des sept fichiers live effectué le 2026-08-06 ;
- sept paires d'empreintes SHA-256 identiques entre le lot publié et Shopify ;
- jugement visuel final du site réel réservé à Patrice.

Architecture homepage validée :
1. Hero de marque.
2. Sélection de l'atelier, quatre produits réels.
3. Trois portes comme aide pour les personnes encore indécises.
4. Votre bijou, imaginé avec Karine.
5. Création du moment.
6. Karine et les preuves d'atelier.
7. Cadeaux et mariage.
8. Journal.
9. Cercle MilAura.

Rôle du hero : présenter MilAura et conduire sans quitter la page vers quatre produits réels. Le CTA n'envoie pas vers une collection générique.

Recyclage validé :
- `Une pierre pour une émotion, comment choisir ?` devient une landing interactive et un composant partagé.
- Le diagnostic reste une page plus approfondie et la troisième porte.
- La vidéo atelier rejoint Karine et les preuves.
- Le rituel de purification rejoint le Journal, un guide ou les PDP.
- `Ça vient d'arriver` est absorbé par une collection ou la sélection produit.
- Les sections ne sont pas supprimées tant que leur nouvelle destination n'est pas opérationnelle.

Funnel émotionnel :
- landing de travail `/pages/choisir-sa-pierre` ;
- choix besoin, pierre correspondante, produits réels, preuve de Karine, panier ou diagnostic ;
- Meta et Pinterest préselectionnent l'émotion cliquée ;
- Google dirige selon la requête vers la landing besoin, la landing pierre ou la PDP ;
- aucun trafic avant stock, marge, claims, tracking et contribution validés.

Sur mesure :
- nom de travail `Votre bijou, imaginé avec Karine` ;
- CTA `Imaginer mon bijou` ;
- V1 sous forme de brief guidé avec type de bijou, style, pierres ou intention, taille, budget et inspiration ;
- validation humaine de faisabilité, prix et délai par Karine ;
- bracelet comme premier produit structuré ;
- autres créations accessibles par demande plus ouverte ;
- pas de centaines de variantes Shopify par défaut.

Etat Git dangereux :
- repo `/Users/paesano/Documents/MilAura website/dawn-X-milaura` ;
- branche `main` ;
- HEAD avant le commit ciblé de publication : `c9d9cc28` ;
- `main...origin/main` ahead 23, behind 312 ;
- worktree très sale avec du travail préexistant ;
- ne reset pas, ne clean pas, ne pull pas globalement et ne pousse jamais le thème entier.

Fichiers H1A :
- sections/milaura-hero-portal.liquid
- sections/milaura-choice-doors.liquid
- sections/milaura-featured-products.liquid, ancre stable uniquement
- templates/index.json
- éventuellement assets/milaura.css seulement si une règle réellement partagée l'exige

Fichiers H1B :
- sections/milaura-hero-portal.liquid
- assets/milaura-hero-aventurine-halo-worn-v1.webp
- assets/milaura-hero-quartz-rose-boho-worn-v1.webp
- assets/milaura-hero-soap-amethyst-v1.webp

Pour tout push futur :
- repartir si nécessaire des fichiers live ciblés dans `/private/tmp` ;
- préserver les autres réglages ;
- lancer Theme Check et vérifier le diff ;
- obtenir la validation créative de Patrice ;
- pousser uniquement les fichiers exacts avec `shopify theme push --only` ;
- vérifier le HTML public et le rendu réel.

Après H1A et H1B : réconciliation Git avant toute nouvelle grande section. La Sélection de l'atelier exige quatre produits comptés physiquement, reliés sans ambiguïté aux variantes Shopify et économiquement viables. Avant Ads, calculer la contribution restante dans le pire scénario des paliers 30/50/80 EUR et vérifier les règles de cumul Shopify.

Camilla reste séparée. Elle peut préparer des brouillons Shopify après contrôle, mais Patrice reste la seule personne qui publie.
```

## Documents de vérité

- `docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md`
- `docs/superpowers/specs/2026-07-31-milaura-renouveau-commerce-design.md`
- `docs/project-state.md`
- `docs/checkpoints/2026-08-05-1135-milaura-panier-homepage-handoff.md`

## Risque principal

Le risque immédiat est la divergence Git et le worktree très sale. Le lot live a été isolé depuis le thème public pour éviter de publier les nombreuses modifications historiques du `templates/index.json` local. Ne pas interpréter la réussite technique comme une validation créative définitive.
