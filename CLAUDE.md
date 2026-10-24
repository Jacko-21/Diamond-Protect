# Diamond Protect : refonte du site (repo principal)

> **Phase en cours : MAQUETTAGE.** On conçoit le futur site de Diamond Protect en HTML/CSS dans ce dépôt. Le site actuel reste en ligne sur `diamond-protect.fr` et **ce dépôt ne le publie pas**.
> **Ordre de lecture** : ① ce fichier → ② [`benchmark/`](benchmark/README.md) (la veille de 28 sites, publiée en page : https://claude.ai/artifact/WQ6XXqBYHpnVcNHu2HPHBQ) → ③ la section « Points ouverts » en bas, avant toute décision qui en dépend.
> Contexte relevé le **24/10/2026** sur le site en ligne. Ce qui bouge (chiffres, labels, bureaux, références) se revérifie sur la source, pas dans ce fichier.

## ⚠️ Les règles qui évitent les accidents

1. **On ne touche pas au site en ligne.** `diamond-protect.fr` est hébergé sur Netlify et son code n'est pas dans ce dépôt. Aucun déploiement, aucune modification DNS ou Netlify sans accord écrit du client. La maquette se consulte en local ou sur une URL de prévisualisation, en `noindex`.
2. **Aucun fait inventé.** Pas de chiffre, de label, de client, de témoignage ni d'étude de cas qui ne soit pas dans la fiche ci-dessous ou confirmé par le client. Un élément manquant s'écrit **`[À CONFIRMER]`** dans la maquette, jamais avec une valeur plausible.
3. **Labels et certifications : rien d'affiché comme acquis tant que ce n'est pas prouvé.** Le site actuel cite ISO 9001, 14001 et 45001 « justificatifs sur demande », sans organisme, numéro ni date. MASE et EcoVadis : inconnus. Dans la maquette, ces blocs portent le marqueur `[À CONFIRMER]`.
4. **Les textes sont des propositions.** Claude rédige une base, le client valide. Tout texte de maquette reste une proposition tant qu'il n'est pas validé (suivi dans `contenus/`, voir l'organisation du dépôt).
5. **Les photos de banque d'images sont provisoires et le disent.** Shooting prévu plus tard. Une photo de banque ne doit jamais être présentée comme une opération réelle de Diamond Protect (pas de légende du type « nos équipes au stade de… » sous une photo Unsplash). Chaque emplacement provisoire est marqué dans le code (`data-photo="provisoire"`) et listé dans le brief photo.

## Cadre réglementaire à respecter dans tous les contenus

- **Mention obligatoire (art. L.612-14 du Code de la sécurité intérieure)**, sur tous les supports, page d'accueil et pied de page compris : « L'autorisation d'exercice ne confère aucune prérogative de puissance publique à l'entreprise ou aux personnes qui en bénéficient. » Elle doit être accompagnée du numéro d'autorisation.
- **Vocabulaire CNAPS exact** : l'entreprise détient une **autorisation d'exercice**, les dirigeants un **agrément**, les agents une **carte professionnelle**. Le site actuel écrit « agréée CNAPS » : proposer au client « autorisée par le CNAPS » ou « titulaire d'une autorisation d'exercice CNAPS » (à valider).
- **Aucune confusion avec les forces de l'ordre** : pas de visuels ni de mots qui évoquent la police ou un pouvoir de contrainte (gyrophares, « interpellation », « forces d'intervention »). Les tenues montrées doivent pouvoir correspondre à l'arrêté du 18 juillet 2023 (marquage « SÉCURITÉ PRIVÉE »), donc pas d'agents « SECURITY » en anglais en premier plan.
- **Marques olympiques** : une photo du site actuel s'appelle `pc-securite-paris2024.jpg` (légende : « grand événement international, été 2024 »). Ne pas écrire « JO », « Jeux olympiques » ni « Paris 2024 » sans vérifier que Diamond Protect a le droit de s'en prévaloir : ces termes sont protégés.
- **Pas de superlatif sans preuve** : pas de « n°1 », « leader », « le meilleur ». Un chiffre vérifiable ou rien.

## Fiche de référence (relevée sur le site en ligne le 24/10/2026)

**Identité**
- **Diamond Protect**, SAS au capital de 100 000 €, filiale du **groupe Alfaventure**. Créée le 31/05/2024.
- SIREN 929 218 212 · SIRET siège 929 218 212 00041 · RCS Nanterre · APE 8010Z · TVA FR69 929 218 212.
- **Autorisation d'exercice CNAPS n° AUT-095-2123-12-11-20240944324.**
- Historique : Pack Sécurité fondée en 2005 → Diamond Protect créée en 2024 (pôle sécurité du groupe) → rachat et absorption de Pack Sécurité en 2025.
- Équipe nommée sur le site : **Amir Smail** (présenté comme gérant et directeur de la publication), **Rafik Zouaoui** (opérationnel), **Thomas Bailly** (relations commerciales).

**Coordonnées**
- Siège : **17 avenue des Louvresses, 92230 Gennevilliers**.
- Lyon : 59 chemin du Moulin Carron, 69570 Dardilly · Auxerre : 105 rue des Mignottes, 89000 Auxerre · Troyes : 8 avenue du Président Coty, 10600 La Chapelle-Saint-Luc · « Toulouse & Rhône » sans adresse.
- Téléphone affiché : **06 05 82 71 82** (« astreinte 24h/24 ») · Schema : `+33605827182` · `contact@diamond-protect.fr`.

**Chiffres affichés** : 20 ans d'expérience (Pack Sécurité depuis 2005) · 220+ collaborateurs · 100+ clients actifs · 1000+ sites et événements sécurisés · intervention 24h/24, 7j/7.

**Métiers** (sept au total une fois les deux listes du site réunies) : sécurité événementielle · gardiennage et contrôle d'accès · sûreté et Task Force · gardiennage cynophile · sécurité incendie (SSIAP 1, 2, 3) · intervention mobile (véhicules géolocalisés, main courante électronique) · accueil et filtrage.

**Secteurs** : événementiel et culture · luxe et retail · hôtellerie et restauration · immobilier et copropriétés · industrie et logistique · bureaux et tertiaire · sites sensibles et stratégiques · chantiers (BTP).

**Méthode affichée** : responsable d'exploitation et chef de dispositif par mission · analyse de risques préalable · PC sécurité, numéro d'appel unique et astreinte H24 · contrôles de prestation niveaux 1 et 2 · main courante électronique · indicateurs qualité (PAQ) · plan de formation, recyclages SSIAP et MAC APS · centre de formation du groupe « en cours de création ».

**Équipement** : tenue conforme à l'arrêté du 18/07/2023, badge nominatif et carte pro visible, chaussures EN ISO 20345, gilet EN ISO 20471, main courante électronique, chiens identifiés, assurés et suivis par un vétérinaire.

**RSE** : flotte électrique et hybride (≥ 60 % de trajets en électrique, CO₂ ≤ 18 g/km) · formation et inclusion · achats responsables · gestion durable des déchets.

**Références publiées (logos)** : Département de l'Yonne, Métropole du Grand Nancy, villes de Troyes, Auxerre et Bron, AJ Auxerre, Université de Bourgogne, UTT, E.Leclerc, Grand Frais, Intermarché, Lidl, Knauf, RTE, Eiffage, Primagaz, SNCF, Coca-Cola, Europ Assistance, Mondial Tissus, Assurance Maladie, Croix-Rouge française, CGR Cinémas, Jean Paul Gaultier. **Logos seulement : aucune étude de cas ni témoignage autorisé à ce jour.**

**Site actuel** : HTML statique sur Netlify (formulaires Netlify : contact et newsletter). Pages : accueil, services, conformité, actualités (3 articles de veille réglementaire), contact, mentions légales. Newsletter mensuelle de veille CNAPS.

## Positionnement et cibles

- **Image voulue : haut de gamme et rassurant.**
- **Cible principale : les acheteurs qui lancent des appels d'offres**, publics (collectivités, établissements publics, universités) et privés (grands comptes de la distribution, de l'industrie, de l'énergie, du transport). Ils lisent le site pour noter une candidature : conformité, capacité, références, méthode, solidité.
- **Cibles secondaires** : organisateurs d'événements, maisons de luxe et hôtels, gestionnaires d'immeubles. Et les **candidats** (le secteur recrute en continu), à séparer du parcours client.

## Ce que le benchmark impose à la maquette

Détail et captures dans [`benchmark/`](benchmark/README.md). Les décisions qui en sortent :

- **Garder l'identité marine profond et or, et les titres à empattements.** Aucun des 28 sites du panel n'a de titres à empattements ; c'est le territoire haut de gamme libre.
- **Créer un « Espace acheteurs »** : aucun concurrent ne l'a. Il regroupe l'autorisation CNAPS (avec lien de vérification), les certificats (organisme, numéro, validité), les attestations et l'assurance (publiques ou sur demande), les chiffres de solidité, les références par secteur, le processus de reprise d'un marché, les engagements de service et un interlocuteur dédié.
- **Une page par métier, par secteur et par agence** (le site actuel n'a qu'une page services).
- **Des études de cas**, au format contexte, dispositif, résultat chiffré, citation (8 sites sur 28 en ont).
- **Une porte « Nous rejoindre »** séparée du devis.
- **Un téléphone visible en haut de page** et une option « Être rappelé ».
- Références à étudier : Wilson James (mise en page éditoriale), Torann France et Groupe SGP (chiffres pour acheteurs, carte des agences), Showsec (événementiel), Constellis (haut de gamme sombre), Corps Security (preuves), Pinkerton (posture de conseil), Control Risks (or avec retenue).

## Arborescence cible

```
Accueil
├── Expertises             (7 pages, une par métier)
├── Secteurs               (7 pages : événementiel/culture/sport, luxe/retail, hôtellerie,
│                           collectivités/établissements publics, industrie/énergie/logistique,
│                           bureaux/immobilier/copropriétés, chantiers/sites sensibles)
├── Références             (études de cas filtrables)
├── Espace acheteurs
├── Le groupe              (histoire et dirigeants, implantations + une page par agence,
│                           conformité et labels, engagements RSE)
├── Recrutement
├── Actualités et ressources (reprend la veille CNAPS et la newsletter)
└── Demander un devis      (+ « Être rappelé »)
```

**Déroulé de la page d'accueil** : promesse et double appel à l'action (devis, espace acheteurs) → bandeau de preuves (CNAPS, labels, chiffres, 5 à 6 logos) → expertises → secteurs → une étude de cas → méthode → implantations (carte) → conformité et RSE → recrutement → contact.

## Cadre technique de la maquette

- **Code HTML/CSS dans ce dépôt**, pensé pour devenir le vrai site. Proposition par défaut : **Astro en sortie statique** (gabarits et composants partagés entre la vingtaine de pages, pas de framework JS côté client), déployable plus tard sur Netlify comme le site actuel. Si le client préfère du HTML pur, on garde la même organisation en fichiers.
- **Design system de départ = les tokens du site actuel**, à reprendre puis affiner :
  - fonds `--bg #0e1219`, `--bg-2 #141a24`, `--bg-elevated #1b2331`, `--navy #182030` ;
  - or `--gold #D4A955`, `--gold-soft #E6C074`, `--gold-deep #9c7d3f` ;
  - texte `--text #ECEFF4`, `--muted #aab6c4` ;
  - polices **Fraunces** (titres), **Inter Tight** (texte), **JetBrains Mono** (données) ;
  - logos `assets/logo.svg` et `assets/logo-blanc.svg` à récupérer sur le site en ligne.
- Le site actuel est entièrement sombre : prévoir des **sections claires en alternance** pour la lisibilité des pages longues.
- **Exigences** : responsive dès 360 px, accessibilité AA (contrastes de l'or sur fond clair à vérifier), pas de cookies publicitaires (engagement des mentions légales actuelles), données structurées (Organization, Service, une fiche LocalBusiness par agence, BreadcrumbList).
- **Photos provisoires** : Unsplash, chacune marquée `data-photo="provisoire"` et listée dans le brief photo (`maquette/BRIEF-PHOTO.md`) avec la scène à shooter pour la remplacer (PC sécurité, filtrage d'événement, binôme cynophile, ronde de nuit, chef de dispositif, accueil).

## Organisation du dépôt

| Dossier | Rôle |
|---|---|
| `benchmark/` | La veille de 28 sites : page interactive, captures, données relevées. Figé au 24/10/2026. |
| `maquette/` | *(à créer)* Le code de la maquette et son brief photo. |
| `contenus/` | *(à créer)* Les textes proposés, page par page, avec leur statut : proposé, validé par le client, à reprendre. |
| `docs/` | *(à créer)* Les décisions prises avec le client (datées) et le journal des livraisons. |

## Points ouverts (à trancher avec le client)

| Sujet | Constat | Ce qui en dépend |
|---|---|---|
| Labels détenus | ISO 9001, 14001, 45001 cités sans preuve ; MASE et EcoVadis inconnus | Bandeau de preuves, Espace acheteurs, page conformité |
| Études de cas | Aucun client n'a encore donné son accord | Page Références, bloc de la page d'accueil |
| Ligne fixe 24/7 | Seul un 06 est affiché | En-tête, contact, données structurées |
| Nombre de bureaux | Le site annonce « 5 bureaux », donne 4 adresses et place 8 villes sur la carte (Gennevilliers, Troyes, Auxerre, Lyon, Lille, Reims, Tours, Toulouse) | Page implantations, pages agences |
| Liste des métiers | L'accueil liste « intervention mobile », la page services « accueil et filtrage » : 7 métiers en tout ? | Menu Expertises |
| Titre du dirigeant | « Gérant » affiché ; dans une SAS, le représentant légal est le président | Page groupe, mentions légales |
| « Agréée CNAPS » | Formule inexacte pour une entreprise (voir cadre réglementaire) | Accroches, Schema, meta |
| Pièces du dossier d'appel d'offres | Lesquelles peuvent être publiques, lesquelles sur demande ou en espace protégé ? | Espace acheteurs |
| Chiffres de solidité | Chiffre d'affaires et effectifs publiables ? (Torann et SGP affichent 104 M€ de CA) | Bandeau de preuves, Espace acheteurs |
| Code et accès du site actuel | Où vit le code source ? Qui a l'accès Netlify et le domaine ? | Mise en ligne future, redirections |
| Photos réelles | Shooting prévu plus tard : date, lieux, autorisations des clients filmés | Remplacement des photos provisoires |
| Photo « été 2024 » | Droit d'évoquer l'événement par son nom ? | Légendes, études de cas |

## Hygiène git

- Une branche de travail par chantier, fusionnée puis supprimée. Branche en cours : `claude/clever-planck-0kbm3n`.
- Reprise d'un poste à l'autre : `git pull`, jamais `git reset --hard`.
- Les décisions validées par le client se notent dans `docs/` avec leur date, puis se reportent dans ce fichier.
