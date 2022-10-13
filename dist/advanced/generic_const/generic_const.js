"use strict";
//Generic function
//T = Type parameter (generic type) that you want it to be.
function getElement(arr, count) {
    return arr.slice(arr.length - count, arr.length);
}
//Generic multiple type parameter
function merge(param1, param2) {
    return Object.assign(Object.assign({}, param1), param2);
}
//Generic Constraint
//T extends U = T must be U or U's child
//Can't use other type that is not U or U's child
function merge2(param1, param2) {
    return Object.assign(Object.assign({}, param1), param2);
}
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myStr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const myBool = [true, false, false, true];
//// Generic function log
// console.log(getElement<number>(myNum, 3));
// console.log(getElement<string>(myStr, 3));
// console.log(getElement<boolean>(myBool, 3));
//// Generic multiple type parameter log
const product = { name: 'iPhone', price: 100000 };
const description = { description: ['Red', '64GB', '4G'] };
console.log(merge(product, description));
console.log(merge2(product, description));
