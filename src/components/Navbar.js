import { Link } from 'react-router-dom';
import '../modules/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1>Math Magicians</h1>
    <ul className="navbar-link-container">
      <li>
        <Link className="navbar-links" to="/">Home</Link>
      </li>
      <li className="navbar-links">
        <Link className="navbar-links calculator-text" to="/calculator">Calculator</Link>
      </li>
      <li>
        <Link className="navbar-links" to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
