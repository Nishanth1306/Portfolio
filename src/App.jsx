import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About/>
      <Contact />
      
    </div>
  );
};

export default App;
