import React from 'react';
import CupomDisplay from '../../components/CupomDisplay';
import MenuSide from '../../components/MenuLateral';

import './index.css';

const ListaCupons = () => {

    return(

        <div>
            <MenuSide />
            <div id="container">
                {/* MENU LATERAL */}
                
                <h1>Cupons</h1>
                <CupomDisplay />

            </div>
        </div>

    );

}

export default ListaCupons;