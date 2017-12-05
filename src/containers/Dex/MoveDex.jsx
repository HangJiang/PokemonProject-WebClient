import React, { Component } from 'react';
import MoveList from "../../components/Move/MoveList";
import MovesSearchBar from '../../components/Move/MovesSearchBar';
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