import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

//阅读协议组件
export default class Protocol extends Component{
    constructor(props){
        super(props);
        this.state = {
            checked: this.props.checked
        }
    }
    clickHandler = () => {
        let newState = {
            checked: !this.state.checked
        };
        let {clickCheckbox} = this.props;
        this.setState(newState);
        clickCheckbox && clickCheckbox();
    };
    static propTypes = {
        //内容
        content: PropTypes.string,
        //样式
        labelClass: PropTypes.string,
        //是否选中
        checked: PropTypes.bool
    };
    //默认props
    static defaultProps = {
        labelClass: '',
        content: '我已阅读《京东快捷支付协议》',
        checked: true
    };
    render(){
        let {content, labelClass} = this.props,
            checked = this.state.checked;

        return <p onClick={this.clickHandler} className={classNames("order-footer text-gray size12r", labelClass ,{"no-checked" : !checked})}>
            {content} </p>
    }
}
