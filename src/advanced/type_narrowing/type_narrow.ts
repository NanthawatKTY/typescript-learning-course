//// TypeOfGuard ////
// const truncate = (value:string | number, length:number) => {
//     if (typeof value === "string") {
//         return value.slice(0, length);
//     }
//     else if (typeof value === "number") {
//         return value.toString().slice(0, length);
//     }

//     // return value;
// }

// console.log(truncate('Hello World', 3))
// console.log(truncate(123445, 4))


////////////////////////////////////////////////////////////////

//// Equality Narrowing ////
// Equality Narrowing is a feature that allows you to narrow down the type of a variable based on its value.
// function compareValue(x:string|number, y:string|number){
//     if (x === y) {
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(compareValue(1, "1"));



////////////////////////////////////////////////////////////////
////Instanceof Narrowing ////
// class User{
//     constructor(public name:string, public age:number){}
// }

// class Employeet{
//     constructor(public name:string, public age:number, public department:string = "unknown"){}
// }

// function printObject(obj:User|Employeet){
//     if (obj instanceof User) {
//         console.log("User: ", obj.name, obj.age);
//     }
//     else if (obj instanceof Employeet) {
//         console.log("Employee: ", obj.name, obj.age, obj.department);
//     }
// }

// printObject(new User("Tae", 20));
// printObject(new Employeet("Luke", 20, "IT"));

////////////////////////////////////////////////////////////////
//// Discriminated Unions ////
interface Rectangle{
    width:number;
    height:number;
    type:"rectangle";
}

interface Circle{
    radius:number;
    type:"circle";
}

interface Triangle{
    base:number;
    height:number;
    type:"triangle";
}

type Shape = Rectangle | Circle | Triangle;

function calculateArea(shape:Shape){
    switch (shape.type) {
        case "rectangle":
            return shape.width * shape.height;
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "triangle":
            return shape.base * shape.height / 2;
        default:
            return new Error("Invalid shape");
    }
}

console.log(`Mathmetics Shape: ` + calculateArea({width: 10, height: 20, type: "rectangle"}) + "Unit");
