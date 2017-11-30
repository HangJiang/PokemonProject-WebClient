import React, { Component } from 'react';




class DexList extends Component {
    state = {  }
    render() {
        return (
            <ul>
                {this.props.list.map((item) => {
                    return <li>{item.nameCN}</li>
                })}
            </ul>
        );
    }
}

export default DexList;