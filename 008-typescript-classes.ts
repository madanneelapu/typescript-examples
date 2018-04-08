//Classes in TS are declared using 'class' keyword

class Person{ //use class keyword
    
    firstName: string; //member variables
    lastName: string; //member variables

}

var personObj = new Person(); //use 'new' operator to create an object of a class
personObj.firstName = "madan"; //Assign value to member variable
console.log(personObj); //string representation of object
