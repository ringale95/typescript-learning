"use strict";
class Person {
    constructor(fN, lN) {
        this.fN = fN;
        this.lN = lN;
    }
    getFullName() {
        return this.fN + ' ' + this.lN;
    }
    walk() {
        console.log("Walking");
    }
}
class Student extends Person {
    constructor(studentId, fN, lN) {
        super(fN, lN);
        this.studentId = studentId;
    }
    Taketest() {
        console.log("Taking test");
    }
}
class Teacher extends Person {
    getFullName() {
        return 'Professor' + super.getFullName();
    }
}
class Principle extends Person {
    getFullName() {
        return 'Principle ' + super.getFullName();
    }
}
let teacher = new Teacher('John', 'Smith');
console.log(teacher.getFullName());
function printNames(people) {
    for (let person of people)
        console.log(person.getFullName());
}
printNames([
    new Student(1, 'John', 'Smith'),
    new Teacher('Raveena', 'Ing'),
    new Principle('Mosh', 'Hamedani')
]);
//# sourceMappingURL=Person.js.map