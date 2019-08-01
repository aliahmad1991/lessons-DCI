let images = [];
let time= 3000;
let i=0;
images[0]="https://picsum.photos/id/666/900/900";
images[1]="https://picsum.photos/id/686/900/900";
images[2]="https://picsum.photos/id/626/900/900";
images[3]="https://picsum.photos/id/696/900/900";
images[4]="https://picsum.photos/id/635/900/900";
images[5]="https://picsum.photos/id/676/900/900";

function changeImg(){
    document.querySelector("img").src=images[i];
    if(i<images.length-1){
        i++
    }
    else{
        i=0;
    }
}

setInterval(changeImg,time);