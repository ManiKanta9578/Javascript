(function fun(){
    console.log("Function invoked");
}());

(() => {console.log("Function invoked 2");})(); // it won't invoke utill you have keep semi column in above function

// fun();

