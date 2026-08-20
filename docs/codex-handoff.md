# MilAura - Handoff local Atelier des emotions

Date de mise a jour : 2026-08-20 07:29 CEST

> Portee : branche `codex/milaura-atelier-emotions-20260816` uniquement. Le handoff canonique du checkout d'integration appartient a la session master et peut etre plus recent. Ne pas remplacer son fichier avec cette copie.

## Decision de pause

Patrice met `L'Atelier des emotions` en pause le 2026-08-20. La commande fournisseur doit arriver dans environ trois semaines, sans date de reception certaine. Entre-temps, le travail se reporte notamment vers la communication, le SEO, Pinterest et les autres chantiers prioritaires du site.

Le lot reste parque dans son worktree et sur son theme prive. Il ne doit etre ni integre, ni publie, ni prolonge commercialement sans nouvelle instruction explicite.

## Point exact de reprise

- checkpoint final : `docs/checkpoints/2026-08-20-0729-atelier-emotions-pause-handoff.md` ;
- worktree : `/Users/paesano/Documents/MilAura website/_worktrees/atelier-emotions-20260816` ;
- branche : `codex/milaura-atelier-emotions-20260816` ;
- HEAD fonctionnel avant cloture : `d2c04563a3f2fafee082751b601633d06d36cc27` ;
- theme prive : `200007713115`, non publie ;
- live : `190430282075`, jamais modifie par ce lot ;
- integration master : non faite au 2026-08-20.

Le theme prive a ete reverifie le 2026-08-20 par pullback cible. Les cinq fichiers fonctionnels sont identiques octet par octet a la branche.

## Gate avant toute reprise commerciale

1. confirmer les commandes et factures ;
2. identifier `TW-1707` ;
3. compter les quantites recues et rejetees ;
4. compter chaque lettre A a Z pour les 8 alphabets ;
5. mesurer dimensions et diametres de trou ;
6. tester les compatibilites et la traction ;
7. fabriquer et valider les prototypes avec Karine ;
8. fixer cout complet, pertes, temps, marge et prix ;
9. choisir puis tester l'architecture Shopify et la restitution commande ;
10. finaliser la revue juridique avant activation du panier.

## Reprise copiable

```text
Reprendre L'Atelier des emotions depuis docs/checkpoints/2026-08-20-0729-atelier-emotions-pause-handoff.md sur la branche codex/milaura-atelier-emotions-20260816. Patrice a suspendu le chantier le 2026-08-20 jusqu'a reception des fournisseurs attendue dans environ trois semaines. Ne toucher ni au live, ni au catalogue, ni aux stocks, ni au panier. Reprendre par le Gate physique avec Karine, puis demander un nouveau GO explicite avant tout developpement commercial ou integration master.
```

## Contexte master historique au moment du fork

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
- moteur de recommandations actuel et Ruban Vivant ; le Ruban de parure V2 a termine sa preview technique dans un lot separe, sans integration ni live ;
- polish Sticky PDP live : seuil bidirectionnel au CTA, jonction dock sans fente et indicateur mobile du rail de reassurance.

La session master du 2026-08-16 a integre et deploye uniquement les cinq fichiers du lot Sticky PDP sur le live. Aucun produit, stock, prix, reglage Shopify, template produit ou fichier Ruban n'a ete modifie.

## Git et sessions paralleles

- Depot d'integration : `/Users/paesano/Documents/MilAura website/dawn-X-milaura`.
- Branche : `codex/milaura-integration`.
- Commit theme Sticky integre et pousse : `396502cf`.
- Le checkout d'integration est propre et aligne avec `origin/codex/milaura-integration`. Les commits documentaires recents conservent la cloture Sticky et l'ouverture du lot PDP Hero.
- Worktree Ruban actif : `/Users/paesano/Documents/MilAura website/_worktrees/ruban-parure-v2-20260816`, branche propre et poussee `codex/milaura-ruban-parure-v2-20260816`, HEAD `259cadf5`.
- Le Ruban possede le moteur et l'interface `milaura-recommendation*`, les adaptateurs PDP declares, son contrat metafield et ses checkpoints. Ne pas toucher a ces fichiers avant decision de Patrice.
- Sa preview `199421952347` est terminee, pullback 9/9 identique. Le live reste au master.
- Worktree PDP Hero desktop actif : `/Users/paesano/Documents/MilAura website/_worktrees/pdp-hero-desktop-20260816`, branche `codex/milaura-pdp-hero-desktop-20260816`.
- Le PDP Hero possede uniquement `sections/milaura-product-hero.liquid`, `sections/milaura-sticky-bar.liquid` et son checkpoint, sur la preview dediee `200007188827`.
- La session Atelier des emotions poursuit sa Gate 0 en lecture seule. Elle doit se declarer avant toute edition theme ou Shopify.

