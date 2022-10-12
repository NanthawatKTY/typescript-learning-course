type Point={
    x: number,
    y: number,
}

type Position={
    lat:number,
    lng:number,
}

let coordinates:Point | Position
coordinates = {
    x: 10,
    y: 20,
}

coordinates = {
    lat: 10,
    lng: 20,
}

console.log(coordinates);



//////////////////// Message /////////////////////////
type Message = string | string[]
// let message: Message = 'Hello World'
let message: Message = ['Hello World', 'Hello World 2']

console.log(message);

