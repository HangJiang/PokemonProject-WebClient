import React, { Component } from 'react';
import MoveListItem from './MoveListItem';
class MoveList extends Component {
    state = {  }
    render() {
        return (
            <div>
            {this.props.moves.map(item => {
                console.log(item)
                return <MoveListItem key={item.id} move={item}></MoveListItem>
            })}
            </div>
        );
    }
}

export default MoveList;