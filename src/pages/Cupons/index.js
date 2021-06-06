import React from 'react';
import CupomMap from '../../components/CupomDisplayMap'
import MenuSide from '../../components/MenuLateral';
import { RiAddCircleLine } from 'react-icons/ri';

import { Link } from 'react-router-dom';

import './index.css';

const ListaCupons = () => {

    return(

        <div>

            <div id="btnAdd">
                <Link to="/adicionarnovocupom">
                    <RiAddCircleLine color="#fa4505" size="2.8em" titile="Adicionar Cupom"/>
                </Link>
            </div>

            <MenuSide />
            
            <div id="container">                
                <h1>Gestão de Cupons</h1>
                <CupomMap />
            </div>

        </div>

    );

}

export default ListaCupons;