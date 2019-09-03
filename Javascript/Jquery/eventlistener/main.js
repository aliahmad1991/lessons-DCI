 $("button").click(function(){
     alert($(this).text());
     $(this).css("background","pink");
     $("h1").addClass("wrong");
     console.log($("h1").attr("class"));
     $("h1").text($("h1").attr("class"));
         // jquery effects
    
    $("div").slideToggle(1000,function(){
        $(this).remove();
    })     
 });
 $("h1").click(function(){
     $("h1").toggleClass("correct");
 })

 //let btn=document.querySelectorAll("button");
//  for(let i=0;i<btn.length;i++){
//      btn[i].addEventListener("click",function(){
//  alert(this.innerText);
//      });
//  }
