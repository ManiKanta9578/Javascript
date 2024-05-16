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
