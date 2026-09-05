# Chevrons mobiles affines, live

Date : 2026-09-05 17:11 CEST. Dernier polish demande par Patrice, avec skills frontend et observation de Tiffany / Van Cleef & Arpels. Les commandes sont maintenant de fins chevrons sans boite, places dans les marges nacrees juste hors des photos. Cibles tactiles invisibles de 44 px ; fleche indisponible masquee, indication unique de 2 px et mouvement reduit respecte. Les 39 cartes gardent leurs dimensions, cadrages et styles ; le desktop valide reste identique. Source `085465e8`, integration `fe4fe056` poussees ; deux fichiers live sur `190430282075`, pullback 2/2 identique. Recette publique 360/390/430/768/1440, treize rangees, tap sur les petits SVG, clavier et liens conformes. Aucun nouveau JavaScript, aucun swipe reintroduit. Theme Check 0 erreur/16 avertissements historiques. Preview panier non touchee. Checkpoint `docs/checkpoints/2026-09-05-1708-stone-arrow-polish.md`. Les bilans precedents restent historiques ; ne pas retablir les boites translucides.

# Format compact des cartes mobiles retabli

Date : 2026-09-05 16:53 CEST. Patrice confirme le desktop et rejette uniquement l'agrandissement mobile introduit avec les fleches. Le format mobile precedent est retabli : largeur 286 px, apercu de la carte suivante, hauteur de texte et marges precedentes. Fleches et cadrages conserves ; aucune modification du desktop. Source `85737031`, integration `98e158d6` poussees, un CSS live sur `190430282075`, pullback identique. Comparaison publique 360/390/430/749 avec le format precedent, desktop 768/1440 inchange, treize rangees, clavier, mouvement reduit et redimensionnement conformes. Theme Check 0 erreur/16 avertissements historiques. Preview `200974958939` reservee au panier et non touchee. Checkpoint `docs/checkpoints/2026-09-05-1651-stone-mobile-compact.md`. Ne pas agrandir les cartes mobiles pour modifier leur navigation.

# Navigation des pierres par fleches, live

Date : 2026-09-05 16:38 CEST. Patrice abandonne explicitement le swipe apres deux retours negatifs sur iPhone. Le composant fonctionne maintenant par fleches translucides superposees aux bords des photos, avec une indication discrete de deux cycles et le compteur dessous. Les anciens ecouteurs, mesures, regles de scroll et variantes `is-featured` ont ete retires. Aigue-marine a le meme format que les autres cartes desktop, avec quatre colonnes et liens alignes ; les photos restent telles que validees.

Source `c6ddfede`, integration `7c22cac0`, branche canonique poussee ; live `190430282075` et preview `200974958939`, pullbacks 3/3 identiques. Recette publique 360/390/430/768/1440, treize rangees par fleches, liens, clavier, preference de mouvement reduit, changement de largeur, rechargement de section et acces aux 39 cartes sans JS conformes. Theme Check 0 erreur/16 avertissements historiques. Aucune recette sur iPhone physique revendiquee. Le worktree propre et integre est retire, branche `codex/milaura-stone-arrow-navigation-20260905` conservee. Checkpoint : `docs/checkpoints/2026-09-05-1635-stone-arrow-navigation.md`. Les anciens bilans de swipe ci-dessous sont historiques et ne doivent pas conduire a le reintroduire. Autres composants, catalogue, stocks, prix, galeries et travaux concurrents preserves.

# Cadrages valides et glissement natif en ligne

Date : 2026-09-05 16:13 CEST. Cadrages valides explicitement par Patrice puis integres et deployes : `d7e8f7af` -> `911e206d`. Retour iPhone negatif sur la fluidite du premier correctif tactile ; cette implementation est remplacee par le defilement et l'inertie natifs : `6ba3120e` -> `34bf06ca`. Theme live `190430282075`, branche canonique poussee, pullback final 4/4 identique ; preview `200974958939` actualisee aussi.

