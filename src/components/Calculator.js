import React from 'react';
import Display from './Display';
import NumPad from './NumPad';

const Calculator = () => {
    return (
        <div className="calculator calc-wrapper">
            <Display />
            <NumPad />
        </div>
    );
};

export default Calculator;