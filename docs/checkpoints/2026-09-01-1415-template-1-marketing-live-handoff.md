# Handoff MilAura, Template 1 et premiere campagne marketing envoyee

Date : 2026-09-01 14:15 CEST

Statut : `TEMPLATE 1 VALIDE - CAMPAGNE ENVOYEE A 25 DESTINATAIRES`

## Resultat ferme

Patrice a valide le systeme visuel et editorial de la campagne Sodalite. Ce systeme devient officiellement `Template 1`, reutilisable pour toute future session de mail marketing MilAura : produit, pierre, collection, article, contenu editorial ou information.

La premiere campagne marketing MilAura a ete envoyee depuis Shopify Messaging le 2026-09-01 :

- campagne : `La sodalite, la pierre de votre rentree` ;
- ID Shopify Messaging : `75713150` ;
- segment : `Abonnes a la liste de diffusion` ;
- nombre controle dans l ecran de verification : `25` ;
- statut final relu dans Shopify : `Envoye` ;
- heure affichee : `1 sept. 2026 a 14:10` ;
- destination principale : `https://milaura.fr/collections/selection-de-karine` ;
- tracking : `utm_source=shopify_email&utm_medium=email&utm_campaign=rentree_sodalite_2026`.

## Audience et nettoyage

Patrice a declare disposer d une autorisation expresse pour les fiches restantes. Shopify a affiche sa confirmation de consentement, puis l enregistrement a ete confirme.

- Six fiches de test ou adresses invalides nommees par Patrice ont ete supprimees definitivement.
- Les adresses completes ne sont pas recopiees dans ce checkpoint afin de ne pas versionner de donnees personnelles inutiles.
- Apres suppression : `26` fiches clientes restantes.
- `25` fiches possedent une adresse e-mail et ont ete marquees comme acceptees pour le marketing par e-mail.
- Une fiche sans adresse e-mail est restee hors cible.
- Le segment Shopify a ensuite affiche exactement `25` abonnes.

## Decision durable Template 1

Source canonique :

- `mail template commercial milaura/TEMPLATE-1.md` ;
- `mail template commercial milaura/2026-09-01-campagne-sodalite/index.html` ;
- `mail template commercial milaura/2026-09-01-campagne-sodalite/README.md` ;
- `mail template commercial milaura/2026-09-01-campagne-sodalite/milaura-rentree-sodalite-email-v2.gif`.

Le design ne doit pas etre reconstruit depuis zero. Une nouvelle campagne remplace les variables du sujet, du hero, du hook, des produits ou contenus, de la citation, des CTA, des liens et des UTM tout en conservant le rythme, la composition et les contraintes e-mail du Template 1.

Les invariants sont : logo officiel en haut et en bas, hero pleine largeur, hook direct, pain point principal valorise en premier, produits detoures ou blocs informatifs sans cadres lourds, petite bulle ronde de Karine avec citation personnelle en italique, deux angles secondaires, CTA final, rassurance polie, contact et desabonnement Shopify.

## Validation effectuee

- Galerie locale inspectee par Patrice sur desktop et mobile.
- Corrections validees : marge gauche retiree, hero anime par GIF, rassurance polie, logo officiel en footer puis en header, petite bulle ronde de Karine et citation personnelle.
- Brouillon Shopify sans erreur de syntaxe avant envoi.
- Ecran de verification Shopify : objet, apercu, segment et `25` destinataires controles.
- Confirmation irreversible `Envoyer maintenant` executee apres GO explicite.
- Tableau Shopify Messaging relu apres rechargement : statut final `Envoye`.

## Limites et risques conserves

- Le fichier HTML local reste une implementation de reference. Avant reutilisation, remplacer les chemins locaux de media et le lien de desabonnement par leurs valeurs Shopify reelles.
- Les prix, stocks, produits, liens, medias et taille du GIF doivent etre verifies a chaque nouvelle campagne.
- Les performances d ouverture, de clic, de conversion et de desabonnement ne sont pas encore disponibles au moment de ce handoff.
- La validation locale precedente de toutes les surfaces transactionnelles n est pas une nouvelle preuve Admin dans ce checkpoint. Ne pas confondre `Template 1` marketing avec les Notifications transactionnelles Shopify.
- Le checkout reste sale avec des changements concurrents hors mail. Ne rien reinitialiser, nettoyer, fusionner ou committer en bloc.
- `docs/workstreams.md` etait deja modifie par une autre session et n a pas ete edite par ce handoff afin de ne pas embarquer un lot concurrent. Ce checkpoint et `docs/codex-handoff.md` portent la reprise Mail.

## Prompt de reprise

```text
Reprends les mails marketing MilAura depuis docs/checkpoints/2026-09-01-1415-template-1-marketing-live-handoff.md. Commence en lecture seule. Sujet : [SUJET]. Utilise Template 1. Adapte directement le contenu, les medias, les produits ou blocs informatifs, les liens et les UTM dans Shopify Messaging. Ouvre ensuite la verification. N envoie rien tant que je ne dis pas GO envoi.
```
