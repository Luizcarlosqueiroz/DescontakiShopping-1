import React, { useState, useEffect } from 'react';

import ButtonSmall from '../ButtonSmall'
import Input from '../Input';
import FormValidations from './formValidation'
import useValidation from './hooks/useValidation';

import { Link } from 'react-router-dom';
import moment from 'moment';
import { toast } from 'react-toastify';

import './style.css';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const initialFormState = {
    dataInicial: moment(new Date()).format("DD/MM/YYYY"),
    validade:'',
    quantidade: '',
    valor:'',
    titulo:'',
    descricao:'',
    categogia: null,
    loja: ''
}

const initialFormStateLojista = {
    id: '',
}

const CupomForm = () => {

    const [form, setForm] = useState(initialFormState);
    const [formLojista, setFormLojista] = useState(initialFormStateLojista);
    const { errors, invalid } = useValidation(form, FormValidations);

    const setInput = (newValue) => {
        setForm( form => ({...form, ...newValue }));
    }

    const setInputLojista = (newValue) => {
        setFormLojista(formLojista => ({...formLojista, ...newValue}));
    }

    const handleSubmit = (event) => {

        form.loja = formLojista;

        form.validade = moment(form.validade).format("DD/MM/YYYY");

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


        fetch("https://pblelcoma-final.herokuapp.com/cupons", requestOptions)
            .then( function (res) {
                console.log(res.status);
                if(res.status == 201) {
                    toast.success('Cupom cadastrado com sucesso!', {
                        position: 'top-right',
                        autoClose: 5000,
                    })
                } else {
                    toast.error('Aconteceu algo de errado.', {
                        position: 'top-right',
                        autoClose: 5000,
                    })
                }})
            .catch(function(error){
                console.log(error);
            })
        
        event.preventDefault();

    }

    let formData = [];

    const submitForm = () => {
        form.loja = formLojista;

        form.validade = moment(form.validade).format("DD/MM/YYYY HH:mm:ss");

        if (localStorage.getItem('formData') != null) {
            formData = JSON.parse(localStorage.getItem('formData'));
        }
        formData.push(form);
        localStorage.setItem('formData', JSON.stringify(formData));
    }

    return (
        <div className="AddCupomForm">
            <hr />
            <form>
                <br /><label>Título</label>
                <Input
                    name="titulo"
                    id="titulo"
                    type="text"
                    onChange={e => setInput({titulo: e.target.value})}
                    error={errors.titulo}
                    height="100px"
                />
                <br /><label>Descrição</label>
                <Input
                    name="descricao"
                    id="descricao"
                    type="text"
                    onChange={e => setInput({descricao: e.target.value})}
                    error={errors.descricao}
                />
                <br /><label>Data de Validade</label>
                <Input
                    name="validade"
                    id="validade"
                    type="date"
                    onChange={e => setInput({validade: e.target.value})}
                    error={errors.validade}
                />
                <br /><label>Desconto (%)</label>
                <Input
                    name="valor"
                    id="valor"
                    type="text"
                    onChange={e => setInput({valor: e.target.value})}
                    error={errors.valor}
                />
                <br /><label>Código Loja</label>
                <Input
                    name="idLoja"
                    id="idLoja"
                    type="text"
                    onChange={e => setInputLojista({id: e.target.value})}
                    error={errors.idLoja}
                />                

                <div className="addCupomButtons">

                    <ButtonSmall handlerButton={handleSubmit} title="Enviar" calltoAction />
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
