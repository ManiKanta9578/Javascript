// Note: When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function

// Note: When you pass an array as a parameter, if the function changes any of the array's values, that change is visible outside the function 

const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
};

// console.log(factorial(9)); // 6

function map(fun, arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = fun(arr[i]);
    }
    return result;
}

const cube = function (x) {
    return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
// console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]




//Function hoisting

// Note: This code runs without any error, despite the square() function being called before it's declared. This is because the JavaScript interpreter hoists the entire function declaration to the top of the current scope, so the code above is equivalent to:

console.log(square(5)); // 25

function square(n) {
    return n * n;
}



// Note: Function hoisting only works with function declarations — not with function expressions. The following code will not work:

// console.log(square2(5)); // ReferenceError: Cannot access 'square' before initialization

const square2 = function (n) {
  return n * n;
};


//Recursive call
function fun(i) {
    if (i < 0) {
      return;
    }
    console.log(i);
    fun(i - 1);
    console.log(i);
  }
  // fun(3);
  
  
  function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))


function outside(x){
  function inside(y){
    return x+y;
  }
  return inside;
}

const fnOutside = outside(3);
console.log(fnOutside(5));


//Name conflicts

function outside() {
  const x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

console.log(outside()(10)); // 20 (instead of 10)

//Note: The name conflict happens at the statement return x * 2 and is between inside's parameter x and outside's variable x. The scope chain here is {inside, outside, global object}. Therefore, inside's x takes precedences over outside's x, and 20 (inside's x) is returned instead of 10 (outside's x).

function myConcat(separator) {
  let result = ""; // initialize list
  // iterate through arguments
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}


// console.log(myConcat(", ", "red", "orange", "blue"));

// console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));

// console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));


// Function parameters

// There are two special kinds of parameter syntax: default parameters and rest parameters.
// Default parameters: 
//        In JavaScript, parameters of functions default to undefined.

function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

console.log(multiply(5)); // 5

// Rest parameters:
//        The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]


//this

function chai(){
    let username = "hitesh"
    console.log(this.username);
}

chai() //undefined

const chai2 = function () {
      let username = "hitesh"
      console.log(this.username);
  }
  
  const chai3 =  () => {
      let username = "hitesh"
      console.log(this);
  }
  
  
  chai3()
  

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

