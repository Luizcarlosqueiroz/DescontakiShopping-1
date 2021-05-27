import React from 'react'
import MenuLateral from '../../components/MenuLateral'
import LojistaForm from '../../components/AddLojistaForm'

const CadastrarLojista = () => {
    return(
        <div>
            <MenuLateral/>
            <h1>Cadastrar Lojista</h1>
            <br/>
            <hr className='hrLarge'/>
            <LojistaForm/>
        </div>
    )
}

export default CadastrarLojista