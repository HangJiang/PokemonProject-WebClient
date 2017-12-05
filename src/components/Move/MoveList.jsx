import React, { Component } from 'react';

const MoveListItem = ({move}) => {
    return (
        <div>{move.name}</div>
    );

}


class MoveList extends Component {
    state = {  }
    render() {
        return (
            <div>
            {this.props.moves.map(item => {
                return <MoveListItem key={item.id} move={item}></MoveListItem>
            })}
            </div>
        );
    }
}

export default MoveList;