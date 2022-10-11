/////////////////////////// Excess Properties ///////////////////////////
//Check properties of object and if there is any property 
//that is not defined in the object type, it will throw an error

const showUserDetails = (obj:{name:string, age:number}) => {
    console.log(`Name: ${obj.name}, Age: ${obj.age}`);
    
}

// const user={
//     name:'Max',
//     age:303,
//     address:'123 Main Street',
// }

showUserDetails({
    name:'Max',
    age:303,
    // address:'123 Main Street',
})