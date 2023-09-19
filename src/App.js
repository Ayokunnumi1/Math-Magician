/* eslint-disable import/no-extraneous-dependencies */
import { Route, Routes } from 'react-router-dom';
import CalculatorElement from './components/calculator';
import Quote from './components/quote';
import './App.css';

const App = () => (
  <div className="App">
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Quote />} />
        <Route path="/Calculator" element={<CalculatorElement />} />
      </Routes>
    </div>
  </div>
);

export default App;
