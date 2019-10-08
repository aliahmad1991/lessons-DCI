import Persons from './main.js'

class DCIStudent extends Persons{
constructor(name,job,age){
    super(name,job,age);
}
}

let person2 = new DCIStudent("Mansour","DCI teacher","28");
console.log(person2);
person2.calculate_age(1985)
console.log(person2.age)