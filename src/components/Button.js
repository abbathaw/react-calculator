import React from 'react';

const Button = (props) => {
    return (
        <button 
        className={`button`}
        onClick={() => props.handleClick(props.children)}
      >
        {props.children}
      </button>
    );
};

// TODO
// add button interatcion, state, display logic (use last digit entered)

export default Button;