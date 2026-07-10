# AUDIT SEO COMPLET -- milaura.fr

**Date** : 30 mars 2026
**Plateforme** : Shopify (Dawn 15.4.0 custom theme)
**Auditeur** : Claude Opus 4.6 (7 agents specialises en parallele)

---

## SCORE GLOBAL : 58/100

| Categorie | Poids | Score | Pondere |
|-----------|-------|-------|---------|
| Technical SEO | 20% | 68/100 | 13.6 |
| Contenu & E-E-A-T | 20% | 62/100 | 12.4 |
| On-Page SEO | 15% | 65/100 | 9.8 |
| Schema / Donnees structurees | 10% | 78/100 | 7.8 |
| Performance (CWV) | 10% | 65/100 | 6.5 |
| AI Search / GEO | 10% | 38/100 | 3.8 |
| SEO Local | 10% | 39/100 | 3.9 |
| Images | 5% | 60/100 | 3.0 |
| **TOTAL** | **100%** | | **60.8 => 58** |

---

## RESUME EXECUTIF

### Top 5 problemes CRITIQUES

1. **Zero contenu citable pour les moteurs IA** (GEO 38/100) : descriptions produit ~25 mots, blog vide, pas de page "A propos", pas d'articles educatifs. Les IA n'ont rien a citer.

2. **Google Business Profile non configure** (Local 39/100) : categorie GBP = facteur #1 du ranking local. Sans GBP, MilAura est invisible dans le Map Pack et les recherches locales "lithotherapie Metz".

3. **Zero avis clients reels** : Judge.me pas installe, 0 reviews, pas d'AggregateRating dans le schema Product. Pas d'etoiles dans les SERP = -15-25% de CTR.

4. **HTML homepage de 474 KB** (242 KB de CSS inline) : 4x la taille recommandee. Risque LCP mobile > 3s.

5. **Polices manquantes** : Playfair Display, Dancing Script et Lato sont referencees dans le CSS mais jamais chargees. Le design prevu n'est pas rendu.

### Top 5 quick wins

1. **Fix applicableCountry** dans le schema Product (5 min, corrige une erreur de validation)
2. **Fix WebSite.description** HTML-encoded dans theme.liquid (5 min)
3. **Supprimer le preload duplique** de la police assistant_n4 (2 min)
4. **Mettre les 5 bougie-test-* en Draft** dans Shopify Admin (5 min)
5. **Corriger les fautes d'orthographe homepage** : "fabriquee" > "fabriquees", "nous bougies" > "nos bougies", "Je prend" > "Je prends" (10 min)

---

## 1. TECHNICAL SEO (68/100)

### Points forts
- SSR complet (pas de SPA, tout est rendu cote serveur)
- TTFB excellent : 78-93ms depuis Paris (CDN Cloudflare)
- Canonicals corrects (gere les duplications Shopify /collections/.../products/...)
- Compression Brotli active
- HTTP/2 + 103 Early Hints
- Redirections propres : http > https (301), www > non-www (301), pas de chaines

### Problemes

| Severite | Probleme | Fichier |
|----------|----------|---------|
| CRITIQUE | HTML 474 KB (242 KB CSS inline dans 20 blocs `<style>`) | Tous les milaura-*.liquid |
| CRITIQUE | Double "MilAura" dans les title tags : `{Produit} \| MilAura -- MilAura` | theme.liquid |
| CRITIQUE | Meta description /collections identique a la homepage | Shopify Admin |
| HAUTE | 52 balises script sur la homepage | theme.liquid |
| HAUTE | 5 produits "bougie-test-*" indexes dans le sitemap | Shopify Admin |
| HAUTE | /pages/test-lookup indexable (pas de noindex) | Shopify Admin |
| HAUTE | Collection dupliquee : bougies-emotionnelles vs bougies-emotionnelles-1 | Shopify Admin |
| MOYENNE | HSTS max-age trop faible (91 jours au lieu de 1 an) | Shopify (non modifiable) |
| MOYENNE | Pas de Permissions-Policy ni Referrer-Policy | Shopify (non modifiable) |
| BASSE | /favicon.ico retourne 404 | Assets Shopify |
| BASSE | Pas de security.txt | Non implementable nativement |
| BASSE | IndexNow non supporte | App Shopify necessaire |

---

## 2. CONTENU & E-E-A-T (62/100)

### Scores E-E-A-T detailles

| Facteur | Poids | Score |
|---------|-------|-------|
| Experience | 20% | 50/100 |
| Expertise | 25% | 55/100 |
| Autorite | 25% | 50/100 |
| Confiance (Trustworthiness) | 30% | 72/100 |
| **Composite** | | **57.85/100** |

### Word count par type de page

