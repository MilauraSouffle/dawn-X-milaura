# Milaura Homepage CRO — Pilier Déclencheur d'achat

> Date : 2026-04-17
> Source : Audit NeuroCRO de milaura.fr (2026-04-16), score global 61/100, potentiel CRO +17%
> Pilier traité : Déclencheur d'achat (48/100, le plus faible)
> Scope : Approche surgical-live (ship now, mesure via Azura à J+7)
> Statut site : LIVE en prod, CA 0€/jour, objectif 100€/jour sous 30 jours

## Contexte business

Milaura.fr est en production. Le site convertit à un taux très bas. L'audit NeuroCRO identifie 4 piliers faibles. Le plus critique est le Déclencheur d'achat (score 48/100) : les visiteurs naviguent sans jamais recevoir de signal clair d'action immédiate. Les CTA sont multiples, la garantie est absente, les objections ne sont pas traitées, la réassurance est reléguée au footer.

Karine (gérante) reçoit un rapport quotidien via Azura (agent Gemini 3.1 sur WhatsApp). Les décisions CRO seront mesurées sur 7 jours post-push par comparaison avec une baseline 7 jours pré-push.

## Objectif

Appliquer les recommandations Déclencheur en restant surgical (pas de refonte visuelle). Livrer en 1 à 2 jours. Mesurer le delta. Itérer ou rollback à J+7.

## Périmètre

### Fichiers touchés
- `sections/milaura-hero-showcase.liquid` — fusion des 4 CTA en 1 CTA primaire + liens secondaires
- `sections/milaura-trust-bar.liquid` — ajout d'un badge "Satisfait ou remboursé 30j"
- `templates/index.json` — reorder + retrait hero-conversion + ajout homepage-faq
- Nouveau : `sections/milaura-homepage-faq.liquid` — FAQ 4-5 questions traitant les objections universelles

### Hors scope
- Page produit (`product.milaura-produit.json`)
- Quiz, dashboard compte, contact, notre-histoire
- Refonte `milaura.css` globale
- Réduction du nombre total de sections (phase 2 si GO J+7)
- A/B test formel (volume trafic trop faible pour significativité statistique)

## Design par composant

### 1. Refonte `milaura-hero-showcase.liquid`

**Problème audit** : 4 onglets univers, chacun avec son CTA ("Je découvre", "J'y vais", "J'en ai besoin", "Je prends soin de moi"). Paralysie décisionnelle. Titre neutre "Nos minéraux... Votre bien-être !".

**État cible** :

Titre principal :
> Trouvez la pierre qui vous ressemble, en 2 minutes.

Sous-titre :
> Pierres naturelles certifiées, sélectionnées à la main. Livrées chez vous avec un guide d'usage personnalisé.

CTA primaire unique, dominant, au centre du hero :
> **Faire le quiz (2 min) →** (route `/pages/diagnostic-emotionnel`)

Liens secondaires discrets (texte, pas boutons), sous le CTA :
> Ou : explorer les pierres · voir les bougies

Onglets univers : conservés comme mini-previews visuels sous le hero, SANS CTA propre. Les 4 `cta_label` par onglet sont ignorés au rendu si `primary_cta_label` est rempli.

**Schema (backward-compat)** :
- Nouveaux settings : `primary_cta_label`, `primary_cta_url`, `primary_cta_label_mobile`, `secondary_links` (richtext), `heading_new`, `subheading_new`
- Anciens settings `cta_label` par univers : conservés, marqués "legacy, ignoré si primary_cta_label rempli"
- Defaults = les textes ci-dessus

### 2. Nouvelle section `milaura-homepage-faq.liquid`

**Rôle** : traiter les objections universelles qui bloquent l'achat. Pas une FAQ produit.

**Architecture** :
- Basé sur le pattern `milaura-product-faq.liquid` (accordéon, classes `.milaura-*`)
- Blocks répétables de type `question` avec `title` et `content`
- JSON-LD FAQPage auto-généré, `@id` scoped à `{{ shop.url }}#faq` pour éviter conflit avec autres schemas existants
- Setting section : `heading` (default "Vos questions, nos réponses")

**Questions par défaut (vouvoiement, pas de tiret cadratin)** :

