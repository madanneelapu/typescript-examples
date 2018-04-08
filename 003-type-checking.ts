//variables in JS are not typesafe.
/*var a;

a = 10;
a = true;
a = {};

*/

//Variables in TS can be made typesafe
var a: number;

a = 10;
//a = true; //Will result in error

var b: boolean;
b=true;

var c: string;
c="Madan";
c="M";