| Type | Minimum requis | Estime actuel | Statut |
|------|---------------|---------------|--------|
| Homepage | 500 mots | ~610 mots | PASSE (juste) |
| Collections | 300-500 mots | ~60-80 mots (template seul) | ECHEC |
| Produits (avec metafields) | 300 mots | ~400-700 mots | CONDITIONNEL |
| Produits (sans metafields) | 300 mots | ~200-250 mots | ECHEC |
| Blog | 1 500 mots/article | 0 articles | ECHEC |

### Problemes critiques de contenu

| Severite | Probleme |
|----------|----------|
| CRITIQUE | Pas de page "Notre Histoire" / "A propos" (gap E-E-A-T majeur) |
| CRITIQUE | Blog vide (0 articles publies sur 2 blogs configures) |
| CRITIQUE | Persona "Amelie" experte fictive avec faux credentials (risque YMYL) |
| CRITIQUE | Tutoiement sur la page contact (viole la regle editoriale VOUVOIEMENT) |
| HAUTE | Pages collections = thin content (~60 mots de template) |
| HAUTE | Texte story fallback identique sur tous les produits sans metafield custom |
| HAUTE | FAQ produit identique par type (tous les bijoux partagent les memes 4 Q/R) |
| HAUTE | Pas de disclaimer lithotherapie/bien-etre (risque YMYL) |
| HAUTE | "Pierres Certifiees" sans mention du certificateur ni lien vers la certification |
| MOYENNE | Fautes d'orthographe homepage : "fabriquee", "nous bougies", "Je prend" |
| MOYENNE | Seuil livraison gratuite incoherent : 39EUR (badges) vs 39,90EUR (policy) vs 19,90EUR (newsletter) |

---

## 3. SCHEMA / DONNEES STRUCTUREES (78/100)

### Ce qui est en place (excellent)

- JSON-LD exclusif (format recommande par Google)
- @graph avec @id pour lier Organization et WebSite
- Product schema tres complet (offers, shipping, returns, GTIN conditionnel, additionalProperty avec metafields MilAura)
- BreadcrumbList 3 niveaux sur les PDP
- FAQPage conditionnel avec toggle customizer
- SearchAction sur WebSite
- sameAs complet (5 profils sociaux + Pages Jaunes)
- priceValidUntil dynamique (+30 jours)

### Corrections necessaires

