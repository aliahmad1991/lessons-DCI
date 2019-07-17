//let person={
//firstName:"jack",
//lastName:"Doe",
//age:50,
//hairColor:"Black",
//personInfo:function(){
  //  console.log(this.firstName+this.lastName+this.age);
//}

//};

function Person(first,last,age,hair){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.hairColor=hair;
    this.personInfo=function(){
        console.log(this.firstName +" "+this.lastName+" "+this.age+" "+this.hairColor);
    }

}
let person=new Person("Jack","Doe",50,"Black");
let person2 = new Person("Jahn","Smith",60,"brown");

console.log(person.personInfo());
console.log(person2.personInfo());

let colors= new Array("Red","Green","Blue");
colors=["Red","Green","Blue"];// the same [] = new Array

console.log(colors);



let car = new Object();
car.name="BMW";
car.year="2019";
console.log(car);
car={}; // the same with new object()

function employee(name,salary,job){
    this.name=name;
    this.salary=salary;
    this.job=job;
    this.info=function(){
        return this.name + " earn "+ this.salary+"$"+" and works as "+ this.job;

    }
}

let emp1 = new employee("Jack",5000,"javascript developer");
let emp2 = new employee("Joe",4000,"javascript profissional");
emp1.city="Los Angles";
emp2.city="Las vegas";

console.log(emp1);
console.log(emp2);
console.log(emp1.info());
console.log(emp2.info());

let emp3= new employee("steven",5000,"node js worker");
console.log(emp3.info());

//////////////////////////////////////////////////////////////////
let student={
    name:"Mara",
    age:"22",
    city:"Berlin",
    University:"T U Berlin",
    language:"EN",
    get lang(){
        return this.language;
    },
    set lang(value){
        this.language=value;
    }
};

console.log(student.lang);
student.lang="DE";
console.log(student.lang);


function Student(name,age,city,university,language,usd,changeRate){
    this.name=name;
    this.age=age;
    this.city=city;
    this.university=university;
    this.language=language;
    this.bankAccount=usd;
    this.changeMoney=function(){
        return this.bankAccount * changeRate;
        
    },
    this.langInfo= function(){
        return this.language;
    }
}

let student1= new Student("Lara","23","Hamburg","Uni Hamburg","Garman",1000,0.8);
console.log(student1.changeMoney()+" Euro");
