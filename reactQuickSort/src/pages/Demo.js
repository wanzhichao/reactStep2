/**
 * @Author: Created by wanzhichao on 2017/2/16.
 * @Mail: wanzhichao@jd.com
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import SortInput from '../components/SortInput/SortInput';
import {sortArr} from '../actions/demoAction';
import commonFuns from '../utils/CommonFuns'
import '../../css/pages/demo.scss'
class Demo extends  Component{
    clickSort = (val) => {
        const { dispatch } = this.props
        let resultArr = commonFuns.checkArray(val)
        if(resultArr){
            dispatch(sortArr(resultArr))
        }
    }
    inputCheck(val){
        return commonFuns.checkArray(val) ? true: false
    }
    render() {
        return <div className="plr15">
            <p className="demo-title ta-c size30">来这里进行快速排序哦~</p>
            <div className="mt20">
                <SortInput placeTxt="请输入数组格式数据，如:1,4,3,2,5" btnTxt="进行排序" errorTxt="抱歉，数据格式校验不正确"
                           sortHandler={this.clickSort}
                           inputCheck={this.inputCheck}></SortInput>
            </div>
            <p className="sort-result">排序结果为:{this.props.resultArr.toString()}
            </p>
        </div>
    }
}
function select(state){
    return {
        resultArr: state.sortArr
    }
};
export default connect(select)(Demo);