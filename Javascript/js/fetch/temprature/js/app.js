const appKey = 'a54fee1878380e9147f7f7180644f6c8';

function weatherBallon(city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid="+ appKey)
    .then(function(resp){
        
      return resp.json()
    
    }) // Convert data to json
    .then(function(data){ 
        console.log(data);      
        drawWeather(data);
      
    })
    .catch(function(){

    });
}
function drawWeather(data){
   
    var celcius = Math.round(parseFloat(data.main.temp)-273.15);
    console.log(celcius)

    var description = data.weather[0].description;
    document.getElementById('description').innerHTML=description;   
    document.getElementById('description').innerHTML=description;
    document.getElementById('temp').innerHTML=celcius+'&deg;';
    document.getElementById('location').innerHTML=data.name;
}

let btn=document.getElementById("btn");
let city=document.getElementById("txt");
btn.addEventListener("click",search);
function search(){
let cityName = city.value;
console.log(cityName);
weatherBallon(cityName);
}
// window.onload=function(){
//     weatherBallon("Hamburg");
// }