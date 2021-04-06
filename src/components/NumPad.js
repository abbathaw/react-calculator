import React from 'react';
import Button from './Button';

const NumPad = ({handleEvaluation, handleNumberPressed, handleOperatorPressed, handleClear}) => {
    return (
        <>
        <div className="row">
            <Button className="digit-7" handleClick={handleNumberPressed}>7</Button>
            <Button className="digit-8" handleClick={handleNumberPressed}>8</Button>
            <Button className="digit-9" handleClick={handleNumberPressed}>9</Button>
            <Button className="op-div" handleClick={handleOperatorPressed}>/</Button>
          </div>
          <div className="row">
            <Button className="digit-4" handleClick={handleNumberPressed}>4</Button>
            <Button className="digit-5" handleClick={handleNumberPressed}>5</Button>
            <Button className="digit-6" handleClick={handleNumberPressed}>6</Button>
            <Button className="op-mul" handleClick={handleOperatorPressed}>*</Button>
          </div>
          <div className="row">
            <Button className="digit-1" handleClick={handleNumberPressed}>1</Button>
            <Button className="digit-2" handleClick={handleNumberPressed}>2</Button>
            <Button className="digit-3" handleClick={handleNumberPressed}>3</Button>
            <Button className="op-sub" handleClick={handleOperatorPressed}>-</Button>
          </div>
          <div className="row">
            <Button className="clear" handleClick={handleClear}>C</Button>
            <Button className="digit-0" handleClick={handleNumberPressed}>0</Button>
            <Button className="eq" handleClick={handleEvaluation}>=</Button>
            <Button className="op-add" handleClick={handleOperatorPressed}>+</Button>
          </div>
        </>
    );
};

export default NumPad;