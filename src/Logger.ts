// class Logger{
//     constructor(public name:string){}
//     writeMessage(message:string) : void{
//         console.log("Writing message");
//     }
// }

class PersonNew {
    constructor(public firstName:string, public lastName:string) {}

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

}

class Employee extends Person{

    constructor(public salary:number, firstName:string,lastName:string){
        super(firstName, lastName);
    }

}


interface IEmployee{
    name:string;
    salary: number;
    address:Address;

}

interface Address{
    street:string;
    city:string
}