// Tuple has fixed length and fixed type
// Tuple can has different type.

const point:[x:number, y:number] = [1, 2]
point[0] = 100
point[1] = 200
console.log(point[0]);


//Type HTTP Status Code
type HttpStatusCode = [number, string]

// HTTP Status Code
const goodStatus: HttpStatusCode = [200, 'OK']
const notFoundStatus: HttpStatusCode = [404, 'Not Found']
const badRequestStatus: HttpStatusCode = [400, 'Bad Request']
const serverErrorStatus: HttpStatusCode = [500, 'Internal Server Error']

console.log(serverErrorStatus);
