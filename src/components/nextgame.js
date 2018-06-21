import React, { Component } from 'react';
import PredictionList from './prediction_list';

const NextGame = (props) => {
    if (props.matchData[0] == null) {
        return (
            <div className="game">
                <h2>Loading...</h2>
            </div>

        );
        
        
    }
    var gameNbr = props.gamesPlayed;
    var nextGame = props.matchData[gameNbr];
    
    const teams = nextGame.home_team.code + "-" + nextGame.away_team.code;
    const currentScore = nextGame.home_team.goals + " - " + nextGame.away_team.goals; 
    var gameStatus = "Nästa match";
    var currentTime = "";
    if(nextGame.time != null) {
        currentTime = nextGame.time;
        gameStatus = "Pågående match";
    } else {
        currentTime = nextGame.datetime;
        var date = new Date(Date.UTC(currentTime.substring(0,4), currentTime.substring(5,7)-1, currentTime.substring(8,10), currentTime.substring(11,13), 0, 0));
        currentTime = date.toString().substring(0,11) + date.toString().substring(16, 21);
    }
    
    var ett = 0;
    var kryss = 0;
    var två = 0;

    var bettare1 = [];
    var bettareX = [];
    var bettare2 = [];

    props.competitors.map((bet) => {
        console.log(bet[0] + " gissade " + bet[gameNbr + 1]);
        if(bet[gameNbr + 1] === 1 ) {
            ett += 1;
            bettare1.push(bet[0]);
        } else if (bet[gameNbr + 1] === "x") {
            kryss += 1;
            bettareX.push(bet[0]);
        } else {
            två += 1;
            bettare2.push(bet[0]);
        }
    });

    ett = Math.round((ett / 14)*100);
    kryss = Math.round((kryss / 14)*100);
    två = Math.round((två / 14)*100);

    return (
        <div className="nextgame">
            
            <h1>{gameStatus}</h1>

            <div className="game">
                
                <h2>{teams}</h2>
                <h4>{currentScore}</h4>
                <div className="game-time">{currentTime}</div>
                
                <div className="ettkrysstva">
                    <div className="prediction">
                        <h3>1</h3> 
                        {ett}%
                        <PredictionList bettare = {bettare1} />
                    </div>
                    
                    <div className="prediction">
                        <h3>x</h3> 
                        {kryss}%
                        <PredictionList bettare = {bettareX} />
                    </div>

                    <div className="prediction">
                        <h3>2</h3> 
                        {två}%
                        <PredictionList bettare = {bettare2} />
                    </div>
                </div>
        
            </div>
        </div>
    );
    
}

export default NextGame;