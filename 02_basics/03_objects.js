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


/* -----------Object.groupBy() -------------*/

const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];

//   const result = Object.groupBy(inventory, ({ type }) => type); //not supproted
//   console.log(result); 

/* -----------Object.is() -------------*/

// Case 1: Evaluation result is the same as using ===
Object.is(25, 25); // true
Object.is("foo", "foo"); // true
Object.is("foo", "bar"); // false
Object.is(null, null); // true
Object.is(undefined, undefined); // true
// Object.is(window, window); // true
Object.is([], []); // false
const foo = { a: 1 };
const bar = { a: 1 };
const sameFoo = foo;
Object.is(foo, foo); // true
Object.is(foo, bar); // false
Object.is(foo, sameFoo); // true

// Case 2: Signed zero
Object.is(0, -0); // false
Object.is(+0, -0); // false
Object.is(-0, -0); // true

// Case 3: NaN
Object.is(NaN, 0 / 0); // true
Object.is(NaN, Number.NaN); // true

// Note1: Object.is() is not equivalent to the == operator. The == operator applies various coercions to both sides (if they are not the same type) before testing for equality (resulting in such behavior as "" == false being true), but Object.is() doesn't coerce either value.

// Note2: Object.is() is also not equivalent to the === operator. The only difference between Object.is() and === is in their treatment of signed zeros and NaN values. The === operator (and the == operator) treats the number values -0 and +0 as equal, but treats NaN as not equal to each other.

const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
  };
  
  console.log(Object.keys(object1));

//   Note: If you need the property values, use Object.values() instead. If you need both the property keys and values, use Object.entries() instead.

/* -----------Object.setPrototypeOf() -------------*/

const obj3 = {};
const parent = { foo: 'bar' };

console.log(obj3.foo);
// Expected output: undefined

Object.setPrototypeOf(obj3, parent);

console.log(obj3.foo);

/* -----------Object.isExtensible() -------------*/

// New objects are extensible.
const empty = {};
Object.isExtensible(empty); // true

// They can be made un-extensible
Object.preventExtensions(empty);
Object.isExtensible(empty); // false

// Sealed objects are by definition non-extensible.
const sealed = Object.seal({});
Object.isExtensible(sealed); // false

// Frozen objects are also by definition non-extensible.
const frozen = Object.freeze({});
Object.isExtensible(frozen); // false
