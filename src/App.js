import './App.css';
import Contact from './components/Contact';
import Navbar from './components/Navbar.jsx'
import './components/navbar.css'
import AboutAwg from './components/AboutAwg';
import Services from './components/Services';
import Videos from './components/Videos'


function App() {
  return (
    <div> 
    <div className="App">
    <Navbar/>
    <Contact/>
    </div>
    <AboutAwg/>
    <Services/>
    <Videos/>
    </div>
  );
}

export default App;
