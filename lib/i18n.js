// Every user-facing string on the marketing site, in both languages.
//
// French is Canadian French (Ottawa–Gatineau), not France French:
//   · "courriel", not "email"
//   · "soumission" for a quote, not "devis"
//   · currency as "5 000 $" — space as thousands separator, symbol after
//   · no space before ? or !, space before : (Termium / BDL convention)

export const LOCALES = ['en', 'fr'];
export const DEFAULT_LOCALE = 'en';

export const LOCALE_LABELS = { en: 'EN', fr: 'FR' };
export const HTML_LANG = { en: 'en-CA', fr: 'fr-CA' };

const en = {
  meta: {
    title: 'Zyvanta — Engineering the web, end to end',
    description:
      'Zyvanta is a web and software studio in Ottawa building fast, intelligent products: web platforms, custom applications and automation that removes the busywork.',
    ogDescription:
      'Web platforms, custom applications and automation for teams that expect their software to keep up.',
  },

  nav: {
    home: 'Zyvanta home',
    toggleMenu: 'Toggle menu',
    links: [
      { href: '#services', label: 'Services' },
      { href: '#work', label: 'Work' },
      { href: '#about', label: 'Studio' },
      { href: '#contact', label: 'Contact' },
    ],
    cta: 'Start a project',
    switchTo: 'Voir en français',
  },

  hero: {
    eyebrow: 'Ottawa · Web & software studio',
    titleLead: 'We engineer the web your business',
    titleAccent: 'actually runs on.',
    lede:
      'Zyvanta designs and builds fast web platforms, custom applications and the automation that quietly removes the busywork — shipped by senior engineers, without the agency layers in between.',
    ctaPrimary: 'Start a project',
    ctaSecondary: 'What we do',
    stack: ['Next.js · React', 'Azure · Power Platform', 'AI & automation'],
    scroll: 'Scroll',
  },

  services: {
    eyebrow: 'Services',
    title: 'Four ways we make software carry its weight.',
    lede:
      'Most engagements start with one of these and grow into two. You work directly with the people writing the code.',
    items: [
      {
        n: '01',
        title: 'Web platforms',
        copy:
          'Marketing sites, portals and storefronts on Next.js — engineered for Core Web Vitals, search visibility and conversion, not just for the launch screenshot.',
        tags: ['Next.js', 'Design systems', 'SEO', 'CMS'],
      },
      {
        n: '02',
        title: 'Custom applications',
        copy:
          'Internal tools, client portals and dashboards that replace the spreadsheet everyone is quietly afraid of. Built on React, Node and Azure, with auth and audit built in.',
        tags: ['React', 'Node', 'Azure', 'Dataverse'],
      },
      {
        n: '03',
        title: 'Automation & integration',
        copy:
          'The systems you already pay for, finally talking to each other. Power Automate, n8n and API pipelines that take hours of manual work out of the week.',
        tags: ['Power Automate', 'n8n', 'Logic Apps', 'APIs'],
      },
      {
        n: '04',
        title: 'AI engineering',
        copy:
          'Document analysis, assistants and retrieval systems built on current LLM APIs — scoped to a real workflow, with the guardrails and evaluation to keep it honest.',
        tags: ['LLM APIs', 'RAG', 'Extraction', 'Evals'],
      },
    ],
  },

  work: {
    eyebrow: 'Concept work',
    title: 'What the same care looks like in three different trades.',
    lede:
      'These are concept pieces, not client sites — sector studies we built to show how we approach a problem before anyone signs anything. Each one is a live page; click through and use it.',
    viewSite: 'View the site',
    items: [
      {
        slug: 'restaurant',
        demo: 'fiorella',
        name: 'Fiorella',
        sector: 'Restaurant',
        copy:
          'Menu, reservations and a full-bleed kitchen hero — built to make a table feel worth booking.',
        build: ['Next.js', 'Reservations API', 'Menu CMS'],
      },
      {
        slug: 'dental-lab',
        demo: 'meridian',
        name: 'Meridian Dental Lab',
        sector: 'Dental laboratory',
        copy:
          'A case portal where partner clinics submit scans, track a crown through milling, and see turnaround at a glance.',
        build: ['Client portal', 'Case tracking', 'Azure'],
      },
      {
        slug: 'landscaping',
        demo: 'rooted',
        name: 'Rooted Landscape Co.',
        sector: 'Landscaping',
        copy:
          'An instant quote builder tied to seasonal service booking, so the phone stops being the only way in.',
        build: ['Quote engine', 'Scheduling', 'Stripe'],
      },
    ],
  },

  about: {
    eyebrow: 'The studio',
    titleLead: 'Small on purpose.',
    titleMuted: 'Senior by default.',
    paragraphs: [
      'Zyvanta is a web and software studio in Ottawa. We work with founders and operations teams who have outgrown their tooling and need something built properly — quickly, and without a project manager in between.',
      'That means full-stack engineering across React and Next.js, Azure and the Microsoft Power Platform, and the automation and AI layers that sit on top. One engagement, one accountable team, from first sketch to production.',
    ],
    stats: [
      { value: '2019', label: 'Building since' },
      { value: '40+', label: 'Projects shipped' },
      { value: '100%', label: 'Senior-built' },
      { value: 'Ottawa', label: 'Based in Canada' },
    ],
    principles: [
      {
        title: 'One team, no handoffs',
        copy:
          'The person who scopes your project is the person who builds it. Nothing gets lost translating a deck into a codebase.',
      },
      {
        title: 'Performance is a feature',
        copy:
          'Every build ships with a budget for load time, bundle size and accessibility — measured, not assumed.',
      },
      {
        title: 'You own everything',
        copy:
          'Your repository, your cloud account, your data. We work in the open and hand over clean, documented code.',
      },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: "Tell us what you're building.",
    lede:
      "Send a few lines about the project and we'll come back within one business day with honest scope, a timeline and a number — or a straight answer that we're not the right fit.",
    studioLabel: 'Studio',
    studioValue: 'Ottawa, Ontario · Canada',
    availabilityLabel: 'Availability',
    availabilityValue: 'Taking new projects',

    nameLabel: 'Name',
    namePlaceholder: 'Jane Doe',
    emailLabel: 'Email',
    emailPlaceholder: 'jane@company.com',
    companyLabel: 'Company',
    companyOptional: '(optional)',
    companyPlaceholder: 'Acme Inc.',
    scopeLabel: 'What do you need?',
    budgetLabel: 'Budget range',
    selectOne: 'Select one',
    messageLabel: 'Project',
    messagePlaceholder: "What are you building, and what's in the way?",

    scopes: [
      'Web platform',
      'Custom application',
      'Automation / integration',
      'AI engineering',
      'Something else',
    ],
    budgets: ['Under $5k', '$5k – $15k', '$15k – $50k', '$50k+', 'Not sure yet'],

    submit: 'Send message',
    submitting: 'Sending…',

    errName: 'Please tell us your name.',
    errEmail: 'A valid email, please.',
    errMessage: 'A sentence or two about the project.',
    errSend:
      "That didn't send — the connection dropped, or the form service is down. Please try again in a moment.",

    sentTitle: 'Message sent',
    sentBody: "Thanks — it's in. You'll hear back within one business day.",
    sentAgain: 'Send another',
    honeypot: 'Leave this empty:',
  },

  footer: {
    built: 'Built in Ottawa.',
  },
};

const fr = {
  meta: {
    title: 'Zyvanta — L’ingénierie web, de bout en bout',
    description:
      'Zyvanta est un studio web et logiciel établi à Ottawa qui bâtit des produits rapides et intelligents : plateformes web, applications sur mesure et automatisation qui élimine les tâches répétitives.',
    ogDescription:
      'Plateformes web, applications sur mesure et automatisation pour les équipes qui attendent de leurs logiciels qu’ils suivent le rythme.',
  },

  nav: {
    home: 'Accueil Zyvanta',
    toggleMenu: 'Ouvrir le menu',
    links: [
      { href: '#services', label: 'Services' },
      { href: '#work', label: 'Réalisations' },
      { href: '#about', label: 'Studio' },
      { href: '#contact', label: 'Contact' },
    ],
    cta: 'Démarrer un projet',
    switchTo: 'View in English',
  },

  hero: {
    eyebrow: 'Ottawa · Studio web et logiciel',
    titleLead: 'Nous bâtissons le web',
    titleAccent: 'qui fait rouler votre entreprise.',
    lede:
      'Zyvanta conçoit et développe des plateformes web rapides, des applications sur mesure et l’automatisation qui élimine discrètement les tâches répétitives — livré par des ingénieurs seniors, sans les couches d’agence entre les deux.',
    ctaPrimary: 'Démarrer un projet',
    ctaSecondary: 'Ce que nous faisons',
    stack: ['Next.js · React', 'Azure · Power Platform', 'IA et automatisation'],
    scroll: 'Défiler',
  },

  services: {
    eyebrow: 'Services',
    title: 'Quatre façons de faire travailler vos logiciels.',
    lede:
      'La plupart des mandats commencent par un de ces volets et s’étendent à un deuxième. Vous travaillez directement avec les personnes qui écrivent le code.',
    items: [
      {
        n: '01',
        title: 'Plateformes web',
        copy:
          'Sites vitrines, portails et boutiques en ligne sur Next.js — optimisés pour les Core Web Vitals, la visibilité dans les moteurs de recherche et la conversion, pas seulement pour la capture d’écran du lancement.',
        tags: ['Next.js', 'Systèmes de design', 'SEO', 'CMS'],
      },
      {
        n: '02',
        title: 'Applications sur mesure',
        copy:
          'Outils internes, portails clients et tableaux de bord qui remplacent le fichier Excel dont tout le monde a discrètement peur. Bâtis sur React, Node et Azure, avec authentification et journalisation intégrées.',
        tags: ['React', 'Node', 'Azure', 'Dataverse'],
      },
      {
        n: '03',
        title: 'Automatisation et intégration',
        copy:
          'Les systèmes que vous payez déjà, qui se parlent enfin. Power Automate, n8n et des pipelines API qui retirent des heures de travail manuel de votre semaine.',
        tags: ['Power Automate', 'n8n', 'Logic Apps', 'API'],
      },
      {
        n: '04',
        title: 'Ingénierie IA',
        copy:
          'Analyse documentaire, assistants et systèmes de recherche bâtis sur les API de modèles de langage actuels — cadrés sur un flux de travail réel, avec les garde-fous et l’évaluation qui les gardent honnêtes.',
        tags: ['API de LLM', 'RAG', 'Extraction', 'Évaluations'],
      },
    ],
  },

  work: {
    eyebrow: 'Travaux conceptuels',
    title: 'Le même soin, appliqué à trois métiers différents.',
    lede:
      'Ce sont des pièces conceptuelles, pas des sites clients — des études sectorielles réalisées pour montrer comment nous abordons un problème avant que quiconque signe quoi que ce soit. Chacune est une page réelle; cliquez et essayez-la.',
    viewSite: 'Voir le site',
    items: [
      {
        slug: 'restaurant',
        demo: 'fiorella',
        name: 'Fiorella',
        sector: 'Restaurant',
        copy:
          'Menu, réservations et une vidéo de cuisine pleine largeur — pensés pour donner envie de réserver une table.',
        build: ['Next.js', 'API de réservation', 'CMS de menu'],
      },
      {
        slug: 'dental-lab',
        demo: 'meridian',
        name: 'Meridian Dental Lab',
        sector: 'Laboratoire dentaire',
        copy:
          'Un portail où les cliniques partenaires soumettent leurs numérisations, suivent une couronne pendant l’usinage et voient les délais d’un coup d’œil.',
        build: ['Portail client', 'Suivi des cas', 'Azure'],
      },
      {
        slug: 'landscaping',
        demo: 'rooted',
        name: 'Rooted Landscape Co.',
        sector: 'Aménagement paysager',
        copy:
          'Un calculateur de soumission instantanée relié à la prise de rendez-vous saisonnière, pour que le téléphone cesse d’être la seule porte d’entrée.',
        build: ['Moteur de soumission', 'Planification', 'Stripe'],
      },
    ],
  },

  about: {
    eyebrow: 'Le studio',
    titleLead: 'Petit par choix.',
    titleMuted: 'Senior par défaut.',
    paragraphs: [
      'Zyvanta est un studio web et logiciel établi à Ottawa. Nous travaillons avec des fondateurs et des équipes d’exploitation qui ont dépassé leurs outils et ont besoin de quelque chose de bien bâti — rapidement, et sans gestionnaire de projet entre les deux.',
      'Cela veut dire du développement full-stack en React et Next.js, sur Azure et la Power Platform de Microsoft, avec les couches d’automatisation et d’IA qui s’y greffent. Un seul mandat, une seule équipe responsable, du premier croquis à la production.',
    ],
    stats: [
      { value: '2019', label: 'Actif depuis' },
      { value: '40+', label: 'Projets livrés' },
      { value: '100 %', label: 'Réalisé par des seniors' },
      { value: 'Ottawa', label: 'Établi au Canada' },
    ],
    principles: [
      {
        title: 'Une seule équipe, aucun transfert',
        copy:
          'La personne qui cadre votre projet est celle qui le construit. Rien ne se perd entre la présentation et le code.',
      },
      {
        title: 'La performance est une fonctionnalité',
        copy:
          'Chaque livraison respecte un budget de temps de chargement, de taille de bundle et d’accessibilité — mesuré, pas supposé.',
      },
      {
        title: 'Tout vous appartient',
        copy:
          'Votre dépôt, votre compte infonuagique, vos données. Nous travaillons à livre ouvert et remettons du code propre et documenté.',
      },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Dites-nous ce que vous bâtissez.',
    lede:
      'Envoyez quelques lignes sur le projet et nous revenons vers vous en un jour ouvrable avec une portée honnête, un échéancier et un prix — ou une réponse franche si nous ne sommes pas le bon choix.',
    studioLabel: 'Studio',
    studioValue: 'Ottawa, Ontario · Canada',
    availabilityLabel: 'Disponibilité',
    availabilityValue: 'Nous acceptons de nouveaux projets',

    nameLabel: 'Nom',
    namePlaceholder: 'Jean Tremblay',
    emailLabel: 'Courriel',
    emailPlaceholder: 'jean@entreprise.com',
    companyLabel: 'Entreprise',
    companyOptional: '(facultatif)',
    companyPlaceholder: 'Entreprise inc.',
    scopeLabel: 'De quoi avez-vous besoin?',
    budgetLabel: 'Budget approximatif',
    selectOne: 'Choisir une option',
    messageLabel: 'Projet',
    messagePlaceholder: 'Que bâtissez-vous, et qu’est-ce qui bloque?',

    scopes: [
      'Plateforme web',
      'Application sur mesure',
      'Automatisation / intégration',
      'Ingénierie IA',
      'Autre chose',
    ],
    budgets: [
      'Moins de 5 000 $',
      '5 000 $ – 15 000 $',
      '15 000 $ – 50 000 $',
      '50 000 $ et plus',
      'Je ne sais pas encore',
    ],

    submit: 'Envoyer le message',
    submitting: 'Envoi…',

    errName: 'Veuillez indiquer votre nom.',
    errEmail: 'Une adresse courriel valide, s’il vous plaît.',
    errMessage: 'Une phrase ou deux sur le projet.',
    errSend:
      'L’envoi a échoué — la connexion a été interrompue, ou le service de formulaire est hors ligne. Réessayez dans un moment.',

    sentTitle: 'Message envoyé',
    sentBody: 'Merci — c’est bien reçu. Vous aurez une réponse en un jour ouvrable.',
    sentAgain: 'Envoyer un autre message',
    honeypot: 'Laissez ce champ vide :',
  },

  footer: {
    built: 'Conçu à Ottawa.',
  },
};

const dictionaries = { en, fr };

export function getDictionary(locale) {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}

export function isLocale(value) {
  return LOCALES.includes(value);
}
