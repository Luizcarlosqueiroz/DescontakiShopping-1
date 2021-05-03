import React from 'react';

import './index.css';

const ButtonSmall = ({title}) => {

    return(
        
        <div>
            <button className="buttonclass">{title}</button>
        </div>
    )
}

export default ButtonSmall;