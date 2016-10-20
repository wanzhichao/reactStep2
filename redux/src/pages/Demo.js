/**
 * @Author: Created by wanzhichao on 2016/7/28.
 * @Mail: wanzhichao@jd.com
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import List from '../components/List';
import {updateData, UPDATE_TYPE, deleteData} from '../actions/demoAction';
class Demo extends  Component{
    render() {
       const {dispatch, myData} = this.props;
        return <div>
            <div className="nav flexbox size16 ta-c">
                <div className="nav-box flexbox-item" onClick = {() => dispatch(updateData(UPDATE_TYPE.READY))}>
                    <p className="nav-item">未开始</p>
                </div>
                <div className="nav-box flexbox-item"  onClick = {() => dispatch(updateData(UPDATE_TYPE.RUNNING))}/*{() => dispatch(deleteData({id:1}))}*/>
                    <p className="nav-item">运行中</p>
                </div>
                <div className="nav-box flexbox-item"  onClick = {() => dispatch(updateData(UPDATE_TYPE.COMPLETED))}>
                    <p className="nav-item">已完成</p>
                </div>
            </div>
            <div className="cont size16">
                {myData.map(function(ele){
                   return <List data={ele} key={ele.id} id={ele.id}></List>
            })}
            </div>
        </div>
    }
}
function select(state){
  return {
      myData: state.getData
  }
};
export default connect(select)(Demo);