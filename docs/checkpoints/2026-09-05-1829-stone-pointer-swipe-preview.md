# Carousel des pierres : geste explicite en preview

Date : 2026-09-05 18:29 CEST.

## Constat et perimetre

Patrice confirme que le swipe reste inoperant sur son iPhone, y compris depuis le lien neuf du lot natif precedent : seules de petites variations verticales apparaissent. Les anciennes recettes automatisees ne valent donc pas validation sur son appareil. La cause precise dans son Safari n'a pas ete observee directement.

Base `640633ac`, branche `codex/milaura-stone-pointer-swipe-20260905`, worktree `/Users/paesano/Documents/MilAura website/_worktrees/stone-pointer-swipe-20260905`.

Deux assets uniquement : `assets/milaura-stone-directory.js` et `assets/milaura-stone-pages.css`. Aucun changement de texte, photo, Liquid, dimensions des cartes ou commandes. Desktop preserve.

## Correction

- Remplacement du defilement natif par un controle Pointer Events : le rail suit le deplacement horizontal, puis rejoint une carte au relachement ; les fleches utilisent le meme positionnement.
- `touch-action: pan-y pinch-zoom` conserve les gestes verticaux et le zoom du navigateur. Le mouvement horizontal est distingue apres un seuil de 6 px. Un geste court revient sur la carte, un geste rapide peut avancer.
- Progression animee avec le rail. Capture du pointeur apres intention horizontale ; transfert de la capture implicite des images ignore correctement. Le test tactile a detecte cette annulation prematuree dans la premiere version locale, corrigee avant publication en preview.
- Suppression du clic provoque par un glissement ; clic simple et focus clavier conserves. Annulation, redimensionnement, mouvement reduit et cycle des sections Shopify geres. Ecouteurs regroupes dans un AbortController et animations nettoyees.
- Ancien code scroll/scrollTo, cible intermediaire, scroll-snap, compensation de fin de rail et styles de scrollbar retires. Aucune dependance ajoutee.

## Preuves

`/private/tmp/milaura-pointer-swipe-20260905/` contient les scripts et resultats de recette, captures et pullback.

- `node --check` et `git diff --check` conformes. Theme Check : zero erreur, 16 avertissements historiques hors des fichiers modifies.
- Chromium : 360/390/430/768/1440 px, gestes CDP tactiles sur les 13 rangees a 390 px, aller/retour et fleches. Geste diagonal sur le texte avec CPU x4, scroll vertical, clics rapides, clavier, lien collection, mouvement reduit, resize et rechargement de section conformes.
- WebKit 26.5 : rendu 390/1440 et controle Pointer Events par souris fiable conformes. Ce test WebKit n'est PAS un test tactile d'iPhone physique.
- Geste rapide depuis une carte partiellement visible, annulation puis fleches et acces aux 39 pierres sans JavaScript conformes.
- Comparaison des dimensions et styles des 39 cartes et commandes avec le live precedent : identiques a chaque largeur testee. Carte mobile 286 px, intervalle 16 px, marge gauche 18 px ; footer preserve.

Preview `200974958939` mise a jour avec les deux assets, push cible `--nodelete --strict`. Pullback 2/2 identique :

- JS SHA-256 `0e80fe1574afd5b3c897adc4878d2679fc69eab6b7d6bf001859cb379d02a2be`.
- CSS SHA-256 `130bb5044bdd39000574eef20eff5e1d07317f788d522bc52402a473b035ba36`.

## Etat de livraison

Correction disponible en preview. Lien de test transmis a Patrice : `https://milaura.fr/pages/bijoux-par-pierre?preview_theme_id=200974958939&swipe=pointer-20260905#MilauraStoneDirectory`.

Retour sur son iPhone attendu. Aucun nouveau deploiement live effectue dans ce lot a cette heure ; le live `190430282075` sert encore le lot natif precedent. Ne pas annoncer le swipe iPhone comme valide sans son retour. L'autorisation de correction et de publication du perimetre persiste ; le test demande porte sur le fonctionnement reel.

Le checkout principal et ses modifications concurrentes restent preserves. Le theme panier prive `200990818651` est hors lot.

## Publication live du 2026-09-05 a 18:56 CEST

GO explicite de Patrice : « push commit deploie live ». Source `23b6b565` deja poussee, integration `372dd0c3` poussee sur `codex/milaura-integration`.

Avant integration, les cinq fichiers modifies par les nouveaux commits du miroir `origin/main` (`e7717b59`) ont ete compares a HEAD et sont identiques. Les deux assets live relus correspondent aussi a cette base. Le controle automatique a d'abord suspendu le merge ; la comparaison separee a etabli l'absence de changement distant a perdre, puis l'integration a ete autorisee. Aucun merge du miroir effectue.

Deploiement cible des deux assets sur `190430282075`, sans suppression, avec `--allow-live --strict`. Pullback 2/2 identique aux SHA-256 ci-dessus. Preuves : `live-push.json`, `live-pullback-comparison.json`, `mirror-before.json`, `live-qa.json`, `live-webkit-qa.json` sous le dossier temporaire du lot.

Recette publique : Chromium 360/390/430/768/1440, WebKit 390/1440. Gestes tactiles simules, fleches, indicateur, liens, clavier, defilement vertical, CPU x4, resize et mouvement reduit conformes. Verification des dimensions/styles identiques ; capture mobile publique relue. Theme Check d'integration : zero erreur, 16 avertissements historiques. Aucun iPhone physique teste par Codex ; ne pas transformer le GO live en preuve instrumentee sur son appareil.

Worktree propre et integre retire ; branche source poussee conservee. Reservations liberees. Les sept fichiers deja modifies du checkout principal ont ete verifies identiques bit a bit apres integration ; seules les contributions documentaires de ce lot sont ensuite actualisees avec un index isole. Autres travaux preserves. Le statut preview ci-dessus decrit l'etape precedente, remplacee par cette publication live.
