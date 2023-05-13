import './App.css';
import Contact from './components/Contact';
import Navbar from './components/Navbar.jsx'
import './components/navbar.css'
import AboutAwg from './components/AboutAwg';
import Services from './components/Services';
import Videos from './components/Videos'
import Certifications from './components/Certifications';


function App() {
  return (
    <div> 
    <div className="App">
    <Navbar/>
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
