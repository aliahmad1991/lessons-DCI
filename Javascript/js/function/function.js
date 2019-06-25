
       function dummy(){
           alert("Hi there!");
       }

       function greetUser(name, surname){
           if(typeof name != "undefined"){
           alert("Hi " + name + " " + surname);
       }
       else{
           alert("Please enter your Name and surname")
       }
    }

       //standard function declaration
       function square(number){
           return number*number;
       }

       // using anonymous function
       var sum = function(number){
           return number + 10;
       }


       function whichDayIsIt(number){
           var weekday;
           switch(number){
               case 0:
               weekday="sunday"
               break;
               case 1:
                   weekday="Monday"
                   break;
                case 2:
                    weekday= "tuesday"  
                    break ;
                case 3:
                     weekday= "wendsday"  
                     break ;
                case 4:
                      weekday= "thursday"  
                      break ;
                case 5:
                      weekday= "friday"  
                      break ;
                case 6:
                      weekday= "saturday"  
                      break ;                
           }
          
            return weekday
       }
        function week(){
            for (let i=0;i<7;i++){
                document.write(whichDayIsIt(i)+ "is the day number " + i+"<br>") }
        }

        let car1={name:"VW",country:"Germany"};
        let car2={name:"ford",country:"England"};
        let car3={name:"fiat",country:"Italy"};

        let cars = [car1,car2,car3];

        //please write a function to parse country depending on the Name of the Car

        function findcarcountry(name){
            let country;
         
            for(let i = 0  ;i<cars.length;i++){
              if(cars[i].name == name){country = cars[i].countrty;
            }  
       
            }
             
            return country;
        }

        //
       auftauchen