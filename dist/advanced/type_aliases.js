"use strict";
//////////////////////////// Type Aliases, optional properties, Type Aliases(Readonly Modifier) ////////////////////////////
// Object
let emp1 = {
    id: 1,
    name: "Tae nama",
    salary: 100000,
    phone: "123-456-7890",
};
let emp2 = {
    id: 2,
    name: "Tae nama 2",
    salary: 200000,
    phone: "123-456-2222",
};
let emp3 = {
    id: 3,
    name: "Tae nama 3",
    salary: 300000,
};
// Edit value
// emp1.id = 22
emp1.name = "Tae nama 2";
// emp1.salary = 200000
emp1.phone = "098-765-4321";
console.log(emp1);
console.log(emp2);
console.log(emp3);
