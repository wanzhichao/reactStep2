/**
 * @Author: Created by wanzhichao on 2016/7/28.
 * @Mail: wanzhichao@jd.com
 */
import fetch from 'isomorphic-fetch';
export const UPDATE_TYPE = {
    READY: "READY",
    RUNNING: "RUNNING",
    COMPLETED: "COMPLETED"
}
export const DELETE_DATA = "DELETE_DATA";

//加载完数据之后
function loadAfter(text,json) {
    return {
        type: text,
        json
    }
}
//模拟用户操作-选择状态
export function updateData(text) {

    return (dispatch)=>
{       //加载数据
        fetch('../../data/data.json')
            .then(response => response.json())
            .then(json => dispatch(loadAfter(text,json))
            )
    }
}
//删除数据
export function deleteData(filter) {
    return {
        type: DELETE_DATA,
        filter
    }
}