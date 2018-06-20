import React, { Component } from 'react';

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

    const scoresList = scores.map((competitor, index) => {
        if (index + 1 > 9) {
            return <li key={competitor.name} className="scorelist-item"> {index+1}. <b>{competitor.name}</b> <span>{competitor.score}p</span></li>
        } else {
            return <li key={competitor.name} className="scorelist-item"> 0{index+1}. <b>{" " + competitor.name}</b> <span>{competitor.score}p </span></li>
        }
        
    });

    return (
        <div className="scoreboard">
            <h1 className="header">Poängställning</h1>
            <ul className="scorelist col-md-4 list-group">{scoresList}</ul> 
        </div>
        
    
    );



    

    
}
export default Scoreboard