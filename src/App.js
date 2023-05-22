import './App.css';
import Contact from './components/Contact';
import Navbar from './components/Navbar.jsx'
import './components/navbar.css'
import AboutAwg from './components/AboutAwg';
import Services from './components/Services';
import Videos from './components/Videos'
import Certifications from './components/Certifications';
import WhatsappToTopIcons from './components/WhatsappToTopIcons';


function App() {
  return (
    <div id='navbar'> 
    <div className="App">
    <div >
    <Navbar/>
    </div>
    <WhatsappToTopIcons/>
    <div id='contact'> 
    <Contact/>
    </div>
    </div>
    <div id="about"> 
    <AboutAwg/>
    </div>
    <div id="services">
    <Services/>
    </div>
    <div id="videos">
    <Videos/>
    </div>
    <Certifications/>
    </div>

  );
}

export default App;
