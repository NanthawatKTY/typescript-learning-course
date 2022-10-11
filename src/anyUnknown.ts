//Any & UnknowRn

// let nameR:any = "tae nama"
// nameR = 10
// nameR = true

function formatNumber(number:number){
    return number.toFixed(2)
}

let amount:number = 43.3333
console.log(formatNumber(amount))

//unknown
let money:unknown = "100"

money = 100
if (typeof money === "number") {
    console.log(formatNumber(money))
    
}