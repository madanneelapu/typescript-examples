//TypeScript impicitly assigns type information if
//variable declaration and assignment are done on the same line.

//In the case of variables
var a = 10; // Implicit number
//a = "mike"; //Error

var b = true; // Implicit boolean
var c = "madan"; //Implicit string

var d;
d = 10; //No implicit typing. 'd' will not be a number, instead it is of type 'any'
d = "mike";


function myFn(): string{
    return "hello";
}
var myFnRt = myFn(); // Implicit String

var myFnRt2;
myFnRt2 =  myFn(); //No implicit typing. 'myFnRt2' will not be a string, instead it is of type 'any'
