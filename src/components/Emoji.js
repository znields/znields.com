import React from 'react';


const Emoji = props => (
    <span
        style={{...props.style, display: 'inline-block'}}
        onClick={props.onClick}
        className="emoji"
        role="img"
    >
        {props.symbol}
    </span>
);
export default Emoji;
