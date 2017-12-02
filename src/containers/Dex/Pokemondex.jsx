import React, { Component } from 'react';
import DexList from '../../components/Dex/DexList'
import SearchBar from '../../components/Dex/SearchBar';

const Pokemons = [
    {
        pmid: 1,
        dexNo: "1",
        nameCN: "妙蛙种子"
    },
    {
        pmid: 2,
        dexNo: "2",
        nameCN: "妙蛙草"
    },
]

class Pokemondex extends Component {
    state = {islist : false}
    showListOrCard = () => {
        this.setState({islist : !this.state.islist})
    }
    render() {
        return (
            <div>
                <SearchBar changeListOrCard={this.showListOrCard}></SearchBar>
                <DexList list={Pokemons} islist={this.state.islist}></DexList>
            </div>
        );
    }
}

export default Pokemondex;