"use strict";
// Array with no defined data
const users = [];
users.push("Uri");
users.push("Tae nama");
users.push("Max");
console.log(users);
// Array with defined data
const users2 = ["Uri", "Tae nama", "Max"];
console.log(users2);
// Array with defined data and different types
const users3 = ["Uri", "Tae nama", "Max", 1, 2, 3];
console.log(users3);
const ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(ages[3]);
////////////// Accessing array elements /////////////
const customers = ["Uri", "Tae nama", "Max"];
// for (let index = 0; index < customers.length; index++) {
//     const element = customers[index];
//     console.log(`Customer ${index + 1}: ${element}`);
// }
customers.forEach((item, index) => {
    console.log(`Customer ${index + 1}: ${item}`);
});
