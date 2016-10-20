/**
 * @Author: Created by wanzhichao on 2016/7/28.
 * @Mail: wanzhichao@jd.com
 */
import React, {Component} from 'react'
import { connect } from 'react-redux'
import {deleteData} from '../actions/demoAction';
class List extends Component{
    render() {
        const {dispatch} = this.props;
        return <p className="pt15 pb15">{this.props.data.text}<span onClick={() => dispatch(deleteData({id:this.props.id}))} className="fr btn-del">删除</span></p>
    }
}
function select(state){
    return {
        myData: state.getData
    }
};
export default connect(select)(List);