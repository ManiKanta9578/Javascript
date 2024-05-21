//singleton => Object.create -> it is a constructor

//object literals

const mySym = Symbol("key1");

const person1 = {
    name: "Manikanta",
    age: 25,
    [mySym]: "myKey1",
    email: "manikanta@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Friday"],
}

console.log(person1.email);
console.log(person1["email"]); //access objects with brackets
console.log(person1[mySym]); //access symbol with brackets

person1.email = "mani@gmail.com";
// Object.freeze(person1);
person1.email = "mk@gmail.com";

// console.log(person1["email"]);

person1.greeting = function () { console.log("Hello user") };
console.log(person1.greeting)
console.log(person1.greeting());


person1.greeting = function () { console.log(`Hello ${this.name}`) };
console.log(person1.greeting)
console.log(person1.greeting());

/* -----------Object.assign() -------------*/
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const obj1 = { d: 6, e: 7 };
const obj2 = { f: 8, g: 9 };

const returendObj = Object.assign(target, source);
const returendObj2 = Object.assign({}, target, source, obj1, obj2);

console.log(target);
console.log(returendObj);
console.log(returendObj2);

//Note: Object.assign() does not throw on null or undefined sources

const v1 = "abc";
const v2 = true;
const v3 = 10;
const v4 = Symbol("foo");

const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
