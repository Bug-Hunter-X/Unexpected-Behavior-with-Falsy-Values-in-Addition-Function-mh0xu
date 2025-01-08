function foo(a, b) {
  // Check if either a or b is null or a falsy value
  if (a === null || b === null || a === 0 || a === false || a === "" || b === 0 || b === false || b === "") {
    return 0; // Handle falsy values by returning 0 (You could throw an error here as well)
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: 0
console.log(foo(0, 2)); // Output: 0
console.log(foo(1, false)); // Output: 0
console.log(foo(1, "")); // Output: 0