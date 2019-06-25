//to define array we use let car=["bmw", "fiat"];
// let car=new array();


let cars = { brand: "BMW",color:"white", year:"2019"};

let person = { firstName: "Hamed", lastName: "Hossainy" ,age:30, hairColor:"brown"};

console.log(cars);
console.log(cars.brand);
console.log(cars.color);
cars.brand="Mercedes";
console.log(cars.brand);

person.age=66;
person.age+=1;   ///incrrease age 1
person.age=person.age+1;   //// also incrrease age 1
console.log(person.age);
person.city="Hamburg";
console.log(person.city);
person["fav color"]="yellow";
console.log(person);

//// creat object

let language= new Object();   // or let langauge = {};
language.name="English";
language.level="easy";
console.log(language);

let driver = {
   age:30,
   firstname:"Hamed",
   nationality:"AFG",
   car : { brand: "Ferarri", color:"red", year:"2019"}
};

console.log(driver.car);
console.log(driver.car.color);
console.log(driver["car"].year);// another way
console.log(driver["car"]["brand"]); // another way
driver.pet= ["cat","dog"]; // array
console.log(driver.pet[0]); // cat
console.log(driver.pet[1]);  // dog

// we create now array of object

let posts = [
   { litle:"cats are nice", author : "golahmad"},
   { litle:"Dogs are totaly awsome",author:"dog lover"}

];
console.log(posts);
posts[1].title = "Dogs are totaly cute";
console.log(posts);
posts[0].comment="nice post i like it";
console.log(posts);

posts[1].comment= ["nice thank you", "noo i hate you :("];
console.log(posts[1]);
console.log(posts[1].comment[1]);
posts[1].comment[1]= "nice post :)";
console.log(posts[1].comment[1]);
posts[1].comment[1]+="thanks a lot";  //
console.log(posts[1].comment[1]);
document.write(posts);

// WE CREATE STUDENT OBJECT
let student= {

   firstName:"golahmad",
   lastName:"botegol",
   id:123456789,
   overThirty:true,
   fullName: function() {
       return "the Fullname is : "+ student.firstName + " " + student.lastName;
   }

};
console.log(student.fullName());


//example : Create a person object. Include the person's first and last name, age, job, city etc. Then print text by retrieving data from the object e.g. "John Smith is a 41 year old engineer living in France".

let person2 = { firstName: "Ghandigol", lastName: "golahmad" ,age:41, job:"hausekeeper", location:"Hamburg"};

console.log(person2);

/////////////////////////////////////
let Person  ={
    firstName : "JanAgha",
    lastName : "khomaini",
    age : 41,
    proffesion : "Engineer",
    city : "Hamburg",
    info:function() {
        return Person.firstName + " "+ Person.lastName + " is " + Person.age +" year old " + Person.proffesion + " Living in " + Person.city;
 }
 };
 console.log(Person.info());
 document.write(Person.info());
 //example 2 :create an array of movies objects
 //Each movie should have a title, rating and haswatched property
 //you have watched "wanted film " is " 5 stars"
 //you have watched "Mother film " is " 4 stars"

 let movies =[{
     title:"Avatar",
     haswatched:true,
     rating:4
 },
 {
     title : "Dispicable me 3",
     haswatched : true,
     rating:5
 },
 {
     title:"Lord of the Rings",
     haswatched:true,
     rating:9
 },
 {
     title:"Horrypotter",
     haswatched:false,
     rating:3
 },
 {
     title: "Passenger",
     haswatched:false,
     rating:2
 }
];
function stars(num){
let str="";
if(num>5){  num=5; }
for (let i=0;i<num;i++){
    str+="*";
}
return str;
}
movies.forEach(function(film){
    if(film.haswatched==true){
        console.log(" You watched " + film.title + " has " + film.rating+" stars " + stars(film.rating));
       
    }
    else{
        console.log(" You have to watch " + film.title + " has " + film.rating+" stars " + stars(film.rating))
    }
    });
/////////////////////////////////////////////////////
let movie=[1,2,3,4,5];
for(let i=0 ; i < movie.length;i++){
    console.log(movie[i])};