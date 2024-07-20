"use strict";
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find((ele) => { return ele[property] === value; });
    }
}
let store = new Store();
let product1 = {
    name: "sanitizer",
    price: 4.99
};
let product2 = {
    name: "napkins",
    price: 1.99
};
store.add(product1);
store.add(product2);
let found = store.find('price', 0);
console.log(found);
//# sourceMappingURL=Store.js.map