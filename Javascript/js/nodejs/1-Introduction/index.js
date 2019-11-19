// function hello(fullname){
//     console.log(`Hi ${fullname} the time is 
//     ${new Date().getHours()} Hours
//     ${new Date().getMinutes()} Minutes !
//     `);

// }
// hello('Ghandolaks')

const Person = require('./person');
const Person1 = new Person ('John Doe',32);
const time = require('./person');
Person1.getTime();
Person1.greeting();