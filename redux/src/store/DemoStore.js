/**
 * @Author: Created by wanzhichao on 2016/7/28.
 * @Mail: wanzhichao@jd.com
 */
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers/demoReducers'
const finalCreactStore = applyMiddleware(thunk)(createStore);
const store = finalCreactStore(reducer);
export default store;