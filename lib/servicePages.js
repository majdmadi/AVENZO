// Content for the standalone service pages.
//
// Why these exist: until now the whole marketing site was two URLs (/en, /fr).
// Google had one page per language to rank, against agencies with hundreds.
// Each service here becomes its own indexable page in both languages, with a
// locale-specific slug so the French page carries French keywords.
//
// French is Canadian French, same conventions as lib/i18n.js.

export const services = [
  {
    id: 'web',
    n: '01',
    slug: { en: 'web-design-ottawa', fr: 'conception-web-ottawa' },
    en: {
      name: 'Web design & development',
      short: 'Fast, findable websites for Ottawa businesses.',
      metaTitle: 'Web Design in Ottawa | Fast Next.js Websites',
      metaDescription:
        'Web design and development in Ottawa. Hand-built Next.js sites that load in under two seconds, rank locally and turn visitors into calls. Bilingual EN/FR.',
      h1: 'Web design and development in Ottawa',
      lede:
        'Most small-business websites in this city are slow, invisible on a phone, and impossible to find on Google. We build the other kind: hand-coded, fast, and structured so that the people searching for what you do actually land on you.',
      forWho: [
        'Trades and service businesses whose work comes by word of mouth and stops there',
        'Established companies on a site built years ago that nobody can edit',
        'Bilingual businesses that need English and French done properly, not machine-translated',
      ],
      includes: [
        'Design and build on Next.js — no page-builder bloat, no monthly theme licences',
        'Sub-two-second loads on a phone, on data, which is where your customers actually are',
        'Search structure done at build time: titles, schema markup, sitemap, local signals',
        'A quote or booking form that reaches your inbox, not a dashboard you never open',
        'Bilingual EN/FR with proper hreflang, if you serve both sides of the river',
      ],
      steps: [
        { t: 'Questionnaire', d: 'Twenty minutes on your phone. It replaces three meetings and it is how we learn your trade.' },
        { t: 'Build', d: 'One to three weeks depending on size. You see it live on a staging link the whole way.' },
        { t: 'Launch', d: 'Domain, hosting, forms, analytics and Search Console set up and handed over in your name.' },
        { t: 'After', d: 'Content edits, new pages, and the technical maintenance — or the keys, if you want to run it yourself.' },
      ],
      faqs: [
        {
          q: 'How much does a website cost in Ottawa?',
          a: 'A focused site for a trade or service business generally lands between $2,500 and $6,000. Larger builds with custom functionality go past that. The number depends on how many pages, whether it is bilingual, and how much of the content you write. You get a fixed written price before anything starts.',
        },
        {
          q: 'How long does it take?',
          a: 'One to three weeks of build time once we have your content. The part that usually causes delay is photos and text, which is why the questionnaire asks for them up front.',
        },
        {
          q: 'Do I own it?',
          a: 'Yes. The domain is registered in your name, the code is yours, and hosting is an account you control. Nothing is held hostage, and there is no monthly fee to keep your own website online.',
        },
        {
          q: 'Can you work with the site I already have?',
          a: 'Sometimes. If it is on WordPress or Squarespace and the bones are sound, fixing speed, mobile layout and search structure is cheaper than starting over. We will tell you honestly which situation you are in.',
        },
      ],
      price: 'Typical range: $2,500 – $6,000. Fixed written quote after a free 20-minute call.',
    },
    fr: {
      name: 'Conception et développement web',
      short: 'Des sites rapides et trouvables pour les entreprises d’Ottawa.',
      metaTitle: 'Conception de sites web à Ottawa | Sites Next.js rapides',
      metaDescription:
        'Conception et développement web à Ottawa–Gatineau. Des sites Next.js codés à la main qui chargent en moins de deux secondes, se classent localement et génèrent des appels. Bilingues EN/FR.',
      h1: 'Conception et développement web à Ottawa',
      lede:
        'La plupart des sites de PME de la région sont lents, illisibles sur téléphone et introuvables dans Google. Nous construisons l’autre type : codé à la main, rapide, et structuré pour que les gens qui cherchent votre métier aboutissent chez vous.',
      forWho: [
        'Les gens de métier dont le travail vient du bouche-à-oreille et s’arrête là',
        'Les entreprises établies avec un site vieux de plusieurs années que personne ne peut modifier',
        'Les entreprises bilingues qui veulent un vrai français, pas une traduction automatique',
      ],
      includes: [
        'Conception et développement sur Next.js — sans surcharge de constructeur de pages ni licence mensuelle',
        'Chargement en moins de deux secondes sur téléphone, sur données cellulaires',
        'Structure de référencement intégrée : titres, données structurées, plan de site, signaux locaux',
        'Un formulaire de soumission qui aboutit dans votre courriel, pas dans un tableau de bord que vous n’ouvrez jamais',
        'Bilingue EN/FR avec balises hreflang correctes, si vous servez les deux rives',
      ],
      steps: [
        { t: 'Questionnaire', d: 'Vingt minutes sur votre téléphone. Ça remplace trois réunions et ça nous apprend votre métier.' },
        { t: 'Développement', d: 'D’une à trois semaines selon l’ampleur. Vous suivez le tout sur un lien de préproduction.' },
        { t: 'Mise en ligne', d: 'Domaine, hébergement, formulaires, statistiques et Search Console configurés à votre nom.' },
        { t: 'Après', d: 'Modifications, nouvelles pages et entretien technique — ou les clés, si vous préférez gérer vous-même.' },
      ],
      faqs: [
        {
          q: 'Combien coûte un site web à Ottawa ?',
          a: 'Pour une entreprise de services ou de métier, comptez généralement entre 2 500 $ et 6 000 $. Les projets avec fonctionnalités sur mesure dépassent cette fourchette. Le prix dépend du nombre de pages, du bilinguisme et de qui rédige le contenu. Vous recevez un prix fixe par écrit avant le début des travaux.',
        },
        {
          q: 'Combien de temps ça prend ?',
          a: 'De une à trois semaines de développement une fois le contenu reçu. Ce sont les photos et les textes qui retardent habituellement — d’où le questionnaire au départ.',
        },
        {
          q: 'Est-ce que le site m’appartient ?',
          a: 'Oui. Le domaine est enregistré à votre nom, le code vous appartient et l’hébergement est un compte que vous contrôlez. Aucun frais mensuel pour garder votre propre site en ligne.',
        },
        {
          q: 'Pouvez-vous travailler avec mon site actuel ?',
          a: 'Parfois. S’il est sur WordPress ou Squarespace et que la base est saine, corriger la vitesse, l’affichage mobile et la structure de référencement coûte moins cher que de tout refaire. Nous vous dirons honnêtement dans quel cas vous êtes.',
        },
      ],
      price: 'Fourchette habituelle : 2 500 $ – 6 000 $. Prix fixe par écrit après un appel gratuit de 20 minutes.',
    },
  },

  {
    id: 'apps',
    n: '02',
    slug: { en: 'custom-web-applications', fr: 'applications-sur-mesure' },
    en: {
      name: 'Custom applications',
      short: 'The tool your business runs on, built properly.',
      metaTitle: 'Custom Web Application Development | Ottawa',
      metaDescription:
        'Custom web applications, internal tools, client portals and dashboards for Ottawa businesses. Built on React, Node, Azure and the Power Platform by a senior engineer.',
      h1: 'Custom web applications, built for how you actually work',
      lede:
        'Every growing business reaches the point where the spreadsheet becomes a liability — the one file everybody edits, nobody backs up, and one person quietly understands. That is the point where a real application costs less than the workaround.',
      forWho: [
        'Companies running operations out of a shared spreadsheet that has outgrown itself',
        'Teams paying for software that does 60% of what they need and blocks the other 40%',
        'Organisations on Microsoft 365 that want tools built where their data already lives',
      ],
      includes: [
        'Internal tools, client portals, dashboards and quoting or scheduling systems',
        'React and Node on the front, Azure, SQL or Dataverse behind it',
        'Authentication, roles and an audit trail built in from the start, not bolted on',
        'Microsoft Power Platform work — Power Apps, Dataverse, Power Automate — where that is the faster route',
        'Documentation and handover, so you are not dependent on one developer forever',
      ],
      steps: [
        { t: 'Map the work', d: 'We watch how the job is done today, including the parts that only live in someone’s head.' },
        { t: 'Scope and price', d: 'A written scope with what is in, what is out, and a fixed price per phase.' },
        { t: 'Build in phases', d: 'Working software in front of you every two weeks. You change direction while it is still cheap.' },
        { t: 'Hand over', d: 'Deployed, documented, and yours — with support if you want it, not because you are stuck.' },
      ],
      faqs: [
        {
          q: 'Is this cheaper than buying software?',
          a: 'Usually not upfront, and often cheaper over three years — especially at per-seat pricing across a growing team. The real argument for custom is fit: software you buy makes you work its way. If your process is your advantage, that matters.',
        },
        {
          q: 'What does it cost?',
          a: 'A focused internal tool typically starts around $8,000. Platforms with multiple user types and integrations run higher. We scope in phases so you can stop after phase one if it is enough.',
        },
        {
          q: 'Who maintains it afterwards?',
          a: 'You can, we can, or your next developer can. The code is documented and handed over. Retainers exist but are never a condition of getting your own software.',
        },
        {
          q: 'Can it connect to QuickBooks, Jobber, or what we already use?',
          a: 'If it has an API, generally yes. Integration is often the highest-value part of the build — it removes the double entry nobody enjoys.',
        },
      ],
      price: 'Scoped in phases, typically from $8,000. Fixed price per phase.',
    },
    fr: {
      name: 'Applications sur mesure',
      short: 'L’outil sur lequel votre entreprise roule, bien construit.',
      metaTitle: 'Développement d’applications sur mesure | Ottawa',
      metaDescription:
        'Applications web sur mesure, outils internes, portails clients et tableaux de bord pour les entreprises d’Ottawa–Gatineau. React, Node, Azure et Power Platform.',
      h1: 'Des applications web conçues pour votre façon de travailler',
      lede:
        'Toute entreprise en croissance atteint le point où le fichier Excel devient un risque : celui que tout le monde modifie, que personne ne sauvegarde et qu’une seule personne comprend vraiment. À ce moment-là, une vraie application coûte moins cher que le bricolage.',
      forWho: [
        'Les entreprises dont les opérations reposent sur un chiffrier devenu trop gros',
        'Les équipes qui paient un logiciel couvrant 60 % de leurs besoins et bloquant le reste',
        'Les organisations sur Microsoft 365 qui veulent des outils là où leurs données vivent déjà',
      ],
      includes: [
        'Outils internes, portails clients, tableaux de bord, systèmes de soumission ou d’horaire',
        'React et Node en façade, Azure, SQL ou Dataverse derrière',
        'Authentification, rôles et journal d’audit intégrés dès le départ',
        'Microsoft Power Platform — Power Apps, Dataverse, Power Automate — quand c’est la voie rapide',
        'Documentation et transfert, pour ne pas dépendre d’un seul développeur à vie',
      ],
      steps: [
        { t: 'Cartographier', d: 'On observe comment le travail se fait aujourd’hui, y compris ce qui n’existe que dans la tête de quelqu’un.' },
        { t: 'Cadrer et chiffrer', d: 'Une portée écrite : ce qui est inclus, ce qui ne l’est pas, prix fixe par phase.' },
        { t: 'Construire par phases', d: 'Un logiciel fonctionnel devant vous toutes les deux semaines. Vous ajustez pendant que c’est encore peu coûteux.' },
        { t: 'Transférer', d: 'Déployé, documenté et à vous — avec du soutien si vous le voulez, pas parce que vous êtes coincé.' },
      ],
      faqs: [
        {
          q: 'Est-ce moins cher que d’acheter un logiciel ?',
          a: 'Rarement au départ, souvent sur trois ans — surtout avec une tarification par utilisateur dans une équipe qui grandit. Le vrai argument, c’est l’ajustement : un logiciel acheté vous impose sa façon de faire. Si votre processus est votre avantage, ça compte.',
        },
        {
          q: 'Combien ça coûte ?',
          a: 'Un outil interne ciblé démarre généralement autour de 8 000 $. Les plateformes avec plusieurs types d’utilisateurs et des intégrations coûtent davantage. On découpe en phases : vous pouvez arrêter après la première si elle suffit.',
        },
        {
          q: 'Qui l’entretient ensuite ?',
          a: 'Vous, nous, ou votre prochain développeur. Le code est documenté et transféré. Un forfait d’entretien existe, mais n’est jamais une condition.',
        },
        {
          q: 'Peut-elle se connecter à QuickBooks ou à nos outils actuels ?',
          a: 'S’il y a une API, généralement oui. L’intégration est souvent la partie la plus payante du projet : elle élimine la double saisie.',
        },
      ],
      price: 'Découpé en phases, généralement à partir de 8 000 $. Prix fixe par phase.',
    },
  },

  {
    id: 'automation',
    n: '03',
    slug: { en: 'business-automation-ottawa', fr: 'automatisation-ottawa' },
    en: {
      name: 'Automation & integration',
      short: 'Get the week back that admin work is eating.',
      metaTitle: 'Business Process Automation in Ottawa | Power Automate & n8n',
      metaDescription:
        'Business process automation for Ottawa companies. Power Automate, n8n and API integrations that connect the systems you already pay for and remove hours of manual work each week.',
      h1: 'Automation that removes the work nobody wanted to do',
      lede:
        'Copying a number from one system into another is not a job. It is a tax your business pays every week, in hours, with errors included. Most of it can be gone inside a fortnight.',
      forWho: [
        'Businesses re-keying the same information into two or three systems',
        'Owners spending evenings on quotes, invoices, scheduling and follow-up emails',
        'Teams whose tools each work fine alone and refuse to speak to each other',
      ],
      includes: [
        'Microsoft Power Automate and Logic Apps flows across Microsoft 365 and Dataverse',
        'Self-hosted n8n workflows when you want the automation to stay yours',
        'API integrations between accounting, CRM, scheduling, forms and email',
        'Document generation — quotes, invoices, reports — produced and filed automatically',
        'Alerting and error handling, so a silent failure does not go unnoticed for a month',
      ],
      steps: [
        { t: 'Find the tax', d: 'A short audit of where the repeated hours actually go. Often it is not where people assume.' },
        { t: 'Pick the one worth doing', d: 'We start with the single highest-hours, lowest-risk task. One win buys the rest.' },
        { t: 'Build and test', d: 'Run in parallel with the manual process until it is proven, not after.' },
        { t: 'Measure', d: 'Hours before, hours after, in writing. If it did not save time, it does not stay.' },
      ],
      faqs: [
        {
          q: 'What can actually be automated?',
          a: 'Anything with rules and a repeatable trigger: form submission to CRM record, approved quote to invoice, job completed to follow-up email, weekly report assembled and sent. Judgement calls stay with people — automation should remove the typing, not the thinking.',
        },
        {
          q: 'Do we need Microsoft 365?',
          a: 'No. If you are on Microsoft 365 the Power Platform is usually the quickest route. If you are not, self-hosted n8n or direct API work does the same job without new licences.',
        },
        {
          q: 'What does it cost?',
          a: 'A single workflow typically runs $1,500 to $4,000 depending on how many systems it touches. The honest test is payback: if it saves four hours a week, it pays for itself in a season.',
        },
        {
          q: 'What happens when something breaks?',
          a: 'Every flow ships with error handling and an alert that reaches a person. We also document what it does in plain language, so the business is not dependent on whoever built it.',
        },
      ],
      price: 'Per workflow, typically $1,500 – $4,000. Audit first, priced after.',
    },
    fr: {
      name: 'Automatisation et intégration',
      short: 'Récupérez les heures que l’administratif vous vole.',
      metaTitle: 'Automatisation des processus à Ottawa | Power Automate et n8n',
      metaDescription:
        'Automatisation des processus d’affaires pour les entreprises d’Ottawa–Gatineau. Power Automate, n8n et intégrations API qui relient vos systèmes et éliminent des heures de travail manuel.',
      h1: 'L’automatisation qui élimine le travail que personne ne voulait faire',
      lede:
        'Recopier un chiffre d’un système à l’autre n’est pas un emploi. C’est une taxe que votre entreprise paie chaque semaine, en heures, erreurs incluses. La majeure partie peut disparaître en deux semaines.',
      forWho: [
        'Les entreprises qui ressaisissent la même information dans deux ou trois systèmes',
        'Les propriétaires qui passent leurs soirées sur les soumissions, la facturation et les relances',
        'Les équipes dont les outils fonctionnent bien séparément et refusent de se parler',
      ],
      includes: [
        'Flux Power Automate et Logic Apps dans Microsoft 365 et Dataverse',
        'Flux n8n auto-hébergés quand vous voulez que l’automatisation vous appartienne',
        'Intégrations API entre comptabilité, CRM, horaires, formulaires et courriel',
        'Génération automatique de documents — soumissions, factures, rapports — et classement',
        'Alertes et gestion des erreurs, pour qu’une panne silencieuse ne passe pas inaperçue un mois',
      ],
      steps: [
        { t: 'Trouver la taxe', d: 'Un court audit des heures répétées. Ce n’est souvent pas là où on le croit.' },
        { t: 'Choisir la bonne', d: 'On commence par la tâche la plus chronophage et la moins risquée. Un gain finance la suite.' },
        { t: 'Construire et tester', d: 'En parallèle du processus manuel jusqu’à preuve faite, pas après.' },
        { t: 'Mesurer', d: 'Heures avant, heures après, par écrit. Si ça n’a rien sauvé, ça ne reste pas.' },
      ],
      faqs: [
        {
          q: 'Qu’est-ce qui peut réellement être automatisé ?',
          a: 'Tout ce qui a des règles et un déclencheur répétable : formulaire vers fiche CRM, soumission acceptée vers facture, travail terminé vers courriel de suivi, rapport hebdomadaire assemblé et envoyé. Le jugement reste humain — l’automatisation élimine la saisie, pas la réflexion.',
        },
        {
          q: 'Faut-il Microsoft 365 ?',
          a: 'Non. Si vous êtes sur Microsoft 365, la Power Platform est habituellement la voie rapide. Sinon, n8n auto-hébergé ou des intégrations API directes font le même travail sans nouvelles licences.',
        },
        {
          q: 'Combien ça coûte ?',
          a: 'Un flux se situe généralement entre 1 500 $ et 4 000 $ selon le nombre de systèmes touchés. Le vrai test, c’est le retour : s’il sauve quatre heures par semaine, il se paie en une saison.',
        },
        {
          q: 'Que se passe-t-il en cas de panne ?',
          a: 'Chaque flux est livré avec gestion des erreurs et une alerte qui rejoint une personne. Le fonctionnement est documenté en langage clair, pour ne pas dépendre de celui qui l’a construit.',
        },
      ],
      price: 'Par flux, généralement 1 500 $ – 4 000 $. Audit d’abord, prix ensuite.',
    },
  },

  {
    id: 'ai',
    n: '04',
    slug: { en: 'ai-engineering-ottawa', fr: 'ingenierie-ia-ottawa' },
    en: {
      name: 'AI engineering',
      short: 'AI pointed at one real workflow, with guardrails.',
      metaTitle: 'AI Engineering & LLM Integration in Ottawa',
      metaDescription:
        'Practical AI engineering for Ottawa businesses: document analysis, retrieval systems and assistants built on current LLM APIs, scoped to one real workflow and tested before it ships.',
      h1: 'AI that does one job well, instead of five badly',
      lede:
        'Most AI projects fail for a dull reason: they start with the technology instead of a task. We start with a workflow that costs you hours — reading documents, answering the same question, extracting the same fields — and build only what that needs.',
      forWho: [
        'Businesses reading and re-typing information from PDFs, invoices or forms',
        'Teams answering the same twenty questions from customers or staff every week',
        'Owners who have tried a chatbot, watched it make something up, and want it done properly',
      ],
      includes: [
        'Document extraction and classification — invoices, contracts, forms, reports',
        'Retrieval systems over your own documents, so answers cite the source rather than invent it',
        'Assistants scoped to a defined task, with limits on what they are allowed to say',
        'Evaluation before launch: a test set and a measured accuracy number, not a demo',
        'Cost controls and logging, so spend and behaviour are both visible',
      ],
      steps: [
        { t: 'Pick the task', d: 'One workflow, measured in hours per week. If it cannot be measured, it is not the right first project.' },
        { t: 'Prototype', d: 'A working version on your real data within two weeks, not a slide deck.' },
        { t: 'Evaluate', d: 'Accuracy tested against cases you supply, with the failure modes named out loud.' },
        { t: 'Ship with limits', d: 'Guardrails, human review where it matters, and monitoring on cost and output.' },
      ],
      faqs: [
        {
          q: 'Is our data safe?',
          a: 'It depends on choices we make deliberately: which provider, which region, what is retained, and whether anything is used for training. Those choices get written down before the build, and sensitive workloads can run where the data does not leave your tenancy.',
        },
        {
          q: 'How accurate is it, honestly?',
          a: 'For structured extraction from consistent documents, high — and measurably so. For open-ended answering, good enough to be useful and never good enough to leave unsupervised on decisions that matter. Anyone quoting a single accuracy figure without seeing your data is guessing.',
        },
        {
          q: 'What does it cost to run?',
          a: 'Per-use API costs for most workloads, typically tens of dollars a month at small-business volume rather than hundreds. We put a ceiling and monitoring on it before it goes live.',
        },
        {
          q: 'Could we just use ChatGPT?',
          a: 'Often, yes — and we will say so. Paying for a custom build to do what a $30 subscription already does is a bad trade. The work is worth it when it has to run unattended, touch your own data, or connect to your systems.',
        },
      ],
      price: 'Prototype-first engagements, scoped after a free discovery call.',
    },
    fr: {
      name: 'Ingénierie IA',
      short: 'L’IA dirigée vers une tâche réelle, avec des garde-fous.',
      metaTitle: 'Ingénierie IA et intégration LLM à Ottawa',
      metaDescription:
        'Ingénierie IA pratique pour les entreprises d’Ottawa : analyse documentaire, systèmes de recherche et assistants bâtis sur les API LLM actuelles, cadrés sur un processus réel et testés avant la mise en service.',
      h1: 'Une IA qui fait bien une seule tâche, plutôt que cinq mal',
      lede:
        'La plupart des projets d’IA échouent pour une raison banale : ils partent de la technologie plutôt que d’une tâche. Nous partons d’un processus qui vous coûte des heures — lire des documents, répondre à la même question, extraire les mêmes champs — et bâtissons seulement ce qu’il faut.',
      forWho: [
        'Les entreprises qui relisent et ressaisissent des données de PDF, de factures ou de formulaires',
        'Les équipes qui répondent chaque semaine aux mêmes vingt questions',
        'Les propriétaires qui ont essayé un robot conversationnel, l’ont vu inventer, et veulent que ce soit fait correctement',
      ],
      includes: [
        'Extraction et classification de documents — factures, contrats, formulaires, rapports',
        'Systèmes de recherche sur vos propres documents, avec réponses qui citent la source',
        'Assistants cadrés sur une tâche définie, avec des limites sur ce qu’ils peuvent dire',
        'Évaluation avant lancement : un jeu de tests et un taux d’exactitude mesuré, pas une démo',
        'Contrôle des coûts et journalisation, pour voir la dépense et le comportement',
      ],
      steps: [
        { t: 'Choisir la tâche', d: 'Un processus, mesuré en heures par semaine. Si on ne peut pas le mesurer, ce n’est pas le bon premier projet.' },
        { t: 'Prototyper', d: 'Une version fonctionnelle sur vos vraies données en deux semaines, pas une présentation.' },
        { t: 'Évaluer', d: 'Exactitude testée sur des cas que vous fournissez, avec les modes d’échec nommés clairement.' },
        { t: 'Livrer avec des limites', d: 'Garde-fous, révision humaine là où ça compte, surveillance des coûts et des sorties.' },
      ],
      faqs: [
        {
          q: 'Nos données sont-elles protégées ?',
          a: 'Cela dépend de choix faits délibérément : quel fournisseur, quelle région, ce qui est conservé, et si quoi que ce soit sert à l’entraînement. Ces choix sont écrits avant le développement, et les charges sensibles peuvent rouler sans que les données quittent votre environnement.',
        },
        {
          q: 'Quelle est l’exactitude réelle ?',
          a: 'Pour l’extraction structurée dans des documents constants : élevée, et mesurable. Pour la réponse ouverte : assez bonne pour être utile, jamais assez pour rester sans supervision sur des décisions importantes. Quiconque cite un chiffre sans avoir vu vos données devine.',
        },
        {
          q: 'Combien coûte l’exploitation ?',
          a: 'Des coûts d’API à l’usage : typiquement des dizaines de dollars par mois au volume d’une PME, pas des centaines. On fixe un plafond et une surveillance avant la mise en service.',
        },
        {
          q: 'Pourrait-on simplement utiliser ChatGPT ?',
          a: 'Souvent, oui — et nous vous le dirons. Payer un développement sur mesure pour ce qu’un abonnement à 30 $ fait déjà est un mauvais échange. Le travail se justifie quand ça doit rouler sans surveillance, toucher vos données ou se connecter à vos systèmes.',
        },
      ],
      price: 'Mandats axés prototype, cadrés après un appel de découverte gratuit.',
    },
  },
];

