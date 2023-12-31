import './AboutMe.css';
import avatar from '../media/Images/IMG_0322.png'

const AboutMe = props => {

  function handleClick(){
    props.setinmodal(true)
  }
  return (
    <div id='aboutme' className="aboutme">
        <h1 className='aboutheader'>¡Hola! I'm Toni, a passionate Front-End Developer and UX/UI Designer based in the heart of Madrid, originally from the enchanting island of Ibiza.</h1>
        <div className='aboutflex'>
          <img src={avatar} alt=""  className='aboutimg'/>
          <p className='aboutp'>With a background deeply rooted in the deverse culture of Ibiza, I bring a unique blend of artistic flair and technical acumen to every project. My design philosophy revolves around crafting digital experiences that seamlessly merge aesthetics with functionality. From conceptualization to execution, I thrive on the challenge of creating visually stunning interfaces that elevate user experiences.<br></br>
          <br></br>As a Madrid local, I've immersed myself in the dynamic design community, attending meetups and collaborating with fellow creatives. Beyond pixels and code, I believe in the transformative power of collaboration, continuous learning, and the boundless potential of technology to reshape our digital landscape.<br></br><br></br><span className='toContact' onClick={handleClick}>Let's create something extraordinary together!</span></p>
        </div>
    </div>
  );
}

export default AboutMe;