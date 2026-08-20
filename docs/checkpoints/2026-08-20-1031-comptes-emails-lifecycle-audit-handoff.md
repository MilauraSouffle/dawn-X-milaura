# Audit comptes, consentements, emails et lifecycle - Handoff

Date : 2026-08-20 10:31 CEST
Statut : audit ferme en lecture seule, aucun changement Shopify ou live.

## Decision de passage de relais

Cette session doit etre fermee proprement. La suite doit etre reprise dans une session fraiche activee en mode Plan.

La prochaine session ne doit pas refaire l audit. Elle doit partir des faits verifies ci-dessous et produire le plan d execution detaille du premier lot `E1 - Verite canonique`, puis seulement les lots suivants. Elle ne doit pas modifier le live pendant la phase Plan.

## Perimetre audite

- type de comptes Shopify et comportement apres inscription ;
- persistance actuelle du diagnostic et restitution dans Mon Ecrin ;
- cookies, consentements Preferences, Analytics et Marketing ;
- notifications transactionnelles Shopify ;
- Shopify Flow et Shopify Messaging ;
- captures newsletter du theme ;
- etat visible de Klaviyo, Judge.me et Shopify Forms ;
- sources locales du theme et de `milaura-automation` ;
- architecture cible C1 et tests requis.

Sont restes strictement hors perimetre :

- le cross-sell live ;
- l Atelier des emotions ;
- ScratchToReveal, qui reste reserve a une session dediee future ;
- tout envoi reel a une cliente ;
- toute edition de theme, email, Flow, application ou parametre Shopify.

## Etat Git canonique

- depot : `/Users/paesano/Documents/MilAura website/dawn-X-milaura` ;
- branche canonique : `codex/milaura-integration` ;
- base verifiee avant ce handoff : `145e25d409a3d6d9122d9705722b66cbc0100066` ;
- local et `origin/codex/milaura-integration` etaient alignes et propres ;
- aucune pull request ouverte n a ete trouvee pendant l audit ;
- `assets/milaura-preference-storage.js` est deja dans le canonique et sur le live ;
- il ne faut pas chercher a l integrer separement.

`origin/main` reste un miroir automatique Shopify incomplet. Le commit miroir `1dccd18c` omet `assets/milaura-preference-storage.js`, alors que le live a ete prouve par pullback 7/7. Ne pas fusionner `origin/main` dans le canonique et ne pas utiliser son arbre seul pour reconstruire le lot.

Toute nouvelle session doit partir de `origin/codex/milaura-integration` a `145e25d4` ou plus recent.

## Faits confirmes au 2026-08-20

### Cookies et consentements

- Le bandeau gemme MilAura est le seul bandeau visible sur un chargement public frais.
- Le bandeau Shopify natif reste un secours si l API de confidentialite ne charge pas.
- La configuration Shopify affiche le consentement dans 27 regions.
- Les choix exposes sont Preferences, Mesure d audience et Marketing, avec `sale_of_data` seulement si Shopify l exige.
- `Gerer mes cookies` permet de rouvrir les choix.
- Shopify Network Intelligence est actif.
- Le diagnostic navigateur est maintenant soumis au consentement Preferences.
- Un refus ou retrait purge le stockage local et les attributs panier du diagnostic.

### Comptes et inscription

- Les comptes clients classiques a mot de passe sont actifs.
- Shopify marque ces comptes legacy comme deprécies.
- Les liens de compte sont affiches et Shop login est actif.
- L URL de compte est `https://milaura.fr/account`.
- Le formulaire d inscription theme collecte prenom, nom, email et mot de passe.
- Ce formulaire ne contient aucun opt-in marketing.
- La creation d un compte reste donc distincte du consentement email ou SMS.
- Le comportement reel complet apres inscription doit encore etre certifie par un parcours de test controle.

Un Flow actif nomme `Nouvelle inscription client - Notification` se declenche sur `Customer created` et envoie un email interne a `contact@milaura.fr` avec le sujet `Nouvelle inscription sur MilAura`. Ce n est pas une bienvenue marketing envoyee a la cliente.

### Consentement marketing au checkout

- L opt-in email est affiche dans `Paiement et connexion`.
- La preselection automatique est limitee aux Etats-Unis.
- L opt-in SMS n est pas affiche.
- Le double opt-in marketing est desactive.
- Les consentements compte, email, SMS, cookies et personnalisation doivent rester cinq contrats distincts.

