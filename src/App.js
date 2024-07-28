
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/Navbar/NavBar';
import Banner from './components/Banner/Banner';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
function App() {
  return (
    <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
    </div>
  );
}

export default App;
