import React, { Component } from 'react';
import { Abilities } from '../../mockdata/abilities.js';
import AbilityList from '../../components/Ability/AbilityList';

class AbilityDex extends Component {
    state = {  }
    render() {
        return (
            <AbilityList abilities={Abilities}/>
        );
    }
}

export default AbilityDex;