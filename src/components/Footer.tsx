import React from 'react';
import './Footer.css'
import {IAdress} from "../models/Interfaces";

/* interface IAdress {
    name :string,
    adresse:string,
    ort:string
} */
function Footer(props:IAdress) {

        const name1:string = props.name;

    return (
        <div className="background">
            <div>
            <li>{name1}</li>
            <li>Kontakadresse</li>
            <li>Kontaktort</li>
            </div>
        </div>
    );
}

export default Footer;