// var person = {
//     firstName:"John",
//     lastName:"Snow",
//     age:250,
//     eyecolor:"blue"
// };
// function printPersonProps(obj){
//     // let text;
//     // text= "There was an user with the name "+ obj.firstName+" "+obj.lastName;
//     // document.write(text);
//     // for(prop in obj){
//     //     document.write(obj[prop]);)
//     for(let i=0; i<obj.length; i++){
//          document.write(obj[i]);
//     }
//     }


// printPersonProps(person);

let number = 10;
Count(number);
function Count(number){
    for (let i = 0 ; i < number ; i++){
        document.write(i+"<br>");
    }
}

///////////////////////////////////////////
// n = row*10 + col
document.write("<hr>")

for(c = 0 ; c < 10 ;c++){

        for(let i = 0; i< 10 ; i++){
            document.write((i+1)*(c+1));
            document.write("\t");
        }

document.write('<br>');
}