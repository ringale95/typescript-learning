abstract class Shape{ //wont be able to create shape class instance 
    constructor(public color:string){}

    //abstract methods of no implementations
    abstract render():void; //remove braces and terminate line
}

class Circle extends Shape{
    constructor(public radius: number, color:string){
        super(color);
    }

    override render(): void {
        console.log("Rendering a circle: ");
        
    }
}

class Rectangle extends Shape{
    constructor(public radius: number, color:string){
        super(color);
    }

    override render(): void {
        console.log("Rendering a Rectangle: ");
        
    }
}

// let shape = new Circle('red');
// shape.render(); //shape is not real thing as like circle and if we want to stop from able to create instance of shape class we mark it is abstract class