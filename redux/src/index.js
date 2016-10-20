/**
 * @Author: Created by wanzhichao on 2016/7/27.
 * @Mail: wanzhichao@jd.com
 */
import React, {Component} from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Demo from './pages/Demo'
/*import demoApp from './reducers/demoReducers'

let store = createStore(demoApp)*/
import store from './store/DemoStore'

let rootElement = document.getElementById('root')
export  default class Index extends  Component{
    render() {
        return <Provider store={store}>
            <Demo />
        </Provider>
    }
}