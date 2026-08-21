# Handoff strategique master MilAura

Date : 2026-08-21 08:59 CEST

## Objet

Clore la session master ouverte le 2026-08-16, transmettre la coordination a une nouvelle session master et reconciler le plan canonique avec la situation reelle avant l ouverture de plusieurs chantiers paralleles.

Cette cloture est documentaire. Aucun fichier theme, reglage Shopify, email, compte client, produit, stock, prix, statut, automatisation, theme de developpement ou live n a ete modifie.

## Conclusion strategique

La refonte visible et ses fondations de conversion sont largement avancees. Le Hero, la navigation, le dock mobile, le catalogue V1, les hubs, la campagne d aout, les occasions, l experience PDP, le Ruban V2, les cookies et le consentement navigateur du diagnostic sont live.

Le plan n est pas termine. Son vrai P0 reste la persistance durable du diagnostic dans le compte client et entre appareils. La fondation technique C1-0 existe, mais Patrice a refuse sa preview le 2026-08-21. Il faut repartir de la page compte actuelle, conserver sa valeur, obtenir un nouveau GO visuel et fonctionnel, puis seulement autoriser C1-1.

E1, E2 et E3 sont fermes. E4 a E7 restent ouverts. Pinterest passe de la doctrine et de l analyse a ses fondations. La campagne de rentree peut demarrer autour de la Sodalite, mais sa mise en ligne reste soumise a la verite inventaire, catalogue, cout, marge et disponibilite. Ruban V3 et Atelier des emotions restent parques sous leurs gates physiques et commerciaux distincts.

Le cap reste un site capable d atteindre 100 000 EUR de chiffre d affaires. La charte et la DA MilAura sont executables. Tiffany & Co. et Van Cleef & Arpels restent des references de niveau visuel, jamais des modeles a copier.

## Verifications Git, worktrees et proprietaires

Etat observe avant les ecritures de cloture :

| Perimetre | Branche et HEAD | Etat | Proprietaire et limite |
| --- | --- | --- | --- |
| Integration theme | `codex/milaura-integration` a `bd62f13c4b14f7d55c25410c33f9e95d96139a25` | propre, local et origin alignes | nouvelle session master apres ce handoff ; seule proprietaire de l integration et du live |
| Miroir Shopify | `origin/main` a `763d7ad94089b9a4c990532863159be9a47fd1a8` | miroir incomplet | ne jamais fusionner aveuglement ; les assets cookies et preference storage ont des omissions documentees |
| Atelier | `codex/milaura-atelier-emotions-20260816` a `2befe42920fbf9d87b925d4450912f3898eb645e` | propre et aligne | `PAUSE/PARQUE`, theme prive `200007713115`, aucun live |
| Ruban V3 | `codex/milaura-ruban-v3-matrix-20260817` a `3aa0b66d36fda918f119949008b3336b4d2d53db` | propre et aligne | `PAUSE/PARQUE` jusqu a l inventaire et au catalogue fiables, aucun theme |
| E1 prive | `codex/milaura-e1-verite-canonique-20260820` a `0478c2820e7a11aebb51e8535245566a4cfe20a7` | propre et aligne | ferme, source canonique privee |
| E3 prive | `codex/milaura-e3-lifecycle-actif-20260820` a `62132a86d54bf8f6d03feebdb1b61d0c26ceedc8` | propre et aligne | ferme, source lifecycle privee |
| C1-0 prive | `codex/milaura-c1-0-customer-accounts-preview-20260820` a `185c07b24b6de7966b988ab83b10f13044276e4c` | propre et aligne | handoff ferme, preview refusee, C1-1 non autorise |
| Pinterest | tache `01a01eb8-192c-76c1-9fb7-7599654e5e64` | analyse et feuille de route terminees, fondations a executer | aucun fichier theme ; aucun paid avant gates |

Themes connus :

- live : `190430282075` ;
- developpement general : `199421952347` ;
- Atelier prive : `200007713115`, non publie ;
- boutique C1 de developpement : `milaura-c1-preview`, store ID `107347837273`, aucun switch live.

## Suivi du plan canonique

