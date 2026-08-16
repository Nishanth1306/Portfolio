import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import Home from './components/Home';

const Project = lazy(() => import('./components/project'));
const About = lazy(() => import('./components/About'));
const Awards = lazy(() => import('./components/Awards'));
const Contact = lazy(() => import('./components/Contact'));

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <Suspense fallback={null}>
          <Project />
          <About />
          <Awards />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
};

export default App;