Recette publique 360/390/430 avec CPU ralenti x4 : inertie apres relachement, gestes lents, retour sur texte, defilement vertical, fleches et liens conformes. Zero ecriture JS du scroll, capture du pointeur ou lecture des rectangles pendant les gestes. Cadrages publics 390/1440, redimensionnement et mouvement reduit conformes, Theme Check 0 erreur/16 avertissements historiques. Le ressenti iPhone physique reste a confirmer par Patrice apres actualisation. Checkpoint : `docs/checkpoints/2026-09-05-1613-framing-native-swipe-live.md`. Le worktree termine est retire proprement, branche `codex/milaura-touch-framing-20260905` conservee. Ne pas rejouer les cadrages ou modifier les autres photos sans nouvelle demande ; aucun catalogue, stock, prix, galerie, Admin, canal ou Ads modifie. Travaux concurrents du checkout preserves.

# Mise en ligne terminee : annuaire et landings par pierre

Date : 2026-09-05 10:55 CEST. Statut : LIVE VERIFIE apres GO explicite de Patrice. Le hub public `/pages/bijoux-par-pierre` contient 39 cartes sans recherche, treize rangees courtes sur mobile, et ouvre les landings sans parametre de preview. Les 40 pages sont publiques, les dix anciennes affectations et trente publications Boutique en ligne sont executees. Theme `190430282075`, pullback 49/49 identique, un H1/trois onglets/produits/canoniques conformes sur les 40 pages, responsive 390/1440 controle. Integration `3d29f3a8`, compteurs `3492023f` pousses. [Checkpoint de release](checkpoints/2026-09-05-1055-stone-directory-live.md).

Trois Boho ont ete passes en DRAFT par la tache catalogue concurrente ; leurs references restent configurees et se masquent automatiquement. Compteurs ajustes a Quartz rose 10, Aventurine 6 et Obsidienne 4. Les remettre a jour apres une reactivation verifiee, sans modifier les statuts par deduction. Les anciens etats preview ci-dessous ne valent plus pour le lot pierre. Repartir de la branche canonique et du live ; les travaux concurrents du checkout sont preserves.

# Catalogue ferme : Patrice reprend le tri des anciennes fiches

Date : 2026-09-05 17:35 CEST. Statut : `PRODUCTION TERMINEE ; TRI REPRIS PAR PATRICE`.

Patrice prend personnellement la main sur le choix des anciennes fiches en ligne a conserver ou retirer. Une session fraiche enrichira uniquement celles qu'il aura retenues. Le mandat de creation est termine : trois nouvelles Boho puis treize autres fiches ont ete creees en DRAFT ; les deux fils de perles restants sont du materiel personnel explicitement exclu de la vente. Les trois anciennes Boho P1 ont ete approuvees puis activees ; le chapelet historique enrichi est au dernier controle en DRAFT, avec 78 cm et sans nombre de perles invente. Prix Boho 14,90 EUR conserve.

