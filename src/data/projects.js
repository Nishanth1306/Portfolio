export const projects = [
  {
    id: 1,
    title: 'Marcom SEO Pages Frontend',
    description:
      'Public FYERS SEO website built with Next.js for high-traffic stock pages. Delivers server-rendered financial content with metadata, sitemaps, analytics, and interactive charts so users can research equities across overview, fundamentals, and corporate actions.',
    features: [
      'SEO-optimized stock pages for overview, P&L, balance sheet, dividends, bonus, and results',
      'Dynamic metadata, Open Graph tags, and XML sitemaps for search indexing',
      'Interactive financial charts, peer comparison, and technical analysis views',
      'FYERS site chrome, auth flows, and analytics via GTM and CleverTap',
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Chart.js', 'Recharts', 'Axios'],
    category: 'Web App',
    hideLinks: true,
  },
  {
    id: 2,
    title: 'Fyers Frontend',
    description:
      'React and TypeScript CMS used by FYERS marketing and SEO teams to create, approve, and publish finance content. Covers content workflows, AI generation, interlinking, sitemap editing, and real-time SEO monitoring in one dashboard.',
    features: [
      'Content and FAQ management with approval workflows',
      'AI content generation, sync, and prompt configuration UI',
      'SEO monitoring, alerts, and sitemap editor',
      'Interlinking, cluster management, and role-based admin',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Redux Toolkit', 'TanStack Query', 'Tailwind CSS'],
    category: 'CMS',
    hideLinks: true,
  },
  {
    id: 3,
    title: 'Fyers Backend',
    description:
      'FastAPI content platform powering FYERS SEO operations. Provides AI-assisted content generation, sitemap compilation, Lighthouse-based monitoring, JWT auth, and background jobs over MongoDB, Redis, and Celery.',
    features: [
      'JWT authentication with role-based access control',
      'AI content and FAQ generation via OpenAI and Anthropic',
      'Automated sitemap generation, validation, and history tracking',
      'SEO monitoring with Lighthouse, Playwright, and crawl-rate control',
      'Interlinking, master data APIs, and Celery cron workers',
    ],
    technologies: ['FastAPI', 'Python', 'MongoDB', 'Redis', 'Celery', 'OpenAI'],
    category: 'Backend',
    hideLinks: true,
  },
  {
    id: 4,
    title: 'Hala Mobility',
    description:
      'Backend work on a mobility platform covering promotions, user acquisition, third-party integrations, and payouts. Built API-driven workflows with business validations, request/response handling, and reliable error paths for transaction-sensitive features.',
    features: [
      'Coupon management with eligibility checks and discount application',
      'Referral flows including validation, rewards, and duplicate handling',
      'Hubble API integration with request/response and failure handling',
      'Payout processing with status tracking and exception handling',
    ],
    technologies: ['Backend', 'REST APIs', 'Hubble', 'Payments'],
    category: 'Backend',
    hideLinks: true,
  },
  {
    id: 5,
    title: 'Smart Street Light',
    description:
      'An innovative IoT solution designed to enhance energy efficiency and safety in urban environments. The system integrates temperature and light intensity sensors to ensure optimal street lighting while conserving energy.',
    features: [
      'Temperature Sensors for ambient monitoring',
      'Light Intensity Sensors for natural light detection',
      'Automatic Dimming and Brightening based on sensor data',
      'Energy conservation through smart controls',
    ],
    technologies: ['IoT', 'Sensors', 'Automation', 'Energy Management'],
    category: 'IoT',
  },
  {
    id: 6,
    title: 'Smart Pole',
    description:
      'Next-generation street light model integrating various devices like WiFi modems, cameras, LED displays, and emergency SOS to improve public safety and provide comprehensive urban infrastructure.',
    features: [
      'Energy Efficiency with LED lights and smart sensors',
      'Remote Management for centralized control',
      'Surveillance Cameras for security enhancement',
      'Emergency SOS functionality',
    ],
    technologies: ['IoT', 'Security', 'Smart City', 'LED Technology'],
    category: 'Smart City',
  },
  {
    id: 7,
    title: 'Fault Detection System',
    description:
      'Automated fault detection system for street lights that identifies issues automatically and sends alert notifications to control rooms, significantly reducing manual fault detection time.',
    features: [
      'Automatic fault identification',
      'Real-time alert notifications',
      'Multiple sensor integration (Lux, tilt, voltage, current)',
      'GSM module with ESP8266 for SMS alerts',
      'Thingspeak integration for data visualization',
    ],
    technologies: ['IoT', 'ESP8266', 'GSM', 'Sensors', 'Cloud'],
    category: 'IoT',
  },
  {
    id: 8,
    title: 'Task Manager',
    description:
      'A comprehensive task management application that allows users to add, edit, and remove tasks efficiently with an intuitive user interface.',
    features: ['Add new tasks', 'Edit existing tasks', 'Remove tasks', 'User-friendly interface'],
    technologies: ['React', 'JavaScript', 'CSS', 'Local Storage'],
    category: 'Web App',
  },
  {
    id: 9,
    title: 'Students Mark Portal',
    description:
      'A web application for managing student marks and maintaining a comprehensive database for educational institutions.',
    features: [
      'Student mark entry and management',
      'Database maintenance',
      'Web-based interface',
      'Data organization and retrieval',
    ],
    technologies: ['Web Development', 'Database', 'PHP', 'MySQL'],
    category: 'Web App',
  },
  {
    id: 10,
    title: 'Expense Tracker',
    description:
      'An innovative financial management tool designed to help users efficiently monitor and manage their personal and business expenses with intuitive categorization and tracking features.',
    features: [
      'User-friendly interface for easy expense input',
      'Categorization and tagging system',
      'Spending pattern analysis',
      'Budget management tools',
      'Complete financial control',
    ],
    technologies: ['React', 'JavaScript', 'CSS', 'Local Storage'],
    category: 'Finance',
  },
];
