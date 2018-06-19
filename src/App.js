import React, { Component } from 'react';
import './App.css';
import Betlist from './components/bet_list'
import Scoreboard from './components/scoreboard'

const August = ["August", 1, 2, "x", 1, 1, 1, 2, 2, 2, 1, 1, "x", 1, 2, "x", 1, "x", 1, 1, "x", 1, 1, "x", 1, 2, 1, 1, "x", 1, 1, 2, 1, 1, 2, 2, 1, 2, "x", "x", "x", "x", 2, 2, 1, 2, 1, "x", 2];
const Tobias = ["Tobias", 1, 1, "x", 1, 1, 1, 2, 1, "x", 1, 1, 1, 1, 2, 1, 2, "x", 1, "x", 2, 1, 1, 1, 1, 1, "x", 1, "x", 1, 1, "x", 2, 2, 2, 2, 1, 2, 2, 2, 2, "x", 2, 2, 1, 1, 2, "x", 2];
const Johan = ["Johan", 1,2,1,"x",1,"x",2,1,2,1,"x","x",1,2,"x",2,1,1,1,2,1,1,1,1,2,"x",1,2,1,1,1,1,1,"x",2,1,"x","x",2,1,2,2,2,1,1,2,"x",2];
const Nils = ["Nils", "x",2,"x",1,1,1,2,1,"x",1,1,1,1,2,1,1,2,1,1,2,1,1,1,1,"x",2,1,2,1,1,2,1,1,2,2,1,"x",2,2,2,2,2,2,1,2,"x",2,"x"];
const OttoB = ["Otto B", 1,2,"x",2,1,1,1,"x","x",1,1,1,1,"x",1,2,1,"x",1,2,1,1,1,1,2,"x",1,"x",1,"x",2,2,"x",2,2,1,2,2,2,1,2,2,2,2,"x",2,1,2];
const OttoS = ["Otto S", 1,2,"x",2,3,1,2,2,1,1,1,1,1,2,1,1,2,1,1,2,1,1,1,1,2,1,1,2,1,1,2,"x",1,2,2,1,2,2,2,"x",2,2,2,"x",2,2,"x","x"];
const Anton = ["Anton", 1,2,"x","x",1,1,2,"x",1,1,1,"x",1,2,1,"x","x",1,1,2,1,1,1,1,1,2,1,2,1,1,2,"x",1,2,2,1,2,2,2,2,1,2,2,"x",2,2,"x",2];
const Isak = ["Isak", 1,"x",2,2,1,1,1,1,"x",1,1,1,1,"x","x","x","x",1,1,2,1,1,"x",1,"x",2,1,2,1,1,"x",1,1,2,2,1,"x",2,2,2,"x",2,2,1,2,2,2,2];
const Sebastian = ["Sebastian", 1,2,2,2,1,1,"x",1,"x",1,1,1,1,2,1,1,"x",1,1,2,1,1,1,1,"x",2,1,2,1,1,"x",1,1,2,2,1,2,1,2,2,1,2,2,1,2,2,2,1];
const Petter = ["Petter", 1,1,1,2,1,1,2,1,2,1,1,2,1,1,1,2,2,1,1,2,1,1,1,1,2,1,1,2,1,1,2,2,2,2,2,1,2,1,2,1,1,2,2,2,2,2,1,2];
const Martin = ["Martin", 1,2,1,"x",1,1,"x",1,"x",1,1,"x",1,2,1,1,1,1,1,2,"x",1,1,1,"x","x",1,"x",1,"x","x",2,"x","x",2,1,2,"x",2,"x",2,2,2,"x",2,2,"x",2];
const Kristoffer = ["Kristoffer", 1,2,"x",2,1,1,"x",1,1,1,1,"x",1,2,1,1,"x",1,1,2,1,1,1,1,"x","x",1,"x",1,1,2,2,1,2,2,1,2,2,2,2,1,2,2,2,2,2,1,2];
const Dominique = ["Dominique", 1,2,1,2,1,1,2,"x","x",1,1,1,1,2,1,1,"x",1,1,2,1,1,1,1,2,1,1,2,1,1,"x",1,"x",2,2,1,2,1,2,"x",1,2,2,"x",2,2,1,"x"];
const Adam = ["Adam","x",2,1,1,1,1,2,1,2,1,1,1,1,2,"x",1,"x",1,1,2,"x",1,"x",1,"x",1,1,"x",1,1,"x",1,1,2,2,1,2,2,2,"x",2,2,2,"x",2,"x",2,2];
const facit = ["Facit", 1,2,2,"x",1,"x",2,1,2,2,"x",1,1,2,2,2,1]
const competitors = [August, Tobias, Johan, Nils, OttoB, OttoS, Anton, Isak, Sebastian, Petter, Martin, Kristoffer, Dominique, Adam];

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      facit: facit
    }
  }
  render() {
    return (
      <div className="App">

        <Scoreboard 
          competitors={competitors}
          results={facit} />
      </div>
    );
  }
}

export default App;
