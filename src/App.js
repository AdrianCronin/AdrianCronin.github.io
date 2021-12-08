import Navtab from './components/Navtab';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="App bg-dark">
      <Navtab />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
