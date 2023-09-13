import './Calculator.css';
import Text from './calculatorText';

const CalculatorElement = () => (
  <>
    <Text />
    <div className="grid-container">
      <input className="input-number" value={0} />
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button type="button">/</button>
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button">X</button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button">-</button>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button">+</button>
      <button type="button" className="item-seventeen">0</button>
      <button type="button" className="item-eighteen">.</button>
      <button type="button">=</button>
    </div>

  </>
);

export default CalculatorElement;