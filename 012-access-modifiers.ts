class MyCustomClass{
   /* private firstName : string;
    private lastName : string;

    constructor(firstName:string, lastName : string){
        this.firstName = firstName;
        this.lastName = lastName;
    }*/

    //shortcut for the above code
    constructor(private firstName:string, private lastName : string){    }

    public getFirstName() : string{
        return this.firstName;
    }

    public setFirstName(firstName:string){
        this.firstName = firstName;
    }

    public getLastName() : string{
        return this.lastName;
    }
    public setLastName(lastName : string){
        this.lastName = lastName;
    }

    public getFullName():string{
        return this.firstName + " " + this.lastName;
    }
}



var MyCustomClassObj : MyCustomClass = new MyCustomClass("madan","neelapu");
//MyCustomClassObj.firstName; //Error
MyCustomClassObj.getFullName();

//public - access anywhere (default)
//private - access only inside the class
//protected - access inside the class and sub-class