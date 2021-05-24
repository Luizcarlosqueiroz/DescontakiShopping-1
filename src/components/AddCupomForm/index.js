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
        setForm( form => ({... form, ...newValue}));
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
                    type="text"
                    placeholder="Título do Cupom"
                    onChange={e => setInput({titulo: e.target.value})}
                    error={errors.titulo}
                    height="100px"
                />
                <Input
                    name="descricao"
                    type="text"
                    placeholder="Descrição"
                    onChange={e => setInput({descricao: e.target.value})}
                    error={errors.descricao}
                />
                <Input
                    name="validade"
                    type="date"
                    placeholder="Data de Validade"
                    onChange={e => setInput({validade: e.target.value})}
                    error={errors.validade}
                />
                <Input
                    name="valor"
                    type="text"
                    placeholder="Valor"
                    onChange={e => setInput({valor: e.target.value})}
                    error={errors.valor}
                />
                <Input
                    name="idLoja"
                    type="text"
                    placeholder="Código da Loja"
                    onChange={e => setInput({idLoja: e.target.value})}
                    error={errors.idLoja}
                />
                <Input
                    name="nomeLoja"
                    type="text"
                    placeholder="Nome da Loja"
                    onChange={e => setInput({nomeLoja: e.target.value})}
                    error={errors.nomeLoja}
                />
                
                <div className="addCupomButtons">
                    <ButtonSmall title="Enviar" calltoAction />
                    <Link to="/gestaodecupons">
                        <ButtonSmall title="Cancelar" />
                    </Link>

                </div>


            </form>
        </div>
    )

}

export default CupomForm;
