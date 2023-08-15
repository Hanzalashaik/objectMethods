let obj={
    fname:"hanzala",
    age:22,
    num:383484334
}

// this method convert into a new array 
//and get all the keys names of an object in the array
let store =Object.getOwnPropertyNames(obj);
console.log(store);//[ 'fname', 'age', 'num' ]
