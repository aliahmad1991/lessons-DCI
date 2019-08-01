

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
//////////////////////////////////////////////////////

let book1 = new Object();
book1.bookName="Learn Javascript";
book1.authorName="John";
book1.year=2019;
book1.info=function(){
    return this.bookName + " published in "+ this.year;
}

console.log(book1.info());



function Book(name,author,year){
    this.bookName=name;
    this.authorName=author;
    this.publisherYear=year;
    this.info=function(){
        return this.bookName+" is published in "+ this.publisherYear;
    };
}

let cssBook = new Book("learning CSS in 30 days",2019);
for ( let i in cssBook){
    console.log(cssBook[i]);
}
///////////////////////////////////




