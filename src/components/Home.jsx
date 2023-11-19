import './Home.css';
import Navbar from './Navbar.jsx';
import doublearrow from '../media/icons/arrow-down-svgrepo-com.svg'

function Home() {
  return (
    <div id='home' className="home">
        <Navbar />
        <h1 className='intro title'>Creative and enthusiast Frontend Developer & UX/UI Designer, <br></br>specialized in user experience and web interfaces.</h1>
        <a href='#aboutme'><img className="arrowsdown pulse" alt='arrowsdown' src={doublearrow}/></a>
    </div>
  );
}

export default Home;