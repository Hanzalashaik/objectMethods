const obj={
    firstname:"hanzala",
    lastName:"shaik",
    age:23,
}
console.log(obj);

//it freeze the object so we cannot update or change the object

Object.freeze(obj);

console.log(Object.isFrozen(obj));


obj.age=30;

obj.number=93893293;

console.log(obj);
