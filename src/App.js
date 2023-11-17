import './App.css';
import './styles/animations.css';
import Home from './components/Home.jsx';
import Work from './components/Work.jsx';
import AboutMe from './components/AboutMe.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Work />
      <Footer />      
    </div>
  );
}

export default App;
