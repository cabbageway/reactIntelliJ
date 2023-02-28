export interface IAdress {
    name :string,
    adresse:string,
    ort:string
}

export interface IReminder {
    id:number,
    toDo:string,
    when: string,
    who: string
}

export interface IReminders {
    reminders: IReminder[];
    onDeleteReminders:() => void;
}
export interface INumber {
    count : number
}

export interface IName {
    name : string
}

export interface ICounter {
    count:number;
    onChangeNumber:(value:number) => void;
}