import { useState, useEffect} from 'react';
import './App.css';
import './styles/animations.css';
import Home from './components/Home.jsx';
import Work from './components/Work.jsx';
import AboutMe from './components/AboutMe.jsx';
import Footer from './components/Footer.jsx';
import Fixed from './components/Fixed.jsx';

function App() {

  const [modalactive, setmodalactive] = useState('');
  const [inmodal, setinmodal] = useState(false);

  useEffect(() => {
    if(inmodal){
      setmodalactive('modal-active')
    }
    else{
      setmodalactive('')
    }
  }, [inmodal])

  return (
    <div className='App'>
      <Home setinmodal = {setinmodal}/>
      <AboutMe setinmodal = {setinmodal}/>
      <Work />
      <Footer />
      <Fixed  active={modalactive} inmodal = {inmodal} setinmodal = {setinmodal}/>
    </div>
  );
}

export default App;
