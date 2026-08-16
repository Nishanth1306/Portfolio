import dynamic from 'next/dynamic';
import Footer from '@/components/Footer';
import Home from '@/components/Home';

const Project = dynamic(() => import('@/components/project'));
const About = dynamic(() => import('@/components/About'));
const Awards = dynamic(() => import('@/components/Awards'));
const Contact = dynamic(() => import('@/components/Contact'));

export default function Page() {
  return (
    <main>
      <Home />
      <Project />
      <About />
      <Awards />
      <Contact />
      <Footer />
    </main>
  );
}

