import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, Link, useRouterHistory,hashHistory,browserHistory} from 'react-router'
import { createHistory } from 'history'

import App from "../pages/App"
import Home from "../pages/Home"
import Label from "../view/Label"
import Protocol from "../view/Protocol"
import Loading from "../view/Loading"

const appHistory = useRouterHistory(createHistory)({
    queryKey: false
})

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/label" component={Label}/>
            <Route path="/protocol" component={Protocol}/>
            <Route path="/loading" component={Loading}/>
        </Route>
    </Router>
), document.getElementById("react-cont"));
