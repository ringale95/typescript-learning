type User = {
    name: string,
    age: number,
    occupation?: string
}


let users:User[] = [  
    {name:'John Smith',age:30,occupation:'Software engineer'},  
    {name:'Kate Müller',age:28}
];

type Bird = {
    fly: () => string
}

type Fish = {
    swim: () => void;
}

type Pet = Bird | Fish;

let kiwi:Pet = {
    fly: () => ("Fly")
}

type DaysOfWeek = "Monday" | "Tuesday";


let customer: any = {
    address : {
        street : "100st"
    }
};
console.log(customer?.address?.street);