## Retour Ruban V2 audite par le master

Le retour du 2026-08-16 a 10:04 CEST est techniquement recevable mais pas pret a integrer.

- Branche et distante alignees a `259cadf5`, base Sticky `396502cf` bien presente.
- Theme de developpement `199421952347` seulement, neuf fichiers cibles, pullback 9/9 identique.
- QA annoncee a 360, 390, 430, 820 et 1440 px, clavier, compteur, progression, scroll natif et retrait de la sticky.
- Le produit preuve renvoie zero complement Search & Discovery et le composant reste masque, ce qui est le comportement attendu.
- Les quatre cartes visibles dans les captures ont ete injectees en memoire. Elles permettent une revue de structure, mais ne prouvent ni une reponse API reelle ni une composition photo finale homogene.
- La version `docs/workstreams.md` portee par la branche Ruban est obsolete. Elle ne doit pas remplacer le registre master, qui contient la cloture Sticky et le lot PDP Hero.

Gates avant integration :

1. GO visuel explicite de Patrice sur la direction, avec reserve sur l'heterogeneite actuelle des medias de fallback.
2. Validation commerciale produit par produit d'une matrice Search & Discovery preuve.
3. Verification ou creation dans Shopify de la definition `milaura.recommendation_cutout`.
4. Nouvelle preview utilisant de vraies cartes retournees par l'API, sans injection Playwright.
5. Test ajout panier dans un contexte navigateur neuf et isole, puis retrait de la ligne creee.
6. Integration par le master uniquement, avec conservation du registre courant.
7. Second GO live explicite, distinct du GO visuel.

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

1. Garder le Ruban V2 gele sur sa preview jusqu'aux gates documentes dans `docs/checkpoints/2026-08-16-1008-master-ruban-v2-audit.md`.
2. Ouvrir le lot cookies.
3. Ouvrir la session emails et inscription.
4. Ouvrir ou cadrer C1 Cercle avec persistance du diagnostic.
5. Prototyper le rail `Nouveautes / Meilleures ventes / Promotions`.
6. Ouvrir la session PDP de recherche et polish sans presuppose sur la longueur.
7. Continuer inventaire et Atelier en parallele.
8. Commencer les fondations Pinterest.
9. Orchestrer ensuite septembre, Karine, Sur mesure, pages enfants, Journal et fermeture SEO.

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
- ne pas toucher aux fichiers reserves par les sessions Ruban et PDP Hero ;
- ne pas confondre audit, implementation, GO visuel et GO live ;
- ne pas lancer les Ads avant stock, flux et tracking ;
- ne pas deployer un theme complet ;
- ne pas construire ScratchToReveal avant les fondations du Cercle et les consentements ;
- ne pas lancer une section Atelier vers une destination vide.

## Prompt de reprise copiable

> Reprends le pilotage master MilAura au 2026-08-16 depuis `AGENTS.md`, `docs/project-state.md`, `docs/workstreams.md`, `docs/codex-handoff.md`, `docs/checkpoints/2026-08-16-0751-master-midpoint-handoff.md` et le plan canonique `docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md`. Commence en lecture seule et verifie Git, worktrees et proprietaires. Le cap est un site capable d'atteindre 100 000 EUR de chiffre d'affaires, avec Tiffany & Co. et Van Cleef & Arpels comme references de niveau visuel, sans copie, et la DA MilAura comme source executable. Ne rouvre pas LFG, la longueur PDP, les formulations validees du quiz ou la preuve sociale comme problemes. Le vrai P0 compte est la persistance durable du diagnostic dans Le Cercle. Cookies et emails/inscription sont critiques. Une session Ruban est active et ne doit pas etre perturbee ; une session Atelier des emotions travaille en parallele. Pinterest doit commencer par ses fondations, DataForSEO suit une passe ciblee puis un audit global final. Audite les retours des sessions, recadre si necessaire et garde un seul proprietaire d'integration et du live.
