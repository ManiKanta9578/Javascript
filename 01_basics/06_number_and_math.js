//Number

let num1 = Number("123")
let num2 = Number(undefined) //NaN
let num3 = Number(null) //0
let num4 = Number(true); //1
let num5 = Number("  "); // empty or white space converted to 0
let num6 = Number("1,000")
// console.log(num6)

let num7 = Number.isFinite(1 / 0); // Expected output: false
let num8 = Number.isFinite(10 / 5); // Expected output: true
let num9 = Number.isFinite(0 / 0); // Expected output: true
let num10 = Number.isFinite("0");

// console.log(num10);

// console.log(Number.EPSILON);
// console.log(Number.MAX_SAFE_INTEGER);

/* --------------------isNaN() ------------------------------*/

let isNan1 = Number.isNaN("blabla");
let isNan2 = isNaN("blabla");

console.log(isNan1);
console.log(isNan2);