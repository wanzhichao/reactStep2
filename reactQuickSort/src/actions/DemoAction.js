/**
 * @Author: Created by wanzhichao on 2017/2/16.
 * @Mail: wanzhichao@jd.com
 */
import fetch from 'isomorphic-fetch'; //虽然这个项目用不到，但是假如拓展的话还是得加上
export const QUICK_SORT = "QUICK_SORT";

export function sortArr(arr){
    return {
        type: QUICK_SORT,
        arr
    }
}