# Correction du glissement tactile de l'annuaire

Date : 2026-09-05 15:37 CEST.
Demande : Patrice signale que les fleches fonctionnent sur son iPhone, mais pas le glissement au doigt.

## Correction

- Le rail gere le glissement horizontal avec Pointer Events et suit le doigt pendant le mouvement.
- Le navigateur conserve le defilement vertical et le zoom. Le glissement court passe a la carte voisine ; les limites et l'alignement des trois cartes sont conserves.
- Les gestes horizontaux ne declenchent pas le lien de collection. Un toucher simple et les fleches restent fonctionnels. Le deplacement natif d'une image est desactive.
- La capture implicite du pointeur par l'image est transferee au rail sans interrompre le geste ; sa perte initiale ne doit pas etre traitee comme une fin de glissement.
- Le rendu des photos et les autres composants ne changent pas dans ce correctif.

## Preuves et limites

Le defaut signale sur l'iPhone physique n'a pas ete reproduit dans Chromium avant correction : le defilement natif y fonctionnait. La cause precise propre a cet iPhone reste donc non isolee. Le correctif rend le geste explicite, au lieu de dependre uniquement du comportement natif du rail.

Tests de gestes tactiles par Chromium/CDP, navigateurs isoles en configuration mobile 360, 390 et 430 : suivi pendant le geste, aller/retour sur image et texte, swipe court, defilement vertical, fleches, derniere carte et toucher ouvrant la bonne collection conformes. Theme Check : zero erreur, 16 avertissements historiques. Syntaxe JavaScript et diff conformes. Aucun test sur iPhone physique par Codex.

Preuves hors Git : `/private/tmp/milaura-touch-framing-20260905/`, fichiers `touch-audit.json` et `local-swipe-checks.json`. Le script utilise le Playwright deja fourni par le runtime, sans installation de dependance.

Fichiers du correctif : `assets/milaura-stone-directory.js`, `assets/milaura-stone-pages.css`, `sections/milaura-stone-directory.liquid`.

Le cadrage photo fait l'objet d'un lot visuel distinct dans la meme tache, avec revue privee avant publication.
