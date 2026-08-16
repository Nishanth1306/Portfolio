export const featuredProjects = [
  {
    id: 1,
    title: 'FYERS public SEO stock pages',
    org: 'FYERS',
    role: 'Frontend',
    description:
      'Client project: server-rendered Next.js site for high-traffic equity research. Users can review overview, fundamentals, and corporate actions with crawlable metadata and interactive charts.',
    features: [
      'Stock templates for overview, P&L, balance sheet, dividends, bonus, and results',
      'Dynamic metadata, Open Graph, and XML sitemaps for indexing',
      'Charts, peer comparison, and technical analysis views',
      'Site chrome, auth entry points, and analytics via GTM and CleverTap',
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Chart.js', 'Recharts', 'Axios'],
    category: 'Production',
  },
  {
    id: 2,
    title: 'FYERS SEO content CMS',
    org: 'FYERS',
    role: 'Frontend',
    description:
      'Client project: React and TypeScript dashboard used by marketing and SEO teams to draft, approve, and publish finance content, including AI generation and live SEO monitoring.',
    features: [
      'Content and FAQ workflows with approval states',
      'AI generation, sync, and prompt configuration UI',
      'SEO alerts and sitemap editor',
      'Interlinking, clusters, and role-based admin',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Redux Toolkit', 'TanStack Query', 'Tailwind CSS'],
    category: 'Production',
  },
  {
    id: 3,
    title: 'FYERS SEO operations API',
    org: 'FYERS',
    role: 'Backend · Client project',
    description:
      'Client project: FastAPI platform behind FYERS SEO operations — AI-assisted content, sitemap compilation, Lighthouse monitoring, JWT auth, and background jobs on MongoDB, Redis, and Celery.',
    features: [
      'JWT authentication with role-based access',
      'Content and FAQ generation via OpenAI and Anthropic',
      'Sitemap generation, validation, and history',
      'Lighthouse and Playwright monitoring with crawl-rate control',
      'Interlinking APIs and Celery scheduled workers',
    ],
    technologies: ['FastAPI', 'Python', 'MongoDB', 'Redis', 'Celery', 'OpenAI'],
    category: 'Production',
  },
  {
    id: 4,
    title: 'Hala Mobility growth & payouts',
    org: 'Hala Mobility',
    role: 'Backend · Client project',
    description:
      'Client project: API work for promotions, acquisition, and payouts. Built validated request/response flows and failure paths for features that affect discounts and money movement.',
    features: [
      'Coupon eligibility and discount application',
      'Referral validation, rewards, and duplicate handling',
      'Hubble integration with explicit error paths',
      'Payout status tracking and exception handling',
    ],
    technologies: ['REST APIs', 'Hubble', 'Payments', 'Business validations'],
    category: 'Production',
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
