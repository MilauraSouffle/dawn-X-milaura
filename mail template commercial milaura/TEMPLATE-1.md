# MilAura Template 1, systeme canonique de mail marketing

Date de validation : 2026-09-01

Statut : `VALIDE PAR PATRICE - REUTILISABLE`

## Definition

`Template 1` est le nom canonique du premier systeme de mail marketing MilAura. Il doit etre reutilise sur demande pour :

- une pierre ou un produit ;
- une collection ou une selection saisonniere ;
- un article ou un contenu editorial ;
- une annonce ou un envoi informatif ;
- une campagne commerciale sans remise artificielle.

L implementation de reference est la campagne Sodalite du 2026-09-01 :

- source HTML : `2026-09-01-campagne-sodalite/index.html` ;
- notes et preuves : `2026-09-01-campagne-sodalite/README.md` ;
- hero anime local : `2026-09-01-campagne-sodalite/milaura-rentree-sodalite-email-v2.gif` ;
- campagne Shopify Messaging : ID `75713150` ;
- objet envoye : `La sodalite, la pierre de votre rentree`.

## Structure a conserver

1. Preheader discret et version en ligne.
2. Logo officiel MilAura dans le header.
3. Hero visuel pleine largeur, sans marge parasite sur mobile.
4. Hook direct, humain et specifique au sujet.
5. Une promesse principale qui repond au vrai probleme du lecteur.
6. Un premier produit ou contenu fort, detoure et sans grosse carte.
7. Une courte citation personnelle de Karine, en italique, avec une petite photo ronde.
8. Deux angles secondaires, chacun porte par un produit, un conseil ou un contenu distinct.
9. Un CTA final simple.
10. Trois preuves ou rassurances avec une UI propre.
11. Logo officiel MilAura, contact et desabonnement dans le footer.

## Direction creative non negociable

- Produits detoures qui flottent dans la composition, pas de succession de cadres.
- Peu de panneaux et aucune grosse pastille generique.
- Photo de Karine petite, ronde et editoriale, jamais traitee comme une photo d identite.
- Copywriting concret. Aucune phrase poetique interchangeable, aucun faux luxe et aucun AI slop.
- La premiere vertu, idee ou information repond au pain point principal. Les angles secondaires arrivent ensuite.
- Le mail reste respirant, premium, lisible et mobile-first.
- Utiliser uniquement le logo officiel `milaura-logo-officiel.png` depuis `/Users/paesano/Documents/Agentic-Ops/MILAURA-BRAND-SYSTEM-2026/sources/raster/`.

## Variables a remplacer a chaque campagne

- objet et preheader ;
- hero, texte alternatif et URL principale ;
- hook et pain point ;
- promesse ou information principale ;
- produits, contenus, photos, titres, prix et liens ;
- citation de Karine ;
- angles secondaires ;
- CTA final ;
- campagne UTM ;
- date ou contexte editorial.

Quand le sujet ne demande aucun produit, conserver le rythme du template et remplacer les modules produit par des blocs de contenu, de conseil ou d information. Ne pas forcer une vente.

## Contraintes e-mail

- Shopify Messaging est la surface de reference.
- Une video HTML5 ne doit pas etre supposee compatible. Utiliser un GIF anime optimise ou une image fixe avec une premiere image propre.
- Conserver une largeur e-mail maximale de 640 px et des styles critiques inline.
- Tous les liens doivent etre absolus et controles.
- Le desabonnement doit utiliser le mecanisme legal Shopify, jamais un lien `#` en production.
- Verifier prix, stock, disponibilite, URL, media et consentement du segment juste avant l envoi.
- L envoi reel exige un GO explicite de Patrice et un nombre de destinataires visible dans l ecran de verification Shopify.

## Prompt court de reprise

```text
Reprends les mails marketing MilAura. Sujet : [SUJET]. Utilise Template 1. Adapte directement le contenu, les medias, les produits ou les blocs informatifs, les liens et les UTM. Cree le brouillon Shopify Messaging puis ouvre la verification. N envoie rien tant que je ne dis pas GO envoi.
```

La prochaine session commence par lire `AGENTS.md`, ce fichier, le guide copywriting MilAura et la campagne de reference. Elle ne doit pas reconstruire le design depuis zero.
