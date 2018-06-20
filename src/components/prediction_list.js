import React from 'react';

const PredictionList = (props) => {
    const bettareList = props.bettare.map((namn) => {
        return <li key={namn} className="bettare-item">{namn}</li>
    });

    return (
        <ul className="bettare">
            {bettareList}
        </ul>
    )
}

export default PredictionList