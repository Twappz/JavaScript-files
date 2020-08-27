function bmiCalculator(weightKg, heightMtr){
    
     var bmi = Math.floor((weightKg/Math.pow(heightMtr,2)));
    
    return bmi;
}

bmiCalculator(65,1.8);