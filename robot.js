function buyMilk(money){

    console.log("Move up");
    console.log("Move down");
    var numberOfBottles =Math.floor(money/1.5);
    console.log("You bought " + numberOfBottles + " bottles of milk");
    return money % 1.5;
}
    var change =buyMilk(10);
    console.log(change);