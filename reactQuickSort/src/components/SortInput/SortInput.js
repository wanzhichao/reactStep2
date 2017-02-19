/**
 * @Author: Created by wanzhichao on 2017/2/16.
 * @Mail: wanzhichao@jd.com
 */
import React, {Component} from 'react'
import './index.scss'
//带按钮的输入框组件,可用于其他搜索等功能
export default class SortInput extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputVal: '',
            showError: false
        }
    }
    static defaultProps = {
        placeTxt:"请输入数组格式数据，如:1,4,3,2,5",
        btnTxt: "进行排序"
    }
    static propTypes = {
        placeTxt: React.PropTypes.string,
        btnTxt: React.PropTypes.string,
        sortHandler: React.PropTypes.func,
        inputCheck: React.PropTypes.func,
        errorTxt: React.PropTypes.string
    }
    clickHandler = () => {
        if(!this.state.showError){
            this.props.sortHandler(this.state.inputVal)
        }
    }
    inputHandler = (e) => {
        //校验输入格式
        let tarVal = e.target.value
        this.setState({
            inputVal: tarVal
        })
        if(this.props.inputCheck(tarVal)){
            this.setState({ showError:false })
        }else{
            this.setState({ showError:true })
        }
    }
    render() {
        const {placeTxt, btnTxt, errorTxt} = this.props
        return <div className="sort-box">
            <input type="text" ref="myInput" className="sort-input" onInput={this.inputHandler} placeholder={placeTxt}/>
            <p className="abs-rm sort-btn" onClick={this.clickHandler}>{btnTxt}</p>
            <p className="sort-error">{this.state.showError ?　errorTxt : ''}</p>
        </div>
    }
}