function greeting(){
console.log("Hello World");

}


function sayHi(message){
    console.log(message);
}
sayHi("Hello, how are you?");

let m = "Good Morning";

sayHi(m);
////////////////////////////////////////////////////////////////////////
function getMax(num1,num2){
    console.log("The Value of the first Parameter is:"+arguments[0]);
    console.log("The Count of parameter is:"+arguments.length);
    if(num1>num2){
        console.log(num1);
    }
    else{
        console.log(num2);
    }
}

getMax(5,9);// 9

function getMax1(){
    if(arguments[0]>arguments[1]){
        console.log(arguments[0]);
    }
    else {
        console.log(arguments[1]);
    }
}

getMax1(1,2);// 2

function getMax3(){
    let max = 0;
    for(let i=0;i<arguments.length;i++){
        if (arguments[i]>max){
            max=arguments[i];
        }
    }

    console.log(max+" is greater Number");
}

getMax3(12,33,1,2,8,41,102,88);// 102



function getMax4(){
    let max = 0;
    for(let i=0;i<arguments.length;i++){
        if (arguments[i]>max){
            max=arguments[i];
        }
    }

    console.log(max+" is greater Number");
    return max;
}

document.getElementById("maxNumber").innerHTML=getMax4(1,5,88,999,10,500);



function getMax5(){
    let max = 0;
    for(let i=0;i<arguments.length;i++){
        if (arguments[i]>max){
            max=arguments[i];
        }
    }

    console.log(max+" is greater Number");
    //return max;
    document.getElementById("maxNumber").innerHTML=max;
}
getMax5(100,200,854,354,587,4);// 854