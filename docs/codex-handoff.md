# MilAura - Handoff master actif

Date de mise a jour : 2026-08-16 10:46 CEST

## Objet de la reprise

Reprendre le pilotage master de la refonte MilAura avec un contexte neuf. La refonte visible est proche de la finition, mais les systemes compte, consentement, lifecycle client, inventaire, contenu, SEO et Pinterest restent a fermer.

La session master audite, priorise, recadre les sessions specialisees et integre leurs retours. Elle n'absorbe pas elle-meme de longs lots de developpement lorsque ceux-ci peuvent etre isoles proprement.

## Cap commercial et direction creative

- Objectif directeur : construire un site capable d'atteindre 100 000 EUR de chiffre d'affaires. L'horizon et les paliers restent a chiffrer.
- La charte MilAura et `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md` sont les sources executoires.
- Tiffany & Co. et Van Cleef & Arpels sont les references externes de niveau d'execution : sobriete, photographie joailliere, produit prioritaire, macro, respiration, precision et perception de valeur.
- Ne copier aucun motif, signe distinctif, code, couleur proprietaire, texte ou mise en page de ces maisons.

## Etat live confirme

Le theme live est `190430282075`. Sont notamment live :

- Hero V2, bandeau-vitrine et Navigation V2 ;
- UI mobile bord a bord, dock et panneau de navigation ;
- selection saisonniere d'aout ;
- section 3 de la homepage ;
- Pierre du moment ;
- hubs Bijoux par pierre, Naissance et Mariage ;
- collections pierre documentees ;
- nouvelle experience PDP ;
- selecteur homepage Naissance / Mariage ;
- moteur de recommandations partage et Ruban de parure V2 live sur les PDP ;
- polish Sticky PDP live : seuil bidirectionnel au CTA, jonction dock sans fente et indicateur mobile du rail de reassurance.

Depuis le precedent handoff, le master a integre et deploye le Ruban de parure V2 par `469212c0`. Le lot PDP Hero desktop a ete integre en parallele par son proprietaire avec `84d72279`, puis cloture. Aucun produit, stock ou prix n'a ete modifie. Le seul reglage catalogue ajoute est la matrice Search & Discovery preuve explicitement autorisee ; la seule definition Shopify creee est `milaura.recommendation_cutout`.

## Git et sessions paralleles

- Depot d'integration : `/Users/paesano/Documents/MilAura website/dawn-X-milaura`.
- Branche : `codex/milaura-integration`.
- Commits theme integres et pousses : Sticky `396502cf`, Ruban V2 `469212c0`, PDP Hero desktop `84d72279`.
- Le checkout d'integration reste le seul proprietaire du live. Les ajouts documentaires du PDP Hero ont ete conserves pendant l'integration Ruban.
- Le worktree Ruban a ete retire proprement apres integration et validation live. Sa branche distante `codex/milaura-ruban-parure-v2-20260816` reste conservee a `222ef44f`.
- Le worktree PDP Hero desktop a ete retire par son proprietaire apres sa validation live. Sa preview `200007352667` reste conservee.
- La session Atelier des emotions poursuit sa Gate 0 en lecture seule dans `/Users/paesano/Documents/MilAura website/_worktrees/atelier-emotions-20260816`. Elle doit se declarer avant toute edition theme ou Shopify.

## Ruban de parure V2 integre et live

Patrice a donne le GO visuel, le GO live et l'autorisation explicite de remplacer proprement l'ancienne configuration PDP. Toutes les gates du checkpoint d'audit sont fermees.

- Source finale `222ef44f`, integration selective `469212c0`. Le `docs/workstreams.md` obsolete de la branche n'a jamais remplace le registre master.
- Definition produit Shopify `milaura.recommendation_cutout` creee, type fichier image, acces Storefront active, identifiant admin `448166265179`.
- Matrice Search & Discovery preuve : collier obsidienne noire boho dore `10557516644699`, 14,90 EUR, complete par les boucles obsidienne noire `10357431206235`, 10,90 EUR, et le bracelet obsidienne flocon `10357456601435`, 12,90 EUR.
- L'API reelle du theme de developpement puis du live renvoie exactement ces deux complements. Le mode sans complement continue de masquer le composant.
- Test panier isole : panier initial vide, ajout du variant `52484191879515`, retrait de sa seule cle de ligne, panier final vide.
- Deploiement live `190430282075` limite aux neuf fichiers theme du lot avec `--nodelete`; pullback 9/9 identique bit a bit.
- QA publique 360/390/430/820/1440 : deux cartes et prix exacts, scroll horizontal reel, clavier droite/gauche, compteur et progression, masquage de la sticky devant le Ruban, restauration au retour et jonction dock `-1 px` sans fente.
- Les deux erreurs console sont limitees au cadre tiers `shop.app` bloque par CSP/403. Le widget tiers `merchantwidgetiframe` elargit `documentElement` jusqu'a 959 px sur certains viewports, alors que `body` reste exactement au viewport et que le Ruban reste contenu.
- Risque commercial restant : une seule matrice Search & Discovery est prouvee. Les autres PDP exigent des complements valides ; sans `milaura.recommendation_cutout`, le media catalogue standard reste le fallback.

