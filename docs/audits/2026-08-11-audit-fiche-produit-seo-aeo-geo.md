# Audit fiche produit MilAura, SEO, AEO, GEO et conversion

Date : 2026-08-11

Statut : audit initial en lecture seule

Périmètre : template produit `milaura-produit`, trois fiches live représentatives, données structurées, promesses commerciales, visibilité Google et IA, YouTube, Pinterest, maillage interne et workflow CAN/Camilla.

## Décision exécutive

La fiche produit MilAura a déjà une identité visuelle reconnaissable, un achat accessible, des contenus par type de produit et une bonne base de données structurées. Elle ne peut cependant pas devenir la source de vérité du futur catalogue tant que quatre risques P0 ne sont pas corrigés :

1. Les promesses de livraison se contredisent entre le template, la page contact, la politique d'expédition et le JSON-LD.
2. Des preuves sociales, certifications, origines et propriétés sont affichées sans être reliées à une preuve produit vérifiée.
3. Le JSON-LD Product publie des informations fausses ou techniquement dégradées, notamment les frais de livraison et un objet JSON d'erreur dans `additionalProperty`.
4. Le pipeline actuel bloque la création de brouillons sur des calculs de marge qui ne font plus partie du rôle de Codex ou Camilla, alors que Patrice a décidé de suivre le prix de vente recommandé CAN et de contrôler chaque prix avant publication.

Le bon ordre de travail est donc :

1. Figer la vérité de la fiche produit idéale et le contrat de contenu.
2. Corriger le template et les données structurées sans modifier les hubs publics.
3. Adapter le workflow CAN/Camilla à la création native sans coût de modèle API.
4. Produire un seul brouillon CAN complet, puis le faire contrôler par Patrice.

## Sources auditées

### Fiches live

- Bague aigue-marine : `https://milaura.fr/products/bague-argent-925-modele-01-aigue-marine-bresil-aa-1-piece-lo`
- Bracelet Koru : `https://milaura.fr/products/bracelet-oeil-de-tigre-cuir-brun`
- Bougie Sérénité : `https://milaura.fr/products/bougie-serenite-the-amethyste`

### Captures locales

- `output/playwright/pdp-audit-aigue-ring-desktop-clean-2026-08-11.png`
- `output/playwright/pdp-audit-aigue-ring-mobile-2026-08-11.png`
- `output/playwright/pdp-audit-koru-desktop-2026-08-11.png`
- `output/playwright/pdp-audit-bougie-desktop-2026-08-11.png`

### Autres surfaces live

- `https://milaura.fr/pages/contact-milaura`
- `https://milaura.fr/policies/shipping-policy`
- `https://milaura.fr/policies/refund-policy`
- `https://milaura.fr/robots.txt`
- `https://milaura.fr/agents.md`
- `https://milaura.fr/sitemap.xml`
- `https://milaura.fr/sitemap_agentic_discovery.xml`

### Fichiers locaux principaux

- `templates/product.milaura-produit.json`
- `sections/milaura-product-hero.liquid`
- `sections/milaura-product-tabs.liquid`
- `sections/milaura-product-story.liquid`
- `sections/milaura-product-craft.liquid`
- `sections/milaura-product-faq.liquid`
- `sections/milaura-product-reassurance.liquid`
- `sections/milaura-product-cta-final.liquid`
- `sections/milaura-internal-links.liquid`

## Ce qui fonctionne déjà

### Visuel et conversion

- Le produit, le titre, le prix et l'ajout au panier sont immédiatement visibles.
- La galerie accepte plusieurs médias, des miniatures et une vidéo.
- La fiche conserve une signature MilAura douce, claire et premium accessible.
- Le bracelet Koru prouve que la direction artistique validée peut produire une galerie cohérente.
- Le bloc Karine peut devenir une vraie preuve humaine si son texte est factuel et adapté à la source du produit.
- La FAQ, les caractéristiques, le récit et les conseils sont déjà prévus dans le template.

### SEO et données

- Une balise title, une canonical, Open Graph et Twitter Card sont présentes.
- Un H1 produit unique est présent sur les trois fiches testées.
- Product, BreadcrumbList, Organization, OnlineStore et FAQPage existent déjà en JSON-LD.
- Les produits sont présents dans le sitemap Shopify.
- Le site autorise l'exploration publique de ses produits dans `robots.txt`.
- `agents.md` et les endpoints Shopify UCP donnent déjà un socle de commerce agentique.

