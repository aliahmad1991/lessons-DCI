const axios = require('axios');

// axios.get('https://reqres.in/api/users')
// .then((response)=>{
//     // success
//     console.log(response);
// })
// .catch((err)=>{console.log(err)});

// axios({
//     method:'get',
//     url:'https://reqres.in/api/users',
// })
// .then(response =>{console.log(response)})
// .catch(err => {console.log(err)});


let language="en-us";
word_id="game";
axios({
    method:'get',
    url:`https://od-api.oxforddictionaries.com:443/api/v2/entries/${language}/${word_id}`,
    headers:{
        app_id  : "ecd739de",
        app_key  : "beed2f9745c208fef53f91e88f1b5c58"

    }
})
.then(response =>{

    let senses = response.data.results[0].lexicalEntries[0].entries[0].senses
    
    senses.forEach(element =>{
        console.log(element.definitions)
    })
})
.catch(err => {console.log(err)});
