# Checkpoint MilAura - Atelier des emotions V3 gabarit

Date : 2026-08-16 11:24 CEST

Statut : workflow de gabarit implemente et valide techniquement sur le theme prive, aucun live

## 1. Decision appliquee

La composition commence maintenant par deux choix physiques places au-dessus du bracelet :

- Enfant, 14 a 16 cm ;
- Femme, 16 a 18 cm ;
- Homme, 18 a 20 cm ;
- pierres 04 mm, 06 mm ou 08 mm.

Le parcours continue ensuite avec `Message`, `Pierres` et `Charms`. Cette sequence remplace une approche qui commencait directement par le mot sans avoir defini le gabarit du bracelet.

Les six valeurs sont des choix valides pour la maquette par Patrice. Elles restent non commandables et ne promettent pas un nombre exact de pierres avant validation du montage physique par Karine.

## 2. Comportement livre

- deux jauges fines, sans cartes ni gros boutons remplis ;
- choix par boutons radio natifs et accessibles au clavier ;
- choix initial `Femme, 16 a 18 cm` et `06 mm` ;
- modification du rayon du bracelet selon Enfant, Femme ou Homme ;
- modification du diametre visuel des emplacements selon 04, 06 ou 08 mm ;
- synthese centrale mise a jour a chaque choix ;
- annonce accessible du gabarit selectionne ;
- vocabulaire de composition renomme `Message`, `Pierres`, `Charms` ;
- achat toujours verrouille et aucun formulaire panier rendu.

## 3. Isolation

- branche : `codex/milaura-atelier-emotions-20260816` ;
- worktree : `/Users/paesano/Documents/MilAura website/_worktrees/atelier-emotions-20260816` ;
- theme Shopify non publie : `200007713115`, `MilAura Atelier emotions DEV 2026-08-16` ;
- preview : `https://milaura.fr/pages/contact-milaura?view=atelier-emotions&preview_theme_id=200007713115` ;
- live `190430282075` non touche ;
- theme partage `199421952347` non touche.

## 4. Fichiers du lot V3

- `sections/milaura-atelier-configurator.liquid` ;
- `assets/milaura-atelier.css` ;
- `assets/milaura-atelier.js` ;
- `docs/superpowers/specs/2026-08-16-milaura-atelier-emotions-v1.md` ;
- `docs/workstreams.md` ;
- ce checkpoint.

## 5. Validation executee

### Code et Shopify

- `git diff --check` : succes ;
- `node --check assets/milaura-atelier.js` : succes ;
- Theme Check : zero erreur et zero avertissement sur les fichiers Atelier ;
- push cible des trois fichiers de theme vers `200007713115` : succes ;
- pullback cible : trois fichiers sur trois identiques ;
- aucun live et aucune suppression distante.

### Workflow et responsive

- neuf combinaisons Enfant, Femme, Homme avec 04, 06, 08 mm testees a 360 px ;
- un contact initial de 1,2 px sur `Enfant + 08 mm` detecte puis corrige ;
- clearance finale du cas limite : 0,37 px ;
- toutes les pierres restent dans la table circulaire ;
- aucun chevauchement avec le portrait de Karine ;
- zero debordement horizontal a 360, 390, 430 et 1440 px ;
- changement de taille par fleche clavier : succes ;
- onglets Pierres et Charms : panneaux correspondants visibles ;
- mot `LIBRE` : cinq lettres rendues et conservees pendant les changements de gabarit ;
- console finale : zero erreur ;
- aucun formulaire Atelier dans l'etat maquette.

## 6. Captures de decision

- mobile 390 px, Homme et 08 mm : `/Users/paesano/.codex/visualizations/2026/08/16/01a00903-f2d0-7110-a703-f27d9dd9ceb3/atelier-emotions-v3-sizing-mobile-390.png` ;
- desktop 1440 px, Femme et 06 mm : `/Users/paesano/.codex/visualizations/2026/08/16/01a00903-f2d0-7110-a703-f27d9dd9ceb3/atelier-emotions-v3-sizing-desktop-1440.png`.

## 7. Limites et prochaine etape

1. Le nombre de vingt-quatre emplacements reste une convention visuelle, pas un calcul de consommation.
2. Les pierres exactes et les charms doivent maintenant venir de l'inventaire reel avec photo, quantite et compatibilite.
3. Karine doit confirmer pour chaque combinaison la longueur utile, le fil, le nombre de pierres, la place des lettres et la faisabilite des charms.
4. Apres ce gate physique, la maquette pourra devenir une vraie composition pierre par pierre et transmettre taille, diametre, pierres, message et charm dans la commande Shopify.
