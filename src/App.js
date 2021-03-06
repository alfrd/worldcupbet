import React, { Component } from 'react';
import './App.css';
import Betlist from './components/bet_list';
import Scoreboard from './components/scoreboard';
import Game from './components/game';
import AllGames from './components/all_games';
import Attondel from './components/attondel'
import * as bets from './bets';

const facit = ["Facit",1,2,2,"x",1,"x",2,1,2,2,"x",1,1,2,2,2,1,1,1,2]

//var facit = ["Facit",1,2,2,"x",1,"x",2,1,2,2,"x",1,1,2,2,2,1]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      facit: facit,
      gamesPlayed: 0,
      matchData: {}
    }

  }

  componentDidMount() {
    this.fetchMatchData();
  }

  render() {
    return (
      <div className="app">

        <Game 
          gamesPlayed = {this.state.gamesPlayed}
          competitors = {bets.competitors}
          matchData = {this.state.matchData} />

        <Scoreboard 
          competitors={bets.competitors}
          results={this.state.facit} />
        
        <Attondel />
        
        <div className = "alla-matcher">
          <h1 className = "alla-matcher-rubrik">Alla matcher</h1>
          
          <AllGames 
            competitors = {bets.competitors}
            matchData = {this.state.matchData} />
            
        </div>
        
        
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
        this.setState({gamesPlayed: i});
        return game
      }
    }
  }

  updateResults() {
    this.getNextGame();
    console.log(this.state.matchData[this.state.gamesPlayed]);
    if(this.state.matchData[this.state.gamesPlayed].status === "in progress") {
      console.log("Game in progress");
      //gamesPlayed -= 1
    } 
    var updatedFacit = ["Facit"];
    for(var i = 0; i < this.state.gamesPlayed; i++) {
      if(this.state.matchData[i].winner_code === this.state.matchData[i].home_team.code) {
        updatedFacit[i+1] = 1;
      } else if(this.state.matchData[i].winner_code === this.state.matchData[i].away_team.code) {
        updatedFacit[i+1] = 2;
      } else {
        updatedFacit[i+1] = "x";
      }
    }
    this.setState({facit: updatedFacit})
  }
}

export default App;
