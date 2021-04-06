import React from 'react';

const Display = (props) => {
    return (
        <div className="row">
            <div className="output">
                {props.displayOutput.join("")}
            </div>
        </div>
    );
};

export default Display;