### Maillage

- Koru et la bougie relient déjà la fiche à plusieurs collections utiles.
- Le diagnostic émotionnel est accessible.
- Le footer donne accès aux principales familles, intentions et types de produit.

## P0, vérités à corriger avant un nouveau standard produit

### P0.1 Promesse logistique contradictoire

Promesse validée par Patrice :

- stock physique : expédition sous 24 h ouvrées ;
- produit sur commande fiable : expédition sous 48 h ouvrées ;
- réception estimée sous 5 jours ouvrés.

État observé le 2026-08-11 :

| Surface | Texte ou donnée observée |
| --- | --- |
| CTA final produit | `Commandez avant 14h, expédition le jour même.` |
| Réassurance produit | `Commandes expédiées sous 24h` pour tous les produits |
| Page contact | préparation sous 48 h, puis livraison en 2 à 4 jours |
| Politique d'expédition | traitement sous 1 à 3 jours, puis livraison sous 3 à 5 jours |
| JSON-LD produit | handling 0 à 1 jour, transit 1 à 3 jours |
| JSON-LD bague testée | livraison annoncée gratuite alors que le coût réel dépend du mode et du panier |

Action : produire une seule fonction de vérité, alimentée par `availability_mode`, utilisée par le texte visible, le panier, le JSON-LD, Merchant Center, Pinterest et les exports. Ne jamais coder les délais ou frais en dur dans une section produit.

### P0.2 Preuves sociales fabriquées

Le hero calcule un nombre de clients à partir de l'identifiant Shopify du produit et l'affiche avec cinq étoiles et le mois courant. Ce nombre n'est pas une donnée de vente ni un avis réel.

Action : supprimer cette mécanique. Afficher uniquement :

- une note et un nombre d'avis vérifiés ;
- un volume de ventes réel si sa définition est documentée ;
- sinon aucune preuve chiffrée.

Le réglage `social_count: 127` ne doit plus exister comme preuve publique générique.

### P0.3 Claims de fabrication, certification et sourcing non individualisés

Claims actuellement exposés de manière générique :

- fabriqué en France ;
- artisanat français ;
- pierre certifiée ou certifiée LFG Paris ;
- ingrédients certifiés bio et éthiques ;
- 100 % des gemmes naturelles et sourcées de manière éthique ;
- chaque bougie et chaque bijou créé dans l'atelier à Metz.

Ces formulations ne peuvent pas être héritées par un produit CAN sans preuve spécifique. La bonne vérité pour un produit fournisseur est, selon le cas : `sélectionné par MilAura à Montigny-lès-Metz`, `contrôlé à réception`, `expédié depuis MilAura`, ou une origine fournisseur réellement documentée.

Action : chaque badge de confiance doit être conditionné par une donnée vérifiée. Sans preuve, le badge disparaît. Une mention générale de Metz ne doit jamais transformer un produit sélectionné en produit fabriqué à Metz.

### P0.4 JSON-LD Product incohérent

Constats sur la bague aigue-marine :

- `shippingRate=0` alors que les frais ne sont pas universellement gratuits ;
- `Rituel d'utilisation` contient `{"error":"json not allowed for this object"}` ;
- SKU, MPN et GTIN sont vides ;
- le fil d'Ariane ne contient que Accueil puis produit ;
- les propriétés de bien-être reprennent des claims trop forts ;
- la politique de retour encodée doit être réalignée avec la politique visible ;
- les dates et délais sont codés indépendamment de la disponibilité réelle.

Action :

- sérialiser uniquement des valeurs scalaires valides dans `additionalProperty` ;
- préserver le vrai GTIN/EAN et le vrai SKU fournisseur quand ils existent ;
- ne jamais inventer de MPN ;
- générer les frais et délais depuis la même source que l'interface ;
- ajouter la catégorie utile dans BreadcrumbList ;
- vérifier la cohérence page, JSON-LD, flux Google, Pinterest et Shopify avant chaque brouillon.

Google exige que les prix et disponibilités du flux, de la page et des données structurées concordent. Une divergence peut entraîner une désapprobation Merchant Center.

## P1, qualité de la fiche et lisibilité

### Galerie

État observé :

- bague aigue-marine : 3 images et le même alt text répété ;
- bracelet Koru live : 4 médias, malgré le benchmark local approuvé de 6 images ;
- bougie Sérénité : 2 images très proches ;
- la photo de couverture de la bague montre plusieurs pièces, ce qui réduit la certitude sur le produit acheté.

