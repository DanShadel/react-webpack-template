import React from 'react';
import { Switch, Route } from "react-router";
import Home from './Home';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            {/* <Route path='/someRoute'>
                <someComponent />
            </Route> */}
        </Switch >
    )
}
