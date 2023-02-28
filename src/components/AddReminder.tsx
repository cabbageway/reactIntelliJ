import React, {useState} from 'react';
import {IReminder} from "../models/Interfaces";

function AddReminder() {
    let [title, setTitle] = useState("Text einfügen");
    const submitForm = (e : React.FormEvent) => {
            e.preventDefault();  // verhindert dass es nur kurzzeitig angezeigt wird
            console.log("title", title);
        }
    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor="">Notiz</label>
                <input type="text"  onChange={e => setTitle(e.target.value)}/>

            </form>
        </div>
    );
}

export default AddReminder;