Standard validé pour un bijou :

1. couverture produit seul ;
2. porté rapproché, utilisé au survol des cartes ;
3. macro signature ;
4. macro technique ;
5. contexte éditorial sans mannequin ;
6. lifestyle porté en plan large.

Chaque image doit avoir un alt text différent décrivant le produit et le rôle visuel. Le nom de marque ne doit pas être ajouté mécaniquement à tous les alt texts.

Pour une bougie ou un minéral non porté, conserver six rôles informatifs adaptés : couverture, détail matière, échelle, usage réel, ambiance, emballage réel ou vue technique. Ne jamais inventer un packaging.

### Zone d'achat

Le module de cartes surprises prend plus de place que les informations nécessaires à la décision. Il ajoute plusieurs seuils et codes anciens au moment où la cliente doit comprendre le produit.

Action : dans le hero, privilégier :

1. identité exacte du produit ;
2. matière, pierre, taille et finition ;
3. prix et variante ;
4. disponibilité et promesse logistique ;
5. ajout au panier ;
6. retour et paiement ;
7. preuve réelle.

La gamification peut rester dans le panier si elle est validée, mais elle ne doit plus dominer la fiche produit.

### Description et spécifications

Le fallback actuel des caractéristiques contient `Poids 200g`, `Temps de combustion 40 heures` et `Cire soja 100% naturelle`. Ce fallback peut apparaître sur une famille inadaptée si les metafields manquent.

Action : aucun fallback de caractéristiques commerciales ne doit exister. Si une donnée manque, afficher une section réduite ou bloquer le brouillon, selon l'importance de la donnée.

Structure textuelle cible :

1. `L'essentiel` : 2 à 3 phrases d'achat, concrètes et sans lyrisme.
2. `Détails et dimensions` : matière, pierre, métal, taille, poids, fermeture, provenance, contenu exact.
3. `Comment le porter ou l'utiliser` : conseil de style ou usage réel.
4. `La pierre ou la matière` : information culturelle prudente, clairement séparée d'une promesse médicale.
5. `Entretien` : consignes adaptées à la matière.
6. `Sélection MilAura` : ce que Karine a réellement vérifié, depuis Metz.
7. `Livraison et retour` : résumé dynamique et lien vers les politiques.
8. `Questions fréquentes` : réponses directes et spécifiques au produit.

### Récit et animation

Le récit produit est présent dans le DOM mais invisible jusqu'à son entrée dans le viewport. Les grands espaces blancs des captures pleine page viennent principalement de cette animation non déclenchée par la capture automatisée. En navigation réelle, la section apparaît au défilement.

Action : conserver une animation discrète seulement si le contenu reste visible sans JavaScript et immédiatement visible pour `prefers-reduced-motion`. La robustesse doit primer sur l'effet.

### FAQ

Les FAQ produit spécifiques sont utiles pour les humains et pour l'extraction de réponses. Leur valeur vient des réponses visibles, factuelles et concises, pas du balisage FAQPage.

Google limite depuis 2023 l'affichage régulier des résultats enrichis FAQ aux sites gouvernementaux et de santé reconnus. MilAura ne doit donc pas considérer FAQPage comme un levier de rich result garanti.

## P1, entité MilAura et Metz

La page contact contient une adresse, un téléphone et un LocalBusiness, ce qui est une bonne base. Cependant :

- le graphe global Organization/OnlineStore n'expose ni adresse, ni contact, ni `sameAs` ;
- les profils Facebook et Instagram du LocalBusiness ne correspondent pas aux liens du footer ;
- le Pinterest est un lien court au lieu du profil canonique ;
- les horaires décrivent potentiellement un atelier comme une boutique ouverte au public ;
- `Experte en lithothérapie`, les créations à l'atelier et les claims de sourcing doivent être prouvés ou reformulés.

Profils visibles dans le footer le 2026-08-11 :

- Instagram : `https://www.instagram.com/milaura_mineraux/`
- Facebook : `https://www.facebook.com/milaura_mineraux/`
- TikTok : `https://www.tiktok.com/@milaura_creations`
- Pinterest : `https://fr.pinterest.com/MilAuraCreations/`

Action : construire une seule entité `https://milaura.fr/#organization` réutilisée partout. Si l'adresse n'accueille pas librement le public, utiliser Organization/OnlineStore avec adresse postale et ne pas déclarer Store plus horaires d'ouverture. Si l'atelier reçoit réellement le public, documenter les modalités d'accueil.

