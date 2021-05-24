import React from 'react';

import Chart from "react-google-charts";

import Information from "../../info-json-relatorio1";

const GraphLojas = () => {

    return(
        <div>
            <Chart 
                chartType="Bar"
                data={Information}
            />
        </div>
    )
}

export default GraphLojas;