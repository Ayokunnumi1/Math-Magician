/* eslint-disable import/no-extraneous-dependencies */
import { Route, Routes, Link } from 'react-router-dom';
import CalculatorElement from './components/calculator';
import Quote from './components/quote';
import Home from './components/Home';
import './App.css';

const App = () => (
  <div className="App">
    <nav className="navbar">
      <h1>Math Magicians</h1>
      <ul className="navbar-link-container">
        <li>
          <Link className="navbar-links" to="/">Home</Link>
        </li>
        <li>
          <Link className="navbar-links" to="/quote">Quote</Link>
        </li>
        <li className="navbar-links">
          <Link className="navbar-links" to="/calculator">Calculator</Link>
        </li>
      </ul>
    </nav>
    <div className="main-container">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/calculator" element={<CalculatorElement />} />
        </Routes>
      </div>
    </div>
  </div>
);

export default App;