Le message national recommandé est : `MilAura, maison française de bijoux en pierres, minéraux et bougies, basée à Montigny-lès-Metz et expédiant partout en France.` Il doit être ajusté si une partie de cette phrase n'est pas factuellement exacte.

## Google et recherche IA en France, état 2026-08-11

Google a annoncé le 2026-07-22 le lancement des Aperçus IA et du Mode IA en France. Le Mode IA utilise notamment des recherches parallèles par sous-thèmes et peut accepter des requêtes textuelles, vocales et visuelles.

La conclusion opérationnelle est plus simple que le discours marketing sur le GEO : Google indique qu'il n'existe ni exigence spéciale, ni fichier IA, ni balisage particulier pour apparaître dans AI Overviews ou AI Mode. Une page doit être indexable, éligible à un extrait et suivre les bonnes pratiques SEO existantes.

Pour MilAura, cela signifie :

- contenu important en texte visible ;
- faits précis et réponses courtes extractibles ;
- liens internes descriptifs ;
- images et vidéos de qualité ;
- données structurées identiques au contenu visible ;
- Merchant Center et Business Profile à jour ;
- absence de claims invérifiables ;
- pages rapides et réellement utiles.

Un bloc `Réponse courte` artificiel ou un fichier `llms.txt` ne remplace aucun de ces fondamentaux.

## ChatGPT et commerce agentique

`robots.txt` ne bloque pas l'exploration publique des produits. OpenAI indique que l'inclusion dans ChatGPT Search nécessite notamment de laisser passer OAI-SearchBot. Le fichier actuel n'a pas de règle spécifique qui le bloque.

OpenAI indique aussi que les données des marchands Shopify sont déjà intégrées à ChatGPT via Shopify Catalog. Pour MilAura, la priorité n'est donc pas de créer un flux propriétaire séparé, mais de rendre les données Shopify exactes : titre, image, prix, disponibilité, variante, identifiants, livraison et retour.

`agents.md` et UCP sont utiles pour la découverte et la transaction agentique. Ils ne compensent pas une mauvaise fiche produit et ne constituent pas un raccourci de classement.

## YouTube

Créer une chaîne YouTube est pertinent, mais ce n'est pas un bouton de classement automatique. YouTube classe notamment selon la pertinence entre requête, titre, description et contenu vidéo, puis l'engagement et la qualité perçue.

Architecture recommandée :

1. Une vidéo courte de produit, 20 à 40 secondes, montrant l'échelle et le porté réel.
2. Une vidéo utile de 2 à 5 minutes par question ou famille : choisir une pierre, entretenir l'argent 925, associer une couleur, mesurer une taille.
3. Une page de lecture ou un article utile pour chaque vidéo éditoriale importante.
4. L'intégration de la même vidéo sur la fiche produit lorsque le produit est réellement montré.
5. Un titre exact, une miniature claire, un lien vers la fiche, des chapitres et une description sans bourrage de mots-clés.

Google autorise la même vidéo sur YouTube et sur une fiche produit. La fiche peut rester un résultat texte ou image avec un badge vidéo. Les pages dont la vidéo est le contenu principal peuvent utiliser VideoObject et les chapitres.

KPIs : impressions, taux de clic de miniature, rétention à 30 secondes, durée de visionnage, clics vers MilAura et ventes assistées. Aucun objectif de volume ne doit précéder dix vidéos analysées.

## Pinterest

Pinterest est un canal prioritaire pour le catalogue visuel, mais il dépend lui aussi de la qualité des données.

Pré-requis :

- compte Business ;
- domaine revendiqué ;
- Pinterest Tag ;
- coordonnées, expédition et retours faciles à trouver ;
- catalogue à jour ;
- prix et disponibilité conformes à la fiche.

Le catalogue Pinterest peut utiliser jusqu'à dix images additionnelles et un lien vidéo. Les six images carrées Shopify sont une source, pas le format final de tous les Pins. Créer des dérivés verticaux 2:3 à partir des slots approuvés, sans déformer le produit.

Organisation recommandée des tableaux :

- par type : bracelets, bagues, colliers, bougies ;
- par pierre : aigue-marine, améthyste, quartz rose, oeil de tigre ;
- par intention : sérénité, confiance, amour, protection ;
- par occasion : naissance, mariage, cadeau ;
- par style ou couleur quand le catalogue le justifie.

