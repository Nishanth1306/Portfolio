export const featuredProjects = [
  {
    id: 1,
    title: 'FYERS public SEO stock pages',
    org: 'Codingmart · Client: FYERS',
    role: 'Frontend',
    description:
      'Next.js public site for equity research. Stakeholders: SEO and retail users. I owned crawlable templates and metadata so stock pages can be indexed and read without a client-side shell.',
    features: [
      'Owned 6 template types: overview, P&L, balance sheet, dividends, bonus, results',
      'Dynamic metadata, Open Graph, and XML sitemaps for the client SEO team',
      'Charts, peer comparison, and technical views for research sessions',
      'Site chrome plus GTM and CleverTap for the client analytics stack',
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Chart.js', 'Recharts', 'Axios'],
    category: 'Client project',
  },
  {
    id: 2,
    title: 'FYERS SEO content CMS',
    org: 'Codingmart · Client: FYERS',
    role: 'Frontend',
    description:
      'Internal CMS for FYERS marketing and SEO. Stakeholders: content authors and approvers. I owned the UI for draft, approve, publish, and SEO monitoring.',
    features: [
      'Content and FAQ workflows with explicit approval states',
      'AI generation and prompt config so operators can run jobs without engineering',
      'SEO alerts and sitemap editor for the same team that publishes pages',
      'Role-based admin, interlinking, and cluster management',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Redux Toolkit', 'TanStack Query', 'Tailwind CSS'],
    category: 'Client project',
  },
  {
    id: 3,
    title: 'FYERS SEO operations API',
    org: 'Codingmart · Client: FYERS',
    role: 'Backend',
    description:
      'FastAPI services behind FYERS SEO ops. Stakeholders: CMS users and cron jobs. I owned auth, AI content APIs, sitemap compilation, and Lighthouse/Playwright monitors.',
    features: [
      'JWT and RBAC so roles in the CMS match API permissions',
      'OpenAI and Anthropic generation with job history',
      'Sitemap generate / validate / history for crawl control',
      'Celery workers plus Lighthouse and Playwright with crawl-rate limits',
    ],
    technologies: ['FastAPI', 'Python', 'MongoDB', 'Redis', 'Celery', 'OpenAI'],
    category: 'Client project',
  },
  {
    id: 4,
    title: 'Hala Mobility growth & payouts',
    org: 'Codingmart · Client: Hala Mobility',
    role: 'Backend',
    description:
      'Backend for promotions and payouts. Stakeholders: growth and finance. I owned three money-adjacent API flows where a bad response is a business incident.',
    features: [
      'Coupon eligibility and discount application with validation on every request',
      'Referral rewards with duplicate protection',
      'Hubble integration with explicit failure paths, not silent drops',
      'Payout status tracking and exception handling',
    ],
    technologies: ['REST APIs', 'Hubble', 'Payments', 'Business validations'],
    category: 'Client project',
  },
];

export const personalProjects = [
  {
    id: 10,
    title: 'PDF reader (Q&A)',
    description:
      'Personal app: upload a PDF, chunk and embed the text, then chat against it. FastAPI backend with Next.js UI.',
    features: [
      'PDF upload and text extraction',
      'Embeddings stored in ChromaDB per session',
      'LangChain + OpenAI answers grounded in the document',
    ],
    githubUrl: 'https://github.com/Nishanth1306',
    technologies: ['Next.js', 'FastAPI', 'LangChain', 'ChromaDB', 'OpenAI', 'PyPDF2'],
    category: 'Personal',
  },
  {
    id: 11,
    title: 'House price prediction',
    description:
      'Personal ML service: Random Forest trained on house features (area, rooms, parking, age), served over a FastAPI /predict endpoint.',
    features: [
      'Train/test split and MAE/RMSE evaluation',
      'Model persisted with joblib',
      'Typed request schema and CORS-ready API',
    ],
    githubUrl: 'https://github.com/Nishanth1306/House-Price-Prediction-Rag',
    technologies: ['Python', 'scikit-learn', 'FastAPI', 'pandas'],
    category: 'Personal',
  },
  {
    id: 8,
    title: 'Event management application',
    description:
      'Web app for posting events, public registration, and seat reservation, with organizer vs participant roles and OTP confirmation after signup (Apr–Jul 2024).',
    features: [
      'Organizers create and edit events with seat inventory',
      'Public browse, register, and reserve seats',
      'OTP confirmation and role-based access',
    ],
    technologies: ['Web app', 'Auth', 'Role-based access'],
    category: 'Personal',
  },
  {
    id: 9,
    title: 'Student database management',
    description:
      'MERN app for teachers to record and review student data and grades, with JWT auth, RBAC, MongoDB storage, and dashboards (Mar–May 2024).',
    features: [
      'JWT authentication and role-based permissions',
      'Centralized student records in MongoDB',
      'Dashboards for grade trends',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'Personal',
  },
];

export const additionalProjects = [
  {
    id: 5,
    title: 'Smart street lighting',
    description:
      'IoT lighting that uses temperature and lux sensors to dim and brighten automatically, reducing wasted energy in urban lighting.',
    features: [
      'Ambient temperature and light-intensity sensing',
      'Automatic dimming based on sensor data',
    ],
    technologies: ['IoT', 'Sensors', 'ESP-class hardware'],
    category: 'Hardware',
  },
  {
    id: 6,
    title: 'Smart pole',
    description:
      'Street-light concept combining LED lighting with WiFi, cameras, LED display, and emergency SOS for public infrastructure.',
    features: [
      'Remote management of lighting and attached devices',
      'Surveillance and SOS as part of the pole design',
    ],
    technologies: ['IoT', 'Smart city'],
    category: 'Hardware',
  },
  {
    id: 7,
    title: 'Street-light fault detection',
    description:
      'Detects lighting faults from lux, tilt, voltage, and current, then alerts a control room over GSM instead of relying on manual patrols.',
    features: [
      'Multi-sensor fault identification',
      'ESP8266 + GSM SMS alerts and ThingSpeak visualization',
    ],
    technologies: ['ESP8266', 'GSM', 'ThingSpeak'],
    category: 'Hardware',
  },
];
