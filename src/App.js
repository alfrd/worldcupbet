import React, { Component } from 'react';
import './App.css';
import Betlist from './components/bet_list';
import Scoreboard from './components/scoreboard';
import NextGame from './components/nextgame';
import * as bets from './bets';

const facit = ["Facit",1,2,2,"x",1,"x",2,1,2,2,"x",1,1,2,2,2,1,1,1]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      facit: facit,
      matchData: {}
    }

  }

  componentDidMount() {
    this.fetchMatchData();
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

  fetchMatchData() {
    fetch('https://world-cup-json.herokuapp.com/matches/')
      .then(response => { 
        response.json().then((jsonData) => {
          this.setState({ matchData: jsonData});

          this.updateResults();
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

  updateResults() {
    var gamesPlayed = this.state.facit.length - 1
    console.log(this.state.matchData[gamesPlayed]);
    if(this.state.matchData[gamesPlayed].status === "in progress") {
      console.log("Game in progress");
      gamesPlayed -= 1
    }
    gamesPlayed -= 1; 
    var updatedFacit = ["Facit"];
    for(var i = 0; i < gamesPlayed; i++) {
      if(this.state.matchData[i].winner_code === this.state.matchData[i].home_team.code) {
        updatedFacit[i+1] = 1;
      } else if(this.state.matchData[i].winner_code === this.state.matchData[i].away_team.code) {
        updatedFacit[i+1] = 2;
      } else {
        updatedFacit[i+1] = "x";
      }
    }
    this.setState({facit: updatedFacit})
    console.log(updatedFacit)
  }
}

export default App;
