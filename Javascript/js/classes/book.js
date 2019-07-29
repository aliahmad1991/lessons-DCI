

let book={
    name:"Javascript",
    author:"John",
    year:2016,
    bookInfo:function(){
        return " the Book Name is "+ this.name+" the author is "+ this.author;
        
    }
};
console.log(book.bookInfo());
console.log(book);

for(let i in book){
    console.log(book[i]);
}
/////////////////////////////////
let message = "Hello world";
let greet=message;
greet=" hi there"
console.log(message);
console.log(greet);
/////////////////////////////////

let person = {
    name:"John",
    age:28,
    gender:"Male"

};

let user=person;
console.log(user.name); // John

user.name="Khodeo";
console.log(user.name);// Khodeo
console.log(person.name);
/////////////////////////////////

let personName = "John Smith";
console.log(personName);
console.log(personName.toUpperCase());
console.log(typeof personName);

let personName2 = new String("John Smith");
console.log(personName2);
