//Spread operator is used to split up array elements or object properties.

const sections:string[] = ['Math', 'Science', 'English', 'History']
const departments:string[] = ['IT', 'HR', 'Finance', 'Marketing']

departments.push(...sections)

console.log(departments);
