import React, { useState } from 'react';
import Input from '../Input'
import ButtonSmall from '../ButtonSmall'
import {LojistaFormValidation} from './formValidation'
import useValidation from './hooks/useValidation'

const initialForm = {
    cnpj:'',
    categoria:'',
    nome:'',
    ponto:''
}

const LojistaForm = () => {
    const [form,setForm] = useState(initialForm)
    const {erros} = useValidation(form,LojistaFormValidation)

    const setInput = (newValue)=>{
        setForm(form =>({...form,...newValue}))
    }

    return(
        <>
            <h3>Formulário Teste</h3>
            <form>
                <Input
                   name='cnpj'
                   type='text'
                   placeholder='CNPJ'
                   onChange={e => setInput({cnpj: e.target.value})}
                   error={erros.cnpj}
                />

                <Input
                   name='categoria'
                   type='text'
                   placeholder='Categoria'
                   onChange={e => setInput({categoria: e.target.value})}
                   error={erros.categoria}
                />

                <Input
                   name='nome'
                   type='text'
                   placeholder='Nome'
                   onChange={e => setInput({nome: e.target.value})}
                   error={erros.nome}
                />

                <Input
                   name='ponto'
                   type='text'
                   placeholder='Ponto'
                   onChange={e => setInput({ponto: e.target.value})}
                   error={erros.ponto}
                />

                <ButtonSmall title='Enviar'></ButtonSmall>
            </form>
        </>
    )
}

export default LojistaForm