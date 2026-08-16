import Image from 'next/image';
import annaUniversity from '../assets/Anna-university.webp';
import eCell from '../assets/E-cell.webp';
import eSummit from '../assets/E-summit.webp';

export default function Awards() {
  const items = [
    {
      id: 3,
      title: 'E-Summit 2024 — team lead',
      organization: 'IIT Bombay',
      description:
        'Led E-cell Karpagam as CEO at E-Summit 2024: coordination, representation, and networking with founders and operators.',
      image: eSummit,
      year: '2024',
      category: 'Leadership',
    },
    {
      id: 1,
      title: 'E-Leader workshop',
      organization: 'Anna University Regional Campus, Coimbatore',
      description: 'Two-day workshop on entrepreneurship operations and leadership practice.',
      image: annaUniversity,
      year: '2024',
      category: 'Training',
    },
    {
      id: 2,
      title: 'E-cell office',
      organization: 'Karpagam Institute of Technology',
      description: 'Took on campus entrepreneurship leadership, including team formation and external programs.',
      image: eCell,
      year: '2024',
      category: 'Campus',
    },
  ];

  return (
    <section id="awards" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Leadership
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Campus entrepreneurship, not trophy inflation. The IIT Bombay E-Summit trip is the one hiring conversations should start with.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.id} className="group rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                <div className="absolute bottom-3 left-3">
                  <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-white/90 text-gray-800 border border-gray-200 shadow">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                    {item.year}
                  </span>
                </div>
                <p className="mt-1 text-indigo-600 font-semibold text-sm">{item.organization}</p>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
