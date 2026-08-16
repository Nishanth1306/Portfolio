import { featuredProjects, additionalProjects } from '../data/projects';

function ProjectCard({ project }) {
  return (
    <article className="group relative rounded-2xl bg-white/90 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
            {project.category}
          </span>
          {project.org && (
            <span className="text-xs font-semibold text-slate-500">{project.org}</span>
          )}
          {project.role && (
            <span className="text-xs text-slate-500">{project.role}</span>
          )}
        </div>
        <h3 className="text-xl font-bold text-gray-900 leading-snug">{project.title}</h3>
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">{project.description}</p>
        <div className="mt-5">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">What I delivered</h4>
          <ul className="space-y-1.5 list-disc list-inside text-gray-600 text-sm">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-700 border border-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition" />
    </article>
  );
}

export default function Project() {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-white via-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Selected work
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Client projects first (FYERS and Hala Mobility). Source is private, so this is the scope I owned — not placeholder CRUD apps.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center">Earlier hardware work</h3>
          <p className="mt-2 text-gray-600 text-center max-w-2xl mx-auto">
            Academic IoT systems that show systems thinking before product engineering roles.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {additionalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
