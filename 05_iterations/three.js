//for of

["", "", ""]
[{}, {}, {}]

const arr = [1,2,3,4,5,6];

for(let num of arr){
    console.log(num);
}

const greeting = "Hello world!";

for(let char of greeting){
    if(char == " "){
        continue
    }
    // console.log(char);
}

//map

const map = new Map();

map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('EU', 'European Union')
map.set('UK', 'United Kingdom')
map.set('FR', 'France')

for(const [key, value] of map){
    // console.log(`${key} => ${value}`);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for(const [key, value] of myObject){
    console.log(`${key} => ${value}`);
}