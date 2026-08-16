import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Project from './components/project';
import Awards from './components/Awards';
import './App.css';

const App = () => {
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