### Diagnostic et Mon Ecrin

- `window.MilauraPreferenceStorage` centralise le stockage navigateur du diagnostic.
- Le resultat est seulement restaure si Preferences est autorise.
- Mon Ecrin lit actuellement ce stockage du navigateur.
- Il n existe aucune lecture serveur du diagnostic par Mon Ecrin.
- Il n existe donc aucune persistance entre appareils.

Un Flow actif nomme `New Workflow` se declenche sur `Order created`. S il trouve l attribut de commande `quiz_profile`, il ajoute le tag client `profil:<value>` et ecrit le metafield client `milaura.last_profile_handle`. Ce Flow, modifie pour la derniere fois le 2026-03-26, ne constitue pas C1 :

- il ne s execute qu apres une commande ;
- Mon Ecrin ne lit pas ce metafield ;
- il ne stocke pas le diagnostic complet ;
- aucune purge serveur n est reliee au retrait du consentement Preferences.

### Notifications transactionnelles

Les apercus Admin verifies couvrent :

- activation du compte ;
- bienvenue du compte ;
- reinitialisation du mot de passe ;
- confirmation de commande ;
- confirmation et mise a jour d expedition ;
- annulation ;
- remboursement ;
- carte cadeau.

Constats :

- les modeles live sont personnalises, mais utilisent encore l ancienne identite Or `#C0A062` ;
- les textes contiennent plusieurs accents manquants ;
- la bienvenue compte promet un profil et des recommandations durables qui ne sont pas encore construits ;
- aucun `BIENVENUE10` n a ete trouve dans les notifications transactionnelles auditees ;
- la carte cadeau live montre le code complet dans l apercu Admin ;
- le fichier local `email-templates/10-carte-cadeau.html`, qui ne montre que `last4` et aucun lien d utilisation, est obsolete et ne doit jamais etre copie vers le live ;
- l utilisation reelle d une carte cadeau depuis l email reste a tester de bout en bout.

L expediteur Shopify est `contact@milaura.fr` et le domaine est marque authentifie par Shopify. Le DMARC public verifie est `v=DMARC1; p=none; rua=mailto:contact@milaura.fr`.

### Shopify Messaging et lifecycle

Etat parent verifie dans Shopify Admin :

| Automation | Etat parent | Conclusion |
| --- | --- | --- |
| Bienvenue newsletter - BIENVENUE10 | inactive | Ne doit pas etre reactivee. Les trois emails enfants affichent encore Active, mais le parent inactif empeche l envoi. |
| Convertir la consultation de produit abandonnee | active | Flux marketing actuel a versionner et certifier. |
| Recuperer le panier abandonne | active | Flux marketing actuel a versionner et certifier. |
| Recuperer le paiement abandonne | active | Flux marketing actuel a versionner et certifier. |
| Remercier les clients apres leur achat | inactive | Ne pas activer avant reconstruction et tests. |
| Deux workflows anniversaire | inactifs | Les laisser inactifs. |
| ARCHIVE - NE PAS ACTIVER - ancien checkout urgence | inactive | Ne jamais reactiver. |

Les trois flux actifs ciblent des abonnes marketing. Leurs sujets sont actuellement :

- `Ce produit vous appelait peut-etre` ;
- `Votre panier MilAura vous attend` ;
- `Votre commande MilAura est presque prete`.

Leur contenu audite ne contient pas de fausse urgence et comporte un lien de desabonnement.

Logique verifiee :

- consultation : attente 2 h, absence de nouvelle consultation, panier, checkout ou commande, exclusion d abandon 14 jours, produit en stock ;
- panier : attente 1 h, absence de nouveau panier, checkout ou commande, exclusion 14 jours, produit en stock ;
- checkout : attente 10 h, checkout en ligne, total superieur a zero, absence de commande ou nouveau checkout, produit en stock.

Les options Shopify de remarketing Shop sont actives pour le panier, le retour en stock, la baisse de prix et la consultation abandonnee. Elles doivent etre incluses dans le futur audit de deduplication.

### Capture newsletter et applications

