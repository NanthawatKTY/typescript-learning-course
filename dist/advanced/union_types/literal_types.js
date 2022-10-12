"use strict";
let role = 'guest';
console.log(role);
/////////////////// Literal Types with Function ///////////////////
function confirmDialog(message, title = null) {
    console.log(message, title);
}
confirmDialog('Hello World', 'hi there');
function confirmDialog2(answer) {
    console.log(answer);
}
confirmDialog2('no');
let alignment = 'center-ease-in';
console.log(alignment);
