interface MyInterface{
    firstName: string; //Variable Declaration
    lastName:string;
    getFullName() : string; //Method Declaration
}


class MyImpl implements MyInterface {
    firstName: string;
    lastName: string;
    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

var MyInterfaceObj : MyInterface = new MyImpl(); //Assigning impl object to interface reference

//Duck Typing is also supported in TypeScript
//Create an object which has the same structure as 'MyInterface', but has no relation with 'MyInterface'.
var someObj = {
    firstName: "Madan",
    lastName:"Neelapu",
    getFullName : function(){
        return "Madan Neelapu"
    },
    otherProp : "somevalue"
}

//'someObj' can be assigned to a reference of 'MyInterface'
MyInterfaceObj = someObj;

//if a required property does not exist in 'someObj', then it cannot be assigned to a reference of 'MyInterface'.
//we can add additional properties to 'someObj'.
//Note that we cannot access those additional properties of 'someObj'; from a reference of 'MyInterface'.

MyInterfaceObj.getFullName();
//MyInterfaceObj.otherProp; //Error