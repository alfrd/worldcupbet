import React from 'react';

const NextGame = (props) => {
    var ett = 0;
    var kryss = 0;
    var två = 0;

    var bettare1 = [];
    var bettareX = [];
    var bettare2 = [];
    
    props.competitors.map((bet) => {
        if(bet[props.gameNbr+1] === 1 ) {
            ett += 1;
            bettare1.push(bet[0]);
        } else if (bet[props.gameNbr+1] === "x") {
            kryss += 1;
            bettareX.push(bet[0]);
        } else {
            två += 1;
            bettare2.push(bet[0]);
        }
    });

    const bettare1List = bettare1.map((bettare) => {
        return <li className="bettare-item">{bettare}</li>
    });

    const bettareXList = bettareX.map((bettare) => {
        return <li className="bettare-item">{bettare}</li>
    });

    const bettare2List = bettare2.map((bettare) => {
        return <li className="bettare-item">{bettare}</li>
    });

    ett = Math.round((ett / 14)*100);
    kryss = Math.round((kryss / 14)*100);
    två = Math.round((två / 14)*100);

    return (
        <div className="nextgame">
            <h1>Nästa match</h1>

            <div className="game">
                <h2>{props.teams}</h2>
                <div className="ettkrysstva">
                    <div className="prediction">
                        <h3>1</h3> 
                        {ett}%
                        <ul className="bettare">
                            {bettare1List}
                        </ul>
                    </div>
                    
                    <div className="prediction">
                        <h3>x</h3> 
                        {kryss}%
                        <ul className="bettare">
                            {bettareXList}
                        </ul>
                    </div>

                    <div className="prediction">
                        <h3>2</h3> 
                        {två}%
                        <ul className="bettare">
                            {bettare2List}
                        </ul>
                    </div>
                </div>
        
            </div>
        </div>
    );
}

export default NextGame;