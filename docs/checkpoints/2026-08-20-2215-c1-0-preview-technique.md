# MilAura C1-0 - Preview technique Mon Ecrin

Date : 2026-08-20 22:15 CEST
Proprietaire : Codex, thread `01a01e53-c96b-7501-b724-865ca9178fce`
Statut : validation technique terminee, validation Patrice en attente

## Resultat

C1-0 fournit une application Shopify extension-only privee et une page Customer Accounts pleine `Mon Ecrin`. Le prototype est volontairement sans persistance, sans donnee fictive et sans lecture ou ecriture de donnee cliente.

Depot prive : `Onora-studio/onora-ops`

Branche : `codex/milaura-c1-0-customer-accounts-preview-20260820`

Commit pousse : `f4f8a91`

Application versionnee : `docs/milaura/shopify-apps/customer-accounts-preview/`

Preuves versionnees : `docs/milaura/shopify-admin-canonical/c1-0/`

## Identifiants publics

- application : `MilAura Customer Accounts` ;
- Client ID : `054204e2dfd7ee09f197b47b97643766` ;
- extension : `Mon Ecrin` ;
- UID : `e015f1c2-1a40-bc38-847e-b21568d8cca2823380b1` ;
- API : `2026-07` ;
- target : `customer-account.page.render` ;
- boutique de developpement : `milaura-c1-preview` ;
- Shopify store ID : `107347837273`.

## Validations

- `npm run check` : passe ;
- build Shopify : passe ;
- un seul H1 et trois regions nommees : passe ;
- desktop : passe ;
- mobile 360, 390 et 430 px : passe sans debordement horizontal ;
- navigation native Orders/Profile et retour Mon Ecrin : passe ;
- consentement email marketing du client de test : desactive ;
- scopes Admin API : aucun ;
- acces API et reseau de l extension : desactives ;
- theme live `190430282075` : non modifie ;
- comptes live : non modifies.

La console montre uniquement du bruit de telemetrie provenant des bundles Shopify `customer-authentication-web` et `customer-account-web`. Aucun message ne pointe vers le code de l extension ou son tunnel. Le detail est conserve dans la preuve privee `QA-EVIDENCE.md`.

## Gates et suite

G0 Git, G1 build, G2 environnement et G3 preview technique sont passes. G4 reste la validation visuelle et fonctionnelle de Patrice.

C1-1 n est pas autorise. Il exigera un GO distinct, un contrat de donnees, le consentement explicite de personnalisation, la synchronisation, la purge locale, panier et serveur, puis des tests de parite avant toute bascule des comptes live.

E4, E5, E6 et E7 restent dans l ordre canonique apres la gate C1.

Cross-sell live, Atelier des emotions et ScratchToReveal restent strictement hors perimetre.
