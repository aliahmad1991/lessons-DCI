class Persons {
    constructor(name,job,age){
        this.name = name;
        this.job = job;
        this.age = age;
    }
    calculate_age = (year) => {
        this.age = 2019 - year;
    }
 }
 let person1 = new Persons;
 console.log(person1)
 person1.name = "Hamed";
 person1.job = "web dev";
 person1.calculate_age(1987);
 console.log(person1.age)


export default Persons;

