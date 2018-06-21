import React, { Component } from 'react';
import PredictionList from './prediction_list';
import Game from './game';

const AllGames = (props) => {
    if (props.matchData[0] == null) {
        return (
            <div className="game">
                <h2>Loading...</h2>
            </div>

        );
        
        
    }

    var counter = -1;
    const games = props.matchData.map((game) => {
        counter += 1;
        return <Game 
            key = {counter}
            gamesPlayed = {counter}
            competitors = {props.competitors}
            matchData = {props.matchData} />
    });

    return games;
    
}

export default AllGames;