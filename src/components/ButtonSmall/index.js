import React from 'react';

import './index.css';

const smallButton = ({title}) => {

    return(
        <div>
            <button className="buttonclass">{title}</button>
        </div>
    )
}

export default smallButton;