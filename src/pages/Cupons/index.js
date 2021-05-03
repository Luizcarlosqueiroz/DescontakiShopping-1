import React from 'react';
import CupomDisplay from '../../components/CupomDisplay';

import './index.css';

const ListaCupons = () => {

    return(
        <div id="container">
            {/* MENU LATERAL */}
            
            <h1>Cupons</h1>
            <CupomDisplay />

        </div>
    );

}

export default ListaCupons;