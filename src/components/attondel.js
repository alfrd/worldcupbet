import React from 'react'

const Attondel = (props) => {

    var klara8del = ["Ryssland", "Uruguay", "Frankrike"];

    const listan8del = klara8del.map((land) => {
        return <li key={land}>{land}</li>;
    });

    return (
        <div className="klara8del">
            <h2>Klara för åttondelsfinal</h2>
            <p>(Poäng ej inräknade än)</p>
            <ul>
                {listan8del}
            </ul>
        </div>
        
    );
}

export default Attondel