- Le formulaire newsletter du footer est actif et abonne le profil au marketing Shopify.
- Ce footer n est pas un popup et peut rester la capture sobre avant ScratchToReveal.
- Le popup newsletter et la bulle flottante sont desactives dans `sections/footer-group.json`.
- Leurs fichiers restent dans le depot et representent environ 3 205 lignes de code mort avec des references `BIENVENUE10`.
- Leur suppression definitive appartient a un lot theme separe.
- Shopify Forms est installe, mais aucun formulaire n est cree.
- Klaviyo est installe et son app embed theme est desactive.
- L application Klaviyo demandait une mise a jour de permissions. Elle n a pas ete acceptee, donc les flows Klaviyo restent non verifies.
- Judge.me est installe, mais son interface reste au premier ecran d onboarding. Aucun flux de demande d avis n est prouve.

### Sources locales et automatisations externes

- Aucun export executable Shopify Flow ou Shopify Messaging n est versionne.
- `n8n-payloads/` est vide.
- `n8n-workflows-milaura/workflow-specs.md` decrit un workflow a creer ou importer, pas un workflow deploye.
- Les anciens modeles Messaging vivent seulement dans `private-workspace/legacy-theme-context`.
- Le dossier actif du theme ne contient plus `email-templates/messaging/`.
- Les dix fichiers de `email-templates/` sont des archives de l ancienne direction artistique, pas une source live fiable.

Le Worker de retour produit est le seul flux transactionnel externe avec code courant et ancienne preuve d envoi Resend. Restent ouverts : idempotence, KV, domaine propre, tests automatiques et confirmation de rotation du secret.

## Architecture C1 recommandee

### Decision structurante

Ne pas construire le C1 definitif sur les comptes classiques deprécies. Ne pas basculer les comptes live maintenant.

Construire d abord une preview des nouveaux comptes clients Shopify, puis une extension pleine page `Mon Ecrin` avec le target `customer-account.page.render`.

Architecture cible :

1. Le diagnostic invite reste local au navigateur et soumis a Preferences.
2. Une action distincte propose `Enregistrer mon diagnostic dans Mon Ecrin`.
3. Cette action recueille un consentement explicite de personnalisation, distinct des cookies et du marketing.
4. Un jeton opaque, signe, a usage unique transmet le diagnostic a l extension de compte. Aucune donnee brute ne passe dans l URL.
5. L extension lit et ecrit les metafields client via Customer Account API.
6. Le retrait efface les metafields serveur, le stockage local et les attributs panier.
7. L ancien Flow `Order created -> quiz_profile` est desactive ou remplace quand le nouveau contrat est certifie.
8. La bascule des comptes live intervient seulement apres parite et GO explicite.

Metafields proposes :

- `milaura.diagnostic_v1` ;
- `milaura.profile_handle` ;
- `milaura.diagnostic_updated_at` ;
- `milaura.personalization_consent_at` ;
- `milaura.personalization_consent_version`.

Prerequis Shopify :

- application Shopify dediee ou composant existant clairement proprietaire ;
- scopes Customer Account API necessaires ;
- approbation des donnees clientes protegees ;
- contrat d export, correction et suppression ;
- preview des nouveaux comptes sans bascule live.

References officielles :

- https://help.shopify.com/en/manual/customers/customer-accounts/upgrade
- https://shopify.dev/docs/apps/build/customer-accounts/full-page-extensions
- https://shopify.dev/docs/apps/build/customer-accounts/metafields-in-customer-accounts
- https://shopify.dev/docs/api/customer-account-ui-extensions/latest

## Matrice des flux existants et manquants

