function buyMilk(money){

    console.log("Move up");
    console.log("Move down");
    console.log("You bought " + numberOfBottles(money,1.5) + " bottles of milk");
    var change = money % 1.5;

    console.log("You have a change " + "of " + "$ " + change);
}
   
  function numberOfBottles(startingMoney,costPerBottle){

  return Math.floor(startingMoney/costPerBottle);

}
buyMilk(5);