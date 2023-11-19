import './Home.css';
import Navbar from './Navbar.jsx';
import doublearrow from '../media/icons/arrow-down-svgrepo-com.svg'
import linkdn from'../media/icons/linkedin.svg'
import github from '../media/icons/github.svg'
import cvicon from '../media/icons/cv.svg'
import cv from '../media/cv.pdf'

function Home() {
  return (
    <div id='home' className="home">
        <Navbar />
        <div className='intro'>
          <h1 className='title'>Creative and enthusiast Frontend Developer & UX/UI Designer, <br></br>specialized in user experience and web interfaces.</h1>
          <div className='socials-home'>
            <a className="home-icon" href='https://www.linkedin.com/in/antonio-fern%C3%A1ndez-juan-496ab4254/'><img src = {linkdn} alt="linkedin"/></a>
            <a className="home-icon" href='https://github.com/tuniet'><img src = {github} alt="github"/></a>
            <a className='home-icon' href={cv} downlaod><img src= {cvicon} alt='cv'/></a>
          </div>
        </div>
        
        
        <a href='#aboutme'><img className="arrowsdown pulse" alt='arrowsdown' src={doublearrow}/></a>
    </div>
  );
}

export default Home;