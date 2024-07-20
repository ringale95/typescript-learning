//Interfaces to define shape of objects

//Calender concept : google, outlook, teams ( have commonalities in base class)

//abstract is only concept of ts and not js
// abstract class Calender{
//     constructor(public name:string) {
        
//     }
//     abstract addEvent():void;
//     abstract removeEvent():void;
// }

interface ICalender{
    name:string;
    addEvent():void;
    removeEvent():void; 
}

//in js nothing will be visible for interface its only concept of typescript
//inheritance can be done
interface CloudExtend extends ICalender{
    sync():void
}

class Googlecalender implements ICalender{
    constructor(public name:string){}
    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }
    
}