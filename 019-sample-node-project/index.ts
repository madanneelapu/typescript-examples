import {Person3} from './person';
import * as _ from 'lodash'; 

var person = new Person3('Madan','Neelapu');
console.log(person.firstname);

//Using lodash

var myArray = [1,2,3,4,5];
console.log(_.reverse(myArray));
