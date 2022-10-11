// Function Overloading is a feature that allows a function to have multiple signatures(parameters and return type) 
// that are used to perform different tasks.

// function sayHi():string
// function sayHi(name:string):string
// function sayHi(name?:unknown):unknown{
//     if(typeof name === 'string'){
//         return `Hi ${name}`
//     }
    
//     if(!name){
//         return "Hi TypeScript"
//     }

//     throw new Error("Invalid argument")
// }

// console.log(sayHi("Tae nama"));


////// with 2 parameters ///////

function total(a:number, b:number):number
function total(a:string, b:string):string
function total(a:unknown, b:unknown):unknown{
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b
    }
    
    if(typeof a === 'string' && typeof b === 'string'){
        return parseInt(a) + parseInt(b)
    }

    throw new Error("Invalid argument")
}

console.log(total(1, 3));
console.log(total("1", "3"));


