import React, {useState} from 'react';
import {INumber} from "../models/Interfaces";

function Zahlen({count}:INumber) {
    const funki = (count:number) => {
        console.log("aus funki: " + count);
        return ++count;
    }
    return (
        <div>
            <hr/>
            <h2>Zähler Komponente</h2>
            <p id="z">{count}</p>
            <button onClick={() => {
                count = funki(count);
                console.log(count);
                (document.getElementById("z") as HTMLElement).innerText=count.toString();
            }}>rise</button>
            <hr/>

        </div>

    );

}

export default Zahlen;