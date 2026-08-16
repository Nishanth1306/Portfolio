import { profile } from '@/data/profile';
import Skills from './Skills';

export default function Home() {
  return (
    <div>
      <section id="home" className="relative bg-white py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-8">
              <img
                src="/profile-320.webp"
                srcSet="/profile-320.webp 320w, /profile.webp 416w"
                sizes="(max-width: 767px) 160px, 208px"
                alt="Nishanth K, Software Engineer"
                width={208}
                height={208}
                fetchPriority="high"
                loading="eager"
                decoding="sync"
                className="relative w-40 h-40 md:w-52 md:h-52 rounded-full ring-4 ring-white shadow-xl object-cover"
              />
            </div>
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">{profile.availability}</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              {profile.name}
            </h1>
            <p className="mt-3 text-xl md:text-2xl text-gray-800 font-semibold">
              {profile.headline} at {profile.employer}
            </p>
            <p className="mt-2 text-base text-gray-600">
              React · React Native · Next.js · Node.js · FastAPI · Go · Docker · AWS
            </p>
            <p className="mt-4 max-w-2xl text-gray-600 leading-relaxed">
              {profile.summary}
            </p>
            <p className="mt-3 text-sm text-slate-500">
              {profile.workMode} · {profile.notice}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={profile.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-700 text-white font-semibold hover:bg-indigo-800 transition"
              >
                Download resume
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-indigo-200 text-indigo-700 bg-indigo-50 hover:bg-indigo-100 font-semibold transition"
              >
                LinkedIn
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-200 text-gray-800 bg-white hover:bg-gray-50 font-semibold transition"
              >
                View work
              </a>
            </div>

            <div className="mt-10">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Profiles</p>
              <div className="flex items-center gap-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center hover:shadow-md transition"
                >
                  <svg className="h-5 w-5 text-gray-800" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6a4.6 4.6 0 0 1 1.2-3.2 4.3 4.3 0 0 1 .1-3.2s1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2a4.3 4.3 0 0 1 .1 3.2 4.6 4.6 0 0 1 1.2 3.2c0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z" />
                  </svg>
                </a>
                <a
                  href={profile.gfg}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GeeksforGeeks"
                  className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center hover:shadow-md transition"
                >
                  <img src="/gfglogo.webp" alt="" width={20} height={14} className="h-5 w-auto" />
                </a>
                <a
                  href={profile.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode"
                  className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center hover:shadow-md transition"
                >
                  <img src="/leetcode.webp" alt="" width={20} height={20} className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Skills />
    </div>
  );
}
