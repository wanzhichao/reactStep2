import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

//Loading组件
export default class Loading extends Component{
    constructor(props){
        super(props);
    }
    static propTypes = {
        //样式
        loadingClass: PropTypes.string
    };
    //默认props
    static defaultProps = {
        loadingClass: ''
    };
    render(){
        let {loadingClass} = this.props;
        return <div>
            <div className={classNames("loading abs-mm", loadingClass)}>
                <img src="../../../images/loading1.png" className="loading-img" alt=""/>
            </div>
        </div>
    }
}
