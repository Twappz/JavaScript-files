var name = prompt("What's your name? ");
var name2 = prompt("Your crush's name? ")

var n = Math.random();

n= n*100;

n= Math.floor(n)+1;//1 to 100

if(n > 70){

    alert("Your score is " + n + "% " + "cool !!!")
}

if(n > 30  && n <=70 ){

    alert("Your score is " + n + " %" );

}

if(n <= 30 ){

    alert("Your score is " + n + " % " + " not so good ");

}


