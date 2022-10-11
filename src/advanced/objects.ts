//////////////////////// Non defined properties type ////////////////////////
const person={
    name:'Max',
    age:30,
}

//////////////////////// Defined properties type ////////////////////////
const person2:{name:string, age:number}={
    name:'Jojo',
    age:30,
}

const position: {lat:number, lng:number} = {
    lat: 10,
    lng: 20,
}

//////////////////////// Function receives object value ////////////////////////

const showDetails = (obj:{name:string, age:number}) => {
    console.log(`Name: ${obj.name}, Age: ${obj.age}`);
}

//Send argument to function
showDetails(person2)


//////////////////////// Return object function ////////////////////////
const randomPostion = ():{lat:number, lng:number} =>{
    return {
        lat: Math.random(),
        lng: Math.random(),
    }
}

console.log(randomPostion());
