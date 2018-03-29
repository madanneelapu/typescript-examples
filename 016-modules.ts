//A module is essentially a .ts file
console.log("Loading Module");

export class Trainee{ //Use export keyword to mark a class that can be imported to other modules
    traineeId:number;
    traineeName:string;

    constructor(traineeId:number,traineeName:string){
        this.traineeId = traineeId;
        this.traineeName = traineeName;
    }

    getTraineeName(){
        return this.traineeName;
    }
}

console.log("Loaded Module");

//Everytime we import a module, TypeScript executes the code in that module.
//The logs are to demonstrate that.