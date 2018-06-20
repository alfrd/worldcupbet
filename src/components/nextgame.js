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


    var nextGame = {};
    var gameNbr = 0;


    for(var i = 0; i < props.matchData.length; i++) {
        var game = props.matchData[i];
        if(game.status === "in progress" || game.status === "future") {
            nextGame = game;
            gameNbr = i+1;
            break;
        }
    }
    
    const teams = nextGame.home_team.code + "-" + nextGame.away_team.code;

    var ett = 0;
    var kryss = 0;
    var två = 0;

    var bettare1 = [];
    var bettareX = [];
    var bettare2 = [];

    props.competitors.map((bet) => {
        if(bet[gameNbr] === 1 ) {
            ett += 1;
            bettare1.push(bet[0]);
        } else if (bet[gameNbr] === "x") {
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
            <h1>Nästa match</h1>

            <div className="game">
                <h2>{teams}</h2>
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