| Famille | Flux | Etat prouve | Manque avant fermeture |
| --- | --- | --- | --- |
| Cookies | Consentement gemme et preferences | live | certification periodique et controle de regression |
| Diagnostic | Persistance navigateur consentie | live | source serveur et inter-appareils |
| Mon Ecrin | Lecture locale | live sur le meme navigateur | extension compte et metafields client |
| Compte | Creation classique | live | parcours apres inscription, migration nouveaux comptes |
| Compte | Activation, bienvenue, reset | live, ancienne DA | contenu exact, DA actuelle et tests reels |
| Inscription | Notification interne | active | deduplication et utilite a confirmer |
| Marketing | Footer newsletter | live | test complet opt-in, email, retrait et reinscription |
| Marketing | Ancienne bienvenue BIENVENUE10 | inactive | suppression ou archivage definitif |
| Lifecycle | Consultation abandonnee | active | source versionnee, consentement, arret et deduplication |
| Lifecycle | Panier abandonne | active | source versionnee, consentement, arret et deduplication |
| Lifecycle | Checkout abandonne | active | source versionnee, consentement, arret et deduplication |
| Lifecycle | Post-achat | inactive | contenu utile et tests |
| Lifecycle | Demande d avis | non prouvee | decision et configuration Judge.me |
| Lifecycle | Winback, repeat, VIP | absent | modele economique, consentement et frequence |
| Transactionnel | Commande, livraison, annulation, remboursement | live, ancienne DA | sources exactes, variables et tests par evenement |
| Transactionnel | Carte cadeau | apercu live fonctionnel | test reel du code et du lien |
| Transactionnel | Retour produit | Worker courant | idempotence, KV, tests, domaine et secret |
| Capture | Popup et bulle newsletter | desactives | suppression definitive du code mort |
| Capture | ScratchToReveal | futur | session dediee apres C1 |

## Tests requis

### Git et sources

- partir de `origin/codex/milaura-integration` a `145e25d4` ou plus recent ;
- verifier la branche, les worktrees et `docs/workstreams.md` avant toute edition ;
- ne jamais merger `origin/main` aveuglement ;
- exporter ou consigner chaque source Admin avec ID, statut, contenu, date et proprietaire.

### Comptes

- creation autonome d un nouveau compte ;
- etat connecte et redirection apres creation ;
- compte existant ;
- invitation Admin distincte ;
- activation, connexion, deconnexion et reset ;
- compte cree sans abonnement marketing implicite ;
- mobile 360, 390 et 430 px, tablette et desktop.

### Consentements

- Preferences accepte, refuse puis retire ;
- consentements compte, personnalisation, email et SMS independants ;
- export, correction et suppression des donnees C1 ;
- aucun marketing apres refus ou desabonnement ;
- aucune restauration serveur apres retrait.

### Lifecycle

- inscription footer neuve et adresse existante ;
- une seule emission, aucun `BIENVENUE10`, desabonnement fonctionnel ;
- consultation seule, panier sans checkout, checkout abandonne ;
- conversion avant envoi pour verifier l arret ;
- exclusion 14 jours ;
- absence de doublon Shopify Messaging, Shop, Klaviyo et notification ;
- liens, rendu mobile et tracking.

### Transactionnel

- commande avec remise, cadeau et livraison ;
- expedition sans suivi, avec suivi, partielle et multiple ;
- annulation totale ;
- remboursement total et partiel ;
- carte cadeau avec code et lien utilisables ;
- retour produit avec reprise reseau sans double email.

### C1

- diagnostic invite sans consentement Preferences ;
- diagnostic invite avec Preferences ;
- enregistrement explicite dans Mon Ecrin ;
- reconnexion sur un second appareil ;
- conflit de versions et derniere mise a jour ;
- retrait depuis le compte et depuis le storefront ;
- suppression locale, panier et serveur ;
- ancien Flow `quiz_profile` absent ou compatible sans double ecriture.

## Lots d implementation separes

### E1 - Verite canonique

Inventorier et sauvegarder dans une source privee versionnee les Notifications, Messaging, Flow et dependances reellement actives. Conserver IDs, statuts, declencheurs, audiences, delais, conditions, sujets, contenus et dates. Aucun changement live.

### E2 - Neutralisation

Supprimer definitivement le popup newsletter, la bulle et les references `BIENVENUE10`. Archiver l ancien checkout urgence et les anniversaires. Corriger la promesse fausse de la bienvenue compte. Le footer reste. ScratchToReveal reste hors perimetre.

### E3 - Lifecycle actif

Recreer les sources versionnees de consultation, panier et checkout. Preserver les regles utiles, puis certifier consentement, arret apres conversion, exclusion 14 jours, deduplication et desabonnement.

### C1-0 - Preview nouveaux comptes

Construire une application ou extension Customer Accounts, une page pleine `Mon Ecrin` et la lecture des metafields sur un environnement de preview. Aucun changement du type de comptes live.

### C1-1 - Persistance durable

Ajouter les metafields, le consentement de personnalisation, le handoff signe, la synchronisation inter-appareils et la suppression. Desactiver ou remplacer l ancien Flow seulement apres validation. Basculer les comptes live uniquement apres GO distinct.

