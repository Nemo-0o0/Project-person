
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/Navbar/NavBar';
import Banner from './components/Banner/Banner';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
// import MailChimpForm from './components/MailChimpForm/MailChimpForm';
function App() {
  return (
    <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        {/* <MailChimpForm/> */}
        <Footer />
    </div>
  );
}

export default App;
