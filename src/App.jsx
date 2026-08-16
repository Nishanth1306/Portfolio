import Header from './components/Header';
import Home from './components/Home';
import LazyOnVisible from './components/LazyOnVisible';

const loadProject = () => import('./components/project');
const loadAbout = () => import('./components/About');
const loadAwards = () => import('./components/Awards');
const loadContact = () => import('./components/Contact');

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <LazyOnVisible id="projects" loader={loadProject} />
        <LazyOnVisible id="about" loader={loadAbout} />
        <LazyOnVisible id="awards" loader={loadAwards} />
        <LazyOnVisible id="contact" loader={loadContact} />
      </main>
    </div>
  );
};

export default App;
