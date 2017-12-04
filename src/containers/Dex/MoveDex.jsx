import React, { Component } from 'react';
import MoveList from "../../components/Moves/MoveList";
import MovesSearchBar from '../../components/Moves/MovesSearchBar';
import { Moves } from '../../mockdata/moves.js';

class MoveDex extends Component {
    state = {}
    render() {
        return (
            <div>
                <MovesSearchBar />
                <MoveList moves={Moves} />
            </div>

        );
    }
}

export default MoveDex;