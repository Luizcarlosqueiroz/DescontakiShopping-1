import React from 'react'

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import Information from '../../components/info-json-relatorio1';

import GraficoLojistaCategoria from '../../components/Graficos/GrLojaCategoria';

import GraphLojas from '../../components/Graficos/GraphLojas';

const Relatorios = () => {

    return (
        <div>

            <h1>Relatórios</h1>

            {/* <GraficoLojistaCategoria />

            <LineChart width={600} height={300} data={Information} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="tipoLoja" />
                <YAxis dataKey="vendas"/>
                <Tooltip />
            </LineChart> */}

            <GraphLojas />

        </div>
    )

}

export default Relatorios;