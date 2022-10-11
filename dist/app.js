"use strict";
// function total(a:number, b:number) {
//   return a + b;
// }
// console.log(total(1, 4));
///////////////////////// Assertion ////////////////////////////////
//Assertion
// let username:unknown;
// username = "Tae nama";
// console.log((username as string).toLowerCase());
// console.log((<string>username).toLowerCase());
///////////////////////// If Else /////////////////////////////////
//If-Else
// let amounts:number = 7
// let result:string
//   //ternary
// result = amounts > 5 ? "Big number" : "Small number"
// console.log(`Result is ${result}`);
/////////////////////////// Switch Case ///////////////////////////////
//Switch-case
// let service:number = 3
// let result:string 
// switch (service) {
//   case 1: 
//     result = "Service 1"
//     break;
//   case 2:
//     result = "Service 2"
//     break;
//   case 3:
//     result = "Service 3"
//     break;
//   default:
//     result = "No service"
//     break;
// }
// console.log(`Result is ${result}`);
/////////////////////////// For loop ///////////////////////////////
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = ["tae", "nama", "is", "cool"];
for (let counter = 0; counter < array2.length; counter++) {
    console.log(array2[counter]);
}
array2.forEach((item, index) => {
    console.log(item, index);
});
