import React, { Component } from 'react';
import DexList from '../../components/Dex/DexList'
import SearchBar from '../../components/Dex/SearchBar';

import { Pokemons } from '../../mockdata/pokemons.js';

class Pokemondex extends Component {
    state = {islist : false}
    showListOrCard = () => {
        this.setState({islist : !this.state.islist})
    }
    render() {
        return (
            <div>
                <SearchBar changeListOrCard={this.showListOrCard} islist={this.state.islist}></SearchBar>
                <DexList list={Pokemons} islist={this.state.islist}></DexList>
            </div>
        );
    }
}

export default Pokemondex;