Treize contrats et imports PASS, 65 images comparees aux pixels Shopify, 269 cellules Sheet actualisees et 585 verifiees. Copie canonique privee `data/catalogue-batches/2026-09-05-p2-remaining13/`, 514 fichiers compares par SHA-256 puis rapport ajoute. [Revue des treize brouillons](http://127.0.0.1:8766/REVIEW.html), serveur local necessaire. Les statuts sont ceux des derniers controles de chaque lot ; les relire par EAN/IDs lors d'une prochaine action de Patrice ou de Codex. Aucune activation ou publication deduite du message de cloture.

Le [handoff de cloture](checkpoints/2026-09-05-1735-catalogue-handoff-patrice-triage.md) remplace le mandat de 09:41. Il contient les preuves, decisions et chemins durables. Les anciens nombres 27/59/55 ne sont pas un inventaire actuel. Le compteur de ventes est conserve sur instruction de Patrice. Hematite, cadeau, cron Camilla, themes et travaux concurrents preserves ; aucune regeneration hematite automatiquement ouverte. Aucun besoin d'information supplementaire pour terminer les nouveaux produits.

## Prompt pour les anciennes fiches retenues

```text
Reprends MilAura depuis docs/checkpoints/2026-09-05-1735-catalogue-handoff-patrice-triage.md. La production des nouvelles fiches est terminee. Voici les anciennes fiches que je conserve : [ma liste de liens, IDs ou EAN]. Relis uniquement leur etat actuel dans le Sheet et Shopify, puis reprends leur enrichissement avec le workflow V4.1 et le copywriting MilAura. Preserve les IDs et handles historiques et prepare la revue des textes et galeries. Ne recree pas les produits deja importes, ne vends pas les deux fils de perles personnels et ne rejoue ni factures ni stocks. Aucune modification de statut ou publication par deduction. Les autres anciennes fiches restent hors de ce lot.
```

# Reprise prioritaire : polish visuel apres le Polish 7

Date : 2026-09-05 09:20 CEST. Statut : `POLISH 7 FERME, INTEGRE ET LIVE`.

Les landings dediees Aigue-marine et Sodalite utilisent maintenant le guide pierre reutilisable en trois onglets apres les cartes produit. Aigue-marine met en avant la bague argent modele 01 dans le bento ; Sodalite conserve le bracelet Horus. Le lot est integre et pousse au commit `ac2144de`, puis deploye par quatre fichiers exacts sur le theme live `190430282075`. Pullback `4/4` identique, Theme Check sans erreur, parcours publics Aigue-marine et Sodalite controles. Checkpoint : [2026-09-05-0920-polish7-stone-landings-live-handoff.md](checkpoints/2026-09-05-0920-polish7-stone-landings-live-handoff.md).

Point connu : la bague Aigue-marine est actuellement epuisee. La route dediee Aigue-marine fonctionne avec `?view=milaura-campaign-aigue` ; aucune affectation de template Shopify Admin n a ete modifiee dans ce lot. Le checkout principal reste sale avec des travaux concurrents preserves.

## Prompt de reprise courant

```text
Reprends le polish visuel MilAura depuis docs/checkpoints/2026-09-05-0920-polish7-stone-landings-live-handoff.md. Lis AGENTS.md, docs/project-state.md, docs/codex-handoff.md et docs/workstreams.md, puis commence en lecture seule. Le Polish 7 est ferme, pousse au commit ac2144de et live sur le theme 190430282075 : guides reutilisables Aigue-marine et Sodalite, trois onglets cures et bague Aigue-Marine Argent en produit star. Ne redeploie rien par deduction. Demande-moi le prochain polish de la landing, reproduis le point exact en desktop et mobile, puis garde preview, GO visuel, integration et live comme gates distinctes. Preserve tous les changements concurrents du checkout principal et n utilise jamais origin/main comme source d integration.
```

# Reprise prioritaire : 59 anciennes URLs SEO restaurees

Date : 2026-09-04 22:10 CEST. [Checkpoint courant](checkpoints/2026-09-04-2210-seo-clicked-urls-restored.md).

Correctif termine, ne pas le rejouer. Les 59 anciennes fiches avec clics GSC sont `ACTIVE` sous leurs URLs historiques : 58 a stock zero et politique `DENY`, plus le collier Boho `10557516644699` a stock quatre et politique `DENY`. Le pullback Admin est PASS 59/59 en comptant le pilote ; aucun contenu, prix, media, handle, EAN, SKU, metachamp ou collection n'a ete modifie.

Le sitemap produits repond HTTP 200 avec 234 entrees ; les 59 handles restaures sont tous presents. Pilote et echantillon stock zero sont indexables, `OutOfStock` et non achetables ; Boho est indexable, `InStock` et achetable. Le sitemap a ete soumis dans GSC, mais recrawl, impressions et positions restent en attente. Une verification individuelle immediate des 59 pages a ete arretee apres rate-limit 429 ; ne pas marteler Shopify. Hematite douze versus neuf reste un lot distinct non resolu.

# Reprise prioritaire : pilote SEO PASS, GO collectif exact requis

Date : 2026-09-04 21:33 CEST. [Checkpoint courant](checkpoints/2026-09-04-2133-seo-corrective-explicit-go.md).

Sitemap GSC soumis avec confirmation. Pilote `10358876275035` restaure sous son URL : ACTIVE, stock zero, DENY, HTTP 200, canonique correcte, OutOfStock et achat desactive. Contenu et autres champs inchanges. Ne pas rejouer l'operation stock.

Les 58 autres produits a clics sont inchanges. Le garde-fou exige une autorisation exacte pour activer collectivement 57 fiches avec stock zero et le collier Boho `10557516644699` avec stock quatre confirme. Cette action rendra les anciennes pages visibles dans le sitemap, les collections et la recherche Shopify ; 57 seront epuisees et non achetables, Boho sera achetable. Aucune 301 automatique. Attendre la reponse explicite de Patrice. Hematite 12 versus neuf reste separee et non resolue.

# Reprise prioritaire : audit GSC termine, comptage hematite a clarifier

Date : 2026-09-04 19:42 CEST. [Checkpoint courant](checkpoints/2026-09-04-1942-gsc-stock-hematite.md), [audit Search Console](audits/2026-09-04-legacy-retirement-search-console.md).

Audit SEO execute en lecture seule : 109 clics historiques sur 28 jours concernent 59 handles retires, 55,6 % des clics de la table Pages. Ne pas annoncer une perte deja mesuree. Aucune action manuelle ni alerte securite, sitemap public conforme aux 173 actifs, rapport GSC ancien. Aucune redirection, demande d'indexation ou soumission de sitemap ; correction a autoriser separement.

Les trois stocks physiques sont confirmes : Boho obsidienne Sheet 4, rhodonite 6 mm 1 conservee, oeil-de-tigre 8 mm 2 conservees. Aucun ajout d'achat ou import a rejouer. Cadeau `10504072954203` : stock Shopify corrige 50 -> 12, toujours DRAFT, prix zero, pas encore enrichi/reactive. Le lien CAN donne par Patrice identifie l'EAN `3701459008254`, deja present sur la fiche canonique ACTIVE `10685849862491`, cinq images approuvees, prix 8,50 EUR, stock 9 Sheet/Shopify. Question ouverte : 12 cadeaux supplementaires ou 12 physiques au total ? Ne pas creer de doublon, additionner 12+9, alterer les neuf ou regenerer la galerie acceptee par deduction. Clarifier puis finaliser le modele cadeau/vente et sa preuve panier.

Le retrait legacy, les factures et les ecritures de ce lot sont termines, pas a rejouer. Les attentes contradictoires plus anciennes ci-dessous sont historiques. Aucun theme ou autre produit autorise par ce checkpoint ; Unys et recommandations orphelines restent distincts.

# Reprise prioritaire : SEO, cadeau et trois stocks a confirmer

Date : 2026-09-04 18:55 CEST. Les factures FCAN2026-59350 et FCAN2026-59481 sont integrees au Sheet : 35 lignes d'achat, 33 EAN (24 nouveaux, neuf existants), aucun doublon. Ne pas reimporter les commandes 76878 et 77055 ni ajouter une seconde fois leurs stocks.

[Checkpoint courant](checkpoints/2026-09-04-1855-invoices-seo-gift-clarifications.md) : trois quantites physiques en attente, distinction cadeau hematite/amethyste, preuves et limites. Les 24 nouvelles lignes Sheet ne sont pas des creations Shopify. Aucun stock, produit, prix ou canal Shopify modifie dans ce lot.

Priorite demandee : proteger le SEO organique. Les 237 retraits legacy sont effectues, mais trafic, backlinks et redirections pertinentes restent a traiter dans un lot cible. Ne pas promettre un impact nul, rediriger tout vers la Home, reactiver tous les produits ou falsifier leurs stocks a zero. Cadeau : produit 10504072954203 DRAFT, variante 53142713925979, hematite 4 mm, ancien stock Shopify 50 ; Patrice annonce amethyste et 12 unites, confirmation necessaire. Stocks a confirmer : EAN 3701459098132 (facture cinq / message un achete et vendu), 3701459010042 (Sheet une ancienne unite), 3701459011551 (Sheet deux anciennes unites). Unys reste un ecart distinct.

Les anciens prompts et attentes ci-dessous sont historiques. Reprendre en lecture seule depuis le checkpoint courant, puis appliquer uniquement les confirmations et GO nouveaux de Patrice.

# Reprise prioritaire : inventaire apres retrait legacy

Date : 2026-09-04 18:40 CEST. Statut : `RETRAIT EXECUTE ; SHEET SYNCHRONISE ; DEUX LISTES FOURNISSEUR ATTENDUES`.

237 anciens produits sont passes en DRAFT, sans suppression. Les 179 canoniques sont inchanges : 173 ACTIVE et six DRAFT volontaires. Les 333 anciens deja hors vente restent intouches. Les 237 endpoints produit controles renvoient 404 ; les deux listes publiques completes ne contiennent que les 173 actifs canoniques. Sheet : 145 cellules sur 46 lignes, formules, couts et quantites physiques preserves.

Preuves, liste nominative, limites et prompt complet : [checkpoint courant](checkpoints/2026-09-04-1826-inventory-legacy-retirement.md). Ce resultat remplace le mandat de retrait de 17:38 reproduit plus bas, qui devient historique. Ne pas rejouer cette operation.

Prochaine etape : attendre les deux listes fournisseur de Patrice. Aucun nouveau produit, activation ou stock a modifier par deduction. Les six cadeaux exclus et les quatre visuels refuses restent proteges. Corrections distinctes a decider : cadeau panier encore reference, deux mappings de recommandations orphelins, ecart Unys physique Sheet 4 / Shopify 1. Mon Ecrin connecte et feeds Meta/Google/Pinterest restent non certifies. Aucun theme ni Ads modifie.

## Prompt de reprise courant

```text
Reprends MilAura depuis docs/checkpoints/2026-09-04-1826-inventory-legacy-retirement.md. Le retrait legacy est termine et ne doit pas etre rejoue. Commence en lecture seule. Attends mes deux listes fournisseur pour rapprocher commandes, receptions physiques et IDs canoniques. Preserve les brouillons volontaires et les exclusions ; garde les correctifs cadeau/mappings, Unys et les limites de canaux dans des lots distincts soumis au GO adapte.
```

## Historique et autres chantiers preserves

# Handoff prioritaire : catalogue MilAura

Date : 2026-09-04 17:38 CEST. Statut : `PASSATION PRETE ; RETRAIT LEGACY NON EXECUTE`.

La prochaine session retire de la vente tous les anciens produits hors nouvel inventaire, en les passant en DRAFT sans suppression definitive de masse. Elle protege les produits canoniques du Sheet traites par toutes les sessions, y compris les IDs anciens reenrichis, et conserve tous les brouillons volontaires. Aucune exception pour les doublons ou les savons.

Patrice declare avoir active lui-meme tous les produits qu'il juge finalises. Cette declaration guide les decisions de conservation ; leurs statuts/canaux actuels restent a verifier en direct. Le dernier lot n'est plus « 47 DRAFT » : six cadeaux ont ete supprimes, les 41 autres statuts n'ont pas ete reaudites apres sa revue.

Reprise complete : [retrait legacy puis deux commandes](checkpoints/2026-09-04-1738-inventory-legacy-retirement-handoff.md).

## Prompt de reprise catalogue

```text
Reprends MilAura depuis docs/checkpoints/2026-09-04-1738-inventory-legacy-retirement-handoff.md. Commence en lecture seule par le Sheet, Shopify pagine et les preuves de toutes les sessions d'inventaire. Protege les IDs canoniques, y compris les anciens IDs reenrichis et tous les DRAFT volontaires. Puis passe tous les autres anciens produits actifs en DRAFT, sans suppression definitive, doublon ou savon compris. Sauvegarde et verifie chaque ID ; ne modifie pas les produits proteges. Les six cadeaux sont deja supprimes et exclus. Grenouille quartz rose validee ; trois calendriers et coffret refuses, intouchables avant les vraies photos. Apres ce retrait, attends les listes des deux commandes fournisseur, puis prepare Sheet, reassorts et nouvelles fiches sous workflow V4.1. Aucun nouveau DRAFT, activation ou publication sans GO adapte. Aucun theme ni Ads.
```

## Limites et autres chantiers

Les anciens GO FINAL47, prix nuls et exceptions de source sont epuises. Aucune mutation Shopify ou Sheet dans cette cloture. Les six suppressions precedentes et les controles sont documentes dans [le checkpoint cadeaux](checkpoints/2026-09-04-1659-inventory-gifts-six-deleted.md). Le total d'anciens produits a retirer sera calcule a la reprise, pas deduit des anciens compteurs.

Les informations ci-dessous concernent les autres chantiers, conserves sans reprise ni nouvelle verification. Pour l'inventaire, le checkpoint du 2026-09-04 a 17:38 prime sur les anciens prompts et chiffres.

---

> Mise a jour Polish 6, 2026-09-04 08:40 CEST : LIVE VERIFIE sur le theme `190430282075`, commit `4067ea35` pousse sur `codex/milaura-integration`. Titres, surtitres, CTA et derniers ajustements fleches/espacements approuves sont publies. Pullback 18/18, Home 360/390/430/768/1440 et regressions 390/1440 PASS. Details : [checkpoint Polish 6](checkpoints/2026-09-04-polish6-live.md). Les autres chantiers ci-dessous restent inchanges.

# Handoff Codex MilAura, Rentree Sodalite

Date : 2026-09-01 20:37 CEST

Statut : `POLISH SITE VALIDE, INTEGRE ET LIVE`

## Prompt de reprise rapide

```text
Reprends MilAura apres la fermeture du polish site Rentree Sodalite. Lis AGENTS.md, docs/codex-handoff.md puis uniquement docs/checkpoints/2026-09-01-2037-sodalite-site-polish-live-handoff.md. Commence en lecture seule. La Home Sodalite et /collections/selection-de-karine sont live et validees. Ne les modifie pas par deduction. En cas de regression, reproduis-la sur le live et propose un lot minimal. Aucun code, theme, Admin, Ads, credit creatif ou live sans reservation et GO separes.
```

## Etat ferme

- Theme live : `190430282075`.
- Commit canonique final : `e191857c98ac0ce20b23ea09f1fdbb2999f76ee9`.
- Home : video declenchee au scroll, une seule lecture de `10,041667 s`, fin fixe, puis `Rejouer`.
- Safari : fallback `Lire` en bas a droite si l autoplay est refuse ou fige.
- Landing : scene et bijoux fixes, papillons seuls animes, boucle invisible de `15 s`.
- Bande blanche Home supprimee.
- Medias H.264 faststart reduits de `45,3 %` au total.
- Pullback live : `6/6` fichiers identiques.
- QA publique : `360`, `390`, `430` et `1440 px`, sans overflow.
- Theme Check : `0 erreur`, `16 warnings historiques` hors lot.
- Aucun Admin, produit, stock, prix, collection, Ads ou canal publicitaire modifie.

Checkpoint complet : `docs/checkpoints/2026-09-01-2037-sodalite-site-polish-live-handoff.md`.

## Gates

Le polish site Sodalite ne possede plus de lot ouvert. Les creations pour TikTok, Meta et Pinterest, puis les Ads, constituent un chantier distinct. Aucun futur GO creatif ou Ads ne vaut autorisation de modifier le site.

Toute regression site doit etre reproduite en lecture seule, reservee sur des fichiers et un theme exacts, corrigee sur theme prive apres GO, puis integree et poussee live seulement apres un nouveau GO separe.

## Etat Git

La branche canonique est `codex/milaura-integration`. Le commit Sodalite est pousse sur origin. Le worktree source `sodalite-media-safari-20260901` est propre et aligne.

Le checkout principal reste volontairement sale avec des changements concurrents Inventaire, CI, documentation et medias non suivis. Aucun reset, nettoyage, staging global ou commit global ne doit etre execute. La liste exacte figure dans le checkpoint.

## Autres chantiers

- Inventaire : `docs/checkpoints/2026-09-04-1738-inventory-legacy-retirement-handoff.md` ; retrait legacy reversible, nouveaux IDs et DRAFT volontaires proteges.
- Template 1 marketing : reprendre depuis `docs/checkpoints/2026-09-01-1415-template-1-marketing-live-handoff.md` uniquement sur besoin precis.
- Mon Ecrin, Pinterest, SEO et acquisition conservent leurs propres gates et checkpoints.
