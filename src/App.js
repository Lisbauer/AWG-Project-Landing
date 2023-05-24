import './App.css';
import Contact from './components/CONTACT/Contact';
import Navbar from './components/NAVBAR/Navbar.jsx'
import './components/NAVBAR/navbar.css'
import AboutAwg from './components/ABOUT-AWG/AboutAwg.jsx';
import Services from './components/SERVICES/Services';
import Videos from './components/VIDEOS/Videos'
import Certifications from './components/CERTIFICATIONS/Certifications';
import WhatsappToTopIcons from './components/WHATSAPP-TO-TOP-ICONS/WhatsappToTopIcons';


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
