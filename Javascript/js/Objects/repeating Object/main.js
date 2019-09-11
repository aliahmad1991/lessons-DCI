let rabbit={};
rabbit.speak=function(speak){
    console.log(speak);
}
rabbit.speak("I am Alive");
///////////////////////////////////////////////
function speak(text){
    console.log(`the ${this.type} Rabbit says ${text}`);

}
let whiteRabbit = { type:"white",speak};
let hungryRabbit = { type: "hungry",speak};

whiteRabbit.speak("hello");
hungryRabbit.speak("I need a Carrot");

speak.call(hungryRabbit,"Hello");
////////////////////////////////////////////////

let grayRabbit=Object.create(rabbit);
grayRabbit.type="gray";
grayRabbit.speak("hi");
////////////////////////////////////////////////

let myobj={};
myobj.alert=function(text){
    document.write(text);
}