| Etape | Etat au 2026-08-21 | Suite exacte |
| --- | --- | --- |
| 1 a 9 : Hero, dock, Git, economie panier, selection aout, catalogue, navigation, PDP et mobile | TERMINE ET LIVE | ne rouvrir que sur regression reproductible ou nouvelle decision Patrice |
| 10 : Ruban | V2 LIVE ; V3 AUDITE PUIS PARQUE | reprendre apres inventaire physique, couts, marges, disponibilite et catalogue en ligne fiables ; conserver Higgsfield seul et la fidelite exacte au produit |
| 11 : cookies | TERMINE ET LIVE | ne rouvrir que sur regression ou nouvelle decision consentement |
| 12 : rail `Nouveautes / Meilleures ventes / Promotions` | NON CONSTRUIT | traiter apres la campagne Sodalite ou dans un lot homepage distinct ; jamais en parallele sur les memes fichiers |
| 13 : C1 Le Cercle et Mon Ecrin | P0 OUVERT ; C1-0 REFUSE | nouvel audit et concept depuis la page compte actuelle ; GO Patrice avant JSX ; C1-1 seulement apres ce gate et avec un GO distinct |
| 14 : emails et inscription | E1-E3 TERMINE ; E4-E7 OUVERT | mail specialist pour matrice, DA, previews et tests ; session principale coordonne le lifecycle long terme et le Worker retour produit |
| 15 : inventaire physique | EN COURS CHEZ PATRICE | finir comptage, SKU/EAN, couts, marges, delais, statut de source et mise en ligne avant Ruban V3, paid et selections dependantes du stock |
| 16 : Atelier des emotions | PAUSE/PARQUE | ne pas confondre les produits recus pour la rentree avec les composants Atelier ; reprendre seulement apres son gate physique propre et nouveau GO |
| 17 : Karine, preuves et Sur mesure V1 | OUVERT | construire avec photos, capacite et processus reels, pas avec une promesse generique |
| 18 : campagne de rentree | PRETE A OUVRIR | Sodalite choisie par Patrice ; auditer les produits recus, fixer liste, dates, stock, marge, landing et remplacement propre de la selection d aout avant preview |
| 19 : pages enfants Naissance et Mariage | OUVERT | attendre des selections utiles et un stock fiable ; recherche ciblee DataForSEO si l architecture depend de la demande |
| 20 : Journal | OUVERT | definir clusters, destinations commerciales et validation humaine avant production assistee Hermes |
| 21 : Pinterest | FONDATIONS EN COURS | executer securite, coherence du compte, tableaux, SEO, UTM, catalogue, consentement, tag/CAPI et briefs Sodalite ; stopper au gate inventaire avant production finale et Ads |
| 22 : DataForSEO et SEO global | NON CLOS | passe ciblee avant les nouvelles pages utiles, puis audit SEO/AEO/GEO global apres stabilisation des routes et contenus |
| 23 : S1B et S1C Scratch | BLOQUE PAR C1 | uniquement apres C1, avec moteur autonome, consentement par canal et aucune resurrection du Scratch panier/PDP |
| 24 : fermeture | OUVERT | performance, accessibilite, netlinking approuve, GA4, GSC, Merchant Center, lifecycle reel et paid sous gates |

## Vague parallele autorisee

La vague annoncee par Patrice est coherente si les proprietes restent separees :

1. `Master / C1` : nouvelle conception de Mon Ecrin, P0 persistance durable, aucune bascule live et aucun C1-1 avant validation du concept.
2. `Mail specialist` : E4 a E6, emails actifs et transactionnels, inscription, post-achat, avis, retention, pression commerciale et delivrabilite. E7 reste coordonne avec le master si du code est necessaire.
3. `Rentree Sodalite` : campagne saisonniere et remplacement de la selection d aout. Cette session possede seule les fichiers de la selection saisonniere et de sa landing. Elle ne construit pas simultanement le rail commercial general.
4. `Pinterest foundations` : compte, tableaux, SEO, UTM, catalogue et verification tracking, sans theme Shopify et sans Ads.
5. `Inventaire et catalogue` : Patrice et le pipeline produit terminent la verite physique et la mise en ligne, sans modifier le theme.

