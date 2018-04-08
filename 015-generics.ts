//Generics


//A function which returns back the same datatype as its input. Input datatype can be anything.
function myFn(a: any) : any{
    return a;
}

var returnValue = myFn(10);
var returnValue2 : string = myFn(10); //This is possible because we are loosing the type information.


//Using Generics
function myFn2<T>(a: T) : T{
    return a;
}

var returnValue3 = myFn2(10);
//var returnValue4 : string = myFn2(10); //Error
var returnValue5 : number = myFn2(10);


//Generics with classes

class Employee{
    empId:number;
    empName:string;

    constructor(empId:number,empName:string){
        this.empId = empId;
        this.empName = empName;
    }
}

class Developer extends Employee{

}

class Manager extends Employee{

}

class Student{

}


function myFn3<T>(a: T) : T{
    return a;
}

var dev = new Developer(1,"madan");
var manager = new Manager(2,"mohan");
var student = new Student();

var returnDev = myFn3(dev); //return type is Developer
var returnMan = myFn3(manager); //return type is Manager
var returnStu = myFn3(student); //return type is Student

//what if we want to restrict the function to only Employee type and its sub-types
function myFn4(a: Employee) : Employee{
    return a;
}

var returnDev2 = myFn4(dev); //return type is Employee. Not Developer. We are loosing some type-info here.
var returnMan2 = myFn4(manager); //return type is Employee
//var returnStu2 = myFn4(student); //Error


//Solution

function myFn5<T extends Employee>(a: T) : T{
    return a;
}
var returnDev3 = myFn5(dev); //return type is Developer
var returnMan3 = myFn5(manager); //return type is Manager
//var returnStu3 = myFn5(student); //Error