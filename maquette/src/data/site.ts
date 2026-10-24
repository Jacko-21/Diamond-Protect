// Faits de référence utilisés par la maquette.
// Source : site en ligne diamond-protect.fr, relevé du 24/10/2026 (voir CLAUDE.md).
// Toute valeur non confirmée par le client est marquée `aConfirmer: true`.

export const societe = {
  nom: 'Diamond Protect',
  forme: 'SAS au capital de 100 000 €',
  groupe: 'Groupe Alfaventure',
  siren: '929 218 212',
  rcs: 'RCS Nanterre',
  ape: '8010Z',
  cnaps: 'AUT-095-2123-12-11-20240944324',
  telephone: '06 05 82 71 82',
  telephoneSchema: '+33605827182',
  email: 'contact@diamond-protect.fr',
  mentionL612_14:
    "L'autorisation d'exercice ne confère aucune prérogative de puissance publique à l'entreprise ou aux personnes qui en bénéficient.",
};

export const chiffres = [
  { valeur: '20', unite: 'ans', libelle: "d'expérience", detail: 'Pack Sécurité, depuis 2005' },
  { valeur: '220', unite: '+', libelle: 'collaborateurs', detail: 'agents, encadrement, supports' },
  { valeur: '100', unite: '+', libelle: 'clients actifs', detail: 'publics et privés' },
  { valeur: '1 000', unite: '+', libelle: 'sites et événements', detail: 'sécurisés' },
];

export const expertises = [
  {
    slug: 'evenementiel',
    titre: 'Sécurité événementielle',
    texte: 'Filtrage, palpation, contrôle visuel des sacs, gestion des flux et des accès en coulisses.',
    tag: 'Filtrage · palpation · flux',
    vedette: true,
  },
  {
    slug: 'gardiennage',
    titre: "Gardiennage et contrôle d'accès",
    texte: 'Postes fixes, rondes, filtrage des entrées et interventions rapides sur vos sites.',
    tag: 'Postes fixes · rondes',
  },
  {
    slug: 'surete',
    titre: 'Sûreté et Task Force',
    texte: 'Profils sélectionnés pour les sites stratégiques : contrôle renforcé, gestion de crise, exfiltration.',
    tag: 'Sites sensibles',
  },
  {
    slug: 'incendie',
    titre: 'Sécurité incendie',
    texte: 'Agents SSIAP pour les ERP et les IGH : prévention, PC sécurité incendie, évacuation.',
    tag: 'SSIAP 1 · 2 · 3',
  },
  {
    slug: 'cynophile',
    titre: 'Gardiennage cynophile',
    texte: 'Binômes maître-chien, de jour comme de nuit. Chiens identifiés, assurés et suivis par un vétérinaire.',
    tag: 'Binôme maître-chien',
  },
  {
    slug: 'intervention',
    titre: 'Intervention mobile',
    texte: 'Patrouilles prêtes à intervenir 24h/24, véhicules géolocalisés, main courante électronique.',
    tag: 'Véhicules géolocalisés',
  },
  {
    slug: 'accueil',
    titre: 'Accueil et filtrage',
    texte: 'Accueil du public, gestion des badges et des visiteurs, tenue des registres.',
    tag: 'Badges · registres',
  },
];

export const secteurs = [
  { nom: 'Événementiel et culture', contraintes: 'Jauges, flux, autorisation préfectorale sur la voie publique' },
  { nom: 'Luxe et retail', contraintes: 'Discrétion, image de marque, prévention de la démarque' },
  { nom: 'Hôtellerie et restauration', contraintes: 'Accueil, clientèle exigeante, présence de nuit' },
  { nom: 'Immobilier et copropriétés', contraintes: "Rondes, contrôle d'accès, gardiennage de nuit" },
  { nom: 'Industrie et logistique', contraintes: 'Sites étendus, rondes, équipes cynophiles' },
  { nom: 'Bureaux et tertiaire', contraintes: 'Accueil, badges, sécurité incendie en IGH' },
  { nom: 'Sites sensibles et stratégiques', contraintes: 'Profils sélectionnés, gestion de crise' },
  { nom: 'Chantiers (BTP)', contraintes: 'Vols, intrusions, rondes de nuit' },
];

