//Define array of any types
let numbers = [1,2,'3'];

//or we can define array of specific type
let counts: number[] = [1,2,3]

//or 

let nums = [];
nums[0] = 1;
nums[1] = '1';

//or 
let x: number[] = [];
x[0] = 1;
x[1] = 2;

let numbs: number[] = [1,2,5];
numbs.push(3);
numbs.push(4);
numbs.pop();

numbs.forEach(numb => {console.log(numb)});
