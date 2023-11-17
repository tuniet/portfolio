import './Work.css';
import architecture from '../media/Images/1674976757-download-1.jpg'
import jewelry from '../media/Images/1674976855-download-3.jpg'
import clothing from '../media/Images/1679544184-download.jpg'
import other from '../media/Images/1674977916-download-18.jpg'

function Work() {
  return (
    <div id='work' className='work'>
      <h1 className='title'>Selected Work</h1>
        <div className='grid'>
          <a href='https://www.tonifdez.com' className='card first'><img className='card-img' src={clothing} alt=''/><span className='card-name'>Meraki</span></a>
          <a href='https://www.tonifdez.com' className='card second'><img className='card-img' src={jewelry} alt=''/><span className='card-name'>Jewelry</span></a>
          <a href='https://www.tonifdez.com' className='card third'><img className='card-img' src={architecture} alt=''/><span className='card-name'>Architecture</span></a>
          <a href='https://www.tonifdez.com' className='card fourth'><img className='card-img' src={other} alt=''/><span className='card-name'>Allonda</span></a>
        </div>
    </div>
  );
}

export default Work;