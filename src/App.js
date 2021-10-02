import Navtab from './components/Navtab';
import About from './components/About';
import Projects from './components/Projects';
import Container from 'react-bootstrap/Container'

import './App.css';

function App() {
  return (
    <div className="App bg-dark">
      <Navtab />
      <About />
      <Projects />
    </div>
  );
}

export default App;
