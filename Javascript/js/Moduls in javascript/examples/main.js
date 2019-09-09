
// //import p, { printName,printAge} from './person.js';
// import * as human from'./person.js';
// let person = new human.default("Romal",55);

// console.log(person);
// printName(person);
// printAge(person);

// // to import everything from person.js

import * as p from './person.js';

let person=new p.default("Ali",22);
console.log(person);
p.printName(person);
p.printAge(person);
/////////////////////////////////////////////////

