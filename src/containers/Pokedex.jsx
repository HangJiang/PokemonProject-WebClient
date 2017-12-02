import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Pokemondex from './Dex/Pokemondex';
import MoveDex from './Dex/MoveDex';
import AbilityDex from './Dex/AbilityDex';
import ItemDex from './Dex/ItemDex';

class Pokedex extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/dex/pokemondex"><button>宝可梦</button></Link>
                    <Link to="/dex/moves"><button>招式</button></Link>
                    <Link to="/dex/abilities"><button>特性</button></Link>
                    <Link to="/dex/items"><button>道具</button></Link>
                </div>
                <div>
                    <Switch>
                        <Route exact path="/dex/pokemondex" component={Pokemondex} />
                        <Route exact path="/dex/moves" component={MoveDex} />
                        <Route exact path="/dex/abilities" component={AbilityDex} />
                        <Route exact path="/dex/items" component={ItemDex} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Pokedex;