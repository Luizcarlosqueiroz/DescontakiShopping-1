import React from 'react';

import Menu from '../pages/Home';
import ListaCupons from '../pages/Cupons';
import AdicionarNovoCupom from '../pages/AdicionarCupom'
import CadastrarLojista from '../pages/CadastrarLojista'

import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Menu} />
                    <Route path="/GestaodeCupons" component={ListaCupons} />
                    <Route path="/AdicionarNovoCupom" component={AdicionarNovoCupom} />
                    <Route path="/CadastrarLojista" component={CadastrarLojista} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes;