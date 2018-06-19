import React, { Component } from 'react';
import { list } from 'postcss';

const Scoreboard = (props) => {
    
    var scores = props.competitors.map((bet) => {
        var score = 0;
        for(var i = 1; i < props.results.length; i++) {
            if(props.results[i] === bet[i]) {
                score += 1;
            }
        }
        var competitor = {
            name: bet[0],
            score: score
        };
            
        return competitor
    });
    
    scores = scores.sort(function (a, b) {
        return b.score - a.score;
    });

    const scoresList = scores.map((competitor) => {
        return <li key={competitor.name}> {competitor.name}: {competitor.score} poäng </li>
    });
    console.log(scores);

    return <ol className="scoreboard">{scoresList}</ol>;


    

    
}
export default Scoreboard