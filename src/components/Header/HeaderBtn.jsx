import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class HeaderBtn extends Component {

    handleClick = () => {
        //this.props.history.push(this.props.path)
    }

    render() {
        const { path, name } = this.props;
        return (
            <Link to={path}>
                <button onClick={this.handleClick}>{name}</button>
            </Link>
        );
    }
}

export default HeaderBtn;