import React, { useState } from 'react';
import ButtonSmall from '../ButtonSmall'
import Input from '../Input';
import FormValidations from './formValidation'
import useValidation from './hooks/useValidation';
import { Link } from 'react-router-dom';
import './style.css';


const initialFormState = {
    dataInicial: new Intl.DateTimeFormat('en-GB').format(new Date()),
    validade:'',
    quantidade: '',
    valor:'',
    titulo:'',
    descricao:'',
    categogia: null,
    loja: {
        id: 1,
        cnpj: '',
        nome: '',
        ponto: ''
    }
}

const CupomForm = () => {

    const [form, setForm] = useState(initialFormState);
    const { errors, invalid } = useValidation(form, FormValidations);

    const setInput = (newValue) => {
        setForm( form => ({...form, ...newValue }));
    }

    const testtest = () => {
        console.log(form);
    }

    const handleSubmit = () => {

        const requestOptions = {
            method: 'post',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers:{
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(form)     
        }


        fetch("http://pblelcoma-final.herokuapp.com/cupons", requestOptions)
            .then( function (res) {
                if(!res.ok) {
                    throw Error(res.statusText)
                }})
            .catch(function(error){
                console.log(error);
            })

    }

    const formData = [];

    const submitForm = () => {
        if (localStorage.getItem('formData') != null) {
            formData = JSON.parse(localStorage.getItem('formData'));
        }
        formData.push(form);
        localStorage.setItem('formData', JSON.stringify(formData));
    }

    return (
        <div className="AddCupomForm">
            <form>
                <Input
                    name="titulo"
                    id="titulo"
                    type="text"
                    placeholder="Título do Cupom"
                    onChange={e => setInput({titulo: e.target.value})}
                    error={errors.titulo}
                    height="100px"
                />
                <Input
                    name="descricao"
                    id="descricao"
                    type="text"
                    placeholder="Descrição"
                    onChange={e => setInput({descricao: e.target.value})}
                    error={errors.descricao}
                />
                <Input
                    name="validade"
                    id="validade"
                    type="date"
                    placeholder="Data de Validade"
                    onChange={e => setInput({validade: e.target.value})}
                    error={errors.validade}
                />
                <Input
                    name="valor"
                    id="valor"
                    type="text"
                    placeholder="Valor"
                    onChange={e => setInput({valor: e.target.value})}
                    error={errors.valor}
                />
                <Input
                    name="idLoja"
                    id="idLoja"
                    type="text"
                    placeholder="Código da Loja"
                    onChange={e => setInput({loja: e.target.value})}
                    error={errors.idLoja}
                />
                <Input
                    name="nomeLoja"
                    id="nomeLoja"
                    type="text"
                    placeholder="Nome da Loja"
                    onChange={e => setInput({nomeLoja: e.target.value})}
                    error={errors.nomeLoja}
                />
                

                <div className="addCupomButtons">
                <button onClick={submitForm}>test</button>

                    <button >Submit</button>
                    <ButtonSmall title="Enviar" calltoAction />
                    <Link to="/gestaodecupons">
                        <ButtonSmall title="Cancelar" />
                    </Link>
                </div>

                <p className="result"></p>

            </form>
        </div>
    )

}

export default CupomForm;
