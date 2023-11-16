import './Footer.css';
import linkdn from'../media/icons/linkedin.svg'
import github from '../media/icons/github.svg'
import instagram from '../media/icons/instagram.svg'
import mail from '../media/icons/mail.svg'
function Footer() {
  return (
    <div id='footer' className='footer'>
        <div className='container'>
            <div className='links'>
              <h3>Quick links</h3>
              <a href='#home'>Home</a>
              <a href='#aboutme'>About Me</a>
              <a href='#work'>Work</a>
              <a href='#skills'>Skills</a>
            </div>
            <div className='socials'>
              <h3>My sociales</h3>
              <a className="icon" href='https://www.linkedin.com/in/antonio-fern%C3%A1ndez-juan-496ab4254/'><img src = {linkdn} alt="linkedin svg"/> linkedin</a>
              <a className="icon" href='https://github.com/tuniet'><img src = {github} alt="github svg"/> github</a>
              <a className='icon' href=''><img src={instagram} alt="" />instagram</a>
            </div>
          <div className='contact'>
            <h3>Contact me</h3>
            <a className="icon" href='mailto:tofeju@gmail.com'><img src = {mail} alt="mail svg"/> tofeju@gmail.com</a>
          </div>
        </div>
      </div>        
  );
}

export default Footer;