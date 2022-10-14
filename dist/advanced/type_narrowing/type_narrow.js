"use strict";
//// TypeOfGuard ////
// const truncate = (value:string | number, length:number) => {
//     if (typeof value === "string") {
//         return value.slice(0, length);
//     }
//     else if (typeof value === "number") {
//         return value.toString().slice(0, length);
//     }
function calculateArea(shape) {
    switch (shape.type) {
        case "rectangle":
            return shape.width * shape.height;
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "triangle":
            return shape.base * shape.height / 2;
        default:
            return new Error("Invalid shape");
    }
}
console.log(`Mathmetics Shape: ` + calculateArea({ width: 10, height: 20, type: "rectangle" }));
