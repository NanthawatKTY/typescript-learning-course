"use strict";
//Any & UnknowRn
// let nameR:any = "tae nama"
// nameR = 10
// nameR = true
function formatNumber(number) {
    return number.toFixed(2);
}
let amount = 43.3333;
console.log(formatNumber(amount));
//unknown
let money = "100";
money = 100;
if (typeof money === "number") {
    console.log(formatNumber(money));
}
