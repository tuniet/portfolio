import copy from '../media/icons/copy.svg'
import './Footer.css';
function Footer() {
  return (
    <div className='footer'>
        <img src={copy} alt=''/> 2023 Made by Toni Fernández
    </div>
  );
}

export default Footer;