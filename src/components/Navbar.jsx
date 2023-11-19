import './Navbar.css';
function Navbar() {
  return (
    <div className='navbar'>
    <div class="flex">
      <div className="start">
        <h1 className="name">Toni Fdez</h1>
      </div>
      <div className="end">
        <a href='#aboutme' className='hover-underline-animation'>about me</a>
        <a href='#work' className='hover-underline-animation'>work</a>
        <a href='#footer' className='hover-underline-animation'>contact</a>
      </div>
    </div>
      <div className="navseparator"></div>
    </div>
  );
}

export default Navbar;


