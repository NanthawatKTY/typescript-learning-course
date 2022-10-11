"use strict";
//Spread operator is used to split up array elements or object properties.
const sections = ['Math', 'Science', 'English', 'History'];
const departments = ['IT', 'HR', 'Finance', 'Marketing'];
departments.push(...sections);
console.log(departments);