1. **Vos pierres sont-elles authentiques ?**
   > Oui. Chaque pierre est certifiée naturelle, sélectionnée auprès de fournisseurs vérifiés et accompagnée d'une fiche d'origine. Aucune pierre synthétique, aucune teinture.

2. **Comment savoir quelle pierre choisir ?**
   > Notre diagnostic émotionnel (quiz 2 min) vous oriente selon votre ressenti actuel. Chaque commande inclut aussi un guide d'usage personnalisé selon votre profil.

3. **Si la pierre ne me convient pas ?**
   > Vous avez 30 jours pour la retourner. Remboursement intégral, retour gratuit en France métropolitaine. Aucune question posée.

4. **Combien de temps pour la livraison ?**
   > Expédition sous 48h depuis la France. Livraison 2 à 4 jours ouvrés. Suivi par email à chaque étape.

5. **Les bougies sont-elles artisanales ?**
   > Oui, coulées à la main dans notre atelier en France. Cire végétale, parfums naturels, mèche coton pure. Aucun additif pétrochimique.

### 3. Édition `milaura-trust-bar.liquid` + reorder `index.json`

**Ajout d'un badge garantie en première position, les 4 existants conservés** (5 badges total) :

| Position | Badge | Label | Sub-label | Statut |
|---|---|---|---|---|
| 1 | 🛡️ | Satisfait ou remboursé 30j | Retour gratuit, sans question | NOUVEAU |
| 2 | 🇫🇷 | Artisanat Français | — | EXISTANT |
| 3 | 💎 | Pierres Certifiées | — | EXISTANT |
| 4 | 📦 | Livraison Offerte dès 39€ | — | EXISTANT |
| 5 | 🎁 | Emballage Cadeau | — | EXISTANT |

Schema : ajout d'un 5ème type de block `guarantee_badge` par défaut. Zéro suppression de blocks existants (backward-compat customizer total).

Vérif responsive : 5 badges sur une ligne desktop OK, sur mobile (< 768px) passage en scroll horizontal ou 2 lignes de 2-3. Le CSS actuel de `milaura-trust-bar` gère déjà le wrap — à QA-er.

**Nouvel ordre `index.json`** :

Actuel : `hero-showcase → trust-bar → hero-conversion → featured-products → benefits-explorer → quiz-teaser → featured-products → video-process → image-text → featured-blog-post → image-text → image-text → testimonials → trust-badges`

Cible : `hero-showcase → trust-bar → featured-products → benefits-explorer → quiz-teaser → featured-products → video-process → image-text → featured-blog-post → image-text → image-text → homepage-faq → testimonials → trust-badges`

Différences : `hero-conversion` retiré de l'ordre (fichier source conservé). `homepage-faq` ajouté avant `testimonials` (objections → preuves → décision).

**Redondance intentionnelle** : la garantie 30j apparaît dans la trust-bar (vue immédiate) ET dans la FAQ Q3 (vue au moment du doute).

## Edge cases & non-régression

### Backward-compat
- Hero-showcase : settings legacy `cta_label` par univers conservés dans le schema, ignorés au rendu si nouveau `primary_cta_label` rempli. Rollback possible en vidant le nouveau setting via customizer, sans redéploiement.
- Hero-conversion : retiré de `index.json`, le fichier `sections/milaura-hero-conversion.liquid` reste. Ré-ajoutable via customizer.

### Schema JSON-LD
- Vérifier que `templates/page.milaura-notre-histoire.json` et les snippets de schema globaux n'ajoutent pas déjà un FAQPage sur `/`.
- Si conflit, scope via `"@id": "{{ shop.url }}#faq"`.
- Test Google Rich Results avant push live.

### Routes
- `/pages/diagnostic-emotionnel` — confirmée existante (`templates/page.diagnostic-emotionnel.json` présent).
- `/collections/pierres` et `/collections/bougies` — à vérifier avant push. Si absentes, adapter les liens vers les collections existantes.

### Responsive
- Trust-bar reorder : vérifier spacing mobile (< 768px), pas d'empilement cassant.
- CTA hero mobile : label "Faire le quiz (2 min) →" potentiellement trop long sur iPhone SE (< 380px). Setting `primary_cta_label_mobile` = "Faire le quiz →".
- Padding hero : si ancien hero supposait `hero-conversion` en dessous, ajuster margin-bottom.

