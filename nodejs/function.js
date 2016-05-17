// Define function without arguments
function printAll() {
  for (var index in arguments) {
    console.log(`Argument ${index}: "${arguments[index]}"`);
  }
}

// But call it with arguments
printAll('dog', 'cat', 'chicken');

/* Out:
 * Argument 0: "dog"
 * Argument 1: "cat"
 * Argument 2: "chicken
 */

// Function is object!
// Also you can Function.prototype.apply()
printAll.apply(null, ['dog', 'cat', 'chicken']);


// Recursive anonymous function
// Can't use `arguments.callee` in strict mode
var callCount = 0;
(function() {
  callCount++;
  console.log(`Function called ${callCount} times.`);
  if (callCount < 5) arguments.callee();
})();

/* Out:
 * Function called 1 times.
 * Function called 2 times.
 * Function called 3 times.
 * Function called 4 times.
 * Function called 5 times.
 */
