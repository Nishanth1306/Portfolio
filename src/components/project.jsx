import { ExternalLink, Github } from './icons';
import { projects } from '../data/projects';

export default function Project() {
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

              {!project.hideLinks && (
                <div className="mt-auto px-6 pb-6">
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={project.liveUrl || '#'}
                      target={project.liveUrl ? '_blank' : undefined}
                      rel={project.liveUrl ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg border border-indigo-200 text-indigo-700 bg-indigo-50 hover:bg-indigo-100 transition"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      View Details
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg text-white bg-gradient-to-r from-indigo-600 to-pink-600 shadow hover:shadow-lg transition"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
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
