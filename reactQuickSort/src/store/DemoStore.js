/**
 * @Author: Created by wanzhichao on 2017/2/16.
 * @Mail: wanzhichao@jd.com
 */
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers/DemoReducers'

//生成store
const finalCreactStore = applyMiddleware(thunk)(createStore);
const store = finalCreactStore(reducer);
export default store;