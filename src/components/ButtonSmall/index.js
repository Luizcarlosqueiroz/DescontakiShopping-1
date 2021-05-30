import React from 'react';

import './index.css';

const ButtonSmall = ({title, handlerButton, calltoAction, disabled}) => {

    return(
        
        <div>
            <button onClick={handlerButton} disabled={disabled} className= {calltoAction ? "buttonclass activeButton" : "buttonclass disactiveButton"} >{title}</button>
        </div>
    )
}

export default ButtonSmall;

