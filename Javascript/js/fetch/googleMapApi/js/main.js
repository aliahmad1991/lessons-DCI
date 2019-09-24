let map;
function initMap(){
    map = new google.maps.Map(document.getElementById('map'),{
        center:{lat:53.5511, lng:9.9937},
        zoom:8
    });
}


let btn=document.getElementById("btn");
let input1=document.querySelectorAll("input")[0];
let input2=document.querySelectorAll("input")[1];

btn.addEventListener("click",update);
function update(){
let uLat = input1.value;
let uLng = input2.value;
map.setCenter(new google.maps.LatLng(parseFloat(uLat),parseFloat(uLng)));

}