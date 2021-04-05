import React from 'react';

const Button = (props) => {
    return (
        <div 
        className={`button`}
        // onClick={() => this.props.handleClick(this.props.children)}
      >
        {props.children}
      </div>
    );
};

export default Button;