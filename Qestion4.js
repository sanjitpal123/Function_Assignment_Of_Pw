// Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the
// amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
// function with various incomes.
// JavaScript function with closure to calculate tax
function calculateTax() {
    const taxRates = {
      low: 0.1,
      medium: 0.15,
      high: 0.2,
    };
  
    return function (income) {
      if (income <= 50000) {
        return income * taxRates.low;
      } else if (income <= 100000) {
        return income * taxRates.medium;
      } else {
        return income * taxRates.high;
      }
    };
  }
  
  // Example usage
  const taxCalculator = calculateTax();
  console.log("Tax for $40,000 income:", taxCalculator(40000));
  console.log("Tax for $80,000 income:", taxCalculator(80000));
  console.log("Tax for $120,000 income:", taxCalculator(120000));
  