///////////////// Void ///////////////////////

// function sayHi():void{
//     console.log("Hi");
    
// }
// sayHi()


///////////////// Parameter ///////////////////////
// function sayHello(nameFun:string){
//     console.log(`Hi ${nameFun}`);
    
// }
// sayHello("Tae Name")

///////////////// Return ///////////////////////
// function getDiscount(price:number, discount:number):number{
//     return price * discount
// }

// function getAddress():string{
//     return "123 Main Street"
// }

// console.log(`You got ${getDiscount(500, 0.2)} usd discount`);
// console.log(`Your address is ${getAddress()}`);


///////////////// Give and Receive Function (Parameter and Return) ///////////////////////
// function checkNumber(num:number){
//     if (num % 2 == 0) {
//         return "Even number"
//     }else{
//         return "Odd number"
//     }
// }

// function total(a:number, b:number):number{
//     return a + b
// }

// console.log(checkNumber(1))
// console.log(total(1, 3))

///////////////// Arrow Function ///////////////////////
// const checkNumber = (num:number):string => {
//     if (num % 2 == 0) {
//         return "Even number"
//     }else{
//         return "Odd number"
//     }
// }

// const total = (a:number, b:number):number => a + b

// console.log(checkNumber(1))
// console.log(total(1, 3))


///////////////// Default Parameter ///////////////////////
const showEmployee = (name:string, age:number = 30, address:string="Unknown"):void => {
    console.log(`Name is ${name}, age is ${age}, and address is ${address}`);
    
}

showEmployee("Tae nama", 24 ,"123 Main Street")
showEmployee("Tae nama")
showEmployee("Tae nama")
