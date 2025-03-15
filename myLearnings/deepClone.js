function deepClone(obj) {
    // Your Code Here
    if(typeof obj !== "object" || obj === null) return obj;

    let clone = Array.isArray(obj) ? [] : {};

    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            clone[key] = deepClone(obj[key]); // Recursively clone
        }
    }
    return clone
  }
  
  const original = { name: "Alice", details: { age: 25, city: "NY" } };
  const clone = deepClone(original);
  clone.details.city = "LA";
  
  console.log(clone);  // `city` should be "LA"
  console.log(original);  // `city` should remain "NY"
  