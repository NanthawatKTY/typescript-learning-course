"use strict";
// Function Overloading is a feature that allows a function to have multiple signatures(parameters and return type) 
// that are used to perform different tasks.
function total(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return parseInt(a) + parseInt(b);
    }
    throw new Error("Invalid argument");
}
console.log(total(1, 3));
console.log(total("1", "3"));
