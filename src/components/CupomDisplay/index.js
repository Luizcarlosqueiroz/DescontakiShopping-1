import React from 'react';

import ButtonSmall from '../ButtonSmall';

import './index.css';

const CupomDisplay = () => {

    let cupomTitle = "X% test discount";
    let cupomStore = "Test Company";
    let cupomDescription = "This is a test desciption";

    let totalCupomDisponível = "number";
    let totalCupomUtilizado = "number2";

    let cupomStatus = "Active";
    let cupomEdit = "Edit";

    return (
        <div className="container">
            <div className="cupomInfo">
                <h3>{cupomTitle}</h3>
                <p>{cupomStore}</p>
                <p>{cupomDescription}</p>
            </div>

            <div className="barraLateral">

            </div>
            
            <div className="cupomStats">
                <table>
                    <tr>
                        <th>Total: </th> <th>{totalCupomDisponível}</th>
                    </tr>
                    <tr>
                        <th>Utilizado: </th> <th>{totalCupomUtilizado}</th>
                    </tr>
                </table>


                <ButtonSmall title={cupomEdit} />
                <ButtonSmall title={cupomStatus} calltoAction/>
            </div>

        </div>
    )
}

export default CupomDisplay;