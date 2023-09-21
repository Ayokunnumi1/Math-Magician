import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CalculatorElement from './components/calculator';
import Quote from './components/quote';
import Home from './components/Home';
import './App.css';

const App = () => (
  <div className="App">
    <div className="main-container">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<CalculatorElement />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </div>
  </div>
);

export default App;
