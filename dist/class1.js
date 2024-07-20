"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;
    }
    getBalance() {
        return this._balance;
    }
}
let account = new Account(1, 'Raveena', 100);
account.deposit(100);
console.log(account.getBalance());
console.log(typeof account);
console.log(account instanceof Account);
//# sourceMappingURL=class1.js.map