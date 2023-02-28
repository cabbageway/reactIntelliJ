import React from 'react';
import {IReminder, IReminders} from "../models/Interfaces";
import './ShowReminder.css';

//function ShowReminders(props:IReminders) {
function ShowReminders({reminders, onDeleteReminders}:IReminders) {

    return (
        <div>
            <hr/>
            <h2>Show Reminders Komponente</h2>
            <ul>

            {reminders.map((item:IReminder) =>
                <li className='noli' key={item.id}><span className='badge bg-secondary'>
                 {item.toDo} {item.who}
                </span></li>)}
            </ul>
            <button onClick={onDeleteReminders}>Delete</button>
        </div>
    );
}

export default ShowReminders;