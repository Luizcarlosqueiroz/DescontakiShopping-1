import React from 'react'
import './index.css'

const navigationButton = ({handleButton, value, imgSrc, altImg})=>{
    return(
        <>
            <button onClick={handleButton} id='navButton'>
                <img src={imgSrc} alt={altImg}></img>
                <hr className='hrSmall'></hr>
                {value}
            </button>
        </>
    )
}

export default navigationButton