import React from 'react';
import { Switch, Route } from "react-router";
import Authorize from './Authorize.jsx';
import Playlists from './Playlists.jsx';
import Analysis from './Analysis.jsx';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Authorize />
            </Route>
            <Route path='/playlists'>
                <Playlists />
            </Route>
            <Route path='/analysis'>
                <Analysis />
            </Route>
        </Switch >
    )
}
