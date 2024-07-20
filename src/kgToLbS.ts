// Function Declaration

function kgToLbs(weight:number|string):void{
    console.log(weight);
}

//Function expression
const kgToLbs2: (weight: string | number) => void = function( weight: number | string) : void {
    console.log(typeof weight);
}

console.log(typeof typeof kgToLbs2);
