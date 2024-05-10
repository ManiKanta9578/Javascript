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

// console.log(typeof arr);
// console.log(typeof obj);
// console.log(typeof fun);

/* ------------------- Stack and Heap ----------------------- */

// types of memory allocation => stack and Heap

// Primitive values stored in stack and Non Primitive values stored in Heap

let name_1 = "Manikanta";
let name_2 = name_1;

name_2 = "Mani";

console.log(name_1);
console.log(name_2);  // Primitive values won't change in original values it will give copy of value

const person = {
    email: "manikanta@gmail.com",
    mobile: 987654321
}

const person_1 = person;

person_1.email = 123456789;

console.log(person)
console.log(person_1); // Non primitive values are change in original values