Chaque Pin doit conduire directement vers la fiche ou le guide correspondant. Éviter les duplications massives. Publier des créations originales et mesurer impressions, enregistrements, clics sortants, ajout au panier et chiffre d'affaires assisté.

## Maillage interne

Le maillage actuel dépend surtout des collections auxquelles Shopify rattache le produit. Cela crée des trous, comme sur la bague aigue-marine, et des liens parfois peu hiérarchisés.

Graphe cible pour chaque produit :

1. type de produit ;
2. pierre ou matière ;
3. intention principale ;
4. occasion ou destinataire si utile ;
5. un guide éditorial pertinent ;
6. trois à six produits réellement complémentaires.

Exemple pour une bague aigue-marine :

- Bagues en pierres naturelles ;
- Bijoux en aigue-marine ;
- Pierre de naissance de mars, uniquement si documenté ;
- Guide de taille des bagues ;
- Comment entretenir l'argent 925 ;
- bijoux complémentaires en aigue-marine.

Les ancres doivent décrire la destination. Éviter `Découvrir`, `En savoir plus` ou une liste de collections sans priorité. Google recommande des liens HTML explorables et un texte d'ancre utile pour les personnes comme pour le moteur.

Le cross-sell actuel mélange parfois savon, Palo Santo, collier, distributeur et bijou sans relation d'usage évidente. Le futur moteur doit appliquer une priorité déterministe : même type et même pierre, même intention, ensemble portable, puis complément d'usage. Exclure les produits opérationnels, hors stock et sans relation.

## Netlinking et autorité

Priorités propres :

1. Obtenir des mentions éditoriales locales et nationales fondées sur une vraie histoire ou une vraie expertise.
2. Faire référencer MilAura par les partenaires, fournisseurs ou revendeurs autorisés quand une page partenaire légitime existe.
3. Créer des guides originaux suffisamment utiles pour être cités : entretien, tailles, couleur et tenue, transparence matière, critères de sélection.
4. Développer des partenariats locaux à Metz et en Moselle : mariage, mode, bien-être, créateurs, presse locale, événements, sans échange de liens artificiel.
5. Transformer les vidéos YouTube et contenus Pinterest en portes d'entrée vers ces ressources.

Interdits : achat de liens de classement, annuaires faibles, échanges massifs, commentaires automatisés, produit offert contre lien obligatoire. Google classe ces pratiques comme spam de liens. Un partenariat payé ou un produit offert doit laisser la liberté éditoriale et qualifier le lien avec `rel=sponsored` ou `nofollow` selon le cas.

YouTube et Pinterest renforcent la découverte et l'identité de marque. Ils ne doivent pas être présentés comme des backlinks garantissant un gain de classement.

## Inspiration Tiffany, sans imitation

La fiche Tiffany étudiée montre une discipline utile : plusieurs images haute définition, matériau et pierre nommés exactement, taille et guide, disponibilité, SKU, pays d'origine, conditions de retour propres au produit, contact conseiller, entretien et fil d'Ariane complet.

À reprendre pour MilAura :

- hiérarchie calme ;
- information précise ;
- confiance par le service ;
- matière, dimensions et entretien ;
- politique propre au produit ;
- visuels inspectables.

À ne pas reprendre : la marque, ses formulations, ses codes propriétaires, son bleu, ses compositions ou ses promesses. La direction MilAura reste naturelle, minérale, chaleureuse et ancrée à Metz.

## Blueprint de la fiche produit idéale

### Au-dessus de la ligne de flottaison

1. Fil d'Ariane complet.
2. Galerie six médias, zoom et miniatures accessibles.
3. H1 court et humain.
4. Sous-titre factuel avec matière, pierre ou bénéfice d'usage.
5. Prix exact et variante.
6. Taille, dimensions et guide si nécessaire.
7. Disponibilité et délai dynamiques.
8. Ajout au panier.
9. Paiement, retour et emballage réel.
10. Avis vérifiés, seulement s'ils existent.

### Corps de page

1. L'essentiel.
2. Détails et dimensions.
3. Porté, usage et conseil de style.
4. Pierre ou matière.
5. Entretien.
6. Sélection MilAura à Metz, formulation factuelle.
7. Vidéo utile si disponible.
8. Livraison et retour.
9. FAQ spécifique.
10. Avis et images clients vérifiés.
11. Maillage et produits complémentaires contrôlés.

