/**
 * @Author: Created by wanzhichao on 2017/2/16.
 * @Mail: wanzhichao@jd.com
 */
import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory, Redirect} from 'react-router'
import Index from "./index"
//路由-其实可以配置延迟加载路由，但项目太小了，于是取消了
//错误页处理 跳转 sort
render((
    <Router history={hashHistory}>
        <Route path="/" >
            <Route path="sort" component={Index}/>
            <Redirect from="*" to="/sort"></Redirect>
        </Route>
    </Router>
), document.getElementById("react-cont"));