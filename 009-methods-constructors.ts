class Person2{ //use class keyword
    
    firstName: string; //member variables
    lastName: string; //member variables

    /*constructor(){ //No-Args constructor. Constructor overloading not allowed.
        this.firstName=" ";
        this.lastName=" ";
    }*/

    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }



    getFullName(){
        return this.firstName + " " + this.lastName;
    }

}

//var personObj2 = new Person2(); //calls no args constructor
//personObj2.firstName = "madan"; 
//personObj2.lastName = "neelapu";

var personObj2 = new Person2("madan","neelapu"); //calls the consstructor with arguments
console.log(personObj2.getFullName()); //invoking a method
