/**
 * @Author: Created by wanzhichao on 2017/2/16.
 * @Mail: wanzhichao@jd.com
 */

//常用方法库

//校验是否是数组
const checkArray = (inputStr) => {
    let tempArr = inputStr.split(","),
        resultArr = [],
        isArr = true
    tempArr.forEach(function(item,i){
        let itemVal = parseFloat(item.trim())
        //console.log(isNaN(itemVal))
        if(!isNaN(item) && !isNaN(itemVal)){
            resultArr[i] = itemVal
        }else{
            isArr = false
        }
    })
    return isArr ? resultArr : false;
}
/*2,3,1,123,141,51*/
export default {
    checkArray
}