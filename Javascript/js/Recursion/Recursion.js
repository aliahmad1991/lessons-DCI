function countdownRec(n){
if(n>=0){
    console.log(n);
    return countdown(n-1);
}

}
countdownRec(10);
function countdown(n){
    while(n>=0){
        console.log(n);
        n--;
    }
}
countdown(10);