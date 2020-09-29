
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
   
    
    
    
       
   console.log(beerCount +" " + bword + " of beer on the wall"); 
   console.log(beerCount+ " " + bword + " of beer,");

   console.log("Take one down, pass it around,");
   
   beerCount--;

   console.log(beerCount + " " + bword + " of beer on the wall.");
   console.log(" \n");
   
   }while(beerCount>=1);
}

 
     
 

    

    