//Object.is() this method if 2 vlaues are the same values or not
//Object.is follows === condition

//Non primitive datatypes are not comparable like:array and object

let a1=2;
let a2=2;

console.log(Object.is(a1,a2));//true

let b1=3
let b2="3"

console.log(Object.is(b1,b2));//false
