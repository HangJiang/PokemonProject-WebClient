import React, { Component } from 'react';
import ItemList from '../../components/Item/ItemList';
import { Items } from '../../mockdata/items.js';
class ItemDex extends Component {
    state = {  }
    render() {
        return (
            <ItemList items={Items} />
        );
    }
}

export default ItemDex;