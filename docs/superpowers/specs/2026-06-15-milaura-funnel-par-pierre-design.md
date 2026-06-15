# MilAura : Funnel integre "par pierre" - Design Spec

> Date : 2026-06-15
> Statut : design valide par Patrice, pret pour ecriture du plan d'implementation
> Auteur : Claude Code (CCM), associe technique de Patrice
> Perimetre : amelioration SEO/AEO/GEO + conversion du site live MilAura

## Contexte

Site live : `milaura.fr` (store `milaura-2.myshopify.com`), theme `dawn-X-milaura/main` `#190430282075`.

Objectif business demande par Patrice : deux cibles a la fois.

1. Etre trouve : trafic SEO classique + AEO/GEO (citations par les IA).
2. Vendre plus : conversion une fois le visiteur sur place.

Le funnel se raconte bout en bout : visibilite vers autorite vers conversion.

### Audit live du 2026-06-15 (curl + lecture code, sans navigateur)

Ce qui est solide et ne doit pas etre touche :

- Socle technique : `robots.txt` ouvert, sitemap complet, canonical propres, titles keyword-rich, meta descriptions evocatives.
- Schema structurees fortes :
  - PDP : `Product`, `Offer`, `FAQPage`, `BreadcrumbList`, `MerchantReturnPolicy`, `OfferShippingDetails`, `Brand`, `Organization`.
  - Homepage : `Organization` + `LocalBusiness` + `Store` (SEO local Metz).
  - Collection : `CollectionPage`, `ItemList`, `BreadcrumbList`.
- GEO/AEO deja amorce cote Shopify : `llms.txt` (HTTP 200), `agents.md`, endpoint UCP/MCP, `sitemap_agentic_discovery.xml`.
- Moteur de conversion deja riche (vu dans le code et les handoffs) : cartes surprises panier, sticky bar, hero produit mobile, quiz oriente pierres, landing pages.

Points faibles identifies cote "etre trouve" :

1. Couche "par pierre" quasi absente : seulement 2 collections pierre live (`par-pierre-amethyste`, `par-pierre-jaspe-rouge`) sur 15 a 20 pierres possibles. C'est le principal gisement de la lithotherapie : recherches "vertus amethyste", "bracelet obsidienne", "pierre du sommeil", "quartz rose signification".
2. Titles de collection = nom interne brut. Exemple live : `Par pierre Amethyste` (accent manquant sur "Amethyste"), non optimise requete.
3. Pas d'`aggregateRating` dans le schema `Product`. Une section "Avis client" existe sur les PDP mais le rating agrege n'est pas cable au schema, donc pas d'etoiles en SERP, donc perte de CTR. A confirmer dans le customizer.
4. Couche editoriale / guides probablement faible pour le top-funnel informationnel et les citations IA (GEO). A confirmer.
5. HTML lourd (home environ 548 Ko, PDP environ 687 Ko). Signal de risque Core Web Vitals / mobile, a mesurer avant d'agir.

Limite methodologique : la partie "etre trouve" est factuelle (HTML live). La partie "convertir" est en partie inferee du code, pas d'un parcours navigateur (audit curl-only demande par Patrice). Les vraies donnees GSC/GA4 affineraient la priorisation.

### 19 collections live observees

`amour-relations`, `bestsellers`, `bijoux-pierres-naturelles`, `bols-chantants`, `boucles-oreilles`, `bougies-senteurs`, `bougies-emotionnelles`, `bracelets-pierres`, `chaines`, `colliers-pierres`, `nouveautes`, `par-pierre-amethyste`, `par-pierre-jaspe-rouge`, `pendentifs`, `pierres-mineraux`, `protection-energie`, `rituels-bien-etre`, `savons-naturels`, `serenite-sommeil`.

Trois axes de taxonomy coexistent : par type (bracelets, colliers...), par intention (amour, protection, serenite), par pierre (2 seulement). L'axe "par pierre" est le plus sous-exploite et le plus rentable.

## Principe directeur

L'unite atomique du plan est la "page pierre" : une page collection `/collections/par-pierre-X` enrichie pour servir les trois plans en meme temps.

- Trouve : title oriente requete (exemple "Amethyste : vertus, signification et bijoux"), intro editoriale (vertus + comment porter), bloc FAQ pierre cable en `FAQPage`, contenu redige pour la citabilite IA (reponses courtes et autonomes, "passage-level").
- Convertir : grille produits de la pierre + bloc reassurance + CTA quiz + cross-sell par intention (sommeil, protection, amour).
- Maille : PDP produit vers sa page pierre, page intention vers les pages pierre concernees, articles de blog vers les pages pierre.

Le meme effort produit du trafic qualifie ET une meilleure conversion (la landing est alignee sur l'intention d'achat entrante).

## Frontiere DEV vs OPS

Doctrine projet (verrouillee) : le code = CCM, le contenu = agents.

- DEV (CCM / Claude Code) : template "page pierre" reutilisable, schema JSON-LD, titles, maillage interne, cablage `aggregateRating`, eventuels travaux perf.
- CONTENT (pipeline Camilla/Hermes, `generation-nouveau-produit`) : textes pierre et metafields produit (`vertus`, `stone_benefits`, `stone_description`, etc.). Decision Patrice du 2026-06-15 : le contenu des pages pierre est genere par le pipeline agents, pas redige a la main.