Avant toute edition, chaque nouvelle session doit etre inscrite dans `docs/workstreams.md` avec branche, worktree, fichiers exacts, theme et proprietaire. Le master reste l unique proprietaire de l integration et du live.

## Ce qui manque dans la sequence proposee par Patrice

La sequence proposee est bonne, mais elle ne suffit pas encore a declarer le plan termine. Il ne faut pas oublier :

1. le P0 C1 durable entre appareils, encore non resolu ;
2. le rail commercial homepage, Karine/Sur mesure, les pages enfants Naissance/Mariage, le Journal et S1B/S1C, encore ouverts dans le plan canonique ;
3. les preuves business avant Ads : stock physique, cout complet, marge de contribution, delais, offre, flux produit et destinations achetables ;
4. la mesure avant Ads : consentement, GA4, GSC, Merchant Center, Pinterest Tag/CAPI, deduplication, evenements, UTM et parcours de conversion ;
5. la fermeture technique : performance, accessibilite, lifecycle reel, delivrabilite et rollback ;
6. DataForSEO en deux temps, cible puis audit global final, sans consommer du credit sans plan de requetes.

Le passage `grosse passe SEO puis Ads` est donc incomplet sans la gate `inventaire + economie + tracking + feed + conversion`. Une premiere campagne payante doit etre un pilote borne, avec budget, KPI de contribution et regles d arret, pas une bascule generale.

## Decisions a ne pas rouvrir

- claim LFG global ;
- longueur des PDP ;
- formulations validees du diagnostic ;
- preuve sociale Judge.me avec fallback multi-canal ;
- doctrine MilAura assumant lithotherapie, vertus et bienfaits sans promesse medicale ;
- cookies gemme, sauf regression ;
- Ruban V2 live, sauf regression ;
- Higgsfield seul pour Ruban V3, Grok exclu, aucune transformation visuelle du produit.

## Risques de coordination

- `origin/main` est un miroir Shopify incomplet. Tout lot part du canonique `codex/milaura-integration` courant.
- Rentrée Sodalite et rail commercial touchent potentiellement la homepage. Ils restent sequentiels ou reservent des fichiers disjoints apres audit.
- C1, cookies, emails, consentement marketing et personnalisation sont lies mais ne sont pas un consentement unique.
- Le resultat du quiz est actuellement durable seulement dans le navigateur et le panier sous consentement Preferences. Aucune affirmation de parite inter-appareils n est permise.
- Les tests envoyes sur les 45 notifications ne valent pas validation creative.
- Les produits recus pour la campagne Sodalite ne prouvent ni que l inventaire complet est ferme, ni que les composants Atelier sont recus.
- Pinterest organique peut avancer ; Pinterest Ads et toute production finale de masse restent bloques par l inventaire, la fidelite produit, le feed et la mesure.

## Livrables Pinterest deja disponibles

La tache Pinterest a analyse 83 videos, soit 20 h 10, et a note la formation `14,5/20`. Elle a produit une feuille de route de 29 pages, sans lancer de campagne :

`/Users/paesano/.codex/visualizations/2026/08/20/01a01eb8-192c-76c1-9fb7-7599654e5e64/outputs/pinterest-roadmap/PLAN-STRATEGIQUE-PINTEREST-MILAURA-2026.pdf`

La campagne de travail proposee est `Sodalite, le bleu de la rentree`. Ce nom reste un titre de travail tant que Patrice n a pas valide la copy publique.

## Etat de deploiement pendant cette cloture

- aucun push Shopify ;
- aucune mutation Admin ;
- aucun email envoye ;
- aucune campagne publicitaire lancee ;
- aucun fichier theme modifie ;
- live `190430282075` non touche par ce handoff.

## Reprise

La nouvelle session master doit utiliser le message de reprise integral conserve dans `docs/codex-handoff.md`. Sa premiere action est un audit read-only du canonique et des nouvelles reservations, puis la creation ou validation des worktrees C1, Mail et Rentree. Elle ne doit pas supposer que les sessions prevues sont deja proprietaires d un fichier tant que `docs/workstreams.md` ne le prouve pas.
