import React, { useState } from 'react';
import ButtonSmall from '../ButtonSmall'
import Input from '../Input';
import FormValidations from './formValidation'
import useValidation from './hooks/useValidation';
import { Link } from 'react-router-dom';
import './style.css';


const initialFormState = {
    titulo:'',
    descricao:'',
    validade:'',
    valor:'',
    idLoja:'',
    nomeLoja:''
}

const CupomForm = () => {

    const [form, setForm] = useState(initialFormState);
    const { errors, invalid } = useValidation(form, FormValidations);

    const setInput = (newValue) => {
        setForm( form => ({...form, ...newValue }));
    }

    // https://www.geeksforgeeks.org/how-to-send-a-json-object-to-a-server-using-javascript/
    const postCupomToAPI = () => {
        let result = document.querySelector('.result');
        let titulo = document.querySelector('#titulo');
        let descricao = document.querySelector('#descricao');
        let validade = document.querySelector('#validade');
        let valor = document.querySelector('#valor');
        let idLoja = document.querySelector('#idLoja');
        let nomeLoja = document.querySelector('#nomeLoja');
        
        let xhr = new XMLHttpRequest();
        let url = "";

        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                result.innerHTML = this.responseText;
            }
        };

        var data = JSON.stringify({
            "titulo": titulo.value, 
            "descricao": descricao.value, 
            "validade": validade.value, 
            "valor": valor.value, 
            "idLoja": idLoja.value, 
            "nomeLoja": nomeLoja.value})

        xhr.send(data);
    }

    // const submitForm = () => {
    //     if (localStorage.getItem('formData') != null) {
    //         formData = JSON.parse(localStorage.getItem('formData'));
    //     }
    //     formData.push(form);
    //     localStorage.setItem('formData', JSON.stringify(formData));
    //     document.getElementById("newRegister").reset();
    // }

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
                    onChange={e => setInput({idLoja: e.target.value})}
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
                    <ButtonSmall title="Enviar" onClick={postCupomToAPI()} disabled={invalid} calltoAction />
                    <Link to="/gestaodecupons">
                        <ButtonSmall title="Cancelar" />
                    </Link>

                </div>

                <p class="result"></p>

            </form>
        </div>
    )

}

export default CupomForm;