### SEO
- Pas de suppression de contenu indexable : vérifié dans `index.json`, les 3 blocks `reassurance` du hero-conversion contiennent `"text": ""` (vides). Leur retrait ne supprime aucun contenu indexé. Par ailleurs, trust-bar + FAQ ajoutent du contenu indexable supplémentaire (net positif SEO).
- Pas de changement d'URL, de `<title>`, ou de meta.

### Déploiement
- Push préalable sur un thème unpublished (brouillon) via `shopify theme push --store milaura-2 --theme <brouillon> --unpublished`
- QA sur l'URL preview du thème brouillon
- Validation customizer en preview
- Puis push sur le thème live : `shopify theme push --store milaura-2 --theme 190430282075 --allow-live`
- INTERDIT : push direct sur thème live sans preview préalable.

### Rollback
- Revert git sur `templates/index.json` + `sections/milaura-hero-showcase.liquid` + `sections/milaura-trust-bar.liquid`
- Suppression rendu de `sections/milaura-homepage-faq.liquid` (le fichier peut rester dans le repo)
- Re-push via `shopify theme push --allow-live`
- Temps total rollback : < 2 minutes.

## Mesure & succès

### Baseline à capturer avant push (J-0)

Relevé Azura ou Shopify Admin > Analytics sur les 7 derniers jours avant push :
- Sessions homepage (`/`)
- Taux de clic vers `/pages/diagnostic-emotionnel` depuis homepage
- Taux de clic vers collections depuis homepage
- Ajout panier (sessions avec "product added to cart")
- Taux de conversion global (commandes / sessions)
- Taux de rebond homepage

Stocker dans `docs/superpowers/specs/2026-04-17-milaura-cro-homepage-baseline.md` (à créer lors de l'exécution du plan).

### Mesure J+7

Mêmes métriques sur les 7 jours post-push. Deltas attendus (ordres de grandeur, pas engagements) :
- Clics quiz : +50% à +200%
- Ajout panier : +10% à +30%
- Conversion globale : objectif NeuroCRO +17%, minimum viable +5%
- Rebond homepage : inchangé ou -5%

### Critères GO/NO-GO J+7

- **GO keep** : conversion +5% ou plus OU clics quiz +50% ou plus
- **Neutre** : conversion ±3%, clics quiz +10% à +50%. Garder, itérer.
- **ROLLBACK** : conversion -5% ou plus, OU rebond +10% ou plus, OU clics collections -40% ou plus

### Limite de significativité

Le volume actuel (site à 0€ CA, probablement < 100 sessions/jour) ne permet pas de significativité statistique sur 7 jours. La décision humaine prime (nombre absolu de commandes, pas les %). Azura remonte les chiffres, Karine + Patrice tranchent au feeling business.

### Intégration Azura

Pas de changement côté Azura (les métriques sont déjà dans son rapport quotidien WhatsApp). Ajouter au brief Azura : "compare aux 7 jours pré-push sur les clics quiz et l'ajout panier".

## Livrables finaux

- `sections/milaura-hero-showcase.liquid` mis à jour avec CTA unique + nouveaux settings
- `sections/milaura-trust-bar.liquid` avec badge garantie
- `sections/milaura-homepage-faq.liquid` nouveau fichier
- `templates/index.json` réordonné + ajout FAQ + retrait hero-conversion
- Spec baseline commité
- Site pushed en prod via `shopify theme push --allow-live`
- Azura briefée sur le focus mesure J+7
- Décision GO/ROLLBACK planifiée pour 2026-04-24 (J+7 si push aujourd'hui)

## Phase 2 (si GO J+7)

Hors scope de ce plan, à envisager si les résultats valident l'approche :
- Réécriture des descriptions produits en format "Bénéfice + preuve" (pilier Motivation)
- Témoignages enrichis avec contexte initial + usage + résultat (pilier Motivation)
- Scénarios d'usage concrets dans benefits-explorer (pilier Capacité cognitive)
- Réduction du nombre de sections homepage (14 → 7)
- Glossaire infobulles pour jargon ("ancrage", "chakra", "lithothérapie")
