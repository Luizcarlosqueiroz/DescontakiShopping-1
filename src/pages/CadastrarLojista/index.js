import React from 'react'
import MenuLateral from '../../components/MenuLateral'
import LojistaForm from '../../components/AddLojistaForm'
import './index.css'

const CadastrarLojista = () => {
    return(
        <div>
            <MenuLateral/>
            <div className='cadastrarLojista'>
                <h2>Cadastrar Lojista</h2>
                <br/>
                <hr className='hrLarge'/>
                <LojistaForm/>
            </div>
        </div>
        
    )
}

export default CadastrarLojista