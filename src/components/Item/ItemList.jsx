import React, { Component } from 'react';

const ItemListItem = ({item}) => {
    return (
        <div>{item.name}</div>
    );
}

class ItemList extends Component {
    state = {  }
    render() {
        return (
            <div>
            {this.props.items.map(item => {
                return <ItemListItem key={item.id} item={item}></ItemListItem>
            })}
            </div>
        );
    }
}

export default ItemList;