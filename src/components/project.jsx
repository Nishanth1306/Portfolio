import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Marcom SEO Pages Frontend",
      description: "Public FYERS SEO website built with Next.js for high-traffic stock pages. Delivers server-rendered financial content with metadata, sitemaps, analytics, and interactive charts so users can research equities across overview, fundamentals, and corporate actions.",
      features: [
        "SEO-optimized stock pages for overview, P&L, balance sheet, dividends, bonus, and results",
        "Dynamic metadata, Open Graph tags, and XML sitemaps for search indexing",
        "Interactive financial charts, peer comparison, and technical analysis views",
        "FYERS site chrome, auth flows, and analytics via GTM and CleverTap"
      ],
      technologies: ["Next.js", "React", "Tailwind CSS", "Chart.js", "Recharts", "Axios"],
      category: "Web App",
      hideLinks: true
    },
    {
      id: 2,
      title: "Fyers Frontend",
      description: "React and TypeScript CMS used by FYERS marketing and SEO teams to create, approve, and publish finance content. Covers content workflows, AI generation, interlinking, sitemap editing, and real-time SEO monitoring in one dashboard.",
      features: [
        "Content and FAQ management with approval workflows",
        "AI content generation, sync, and prompt configuration UI",
        "SEO monitoring, alerts, and sitemap editor",
        "Interlinking, cluster management, and role-based admin"
      ],
      technologies: ["React", "TypeScript", "Vite", "Redux Toolkit", "TanStack Query", "Tailwind CSS"],
      category: "CMS",
      hideLinks: true
    },
    {
      id: 3,
      title: "Fyers Backend",
      description: "FastAPI content platform powering FYERS SEO operations. Provides AI-assisted content generation, sitemap compilation, Lighthouse-based monitoring, JWT auth, and background jobs over MongoDB, Redis, and Celery.",
      features: [
        "JWT authentication with role-based access control",
        "AI content and FAQ generation via OpenAI and Anthropic",
        "Automated sitemap generation, validation, and history tracking",
        "SEO monitoring with Lighthouse, Playwright, and crawl-rate control",
        "Interlinking, master data APIs, and Celery cron workers"
      ],
      technologies: ["FastAPI", "Python", "MongoDB", "Redis", "Celery", "OpenAI"],
      category: "Backend",
      hideLinks: true
    },
    {
      id: 4,
      title: "Smart Street Light",
      description: "An innovative IoT solution designed to enhance energy efficiency and safety in urban environments. The system integrates temperature and light intensity sensors to ensure optimal street lighting while conserving energy.",
      features: [
        "Temperature Sensors for ambient monitoring",
        "Light Intensity Sensors for natural light detection",
        "Automatic Dimming and Brightening based on sensor data",
        "Energy conservation through smart controls"
      ],
      technologies: ["IoT", "Sensors", "Automation", "Energy Management"],
      category: "IoT"
    },
    {
      id: 5,
      title: "Smart Pole",
      description: "Next-generation street light model integrating various devices like WiFi modems, cameras, LED displays, and emergency SOS to improve public safety and provide comprehensive urban infrastructure.",
      features: [
        "Energy Efficiency with LED lights and smart sensors",
        "Remote Management for centralized control",
        "Surveillance Cameras for security enhancement",
        "Emergency SOS functionality"
      ],
      technologies: ["IoT", "Security", "Smart City", "LED Technology"],
      category: "Smart City"
    },
    {
      id: 6,
      title: "Fault Detection System",
      description: "Automated fault detection system for street lights that identifies issues automatically and sends alert notifications to control rooms, significantly reducing manual fault detection time.",
      features: [
        "Automatic fault identification",
        "Real-time alert notifications",
        "Multiple sensor integration (Lux, tilt, voltage, current)",
        "GSM module with ESP8266 for SMS alerts",
        "Thingspeak integration for data visualization"
      ],
      technologies: ["IoT", "ESP8266", "GSM", "Sensors", "Cloud"],
      category: "IoT"
    },
    {
      id: 7,
      title: "Task Manager",
      description: "A comprehensive task management application that allows users to add, edit, and remove tasks efficiently with an intuitive user interface.",
      features: [
        "Add new tasks",
        "Edit existing tasks",
        "Remove tasks",
        "User-friendly interface"
      ],
      technologies: ["React", "JavaScript", "CSS", "Local Storage"],
      category: "Web App"
    },
    {
      id: 8,
      title: "Students Mark Portal",
      description: "A web application for managing student marks and maintaining a comprehensive database for educational institutions.",
      features: [
        "Student mark entry and management",
        "Database maintenance",
        "Web-based interface",
        "Data organization and retrieval"
      ],
      technologies: ["Web Development", "Database", "PHP", "MySQL"],
      category: "Web App"
    },
    {
      id: 9,
      title: "Expense Tracker",
      description: "An innovative financial management tool designed to help users efficiently monitor and manage their personal and business expenses with intuitive categorization and tracking features.",
      features: [
        "User-friendly interface for easy expense input",
        "Categorization and tagging system",
        "Spending pattern analysis",
        "Budget management tools",
        "Complete financial control"
      ],
      technologies: ["React", "JavaScript", "CSS", "Local Storage"],
      category: "Finance"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-white via-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Featured Projects</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Explore my latest work and innovative solutions across various domains</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-white/90 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-snug">
                  {project.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-5">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features</h4>
                  <ul className="space-y-1.5 list-disc list-inside text-gray-600 text-sm">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {!project.hideLinks && (
                <div className="mt-auto px-6 pb-6">
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={project.liveUrl || '#'}
                      target={project.liveUrl ? '_blank' : undefined}
                      rel={project.liveUrl ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg border border-indigo-200 text-indigo-700 bg-indigo-50 hover:bg-indigo-100 transition"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="h-4 w-4" />
                      View Details
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg text-white bg-gradient-to-r from-indigo-600 to-pink-600 shadow hover:shadow-lg transition"
                    >
                      <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              )}

              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
