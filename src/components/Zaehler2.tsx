import React from 'react';
import {ICounter} from "../models/Interfaces";

function Zaehler2({count, onChangeNumber}:ICounter) {
    return (
        <div>
            <h2>Zähler in fremder Komponente geändert</h2>
            <button className="btn btn-primary" onClick={ () => onChangeNumber(++count)}>+</button>
            <p className="badge bg-secondary"> local: {count}</p>
            <hr/>
        </div>
    );
}

export default Zaehler2;