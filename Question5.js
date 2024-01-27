// Q5. Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using
// recursion. Test the function with different inputs.

// JavaScript function for calculating factorial using recursion
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  
  console.log("Factorial of 5:", factorial(5));
  console.log("Factorial of 8:", factorial(8));
  