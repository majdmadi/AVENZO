// Client intake questionnaire — bilingual, sector-aware.
//
// English and French sit side by side on every string so a change to one is
// impossible to make without seeing the other. `t(en, fr)` builds the pair;
// the form renders `label[locale]`.
//
// Field shape:
//   name      submitted key (also what appears in the email summary)
//   type      text | email | tel | url | date | textarea | select | radio | checks
//   label     question
//   help      one line under the question — use it to prevent a bad answer
//   required  blocks the step until answered
//   half      lays out two per row on desktop
//   only      array of sector ids; omit to show for everyone

const t = (en, fr) => ({ en, fr });

export const SECTORS = [
  { id: 'restaurant', label: t('Restaurant, café or bar', 'Restaurant, café ou bar') },
  { id: 'health', label: t('Clinic, dental or health practice', 'Clinique, cabinet dentaire ou santé') },
  { id: 'trades', label: t('Trades, contracting or landscaping', 'Métiers, construction ou aménagement paysager') },
  { id: 'retail', label: t('Retail or online store', 'Commerce de détail ou boutique en ligne') },
  { id: 'professional', label: t('Professional services', 'Services professionnels') },
  { id: 'other', label: t('Something else', 'Autre chose') },
];

export const UI = {
  title: t('Project brief', 'Brief de projet'),
  intro: t(
    'Everything we need to start building, in one place. Most people finish it in about fifteen minutes — and your answers save as you go, so you can stop and come back on the same device.',
    'Tout ce qu’il nous faut pour commencer, au même endroit. La plupart des gens le remplissent en une quinzaine de minutes — et vos réponses se sauvegardent au fur et à mesure, alors vous pouvez arrêter et revenir sur le même appareil.'
  ),
  step: t('Step', 'Étape'),
  of: t('of', 'sur'),
  next: t('Continue', 'Continuer'),
  back: t('Back', 'Retour'),
  submit: t('Send the brief', 'Envoyer le brief'),
  submitting: t('Sending…', 'Envoi…'),
  required: t('This one we need.', 'Celle-ci est obligatoire.'),
  requiredEmail: t('A valid email, please.', 'Une adresse courriel valide, s’il vous plaît.'),
  requiredMark: t('Required', 'Obligatoire'),
  savedNote: t('Saved on this device', 'Sauvegardé sur cet appareil'),
  clear: t('Start over', 'Recommencer'),
  clearConfirm: t(
    'Clear every answer and start again?',
    'Effacer toutes les réponses et recommencer?'
  ),
  sentTitle: t('Brief received', 'Brief reçu'),
  sentBody: t(
    'Thanks — that is genuinely everything we need. We will read it properly and come back within one business day with scope, a timeline and a price.',
    'Merci — c’est vraiment tout ce qu’il nous faut. Nous le lirons attentivement et reviendrons vers vous en un jour ouvrable avec la portée, l’échéancier et le prix.'
  ),
  sendFail: t(
    'That didn’t send. Your answers are still saved here — try again in a moment.',
    'L’envoi a échoué. Vos réponses sont toujours sauvegardées ici — réessayez dans un moment.'
  ),
  noneYet: t('— not answered —', '— sans réponse —'),
};

const YES_NO_UNSURE = [
  t('Yes', 'Oui'),
  t('No', 'Non'),
  t('Not sure', 'Je ne sais pas'),
];