### Données structurées

- Product ou ProductGroup selon les variantes réelles ;
- Offer exact par variante ;
- SKU, GTIN et MPN uniquement s'ils sont vrais ;
- image principale et galerie ;
- disponibilité, prix, livraison et retour cohérents ;
- BreadcrumbList complet ;
- Organization/OnlineStore unique ;
- VideoObject sur une vraie page vidéo quand pertinent ;
- FAQPage facultatif, uniquement si les questions et réponses sont visibles.

## Contrat de contenu à intégrer au workflow

Chaque produit doit sortir avec :

- titre Shopify ;
- handle stable ;
- sous-titre factuel ;
- description HTML claire ;
- détails et dimensions structurés ;
- conseil de porté ou d'usage ;
- entretien ;
- note de sélection MilAura ;
- pierre ou matière documentée ;
- FAQ spécifique ;
- title SEO et meta description complets ;
- requête principale et intentions secondaires naturelles ;
- six alt texts différents ;
- six images approuvées ;
- prix recommandé CAN avec preuve de périmètre lot ou unité ;
- disponibilité observée ;
- identifiants produit réels ;
- liens type, pierre, intention, guide et compléments ;
- statut Shopify DRAFT.

## Impacts workflow CAN/Camilla

### Coût de modèle

Le pilote doit être sans facturation de modèle API :

- scraping et contrôles locaux ;
- enrichissement texte dans la session native ChatGPT Pro de Codex ou Camilla ;
- images via l'outil natif GPT Image 2 de Codex ou Camilla ;
- reprise manuelle slot par slot ;
- aucun appel OpenAI API sans accord explicite de Patrice.

La limite initiale reste cinq produits par jour. Si la limite native est atteinte, reprendre un autre jour.

### Prix

Décision de Patrice : utiliser le prix de vente recommandé affiché par CAN. Ne pas arrondir à `X,90`, ne pas calculer une marge, ne pas créer une fausse promotion et ne pas produire de compare-at price sans promotion réelle documentée.

Le contrôle automatique doit seulement empêcher la confusion lot/unité :

- conserver le texte de prix source ;
- détecter la quantité du lot d'achat ;
- détecter si le prix public recommandé porte sur une unité ou sur le lot ;
- utiliser le prix recommandé exact correspondant à l'unité vendue sur Shopify ;
- signaler une ambiguïté dans le rapport de brouillon ;
- ne jamais transformer une ambiguïté en calcul de marge.

Patrice recontrôle le prix, les concurrents et la mise en ligne. Codex et Camilla ne publient jamais.

### Gates séparés

Le pipeline doit distinguer :

1. `content_draft_ready` : source, prix recommandé, lot/unité, texte, six images, alt texts et QA valides ;
2. `patrice_review_ready` : brouillon Shopify complet et inspectable ;
3. `publish_approved` : décision exclusivement humaine de Patrice.

Les coûts rendus, marges et taux de marge ne doivent plus bloquer la création d'un brouillon dans ce workflow. Ils ne sont pas calculés par Codex ou Camilla.

## Brief P0 pour la session développement

Ne pas modifier les hubs ou collections publiques dans cette phase.

1. Supprimer la preuve sociale déterministe et les cinq étoiles génériques.
2. Remplacer tous les claims génériques par des rendus conditionnés par des metafields vérifiés.
3. Centraliser les délais et coûts logistiques visibles et structurés.
4. Corriger le Product JSON-LD et le BreadcrumbList.
5. Supprimer les fallbacks de caractéristiques par famille.
6. Rendre le hero plus sobre en déplaçant la gamification vers le panier.
7. Corriger l'entité globale et les `sameAs`.
8. Prévoir les champs de contenu du blueprint sans modifier les produits live pendant le développement.
9. Tester au minimum une bague, un bracelet et une bougie sur mobile et desktop.
10. Valider avec Rich Results Test, Merchant Listings, Theme Check et comparaison visuelle.

## Gates d'acceptation du premier brouillon CAN

- statut DRAFT ;
- aucune publication et aucune collection publique modifiée ;
- prix recommandé CAN exact ;
- lot/unité prouvé ;
- six images carrées ;
- deux images portées pour un bijou ;
- six alt texts différents ;
- aucune déformation produit ;
- aucune preuve ou origine inventée ;
- meta description complète ;
- SKU/GTIN préservés quand disponibles ;
- JSON conforme au contrat ;
- contrôle local avant tout POST Shopify ;
- rapport final prêt pour Patrice.

