import React from 'react';
import {IndexLink,Link} from 'react-router'

export default React.createClass({
    render(){
        return (
            <div>
                <h1>React Components</h1>
                <ul role="nav">
                    <li><Link to="/label" activeClassName="active">Label</Link></li>
                    <li><Link to="/protocol" activeClassName="active">Protocol</Link></li>
                    <li><Link to="/loading" activeClassName="active">Loading</Link></li>
                </ul>
            </div>
        )
    }
})