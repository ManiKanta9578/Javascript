const myArr1 = [1, 2, 3, 4, 5, 6];
const myArr2 = new Array(1, 2, 3, 4, 5, 6);

console.log(myArr1);
//Methods
myArr1.push(8)
myArr1.pop(8)
myArr1.unshift(0);
myArr1.shift();

console.log(myArr1.includes(5));
console.log(myArr1.indexOf(3));

const myArr3 = myArr1.join(); //returns string
const myArr4 = myArr1.join(""); //returns string
const myArr5 = myArr1.join("-"); //returns string

const myArr6 = [];
console.log(myArr6.join()); // returns empty if array is null or undefined

/* ---------------slice & splice -------------------- */
console.log("A ", myArr1);

const myn1 = myArr1.slice(1, 3) //return shallow copy (original array will not be modified).

console.log(myn1);
console.log("B ", myArr1);


const myn2 = myArr1.splice(1, 3) //it modifies original array
console.log("C ", myArr1);
console.log(myn2);