## Mesures

### Par produit

- taux de complétude ;
- slots acceptés au premier rendu ;
- reprises image ;
- erreurs lot/unité ;
- erreurs de prix ;
- erreurs de claims ;
- temps de production ;
- validation visuelle Patrice ;
- validation prix Patrice.

### Après publication humaine

- impressions et clics Search Console ;
- erreurs Merchant Listings ;
- couverture images Google ;
- impressions et clics Pinterest ;
- vues, rétention et clics YouTube ;
- ajout au panier ;
- conversion ;
- retours liés à une information produit insuffisante.

Les Core Web Vitals LCP, INP et CLS n'ont pas été mesurés pendant cet audit car le connecteur Chrome DevTools requis n'était pas disponible. Les temps de chargement observés dans le navigateur ne doivent pas être présentés comme des Core Web Vitals.

## Mise en oeuvre workflow V1.2 du 2026-08-11

Le workflow CAN/Camilla a été mis à jour dans Agentic-Ops après sauvegarde datée.

- enrichissement texte et images par les outils natifs ChatGPT Pro de Codex ou Camilla ;
- API payante bloquée sans option d'urgence explicite ;
- prix conseillé CAN exact, sans arrondi psychologique ni calcul de marge ;
- preuve obligatoire du périmètre lot ou unité ;
- `fulfillment` séparé des données économiques ;
- stage texte avant images, puis gate final avant Shopify ;
- contrôle de fidélité par l'agent séparé de la validation créative de Patrice ;
- six images, deux portées, slot 2 porté et slot 5 éditorial ;
- aucun appel Shopify dans les tests ;
- fixture V1.2 et environnement `jsonschema` durable validés.

Premier candidat local : bague argent 925 modèle 02 aigue-marine Namibie AA, référence CAN `3701459041794`. Le prix conseillé est prouvé à 54,90 euros par pièce. La fiche CAN ne fournit toutefois pas de preuve explicite de disponibilité et ses photos sont déclarées non contractuelles. Le pilote image reste donc suspendu jusqu'au rapprochement avec une photographie réelle du stock physique MilAura.

## Sources externes principales

- Google, fonctionnalités IA et site web : https://developers.google.com/search/docs/appearance/ai-features
- Google France, lancement du 2026-07-22 : https://blog.google/intl/fr-fr/nouveautes-produits/explorez-obtenez-des-reponses/recherche-ia-apercus-mode/
- Google, contenu utile et fiable : https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google, liens explorables et ancres : https://developers.google.com/search/docs/crawling-indexing/links-crawlable
- Google, images : https://developers.google.com/search/docs/appearance/google-images
- Google, vidéos : https://developers.google.com/search/docs/appearance/video
- Google, données Organization : https://developers.google.com/search/docs/appearance/structured-data/organization
- Google, merchant listings : https://developers.google.com/search/docs/appearance/structured-data/merchant-listing
- Google, prix Merchant Center : https://support.google.com/merchants/answer/6324371
- Google, exigences landing page : https://support.google.com/merchants/answer/4752265
- Google, règles anti-spam : https://developers.google.com/search/docs/essentials/spam-policies
- Google, FAQ rich results : https://developers.google.com/search/blog/2023/08/howto-faq-changes
- OpenAI, ChatGPT Search : https://help.openai.com/en/articles/9237897-chatgpt-search
- OpenAI, shopping ChatGPT : https://help.openai.com/en/articles/11128490-improved-shopping-results-from-chatgpt-search
- YouTube, fonctionnement de la recherche : https://support.google.com/youtube/answer/16090438
- YouTube, titres et miniatures : https://support.google.com/youtube/answer/12340300
- Pinterest, catalogues retail : https://help.pinterest.com/en/business/article/before-you-get-started-with-catalogs
- Pinterest, distribution des Pins : https://help.pinterest.com/en/business/article/pin-performance-and-distribution
- Baymard, recherche UX fiche produit : https://baymard.com/research/product-page
- Baymard, benchmark fiche produit 2026 : https://baymard.com/blog/current-state-ecommerce-product-page-ux
- Tiffany, exemple fiche aigue-marine : https://www.tiffany.fr/jewelry/rings/ep-color-by-the-yard-sterling-silver-aquamarine-beryl-rings-1592667374.html
