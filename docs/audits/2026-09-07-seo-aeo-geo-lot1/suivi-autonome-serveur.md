# Suivi autonome MilAura : contrat de reprise

Date : 2026-09-07. Specification prete ; aucun nouveau runtime serveur ou dashboard deploye.

## 1. Reutiliser le cockpit interne

Code verifie : /Users/paesano/Documents/Agentic-Ops/onora-command-center-v2.
Routes existantes : app/(dashboard)/kpi/page.tsx, app/api/kpi/ga4/route.ts, app/api/kpi/gsc/route.ts. Filtre MilAura present ; authentification Supabase. README annonce VPS Hostinger/PM2 port 4001. Etat du service distant et URL courante non verifies. Ne pas exposer les donnees sur le showreel public https://onora-dashboard.vercel.app/.

Defauts observes dans le code courant, a corriger avant qualification :
- GSC : total_clicks et total_impressions additionnent seulement les dix requetes retournees. Utiliser une requete agregee sans dimension pour les totaux et des requetes paginees pour le detail ; distinguer requetes anonymisees/manquantes du total complet.
- GA4 : requete tous canaux, pas de filtre Organic Search ; totalUsers journalier additionne, ce qui ne mesure pas les utilisateurs uniques de la periode ; bounceRate moyenne non ponderee. Requetes agregees appropriees et ratios ponderes necessaires.
- Periodes : dateAgo(30)..today est inclusive et inclut une journee partielle ; utiliser des fenetres closes de longueur egale (28 jours), fuseau propriete documente et delai GSC pris en compte.
- Collecte actuelle a l'ouverture, cache 30 minutes ; aucun historique SEO quotidien durable ni job planifie trouve dans les routes lues. Ne pas confondre fetch serveur et cron.

## 2. Collecteur sur serveur, pas sur Mac

Un job quotidien deterministe sur le VPS (timer systemd ou ordonnanceur serveur existant), avec verrou anti-chevauchement, reprise apres erreur, journal et donnees datees persistantes. Acces Google en lecture seule, credentials consommes par le runtime sans affichage ni copie dans le depot. Verifier l'identite et l'autorisation des comptes existants avant reutilisation. Aucune session Chrome requise.

GSC : propriete sc-domain:milaura.fr, clics/impressions/CTR/position, marque/hors marque, pages et requetes, six URL prioritaires. GA4 : propriete 525744334, sessions Organic Search, sessions engagees, achats/revenu du canal, source/support et landing page. Ne pas joindre arbitrairement requetes GSC et sessions GA4. Source et periode visibles sur chaque chiffre. Valeur indisponible = null avec cause, jamais zero invente.

Stockage prive avec historique immuable et table des changements (date exacte des publications, nouvelles mentions/liens). Isoler MilAura de tous les autres clients. Une ouverture du dashboard lit le dernier snapshot, sans devoir declencher un agent.

Ecran MilAura > Acquisition organique : objectif 280 sessions/28j, tendance 7/28j, six pages, requetes hors marque, visites IA identifiees, liens reellement publies et conversions. Afficher derniere collecte reussie, periode couverte et alerte donnees perimees.

IA : separer visites referrees depuis un moteur, mentions/citations mesurees par panel et reponses API. Un test API n'est pas une mesure de toutes les reponses du produit ChatGPT. Protocole, question, moteur, date, recherche active et preuves conserves. Pas de budget fournisseur ou d'API payante engage sans chiffrage et accord.

Bilans 2026-09-21, 2026-10-05 et 2026-10-19 a conserver. Le suivi local Codex mesure-seo-et-visibilit-ia-milaura est PAUSED ; ne le remplacer qu'apres qualification du serveur.

## 3. Redaction Hermes

Deux brouillons par semaine pour commencer, executes dans le runtime Hermes MilAura existant apres verification de son etat et de ses autres missions. Sources : requetes GSC, catalogue actuel, questions clients anonymisees et expertise reelle de Karine. Mettre a jour un article existant avant de creer un doublon d'intention. Pas de contenu tire uniquement des souvenirs du modele.

Pipeline : selection d'intention -> verification des sources/produits -> brouillon -> titre/meta/liens internes -> revue Karine -> publication uniquement apres validation. L'ordonnanceur declenche le travail ; Hermes redige ; le dashboard conserve le statut et le texte. La signature Karine n'implique pas une validation fictive. Aucun cron editorial active lors de la session du 2026-09-07.

Recette de livraison : execution distante sans navigateur local, deux passages sans doublon, redemarrage du service, journal de succes/erreur, recoupement GSC/GA4 sur une periode identique, dernier snapshot lisible depuis un autre appareil, isolation des donnees, un brouillon complet visible. Donner l'URL privee reelle et les commandes de desactivation/retour arriere avant de qualifier « autonome ».
