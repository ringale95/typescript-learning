// let person ={};
// person.name = 'a';

//Above is possible in js but in ts if we want to achieve dynamism we use index signature

//Building ticket 

class SeatAssignment {
    //A1 seat sitting Raveena
    //A2 seat sitting Mosh....

    //index sig property seatnumbe is string and store strings
    [seatNumber : string]: string;
}

let seats = new SeatAssignment();
seats.A1 = 'Mosh';
//seats[A1] = 'Mosh';
seats.A2 = 'John';
