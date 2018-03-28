//values of Readonly properties cannot be changed, once they are assigned.
//we can set values to readonly properties either in declaration or inside constructor.
class Circle {
    readonly pi = 3.14; 
    readonly maxradius;
    constructor(maxradius){
        this.maxradius = maxradius;
    }
}

var circle = new Circle(30);
console.log(circle.pi);
//circle.pi = 36.21; //Error
console.log(circle.maxradius);

var circle2 = new Circle(35); //This will not change the value
//circle2.pi = 36.21; //Error
console.log(circle.maxradius);

