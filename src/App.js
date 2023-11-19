import { useState, useEffect} from 'react';
import './App.css';
import './styles/animations.css';
import Home from './components/Home.jsx';
import Work from './components/Work.jsx';
import AboutMe from './components/AboutMe.jsx';
import Footer from './components/Footer.jsx';
import closeIcon from './media/icons/x-lg.svg';

function App() {

  const [scrolltopdata, setscrolltopdata] = useState('');
  const [modalactive, setmodalactive] = useState('');
  const [inmodal, setinmodal] = useState(false);

  useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= window.innerHeight) {
                setscrolltopdata('scrolled');
            } else {
                setscrolltopdata('');
            }
        });
  }, [])
  
  useEffect(() => {
    if(inmodal){
      setmodalactive('modal-active')
    }
    else{
      setmodalactive('')
    }
  }, [inmodal])

  function handleOpen() {
    setinmodal(!inmodal);
  }

  function handleClose() {
    setinmodal(false);
  }

  return (
    <div className='App'>
      <Home />
      <AboutMe />
      <Work />
      <Footer />
      <span className={`contact-button ${scrolltopdata}`} onClick={handleOpen}>Get in touch</span>
      <div className={`contact-modal ${modalactive}`}>
        <span className='modal-close-button' onClick={handleClose}><img src={closeIcon} alt=''/></span>
        <h2 className='modal-title'>Get in touch</h2>
        <p className='modal-txt'>If you'd like to collaborate or have anything to say, please fill out the form below with as much details as possible and I'll be in touch!</p>
        <div class="form">
          <form action='#form-processor.php' class="contact-form" method="POST">
            <div class="form-name-email">
                <input type="text" id='name'required="" name="FullName" placeholder="Full Name*"/>
                <input type="text" id='email' required="" name="Email" placeholder="Email Address*"/>
            </div>
              <textarea class="form-textarea" name="Message" placeholder="Message..." type="text" id="message"></textarea>
              <button type="submit" class="submit-button">Submit</button>
          </form>
        </div>
      </div>
      <div className={`overlay-bg ${modalactive}`}></div>    
    </div>
  );
}

export default App;
