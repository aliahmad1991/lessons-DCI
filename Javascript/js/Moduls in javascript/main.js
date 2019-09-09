import{greeting} from './user.js';
import{hi} from './user.js';
import{makeElement} from './user.js';
// no need to add {} after import beacuse of default.
import doubleNumber from './user.js';
console.log(greeting);

console.log( hi(" Ali"));

console.log(doubleNumber(250));

let div=document.createElement("div");
div.append(hi("Ali"));
div.style.background="lightblue";
document.body.append(div);

makeElement("div",hi("Ali"),"lightgreen");
