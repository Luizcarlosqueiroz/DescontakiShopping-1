import React from 'react'
import './index.css'
import lojistaIcon from '../../assets/images/lojista.png'

const navigationButton = ({handleButton, value, imgSrc, altImg})=>{
    return(
        <>
            <button onClick={handleButton}>
                <img src={imgSrc} alt={altImg}></img>
                <hr></hr>
                {value}
            </button>
        </>
    )
}

export default navigationButton