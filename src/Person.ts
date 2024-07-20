class Person{
    constructor(public fN : string, public lN: string){}

    getFullName(){
        return this.fN + ' ' + this.lN;
    }
    walk(){
        console.log("Walking");
        
    }
}

class Student extends Person{
    constructor(public studentId: number, fN: string, lN:string){
        super(fN, lN);
    }

    Taketest(){
        console.log("Taking test");
    }
}

// let students = new Student(1, 'John', 'Mosh');
// console.log(students.Taketest());
// console.log(students.walk());


class Teacher extends Person{

    override getFullName(): string {
        return 'Professor' + super.getFullName();
    }
}

class Principle extends Person{
    override getFullName(): string {
        return 'Principle ' + super.getFullName();
    }
}

let teacher = new  Teacher('John', 'Smith');
console.log(teacher.getFullName());

function printNames(people : Person[]){
    for(let person of people)
        console.log(person.getFullName());
}

//here person obj take many forms like of student and teacher
printNames([
    new Student(1, 'John', 'Smith'),
    new Teacher('Raveena', 'Ing'),
    new Principle('Mosh', 'Hamedani')
])

//open for extension and close for modification! - polymorphism allow us for open close principle follow

//private are not inherited methods whereas protected members are inherited but cant be access otuside of class