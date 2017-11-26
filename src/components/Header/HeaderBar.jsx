import React, { Component } from 'react';
import HeaderBtn from './HeaderBtn';
class HeaderBar extends Component {
    state = {}
    render() {
        const { routes } = this.props;
        return (
            <div>
                {routes.map((item) => {
                    return <HeaderBtn path={item.path} name={item.name} key={item.path}></HeaderBtn>;
                })}
            </div>
        );
    }
}

export default HeaderBar;