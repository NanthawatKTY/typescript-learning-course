"use strict";
///////////// Interface structure /////////////
///////////// Interface(Readonly Modifier) /////////////
///////////// Interface(Optional) /////////////
///////////////////////// Extend Interface /////////////////////////
// interface Person extends Job, Contact{
//     name: string,
//     age?: number,
//     readonly gender: string,
//     //Method in interface
//     info: () => void;
// }
////////////////////////// Intersection Type ///////////////////////
let personUser1 = {
    name: 'John',
    age: 30,
    gender: 'male',
    //Method in interface
    info() {
        console.log(`Last view: ${new Date().toLocaleString()}`);
    },
    title: 'Developer',
    salary: 100000,
    address: 'Bangkok',
};
// personUser1.name = 'female'/
console.log(personUser1);
////Method in interface
// personUser1.info();
////////////////////// Interface vs Type Aliases ///////////////////////
