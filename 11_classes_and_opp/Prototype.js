let myName = "Mani    ";
console.log(myName.trueLength);

const myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

heroPower.getSpiderPower();

Object.prototype.mani = function(){
    console.log(`mani is present in all objects`);
}

Array.prototype.heyMani = function(){
    console.log(`Mani says hello`);
}

// heroPower.mani()
// myHeros.mani()
// myHeros.heyMani()
// heroPower.heyMani()

// inheritance


const User = {
    name: "Mani",
    email: "Mani@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

let anotherUsername = "Manikanta     ";

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`The true length is ${this.trim().length}`)
}

anotherUsername.trueLength();
"Mani".trueLength();