import './Calculator.css';
import { useState } from 'react';
import Text from './calculatorText';
import calculate from '../Logic/calculate';

const CalculatorElement = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClicks = (buttonValue) => {
    const outPut = calculate(state, buttonValue);
    setState(outPut);
  };

  return (
    <>
      <Text />
      <div className="grid-container">
        <div className="input-number">
          {state.total}
          {' '}
          {state.operation}
          {' '}
          {state.next}
        </div>
        <button type="button" value="AC" onClick={(e) => handleButtonClicks(e.target.value)}>AC</button>
        <button type="button" value="+/-" onClick={(e) => handleButtonClicks(e.target.value)}>+/-</button>
        <button type="button" value="%" onClick={(e) => handleButtonClicks(e.target.value)}>%</button>
        <button type="button" value="&#247;" onClick={(e) => handleButtonClicks(e.target.value)}>&#247;</button>
        <button type="button" value="7" onClick={(e) => handleButtonClicks(e.target.value)}>7</button>
        <button type="button" value="8" onClick={(e) => handleButtonClicks(e.target.value)}>8</button>
        <button type="button" value="9" onClick={(e) => handleButtonClicks(e.target.value)}>9</button>
        <button type="button" value="x" onClick={(e) => handleButtonClicks(e.target.value)}>X</button>
        <button type="button" value="4" onClick={(e) => handleButtonClicks(e.target.value)}>4</button>
        <button type="button" value="5" onClick={(e) => handleButtonClicks(e.target.value)}>5</button>
        <button type="button" value="6" onClick={(e) => handleButtonClicks(e.target.value)}>6</button>
        <button type="button" value="-" onClick={(e) => handleButtonClicks(e.target.value)}>-</button>
        <button type="button" value="1" onClick={(e) => handleButtonClicks(e.target.value)}>1</button>
        <button type="button" value="2" onClick={(e) => handleButtonClicks(e.target.value)}>2</button>
        <button type="button" value="3" onClick={(e) => handleButtonClicks(e.target.value)}>3</button>
        <button type="button" value="+" onClick={(e) => handleButtonClicks(e.target.value)}>+</button>
        <button type="button" className="item-seventeen" value="0" onClick={(e) => handleButtonClicks(e.target.value)}>0</button>
        <button type="button" className="item-eighteen" value="." onClick={(e) => handleButtonClicks(e.target.value)}>.</button>
        <button type="button" value="=" onClick={(e) => handleButtonClicks(e.target.value)}>=</button>
      </div>

    </>
  );
};

export default CalculatorElement;
