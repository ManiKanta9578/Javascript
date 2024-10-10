//Polyfills for .forEach(), .map(), .filter(), .reduce() in JavaScript

// A piece of code that provide native support to the older browsers who does not have the support of modern functionalities of javascript is known as polyfill.


/*forEach
The forEach() executes the callback function on each element of array.
*/
const names = ["ali", "hamza", "jack"]

function consoleFunc(x) {
   console.log(x);
}

names.forEach(consoleFunc);

//polyfill -> forEach

Array.prototype.ourForEach = function (callback) {
    for(let i = 0; i < this.length - 1; i++){
        callback(this[i]);
    }
}

names.ourforeach(consoleFunc);
//Array.prototype let use run our function on every array this corresponds to the array

// map
// .map() is very much similar to .forEach() method, except, instead of returning items out of the array, it return the array itself
//polyfill -> reduce

Array.prototype.ourMap = function (callback) {
    let newArray = [];
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i]));
    }
}

names.ourMap(consoleFunc);


/* reduce
reduce() function is used to reduce the array to a single value.

not the exact definition, but we will consider this for sake of simplicity */

let numbers = [1,2,3,4,5,6,7];

function reduceFun(accumulator, current){
    accumulator = accumulator + current;
    return accumulator;
}

let sum = numbers.reduce(reduceFun,0);
console.log(sum);

Array.prototype.ourReduce = function(callback, initialValue){
    let accumulator = initialValue === undefined ? this[0] : initialValue;

    for(let i = 0; i < this.length; i++){
        accumulator = callback(accumulator,this[i])
    }
    return accumulator;
}

console.log(numbers.ourReduce(reduceFun,0));

// more reference 
// https://dev.to/umerjaved178/polyfills-for-foreach-map-filter-reduce-in-javascript-1h13