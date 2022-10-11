//////////////////////////// Type Aliases, optional properties, Type Aliases(Readonly Modifier) ////////////////////////////

//If there's ? after the property name, it means that the property is optional
//You can add value in property or not if it's optional

//If you want to make the property readonly, you can add readonly modifier before the property name

//You can use type alias to define the object type

// Employee Type
type Employee = {
    readonly id: number,
    name: string,
    readonly salary: number,
    phone?: string,
}

// Object
let emp1: Employee = {
    id: 1,
    name: "Tae nama",
    salary: 100000,
    phone: "123-456-7890",
}

let emp2: Employee = {
    id: 2,
    name: "Tae nama 2",
    salary: 200000,
    phone: "123-456-2222",
}

let emp3: Employee = {
    id: 3,
    name: "Tae nama 3",
    salary: 300000,
}

// Edit value
// emp1.id = 22
emp1.name = "Tae nama 2"
// emp1.salary = 200000
emp1.phone = "098-765-4321"

console.log(emp1);
console.log(emp2);
console.log(emp3);
