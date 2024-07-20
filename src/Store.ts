interface Product{
    name:string;
    price:number;
}

type ReadOnlyProduct = {
    readonly [K in keyof Product]: Product[K]
}

class Store<T>{
    protected _objects:T[] = [];

    add(obj: T): void{
        this._objects.push(obj);
    }

    find(K: keyof T, value: unknown): T | undefined{
        return this._objects.find((ele: T) => {return ele[K] === value} )
    }
}

let store = new Store<Product>();
let product1: Product = {
    name: "sanitizer",
    price: 4.99
}

let product2: Product = {
    name: "napkins",
    price: 1.99
}

let product3: ReadOnlyProduct = {
    name: "napkins",
    price: 1.99
}

product3.name = ""

store.add(product1);
store.add(product2);

let found = store.find('price', 0);
console.log(found);

