//First example//

function bmiCalculator(weightKg, heightMtr){
    
     var bmi = Math.round((weightKg/Math.pow(heightMtr,2)));
    
    return bmi;
}

bmiCalculator(65,1.8);

//2nd example//

function bmiCalculator (weight, height) {
    
    var bmi = Math.round((weight/Math.pow(height,2)));
   
    return bmi;
}

var bmi =bmiCalculator(60,2)

if(bmi < 18.5){
    alert("Your BMI is " +  bmi +", so you are underweight")
}

if( bmi>18.5  && bmi <= 24.9 ){
    alert("Your BMI is " + bmi +", so you have a normal weight")
}

if(bmi > 24.9){
    alert("Your BMI is "  + bmi +", so you are overweight")
}




