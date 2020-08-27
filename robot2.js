function buyMilk(money,costPerBottle){

    console.log("Move up");
    console.log("Move down");
    console.log("You bought " + numberOfBottles(money,costPerBottle) + " bottles of milk");
   

    console.log("You have a change " + "of " +  "$ " + remainingChange(money,costPerBottle) );
}
   
  function numberOfBottles(startingMoney,costPerBottle){
  return Math.floor(startingMoney/costPerBottle);

}

function remainingChange(startingMoney,costPerBottle){

   var change =   startingMoney % 1.5;
   return change;

}

buyMilk(10,2.5);