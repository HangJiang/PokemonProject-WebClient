import React, { Component } from 'react';

const AbilityListItem = ({ability}) => {
    return (
        <div>{ability.name}</div>
    );

}

class AbilityList extends Component {
    state = {  }
    render() {
        return (
            <div>
            {this.props.abilities.map(item => {
                return <AbilityListItem key={item.id} ability={item}></AbilityListItem>
            })}
            </div>
        );
    }
}

export default AbilityList;