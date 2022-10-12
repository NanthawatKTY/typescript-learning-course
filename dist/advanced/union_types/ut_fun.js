"use strict";
////////////////////// Union Type & Function /////////////////////////
const sayGreetings = (name) => {
    if (typeof name === 'string') {
        console.log(`Hello ${name}`);
    }
    else {
        name.forEach(element => {
            console.log(`Hello array ${element}`);
        });
        console.log(`Hello ${name.join(' and ')}`);
    }
};
sayGreetings('John');
sayGreetings(['John', 'Jane']);
