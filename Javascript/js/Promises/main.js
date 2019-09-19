const posts=[
    { title:"Post number one" , body:" this is the Post One" },
    { title:"Post number Two" , body: "this is the post Two" }
];
function createPost(post){
 return new Promise(function(resolve,reject){
  setTimeout(function(){
      posts.push(post);
      let error=false;
      if(!error){
      resolve(" the new post added the the array ");
      }else{
          reject("Error : Something went wrong");
      }
  },2000)
 })
}
function getPost(){
    setTimeout(function(){
let output=" ";
posts.forEach(function(item){
    output+= ` <li> ${item.title} </li>`;
});
document.getElementById("output").innerHTML+=output;
    },1000);
}
createPost({ title:" post number three", body:" this is the post three" }).
then(function(yes){
    console.log(yes);
    getPost();
})
.catch(function(serverError){
    console.log(serverError);
})
console.log(posts);