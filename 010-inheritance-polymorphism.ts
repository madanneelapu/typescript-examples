
class MyBaseClass{
    firstName : string;
    lastName : string;

    greet(){
        console.log("Hi...!!!");
    }
}

class MyDerivedClass extends MyBaseClass{ // all properties of base class will be inherited into derived class
    greet(){ //Override
        console.log("Hello...!!!");
    }

    invokeMethodFromSuperClass(){
        super.greet(); 
    }
}

var myDerivedClassObj = new MyDerivedClass();
myDerivedClassObj.greet();
myDerivedClassObj.invokeMethodFromSuperClass();

var myDerivedClassObj2 : MyBaseClass = new MyDerivedClass(); //Polymorphism
myDerivedClassObj2.greet();
//myDerivedClassObj2.invokeMethodFromSuperClass(); //Error
