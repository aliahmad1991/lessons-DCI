 $(document).ready(function(){
     $('select').change(function(){
       // alert("you selected the City "+$(this).val());
        $('p').text("you selected the City: "+$(this).val());
         $('p').show().fadeOut(1000);
        //$('p').hide().fadeIn(1000);
     });
 })
///////////// Java script ////////////////////////////////////

// let select=document.querySelector("select");
// //////////////////// First way with Javascript ///////////////
// // select.addEventListener("change",city);
// // function city(){
// // alert("you selected "+this.value);
// // }
// /////////////////// second way with Javascript ///////////////
// select.onchange=function(){
//     alert("you selected "+this.value);
// }