



////////////////////////////////////////////////////////////////
var myColor="red";
let age=30;

///////////////////////////////////////////////////////////////////
//const object

const car = {name:"Mercedes",color:"black",model:"amg",year:2019,
carInfo:function(){
    console.log(this.name+" made in "+ this.year);
}


};
console.log(car.carInfo());
car.name="BMW";
console.log(car.name);
console.log(car.year);
console.log(car.carInfo());

Car={name:"Fiat", year:'2000'};
console.log(Car);
/////////////////////////////////////////////////
//const Array

const drink = ["water","coffee","milk","tea"];

console.log(drink);
drink[0]="Lemon Juice";
console.log(drink);
