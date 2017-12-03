import React, { Component } from 'react';
import HeaderBtn from './HeaderBtn';
import { Link } from 'react-router-dom';

class HeaderBar extends Component {
    state = {}
    render() {
        const { routes } = this.props;
        return (
            <div>
                {routes.map((item) => {
                    return (<Link to={item.path}><HeaderBtn name={item.name} key={item.path}></HeaderBtn></Link>);
                })}
            </div>
        );
    }
}
export default HeaderBar;