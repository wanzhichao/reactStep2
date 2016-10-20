/**
 * @Author: Created by wanzhichao on 2016/7/28.
 * @Mail: wanzhichao@jd.com
 */
import { UPDATE_TYPE, DELETE_DATA } from '../actions/demoAction';
import { combineReducers } from 'redux';

let data = {
    READY: [
        {id:1,text:"苹果"},
        {id:2,text:"香蕉"},
        {id:3,text:"橘子"}
    ],
    RUNNING: [
        {id:4,text:"火龙果"},
        {id:5,text:"橙子"}
    ],
    COMPLETED: [
        {id:6,text:"柠檬"},
        {id:7,text:"哈密瓜"},
        {id:8,text:"榴莲"},
        {id:9,text:"芒果"}
    ]
};
//处理action
function getData( state, action){
    switch (action.type) {
        case UPDATE_TYPE.READY:
            return data.READY;
        case UPDATE_TYPE.RUNNING:
            return action.json.RUNNING;
        case UPDATE_TYPE.COMPLETED:
            return action.json.COMPLETED;
        case DELETE_DATA:
            return deleteData(state, action.filter);
        default:
            return data.READY;
    }
}

function deleteData(state,filter) {
    let newArr = [];
    state.forEach(function(ele){
        if(ele.id != filter.id) {
            newArr.push(ele);
        }
    });
    return newArr;
}
//组合reducer
const demoApp = combineReducers({
    getData
});
export default demoApp;