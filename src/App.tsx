import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {IAdress, ICounter, IReminder} from "./models/Interfaces";
import ShowReminders from "./components/ShowReminders";
import Zahlen from "./components/Zahlen";
import Zaehler2 from "./components/Zaehler2";
import Gernot from "./components/Gernot";
import AddReminder from "./components/AddReminder";
import addReminder from "./components/AddReminder";




function App() {
    const adressDaten : IAdress = {name: "Christoph Kohlweg",
        adresse:"Arnethgasse17",
        ort:"Graz"};

    /* const reminders: IReminder[] = [{id:1, toDo : "learn React",
        when: "28-02-2023", who: "Chris"},{id:2, toDo : "learn english",
        when: "28-02-2023", who: "Peter"}]; */

    const [reminders, setReminders] = useState <IReminder[]> ( [{id:1, toDo : "learn React",
        when: "28-02-2023", who: "Chris"},{id:2, toDo : "learn english",
        when: "28-02-2023", who: "Peter"}]);

    const delReminder = () => {
        console.log(reminders.length);
        // reminders.push({id:3, toDo:"something",when:"28-03-2022",who:"Gernot"});
        reminders.pop();
        console.log(reminders.length);
        setReminders(reminders);
    }
    const [zaehler,setZaehler] = useState(5);

    const [zaehler2,setZaehler2] = useState(0);
    const changeNumber = (zaehler2:number) => {
        setZaehler2(zaehler2);
        console.log(zaehler2);
    }

  return (
    <div className="App">
        <Header/>
        <pre>Name: {adressDaten.name} <br/>
        Adresse: {adressDaten.adresse} <br/>
        Ort: {adressDaten.ort}</pre>
        <ShowReminders reminders={reminders} onDeleteReminders={delReminder}/>

        <Zahlen count={zaehler}/>
        <p>Angezeigt in app.tsx </p>
        <p> {zaehler2}</p>
        <Zaehler2 count={zaehler2} onChangeNumber={changeNumber}/>

        <Footer name="Christoph" adresse="Arntegasse" ort="Graz" />
        <hr/>
        <Footer name={adressDaten.name} adresse="arnte" ort="Graz" />

    </div>
  );
}

export default App;
