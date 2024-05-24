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
console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]




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
  fun(3);
  
  


