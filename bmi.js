function bmiCalculator(weightKg, heightMtr){
    
    var bmi = Math.floor((weightKg/(heightMtr*heightMtr)));
    
    return bmi;
}

bmiCalculator(65,1.8);