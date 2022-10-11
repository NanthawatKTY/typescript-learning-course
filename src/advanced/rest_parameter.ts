const totalRest = (...rest:number[]) => {
    return rest.reduce((acc, cur) => acc + cur, 0)
}

console.log(totalRest(1,2,3,4,5,6,7,8,9,1000));
