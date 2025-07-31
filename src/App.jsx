import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Project from './components/project';
import Awards from './components/Awards';
import { initScrollAnimations, addScrollListener } from './utils/animations';

import './App.css';

const App = () => {
  useEffect(() => {
    // Initialize scroll animations
    const observer = initScrollAnimations();
    
    // Add scroll listener for header
    const cleanupScroll = addScrollListener();

    // Cleanup function
    return () => {
      observer.disconnect();
      cleanupScroll();
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <Project />
        <About />
        <Awards />
        <Contact />
      </main>
    </div>
  );
};

export default App;
