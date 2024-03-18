//WAP to Check whether the number is prime or not using function and loop.

 function is_prime(num)
 {
             let flag = false;
            for(let i=2;i<num;i++){
             if(num % i == 0){
                  flag=true;
                  break;
             }
              else{
                  flag=false;
              }
       }
       if(flag === true){
             console.log("The number "+num+" is not prime");  
         }
           else{
            console.log("The number "+num+" is prime");  
           }
 }
         is_prime(5);  //function calling

       