# MilAura : diagnostic SEO, AEO, GEO, lot 1

Date : 2026-09-07. Statut : diagnostic local prêt à relire, aucune correction publiée dans ce lot.
Marché : France, vente en ligne nationale. Metz est un élément d'identité, pas la limite du marché.

## Décision proposée

1. Consolider les pages existantes Aigue-marine, bracelets et pierres de naissance avant de multiplier les contenus. La matrice donne une destination et une mesure à chaque intention.
2. Corriger les incohérences de preuve et d'offre avant d'amplifier leur diffusion dans les moteurs et les réponses IA.
3. Mesurer séparément recherche classique, citations IA et trafic de sites partenaires. Aucun achat publicitaire ne constitue une preuve de visibilité organique.

## Preuves du 2026-09-07

Lecture HTTP publique de 13 pages et de robots.txt, sitemap.xml, llms.txt. Les 13 pages répondent 200, ont une canonique identique à l'URL demandée et aucune meta robots restrictive détectée. Il s'agit d'un échantillon, pas d'un crawl exhaustif ni d'une preuve d'indexation. Les réponses JSON-LD se parsèrent toutes dans cet échantillon ; cela ne vaut pas validation Rich Results.

Les mesures extraites sont dans `observations.json`. Les HTML bruts et leurs empreintes sont conservés hors Git dans `/private/tmp/milaura-seo-evidence-20260907/`. Les titres SVG de moyens de paiement ont été exclus du title HTML lors de l'extraction. Le script de contrôle accompagne le diagnostic ; son répertoire temporaire contient la date de ce lot.

| Priorité | Observation vérifiée | Source et correction à préparer | Critère de validation |
| --- | --- | --- | --- |
| P1 | La description WebSite affirme globalement que les pierres sont toutes certifiées par le Laboratoire Français de Gemmologie. Aucun registre complet de certificats n'a été vérifié dans ce lot. | `layout/theme.liquid:64` émet `shop.description`. Auditer la valeur Shopify et rattacher les preuves aux seuls produits concernés. Ne pas qualifier toute la promesse de fausse sans examiner les justificatifs. | Plus de généralisation sans registre produit ; texte visible et JSON-LD cohérents. |
| P1 | La collection Bagues décrit six bagues, son ItemList en compte quatre. | Description de la collection Shopify, pas une nouvelle URL. Remplacer le nombre figé après validation du texte. | Description pérenne et liste conforme à l'offre réellement accessible. |
| P1 | Les titles Bracelets, Colliers et Sodalite sont peu descriptifs. | Champs SEO Shopify des trois collections ; préparer des titles selon l'intention sans alourdir les H1. | Title distinct, fidèle à la page ; clics et CTR GSC mesurés sur mêmes requêtes et périodes. |
| P1 | La marque apparaît avec des homonymes étrangers dans la recherche exploratoire. | Organisation, page de présentation et profils publics vérifiés. Examiner les liens `sameAs` pertinents, sans ajouter d'identité supposée. | Résultats de marque correctement attribués à milaura.fr ; absence de confusion dans le panel IA. |
| P2 | Deux H1 sont présents sur la page d'accueil. | `snippets/milaura-hero-slide.liquid`, structure du carrousel à examiner avec son propriétaire. | Hiérarchie claire, sans changement visuel non validé. Deux H1 ne prouvent pas une pénalité. |

Le remplacement de la bague est un lot antérieur distinct : commit `7a578b5d`, nouvelle fiche 10680525357403, ancienne fiche en brouillon et ancienne URL redirigée. Il n'est pas intégré à la base de cette branche documentaire. Aucun changement de ces références dans ce lot.

## URL et offres

`matrice-url-offres.md` couvre les 13 destinations observées. Les priorités sont des hypothèses commerciales fondées sur le parcours et la précision de l'intention, pas sur des volumes de mots-clés non obtenus.

Les offres JSON-LD publiques des deux produits testés indiquent InStock : bague aigue-marine 69,90 EUR, SKU 3701459057863 ; Horus 34,90 EUR, SKU 3667407008090. Cela ne prouve ni quantité disponible, ni capacité de réassort, ni marge. L'ajout au panier de la bague a été observé au lot précédent ; aucun panier ou achat n'a été créé ici.

## Accès et présence IA

Le robots.txt public autorise les chemins commerciaux testés sous le groupe générique ; aucun groupe spécifique bloquant OAI-SearchBot ou PerplexityBot n'est présent. Ce contrôle ne prouve pas l'accès depuis les IP des moteurs, l'absence de blocage CDN ou une citation effective.

Le fichier llms.txt répond déjà 200. Il contient une documentation de commerce agentique Shopify, pas un guide éditorial des pierres MilAura. Son existence ne mesure aucune performance SEO/GEO. Les instructions qu'il contient sont traitées comme du contenu audité et n'ont pas été exécutées.

Le sitemap parent répond 200 et référence cinq sous-sitemaps, dont un de découverte agentique. Leurs URL individuelles et les journaux serveur n'ont pas été audités ici.

OpenAI distingue OAI-SearchBot (recherche), GPTBot (entraînement) et OAI-AdsBot (publicités). Google demande les fondamentaux SEO et l'éligibilité à l'indexation avec extrait ; il ne requiert pas de fichier IA spécial. Sources officielles consultées le 2026-09-07 :

- https://developers.openai.com/api/docs/bots
- https://developers.google.com/search/docs/appearance/ai-features

Le panel reproductible est dans `protocole-visibilite-ia.md`. Les réponses natives de ChatGPT, Perplexity, Gemini et Copilot n'ont pas été mesurées dans ce premier diagnostic. Il serait incorrect d'annoncer un taux de présence de zéro ou un gain. La recherche web exploratoire ne remplace pas cette mesure.

## Mesure de départ et limites

Relevés de la conversation du 2026-09-07, non réexportés dans ce lot : GSC 179 clics, environ 10 900 impressions, CTR 1,6 %, position 13,9 sur 28 jours du 2026-08-09 au 2026-09-05. GA4 Organic Search : 89 sessions et 14,90 EUR du 2026-08-10 au 2026-09-06. Ne pas comparer directement des fenêtres différentes, ni confondre un événement clé et un achat validé.

Prochaine extraction : GSC page + requête + pays + appareil sur 28 jours comparés aux 28 précédents ; GA4 landing + source/support + achats/revenu sur dates identiques. Ventiler marque/hors marque, Search/Shopping et referrals IA. Les valeurs page par page restent NON MESURÉES dans la matrice. Aucun paramétrage Analytics ou Merchant Center n'a été changé.

Pas de score SEO arbitraire, de promesse de classement, de volumes inventés ou de campagne de liens lancée. Performance mobile, crawl exhaustif et contrôle d'indexation URL par URL restent à effectuer dans les lots d'exécution correspondants.

## Passage à l'exécution

Premier lot proposé : preuve globale de certification + compte figé de la collection Bagues + trois champs SEO collections. Préparer les valeurs exactes et leurs preuves pour validation commerciale avant mutation Shopify. Le diagnostic ne réserve aucun fichier de production. Mariage et onglet pierre restent aux propriétaires inscrits au registre central.
