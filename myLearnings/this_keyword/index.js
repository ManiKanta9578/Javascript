"use strict";

//this in global space
console.log(this);

// this inside a function

function x(){
    console.log(this) //the value depends on strict / non strict mode
}

// this inside non-strict mode - (this substitute)

// if the value of this keyword is undefined or null
// this keyword will be replace with globalObject
// only in non strict mode

// this ketword value depends on how the function is called x()

x(); //undefined
window.x() // window

const student = {
    name:"mani",
    printName: function(){
        console.log(this);
    }
}

student.printName();

const student2 = {
    name:"Manikanta"
}

//call, apply, bind methods (sharing methods)
student.printName.call(student2);

// this inside arrow function
const obj = {
    a:10,
    x:() => {
        console.log(this);
    }
}

obj.x();

// this inside nested arrow function

const obj2 = {
    a:20,
    x:function(){
        //enclosing lexical context
        const y = () => {
            console.log(this);
        }
        y();
    }
}

obj2.x();

// this inside DOM elements => reference to HTMLelement 