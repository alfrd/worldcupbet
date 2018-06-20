import React from 'react';

const NextGame = (props) => {
    var ett = 0;
    var kryss = 0;
    var två = 0;

    
    props.competitors.map((bet) => {
        if(bet[props.gameNbr-1] === 1 ) {
            ett += 1;
        } else if (bet[props.gameNbr-1] === "x") {
            kryss += 1;
        } else {
            två += 1;
        }

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
                    </div>
                    
                    <div className="prediction">
                        <h3>x</h3> 
                        {kryss}%
                    </div>

                    <div className="prediction">
                        <h3>2</h3> 
                        {två}%
                    </div>
                </div>
        
            </div>
        </div>
    );
}

export default NextGame;