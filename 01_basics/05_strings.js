/*--------  at() ---------*/
const sentence = 'The quick brown fox jumps over the lazy dog.';
let index = 5;
let idx = -2;

// console.log(` Index of ${index}  the charchter ${sentence.at(index)}`);
// console.log(` Index of ${idx}  the charchter ${sentence.at(idx)}`); //accepts negative indexes

/*--------  charAt() ---------*/

// console.log(`An index of ${" "} returns the charchter ${sentence.charAt()}`);
//if we didn't pass any index then by default it returns 0th index.

// console.log(` Index of ${idx}  the charchter ${sentence.charAt(idx)}`);  // returns  empty string because do not accepts negative values
// console.log(sentence.length - 1);  //output => 43

//Note: The at() method is a new addition to JavaScript. It allows the use of negative indexes while charAt() do not.

// const str = "𠮷𠮾";
// console.log(str.charAt(0)); // "\ud842", which is not a valid Unicode character 
// console.log(str.charAt(1)); // "\udfb7", which is not a valid Unicode character

// console.log(String.fromCodePoint(str.codePointAt(0)));

/*----------concate ----------- */
const hello = "Hello, ";
// console.log(hello.concat("Kevin", ". Have a nice day."));
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
/*
console.log(strIncludes.includes("To be")); // true
console.log(strIncludes.includes("question")); // true
console.log(strIncludes.includes("nonexistent")); // false
console.log(strIncludes.includes("To be", 1)); // false
console.log(strIncludes.includes("TO BE")); // false
console.log(strIncludes.includes("")); // true
*/
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

/*-------------------------lastIndexOf() -------------------------------- */
"canal".lastIndexOf("a"); // returns 3
"canal".lastIndexOf("a", 2); // returns 1
"canal".lastIndexOf("a", 0); // returns -1
"canal".lastIndexOf("x"); // returns -1
"canal".lastIndexOf("c", -5); // returns 0
"canal".lastIndexOf("c", 0); // returns 0
"canal".lastIndexOf(""); // returns 5
"canal".lastIndexOf("", 2); // returns 2

//Using indexOf() and lastIndexOf()
// const anyString = "Brave, Brave New World";

// console.log(anyString.indexOf("Brave")); // 0
// console.log(anyString.lastIndexOf("Brave")); // 7

//Note => The lastIndexOf() method is case sensitive.

/*--------------------------match() -----------------------------------------*/

// const str2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// const regexp = /[A-E]/gi;
// const matches = str2.match(regexp);

// console.log(matches);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']


/*--------------------------padEnd() -----------------------------------------*/

"abc".padEnd(10); // "abc       "
"abc".padEnd(10, "foo"); // "abcfoofoof"
"abc".padEnd(6, "123456"); // "abc123"
"abc".padEnd(1); // "abc"

// Note => If the value is less than or equal to str.length, the current string will be returned as-is.


/*--------------------------padStart() -----------------------------------------*/

"abc".padStart(10); // "       abc"
"abc".padStart(10, "foo"); // "foofoofabc"
"abc".padStart(6, "123465"); // "123abc"
"abc".padStart(8, "0"); // "00000abc"
"abc".padStart(1); // "abc"


/*--------------------------repeat() -----------------------------------------*/

// "abc".repeat(-1); // RangeError
// "abc".repeat(0); // ''
// "abc".repeat(1); // 'abc'
// "abc".repeat(2); // 'abcabc'
// "abc".repeat(3.9); // 'abcabcabc' (count will be converted to integer)
// "abc".repeat(1 / 0); // RangeError

// ({ toString: () => "abc", repeat: String.prototype.repeat }).repeat(2);
// 'abcabc' (repeat() is a generic method)

/*--------------------------slice() -----------------------------------------*/

const str1 = "The morning is upon us."; // The length of str1 is 23.
const str2 = str1.slice(1, 8);
const str3 = str1.slice(4, -2);
const str4 = str1.slice(12);
const str5 = str1.slice(30);
// console.log(str2); // he morn
// console.log(str3); // morning is upon u
// console.log(str4); // is upon us.
// console.log(str5); // ""

/*--------------------------split() -----------------------------------------*/

// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words[3]);
// // Expected output: "fox"

// const chars = str.split('');
// console.log(chars[8]);
// // Expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// // Expected output: Array ["The quick brown fox jumps over the lazy dog."]


/*--------------------------startsWith() -----------------------------------------*/

// const str = "To be, or not to be, that is the question.";

// console.log(str.startsWith("To be")); // true
// console.log(str.startsWith("not to be")); // false
// console.log(str.startsWith("not to be", 10)); // true


/*--------------------------substring() -----------------------------------------*/

// Syntax => substring(indexStart)
//           substring(indexStart, indexEnd)

// const anyString = "Mozilla";

// console.log(anyString.substring(0, 1)); // "M"
// console.log(anyString.substring(1, 0)); // "M"

// console.log(anyString.substring(0, 6)); // "Mozill"

// console.log(anyString.substring(4)); // "lla"
// console.log(anyString.substring(4, 7)); // "lla"
// console.log(anyString.substring(7, 4)); // "lla"

// console.log(anyString.substring(0, 7)); // "Mozilla"
// console.log(anyString.substring(0, 10)); // "Mozilla"

/*--------------------------valueOf() -----------------------------------------*/

// const strObj = new String("foo");
// console.log(strObj);
// console.log(strObj.valueOf());


/*--------------------------.length() -----------------------------------------*/

const str = 'Life, the universe and everything. Answer:';

console.log(`${str} ${str.length}`);