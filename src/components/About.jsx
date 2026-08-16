import { experience, profile } from '@/data/profile';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            About
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Engineer who can own a slice of a product — UI, APIs, and the operational details that keep SEO and payments reliable.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Background</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                I am {profile.name}, a software engineer based in {profile.location}. I trained in Electrical and Electronics
                Engineering at Karpagam Institute of Technology and now spend my time shipping web platforms:
                crawlable Next.js pages, internal tools for content teams, and FastAPI services with auth, jobs, and monitoring.
                FYERS and Hala Mobility are client projects, not employers.
              </p>
              <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                On the FYERS engagement I worked on SEO, metadata, sitemaps, and publishing workflows. On the Hala Mobility
                engagement I worked on eligibility, referrals, and payouts — places where a wrong response is a business incident, not a UI glitch.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                <h3 className="text-xl font-bold text-slate-800 mb-2">How I work</h3>
                <p className="text-slate-600 leading-relaxed">
                  Clear contracts, explicit error paths, and features that content or ops teams can actually run. I prefer
                  shipping a monitored flow over a demo-only happy path.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                <h3 className="text-xl font-bold text-slate-800 mb-2">What I want next</h3>
                <p className="text-slate-600 leading-relaxed">
                  A software engineering role on a product team — frontend, backend, or full-stack — where SEO, APIs, and
                  reliability are part of the job, not afterthoughts.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Signals</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">2</div>
                  <div className="text-sm text-slate-600 font-medium">Client companies</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">4</div>
                  <div className="text-sm text-slate-600 font-medium">Client workstreams</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600">SEO</div>
                  <div className="text-sm text-slate-600 font-medium">+ APIs in prod</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="text-2xl font-bold text-orange-600">CEO</div>
                  <div className="text-sm text-slate-600 font-medium">Campus E-cell</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Client work and background</h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            <div className="space-y-8">
              {experience.map((item) => (
                <div key={item.title} className="relative flex items-start">
                  <div className="absolute left-0 w-8 h-8 bg-indigo-600 rounded-full border-4 border-white shadow" />
                  <div className="ml-12">
                    <h4 className="text-lg font-semibold text-slate-800">{item.title}</h4>
                    <p className="text-indigo-600 font-medium">{item.org}</p>
                    <p className="text-slate-600 mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
