import React, { useState } from 'react';
import Input from '../InputRegisterShop'
import ButtonSmall from '../ButtonSmall'
import {LojistaFormValidation} from './formValidation'
import useValidation from './hooks/useValidation'
import { Link } from 'react-router-dom';
import './index.css'

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
        <div className='div-form-lojista'>
            <h3 className="h3-form-lojista">Preencha os campos para cadastrar o Lojista</h3>
            <form className='form-lojista'>
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

                <div className="form-cadastrar-lojista-buttons">
                    <ButtonSmall title="Enviar" calltoAction />
                    <Link to="/">
                        <ButtonSmall title="Cancelar" />
                    </Link>

                </div>
            </form>
        </div>
    )
}

export default LojistaForm