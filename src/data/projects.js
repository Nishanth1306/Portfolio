export const featuredProjects = [
  {
    id: 1,
    title: 'FYERS public SEO stock pages',
    org: 'Codingmart · Client: FYERS',
    role: 'Frontend',
    description:
      'Server-rendered Next.js site for high-traffic equity research. Users can review overview, fundamentals, and corporate actions with crawlable metadata and interactive charts.',
    features: [
      'Stock templates for overview, P&L, balance sheet, dividends, bonus, and results',
      'Dynamic metadata, Open Graph, and XML sitemaps for indexing',
      'Charts, peer comparison, and technical analysis views',
      'Site chrome, auth entry points, and analytics via GTM and CleverTap',
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
      'React and TypeScript dashboard used by the client’s marketing and SEO teams to draft, approve, and publish finance content, including AI generation and live SEO monitoring.',
    features: [
      'Content and FAQ workflows with approval states',
      'AI generation, sync, and prompt configuration UI',
      'SEO alerts and sitemap editor',
      'Interlinking, clusters, and role-based admin',
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
      'FastAPI platform behind the client’s SEO operations: AI-assisted content, sitemap compilation, Lighthouse monitoring, JWT auth, and background jobs on MongoDB, Redis, and Celery.',
    features: [
      'JWT authentication with role-based access',
      'Content and FAQ generation via OpenAI and Anthropic',
      'Sitemap generation, validation, and history',
      'Lighthouse and Playwright monitoring with crawl-rate control',
      'Interlinking APIs and Celery scheduled workers',
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
      'API work for the client’s promotions, acquisition, and payouts. Built validated request/response flows and failure paths for features that affect discounts and money movement.',
    features: [
      'Coupon eligibility and discount application',
      'Referral validation, rewards, and duplicate handling',
      'Hubble integration with explicit error paths',
      'Payout status tracking and exception handling',
    ],
    technologies: ['REST APIs', 'Hubble', 'Payments', 'Business validations'],
    category: 'Client project',
  },
];

export const personalProjects = [
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
