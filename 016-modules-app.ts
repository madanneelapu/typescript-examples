//Import a class from a specific module. 
//Note: Don't mention the .ts extension here
import {Trainee} from './016-modules';

var trainee = new Trainee(1, "Mike"); //Using the imported class
console.log(trainee.getTraineeName());
