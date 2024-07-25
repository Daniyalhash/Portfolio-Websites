import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Learning from './components/Learning';
import Project from './components/Project';
import Services from './components/Services';


function App() {
  return (
    <div className="App">
    <Landing />
    <Project />
    <Services />
    <About />
    <Footer />
    </div>
  );
}

export default App;
