function isLeap(year) {
    
    /**************Don't change the code above****************/    
       
    //     var checkA = year/4;
    //     var checkB = year/100;
    //     var checkC = year/400;
    
        if(year%4===0 && year%100===0 && year%400 ===0 ){
            
          console.log("Leap year")  
        }
          
        if(year%4!==0 && year%100===0 && year%400 ===0 ){
            
          console.log("Not leap year")  
          
        }
    
         if(year%4===0 && year%100===0 && year%400 !==0 ){
            
          console.log("Not leap year")  
          
        }
       
       else{
           console.log("Leap year")
       }
          
    }
      isLeap(1948);