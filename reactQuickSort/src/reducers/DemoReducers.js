/**
 * @Author: Created by wanzhichao on 2017/2/16.
 * @Mail: wanzhichao@jd.com
 */
import { QUICK_SORT} from '../actions/demoAction';
import { combineReducers } from 'redux';
import sortFuns from '../utils/SortFuns'
let data = {
    sortResult: []
};

//处理action
const sortArr = (state = data, action) => {
    switch (action.type) {
        case QUICK_SORT:
            return sortFuns.quickSort(action.arr);
        default:
            return data.sortResult;
    }
}
//组合reducer--虽然这里只有一个，意思意思
const demoApp = combineReducers({
    sortArr
});
export default demoApp;