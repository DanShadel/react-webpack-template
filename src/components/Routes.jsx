import React from 'react';
import { Switch, Route } from "react-router";
import Authorize from './Authorize.jsx';
import Playlists from './Playlists.jsx';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Authorize />
            </Route>
            <Route path='/playlists'>
                <Playlists />
            </Route>
        </Switch>
    )
}
