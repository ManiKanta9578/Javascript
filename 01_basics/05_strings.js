/*--------  at() ---------*/
const sentence = 'The quick brown fox jumps over the lazy dog.';
let index = 5;
let idx = -2;

console.log(` Index of ${index}  the charchter ${sentence.at(index)}`);
console.log(` Index of ${idx}  the charchter ${sentence.at(idx)}`); //accepts negative indexes

/*--------  charAt() ---------*/

console.log(`An index of ${" "} returns the charchter ${sentence.charAt()}`);
//if we didn't pass any index then by default it returns 0 index.

console.log(` Index of ${idx}  the charchter ${sentence.charAt(idx)}`);  // returns  empty string because do not accepts negative values
console.log(sentence.length - 1);  //output => 43

//Note: The at() method is a new addition to JavaScript. It allows the use of negative indexes while charAt() do not.

const str = "𠮷𠮾";
console.log(str.charAt(0)); // "\ud842", which is not a valid Unicode character 
console.log(str.charAt(1)); // "\udfb7", which is not a valid Unicode character

console.log(String.fromCodePoint(str.codePointAt(0)));

/*----------concate ----------- */
const hello = "Hello, ";
console.log(hello.concat("Kevin", ". Have a nice day."));
// Hello, Kevin. Have a nice day.

const greetList = ["Hello", " ", "Venkat", "!"];
"".concat(...greetList); // "Hello Venkat!"

"".concat({}); // "[object Object]"
"".concat([]); // ""
"".concat(null); // "null"
"".concat(true); // "true"
"".concat(4, 5); // "45"

/*----------includes() ----------- */
const strIncludes = "To be, or not to be, that is the question.";

console.log(strIncludes.includes("To be")); // true
console.log(strIncludes.includes("question")); // true
console.log(strIncludes.includes("nonexistent")); // false
console.log(strIncludes.includes("To be", 1)); // false
console.log(strIncludes.includes("TO BE")); // false
console.log(strIncludes.includes("")); // true

/*----------indexOf() ----------- */
"Blue Whale".indexOf("Blue"); // returns  0
"Blue Whale".indexOf("Blute"); // returns -1
"Blue Whale".indexOf("Whale", 0); // returns  5
"Blue Whale".indexOf("Whale", 5); // returns  5
"Blue Whale".indexOf("Whale", 7); // returns -1
"Blue Whale".indexOf(""); // returns  0
"Blue Whale".indexOf("", 9); // returns  9
"Blue Whale".indexOf("", 10); // returns 10
"Blue Whale".indexOf("", 11); // returns 10

/*----------lastIndexOf() ----------- */
"canal".lastIndexOf("a"); // returns 3
"canal".lastIndexOf("a", 2); // returns 1
"canal".lastIndexOf("a", 0); // returns -1
"canal".lastIndexOf("x"); // returns -1
"canal".lastIndexOf("c", -5); // returns 0
"canal".lastIndexOf("c", 0); // returns 0
"canal".lastIndexOf(""); // returns 5
"canal".lastIndexOf("", 2); // returns 2

//Using indexOf() and lastIndexOf()
const anyString = "Brave, Brave New World";

console.log(anyString.indexOf("Brave")); // 0
console.log(anyString.lastIndexOf("Brave")); // 7

//Note => The lastIndexOf() method is case sensitive.
