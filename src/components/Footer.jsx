import { profile } from '@/data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>
          {profile.name} · {profile.headline}
        </p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${profile.email}`} className="hover:text-indigo-600">
            Email
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
            GitHub
          </a>
          <a href={profile.resumeHref} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
