// //generic classes
// class keyValPair<K, V>{
//     constructor(public key: K, public value: V){}
// }

// let val = new keyValPair<string, string>('1','a');
// val.key;

// //generic functions/methods

// function wrapInArray<T>(value : T){
//     return [value];
// }

// let  n = wrapInArray(5);
// console.log(n);

// //inside classes we dont use function keyword to define a function its only for standalone

// class Wrapper<T>{
//     static wrap<T> (value:T){
//         return [value];
//     }
// }

// console.log(Wrapper.wrap(1));

// //interfaces generics

// //http://mywebsite.com/users
// //http://mywebsite.com/products

// interface Result<T>{
//     data: T | null;
//     error : string|null;
// }
// interface U{
//     username:string;
// }
// interface Product{
//     title:string;
// }
// function fetch<T>(_url:string):Result<T>{
//     return {
//         data:null,
//         error:null
//     }
// }

// let result = fetch<U>('url');
// result.data?.username;