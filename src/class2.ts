
//parameter properties

class Acc{
    constructor(public readonly id: number, public owner: string, private _balance: number){}

    get balance() : number{
        return this._balance;
    }    

    set balance(val:number){
        if(val<0)
            throw new Error('Invalid value');
        this._balance = val;
    }
}

let acc = new Acc(1, 'Rav', 0);
console.log(acc.balance);
acc.balance=1;
