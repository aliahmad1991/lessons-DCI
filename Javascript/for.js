


let food = new Array("Pizza","Kebab","Döner","Falafel","Briani","Kartofel Salat");
let foodLength=food.length;

for( let counter = 0 ; counter< foodLength; counter ++ ){
    document.write(food[counter]+"<br>");
}

///////////////////////////////////////////////////////////////////////////////////////////////
let colors= new Array ("red","blue","green","yellow","black");
colors.push('pink')
document.write('<hr>');

for(i=0 ; i < colors.length ; i++){
    document.write(colors[i]+'<br>');
}
document.write('<hr>');

for(let div=i=0; i< colors.length;i++){

    div="<div style='width:"+i+1*90+"px;margin:auto ;text-align:center;color:white; background:"+colors[i]+"'>"+colors[i]+"</div>";
    document.write(div);
}