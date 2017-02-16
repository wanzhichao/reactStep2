/**
 * @Author: Created by wanzhichao on 2017/2/16.
 * @Mail: wanzhichao@jd.com
 */

//排序算法

const swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
//获取下一个比较值
const getNextIndex = (arr, leftVal ,rightVal)=> {
    let curIndex = leftVal,
        tarIndex = curIndex + 1

    for(let i = tarIndex; i <= rightVal; i++){
        if(arr[i] < arr[curIndex]) {
            swap(arr, i, tarIndex)
            tarIndex++
        }
    }
    swap(arr, curIndex, tarIndex-1)
    return tarIndex-1
}
const quickSort = (sortArr,left,right) => {
    if(sortArr.length <= 1) return sortArr
    let len = sortArr.length,
        nextIndex
        left = typeof left != 'number' ? 0 : left
        right = typeof right != 'number' ? len - 1 : right
    //console.log(right)
    if(left < right){
        nextIndex = getNextIndex(sortArr, left, right)
        //console.log(sortArr)
        quickSort(sortArr, left, nextIndex-1);
        quickSort(sortArr, nextIndex+1, right);
    }

    return sortArr;
}

export default {
    quickSort
}