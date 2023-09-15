import CalculatorElement from './components/calculator';
import Quote from './components/quote';
import './App.css';

const App = () => (
  <div className="App">
    <div className="main-container">
      <Quote />
      <CalculatorElement />
    </div>
  </div>
);

export default App;
