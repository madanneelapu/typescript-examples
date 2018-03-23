//Number of arguments
function add(a, b) {
    return a + b;
}
var sum = add(1, 2);
//sum = add(2); //Error
//sum = add(1,2,3) //Error
console.log(sum);
//type of arguments
function add2(a, b) {
    return a + b;
}
var sum2 = add2(1, 2);
//sum2 = add2(2,"m"); //Error
console.log(sum2);
//Optional Arguments
function add3(a, b, c) {
    return a + b;
}
var sum3 = add3(1, 2);
sum3 = add3(1, 2, 3);
//sum3 = add3(1,2,"m"); //Error
console.log(sum2);
//Default Arguments
function add4(a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b + c;
}
var sum4 = add4(1, 2);
sum4 = add4(1, 2, 3);
//sum4 = add3(1,2,"m"); //Error
console.log(sum4);
//Return Type
function add5(a, b) {
    //return a +b + ""; //Error
    return a + b;
}
var sum5 = add4(1, 2);
//var sum6 :string = add4(1,2); //Error
