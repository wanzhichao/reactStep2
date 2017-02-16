/**
 * @Author: Created by wanzhichao on 2017/2/16.
 * @Mail: wanzhichao@jd.com
 */
import React, {Component} from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Demo from './pages/Demo'
import store from './store/DemoStore'
import '../css/common/reset.scss'
import '../css/common/common.scss'
//入口
export  default class Index extends  Component{
    render() {
        return <Provider store={store}>
            <Demo />
        </Provider>
    }
}