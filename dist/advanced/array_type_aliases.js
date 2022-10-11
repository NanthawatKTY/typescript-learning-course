"use strict";
//Array with type alias
const staffs = [];
staffs.push({ name: 'Max', salatry: 100000, department: 'IT' });
staffs.push({ name: 'Lala', salatry: 400000, });
staffs.push({ name: 'Koet', salatry: 300000, });
// console.log(staffs[2]);
// staffs.forEach((item, index) => {
//     console.log(`Staff ${index + 1}: ${item.name}`);
// })
// for of loop for array with object
for (let staff of staffs) {
    console.log(staff);
}
