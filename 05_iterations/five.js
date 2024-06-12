const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach((item) => console.log(item));

const values = coding.forEach((item) => {
    return item; //return undefined
})

console.log(values);

const printMe = (item) => {
    // console.log(item);
}

coding.forEach(printMe);

coding.forEach((item, index, arr) => {
    // console.log(`${index} => ${item} → ${arr}`);
})


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    // console.log(item.languageName);
})