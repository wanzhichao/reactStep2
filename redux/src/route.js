/**
 * @Author: Created by wanzhichao on 2016/7/27.
 * @Mail: wanzhichao@jd.com
 */
import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory,browserHistory} from 'react-router'
import Index from "./index"
import '../css/scss/reset.scss'
import '../css/scss/style.scss'
render((
    <Router history={hashHistory}>
        <Route path="/" >
            <IndexRoute component={Index}/>
        </Route>
    </Router>
), document.getElementById("react-cont"));