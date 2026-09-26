# Hero premium Pieces rares live

Date : 2026-09-26 19:13 CEST

## Decision et perimetre

Patrice a valide la scene F04 V1, le hero photographie plein cadre avec texte superpose, la copie exacte et le remplacement des trois cadres de reassurance par un bandeau defilant. Il a autorise le commit, le push et le deploiement direct sur le live, sans preview.

Le lot couvre uniquement :

- le master carre de la Home, sans modification du CTA existant ;
- une composition panoramique dediee au hero desktop de la landing ;
- une composition verticale dediee au hero mobile de la landing ;
- le hero et le bandeau d expedition de la landing Pieces rares.

## Livraison

- Branche source : `codex/milaura-rare-hero-premium-20260926`
- Branche d integration : `codex/milaura-integration`
- Commit fonctionnel : `6286a7c4 feat: elevate rare pieces hero`
- Theme Shopify live : `dawn-X-milaura/main`, ID `190430282075`
- Deploiement : deux passes ciblees, sans suppression. La premiere a publie les trois assets, le CSS et la section. La seconde a active les deux templates.

Fichiers de theme deployes :

- `assets/milaura-hero-pieces-rares-private-presentation-desktop-v1.webp`
- `assets/milaura-hero-pieces-rares-private-presentation-mobile-v1.webp`
- `assets/milaura-rare-pieces-private-presentation-v1.webp`
- `assets/milaura-rare-pieces-landing.css`
- `sections/milaura-rare-pieces-landing.liquid`
- `templates/collection.milaura-pieces-rares.json`
- `templates/index.json`

## Copy publique validee

- H1 : `Pieces rares,`
- Introduction : `Geodes, mineraux rares & pierres precieuses.`
- Bandeau : `Nos pieces haut de gamme et nos pierres precieuses requierent une attention particuliere. L expedition est assuree par transporteur prive et un certificat d authenticite est delivre avec chaque piece.`

Les accents et apostrophes francais sont presents dans le code public. Ils sont translitteres uniquement dans ce checkpoint technique.

## Verifications

- `git diff --check` : PASS.
- JSON des deux templates : PASS.
- Theme Check : `0` erreur, `16` avertissements historiques dans des fichiers hors lot.
- Pullback live : egalite stricte `7/7` par SHA-1 entre le depot et le theme public.
- Landing publique `https://milaura.fr/collections/pieces-rares`, desktop `1440 x 900` : source panoramique correcte, H1 et introduction exacts, bandeau exact, anciens cadres absents, aucun debordement horizontal, aucune erreur navigateur.
- Landing publique, mobile `390 x 844` : source verticale correcte, meme copie, aucun debordement horizontal, aucune erreur navigateur.
- Home publique `https://milaura.fr/`, desktop : master carre actif, CTA `Voir toute la collection` conserve avec `/collections/pieces-rares`.
- Home publique, mobile : panneau fixe toujours masque, aucun debordement horizontal.
- Les sessions de QA publique ne contenaient aucun iframe ni barre Shopify de preview.

## Etat final

`LIVE VERIFIE`. Le GO visuel final reste celui de Patrice sur le site public. Les fichiers concurrents non suivis du checkout d integration ont ete preserves et exclus du commit.