// Statuts : 'consultable' (en ligne), 'demande' (sur demande), 'confirmer' (à fournir par le client), 'rediger' (contenu à écrire)
export const piecesAcheteurs = [
  { piece: "Autorisation d'exercice CNAPS", detail: societe.cnaps, statut: 'consultable' },
  { piece: 'Identité légale et Kbis', detail: `SIREN ${societe.siren} · ${societe.rcs}`, statut: 'consultable' },
  { piece: 'Certificats ISO 9001, 14001, 45001', detail: 'Organisme, numéro, date de validité', statut: 'confirmer' },
  { piece: 'Attestations URSSAF et fiscale', detail: 'Moins de six mois', statut: 'demande' },
  { piece: 'Assurance RC professionnelle', detail: 'Attestation en cours de validité', statut: 'demande' },
  { piece: 'Références par secteur', detail: 'Collectivités, distribution, industrie, transport', statut: 'consultable' },
  { piece: "Processus de reprise d'un marché", detail: 'Passation, formation, délai de démarrage', statut: 'rediger' },
  { piece: 'Engagements de service', detail: "Délais d'intervention, reporting, contrôles", statut: 'rediger' },
];

export const methode = [
  {
    titre: 'Analyse et devis',
    texte: "Un responsable d'exploitation étudie votre besoin et le niveau de risque. Proposition chiffrée sous 24 h ouvrées.",
  },
  {
    titre: 'Dispositif dédié',
    texte: "Un responsable d'exploitation et un chef de dispositif par mission, des agents choisis pour le site.",
  },
  {
    titre: 'Exécution pilotée',
    texte: 'PC sécurité, numéro d’appel unique et astreinte 24h/24. Main courante électronique sur le terrain.',
  },
  {
    titre: 'Contrôle et reporting',
    texte: 'Contrôles de prestation de niveaux 1 et 2, indicateurs qualité, mesures correctives documentées.',
  },
];

export const agences = [
  { id: 'gennevilliers', ville: 'Gennevilliers', dept: '92', role: 'Siège social', adresse: '17 avenue des Louvresses, 92230 Gennevilliers' },
  { id: 'dardilly', ville: 'Lyon', dept: '69', role: 'Agence', adresse: '59 chemin du Moulin Carron, 69570 Dardilly' },
  { id: 'auxerre', ville: 'Auxerre', dept: '89', role: 'Agence', adresse: '105 rue des Mignottes, 89000 Auxerre' },
  { id: 'troyes', ville: 'Troyes', dept: '10', role: 'Agence', adresse: '8 avenue du Président Coty, 10600 La Chapelle-Saint-Luc' },
  { id: 'toulouse', ville: 'Toulouse', dept: '31', role: 'Implantation régionale', adresse: '', aConfirmer: true },
];

export const clients = [
  { fichier: 'sncf.png', nom: 'SNCF' },
  { fichier: 'rte.png', nom: 'RTE' },
  { fichier: 'eiffage.png', nom: 'Eiffage' },
  { fichier: 'knauf.png', nom: 'Knauf' },
  { fichier: 'lidl.png', nom: 'Lidl' },
  { fichier: 'leclerc.png', nom: 'E.Leclerc' },
  { fichier: 'croix-rouge.png', nom: 'Croix-Rouge française' },
  { fichier: 'assurance-maladie.png', nom: "L'Assurance Maladie" },
  { fichier: 'grand-nancy.png', nom: 'Métropole du Grand Nancy' },
  { fichier: 'yonne.png', nom: "Département de l'Yonne" },
];
