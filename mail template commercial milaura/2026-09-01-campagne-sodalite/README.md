# Campagne marketing MilAura | Sodalite | 2026-09-01

Alias canonique : implementation de reference de `Template 1`.

## Statut

- Template final controle en largeur mobile 390 px le 2026-09-01.
- Brouillon Shopify Messaging `75713150` finalise puis envoye.
- Deux envois de test ont ete effectues manuellement par Patrice pendant les iterations.
- Segment final : `Abonnes a la liste de diffusion`, 25 destinataires controles.
- Statut Shopify final relu : `Envoye`, le 2026-09-01 a 14:10 CEST.
- Aucun changement applique aux automatisations ou aux e-mails transactionnels dans la phase d envoi marketing.
- Le systeme est valide par Patrice comme `Template 1`, reutilisable pour les prochaines campagnes.

## Direction retenue

Le template reprend le rythme du mail de référence fourni par Patrice sans copier son identité :

1. hero animé avec les papillons de la landing Sodalite ;
2. hook éditorial immédiatement lisible ;
3. clarté d’esprit traitée comme la réponse principale au problème de la rentrée ;
4. expression et confiance développées plus loin, chacune avec un produit ;
5. présence discrète de Karine dans une petite bulle ronde ;
6. produits détourés et présentés sans cartes rectangulaires ;
7. CTA final et rassurance MilAura.

## Campagne

- Sujet proposé : `La sodalite, la pierre de votre rentrée`
- Préheader : `La sodalite est connue pour favoriser la clarté de l’esprit. Découvrez la sélection de Karine.`
- Destination principale : `https://milaura.fr/collections/selection-de-karine`
- Tracking proposé : `utm_source=shopify_email&utm_medium=email&utm_campaign=rentree_sodalite_2026`

## Compatibilité du hero animé

Les balises vidéo HTML5 ne sont pas fiables dans les clients e-mail et sont refusées par le validateur du code Shopify Messaging. La V2 utilise donc un GIF animé e-mail de 3,1 Mo, dérivé de la vidéo mobile :

- source : `milaura-rentree-sodalite-landing-v2-mobile.mp4` ;
- livrable : `milaura-rentree-sodalite-email-v2.gif` ;
- durée : 6 secondes en boucle ;
- définition : 640 x 427 px à 8 images par seconde ;
- fallback naturel : la première image du GIF.

Le GIF a ete depose dans Shopify Files et charge dans la campagne envoyee. Pour une reutilisation, verifier la nouvelle URL CDN et le poids du media avant envoi.

## Détourages locaux

- `horus-sodalite-cutout-v1.png`
- `boucles-sodalite-cutout-v1.png`
- `halo-sodalite-cutout-v1.png`

Ces trois PNG transparents sont utilisés par la prévisualisation locale et ont été déposés dans Shopify Files le 2026-09-01. Le brouillon Shopify utilise leurs URL CDN.

## Sources produit vérifiées le 2026-09-01

- Bracelet Horus doré en sodalite 6 mm : 34,90 €
- Boucles dorées en sodalite 36 mm : 12,50 €
- Bracelet Halo doré en sodalite 4 mm : 24,00 €

Les titres, descriptions, prix et images viennent des fiches produit publiques MilAura au moment de la création. Ils devront être revérifiés juste avant l’envoi de la campagne.

## Integration Shopify Email

`index.html` est une base e-mail responsive en tables, avec styles critiques inline. Lors de l’intégration dans Shopify Email :

1. remplacer le lien `#` de desabonnement par le mecanisme legal Shopify ;
2. verifier que le GIF anime Shopify est charge et conserve son lien vers la destination ;
3. controler l affichage mobile et desktop ;
4. reverifier les prix, la disponibilite, les liens et les medias ;
5. verifier le nombre exact de destinataires dans Shopify ;
6. ne lancer l envoi qu apres le GO explicite de Patrice.

## Reutilisation

Ne pas reconstruire ce design depuis zero. Lire `../TEMPLATE-1.md`, conserver la structure et remplacer les variables propres a la nouvelle campagne.