/** Copy for the /services index page. */
export const servicesIndex = {
  en: {
    metaTitle: 'Services | Web, Applications, Automation & AI in Ottawa',
    metaDescription:
      'What Zyvanta does for Ottawa businesses: web design and development, custom applications, business process automation and practical AI engineering. Bilingual EN/FR.',
    eyebrow: 'Services',
    h1: 'Four ways we make software carry its weight',
    lede:
      'Most engagements start with one of these and grow into two. In every case you work directly with the engineer writing the code — there is no account layer to talk through.',
    cta: 'Start a project',
    ctaHint: 'Free 20-minute call. No pitch deck.',
  },
  fr: {
    metaTitle: 'Services | Web, applications, automatisation et IA à Ottawa',
    metaDescription:
      'Ce que Zyvanta fait pour les entreprises d’Ottawa–Gatineau : conception web, applications sur mesure, automatisation des processus et ingénierie IA pratique. Bilingue EN/FR.',
    eyebrow: 'Services',
    h1: 'Quatre façons de faire travailler vos logiciels',
    lede:
      'La plupart des mandats commencent par l’un de ces services et s’étendent à un deuxième. Dans tous les cas, vous parlez directement à l’ingénieur qui écrit le code.',
    cta: 'Démarrer un projet',
    ctaHint: 'Appel gratuit de 20 minutes. Sans présentation de vente.',
  },
};

