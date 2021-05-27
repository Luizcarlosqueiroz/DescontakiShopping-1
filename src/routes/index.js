import React from 'react';

import Menu from '../pages/Home';
import ListaCupons from '../pages/Cupons';
import AdicionarNovoCupom from '../pages/AdicionarCupom';
import Relatorios from '../pages/Relatorios';
import CadastrarLojista from '../pages/CadastrarLojista'

import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Menu} />
                    <Route path="/gestaodecupons" component={ListaCupons} />
                    <Route path="/adicionarnovocupom" component={AdicionarNovoCupom} />
                    <Route path="/relatorios" component={Relatorios} />
                    <Route path="/cadastrarLojista" component={CadastrarLojista} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes;