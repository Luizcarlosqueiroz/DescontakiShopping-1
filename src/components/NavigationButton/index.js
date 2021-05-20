import React from 'react'
import './index.css'

const navigationButton = ({value, imgSrc, altImg})=>{
    return(
        <>
            <button id='navButton'>
                <img src={imgSrc} alt={altImg}></img>
                <hr className='hrSmall'></hr>
                {value}
            </button>
        </>
    )
}

export default navigationButton