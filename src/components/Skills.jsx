import { skillGroups } from '@/data/profile';

export default function Skills() {
  return (
    <section className="py-16 px-4 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Skills used in shipped work</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Stack from production SEO platforms and mobility APIs — not a generic tutorial list.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-gray-200 bg-slate-50/80 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-700">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full bg-white text-slate-700 border border-slate-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