### E4 - Transactionnel commerce

Reprendre une notification a la fois depuis la version Admin reelle : compte, commande, livraison, annulation, remboursement et carte cadeau. Appliquer la DA actuelle et tester chaque evenement avant activation.

### E5 - Inscription, apres-achat et avis

Construire une bienvenue sans remise et sans promesse fictive, puis le post-achat utile. Decider et configurer Judge.me seulement apres preuve de son etat. Aucun cross-sell live.

### E6 - Lifecycle long terme et certification

Traiter deliverabilite, DMARC, winback, repeat et VIP. L anniversaire et le SMS restent eteints tant que le besoin, les donnees et le consentement ne sont pas prouves. Certifier tous les parcours avant paid acquisition.

### E7 - Retour produit

Ajouter tests, idempotence, registre KV, domaine propre et confirmation de rotation du secret au Worker de retractation.

## Ordre recommande pour la prochaine session

1. Activer la session fraiche en mode Plan.
2. Lire les sources obligatoires ci-dessous.
3. Verifier Git et les proprietaires de worktrees en lecture seule.
4. Transformer `E1 - Verite canonique` en plan executable fichier par fichier et ecran Shopify par ecran.
5. Definir la destination privee versionnee des exports sans secret.
6. Presenter le plan et les gates a Patrice.
7. Ne commencer l execution qu apres son GO.

## Sources obligatoires de reprise

1. `AGENTS.md`
2. `docs/project-state.md`
3. `docs/codex-handoff.md`
4. `docs/workstreams.md`
5. `docs/checkpoints/2026-08-20-0809-diagnostic-consent-live.md`
6. `docs/checkpoints/2026-08-20-1031-comptes-emails-lifecycle-audit-handoff.md`
7. `docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md`
8. `docs/reference/2026-08-12-repository-workflow.md`
9. `/Users/paesano/Documents/Agentic-Ops/milaura-automation/AGENTS.md`
10. `/Users/paesano/Documents/Agentic-Ops/milaura-automation/n8n-workflows-milaura/workflow-specs.md`

## Prompt de reprise copiable

```text
Reprends MilAura au 2026-08-20 depuis /Users/paesano/Documents/MilAura website/dawn-X-milaura. Active le mode Plan. Lis AGENTS.md, docs/project-state.md, docs/codex-handoff.md, docs/workstreams.md, docs/checkpoints/2026-08-20-0809-diagnostic-consent-live.md, docs/checkpoints/2026-08-20-1031-comptes-emails-lifecycle-audit-handoff.md et le plan canonique docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md. Verifie Git, les worktrees et les proprietaires en lecture seule avant toute ecriture.

Base minimale obligatoire : origin/codex/milaura-integration a 145e25d4 ou plus recent. origin/main est un miroir Shopify incomplet et ne doit jamais etre merge aveuglement. assets/milaura-preference-storage.js est deja dans le canonique et sur le live, aucune PR ou integration separee n est requise.

L audit comptes, consentements, notifications et lifecycle est ferme. Ne le recommence pas et ne modifie rien dans Shopify pendant la phase Plan. Premiere mission : produire le plan d execution detaille de E1 - Verite canonique, avec destination privee versionnee, fichiers, ecrans Admin, IDs, preuves, tests, gates et rollback. Enchainer ensuite seulement E2, E3, C1-0, C1-1, E4, E5, E6 et E7 selon le checkpoint.

Decisions fermes : Bienvenue10 est mort ; tout popup newsletter doit etre supprime dans E2 ; le footer reste la capture sobre ; ScratchToReveal est reserve a une session dediee future ; la creation de compte ne vaut pas consentement marketing ; les consentements cookies, personnalisation, email et SMS restent distincts ; ne pas basculer les comptes live avant preview et tests de parite. Cross-sell live et Atelier des emotions sont strictement hors perimetre.
```

## Etat de fermeture

- aucun fichier theme modifie pendant l audit ;
- aucun parametre Shopify modifie ;
- aucun email envoye ;
- aucun Flow ou Messaging active, desactive ou edite ;
- aucun deploiement Shopify ;
- onglets Admin de controle fermes apres lecture ;
- documentation de handoff seule autorisee a la fermeture.
