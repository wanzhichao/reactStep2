import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

//Label组件
export default class Label extends Component{
    constructor(props){
        super(props);
    }
    static propTypes = {
        //内容
        content: PropTypes.string,
        //样式
        labelClass: PropTypes.string
    };
    //默认props
    static defaultProps = {
        labelClass: '',
        content: '这是一个标题'
    };
    render(){
        let {content, labelClass} = this.props;
        return <p className={classNames('caution-txt size12r text-gray', labelClass)}> {content} </p>
    }
}
