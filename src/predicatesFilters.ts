let n = [1,2,3,4];
let pred : (val : number, index : number, object : number[]) => boolean = (val:number) => 
(val % 2 != 0);

let oddNums = n.filter(pred);
console.log(oddNums);