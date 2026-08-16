import { certifications, experience, profile } from '@/data/profile';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">About</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Software Engineer at Codingmart Technologies. FYERS and Hala Mobility are client projects delivered through that role.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Background</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                I am {profile.name}. I am open to hybrid or remote roles in Bangalore, Chennai, Mumbai, Pune, and Noida. I completed a B.E. in Electrical and Electronics Engineering
                at Karpagam Institute of Technology (2021–2025, CGPA 8.0) and work as a Software Engineer at{' '}
                {profile.employer} since 2023.
              </p>
              <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                Day to day that means React, Next.js, Node.js, FastAPI, and DevOps (Docker, Nginx, AWS). On the FYERS client
                engagement I worked on SEO pages, metadata, sitemaps, and publishing tools. On Hala Mobility I worked on
                coupons, referrals, and payouts.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                <h3 className="text-xl font-bold text-slate-800 mb-2">How I work</h3>
                <p className="text-slate-600 leading-relaxed">
                  Own the path from UI to API to deploy. I would rather fix lockfiles and pipelines myself than throw them over a wall.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                <h3 className="text-xl font-bold text-slate-800 mb-2">What I want next</h3>
                <p className="text-slate-600 leading-relaxed">
                  Software engineering roles where product code and how it ships are both part of the job.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Signals</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-indigo-700">2023</div>
                  <div className="text-sm text-slate-600 font-medium">Codingmart since</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">8.0</div>
                  <div className="text-sm text-slate-600 font-medium">CGPA</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold text-indigo-700">2</div>
                  <div className="text-sm text-slate-600 font-medium">Client brands</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="text-2xl font-bold text-orange-600">AWS</div>
                  <div className="text-sm text-slate-600 font-medium">Cloud Foundations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 mb-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Experience</h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-indigo-200"></div>
            <div className="space-y-8">
              {experience.map((item) => (
                <div key={`${item.org}-${item.title}`} className="relative flex items-start">
                  <div className="absolute left-0 w-8 h-8 bg-indigo-600 rounded-full border-4 border-white shadow" />
                  <div className="ml-12">
                    <h4 className="text-lg font-semibold text-slate-800">{item.title}</h4>
                    <p className="text-indigo-600 font-medium">{item.org}</p>
                    {item.dates && <p className="text-sm text-slate-500">{item.dates}</p>}
                    <p className="text-slate-600 mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="certifications" className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Certifications</h3>
          <ul className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <li key={cert.name} className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="font-semibold text-slate-800">{cert.name}</p>
                <p className="text-sm text-slate-500">
                  {cert.issuer} · {cert.issued}
                </p>
                {cert.href && (
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-800"
                  >
                    View credential
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
