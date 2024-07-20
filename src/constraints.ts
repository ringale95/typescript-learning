// function echo<T extends number| string> (value:T){}
// echo(1);
// echo('rav');


// //shape
// function echo2<T extends {name:string}>(value:T){}
// echo2({name:'Rave'});

// //interface
// interface P{
//     name:string;
// }

// function echo1<T extends P> (value:T){}
// echo1({name:'Raveena'});

// class Q{
//     constructor(public name:string, public id:number){}
// }

// class N extends Q{
//     constructor(name:string,id:number, public val:number){
//         super(name, id);
//     }
// }

// function echo3<T extends Q> (value:T){}
// echo3({name:'Rav', id:1})
// echo3({
//     name:'Rav',
//     id:1,
//     val:5
// })

let objects = [1,2,3,2];
let predicate = (value: number, index: number, obj: number[]) =>  { console.log(`Value: ${value} Index: ${index} obj: ${typeof obj}`); return value};
let filtered = objects.find(predicate)
console.log(filtered);

// reduce 
// (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number

// find
// (value: T, index: number, array: T[]) => boolean;