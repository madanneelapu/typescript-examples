//Arrays

var a: number[]; //Array of numbers

a = []; //Initializing to an empty array
a = [1,2,3];
//a= 1; //Error
//a=[1,"2"]; //Error

a.push(4);
//a.push("b")//Error

var e: number;
e = a.pop();

var b: boolean;
//b = a.pop(); //Error - A number cannot be assigned to a boolean variable


//Tuples
var myTuple: [number, boolean]; //Declaring a tuple
myTuple = [1, true];
myTuple = [100, false];

//myTuple = [] //Error
//myTuple = [1] //Error
//myTuple = [5, true, ""] //Error