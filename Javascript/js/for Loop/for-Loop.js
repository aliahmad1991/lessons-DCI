// Print Number between 1 and 100*9


// for (let i=1 ; i<=100 ; i++){
//     console.log( i + " * 9 = " + i *9 );

// }

// // the Grade Assigner
// // if the Result > 89 then you get A
// // if the Result > 80 then you get B
// // if the Result > 70 then you get C
// // if the Result > 65 then you get D
// // else you get F

// for( let i=0 ; i<=100; i++){
//     if(i>89){
//         document.write(i + " you get A <br>");
//     }
//     else if (i>80 ){
//         document.write(i+" you get B <br>");
//     }
//     else if (i>70 ){
//         document.write(i+" you get C <br>");
//     }
//     else if (i>65 ){
//         document.write(i+" you get D <br>");
//     }
//     else{
//         document.write(i + " you failed <br>");
//     }

// }

// /////////////////////////////////////////////////////////

// for( let i=100; i>=0; i--){
//     if(i>89){
//         document.write(i + " you get A <br>");
//     }
//     else if (i>80 ){
//         document.write(i+" you get B <br>");
//     }
//     else if (i>70 ){
//         document.write(i+" you get C <br>");
//     }
//     else if (i>65 ){
//         document.write(i+" you get D <br>");
//     }
//     else{
//         document.write(i + " you failed <br>");
//     }

// }

/////////////////////////////////////////////////////////////////////////////////////////

//10 lines of 10 Stars/////
 
// for (let i=1 ; i<= 100 ; i++){
//     document.write( ' * ' );
//     if(i % 10 == 0){
//         document.write('<br>');
//     }
// }
////////////////////////////////////////////////////////////////////


// for(let i=10;i>=0;i--){   
//     for(let c=i ; c<= 10 ; c++){
//         document.write(  ' 0 ' )
//     }
//     document.write('<br>');
    
// }
for(let i=0;i<=10;i++){   
    for(let c=i ; c<= 10 ; c++){
        document.write(  ' 0 ' )
    }
    document.write('<br>');
    
}
///////////////////////////////////////////
for(let i=0;i<10;i++){
    for(let j=0;j<=i;j++){
        // alert('i='+i+' '+'j='+j)
        document.write( ' '+j);
    }

    document.write('<br>');
}


for(let i=0;i<10;i++){
    for(let j=i;j<10;j++){
        // alert('i='+i+' '+'j='+j)
        document.write(' * ');
    }

    document.write('<br>');
}
///////////////////////////////////
// document.write('<center>')
for(i=0;i<=10;i++){  
    for(k=5;k>=i;k--){  
    document.write( "  ");  
    }  
    for(j=1;j<=i;j++){  
    document.write( " *  ");  
    }  
    document.write( "<br>");  
    }  
    // for(i=9;i>=1;i--){  
    // for(k=5;k>=i;k--){  
    // document.write( "  ");  
    // }  
    // for(j=1;j<=i;j++){  
    // document.write( " *  ");  
    // }  
    // document.write( "<br>");  
    // }  
    /////////////////////////////////////
    document.write("<hr>");
     for(var i=0; i<= 20; i++) 
     { 
         for(let j=0;j<20-i;j++){
             document.write('&nbsp;');

         }
         for(let c=0;c<i;c++){
             document.write('* ');
         }
         document.write('<br>');
     }
    
     for(var i=20; i>= 0; i--) 
     { 
         for(let j=0;j<20-i;j++){
             document.write('&nbsp;');

         }
         for(let c=0;c<i;c++){
             document.write('* ');
         }
         document.write('<br>');
     }