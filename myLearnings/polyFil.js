//Polyfills for .forEach(), .map(), .filter(), .reduce() in JavaScript

// A piece of code that provide native support to the older browsers who does not have the support of modern functionalities of javascript is known as polyfill.


/* 1. forEach
The forEach() executes the callback function on each element of array.
*/
const names = ["ali", "hamza", "jack"]

function consoleFunc(x) {
    console.log(x);
}

names.forEach(consoleFunc);

//polyfill -> forEach

Array.prototype.ourForEach = function (callback) {
    for (let i = 0; i < this.length - 1; i++) {
        callback(this[i]);
    }
}

names.ourForEach(consoleFunc);
//Array.prototype let use run our function on every array this corresponds to the array

// map
// 2. map() is very much similar to .forEach() method, except, instead of returning items out of the array, it return the array itself
//polyfill -> reduce

// names.map((num, i, arr) => { })

Array.prototype.ourMap = function (callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
}

names.ourMap(consoleFunc);


/* 3. reduce
reduce() function is used to reduce the array to a single value.

not the exact definition, but we will consider this for sake of simplicity */

let numbers = [1, 2, 3, 4, 5, 6, 7];

function reduceFun(accumulator, current) {
    accumulator = accumulator + current;
    return accumulator;
}

let sum = numbers.reduce(reduceFun, 0);
console.log(sum);

Array.prototype.ourReduce = function (callback, initialValue) {
    let accumulator = initialValue === undefined ? this[0] : initialValue;

    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i])
    }
    return accumulator;
}

console.log(numbers.ourReduce(reduceFun, 0));

// more reference 
// https://dev.to/umerjaved178/polyfills-for-foreach-map-filter-reduce-in-javascript-1h13


//-----------------------------------------------------------------------------------------------------------------


//Polyfills for call(), apply(), bind() in JavaScript

// 1. call()

let car1 = {
    color: "black",
    company: "AUDI"
}

function purchaseCar(currency, price) {
    console.log(`I have purchaged ${this.company} and ${this.color} car for ${currency}${price}`);
}

// purchaseCar.call(car1,"$","10000000");

Function.prototype.myCall = function (context = {}, ...args) {
    if (typeof this !== "function") throw new Error(this + "It's not callable");

    context.fn = this;
    context.fn(...args);
}

// purchaseCar.myCall(car1,"$","10000000");


// 2. apply()

Function.prototype.myApply = function (context = {}, args = []) {
    if (typeof this !== "function") throw new Error(this + "It's not callable");

    if (!Array.isArray(args)) throw new Error("CreateListFromArrayLike called on non-object");

    context.fn = this;
    context.fn(...args);
}

purchaseCar.myApply(car1, ["$", "10000000"]);


// 3 bind()

Function.prototype.myBind = function (context = {}, ...args) {
    if (typeof this !== "function") throw new Error("Cannot be bound as It's not callable");

    context.fn = this;
    return function (...newArgs) {
        return context.fn(...args, ...newArgs);
    }
}

let newFun = purchaseCar.bind(car1, "$");
console.log(newFun("200000000"));