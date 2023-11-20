import './Fixed.css';
import { useState, useEffect} from 'react';
import ContactModal from './ContactModal.jsx';

const Fixed = props => {

    const [buttonactive, setbuttonactive] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if ((window.scrollY >= window.innerHeight ) && !props.inmodal) {
                setbuttonactive('scrolled');
            } else {
                setbuttonactive('');
            }
        });
    }, [props.inmodal])

    function handleClick() {
        props.setinmodal(true);
        setbuttonactive('')
    }
    
    function handleBgClick() {
        props.setinmodal(false)
        setbuttonactive('scrolled')
    }

  return (
    <div className='fixed'>
        <span className={`contact-button ${buttonactive}`} onClick={handleClick}>Get in touch</span>
        <div className={`overlay-bg ${props.active}`} onClick={handleBgClick}></div>
        <ContactModal  active={props.active} setinmodal={props.setinmodal}/>
    </div>
  );
}

export default Fixed;