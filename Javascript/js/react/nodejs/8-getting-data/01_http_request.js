// npm install request
const request = require('request');
const axios = require('axios');

// let link = "https://jsonplaceholder.typicode.com/todos/1";
/*
request(link,{json: true},(err,res,data)=>{
if(err){
    return console.log(err);
};
console.log(data);
});
*/

// using axios
link= "https://jsonplaceholder.typicode.com/todos/1"
axios.get(link).then(response=>{
    console.log(response.data);
}).catch(error=>{
    console.log(error);
})