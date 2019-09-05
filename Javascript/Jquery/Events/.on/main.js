$(document).ready(function(){
    $("p").on("mouseout mouseover",function(){
        $(this).toggleClass("light");
        

    })
    
});

/////////// second way /////////////////////////

$('p').on({
    mouseover:function(){
        $('body').css('background','lightblue');
},
mouseout:function(){
    $('body').css('background','lightgreen');
},
click:function(){
$('body').css('background','purple');
}
});
// this event works just for the child section inside the div 
$('div').on('click',"section",function(){
    $(this).css({"color":"red",
                 "background":"pink"}
);

$(this).slideToggle(2000);
});

$('#add').on("click",function(){
    $("<section> this is new section inserted from jquery </section>").insertAfter("#add");
});


$('#off').on("click",function(){
    $('div').off("click");
})