export const STEPS = [
  // ─────────────────────────────────────────────────────────── 1. contact
  {
    id: 'you',
    title: t('You and your business', 'Vous et votre entreprise'),
    blurb: t('The basics, so we know who we are talking to.', 'L’essentiel, pour savoir à qui nous parlons.'),
    fields: [
      { name: 'contact_name', type: 'text', half: true, required: true, label: t('Your name', 'Votre nom') },
      { name: 'contact_role', type: 'text', half: true, label: t('Your role', 'Votre rôle') },
      { name: 'email', type: 'email', half: true, required: true, label: t('Email', 'Courriel') },
      { name: 'phone', type: 'tel', half: true, required: true, label: t('Phone', 'Téléphone') },
      {
        name: 'decision_maker',
        type: 'radio',
        required: true,
        label: t('Who signs off on the final site?', 'Qui approuve le site final?'),
        help: t(
          'The single most useful thing you can tell us. Projects stall when approval is spread across people.',
          'La chose la plus utile que vous puissiez nous dire. Les projets s’enlisent quand l’approbation est partagée entre plusieurs personnes.'
        ),
        options: [
          t('Me, on my own', 'Moi, seul'),
          t('Me and one partner', 'Moi et un associé'),
          t('A group or committee', 'Un groupe ou un comité'),
          t('Someone else entirely', 'Quelqu’un d’autre'),
        ],
      },
      { name: 'business_name', type: 'text', half: true, required: true, label: t('Business name', 'Nom de l’entreprise') },
      { name: 'years', type: 'text', half: true, label: t('Years in business', 'Années en activité') },
      {
        name: 'sector',
        type: 'select',
        required: true,
        label: t('What kind of business is it?', 'Quel type d’entreprise?'),
        help: t('This changes which questions you see later.', 'Cela détermine les questions que vous verrez plus loin.'),
        options: SECTORS.map((s) => s.label),
      },
      { name: 'address', type: 'text', label: t('Business address', 'Adresse de l’entreprise') },
      {
        name: 'service_areas',
        type: 'text',
        label: t('Cities and areas you serve', 'Villes et secteurs desservis'),
        help: t('Ottawa, Kanata, Gatineau… we use these for local search.', 'Ottawa, Kanata, Gatineau… nous les utilisons pour la recherche locale.'),
      },
      { name: 'current_site', type: 'url', label: t('Current website, if any', 'Site web actuel, s’il y en a un') },
    ],
  },

  // ────────────────────────────────────────────────────────── 2. project
  {
    id: 'project',
    title: t('The project', 'Le projet'),
    blurb: t('What the site has to achieve, and by when.', 'Ce que le site doit accomplir, et pour quand.'),
    fields: [
      {
        name: 'main_goal',
        type: 'radio',
        required: true,
        label: t('If the site does one thing well, what is it?', 'Si le site réussit une seule chose, laquelle?'),
        help: t('Pick the one that matters most. Everything else gets designed around it.', 'Choisissez celle qui compte le plus. Tout le reste sera conçu autour.'),
        options: [
          t('Get the phone ringing', 'Faire sonner le téléphone'),
          t('Collect quote requests or bookings', 'Recevoir des demandes de soumission ou des rendez-vous'),
          t('Show off past work', 'Mettre en valeur les réalisations'),
          t('Sell products online', 'Vendre des produits en ligne'),
          t('Look credible enough to be taken seriously', 'Paraître assez crédible pour être pris au sérieux'),
        ],
      },
      {
        name: 'problem',
        type: 'textarea',
        required: true,
        label: t('What is wrong with what you have now?', 'Qu’est-ce qui ne va pas avec ce que vous avez?'),
        help: t(
          'Be blunt. "Nothing" is a fine answer if you have no site at all.',
          'Soyez direct. « Rien » est une réponse valable si vous n’avez aucun site.'
        ),
      },
      { name: 'deadline', type: 'date', half: true, label: t('Target launch date', 'Date de lancement visée') },
      {
        name: 'deadline_why',
        type: 'text',
        half: true,
        label: t('Anything driving that date?', 'Quelque chose impose cette date?'),
        help: t('A season, an event, a campaign, a lease.', 'Une saison, un événement, une campagne, un bail.'),
      },
      {
        name: 'budget',
        type: 'select',
        required: true,
        label: t('Budget range', 'Fourchette budgétaire'),
        help: t(
          'An honest range saves us both a round of guessing. It is not a commitment.',
          'Une fourchette honnête nous évite un tour de devinettes. Ce n’est pas un engagement.'
        ),
        options: [
          t('Under $2,500', 'Moins de 2 500 $'),
          t('$2,500 – $6,000', '2 500 $ – 6 000 $'),
          t('$6,000 – $15,000', '6 000 $ – 15 000 $'),
          t('$15,000+', '15 000 $ et plus'),
          t('I genuinely do not know yet', 'Je ne sais vraiment pas encore'),
        ],
      },
      {
        name: 'languages',
        type: 'checks',
        label: t('What languages does the site need?', 'Quelles langues le site doit-il offrir?'),
        options: [t('English', 'Anglais'), t('French', 'Français'), t('Arabic', 'Arabe'), t('Other', 'Autre')],
      },
      {
        name: 'pages',
        type: 'checks',
        label: t('Which pages do you expect?', 'Quelles pages prévoyez-vous?'),
        help: t('Rough is fine — we will tell you if something is missing.', 'Une idée approximative suffit — nous vous dirons s’il manque quelque chose.'),
        options: [
          t('Home', 'Accueil'),
          t('About', 'À propos'),
          t('Services', 'Services'),
          t('Projects / gallery', 'Réalisations / galerie'),
          t('Testimonials', 'Témoignages'),
          t('Blog or news', 'Blogue ou actualités'),
          t('Contact', 'Contact'),
          t('Booking', 'Prise de rendez-vous'),
          t('Online store', 'Boutique en ligne'),
          t('Careers', 'Carrières'),
          t('FAQ', 'FAQ'),
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────────── 3. content
  {
    id: 'content',
    title: t('Your business in words', 'Votre entreprise en mots'),
    blurb: t('The raw material the site is built from.', 'La matière première du site.'),
    fields: [
      {
        name: 'description',
        type: 'textarea',
        required: true,
        label: t('Describe the business in a few sentences', 'Décrivez l’entreprise en quelques phrases'),
        help: t('As you would to someone at a barbecue, not in marketing language.', 'Comme vous le diriez à quelqu’un lors d’un barbecue, pas en langage marketing.'),
      },
      {
        name: 'differentiator',
        type: 'textarea',
        required: true,
        label: t('Why do customers pick you over the next guy?', 'Pourquoi les clients vous choisissent-ils plutôt qu’un autre?'),
        help: t(
          '"Quality and service" tells us nothing. What do you actually do that they do not?',
          '« Qualité et service » ne nous apprend rien. Que faites-vous réellement qu’ils ne font pas?'
        ),
      },
      {
        name: 'services',
        type: 'textarea',
        required: true,
        label: t('List your services, one per line', 'Énumérez vos services, un par ligne'),
      },
      {
        name: 'who_writes_copy',
        type: 'radio',
        required: true,
        label: t('Who writes the text for the site?', 'Qui rédige le texte du site?'),
        help: t(
          'This is the single biggest driver of both cost and timeline. There is no wrong answer.',
          'C’est le principal facteur de coût et de délai. Il n’y a pas de mauvaise réponse.'
        ),
        options: [
          t('I will write it', 'Je l’écrirai'),
          t('I will send rough notes, you polish them', 'J’enverrai des notes, vous les peaufinerez'),
          t('You write it from this brief and a call', 'Vous l’écrivez à partir de ce brief et d’un appel'),
        ],
      },
      { name: 'gbp', type: 'url', label: t('Google Business Profile link', 'Lien de votre fiche Google Business') },
      {
        name: 'testimonials',
        type: 'textarea',
        label: t('Reviews or testimonials you want shown', 'Avis ou témoignages à afficher'),
      },
      {
        name: 'credentials',
        type: 'textarea',
        label: t('Licences, certifications, insurance, awards', 'Licences, certifications, assurances, prix'),
        help: t('Anything that earns trust on sight.', 'Tout ce qui inspire confiance au premier coup d’œil.'),
      },
    ],
  },

  // ─────────────────────────────────────────────────────────── 4. sector
  {
    id: 'sector',
    title: t('Your industry specifically', 'Votre secteur en particulier'),
    blurb: t('A few questions only your kind of business gets asked.', 'Quelques questions propres à votre type d’entreprise.'),
    fields: [
      // ---- restaurant
      {
        name: 'r_menu',
        only: ['restaurant'],
        type: 'radio',
        label: t('How should the menu work?', 'Comment le menu doit-il fonctionner?'),
        help: t('A PDF is cheap but reads badly on a phone and is invisible to Google.', 'Un PDF coûte moins cher mais se lit mal sur téléphone et reste invisible pour Google.'),
        options: [
          t('Typed onto the page', 'Saisi directement dans la page'),
          t('A downloadable PDF', 'Un PDF téléchargeable'),
          t('Typed, and I need to edit it myself', 'Saisi, et je dois pouvoir le modifier moi-même'),
          t('It changes weekly', 'Il change chaque semaine'),
        ],
      },
      {
        name: 'r_reservations',
        only: ['restaurant'],
        type: 'radio',
        label: t('Reservations', 'Réservations'),
        options: [
          t('Phone only', 'Téléphone seulement'),
          t('Online booking, built in', 'Réservation en ligne, intégrée'),
          t('I already use a system', 'J’utilise déjà un système'),
          t('We do not take reservations', 'Nous ne prenons pas de réservations'),
        ],
      },
      {
        name: 'r_ordering',
        only: ['restaurant'],
        type: 'checks',
        label: t('Online ordering', 'Commande en ligne'),
        options: [
          t('Pickup', 'Cueillette'),
          t('Delivery ourselves', 'Livraison par nous'),
          t('Through Uber Eats / DoorDash / Skip', 'Via Uber Eats / DoorDash / Skip'),
          t('None', 'Aucune'),
        ],
      },
      {
        name: 'r_hours',
        only: ['restaurant'],
        type: 'text',
        label: t('Hours, including seasonal or holiday changes', 'Heures, incluant les changements saisonniers ou fériés'),
      },

      // ---- health
      {
        name: 'h_booking',
        only: ['health'],
        type: 'radio',
        label: t('How do patients book?', 'Comment les patients prennent-ils rendez-vous?'),
        options: [
          t('Phone only', 'Téléphone seulement'),
          t('Online booking, built in', 'Réservation en ligne, intégrée'),
          t('We already use a booking system', 'Nous utilisons déjà un système'),
        ],
      },
      {
        name: 'h_system',
        only: ['health'],
        type: 'text',
        label: t('If you use a practice or booking system, which one?', 'Si vous utilisez un système de gestion ou de rendez-vous, lequel?'),
      },
      {
        name: 'h_practitioners',
        only: ['health'],
        type: 'text',
        half: true,
        label: t('How many practitioners to profile?', 'Combien de praticiens à présenter?'),
      },
      {
        name: 'h_forms',
        only: ['health'],
        type: 'radio',
        half: true,
        label: t('Downloadable patient forms?', 'Formulaires de patients téléchargeables?'),
        options: YES_NO_UNSURE,
      },
      {
        name: 'h_compliance',
        only: ['health'],
        type: 'textarea',
        label: t('Any college, regulator or privacy requirements for your website?', 'Exigences d’un ordre professionnel, d’un organisme ou en matière de vie privée pour votre site?'),
        help: t(
          'Advertising rules, patient privacy, required disclaimers — tell us now, not at launch.',
          'Règles publicitaires, confidentialité des patients, avis obligatoires — dites-le maintenant, pas au lancement.'
        ),
      },

      // ---- trades
      {
        name: 'tr_quote',
        only: ['trades'],
        type: 'radio',
        label: t('How should people ask for a price?', 'Comment les gens doivent-ils demander un prix?'),
        options: [
          t('A simple contact form', 'Un simple formulaire de contact'),
          t('A detailed quote request', 'Une demande de soumission détaillée'),
          t('An instant estimate calculator', 'Un calculateur d’estimation instantanée'),
        ],
      },
      {
        name: 'tr_gallery',
        only: ['trades'],
        type: 'radio',
        half: true,
        label: t('Before-and-after photos available?', 'Photos avant-après disponibles?'),
        options: YES_NO_UNSURE,
      },
      {
        name: 'tr_licences',
        only: ['trades'],
        type: 'text',
        half: true,
        label: t('Licence numbers, WSIB, insurance to display', 'Numéros de licence, CNESST/WSIB, assurances à afficher'),
      },
      {
        name: 'tr_seasonal',
        only: ['trades'],
        type: 'textarea',
        label: t('Seasonal services or packages', 'Services ou forfaits saisonniers'),
      },

      // ---- retail
      {
        name: 're_products',
        only: ['retail'],
        type: 'text',
        half: true,
        label: t('Roughly how many products?', 'Environ combien de produits?'),
      },
      {
        name: 're_inventory',
        only: ['retail'],
        type: 'text',
        half: true,
        label: t('Do you use a POS or inventory system?', 'Utilisez-vous un système de caisse ou d’inventaire?'),
      },
      {
        name: 're_payments',
        only: ['retail'],
        type: 'checks',
        label: t('Payment methods', 'Modes de paiement'),
        options: [
          t('Credit card', 'Carte de crédit'),
          t('Interac', 'Interac'),
          t('PayPal', 'PayPal'),
          t('Pay in store on pickup', 'Paiement en magasin à la cueillette'),
        ],
      },
      {
        name: 're_shipping',
        only: ['retail'],
        type: 'textarea',
        label: t('Where do you ship, and how do you charge for it?', 'Où expédiez-vous, et comment facturez-vous la livraison?'),
      },

      // ---- professional
      {
        name: 'p_intake',
        only: ['professional'],
        type: 'radio',
        label: t('How should a new client reach you?', 'Comment un nouveau client doit-il vous joindre?'),
        options: [
          t('A simple contact form', 'Un simple formulaire de contact'),
          t('A detailed intake form', 'Un formulaire d’accueil détaillé'),
          t('Book a call directly', 'Réserver un appel directement'),
        ],
      },
      {
        name: 'p_team',
        only: ['professional'],
        type: 'text',
        half: true,
        label: t('How many people to profile?', 'Combien de personnes à présenter?'),
      },
      {
        name: 'p_cases',
        only: ['professional'],
        type: 'radio',
        half: true,
        label: t('Case studies or client results to publish?', 'Études de cas ou résultats clients à publier?'),
        options: YES_NO_UNSURE,
      },

      // ---- other / catch-all
      {
        name: 'o_describe',
        only: ['other'],
        type: 'textarea',
        label: t('Tell us how your business actually works', 'Expliquez-nous comment votre entreprise fonctionne réellement'),
        help: t('How people find you, what they buy, and what happens after.', 'Comment les gens vous trouvent, ce qu’ils achètent, et ce qui se passe ensuite.'),
      },
    ],
  },

  // ────────────────────────────────────────────────────────── 5. look
  {
    id: 'look',
    title: t('Look and feel', 'Apparence'),
    blurb: t('Taste is hard to describe. Examples do it better than adjectives.', 'Le goût est difficile à décrire. Les exemples valent mieux que les adjectifs.'),
    fields: [
      {
        name: 'likes',
        type: 'textarea',
        required: true,
        label: t('Two or three websites you like — paste the links', 'Deux ou trois sites que vous aimez — collez les liens'),
        help: t('Any industry. They do not have to be competitors.', 'Tous secteurs confondus. Ce ne sont pas forcément des concurrents.'),
      },
      {
        name: 'likes_why',
        type: 'textarea',
        label: t('What do you like about them?', 'Qu’est-ce qui vous plaît dans ces sites?'),
      },
      {
        name: 'dislikes',
        type: 'textarea',
        label: t('Anything you definitely do not want', 'Ce que vous ne voulez surtout pas'),
        help: t('Just as useful as what you like.', 'Aussi utile que ce que vous aimez.'),
      },
      {
        name: 'style',
        type: 'checks',
        label: t('Rough direction', 'Direction générale'),
        options: [
          t('Clean and minimal', 'Épuré et minimaliste'),
          t('Bold and modern', 'Audacieux et moderne'),
          t('Warm and friendly', 'Chaleureux et accueillant'),
          t('Premium and refined', 'Haut de gamme et raffiné'),
          t('Technical and precise', 'Technique et précis'),
          t('Traditional and established', 'Traditionnel et établi'),
        ],
      },
      {
        name: 'logo',
        type: 'radio',
        required: true,
        label: t('Logo', 'Logo'),
        options: [
          t('Yes, and I have the original vector file', 'Oui, et j’ai le fichier vectoriel original'),
          t('Yes, but only as an image', 'Oui, mais seulement en image'),
          t('No, I need one designed', 'Non, j’en ai besoin d’un'),
        ],
      },
      { name: 'colours', type: 'text', half: true, label: t('Brand colours', 'Couleurs de la marque') },
      { name: 'tagline', type: 'text', half: true, label: t('Tagline or slogan', 'Slogan') },
      {
        name: 'photos',
        type: 'radio',
        required: true,
        label: t('Do you have your own photos?', 'Avez-vous vos propres photos?'),
        help: t(
          'Real photos of your work beat stock every time. If you have none, say so now — it changes the plan and the price.',
          'De vraies photos de votre travail valent toujours mieux que des banques d’images. Si vous n’en avez pas, dites-le maintenant — cela change le plan et le prix.'
        ),
        options: [
          t('Yes, plenty and they are good', 'Oui, beaucoup et de bonne qualité'),
          t('A few, taken on a phone', 'Quelques-unes, prises au téléphone'),
          t('None — I need help with this', 'Aucune — j’ai besoin d’aide'),
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────── 6. practical
  {
    id: 'practical',
    title: t('The practical bits', 'Aspects pratiques'),
    blurb: t('Boring, and the reason projects finish on time.', 'Ennuyeux, et la raison pour laquelle les projets se terminent à temps.'),
    fields: [
      {
        name: 'domain_owned',
        type: 'radio',
        half: true,
        label: t('Do you own a domain name?', 'Possédez-vous un nom de domaine?'),
        options: YES_NO_UNSURE,
      },
      { name: 'domain_name', type: 'text', half: true, label: t('Which one?', 'Lequel?') },
      {
        name: 'registrar_access',
        type: 'text',
        label: t('Where is it registered, and can you log in?', 'Où est-il enregistré, et pouvez-vous vous y connecter?'),
        help: t(
          'GoDaddy, IONOS, Namecheap… If a previous developer holds it, tell us now — that is often the slowest part of a launch.',
          'GoDaddy, IONOS, Namecheap… Si un ancien développeur le détient, dites-le maintenant — c’est souvent l’étape la plus lente d’un lancement.'
        ),
      },
      {
        name: 'existing_access',
        type: 'textarea',
        label: t('What else do you have admin access to?', 'À quoi d’autre avez-vous un accès administrateur?'),
        help: t('Current website, Google Business Profile, social accounts, email.', 'Site actuel, fiche Google Business, comptes sociaux, courriel.'),
      },
      {
        name: 'features',
        type: 'checks',
        label: t('Features you want', 'Fonctionnalités souhaitées'),
        options: [
          t('Google Maps', 'Google Maps'),
          t('Click-to-call button', 'Bouton d’appel direct'),
          t('WhatsApp or Messenger', 'WhatsApp ou Messenger'),
          t('Online booking', 'Réservation en ligne'),
          t('Take payments', 'Accepter les paiements'),
          t('Newsletter signup', 'Inscription à l’infolettre'),
          t('Live chat', 'Clavardage en direct'),
          t('Blog', 'Blogue'),
          t('Google Reviews feed', 'Flux d’avis Google'),
        ],
      },
      {
        name: 'legal',
        type: 'checks',
        label: t('Legal pages and compliance', 'Pages légales et conformité'),
        help: t(
          'If you collect any personal information — even a contact form — you need a privacy policy in Canada.',
          'Si vous recueillez des renseignements personnels — même par un formulaire de contact — une politique de confidentialité est requise au Canada.'
        ),
        options: [
          t('Privacy policy', 'Politique de confidentialité'),
          t('Terms of service', 'Conditions d’utilisation'),
          t('Cookie banner', 'Bannière de témoins'),
          t('Accessibility (AODA)', 'Accessibilité (LAPHO)'),
          t('Not sure — advise me', 'Je ne sais pas — conseillez-moi'),
        ],
      },
      {
        name: 'content_deadline',
        type: 'date',
        required: true,
        label: t('When can you send photos, text and your logo?', 'Quand pouvez-vous envoyer photos, textes et logo?'),
        help: t(
          'Answer honestly rather than optimistically. Waiting on content is the number one reason a site misses its launch date.',
          'Répondez honnêtement plutôt qu’avec optimisme. L’attente du contenu est la première cause de retard au lancement.'
        ),
      },
      {
        name: 'anything_else',
        type: 'textarea',
        label: t('Anything else we should know?', 'Autre chose à savoir?'),
      },
    ],
  },
];
