"use strict";
class Acc {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(val) {
        if (val < 0)
            throw new Error('Invalid value');
        this._balance = val;
    }
}
let acc = new Acc(1, 'Rav', 0);
console.log(acc.balance);
acc.balance = 1;
//# sourceMappingURL=class2.js.map