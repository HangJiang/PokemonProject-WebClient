import React from 'react';

const MoveListItem = ({move}) => {
    console.log(move.name)
    return (
        <div>{move.name}</div>
    );

}

export default MoveListItem;