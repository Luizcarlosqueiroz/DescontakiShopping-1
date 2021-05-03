import React from 'react';

import {EditOutlined} from '@ant-design/icons';
import ButtonSmall from '../ButtonSmall';

import './index.css';

const CupomDisplay = () => {

    let cupomTitle = "X% test discount";
    let cupomStore = "Test Company";
    let cupomDescription = "This is a test desciption";

    let totalCupomDisponível = "number";
    let totalCupomUtilizado = "number2";

    let cupomStatus = "Active";

    return (
        <div className="container">
            <div className="cupomInfo">
                <h3>{cupomTitle}</h3>
                <p>{cupomStore}</p>
                <p>{cupomDescription}</p>
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
            </div>

            <div>
                
                <EditOutlined />

                <ButtonSmall title={cupomStatus} />

            </div>

        </div>
    )
}

export default CupomDisplay;