import React from 'react';
import Button from './Button';

const NumPad = () => {
    return (
        <>
        <div className="row">
            <Button >7</Button>
            <Button >8</Button>
            <Button >9</Button>
            <Button >/</Button>
          </div>
          <div className="row">
            <Button >4</Button>
            <Button >5</Button>
            <Button >6</Button>
            <Button >*</Button>
          </div>
          <div className="row">
            <Button >1</Button>
            <Button >2</Button>
            <Button >3</Button>
            <Button >-</Button>
          </div>
          <div className="row">
            <Button >C</Button>
            <Button >0</Button>
            <Button >=</Button>
            <Button >+</Button>
          </div>
        </>
    );
};

export default NumPad;