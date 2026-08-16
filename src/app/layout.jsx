import Header from '@/components/Header';
import { siteConfig } from '@/lib/site';
import './globals.css';

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.title,
    images: [
      {
        url: '/profile.webp',
        width: 416,
        height: 416,
        alt: 'Nishanth.K',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/profile.webp'],
  },
  icons: {
    icon: '/vite.svg',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  jobTitle: 'Software Developer',
  url: siteConfig.url,
  email: siteConfig.email,
  image: `${siteConfig.url}/profile.webp`,
  sameAs: [
    'https://github.com/Nishanth1306',
    'https://www.linkedin.com/in/nishanth--k/',
    'https://leetcode.com/u/21eea29/',
    'https://www.geeksforgeeks.org/user/21eea29/',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link
          rel="preload"
          as="image"
          href="/profile-320.webp"
          imageSrcSet="/profile-320.webp 320w, /profile.webp 416w"
          imageSizes="(max-width: 767px) 160px, 208px"
          type="image/webp"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="app">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
