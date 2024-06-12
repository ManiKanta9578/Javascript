for(let i = 0; i <= 10; i++){
    const ele = i;
    if(ele == 5){
        // console.log("5 is the best number");
    }
    // console.log(ele);
}

for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

let str = "Mani kanta";

for(let i of str){
    //skips the empty space
    if(i == " "){
        continue
    }
    // console.log(i);
}

let myArray = ["flash", "batman", "superman"]

for(let i = 0; i < myArray.length; i++){
    // console.log(myArray[i]);
}

for(let i of myArray){
    // console.log(i);
}

for(let i in myArray){
    // console.log(i);
}


//break and continue

for(let i = 0; i <= 10; i++){
    if(i == 5){
        break
    }
    // console.log(i);
}

for(let i = 0; i <= 10; i++){
    if(i == 5){
        continue
    }
    // console.log(i);
}