Checkpoint : `docs/checkpoints/2026-08-16-1046-ruban-v2-live.md`.

## Arbitrages fermes par Patrice le 2026-08-16

### LFG

Le sujet d'un claim LFG global est clos par Patrice apres verification. Il est retire du backlog actif. Les anciennes mentions dans des checkpoints historiques decrivent un audit anterieur et ne constituent plus une tache a reprendre. Ne pas recreer ce probleme sans nouvelle preuve contradictoire explicite.

### PDP

La longueur des PDP n'est pas un probleme confirme. La nouvelle experience PDP est validee. Une session specialisee doit mener des recherches approfondies, comparer les pratiques premium et auditer les donnees avant toute proposition de raccourcissement ou suppression.

### Diagnostic et lithotherapie

Les formulations actuelles autour de l'apaisement, de la protection et de l'energie sont approuvees par Patrice. Aucun chantier de reecriture corrective n'est ouvert. Les objectifs restants sont le polish visuel, l'amelioration de la page resultat et la sauvegarde reelle du diagnostic.

### Preuve sociale

La regle durable reste : utiliser Judge.me lorsqu'un avis du site existe, puis le fallback multi-canal approuve lorsqu'il n'existe pas. Ne pas presenter ce choix comme preuve fabriquee ou anomalie.

## Probleme fonctionnel confirme : diagnostic et compte

Le diagnostic ecrit aujourd'hui dans `localStorage`, un cookie et des attributs panier. Le dashboard relit principalement le navigateur. Il ne s'agit pas d'une sauvegarde cliente durable et le resultat ne suit pas automatiquement la cliente entre appareils.

Le chantier `C1 - Le Cercle MilAura` devient proprietaire de la correction :

1. choisir le type de comptes Shopify et la source de verite ;
2. rattacher le resultat a la bonne cliente ;
3. persister le profil entre appareils ;
4. restituer le diagnostic dans `Mon Ecrin` ;
5. separer creation de compte et consentements email ou SMS ;
6. tester compte existant, nouveau compte, deconnexion, reconnexion et suppression des donnees.

Le texte public ne doit promettre une sauvegarde dans le compte que lorsque cette architecture fonctionne reellement.

## Homepage : rail commercial unique a prototyper

Patrice veut conserver des destinations distinctes pour Nouveautes, Meilleures ventes et Promotions.

Piste recommandee : une seule section commerciale apres `Pierre du moment`, avec trois choix accessibles, un seul rail produit visible et un CTA qui suit le choix actif.

Regles de conception :

- `Nouveautes` est le choix initial ;
- `Meilleures ventes` conserve sa page publique ;
- `Promotions` se masque automatiquement lorsqu'aucune offre reelle n'est disponible ;
- un seul rail est expose a la fois ;
- clavier, tactile, focus, reduced motion et chargement des images sont testes ;
- la section doit reutiliser les cartes MilAura et la DA joailliere actuelle ;
- la proposition reste a valider visuellement avant implementation live.

## Priorites critiques

### 1. Bandeau cookies

Urgence immediate. Lot dedie UI, UX, consentement et mobile. Le nouveau bandeau doit etre sobre, accessible, non promotionnel, compatible avec les autres dialogues et correctement testable.

### 2. Emails et inscription

Criticite 10/10. Session dediee a ouvrir rapidement pour auditer :

- notifications transactionnelles ;
- creation et activation du compte ;
- bienvenue newsletter ;
- abandon de navigation, panier et checkout ;
- suivi commande, expedition, livraison et retour ;
- post-achat, entretien, avis et seconde commande ;
- desinscription et consentements ;
- comportement exact apres inscription sur le site.

L'audit doit commencer dans Shopify Admin et par des parcours controles. Ne pas deduire l'etat des automatisations depuis le theme seul.

### 3. Inventaire

Patrice inventorie son stock physique. Ce chantier avance en parallele et ne bloque pas le polish du site. Il reste obligatoire avant paid acquisition, publication de selections dependantes du stock et nettoyage definitif des anciennes collections.

Le contrat canonique distingue `physical-stock`, `supplier-backed` et `made-to-order`.

### 4. Atelier des emotions

