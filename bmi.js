function bmiCalculator(weightKg, heightMtr){
    
     var bmi = Math.round((weightKg/Math.pow(heightMtr,2)));
    
    return bmi;
}

bmiCalculator(65,1.8);