/** Copy for the free website teardown landing page (/[locale]/audit). */
export const audit = {
  en: {
    metaTitle: 'Free 60-Second Website Teardown | Ottawa',
    metaDescription:
      'Send your website, get a free 60-second video back: three specific things costing you calls, and what to do about each. No charge, no sales call, Ottawa businesses.',
    eyebrow: 'Free · no sales call',
    h1: 'A free 60-second teardown of your website',
    lede:
      'Send the address of your site. You get back a short video of me going through it — three specific things that are costing you calls, and what each one would take to fix. Whether you fix them yourself, hire someone else, or hire us is entirely your business.',
    whatYouGet: [
      'A 60 to 90 second video, recorded on your actual site, not a template report',
      'The three problems that matter most, in plain language, in priority order',
      'What each fix involves and roughly what it costs — including when the answer is "nothing, leave it"',
      'Sent by email or WhatsApp within two business days',
    ],
    catchTitle: 'Where is the catch?',
    catchBody:
      'There is not one, but here is the honest logic: most people who get one of these do nothing, some fix it themselves, and a few hire us. That last group is worth more than the twenty minutes the video takes. You will not get a follow-up sequence or a phone call you did not ask for.',
    formTitle: 'Send me your site',
    fields: {
      name: 'Your name',
      email: 'Email',
      website: 'Your website address',
      business: 'What does the business do?',
      submit: 'Get my free teardown',
      submitting: 'Sending…',
      sentTitle: 'Got it',
      sentBody: 'I will record it and send it over within two business days. If you would rather have it on WhatsApp, reply to the confirmation email and say so.',
      errEmail: 'A working email address, please — that is where the video goes.',
      errWebsite: 'Paste the address of the site you want looked at.',
      errSend: 'That did not send. Email majdmadi2@gmail.com with your site address instead and I will do it that way.',
      honeypot: 'Leave this field empty',
    },
  },
  fr: {
    metaTitle: 'Analyse gratuite de votre site web en 60 secondes | Ottawa',
    metaDescription:
      'Envoyez l’adresse de votre site et recevez une vidéo gratuite de 60 secondes : trois éléments précis qui vous coûtent des appels, et quoi faire pour chacun. Sans frais ni appel de vente.',
    eyebrow: 'Gratuit · sans appel de vente',
    h1: 'Une analyse gratuite de votre site, en 60 secondes',
    lede:
      'Envoyez l’adresse de votre site. Vous recevez une courte vidéo où je le parcours : trois éléments précis qui vous coûtent des appels, et ce qu’il faudrait pour corriger chacun. Que vous corrigiez vous-même, engagiez quelqu’un d’autre ou nous engagiez, ça vous regarde.',
    whatYouGet: [
      'Une vidéo de 60 à 90 secondes, enregistrée sur votre vrai site, pas un rapport générique',
      'Les trois problèmes les plus importants, en langage clair, par ordre de priorité',
      'Ce que chaque correction implique et son coût approximatif — y compris quand la réponse est « rien, laissez ça »',
      'Envoyée par courriel ou WhatsApp en deux jours ouvrables',
    ],
    catchTitle: 'Où est l’attrape ?',
    catchBody:
      'Il n’y en a pas, mais voici la logique honnête : la plupart des gens qui reçoivent une analyse ne font rien, certains corrigent eux-mêmes, quelques-uns nous engagent. Ce dernier groupe vaut plus que les vingt minutes de la vidéo. Vous ne recevrez ni séquence de relances ni appel que vous n’avez pas demandé.',
    formTitle: 'Envoyez-moi votre site',
    fields: {
      name: 'Votre nom',
      email: 'Courriel',
      website: 'Adresse de votre site',
      business: 'Que fait l’entreprise ?',
      submit: 'Obtenir mon analyse gratuite',
      submitting: 'Envoi…',
      sentTitle: 'Bien reçu',
      sentBody: 'Je l’enregistre et vous l’envoie d’ici deux jours ouvrables. Si vous la préférez sur WhatsApp, répondez au courriel de confirmation pour le dire.',
      errEmail: 'Une adresse courriel valide, s’il vous plaît — c’est là que la vidéo est envoyée.',
      errWebsite: 'Collez l’adresse du site à analyser.',
      errSend: 'L’envoi a échoué. Écrivez plutôt à majdmadi2@gmail.com avec l’adresse de votre site et je procéderai ainsi.',
      honeypot: 'Laissez ce champ vide',
    },
  },
};

