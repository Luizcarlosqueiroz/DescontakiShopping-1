import React from 'react'

import CupomForm from '../../components/AddCupomForm'
import { RiArrowGoBackFill} from 'react-icons/ri';

import { Link } from 'react-router-dom';

import './style.css';

const AdicionarNovoCupom = () => {

    return (
        <>
            <div id="btnRtn">
                <Link to="/gestaodecupons">
                    <RiArrowGoBackFill color="#fa4505" size="2.3em" titile="Retornar" />
                </Link>
            </div>

            <div className="addCupom">
                <h1>Adicionar Cupom</h1>
                <div className="addForm">
                    <CupomForm />
                </div>
            </div>
        </>
    )
}

export default AdicionarNovoCupom;
