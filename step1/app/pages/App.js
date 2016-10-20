import React from 'react'
import {IndexLink,Link} from 'react-router'
import Home from './Home'

export default React.createClass({
    render() {
        return <div>
            {this.props.children}
        </div>
    }
})