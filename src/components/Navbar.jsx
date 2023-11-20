import './Navbar.css';
const Navbar = props => {

  function handleClick() {
    props.setinmodal(true);
  }

  return (
    <div className='navbar'>
    <div class="flex">
      <div className="start">
        <h1 className="name">Toni Fdez</h1>
      </div>
      <div className="end">
        <a href='#aboutme' className='navbar-a hover-underline-animation'>about me</a>
        <a href='#work' className='navbar-a hover-underline-animation'>work</a>
        <span className='navbar-a hover-underline-animation' onClick={handleClick}>contact</span>
      </div>
    </div>
      <div className="navseparator"></div>
    </div>
  );
}

export default Navbar;


