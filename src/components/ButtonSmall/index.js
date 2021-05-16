import React from 'react';

import './index.css';

const ButtonSmall = ({title, handlerButton, calltoAction}) => {

    return(
        
        <div>
            <button onClick={handlerButton} className= {calltoAction ? "buttonclass activeButton" : "buttonclass disactiveButton"} >{title}</button>
        </div>
    )
}

export default ButtonSmall;

