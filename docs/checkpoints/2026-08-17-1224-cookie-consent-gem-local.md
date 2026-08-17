# Checkpoint bandeau cookies gemme

Date : 2026-08-17 12:24 CEST

Statut : implementation locale terminee sur branche dediee. Aucun fichier pousse vers un theme Shopify, aucun reglage Shopify modifie et aucun changement live effectue.

## Perimetre livre

- Remplacement complet de l ancien habillage du bandeau Shopify par un composant MilAura autonome.
- Gemme quartz rose detouree comme element signature. Source fournie et validee par Patrice, conversion WebP locale de 1 523 831 octets a 121 572 octets.
- Bandeau fixe qui monte depuis le bas avec une hauteur maximale de `20svh` et un plafond de 190 px.
- Trois choix de premier niveau : `Je refuse`, `Je choisis mes cookies`, `J’accepte`.
- Panneau de preferences detaille : essentiels toujours actifs, preferences, mesure d audience, marketing et partage publicitaire uniquement lorsque la region Shopify l exige.
- Lien permanent `Gerer mes cookies` dans le footer pour rouvrir les choix.
- API Shopify Customer Privacy conservee comme moteur de consentement et de persistance.

## Nettoyage effectue

- Suppression du script `Cookie Banner Text Personalization v4` et de son `MutationObserver` dans `layout/theme.liquid`.
- Suppression integrale des 293 lignes de l ancien bloc CSS cookies dans `assets/milaura.css`.
- Aucun selecteur de compatibilite avec l ancien composant, aucune ancienne animation et aucun ancien texte conserves.
- Le seul ciblage du bandeau natif Shopify est un secours controle : il est masque uniquement apres chargement reussi de l API Customer Privacy. Si cette API echoue, le bandeau natif reste disponible.

## Fichiers du lot

- `assets/milaura-cookie-consent.css`
- `assets/milaura-cookie-consent.js`
- `assets/milaura-cookie-gem.webp`
- `snippets/milaura-cookie-consent.liquid`
- `layout/theme.liquid`
- `assets/milaura.css`
- `sections/milaura-footer.liquid`
- `docs/checkpoints/2026-08-17-1224-cookie-consent-gem-local.md`

## Validation technique locale

- `git diff --check` : reussi.
- `node --check assets/milaura-cookie-consent.js` : reussi.
- `shopify theme check` : 293 fichiers inspectes, aucune erreur, 17 avertissements preexistants dans 9 fichiers hors perimetre.
- Recherche des anciens identifiants cookies dans les fichiers touches : aucune occurrence restante.
- Charte : couleurs et familles typographiques uniquement via les tokens MilAura. Aucune couleur hexadecimale ou police en dur dans le nouveau composant.
- Asset : WebP 1000 x 1000 avec transparence conservee.

## Validation navigateur locale

Playwright Chromium a valide les parcours suivants avec une API Shopify simulee :

1. Affichage uniquement lorsque `shouldShowBanner()` le demande.
2. `J’accepte` enregistre `preferences`, `analytics` et `marketing` a `yes`, puis ferme le bandeau.
3. `Je refuse` enregistre ces trois categories a `no`, puis ferme le bandeau.
4. Le panneau detaille enregistre une selection mixte exacte.
5. `Gerer mes cookies` rouvre le panneau avec les choix deja enregistres.
6. `Escape` ferme le panneau et rend le focus au bouton declencheur.
7. Le focus clavier reste boucle dans la fenetre de preferences.
8. Les erreurs d enregistrement restent visibles et permettent de reessayer.

Viewports controles sans debordement horizontal ni depassement de la hauteur maximale :

- 320 x 568
- 360 x 800
- 390 x 844
- 430 x 932
- 820 x 1180
- 844 x 390 paysage
- 1440 x 900

Captures finales :

- `/Users/paesano/.codex/visualizations/2026/08/17/01a00e79-ee4a-7d70-8498-d666feafc07d/milaura-cookie-consent-mobile-390.png`
- `/Users/paesano/.codex/visualizations/2026/08/17/01a00e79-ee4a-7d70-8498-d666feafc07d/milaura-cookie-consent-desktop-1440.png`

## Etat des autorisations

- GO creatif recu le 2026-08-17 pour utiliser cette gemme comme element signature anime.
- GO de developpement local recu le 2026-08-17.
- GO visuel sur le rendu implemente : encore requis.
- GO de preview Shopify : non demande et non recu.
- GO d integration dans la branche canonique : non demande et non recu.
- GO live : non demande et non recu.

## Hors perimetre preserve

- Cross-sell live et Ruban.
- Atelier des emotions.
- Diagnostic, comptes et Mon Ecrin.
- Emails, notifications et automatisations lifecycle.
- Newsletter, popups et future feature ScratchToReveal. Leur suppression ou remplacement reste un lot dedie.

## Prochaine decision

Patrice valide ou refuse le rendu mobile et desktop a partir des captures locales. Apres GO visuel, le prochain lot devra reserver un theme prive et definir explicitement si une preview Shopify est autorisee. Aucun passage live ne doit etre deduit de ce GO.
