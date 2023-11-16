import './Navbar.css';
function Navbar() {
  return (
    <div>
    <div class="navbar">
      <div className="start">
        <h1 className="name">Toni Fdez</h1>
      </div>
      <div className="end">
        <a href='#aboutme'><h3>about me</h3></a>
        <a href='#work'><h3>work</h3></a>
        <a href='#footer'><h3>contact</h3></a>
      </div>
    </div>
      <div className="navseparator"></div>
    </div>
  );
}

export default Navbar;


