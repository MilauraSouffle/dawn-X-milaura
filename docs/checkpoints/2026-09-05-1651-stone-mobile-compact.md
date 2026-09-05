# Retour au format mobile precedent des cartes pierres

Date : 2026-09-05 16:51 CEST.

Patrice rejette l'agrandissement des cartes mobiles introduit avec les fleches et confirme que le desktop est parfait. Correction limitee au bloc CSS mobile de `assets/milaura-stone-pages.css` ; aucun changement Liquid ou JavaScript.

- Largeur rendue precedente retablie : 286 px, espacement entre cartes 16 px, apercu de la carte suivante au bord de l'ecran.
- Suppression de la hauteur minimale de texte de 260 px heritee du hub ; marges du lien revenues aux valeurs precedentes sur mobile seulement.
- Fleches conservees sur la photo ; leur largeur de positionnement et le pas du rail partagent la largeur de carte. Aucun code de glissement tactile reintroduit.
- Cadrages, couleurs, polices et desktop conserves.

Verification avant publication : styles calcules et dimensions des six premieres cartes identiques a la version avant fleches `fcd6524f` a 360, 390, 430 et 749 px. Desktop identique a `794febf0` a 768 et 1440 px. Navigation aller/retour des treize rangees a 390 px, clavier, mouvement reduit et redimensionnement conformes. Aucun debordement horizontal du document. Theme Check : 0 erreur, 16 avertissements historiques ; diff sans erreur.

Preuves locales : `/private/tmp/milaura-mobile-compact-20260905/`, rapport `candidate-qa.json` et captures. Simulation Chromium, pas de test sur iPhone physique. Preview `200974958939` reservee a la tache panier et non touchee.

Publication verifiee au 2026-09-05 16:53 CEST : source `85737031`, integration `98e158d6`, toutes deux poussees. Un seul CSS publie sur le theme live `190430282075`, sauvegarde prealable identique a la base puis pullback identique au commit. Recette publique repetee aux six largeurs ci-dessus : dimensions et styles mobiles precedents retrouves, desktop identique, treize rangees et clavier conformes. Rapport `live-qa.json` et captures dans le dossier de preuves. Travaux concurrents preserves, preview panier non touchee.
