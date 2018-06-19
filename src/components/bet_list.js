import React from 'react';


const BetList = (props) => {

    const betItems = props.bets.map((bet) => {
        if(bet === 6) {
            return <li>x</li>
        } else {
            return <li>{bet}</li>;
        } 
      });

    return (
        <ol>{betItems}</ol>
    );
}

export default BetList;