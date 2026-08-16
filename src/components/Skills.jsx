import javaLogo from '../assets/java.webp';
import pythonLogo from '../assets/python.webp';
import mernLogo from '../assets/mern.webp';
import sqlLogo from '../assets/sql.webp';
import leadershipLogo from '../assets/leadership.webp';

const skills = [
  { logo: javaLogo, name: 'Java', desc: 'Object-oriented programming and enterprise development' },
  { logo: pythonLogo, name: 'Python', desc: 'Data science, automation, and web development' },
  { logo: mernLogo, name: 'MERN Stack', desc: 'Full-stack web development with modern technologies' },
  { logo: sqlLogo, name: 'SQL', desc: 'Database design and management' },
  { logo: null, name: 'Go', desc: 'High-performance systems and microservices development', text: 'Go' },
  { logo: null, name: 'FastAPI', desc: 'Modern, fast web APIs with automatic documentation', text: 'FastAPI' },
  { logo: null, name: 'DevOps', desc: 'CI/CD pipelines, containerization, and cloud deployment', text: 'DevOps' },
  { logo: null, name: 'Selenium', desc: 'Web automation and testing frameworks', text: 'Selenium' },
  { logo: leadershipLogo, name: 'Leadership', desc: 'Team management and project coordination' },
];

export default function Skills() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Technical Skills</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">My expertise spans across various technologies and frameworks</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative rounded-2xl bg-white/90 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center mb-4">
                  {skill.logo ? (
                    <img src={skill.logo} alt={skill.name} width={36} height={36} loading="lazy" decoding="async" className="h-9 w-9 object-contain" />
                  ) : (
                    <span className="text-sm font-bold text-gray-800">{skill.text}</span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{skill.name}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{skill.desc}</p>
              </div>
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