/** Shared UI labels for the service pages, per locale. */
export const serviceUi = {
  en: {
    back: 'All services',
    forWho: 'Who this is for',
    includes: 'What is included',
    steps: 'How it works',
    faqs: 'Questions',
    price: 'Pricing',
    cta: 'Start a project',
    ctaLede: 'A free 20-minute call. You will get a straight answer on whether this is worth doing, including when the answer is no.',
    other: 'Other services',
    auditCta: 'Not ready to talk? Get a free 60-second teardown of your current site.',
  },
  fr: {
    back: 'Tous les services',
    forWho: 'À qui ça s’adresse',
    includes: 'Ce qui est inclus',
    steps: 'Comment ça se passe',
    faqs: 'Questions',
    price: 'Tarifs',
    cta: 'Démarrer un projet',
    ctaLede: 'Un appel gratuit de 20 minutes. Vous aurez une réponse franche sur la pertinence du projet, y compris quand la réponse est non.',
    other: 'Autres services',
    auditCta: 'Pas prêt à discuter ? Recevez une analyse gratuite de 60 secondes de votre site actuel.',
  },
};

/** Every service slug, per locale — used by generateStaticParams and the sitemap. */
export const serviceSlugs = (locale) => services.map((s) => s.slug[locale]);

export const serviceBySlug = (locale, slug) =>
  services.find((s) => s.slug[locale] === slug);

/** The same service's URL in the other language, for hreflang. */
export const serviceAlternates = (service) =>
  Object.fromEntries(
    Object.entries(service.slug).map(([l, slug]) => [l, `/${l}/services/${slug}`])
  );