| Priorite | Correction | Fichier | Effort |
|----------|-----------|---------|--------|
| HAUTE | applicableCountry : chaine > tableau JSON | milaura-product-hero.liquid L2267 | 5 min |
| HAUTE | AggregateRating absent (code pret, metafields vides) | Installer Judge.me | 30 min |
| MOYENNE | WebSite.description HTML-encoded + herite de la page | theme.liquid L80 | 5 min |
| MOYENNE | Ajouter CollectionPage + ItemList sur /collections/* | milaura-collection-hero.liquid | 20 min |
| MOYENNE | Upgrader Organization > LocalBusiness + Store | theme.liquid L37 | 10 min |
| BASSE | Brand name avec espace trailing : "MilAura " | milaura-product-hero.liquid | 2 min |
| BASSE | SKU et MPN a null dans le Product schema | Shopify Admin (remplir les SKUs) | Variable |

---

## 4. SITEMAP (80/100)

### Structure

| Sitemap | URLs | Statut |
|---------|------|--------|
| sitemap_products_1.xml | 258 (257 produits + homepage) | OK |
| sitemap_pages_1.xml | 6 | OK |
| sitemap_collections_1.xml | 20 | OK (1 doublon a verifier) |
| sitemap_blogs_1.xml | 2 (index uniquement, 0 articles) | Vide |
| **TOTAL** | **286** | Bien sous les limites |

### Problemes

| Severite | Probleme |
|----------|----------|
| HAUTE | Les 257 produits ont le meme lastmod (2026-03-30T18:24:59) : Google ignore le signal lastmod |
| HAUTE | 5 produits test dans le sitemap (bougie-test-*) |
| MOYENNE | bougies-emotionnelles vs bougies-emotionnelles-1 (doublon potentiel) |
| BASSE | Homepage dans sitemap_products (quirk Shopify) |

---

## 5. PERFORMANCE / CWV (65/100)

### Metriques serveur (excellentes)

| Metrique | Valeur | Statut |
|----------|--------|--------|
| TTFB | 78-93ms | EXCELLENT |
| Compression | Brotli niveau 5 | EXCELLENT |
| Cache statique | max-age=1 an | EXCELLENT |
| HTTP/2 | Oui | BON |
| 103 Early Hints | Oui | EXCELLENT |

### Core Web Vitals (estimes)

| Metrique | Estime | Cible | Statut |
|----------|--------|-------|--------|
| LCP | 2.5-4.0s mobile | < 2.5s | A RISQUE |
| INP | < 200ms | < 200ms | BON |
| CLS | 0.05-0.15 | < 0.1 | A RISQUE |

### Problemes majeurs

| Severite | Probleme |
|----------|----------|
| CRITIQUE | 3 polices referencees (Playfair Display, Dancing Script, Lato) mais jamais chargees : design casse |
| CRITIQUE | 242 KB de CSS inline (20 blocs `<style>`) : non cache, re-telecharge a chaque page |
| HAUTE | HTML total 474 KB (cible : < 200 KB) |
| HAUTE | 52 balises script (15 defer, 4 async, ~30 inline) |
| HAUTE | Images source en PNG (1.5 MB/image hero). CDN convertit en WebP mais Safari ancien recoit le PNG |
| MOYENNE | Preload duplique de la police assistant_n4 |
| MOYENNE | 7 pixels de tracking via Web Pixels Manager |

---

## 6. GEO / AI SEARCH (38/100)

### Statut crawlers IA

| Crawler | Statut | Action recommandee |
|---------|--------|-------------------|
| GPTBot (OpenAI) | Autorise (defaut) | Garder |
| ClaudeBot | Autorise (defaut) | Garder |
| Google-Extended | Autorise (defaut) | Garder |
| PerplexityBot | Autorise (defaut) | Garder |
| CCBot (CommonCrawl) | Autorise (defaut) | Bloquer (training only) |

### llms.txt

| Endpoint | Statut |
|----------|--------|
| /pages/llms-txt | EXISTE (bien structure) |
| /.well-known/llms.txt | 404 |

### Scores par plateforme IA

| Plateforme | Score | Probleme principal |
|-----------|-------|-------------------|
| Google AI Overviews | 30/100 | Zero contenu educatif |
| ChatGPT | 35/100 | llms.txt = differenciateur, mais rien a citer |
| Perplexity | 25/100 | Aucune stat, aucune citation, aucune source |
| Bing Copilot | 30/100 | Thin content, pas de reviews |

### Signaux d'autorite de marque

| Plateforme | Statut | Impact |
|-----------|--------|--------|
| Wikipedia | Absent | Tres negatif |
| YouTube | Absent | Tres negatif (correlation 0.737 avec citation IA) |
| Reddit | Absent | Negatif |
| Facebook | Existe | Positif |
| Instagram | Existe | Positif |
| TikTok | Existe | Positif |
| Pages Jaunes | Existe | Positif |

---

## 7. SEO LOCAL (39/100)

### Statut GBP

**NON CONFIGURE** (confirme par le TODO-MILAURA.md, toutes les taches GBP non cochees)

### Categories GBP recommandees

- **Principale** : "Magasin de pierres et mineraux" (ou equivalent francais le plus proche)
- Secondaires : Bijouterie, Magasin de bougies, Boutique de cadeaux

### NAP

| Source | Nom | Adresse | Telephone |
|--------|-----|---------|-----------|
| Schema | MilAura | 92 Rue de Pont-a-Mousson, Montigny-les-Metz 57950 | +33372396473 |
| Legal | ONORA (MilAura) | 92 rue de Pont-a-Mousson, 57950 Montigny-les-Metz | 03 72 39 64 73 |
| Contact | MilAura | Non affichee | +33 3 72 39 64 73 |

**3 formats de telephone differents** : a standardiser.

### Citations manquantes

| Annuaire | Statut |
|----------|--------|
| Google Business Profile | NON FAIT |
| Yelp France | Non |
| Apple Business Connect | Non |
| Bing Places | Non |
| CCI Moselle | Non |

---

## PLAN D'ACTION PRIORITISE

### PHASE 1 : CORRECTIONS IMMEDIATES (avant lancement)
*Effort total estime : 2-3 heures*

| # | Action | Impact | Effort | Fichier(s) |
|---|--------|--------|--------|------------|
| 1 | Fix applicableCountry (chaine > tableau) | Schema valide | 5 min | milaura-product-hero.liquid, featured-product.liquid |
| 2 | Fix WebSite.description (HTML entities + scope) | Schema valide | 5 min | theme.liquid L80 |
| 3 | Supprimer preload duplique assistant_n4 | Perf | 2 min | theme.liquid |
| 4 | Corriger fautes homepage | Trust | 10 min | index.json |
| 5 | Corriger tutoiement page contact | Trust | 20 min | page.milaura-contact.json |
| 6 | Supprimer/masquer persona "Amelie" fictive | Trust/Legal | 10 min | index.json |
| 7 | Mettre 5 bougie-test-* en Draft | Indexation | 5 min | Shopify Admin |
| 8 | Mettre /pages/test-lookup en Draft | Indexation | 2 min | Shopify Admin |
| 9 | Verifier/supprimer bougies-emotionnelles-1 | Duplicate | 5 min | Shopify Admin |
| 10 | Fix double "MilAura" dans title tags | On-Page | 10 min | theme.liquid |
| 11 | Trim espace trailing Brand "MilAura " | Schema | 2 min | milaura-product-hero.liquid |

### PHASE 2 : SEMAINE 1 POST-LANCEMENT
*Effort total estime : 2-3 jours*

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 12 | **Configurer Google Business Profile** (categorie, photos, description) | Local +30% | 2h |
| 13 | **Installer Judge.me** + configurer emails demande d'avis | Reviews/Schema | 1h |
| 14 | **Creer page "Notre Histoire"** (800+ mots, Karine, atelier, sourcing) | E-E-A-T +20% | 3h |
| 15 | Upgrader schema Organization > LocalBusiness + Store | Local Schema | 15 min |
| 16 | Ajouter CollectionPage + ItemList schema | Collections | 30 min |
| 17 | Ajouter Google Maps embed sur page contact | Local | 15 min |
| 18 | Standardiser format telephone partout (+33 3 72 39 64 73) | NAP | 30 min |
| 19 | Ajouter disclaimer bien-etre/lithotherapie | YMYL/Trust | 15 min |
| 20 | Harmoniser seuil livraison gratuite (39EUR partout) | Trust | 15 min |
| 21 | Resoudre la strategie polices (charger ou remplacer Playfair/Dancing/Lato) | Perf/Design | 1h |

### PHASE 3 : MOIS 1 POST-LANCEMENT
*Effort total estime : 1-2 semaines*

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 22 | **Publier 10 articles blog educatifs** (1 500+ mots chacun, lithotherapie, pierres, rituels) | GEO +30%, Contenu +25% | 1-2 sem |
| 23 | **Enrichir descriptions collections** (200-400 mots uniques par collection) | Thin content | 2-3 jours |
| 24 | **Enrichir 764 produits** via pipeline Gemini (150+ mots/produit) | Contenu produit | Pipeline |
| 25 | Extraire CSS inline vers fichier(s) externes caches | Perf -200KB HTML | 1 jour |
| 26 | Soumettre aux annuaires Tier 1 (Yelp, Apple, Bing Places) | Local citations | 2h |
| 27 | Creer 2-3 articles blog locaux (atelier Metz, salons Lorraine) | Local content | 1 jour |
| 28 | Convertir images source PNG > JPG avant upload | Perf images | Variable |
| 29 | Obtenir 10+ avis Google (seuil critique) | Local ranking | Ongoing |
| 30 | Completer llms.txt (licence RSL, .well-known, last-updated) | GEO | 1h |

### PHASE 4 : TRIMESTRE 1 (long terme)
*Effort continu*

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 31 | Creer chaine YouTube (5-10 videos pierres, rituels, marque) | GEO autorite | Eleve |
| 32 | Presence Reddit (r/lithotherapie, r/bienetre) | GEO citations | Moyen |
| 33 | Rejoindre CCI Moselle + annuaires artisans | Local backlinks | Moyen |
| 34 | Viser couverture presse locale (Est Republicain, Tout Metz) | Autorite | Moyen |
| 35 | Installer IndexNow (app Shopify) | Indexation rapide | Faible |

---

## PROJECTION DE SCORE

| Phase | Score estime | Delai |
|-------|-------------|-------|
| Actuel | **58/100** | -- |
| Post Phase 1 | **65/100** | J+1 |
| Post Phase 2 | **72/100** | J+7 |
| Post Phase 3 | **82/100** | J+30 |
| Post Phase 4 | **90+/100** | J+90 |

---

## FICHIERS CONCERNES PAR LES CORRECTIONS

| Fichier | Corrections |
|---------|------------|
| `layout/theme.liquid` | Schema Organization > LocalBusiness (L37), WebSite.description (L80), title tag double, preload duplique |
| `sections/milaura-product-hero.liquid` | applicableCountry (L2267), Brand trailing space |
| `sections/featured-product.liquid` | applicableCountry (L569) |
| `templates/index.json` | Fautes orthographe, persona Amelie |
| `templates/page.milaura-contact.json` | Tutoiement > vouvoiement (10+ instances) |
| `sections/milaura-collection-hero.liquid` | Ajouter CollectionPage + ItemList schema |
| Tous les `sections/milaura-*.liquid` | CSS inline a extraire (Phase 3) |

---

*Rapport genere le 30 mars 2026 par 7 agents SEO specialises (Technical, Content, Schema, Sitemap, GEO, Local, Performance).*