## Architecture en vagues

Le projet est trop large pour un seul plan d'implementation. Il sera decoupe : un plan par vague, en commencant par la Vague 1 (sans dependance) et la Vague 0 (prerequis Shopify Admin).

### Vague 0 - Prerequis taxonomy (dependance Codex)

Prolonge le chantier taxonomy/metafields documente par Codex (voir `docs/superpowers/plans/2026-06-14-milaura-taxonomy-metafields-agents-slider.md`).

- Creer dans Shopify Admin les 8 definitions metafields produit manquantes : `intention_handle`, `qualite`, `ritual_steps`, `scent_notes`, `stone_benefits`, `stone_description`, `story_text`, `vertus`.
- Creer les collections "par pierre" prioritaires dans Shopify Admin.
- Bloquant : toute ecriture Shopify Admin requiert validation explicite de Patrice avant execution.
- Ne pas debloquer `cadeaux-de-mariage` ni les collections futures dans `collection_handles` tant qu'elles n'existent pas dans Shopify (regle Codex).

### Vague 1 - Template page pierre + quick wins (DEV, sans dependance)

- Construire un template collection "page pierre" reutilisable :
  - Intro editoriale alimentee par un metafield de collection (vertus + comment porter).
  - Bloc "vertus" structure.
  - Bloc FAQ pierre cable en `FAQPage` JSON-LD.
  - Bloc reassurance (livraison, retour, certification gemmologue).
  - CTA quiz emotionnel.
  - Cross-sell par intention.
- Quick wins immediats independants :
  - Corriger les titles et accents des 2 collections pierre existantes (`par-pierre-amethyste`, `par-pierre-jaspe-rouge`).
  - Cabler `aggregateRating` dans le schema `Product` si les avis sont confirmes presents.

### Vague 2 - Pilote 2 a 3 pierres

- Selection des pierres pilotes par Patrice (criteres : bestsellers, marge, volume de recherche). Choix non encore arrete au 2026-06-15.
- Contenu complet genere par le pipeline Camilla/Hermes.
- Publication live en micro-iteration (`shopify theme push --only ...`).
- Mesure a J+7 et J+30.

### Vague 3 - Maillage interne

- PDP produit vers sa page pierre.
- Pages intention (amour, protection, serenite) vers les pages pierre concernees.
- Soumission sitemap et suivi GSC.

### Vague 4 - Scale et couche guides

- Etendre aux 12 a 15 pierres principales.
- Ajouter une couche de guides editoriaux (blog) : le vrai carburant GEO et des citations IA.

### Transverse - Performance

- Mesurer precisement Core Web Vitals (le poids HTML observe est un signal, pas une preuve).
- N'agir que si le probleme est confirme.

## Contraintes techniques (regles Codex a respecter)

- Repo tres sale et divergent (`main...origin/main` ahead/behind important). Ne pas revert. Ne pas supposer une baseline propre.
- Jamais de push global. Uniquement `shopify theme push --only <fichiers>`.
- Pour un micro-fix live, preferer une copie temporaire du fichier live si le fichier local contient des changements non lies.
- Aucune ecriture Shopify Admin sans confirmation explicite de Patrice.
- Conventions theme : sections `milaura-*`, classes `.milaura-*`, variables `--milaura-*`, IDs `MilauraXxx`, CSS section-scopee via `{% style %}` avec `#MilauraXxx-{{ section.id }}`.
- Mobile-first (breakpoints 768px / 1024px), vouvoiement, tiret cadratin interdit.
- Rituels pierre : "Portez votre pierre" (jamais "tenez").

## Criteres de succes

- Trafic : hausse des impressions et clics GSC sur les requetes "par pierre" (nom de pierre + vertus / signification / bijou).
- Visibilite SERP : apparition des etoiles d'avis sur les PDP (si `aggregateRating` cable).
- GEO : pages pierre structurees pour etre citees par les IA (FAQ autonomes, reponses courtes).
- Conversion : taux de conversion par page pierre superieur a la moyenne des collections generiques.
- Non-regression : aucun `Liquid error`, aucun debordement horizontal mobile, desktop inchange sauf demande explicite.

## Hors perimetre (YAGNI)

- Refonte visuelle globale du site.
- Refonte du moteur de conversion existant (cartes surprises, hero, quiz) : il fonctionne, on s'y branche.
- Hero slider homepage : chantier separe, hors de ce plan.
- Migration de theme ou de stack.

## Dependances et entrees

- `docs/superpowers/plans/2026-06-14-milaura-taxonomy-metafields-agents-slider.md` (chantier taxonomy en cours).
- `docs/checkpoints/2026-06-14-0819-milaura-taxonomy-metafields-agent-dossier.md`.
- `generation-nouveau-produit/docs/milaura-product-agent-contract.md` (contrat agent produit).
- `config/metafields/product-metafields-definition.json` (18 champs `milaura.*` documentes).
- Donnees GSC/GA4 MilAura (cote agent Vittorio sur le VPS) : optionnel mais souhaitable pour affiner la priorisation des pierres.
