
var beerCount =100;  

var beer;
var beers;

function deductBeer(){

    
   do{ 

   if(beerCount===1){

      var bword = "bottle";

      }  else {

        var bword = "bottles";
                
       }
   
      
   console.log(beerCount +" " + bword + " left"); 

   beerCount--;
   
   }while(beerCount>=1);
}

 
     
 

    

    