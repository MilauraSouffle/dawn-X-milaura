# Protocole de visibilité IA MilAura

Date : 2026-09-07. Statut : panel préparé, mesures natives non exécutées.

Objectif : mesurer la présence, la citation et l'exactitude de MilAura sur des intentions françaises ; distinguer ces résultats des publicités et des clics réels.

## Panel fixe de 20 demandes

1. Où acheter des bijoux en pierres naturelles en France ?
2. Quelle boutique choisir pour un bracelet en pierre naturelle ?
3. Où trouver une bague en argent et aigue-marine à moins de 80 euros ?
4. Quels bijoux en aigue-marine offrir pour un anniversaire ?
5. Comment choisir entre un bracelet en sodalite et un bracelet en lapis-lazuli ?
6. Où acheter un bracelet en sodalite à moins de 40 euros ?
7. Quel collier en quartz rose offrir ?
8. Comment choisir la taille d'un bracelet en pierre ?
9. Comment reconnaître une pierre naturelle sur une fiche produit ?
10. Quelles informations vérifier avant d'acheter une bague en argent 925 ?
11. Quelle pierre de naissance correspond au mois de mars ?
12. Quel bijou offrir avec la pierre du mois de naissance ?
13. Quel bijou offrir pour 17 ans de mariage ?
14. Quel cadeau en pierre naturelle choisir à moins de 50 euros ?
15. Comment entretenir une bague en aigue-marine et argent ?
16. Quelles pierres sont associées à la confiance en lithothérapie ?
17. Quels bracelets choisir pour leur symbolique de protection ?
18. Quelle différence entre une pierre teintée et une pierre naturelle non traitée ?
19. Que vend la boutique MilAura sur milaura.fr ?
20. Où est située MilAura et comment commander ses bijoux ?

## Exécution et conservation

Moteurs séparés : ChatGPT avec recherche web, Perplexity, Gemini et Copilot. Nouvelle conversation pour chaque demande, langue française, localisation et compte consignés, aucun contexte de marque sauf les questions 19 et 20. Deux passages par demande, à une semaine d'intervalle, sans fusionner versions ou modes différents. Une indisponibilité du moteur vaut NA, pas zéro. Aucun coût API engagé sans périmètre approuvé.

Champs : date/heure, moteur, version/mode affiché ou inconnu, pays, prompt exact, numéro du passage, recherche activée, mention MilAura oui/non, domaine cité, URL exacte, marques concurrentes, exactitude du prix/disponibilité/identité, publicité présente séparément, chemin de preuve. Conserver les réponses complètes hors Git et leur empreinte ; versionner les observations compactes sans données personnelles.

## Indicateurs

- Présence hors marque = réponses valides mentionnant MilAura / réponses valides aux questions 1 à 18, par moteur et passage.
- Citation = réponses valides contenant un lien milaura.fr / même dénominateur.
- Exactitude = affirmations vérifiées exactes / affirmations vérifiables sur MilAura. Une information non vérifiée reste inconnue.
- Clics et achats = sessions et commandes attribuables aux domaines référents IA dans GA4, avec la réserve des referrals absents. Les visites serveur de robots ne sont pas des acheteurs.

Objectif initial : établir une première mesure complète sans confusion de marque, puis comparer les mêmes demandes après publication et recrawl. Aucun objectif chiffré de gain tant que la base n'existe pas. Les résultats sont variables et ce panel ne représente pas tous les utilisateurs.
