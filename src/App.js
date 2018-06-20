import React, { Component } from 'react';
import './App.css';
import Betlist from './components/bet_list';
import Scoreboard from './components/scoreboard';
import NextGame from './components/nextgame';
import * as bets from './bets';

const facit = ["Facit",1,2,2,"x",1,"x",2,1,2,2,"x",1,1,2,2,2,1,1]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      facit: facit,
      matchData: {}
    }

  }

  componentDidMount() {
    this.matchData();
  }

  render() {
    return (
      <div className="app">

        <NextGame 
          gameNbr = {this.state.facit.length}
          teams = {bets.groupGames[this.state.facit.length-1]}
          competitors = {bets.competitors}
          matchData = {this.state.matchData} />

        <Scoreboard 
          competitors={bets.competitors}
          results={facit} />
      </div>
    );
  }

  matchData() {
    fetch('http://worldcup.sfg.io/matches')
      .then(response => { 
        response.json().then((jsonData) => {
          this.setState({ matchData: jsonData});
        });
        
        
      });
  }

  getNextGame() {
    for(var i = 0; i < this.state.matchData.length; i++) {
      var game = this.state.matchData[i];
      if(game.status === "in progress" || game.status === "future") {
        return game
      }
    }
  }
}

export default App;
