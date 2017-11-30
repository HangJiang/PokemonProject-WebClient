import React, { Component } from 'react';
import DexList from '../components/Dex/DexList'

const Pokemons = [
    {
        pmid : 1,
        dexNo : "1",
        nameCN : "妙蛙种子"
    },
    {
        pmid : 2,
        dexNo : "2",
        nameCN : "妙蛙草"
    },
]

class Pokedex extends Component {
    state = {  }
    render() {
        return (
            <DexList list={Pokemons}></DexList>
        );
    }
}

export default Pokedex;