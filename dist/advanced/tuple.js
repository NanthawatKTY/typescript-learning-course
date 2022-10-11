"use strict";
// Tuple has fixed length and fixed type
// Tuple can has different type.
const point = [1, 2];
point[0] = 100;
point[1] = 200;
console.log(point[0]);
// HTTP Status Code
const goodStatus = [200, 'OK'];
const notFoundStatus = [404, 'Not Found'];
const badRequestStatus = [400, 'Bad Request'];
const serverErrorStatus = [500, 'Internal Server Error'];
console.log(serverErrorStatus);
