import React, { Component } from 'react';
import HeaderBar from './components/Header/HeaderBar';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import DamageCalc from './containers/DamageCalc';
import Pokedex from './containers/Pokedex';
import Teambuilder from './containers/Teambuilder';

const routes = [
  {
    name: "首页",
    path: "/home"
  },
  {
    name: "图鉴",
    path: "/dex"
  },
  {
    name: "队伍编辑",
    path: "/teambuilder"
  },
  {
    name: "伤害计算",
    path: "/damagecalc"
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <HeaderBar routes={routes} />
        </header>
        <div>
          <Switch>
            <Route  path="/home" component={Home} />
            <Route  path="/dex" component={Pokedex} />
            <Route  path="/teambuilder" component={Teambuilder} />
            <Route  path="/damagecalc" component={DamageCalc} />
          </Switch>
        </div>
        <footer>Created by JiangHang</footer>
      </div>
    );
  }
}

export default App;
