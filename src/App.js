import React, { Component } from 'react';
import './App.css';
import Betlist from './components/bet_list'
import Scoreboard from './components/scoreboard'
import NextGame from './components/nextgame'


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
const facit = ["Facit",1,2,2,"x",1,"x",2,1,2,2,"x",1,1,2,2,2,1]
const competitors = [August, Tobias, Johan, Nils, OttoB, OttoS, Anton, Isak, Sebastian, Petter, Martin, Kristoffer, Dominique, Adam];
const groupGames = ["RYS-SAU", "EGY-URU", "MAR-IRA", "POR-SPA", "FRA-AUS", "ARG-ISL", "PER-DAN", "KRO-NIG", "COS-SER", "TYS-MEX", "BRA-SCH", "SVE-SYD", "BEL-PAN", "TUN-ENG", "COL-JAP", "POL-SEN", "RYS-EGY", "POR-MAR", "URU-SAU", "IRA-SPA", "DAN-AUS", "FRA-PER", "ARG-KRO", "BRA-COS", "NIG-ISL", "SER-SCH", "BEL-TUN", "SYD-MEX", "TYS-SVE", "ENG-PAN", "JAP-SEN", "POL-COL", "URU-RYS", "SAU-EGY", "IRA-POR", "SPA-MAR", "DAN-FRA", "AUS-PER", "NIG-ARG", "ISL-KRO", "MEX-SVE", "SYD-TYS", "SER-BRA", "SCH-COS", "JAP-POL", "SEN-COL", "PAN-TUN", "ENG-BEL"];

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      facit: facit
    }
  }
  render() {
    return (
      <div className="app">

        <NextGame 
          gameNbr = {this.state.facit.length-1}
          teams = {groupGames[this.state.facit.length-1]}
          competitors = {competitors} />

        <Scoreboard 
          competitors={competitors}
          results={facit} />

      </div>
    );
  }
}

export default App;