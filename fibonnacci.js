function fibonacciGenerator(n) {
    //Do NOT change any of the code above 👆

    //Write your code here:

    var fib = [];

    if (n === 1) {

        fib.push(0);

        console.log(fib);
    } else {

        var fib2 = [0, 1]

        for (var i = 2; i < n; i++) {
            fib2.push(fib2[i - 2] + fib2[i - 1]);
        }

        console.log(fib2);
    }


    //Return an array of fibonacci numbers starting from 0.

    //Do NOT change any of the code below 👇
}