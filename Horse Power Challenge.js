
/*
https://www.ajdesigner.com/phphorsepower/horsepower_equation_et_method_horsepower.php#ajscroll
https://www.auto123.com/en/new-cars/technical-specs/hyundai/accent/2002/base/gl/
*/



function quarterMileToMeter(miles) {
    const meterPerMile = 1609.34;
    return miles * meterPerMile;
}


function calcHP(weight, ET) {
    // Convert the weight from kilograms to pounds before using it in the calculation
    const weightInPounds = weight * 2.20462; // 1 kilogram is approximately 2.20462 pounds
    return weightInPounds / Math.pow(ET / 5.825, 3);
}

var weightInKg = 1600; // Input weight in kilograms
var ET = 20.1; // Elapsed time in seconds
var roundedHP = Math.round(calcHP(weightInKg, ET)); // Use weight in kilograms


console.log(quarterMileToMeter(miles) + " meters");
console.log("Weight in kilograms: " + weightInKg + " kg");
console.log("Estimated HP: " + roundedHP + " HP");

//var weightInPounds = weightInKg * 2.20462; // Convert weight from kilograms to pounds for display
//console.log("Weight in pounds (for display): " + weightInPounds + " lbs");

/*
Your analysis of the code is correct. In the code snippet you provided, 
the weight is initially considered in pounds in the `calcHP` function, 
then the output of the function (which is in pounds) is converted to kilograms
for display in the console.log statement. Finally, the weight is converted back to
pounds to calculate the horsepower (`roundedHP`) based on the weight in pounds. 
The final output displayed in the console.log statement shows the weight in kilograms.

So, your approach is correct: the weight is handled in pounds within the function calculations, 
but for display purposes, it's converted to kilograms in the console.log statement.

Yes, in the given code snippet, the weight used in the formula for calculating horsepower (`calcHP`) is in pounds.
The weight input `weightInKg` is converted to pounds within the `calcHP` function before being used in the calculation.
Therefore, the weight considered in the formula is in pounds, not in kilograms.
*/