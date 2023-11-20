import './ContactModal.css';
import closeIcon from '../media/icons/x-lg.svg';
import mail from '../media/icons/mail.svg'

const ContactModal = props => {

    function handleClose() {
        props.setinmodal(false);
    }

  return (
    <div className={`contact-modal ${props.active}`}>
        <span className='modal-close-button' onClick={handleClose}><img src={closeIcon} alt=''/></span>
        <h2 className='modal-title'>Get in touch</h2>
        <p className='modal-txt'>If you'd like to collaborate or have anything to say, please fill out the form below with as much details as possible and I'll be in touch!<br /><br /> or <br /><br /> </p>
        <a className="modal-mail" href='mailto:tofeju@gmail.com'><img src = {mail} alt="mail svg"/> tofeju@gmail.com</a>
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
  );
}

export default ContactModal;

