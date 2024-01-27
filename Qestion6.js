// //Q6. Write a JavaScript function called curry that takes a function as an argument and returns a curried
// version of that function. The curried function should accept arguments one at a time and return a new
// function until all arguments are provided. Then, it should execute the original function with all arguments.
// Test the curry function with a function that adds two numbers.
function curry(func) {
    return function curried() {
      var args = Array.prototype.slice.call(arguments);
  
      if (args.length >= func.length) {
        return func.apply(null, args);
      } else {
        return function() {
          var nextArgs = Array.prototype.slice.call(arguments);
          return curried.apply(null, args.concat(nextArgs));
        };
      }
    };
  }
  
  const add = function(a, b) {
    return a + b;
  };
  
  const curriedAdd = curry(add);
  
  console.log("Curried Add (1):", curriedAdd(1).toString());
  console.log("Curried Add (1)(2):", curriedAdd(1)(2));
  console.log("Curried Add (1, 2):", curriedAdd(1, 2));
  