Session dediee lancee. Reference fonctionnelle : Little Words Project. References de niveau visuel : Tiffany & Co. et surtout Van Cleef & Arpels. La section homepage arrive seulement apres un produit pilote, un parcours de personnalisation et une destination fonctionnelle.

## Acquisition et sequence

### Pinterest

Urgent et parallele. Commencer sans attendre la fin totale du site :

1. revendication du domaine ;
2. connexion Pinterest for Shopify ;
3. catalogue et diagnostics ;
4. tag et Conversions API ;
5. architecture de tableaux ;
6. systeme visuel premium ;
7. production organique assistee par Hermes et validee humainement.

Le paid reste bloque par stock, flux produit, mesure et economie valides.

### DataForSEO et SEO

Ne pas attendre la fin pour toutes les recherches, sinon les futures pages seraient construites sans demande verifiee. Utiliser deux passes :

1. recherche ciblee avant une nouvelle page importante lorsque les mots-cles doivent guider son architecture ;
2. audit global final lorsque les routes, produits et enrichissements sont stabilises.

Le credit DataForSEO ne doit pas etre consomme sans plan de requetes, estimation du cout et GO de Patrice.

### Taches de fermeture

Ces travaux arrivent majoritairement en fin de chantier ou apres leurs gates :

- campagne de rentree ou septembre avant obsolescence de la selection d'aout ;
- Karine et preuves d'atelier ;
- Sur mesure ;
- pages enfants Naissance et Mariage apres inventaire ;
- Journal et clusters editoriaux ;
- netlinking avec validation humaine ;
- GA4, GSC et Merchant Center ;
- performance et accessibilite finales ;
- Ads apres stock, flux, marges et tracking.

## Ordre de reprise recommande

1. Ouvrir le lot cookies.
2. Ouvrir la session emails et inscription.
3. Ouvrir ou cadrer C1 Cercle avec persistance durable du diagnostic.
4. Prototyper le rail `Nouveautes / Meilleures ventes / Promotions`.
5. Ouvrir la session PDP de recherche et polish sans presuppose sur la longueur.
6. Continuer inventaire et Atelier en parallele.
7. Commencer les fondations Pinterest.
8. Orchestrer ensuite septembre, Karine, Sur mesure, pages enfants, Journal et fermeture SEO.

## Lecture obligatoire

1. `AGENTS.md`
2. `docs/project-state.md`
3. `docs/workstreams.md`
4. `docs/codex-handoff.md`
5. `docs/checkpoints/2026-08-16-0751-master-midpoint-handoff.md`
6. `docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md`
7. `docs/reference/2026-08-12-repository-workflow.md`
8. `docs/reference/2026-08-12-copywriting-milaura.md`
9. `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md`

## Interdits de reprise

- ne pas rouvrir LFG, les formulations validees du quiz, la longueur PDP ou la preuve sociale comme anomalies sans nouvelle preuve et nouvel arbitrage de Patrice ;
- ne pas toucher aux fichiers futurs reserves par Atelier ou toute nouvelle session sans transfert explicite dans `docs/workstreams.md` ;
- ne pas confondre audit, implementation, GO visuel et GO live ;
- ne pas lancer les Ads avant stock, flux et tracking ;
- ne pas deployer un theme complet ;
- ne pas construire ScratchToReveal avant les fondations du Cercle et les consentements ;
- ne pas lancer une section Atelier vers une destination vide.

## Prompt de reprise copiable

> Reprends le pilotage master MilAura au 2026-08-16 depuis `AGENTS.md`, `docs/project-state.md`, `docs/workstreams.md`, `docs/codex-handoff.md`, `docs/checkpoints/2026-08-16-1046-ruban-v2-live.md`, `docs/checkpoints/2026-08-16-1042-pdp-hero-desktop-live.md` et le plan canonique `docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md`. Commence en lecture seule et verifie Git, worktrees et proprietaires. Le Ruban de parure V2 et le PDP Hero desktop sont live ; ne les rouvre pas sans nouvelle preuve. Le cap est un site capable d'atteindre 100 000 EUR de chiffre d'affaires, avec Tiffany & Co. et Van Cleef & Arpels comme references de niveau visuel, sans copie, et la DA MilAura comme source executable. Ne rouvre pas LFG, la longueur PDP, les formulations validees du quiz ou la preuve sociale comme problemes. Le vrai P0 compte est la persistance durable du diagnostic dans Le Cercle. Cookies et emails/inscription sont critiques. Une session Atelier des emotions travaille en parallele. Pinterest doit commencer par ses fondations, DataForSEO suit une passe ciblee puis un audit global final. Garde un seul proprietaire d'integration et du live.
