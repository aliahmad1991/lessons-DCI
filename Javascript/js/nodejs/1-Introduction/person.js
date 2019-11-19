class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greeting(){
        console.log(`Hello Ghandolak!!! My name is ${this.name} and my age is ${this.age}`)
    }
}
function getTime(){
    console.log(``)
}
module.exports = Person;