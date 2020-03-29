import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from './components/Index';
import Details from './components/Details';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/covid19" component={Index} />
            <Route path="/details/:id" component={Details} />
            <Route component={Index} />
        </Switch>
    )
}
