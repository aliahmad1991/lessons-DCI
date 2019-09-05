$(document).ready(function(){
    $('#users').submit(function(e){
        let regEx=/^[a-zA-Z]+$/;
        let inputVal=$('#firstName').val();
        if(regEx.test(inputVal)==false){
            // alert("the first name is not correct");
            $('#result').html('<p class="error">Not valid Name</p>').show().fadeOut(5000);
            e.preventDefault();
        }

    });
});