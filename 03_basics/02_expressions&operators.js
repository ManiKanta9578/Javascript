// JavaScript has both binary and unary operators, and one special ternary operator, the conditional operator. 
// A binary operator requires two operands, one before the operator and one after the operator:

// For example, 3 + 4 or x * y. This form is called an infix binary operator, because the operator is placed between two operands. 
// All binary operators in JavaScript are infix.

// A unary operator requires a single operand, either before or after the operator:

// For example, x++ or ++x. The operator operand form is called a prefix unary operator, and the operand operator form is called a postfix unary operator. ++ and -- are the only postfix operators in JavaScript — all other operators, like !, typeof, etc. are prefix.

/* ----------------typeOf -------------------- */


const myFun = new Function("5 + 2");
const shape = "round";
const size = 1;
const foo = ["Apple", "Mango", "Orange"];
const today = new Date();

typeof myFun; // returns "function"
typeof shape; // returns "string"
typeof size; // returns "number"
typeof foo; // returns "object"
typeof today; // returns "object"
typeof doesntExist; // returns "undefined"
typeof null; //returns object

// console.log(typeof window.length);


/* ----------------in -------------------- */

// Arrays
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees; // returns true
3 in trees; // returns true
6 in trees; // returns false
"bay" in trees; // returns false
// (you must specify the index number, not the value at that index)
"length" in trees; // returns true (length is an Array property)

// built-in objects
"PI" in Math; // returns true
const myString = new String("coral");
"length" in myString; // returns true

// Custom objects
const mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar; // returns true
"model" in mycar; // returns true


/* ----------------instanceof -------------------- */

const theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}

console.log(this);