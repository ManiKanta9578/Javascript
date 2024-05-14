const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros);
let concate = marvel_heros.concat(dc_heros);

const all_new_heros = [...marvel_heros, ...dc_heros];

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// console.log(another_array.flat(Infinity));

// console.log(Array.isArray("Mani"))
// console.log(Array.from("Mani"))
// console.log(Array.from({ name: "mani" })) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));


/* -------------- includes() --------------------*/

let arr = [1, 2, 3];

arr.includes(2); // true
arr.includes(4); // false
arr.includes(3, 3); // false
arr.includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
["1", "2", "3"].includes(3);

//Note:1
// If fromIndex is greater than or equal to the length of the array, false is returned. The array will not be searched.
const arr1 = ["a", "b", "c"];

arr1.includes("c", 3); // false
arr1.includes("c", 100); // false

// If fromIndex is less than or equal to 0,the entire array will be searched.
const arr2 = ["a", "b", "c"];

arr2.includes("a", -100); // true
arr2.includes("b", -100); // true
arr2.includes("c", -100); // true
arr2.includes("a", -2); // false


//You can search for undefined in a sparse array and get true.
[1, , 3].includes(undefined); // true
[1, , 3].includes(); // true


// Calling includes() on non-array objects
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 1, // ignored by includes() since length is 3
};
//   console.log(Array.prototype.includes.call(arrayLike, 2));  // true
//   console.log(Array.prototype.includes.call(arrayLike, 1));  // false


/*  keys() */

const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}


/*----------------- map() -----------------*/

// The callback can have side effects.
const cart = [5, 15, 25];
let total = 0;
const withTax = cart.map((cost) => {
  total += cost;
  return cost * 1.2; //increment value will added to total
});
console.log(withTax); // [6, 18, 30]
console.log(total); // 45

/*-------------------------------------------------------------*/
const products = [
  { name: "sports car" },
  { name: "laptop" },
  { name: "phone" },
];
const productsWithPrice = products.map((product) => {
  return { ...product, price: 100 };
});

//   console.log(productsWithPrice);


/* --------------reduce() and reduceRight() ------------------*/
const a = ["1", "2", "3", "4", "5"];
const left = a.reduce((prev, cur) => prev + cur);
const right = a.reduceRight((prev, cur) => prev + cur);

console.log(left); // "12345"
console.log(right); // "54321"

//reduceRight() skips missing elements in sparse arrays, but it does not skip undefined values.
console.log([1, 2, , 4].reduceRight((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduceRight((a, b) => a + b)); // NaN


/*----------- reverse() -----------------*/
const array2 = ['one', 'two', 'three'];

console.log(array2.reverse()); //it changes the original array.
console.log(array2);

//note:In case you want reverse() to not mutate the original array, but return a shallow-copied array like other array methods (e.g. map()) do, use the toReversed() method. Alternatively, you can do a shallow copy before calling reverse(), using the spread syntax or Array.from().


/* ------------------- some() ----------------------*/

const array3 = [2, 5, 18, 1, 4];

console.log(array3.some((ele) => ele > 10));


/* ------------------- sort() ----------------------*/

const months = ['March', 'Jan', 'Feb', 'Dec'];
const nums = [1, 30, 4, 21, 100000];

const compareFun = (a, b) => a - b;
nums.sort();
nums.sort(compareFun);
console.log(nums);

// Note: Using sort() on sparse arrays
// Empty slots are moved to the end of the array.

console.log(["a", "c", , "b"].sort()); // ['a', 'b', 'c', empty]
console.log([, undefined, "a", "b"].sort()); // ["a", "b", undefined, empty]

/* ------------------- toLocaleString() ----------------------*/

const prices = [500, 8123, 12];

console.log(prices.toLocaleString("bn-BD", { style: "currency", currency: "BDT" }));

const number = 123456.789;

console.log(
  new Intl.NumberFormat('bn-BD', { style: 'currency', currency: 'BDT' }).format(number),
);

/* ------------------- value() ----------------------*/

const array4 = ['a', 'b', 'c'];
const iterator2 = array4.values();
for(const val of iterator2){
  console.log(val);
}
for(const val of array4){
  console.log(val);
}

/* ------------------- with() ----------------------*/


const array5 = [1,2,4,5];
console.log(array5.with(2,3)); //cannot change orginal array
console.log(array5);