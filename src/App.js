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
    path: "home"
  },
  {
    name: "图鉴",
    path: "pokemondex"
  },
  {
    name: "队伍编辑",
    path: "teambuilder"
  },
  {
    name: "伤害计算",
    path: "damagecalc"
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <header style={{border : "2px solid red"}}>
          <HeaderBar routes={routes} />
        </header>
        <div style={{border : "2px solid red"}}>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/pokemondex" component={Pokedex} />
            <Route exact path="/teambuilder" component={Teambuilder} />
            <Route exact path="/damagecalc" component={DamageCalc} />
          </Switch>
        </div>
        <footer style={{ border : "2px solid red"}}>Created by JiangHang</footer>
      </div>
    );
  }
}

export default App;
