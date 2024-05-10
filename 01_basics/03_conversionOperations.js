let a = true;

// console.log(typeof a);
let convertValue = Number(a);
// console.log(convertValue);
// console.log(typeof convertValue);

//observation of converting to Number
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = undefined;

let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);

// "Mani" => true
// "" => false
// null => false
// undefined => false


/**********************  Operators ******************** */

let x = 3;
// console.log(x)
const y = ++x;
// console.log(x,y)

let x2 = 3n;
const y2 = ++x2;
// console.log(x2,y2)

console.log(3 + 3 + "3")
console.log("3" + 3 + 3)