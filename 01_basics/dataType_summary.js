// Primitive

// 7 types => String, Number, Boolean, null, undefined, Symbol

const str = 'Mani';
const num = 33;
const num2 = 33.3;

const isLogged = true;

const a = null;
let b;

const id = Symbol("123");
const id_2 = Symbol("123");

// console.log(id == id_2);

const bigNumber = 9876542345678765n;
const bigNumber_2 = 9876542345678765;

// console.log(typeof bigNumber);
// console.log(typeof bigNumber_2);

/*--------------- Reference Non Primitive ---------------- */

// Array, Object, Functions

const arr = ["Apple", "Mango", "Orange"];
const obj = { name: 'Mani', age: 26, status: true };
const fun = function () { console.log("Hello world") };

console.log(typeof arr);
console.log(typeof obj);
console.log(typeof fun);