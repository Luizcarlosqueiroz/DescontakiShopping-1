import React from 'react';

import Menu from '../pages/Home';
import ListaCupons from '../pages/Cupons';

import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Menu} />
                    <Route path="/cupons" component={ListaCupons} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes;