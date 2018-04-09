//'any' datatype
var a : any; //useful when migrating from JS to TS

a = 10;
a = true;
a = "madan";



//Union Data Type
//We can make a variable accept values of limited set of datatypes by declaring 
//those datatypes separated with pipe symbol.
var b : number | boolean     //'b' can accept only 'number' or 'boolean'

b = 10;
b = true;
//b = "madan"; //Error


//Type Assertion (Type Casting)

var s ; 
s = "madan";

var len = (<string> s).length; //Casting 'any' type to 'string'