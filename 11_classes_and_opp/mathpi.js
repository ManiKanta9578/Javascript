const descripter = Object.getOwnPropertyDescriptors(Math, 'PI');

// console.log(descripter);

// console.log(Math.PI);

Math.PI = 5;

console.log(Math.PI);

const userName = {
    name: 'Manikanta',
    age: 27,
    isLoggedIn: false,

    getUserName() {
        console.log(`UserName is ${this.name}`);
    }
}

console.log(Object.getOwnPropertyDescriptors(userName, 'name'));

Object.defineProperty(userName, 'name', { writable: false });

console.log(Object.getOwnPropertyDescriptors(userName, 'name'));

for (const [key, value] of Object.entries(userName)) {
    if (typeof value !== 'function') {
        console.log(key, value);
    }
}