function buyMilk(money){

    console.log("Move up");
    console.log("Move down");
    console.log("You bought " + numberOfBottles(money,1.5) + " bottles of milk");
   

    console.log("You have a change " + "of " +  "$ " + remainingChange(money,1.5) );
}
   
  function numberOfBottles(startingMoney,costPerBottle){
  return Math.floor(startingMoney/costPerBottle);

}

function remainingChange(startingMoney,costPerBottle){

   var change =   startingMoney % 1.5;
   return change;

}

buyMilk(5);